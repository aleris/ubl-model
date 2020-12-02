import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ForecastRevisionLineFieldMetaID = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this forecast revision line.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ForecastRevisionLineFieldMetaNote = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ForecastRevisionLineFieldMetaDescription = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the revision to this line.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ForecastRevisionLineFieldMetaRevisedForecastLineID = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.RevisedForecastLineID,
  'RevisedForecastLineID',
  'Revised Forecast Line Identifier',
  'Identifier',
  'An identifier for the revised forecast line.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ForecastRevisionLineFieldMetaSourceForecastIssueDate = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.SourceForecastIssueDate,
  'SourceForecastIssueDate',
  'Source Forecast Issue Date',
  'Date',
  'The date on which the forecast modified by this revision was generated or created.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ForecastRevisionLineFieldMetaSourceForecastIssueTime = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.SourceForecastIssueTime,
  'SourceForecastIssueTime',
  'Source Forecast Issue Time',
  'Time',
  'The time at which the forecast modified by this revision was generated or created.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ForecastRevisionLineFieldMetaAdjustmentReasonCode = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.AdjustmentReasonCode,
  'AdjustmentReasonCode',
  'Adjustment Reason Code',
  'Code',
  'A code signifying the reason for the adjustment specified in this forecast revision line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ForecastRevisionLineFieldMetaForecastPeriod = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.ForecastPeriod,
  'ForecastPeriod',
  'Forecast Period',
  'Period',
  'The period to which this forecast revision line applies.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ForecastRevisionLineFieldMetaSalesItem = new FieldMeta<ForecastRevisionLineField>(
  ForecastRevisionLineField.SalesItem,
  'SalesItem',
  'Sales Item',
  'SalesItem',
  'Sales information for the item to which this line applies.',
  '0..1',
  'cac',
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
