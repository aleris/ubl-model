import { FieldMeta } from '../../FieldMeta'

export enum PromotionalEventLineItemField {
  Amount = 'Amount',
  EventLineItem = 'EventLineItem'
}

export const PromotionalEventLineItemFieldMetaAmount = new FieldMeta<PromotionalEventLineItemField>(
  PromotionalEventLineItemField.Amount,
  'Amount',
  'Amount',
  'Amount',
  'The amount associated with this promotional event line item.',
  '1',
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
  undefined,
  undefined
)

export class PromotionalEventLineItemFieldMeta {
  public static readonly Amount = PromotionalEventLineItemFieldMetaAmount
  public static readonly EventLineItem = PromotionalEventLineItemFieldMetaEventLineItem
}

export const PromotionalEventLineItemFieldMap = new Map([
  [PromotionalEventLineItemField.Amount, PromotionalEventLineItemFieldMetaAmount],
  [PromotionalEventLineItemField.EventLineItem, PromotionalEventLineItemFieldMetaEventLineItem]
])
