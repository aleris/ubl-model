import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ItemInformationRequestLineFieldMetaTimeFrequencyCode = new FieldMeta<ItemInformationRequestLineField>(
  ItemInformationRequestLineField.TimeFrequencyCode,
  'TimeFrequencyCode',
  'Time Frequency Code',
  'Code',
  'A code signifying the frequency with which item information should be sent to the requester.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemInformationRequestLineFieldMetaSupplyChainActivityTypeCode = new FieldMeta<ItemInformationRequestLineField>(
  ItemInformationRequestLineField.SupplyChainActivityTypeCode,
  'SupplyChainActivityTypeCode',
  'Supply Chain Activity Type Code',
  'Code',
  'A code used to identify the type of supply chain activity about which information request is issued. Examples: CANCELED_ORDERS EMERGENCY_ORDERS ON_HAND ORDERS',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemInformationRequestLineFieldMetaForecastTypeCode = new FieldMeta<ItemInformationRequestLineField>(
  ItemInformationRequestLineField.ForecastTypeCode,
  'ForecastTypeCode',
  'Forecast Type Code',
  'Code',
  'The information request can be either about supply chain activity or about forecasts or about performance metrics, so it should be optional',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemInformationRequestLineFieldMetaPerformanceMetricTypeCode = new FieldMeta<ItemInformationRequestLineField>(
  ItemInformationRequestLineField.PerformanceMetricTypeCode,
  'PerformanceMetricTypeCode',
  'Performance Metric Type Code',
  'Code',
  'A code signifying a measure of performance.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemInformationRequestLineFieldMetaPeriod = new FieldMeta<ItemInformationRequestLineField>(
  ItemInformationRequestLineField.Period,
  'Period',
  'Period',
  'Period',
  'A period for which this information is requested.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export const ItemInformationRequestLineFieldMetaSalesItem = new FieldMeta<ItemInformationRequestLineField>(
  ItemInformationRequestLineField.SalesItem,
  'SalesItem',
  'Sales Item',
  'SalesItem',
  'Sales information for the item to which this line applies.',
  '1..n',
  'cac',
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
