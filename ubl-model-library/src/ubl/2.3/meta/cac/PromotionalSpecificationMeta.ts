import { FieldMeta } from '../FieldMeta'

export enum PromotionalSpecificationField {
  UBLExtensions = 'UBLExtensions',
  SpecificationID = 'SpecificationID',
  PromotionalEventLineItem = 'PromotionalEventLineItem',
  EventTactic = 'EventTactic'
}

export const PromotionalSpecificationFieldMetaUBLExtensions = new FieldMeta<PromotionalSpecificationField>(
  PromotionalSpecificationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const PromotionalSpecificationFieldMetaSpecificationID = new FieldMeta<PromotionalSpecificationField>(
  PromotionalSpecificationField.SpecificationID,
  'SpecificationID',
  'Specification Identifier',
  'Identifier',
  'An identifier for this promotional specification.',
  '0..1',
  'cbc',
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
  'cac',
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
  'cac',
  undefined,
  undefined
)

export class PromotionalSpecificationFieldMeta {
  public static readonly UBLExtensions = PromotionalSpecificationFieldMetaUBLExtensions
  public static readonly SpecificationID = PromotionalSpecificationFieldMetaSpecificationID
  public static readonly PromotionalEventLineItem = PromotionalSpecificationFieldMetaPromotionalEventLineItem
  public static readonly EventTactic = PromotionalSpecificationFieldMetaEventTactic
}

export const PromotionalSpecificationFieldMap = new Map([
  [PromotionalSpecificationField.UBLExtensions, PromotionalSpecificationFieldMetaUBLExtensions],
  [PromotionalSpecificationField.SpecificationID, PromotionalSpecificationFieldMetaSpecificationID],
  [PromotionalSpecificationField.PromotionalEventLineItem, PromotionalSpecificationFieldMetaPromotionalEventLineItem],
  [PromotionalSpecificationField.EventTactic, PromotionalSpecificationFieldMetaEventTactic]
])
