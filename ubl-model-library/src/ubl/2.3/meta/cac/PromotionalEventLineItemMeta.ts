import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { EventLineItemType } from './EventLineItemMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PromotionalEventLineItemField {
  UBLExtensions = 'UBLExtensions',
  Amount = 'Amount',
  EventLineItem = 'EventLineItem'
}

export const PromotionalEventLineItemFieldMetaUBLExtensions = new FieldMeta<PromotionalEventLineItemField>(
  PromotionalEventLineItemField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PromotionalEventLineItemFieldMetaAmount = new FieldMeta<PromotionalEventLineItemField>(
  PromotionalEventLineItemField.Amount,
  'Amount',
  'Amount',
  AmountType.name,
  'The amount associated with this promotional event line item.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PromotionalEventLineItemFieldMetaEventLineItem = new FieldMeta<PromotionalEventLineItemField>(
  PromotionalEventLineItemField.EventLineItem,
  'EventLineItem',
  'Event Line Item',
  EventLineItemType.name,
  'A line item describing the expected impacts associated with this promotional event for a specific product at a specific location.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export class PromotionalEventLineItemFieldMeta {
  public static readonly UBLExtensions = PromotionalEventLineItemFieldMetaUBLExtensions
  public static readonly Amount = PromotionalEventLineItemFieldMetaAmount
  public static readonly EventLineItem = PromotionalEventLineItemFieldMetaEventLineItem
}

export const PromotionalEventLineItemFieldMap = new Map([
  [PromotionalEventLineItemField.UBLExtensions, PromotionalEventLineItemFieldMetaUBLExtensions],
  [PromotionalEventLineItemField.Amount, PromotionalEventLineItemFieldMetaAmount],
  [PromotionalEventLineItemField.EventLineItem, PromotionalEventLineItemFieldMetaEventLineItem]
])

export const PromotionalEventLineItemType: Type<PromotionalEventLineItemField> = {
  name: 'PromotionalEventLineItem',
  label: 'Promotional Event Line Item',
  module: TypeModule.cac,
  definition: 'A class to describe a line item associated with a promotional event.',
  fields: PromotionalEventLineItemFieldMap,
}
