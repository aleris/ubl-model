import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { PeriodType } from './PeriodMeta'
import { SalesItemType } from './SalesItemMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ItemInformationRequestLineField {
  UBLExtensions = 'UBLExtensions',
  TimeFrequencyCode = 'TimeFrequencyCode',
  SupplyChainActivityTypeCode = 'SupplyChainActivityTypeCode',
  ForecastTypeCode = 'ForecastTypeCode',
  PerformanceMetricTypeCode = 'PerformanceMetricTypeCode',
  Period = 'Period',
  SalesItem = 'SalesItem'
}

export const ItemInformationRequestLineFieldMetaUBLExtensions = new FieldMeta<ItemInformationRequestLineField>(
  ItemInformationRequestLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ItemInformationRequestLineFieldMetaTimeFrequencyCode = new FieldMeta<ItemInformationRequestLineField>(
  ItemInformationRequestLineField.TimeFrequencyCode,
  'TimeFrequencyCode',
  'Time Frequency Code',
  CodeType.name,
  'A code signifying the frequency with which item information should be sent to the requester.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemInformationRequestLineFieldMetaSupplyChainActivityTypeCode = new FieldMeta<ItemInformationRequestLineField>(
  ItemInformationRequestLineField.SupplyChainActivityTypeCode,
  'SupplyChainActivityTypeCode',
  'Supply Chain Activity Type Code',
  CodeType.name,
  'A code used to identify the type of supply chain activity about which information request is issued. Examples: CANCELED_ORDERS EMERGENCY_ORDERS ON_HAND ORDERS',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemInformationRequestLineFieldMetaForecastTypeCode = new FieldMeta<ItemInformationRequestLineField>(
  ItemInformationRequestLineField.ForecastTypeCode,
  'ForecastTypeCode',
  'Forecast Type Code',
  CodeType.name,
  'The information request can be either about supply chain activity or about forecasts or about performance metrics, so it should be optional',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemInformationRequestLineFieldMetaPerformanceMetricTypeCode = new FieldMeta<ItemInformationRequestLineField>(
  ItemInformationRequestLineField.PerformanceMetricTypeCode,
  'PerformanceMetricTypeCode',
  'Performance Metric Type Code',
  CodeType.name,
  'A code signifying a measure of performance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemInformationRequestLineFieldMetaPeriod = new FieldMeta<ItemInformationRequestLineField>(
  ItemInformationRequestLineField.Period,
  'Period',
  'Period',
  PeriodType.name,
  'A period for which this information is requested.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemInformationRequestLineFieldMetaSalesItem = new FieldMeta<ItemInformationRequestLineField>(
  ItemInformationRequestLineField.SalesItem,
  'SalesItem',
  'Sales Item',
  SalesItemType.name,
  'Sales information for the item to which this line applies.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class ItemInformationRequestLineFieldMeta {
  public static readonly UBLExtensions = ItemInformationRequestLineFieldMetaUBLExtensions
  public static readonly TimeFrequencyCode = ItemInformationRequestLineFieldMetaTimeFrequencyCode
  public static readonly SupplyChainActivityTypeCode = ItemInformationRequestLineFieldMetaSupplyChainActivityTypeCode
  public static readonly ForecastTypeCode = ItemInformationRequestLineFieldMetaForecastTypeCode
  public static readonly PerformanceMetricTypeCode = ItemInformationRequestLineFieldMetaPerformanceMetricTypeCode
  public static readonly Period = ItemInformationRequestLineFieldMetaPeriod
  public static readonly SalesItem = ItemInformationRequestLineFieldMetaSalesItem
}

export const ItemInformationRequestLineFieldMap = new Map([
  [ItemInformationRequestLineField.UBLExtensions, ItemInformationRequestLineFieldMetaUBLExtensions],
  [ItemInformationRequestLineField.TimeFrequencyCode, ItemInformationRequestLineFieldMetaTimeFrequencyCode],
  [ItemInformationRequestLineField.SupplyChainActivityTypeCode, ItemInformationRequestLineFieldMetaSupplyChainActivityTypeCode],
  [ItemInformationRequestLineField.ForecastTypeCode, ItemInformationRequestLineFieldMetaForecastTypeCode],
  [ItemInformationRequestLineField.PerformanceMetricTypeCode, ItemInformationRequestLineFieldMetaPerformanceMetricTypeCode],
  [ItemInformationRequestLineField.Period, ItemInformationRequestLineFieldMetaPeriod],
  [ItemInformationRequestLineField.SalesItem, ItemInformationRequestLineFieldMetaSalesItem]
])

export const ItemInformationRequestLineType: Type<ItemInformationRequestLineField> = {
  name: 'ItemInformationRequestLine',
  label: 'Item Information Request Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in an Item Information Request asking a trading partner for item information.',
  fields: ItemInformationRequestLineFieldMap,
}
