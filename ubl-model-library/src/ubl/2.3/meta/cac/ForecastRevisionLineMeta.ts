import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PeriodType } from './PeriodMeta'
import { SalesItemType } from './SalesItemMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ForecastRevisionLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Note = 'Note',
  Description = 'Description',
  RevisedForecastLineID = 'RevisedForecastLineID',
  SourceForecastIssueDate = 'SourceForecastIssueDate',
  SourceForecastIssueTime = 'SourceForecastIssueTime',
  AdjustmentReasonCode = 'AdjustmentReasonCode',
  ForecastPeriod = 'ForecastPeriod',
  SalesItem = 'SalesItem'
}

export const ForecastRevisionLineFieldMetaUBLExtensions = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ForecastRevisionLineFieldMetaID = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this forecast revision line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastRevisionLineFieldMetaNote = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastRevisionLineFieldMetaDescription = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the revision to this line.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastRevisionLineFieldMetaRevisedForecastLineID = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.RevisedForecastLineID,
  'RevisedForecastLineID',
  'Revised Forecast Line Identifier',
  IdentifierType.name,
  'An identifier for the revised forecast line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastRevisionLineFieldMetaSourceForecastIssueDate = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.SourceForecastIssueDate,
  'SourceForecastIssueDate',
  'Source Forecast Issue Date',
  DateType.name,
  'The date on which the forecast modified by this revision was generated or created.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastRevisionLineFieldMetaSourceForecastIssueTime = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.SourceForecastIssueTime,
  'SourceForecastIssueTime',
  'Source Forecast Issue Time',
  TimeType.name,
  'The time at which the forecast modified by this revision was generated or created.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastRevisionLineFieldMetaAdjustmentReasonCode = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.AdjustmentReasonCode,
  'AdjustmentReasonCode',
  'Adjustment Reason Code',
  CodeType.name,
  'A code signifying the reason for the adjustment specified in this forecast revision line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastRevisionLineFieldMetaForecastPeriod = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.ForecastPeriod,
  'ForecastPeriod',
  'Forecast Period',
  PeriodType.name,
  'The period to which this forecast revision line applies.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForecastRevisionLineFieldMetaSalesItem = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.SalesItem,
  'SalesItem',
  'Sales Item',
  SalesItemType.name,
  'Sales information for the item to which this line applies.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class ForecastRevisionLineFieldMeta {
  public static readonly UBLExtensions = ForecastRevisionLineFieldMetaUBLExtensions
  public static readonly ID = ForecastRevisionLineFieldMetaID
  public static readonly Note = ForecastRevisionLineFieldMetaNote
  public static readonly Description = ForecastRevisionLineFieldMetaDescription
  public static readonly RevisedForecastLineID = ForecastRevisionLineFieldMetaRevisedForecastLineID
  public static readonly SourceForecastIssueDate = ForecastRevisionLineFieldMetaSourceForecastIssueDate
  public static readonly SourceForecastIssueTime = ForecastRevisionLineFieldMetaSourceForecastIssueTime
  public static readonly AdjustmentReasonCode = ForecastRevisionLineFieldMetaAdjustmentReasonCode
  public static readonly ForecastPeriod = ForecastRevisionLineFieldMetaForecastPeriod
  public static readonly SalesItem = ForecastRevisionLineFieldMetaSalesItem
}

export const ForecastRevisionLineFieldMap = new Map([
  [ForecastRevisionLineField.UBLExtensions, ForecastRevisionLineFieldMetaUBLExtensions],
  [ForecastRevisionLineField.ID, ForecastRevisionLineFieldMetaID],
  [ForecastRevisionLineField.Note, ForecastRevisionLineFieldMetaNote],
  [ForecastRevisionLineField.Description, ForecastRevisionLineFieldMetaDescription],
  [ForecastRevisionLineField.RevisedForecastLineID, ForecastRevisionLineFieldMetaRevisedForecastLineID],
  [ForecastRevisionLineField.SourceForecastIssueDate, ForecastRevisionLineFieldMetaSourceForecastIssueDate],
  [ForecastRevisionLineField.SourceForecastIssueTime, ForecastRevisionLineFieldMetaSourceForecastIssueTime],
  [ForecastRevisionLineField.AdjustmentReasonCode, ForecastRevisionLineFieldMetaAdjustmentReasonCode],
  [ForecastRevisionLineField.ForecastPeriod, ForecastRevisionLineFieldMetaForecastPeriod],
  [ForecastRevisionLineField.SalesItem, ForecastRevisionLineFieldMetaSalesItem]
])

export const ForecastRevisionLineType: Type<ForecastRevisionLineField> = {
  name: 'ForecastRevisionLine',
  label: 'Forecast Revision Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in a Forecast Revision describing a revision to a line in a Forecast.',
  fields: ForecastRevisionLineFieldMap,
}
