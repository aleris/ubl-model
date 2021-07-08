import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { EventLineItemType } from './EventLineItemMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum MiscellaneousEventField {
  UBLExtensions = 'UBLExtensions',
  MiscellaneousEventTypeCode = 'MiscellaneousEventTypeCode',
  EventLineItem = 'EventLineItem'
}

export const MiscellaneousEventFieldMetaUBLExtensions = new FieldMeta<MiscellaneousEventField>(
  MiscellaneousEventField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const MiscellaneousEventFieldMetaMiscellaneousEventTypeCode = new FieldMeta<MiscellaneousEventField>(
  MiscellaneousEventField.MiscellaneousEventTypeCode,
  'MiscellaneousEventTypeCode',
  'Miscellaneous Event Type Code',
  CodeType.name,
  'A code signifying the type of this miscellaneous event. Examples are: ASSORTMENT_CHARGE DISASTER FORECAST_DECREASE FORECAST_INCREASE FREIGHT_FLOW_ALLOCATION INVENTORY_POLICY_CHANGE LOCATION_CLOSING LOCATION_OPENING OTHER OUT_OF_STOCK PACKAGING_LABELING_CHANGE PRICE_DECREASE PRICE_INCREASE STORE_FORMAT_OR_PLANOGRAM_CHANGE TEST_MARKET WEATHER',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const MiscellaneousEventFieldMetaEventLineItem = new FieldMeta<MiscellaneousEventField>(
  MiscellaneousEventField.EventLineItem,
  'EventLineItem',
  'Event Line Item',
  EventLineItemType.name,
  'An event line item for this miscellaneous retail event.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class MiscellaneousEventFieldMeta {
  public static readonly UBLExtensions = MiscellaneousEventFieldMetaUBLExtensions
  public static readonly MiscellaneousEventTypeCode = MiscellaneousEventFieldMetaMiscellaneousEventTypeCode
  public static readonly EventLineItem = MiscellaneousEventFieldMetaEventLineItem
}

export const MiscellaneousEventFieldMap = new Map([
  [MiscellaneousEventField.UBLExtensions, MiscellaneousEventFieldMetaUBLExtensions],
  [MiscellaneousEventField.MiscellaneousEventTypeCode, MiscellaneousEventFieldMetaMiscellaneousEventTypeCode],
  [MiscellaneousEventField.EventLineItem, MiscellaneousEventFieldMetaEventLineItem]
])

export const MiscellaneousEventType: Type<MiscellaneousEventField> = {
  name: 'MiscellaneousEvent',
  label: 'Miscellaneous Event',
  module: TypeModule.cac,
  definition: 'A class to describe a miscellaneous event associated with a retail event.',
  fields: MiscellaneousEventFieldMap,
}
