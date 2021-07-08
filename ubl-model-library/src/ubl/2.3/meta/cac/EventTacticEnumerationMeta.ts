import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum EventTacticEnumerationField {
  UBLExtensions = 'UBLExtensions',
  ConsumerIncentiveTacticTypeCode = 'ConsumerIncentiveTacticTypeCode',
  DisplayTacticTypeCode = 'DisplayTacticTypeCode',
  FeatureTacticTypeCode = 'FeatureTacticTypeCode',
  TradeItemPackingLabelingTypeCode = 'TradeItemPackingLabelingTypeCode'
}

export const EventTacticEnumerationFieldMetaUBLExtensions = new FieldMeta<EventTacticEnumerationField>(
  EventTacticEnumerationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EventTacticEnumerationFieldMetaConsumerIncentiveTacticTypeCode = new FieldMeta<EventTacticEnumerationField>(
  EventTacticEnumerationField.ConsumerIncentiveTacticTypeCode,
  'ConsumerIncentiveTacticTypeCode',
  'Consumer Incentive Tactic Type Code',
  CodeType.name,
  'A code signifying the type of consumer incentive. Examples include:Free Item, Temporary Price reduction',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EventTacticEnumerationFieldMetaDisplayTacticTypeCode = new FieldMeta<EventTacticEnumerationField>(
  EventTacticEnumerationField.DisplayTacticTypeCode,
  'DisplayTacticTypeCode',
  'Display Tactic Type Code',
  CodeType.name,
  'A code signifying the type of display. Examples Include: ON_COUNTER_DISPLAY, FLOOR_GRAPHICS FLOOR_STACK_DISPLAY',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EventTacticEnumerationFieldMetaFeatureTacticTypeCode = new FieldMeta<EventTacticEnumerationField>(
  EventTacticEnumerationField.FeatureTacticTypeCode,
  'FeatureTacticTypeCode',
  'Feature Tactic Type Code',
  CodeType.name,
  'A code signifying a special feature. Examples Include: BILLBOARD DIRECT_MAIL_AD, FLYER',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EventTacticEnumerationFieldMetaTradeItemPackingLabelingTypeCode = new FieldMeta<EventTacticEnumerationField>(
  EventTacticEnumerationField.TradeItemPackingLabelingTypeCode,
  'TradeItemPackingLabelingTypeCode',
  'Trade Item Packing Labeling Type Code',
  CodeType.name,
  'A code signifying the type of trade item packing and labeling. Examples Include: BONUS_SIZE CO_BRANDED_TRADE_ITEM',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class EventTacticEnumerationFieldMeta {
  public static readonly UBLExtensions = EventTacticEnumerationFieldMetaUBLExtensions
  public static readonly ConsumerIncentiveTacticTypeCode = EventTacticEnumerationFieldMetaConsumerIncentiveTacticTypeCode
  public static readonly DisplayTacticTypeCode = EventTacticEnumerationFieldMetaDisplayTacticTypeCode
  public static readonly FeatureTacticTypeCode = EventTacticEnumerationFieldMetaFeatureTacticTypeCode
  public static readonly TradeItemPackingLabelingTypeCode = EventTacticEnumerationFieldMetaTradeItemPackingLabelingTypeCode
}

export const EventTacticEnumerationFieldMap = new Map([
  [EventTacticEnumerationField.UBLExtensions, EventTacticEnumerationFieldMetaUBLExtensions],
  [EventTacticEnumerationField.ConsumerIncentiveTacticTypeCode, EventTacticEnumerationFieldMetaConsumerIncentiveTacticTypeCode],
  [EventTacticEnumerationField.DisplayTacticTypeCode, EventTacticEnumerationFieldMetaDisplayTacticTypeCode],
  [EventTacticEnumerationField.FeatureTacticTypeCode, EventTacticEnumerationFieldMetaFeatureTacticTypeCode],
  [EventTacticEnumerationField.TradeItemPackingLabelingTypeCode, EventTacticEnumerationFieldMetaTradeItemPackingLabelingTypeCode]
])

export const EventTacticEnumerationType: Type<EventTacticEnumerationField> = {
  name: 'EventTacticEnumeration',
  label: 'Event Tactic Enumeration',
  module: TypeModule.cac,
  definition: 'A class to define a set of codes that describes a retail tactic.',
  fields: EventTacticEnumerationFieldMap,
}
