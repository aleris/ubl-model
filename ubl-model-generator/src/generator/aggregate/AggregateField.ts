import {
  formatComment,
  getMinOccurOptionalProps, singleQuoteEscape
} from '../type-gen-utils'
import { Documentation } from '../Documentation'
import { PrefixedName } from '../PrefixedName'
import { TypeResolver } from '../TypeResolver'
import { UblModule } from '../UblModule'

export class AggregateField {
  public readonly fieldName: String
  public readonly resolvedType: PrefixedName

  constructor(
    private readonly typeResolver: TypeResolver,
    public readonly ref: string,
    public readonly minOccur: string,
    public readonly maxOccurs: string,
    public readonly documentation: Documentation
  ) {
    this.fieldName = PrefixedName.extractNameWithoutPrefix(ref)
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

  asImportString(contextModule: UblModule, contextPath: string = '') {
    const prefix = this.resolvedType.prefix
    const type = this.resolvedType.name

    if (prefix === contextModule) {
      return `import { ${type} } from './${contextPath}${type}'`
    } else {
      return `import { ${type} } from '../${contextPath}${prefix}/${type}'`
    }
  }

  asCodeString() {
    const typeAsArray = this.maxOccurs === '1' ? `[${this.resolvedType.name}]` : `Array<${this.resolvedType.name}>`
    const { optionalField, optionalUndefined } = getMinOccurOptionalProps(this.minOccur)
    const cardinality = this.getCardinalityWithFallbackToOccur()
    return `  /**${
      formatComment('   * ', this.documentation.definition)
    }${
      formatComment('   * ', this.documentation.representationTerm)
    }
   * Cardinality: ${
      cardinality
    }${
      formatComment('   * Alternative business terms: ', this.documentation.alternativeBusinessTerms)
    }${
      formatComment('   * Examples: ', this.documentation.examples)
    }
   */
  ${this.fieldName}${optionalField}: ${typeAsArray}${optionalUndefined}`
  }

  asFieldMetaCodeString(containingTypeName: String) {
    return `export const ${containingTypeName}FieldMeta${this.fieldName} = new FieldMeta<${containingTypeName}Field>(
  ${containingTypeName}Field.${this.fieldName},
  '${this.fieldName}',
  '${this.getPropertyTermWithFallbackToName()}',
  '${this.resolvedType.name}',
  ${singleQuoteEscape(this.documentation.definition)},
  '${this.getCardinalityWithFallbackToOccur()}',
  ${this.documentation.alternativeBusinessTerms ? singleQuoteEscape(this.documentation.alternativeBusinessTerms) : 'undefined'},
  ${this.documentation.examples ? singleQuoteEscape(this.documentation.examples) : 'undefined'}
)`
  }

  private getCardinalityWithFallbackToOccur() {
    if (this.documentation.cardinality !== undefined) {
      return this.documentation.cardinality
    }

    const max = this.maxOccurs === 'unbounded' ? 'n' : this.maxOccurs
    return `${this.minOccur}..${max}`
  }

  private getPropertyTermWithFallbackToName() {
    if (this.documentation.propertyTerm !== undefined) {
      return this.documentation.propertyTerm
    }
    return this.documentation.propertyTermName
  }
}
