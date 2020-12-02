import { FieldMeta } from '../FieldMeta'

export enum RelatedItemField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Quantity = 'Quantity',
  Description = 'Description'
}

export const RelatedItemFieldMetaUBLExtensions = new FieldMeta<RelatedItemField>(
  RelatedItemField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const RelatedItemFieldMetaID = new FieldMeta<RelatedItemField>(
  RelatedItemField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the related item.',
  '0..1',
  'cbc',
  undefined,
  'First , Second'
)

export const RelatedItemFieldMetaQuantity = new FieldMeta<RelatedItemField>(
  RelatedItemField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The quantity that applies to the relationship.',
  '0..1',
  'cbc',
  undefined,
  '6 , 10mg per Kilo'
)

export const RelatedItemFieldMetaDescription = new FieldMeta<RelatedItemField>(
  RelatedItemField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the relationship.',
  '0..n',
  'cbc',
  undefined,
  'If used in wet conditions or extreme environments'
)

export class RelatedItemFieldMeta {
  public static readonly UBLExtensions = RelatedItemFieldMetaUBLExtensions
  public static readonly ID = RelatedItemFieldMetaID
  public static readonly Quantity = RelatedItemFieldMetaQuantity
  public static readonly Description = RelatedItemFieldMetaDescription
}

export const RelatedItemFieldMap = new Map([
  [RelatedItemField.UBLExtensions, RelatedItemFieldMetaUBLExtensions],
  [RelatedItemField.ID, RelatedItemFieldMetaID],
  [RelatedItemField.Quantity, RelatedItemFieldMetaQuantity],
  [RelatedItemField.Description, RelatedItemFieldMetaDescription]
])
