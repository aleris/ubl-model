import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ItemType } from './ItemMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum CriterionItemField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  TypeCode = 'TypeCode',
  CriterionDescription = 'CriterionDescription',
  DeclaredPropertyItem = 'DeclaredPropertyItem'
}

export const CriterionItemFieldMetaUBLExtensions = new FieldMeta<CriterionItemField>(
  CriterionItemField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CriterionItemFieldMetaID = new FieldMeta<CriterionItemField>(
  CriterionItemField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this criteria',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CriterionItemFieldMetaTypeCode = new FieldMeta<CriterionItemField>(
  CriterionItemField.TypeCode,
  'TypeCode',
  'Type Code',
  CodeType.name,
  'A code describing the type of criteria',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CriterionItemFieldMetaCriterionDescription = new FieldMeta<CriterionItemField>(
  CriterionItemField.CriterionDescription,
  'CriterionDescription',
  'Criterion Description',
  TextType.name,
  'The criteria for this item, expressed as a text',
  FieldCardinality.Multi,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CriterionItemFieldMetaDeclaredPropertyItem = new FieldMeta<CriterionItemField>(
  CriterionItemField.DeclaredPropertyItem,
  'DeclaredPropertyItem',
  'Declared Property Item',
  ItemType.name,
  'The item associated with this criteria',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export class CriterionItemFieldMeta {
  public static readonly UBLExtensions = CriterionItemFieldMetaUBLExtensions
  public static readonly ID = CriterionItemFieldMetaID
  public static readonly TypeCode = CriterionItemFieldMetaTypeCode
  public static readonly CriterionDescription = CriterionItemFieldMetaCriterionDescription
  public static readonly DeclaredPropertyItem = CriterionItemFieldMetaDeclaredPropertyItem
}

export const CriterionItemFieldMap = new Map([
  [CriterionItemField.UBLExtensions, CriterionItemFieldMetaUBLExtensions],
  [CriterionItemField.ID, CriterionItemFieldMetaID],
  [CriterionItemField.TypeCode, CriterionItemFieldMetaTypeCode],
  [CriterionItemField.CriterionDescription, CriterionItemFieldMetaCriterionDescription],
  [CriterionItemField.DeclaredPropertyItem, CriterionItemFieldMetaDeclaredPropertyItem]
])

export const CriterionItemType: Type<CriterionItemField> = {
  name: 'CriterionItem',
  label: 'Criterion Item',
  module: TypeModule.cac,
  definition: 'A class describing a criteria',
  fields: CriterionItemFieldMap,
}
