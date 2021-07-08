import { mapCardinalityToEnum, singleQuoteEscape } from '../type-gen-utils'
import { mapModuleToEnum } from '../UblModule'
import { AggregateField } from './AggregateField'
import { AggregateType } from './AggregateType'
import { FieldGenerator } from './FieldGenerator'

export class MetaFieldGenerator extends FieldGenerator {

  asImportString(type: AggregateType, fieldType: AggregateField, typeSuffix: string, fileSuffix: string): string {
    const prefix = fieldType.resolvedType.prefix
    const fieldTypeName = fieldType.resolvedType.name

    if (prefix === type.module) {
      return `import { ${fieldTypeName}${typeSuffix} } from './${fieldTypeName}${fileSuffix}'`
    } else {
      return `import { ${fieldTypeName}${typeSuffix} } from '../${prefix}/${fieldTypeName}${fileSuffix}'`
    }
  }

  asCodeString(type: AggregateType, fieldType: AggregateField): string {
    const containingTypeName = type.typeName
    return `export const ${containingTypeName}FieldMeta${fieldType.fieldName} = new FieldMeta<${containingTypeName}Field>(
  ${containingTypeName}Field.${fieldType.fieldName},
  '${fieldType.fieldName}',
  '${fieldType.propertyTermWithFallbackToName}',
  ${fieldType.resolvedType.name}Type.name,
  ${singleQuoteEscape(fieldType.documentation.definition)},
  ${mapCardinalityToEnum(fieldType.cardinalityWithFallbackToOccur)},
  ${mapModuleToEnum(fieldType.resolvedType.prefix)},
  ${fieldType.documentation.alternativeBusinessTerms ? singleQuoteEscape(fieldType.documentation.alternativeBusinessTerms) : 'undefined'},
  ${fieldType.documentation.examples ? singleQuoteEscape(fieldType.documentation.examples) : 'undefined'}
)`
  }
}
