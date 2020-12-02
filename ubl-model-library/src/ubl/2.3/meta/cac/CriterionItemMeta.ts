import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const CriterionItemFieldMetaID = new FieldMeta<CriterionItemField>(
  CriterionItemField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this criteria',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CriterionItemFieldMetaTypeCode = new FieldMeta<CriterionItemField>(
  CriterionItemField.TypeCode,
  'TypeCode',
  'Type Code',
  'Code',
  'A code describing the type of criteria',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CriterionItemFieldMetaCriterionDescription = new FieldMeta<CriterionItemField>(
  CriterionItemField.CriterionDescription,
  'CriterionDescription',
  'Criterion Description',
  'Text',
  'The criteria for this item, expressed as a text',
  '1..n',
  'cbc',
  undefined,
  undefined
)

export const CriterionItemFieldMetaDeclaredPropertyItem = new FieldMeta<CriterionItemField>(
  CriterionItemField.DeclaredPropertyItem,
  'DeclaredPropertyItem',
  'Declared Property Item',
  'Item',
  'The item associated with this criteria',
  '1',
  'cac',
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
