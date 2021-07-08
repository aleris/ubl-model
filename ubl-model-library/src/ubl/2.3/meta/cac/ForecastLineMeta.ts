import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PeriodType } from './PeriodMeta'
import { SalesItemType } from './SalesItemMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ForecastLineFieldMetaID = new FieldMeta<ForecastLineField>(
  ForecastLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this forecast line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastLineFieldMetaNote = new FieldMeta<ForecastLineField>(
  ForecastLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastLineFieldMetaFrozenDocumentIndicator = new FieldMeta<ForecastLineField>(
  ForecastLineField.FrozenDocumentIndicator,
  'FrozenDocumentIndicator',
  'Frozen Document Indicator',
  IndicatorType.name,
  'An indicator that the status of the forecast is modifiable (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastLineFieldMetaForecastTypeCode = new FieldMeta<ForecastLineField>(
  ForecastLineField.ForecastTypeCode,
  'ForecastTypeCode',
  'Forecast Type Code',
  CodeType.name,
  'A code signifying the type of forecast. Examples: BASE PROMOTIONAL SEASONAL TOTAL',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  'seasonal, total'
)

export const ForecastLineFieldMetaForecastPeriod = new FieldMeta<ForecastLineField>(
  ForecastLineField.ForecastPeriod,
  'ForecastPeriod',
  'Forecast Period',
  PeriodType.name,
  'The period to which the forecast applies.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForecastLineFieldMetaSalesItem = new FieldMeta<ForecastLineField>(
  ForecastLineField.SalesItem,
  'SalesItem',
  'Sales Item',
  SalesItemType.name,
  'Sales information for the item to which this line applies.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const ForecastLineType: Type<ForecastLineField> = {
  name: 'ForecastLine',
  label: 'Forecast Line',
  module: TypeModule.cac,
  definition: 'Detailed information about a particular Forecast Line within a Forecast Document',
  fields: ForecastLineFieldMap,
}
