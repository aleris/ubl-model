import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { EventTacticType } from './EventTacticMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PromotionalEventLineItemType } from './PromotionalEventLineItemMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PromotionalSpecificationField {
  UBLExtensions = 'UBLExtensions',
  SpecificationID = 'SpecificationID',
  PromotionalEventLineItem = 'PromotionalEventLineItem',
  EventTactic = 'EventTactic'
}

export const PromotionalSpecificationFieldMetaUBLExtensions = new FieldMeta<PromotionalSpecificationField>(
  PromotionalSpecificationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PromotionalSpecificationFieldMetaSpecificationID = new FieldMeta<PromotionalSpecificationField>(
  PromotionalSpecificationField.SpecificationID,
  'SpecificationID',
  'Specification Identifier',
  IdentifierType.name,
  'An identifier for this promotional specification.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PromotionalSpecificationFieldMetaPromotionalEventLineItem = new FieldMeta<PromotionalSpecificationField>(
  PromotionalSpecificationField.PromotionalEventLineItem,
  'PromotionalEventLineItem',
  'Promotional Event Line Item',
  PromotionalEventLineItemType.name,
  'A line item for a promotional event involving a specific product at a specific location; it describes the expected impacts associated with the event and specifies the promotional price of the item."',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const PromotionalSpecificationFieldMetaEventTactic = new FieldMeta<PromotionalSpecificationField>(
  PromotionalSpecificationField.EventTactic,
  'EventTactic',
  'Event Tactic',
  EventTacticType.name,
  'An event tactic associated with this promotion.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const PromotionalSpecificationType: Type<PromotionalSpecificationField> = {
  name: 'PromotionalSpecification',
  label: 'Promotional Specification',
  module: TypeModule.cac,
  definition: 'A class to describe a promotional event as a set of item locations that share a set of promotional tactics.',
  fields: PromotionalSpecificationFieldMap,
}
