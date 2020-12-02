import { FieldMeta } from '../FieldMeta'

export enum ForecastLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Note = 'Note',
  FrozenDocumentIndicator = 'FrozenDocumentIndicator',
  ForecastTypeCode = 'ForecastTypeCode',
  ForecastPeriod = 'ForecastPeriod',
  SalesItem = 'SalesItem'
}

export const ForecastLineFieldMetaUBLExtensions = new FieldMeta<ForecastLineField>(
  ForecastLineField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ForecastLineFieldMetaID = new FieldMeta<ForecastLineField>(
  ForecastLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this forecast line.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ForecastLineFieldMetaNote = new FieldMeta<ForecastLineField>(
  ForecastLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ForecastLineFieldMetaFrozenDocumentIndicator = new FieldMeta<ForecastLineField>(
  ForecastLineField.FrozenDocumentIndicator,
  'FrozenDocumentIndicator',
  'Frozen Document Indicator',
  'Indicator',
  'An indicator that the status of the forecast is modifiable (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ForecastLineFieldMetaForecastTypeCode = new FieldMeta<ForecastLineField>(
  ForecastLineField.ForecastTypeCode,
  'ForecastTypeCode',
  'Forecast Type Code',
  'Code',
  'A code signifying the type of forecast. Examples: BASE PROMOTIONAL SEASONAL TOTAL',
  '1',
  'cbc',
  undefined,
  'seasonal, total'
)

export const ForecastLineFieldMetaForecastPeriod = new FieldMeta<ForecastLineField>(
  ForecastLineField.ForecastPeriod,
  'ForecastPeriod',
  'Forecast Period',
  'Period',
  'The period to which the forecast applies.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ForecastLineFieldMetaSalesItem = new FieldMeta<ForecastLineField>(
  ForecastLineField.SalesItem,
  'SalesItem',
  'Sales Item',
  'SalesItem',
  'Sales information for the item to which this line applies.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class ForecastLineFieldMeta {
  public static readonly UBLExtensions = ForecastLineFieldMetaUBLExtensions
  public static readonly ID = ForecastLineFieldMetaID
  public static readonly Note = ForecastLineFieldMetaNote
  public static readonly FrozenDocumentIndicator = ForecastLineFieldMetaFrozenDocumentIndicator
  public static readonly ForecastTypeCode = ForecastLineFieldMetaForecastTypeCode
  public static readonly ForecastPeriod = ForecastLineFieldMetaForecastPeriod
  public static readonly SalesItem = ForecastLineFieldMetaSalesItem
}

export const ForecastLineFieldMap = new Map([
  [ForecastLineField.UBLExtensions, ForecastLineFieldMetaUBLExtensions],
  [ForecastLineField.ID, ForecastLineFieldMetaID],
  [ForecastLineField.Note, ForecastLineFieldMetaNote],
  [ForecastLineField.FrozenDocumentIndicator, ForecastLineFieldMetaFrozenDocumentIndicator],
  [ForecastLineField.ForecastTypeCode, ForecastLineFieldMetaForecastTypeCode],
  [ForecastLineField.ForecastPeriod, ForecastLineFieldMetaForecastPeriod],
  [ForecastLineField.SalesItem, ForecastLineFieldMetaSalesItem]
])
