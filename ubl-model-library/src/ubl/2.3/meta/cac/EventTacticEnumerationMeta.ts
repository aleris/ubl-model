import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const EventTacticEnumerationFieldMetaConsumerIncentiveTacticTypeCode = new FieldMeta<EventTacticEnumerationField>(
  EventTacticEnumerationField.ConsumerIncentiveTacticTypeCode,
  'ConsumerIncentiveTacticTypeCode',
  'Consumer Incentive Tactic Type Code',
  'Code',
  'A code signifying the type of consumer incentive. Examples include:Free Item, Temporary Price reduction',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EventTacticEnumerationFieldMetaDisplayTacticTypeCode = new FieldMeta<EventTacticEnumerationField>(
  EventTacticEnumerationField.DisplayTacticTypeCode,
  'DisplayTacticTypeCode',
  'Display Tactic Type Code',
  'Code',
  'A code signifying the type of display. Examples Include: ON_COUNTER_DISPLAY, FLOOR_GRAPHICS FLOOR_STACK_DISPLAY',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EventTacticEnumerationFieldMetaFeatureTacticTypeCode = new FieldMeta<EventTacticEnumerationField>(
  EventTacticEnumerationField.FeatureTacticTypeCode,
  'FeatureTacticTypeCode',
  'Feature Tactic Type Code',
  'Code',
  'A code signifying a special feature. Examples Include: BILLBOARD DIRECT_MAIL_AD, FLYER',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EventTacticEnumerationFieldMetaTradeItemPackingLabelingTypeCode = new FieldMeta<EventTacticEnumerationField>(
  EventTacticEnumerationField.TradeItemPackingLabelingTypeCode,
  'TradeItemPackingLabelingTypeCode',
  'Trade Item Packing Labeling Type Code',
  'Code',
  'A code signifying the type of trade item packing and labeling. Examples Include: BONUS_SIZE CO_BRANDED_TRADE_ITEM',
  '0..1',
  'cbc',
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
