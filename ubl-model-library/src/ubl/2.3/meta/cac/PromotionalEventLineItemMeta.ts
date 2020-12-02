import { FieldMeta } from '../FieldMeta'

export enum PromotionalEventLineItemField {
  UBLExtensions = 'UBLExtensions',
  Amount = 'Amount',
  EventLineItem = 'EventLineItem'
}

export const PromotionalEventLineItemFieldMetaUBLExtensions = new FieldMeta<PromotionalEventLineItemField>(
  PromotionalEventLineItemField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const PromotionalEventLineItemFieldMetaAmount = new FieldMeta<PromotionalEventLineItemField>(
  PromotionalEventLineItemField.Amount,
  'Amount',
  'Amount',
  'Amount',
  'The amount associated with this promotional event line item.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const PromotionalEventLineItemFieldMetaEventLineItem = new FieldMeta<PromotionalEventLineItemField>(
  PromotionalEventLineItemField.EventLineItem,
  'EventLineItem',
  'Event Line Item',
  'EventLineItem',
  'A line item describing the expected impacts associated with this promotional event for a specific product at a specific location.',
  '1',
  'cac',
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
