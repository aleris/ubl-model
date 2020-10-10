import {
  formatLongComment,
  MAX_LINE_LENGTH
} from '../type-gen-utils'
import { Documentation } from '../Documentation'
import { PrefixedName } from '../PrefixedName'
import { TypeResolver } from '../TypeResolver'
import { UblModule } from '../UblModule'

export class AggregateField {
  public readonly resolvedType: PrefixedName

  constructor(
    private readonly typeResolver: TypeResolver,
    public readonly ref: string,
    public readonly minOccur: string,
    public readonly maxOccurs: string,
    public readonly documentation: Documentation
  ) {
    this.resolvedType = this.typeResolver.resolveTypeByPrefixedName(new PrefixedName(this.ref))
  }

  static fromJsonNode(typeResolver: TypeResolver, jsonNode: any, defaultTypePrefix: string | undefined) {
    const ref = jsonNode.$['ref']
    const prefixedRef = defaultTypePrefix === undefined || ref.indexOf(':') !== -1 ? ref : `${defaultTypePrefix}:${ref}`

    return new AggregateField(
      typeResolver,
      prefixedRef,
      jsonNode.$['minOccurs'],
      jsonNode.$['maxOccurs'],
      Documentation.fromTypeJsonNode(jsonNode)
    )
  }

  asImportString(contextModule: UblModule) {
    const prefix = this.resolvedType.prefix
    const type = this.resolvedType.name

    if (prefix === contextModule) {
      return `import { ${type} } from './${type}'`
    } else {
      return `import { ${type} } from '../${prefix}/${type}'`
    }
  }

  asCodeString() {
    const fieldName = PrefixedName.extractNameWithoutPrefix(this.ref)
    const typeAsArray = this.maxOccurs === '1' ? `[${this.resolvedType.name}]` : `Array<${this.resolvedType.name}>`
    const optional = this.minOccur === '0' ? ' | undefined' : ''
    const cardinality = this.getCardinalityWithFallback()
    return `  /**${
      formatLongComment('   * ', MAX_LINE_LENGTH, this.documentation.definition)
    }${
      formatLongComment('   * ', MAX_LINE_LENGTH, this.documentation.representationTerm)
    }
   * Cardinality: ${
      cardinality
    }${
      formatLongComment('   * Alternative business terms: ', MAX_LINE_LENGTH, this.documentation.alternativeBusinessTerms)
    }${
      formatLongComment('   * Examples: ', MAX_LINE_LENGTH, this.documentation.examples)
    }
   */
  ${fieldName}: ${typeAsArray}${optional}`
  }

  private getCardinalityWithFallback() {
    if (this.documentation.cardinality !== undefined) {
      return this.documentation.cardinality
    }

    const max = this.maxOccurs === 'unbounded' ? 'n' : this.maxOccurs
    return `${this.minOccur}..${max}`
  }
}
