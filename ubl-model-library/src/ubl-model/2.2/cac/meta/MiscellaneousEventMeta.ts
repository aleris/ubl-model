import { FieldMeta } from '../../FieldMeta'

export enum MiscellaneousEventField {
  MiscellaneousEventTypeCode = 'MiscellaneousEventTypeCode',
  EventLineItem = 'EventLineItem'
}

export const MiscellaneousEventFieldMetaMiscellaneousEventTypeCode = new FieldMeta<MiscellaneousEventField>(
  MiscellaneousEventField.MiscellaneousEventTypeCode,
  'MiscellaneousEventTypeCode',
  'Miscellaneous Event Type Code',
  'Code',
  'A code signifying the type of this miscellaneous event. Examples are: ASSORTMENT_CHARGE DISASTER FORECAST_DECREASE FORECAST_INCREASE FREIGHT_FLOW_ALLOCATION INVENTORY_POLICY_CHANGE LOCATION_CLOSING LOCATION_OPENING OTHER OUT_OF_STOCK PACKAGING_LABELING_CHANGE PRICE_DECREASE PRICE_INCREASE STORE_FORMAT_OR_PLANOGRAM_CHANGE TEST_MARKET WEATHER',
  '1',
  undefined,
  undefined
)

export const MiscellaneousEventFieldMetaEventLineItem = new FieldMeta<MiscellaneousEventField>(
  MiscellaneousEventField.EventLineItem,
  'EventLineItem',
  'Event Line Item',
  'EventLineItem',
  'An event line item for this miscellaneous retail event.',
  '1..n',
  undefined,
  undefined
)

export class MiscellaneousEventFieldMeta {
  public static readonly MiscellaneousEventTypeCode = MiscellaneousEventFieldMetaMiscellaneousEventTypeCode
  public static readonly EventLineItem = MiscellaneousEventFieldMetaEventLineItem
}

export const MiscellaneousEventFieldMap = new Map([
  [MiscellaneousEventField.MiscellaneousEventTypeCode, MiscellaneousEventFieldMetaMiscellaneousEventTypeCode],
  [MiscellaneousEventField.EventLineItem, MiscellaneousEventFieldMetaEventLineItem]
])
