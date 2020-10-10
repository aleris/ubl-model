import {
  extractTypeName,
  formatLongComment,
  MAX_LINE_LENGTH
} from '../type-gen-utils'
import { Documentation } from '../Documentation'
import { PrefixedName } from '../PrefixedName'
import { AggregateField } from './AggregateField'
import { TypeResolver } from '../TypeResolver'
import { UblModule } from '../UblModule'

export class AggregateType {
  public readonly typeName: string

  constructor(
    private readonly typeResolver: TypeResolver,
    public readonly name: string,
    public readonly documentation: Documentation,
    public readonly fields: Array<AggregateField>
  ) {
    const nameWithoutPrefix = PrefixedName.extractNameWithoutPrefix(this.name)
    this.typeName = extractTypeName(nameWithoutPrefix)
  }

  static isWholeType(jsonNode: any) {
    return jsonNode['xsd:sequence'] !== undefined
  }

  static fromJsonNode(typeResolver: TypeResolver, jsonNode: any, defaultTypePrefix: string | undefined) {
    const fieldNodes = jsonNode['xsd:sequence']?.[0]?.['xsd:element'] as Array<any> | undefined
    const fields = fieldNodes === undefined
      ? []
      : fieldNodes.map((fieldNode: any) => AggregateField.fromJsonNode(typeResolver, fieldNode, defaultTypePrefix))
    return new AggregateType(
      typeResolver,
      jsonNode.$['name'],
      Documentation.fromTypeJsonNode(jsonNode),
      fields
    )
  }

  asCodeString(contextModule: UblModule) {
    const importFields = this.getImportFields()
    const imports = importFields.length == 0
      ? ''
      : `${importFields.map(field => field.asImportString(contextModule)).join('\n')}\n\n`
    return `${imports}/**${
      formatLongComment(' * ', MAX_LINE_LENGTH, this.documentation.definition)
    }
 */
export interface ${this.typeName} {
${this.fields.map(field => field.asCodeString()).join('\n\n')}
}
`
  }

  private getImportFields() {
    const withoutSelf = this.fields.filter(field => field.resolvedType.name !== this.typeName)
    const withTypeKey = withoutSelf.map(field => ({ type: field.resolvedType.name, field }))
    const sorted = withTypeKey.sort(
      (a, b) => a.type.localeCompare(b.type)
    )
    const unique = new Map(sorted.map(fieldWithType => [fieldWithType.type, fieldWithType.field]))
    return Array.from(unique.values())
  }
}
