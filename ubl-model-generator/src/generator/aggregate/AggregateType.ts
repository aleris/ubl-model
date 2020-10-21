import {
  extractTypeName,
  formatComment
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
    const imports = this.getImports(contextModule)
    return `${imports}/**${
      formatComment(' * ', this.documentation.definition)
    }
 */
export interface ${this.typeName} {
${this.fields.map(field => field.asCodeString()).join('\n\n')}
}
`
  }

  private getImports(contextModule: UblModule, contextPath: string = '') {
    const importFields = this.getImportFields()
    const imports = importFields.length == 0
      ? ''
      : `${importFields.map(field => field.asImportString(contextModule, contextPath)).join('\n')}\n\n`
    return imports
  }

  asMetaCodeString(contextModule: UblModule) {
    return `import { FieldMeta } from '../../FieldMeta'

export enum ${this.typeName}Field {
${this.fields.map(field => `  ${field.fieldName} = '${field.fieldName}'`).join(',\n')}
}

${this.fields.map(field => field.asFieldMetaCodeString(this.typeName)).join('\n\n')}

export class ${this.typeName}FieldMeta {
${this.fields.map(field => `  public static readonly ${field.fieldName} = ${this.typeName}FieldMeta${field.fieldName}`).join('\n')}
}

export const ${this.typeName}FieldMap = new Map([
${this.fields.map(field => `  [${this.typeName}Field.${field.fieldName}, ${this.typeName}FieldMeta${field.fieldName}]`).join(',\n')}
])
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
