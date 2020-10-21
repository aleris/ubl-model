import { FieldMeta } from '../../FieldMeta'

export enum PromotionalSpecificationField {
  SpecificationID = 'SpecificationID',
  PromotionalEventLineItem = 'PromotionalEventLineItem',
  EventTactic = 'EventTactic'
}

export const PromotionalSpecificationFieldMetaSpecificationID = new FieldMeta<PromotionalSpecificationField>(
  PromotionalSpecificationField.SpecificationID,
  'SpecificationID',
  'Specification Identifier',
  'Identifier',
  'An identifier for this promotional specification.',
  '0..1',
  undefined,
  undefined
)

export const PromotionalSpecificationFieldMetaPromotionalEventLineItem = new FieldMeta<PromotionalSpecificationField>(
  PromotionalSpecificationField.PromotionalEventLineItem,
  'PromotionalEventLineItem',
  'Promotional Event Line Item',
  'PromotionalEventLineItem',
  'A line item for a promotional event involving a specific product at a specific location; it describes the expected impacts associated with the event and specifies the promotional price of the item."',
  '1..n',
  undefined,
  undefined
)

export const PromotionalSpecificationFieldMetaEventTactic = new FieldMeta<PromotionalSpecificationField>(
  PromotionalSpecificationField.EventTactic,
  'EventTactic',
  'Event Tactic',
  'EventTactic',
  'An event tactic associated with this promotion.',
  '0..n',
  undefined,
  undefined
)

export class PromotionalSpecificationFieldMeta {
  public static readonly SpecificationID = PromotionalSpecificationFieldMetaSpecificationID
  public static readonly PromotionalEventLineItem = PromotionalSpecificationFieldMetaPromotionalEventLineItem
  public static readonly EventTactic = PromotionalSpecificationFieldMetaEventTactic
}

export const PromotionalSpecificationFieldMap = new Map([
  [PromotionalSpecificationField.SpecificationID, PromotionalSpecificationFieldMetaSpecificationID],
  [PromotionalSpecificationField.PromotionalEventLineItem, PromotionalSpecificationFieldMetaPromotionalEventLineItem],
  [PromotionalSpecificationField.EventTactic, PromotionalSpecificationFieldMetaEventTactic]
])
