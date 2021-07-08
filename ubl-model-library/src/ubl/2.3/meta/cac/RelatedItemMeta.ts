import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum RelatedItemField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Quantity = 'Quantity',
  Description = 'Description'
}

export const RelatedItemFieldMetaUBLExtensions = new FieldMeta<RelatedItemField>(
  RelatedItemField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const RelatedItemFieldMetaID = new FieldMeta<RelatedItemField>(
  RelatedItemField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for the related item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'First , Second'
)

export const RelatedItemFieldMetaQuantity = new FieldMeta<RelatedItemField>(
  RelatedItemField.Quantity,
  'Quantity',
  'Quantity',
  QuantityType.name,
  'The quantity that applies to the relationship.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '6 , 10mg per Kilo'
)

export const RelatedItemFieldMetaDescription = new FieldMeta<RelatedItemField>(
  RelatedItemField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the relationship.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
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

export const RelatedItemType: Type<RelatedItemField> = {
  name: 'RelatedItem',
  label: 'Related Item',
  module: TypeModule.cac,
  definition: 'A class to describe the relationship to an item different from the item associated with the item line in which RelatedItem is used.',
  fields: RelatedItemFieldMap,
}
