import { FieldMeta } from '../FieldMeta'

export enum StatusField {
  UBLExtensions = 'UBLExtensions',
  ConditionCode = 'ConditionCode',
  ReferenceDate = 'ReferenceDate',
  ReferenceTime = 'ReferenceTime',
  Description = 'Description',
  StatusReasonCode = 'StatusReasonCode',
  StatusReason = 'StatusReason',
  SequenceID = 'SequenceID',
  Text = 'Text',
  IndicationIndicator = 'IndicationIndicator',
  Percent = 'Percent',
  ReliabilityPercent = 'ReliabilityPercent',
  SubStatus = 'SubStatus',
  Condition = 'Condition'
}

export const StatusFieldMetaUBLExtensions = new FieldMeta<StatusField>(
  StatusField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const StatusFieldMetaConditionCode = new FieldMeta<StatusField>(
  StatusField.ConditionCode,
  'ConditionCode',
  'Condition Code',
  'Code',
  'Specifies the status condition of the related object.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const StatusFieldMetaReferenceDate = new FieldMeta<StatusField>(
  StatusField.ReferenceDate,
  'ReferenceDate',
  'Reference Date',
  'Date',
  'The reference date for this status.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const StatusFieldMetaReferenceTime = new FieldMeta<StatusField>(
  StatusField.ReferenceTime,
  'ReferenceTime',
  'Reference Time',
  'Time',
  'The reference time for this status.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const StatusFieldMetaDescription = new FieldMeta<StatusField>(
  StatusField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this status.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const StatusFieldMetaStatusReasonCode = new FieldMeta<StatusField>(
  StatusField.StatusReasonCode,
  'StatusReasonCode',
  'Status Reason Code',
  'Code',
  'The reason for this status condition or position, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const StatusFieldMetaStatusReason = new FieldMeta<StatusField>(
  StatusField.StatusReason,
  'StatusReason',
  'Status Reason',
  'Text',
  'The reason for this status condition or position, expressed as text.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const StatusFieldMetaSequenceID = new FieldMeta<StatusField>(
  StatusField.SequenceID,
  'SequenceID',
  'Sequence Identifier',
  'Identifier',
  'A sequence identifier for this status.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const StatusFieldMetaText = new FieldMeta<StatusField>(
  StatusField.Text,
  'Text',
  'Text',
  'Text',
  'Provides any textual information related to this status.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const StatusFieldMetaIndicationIndicator = new FieldMeta<StatusField>(
  StatusField.IndicationIndicator,
  'IndicationIndicator',
  'Indication Indicator',
  'Indicator',
  'Specifies an indicator relevant to a specific status.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const StatusFieldMetaPercent = new FieldMeta<StatusField>(
  StatusField.Percent,
  'Percent',
  'Percent',
  'Numeric',
  'A percentage meaningful in the context of this status.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const StatusFieldMetaReliabilityPercent = new FieldMeta<StatusField>(
  StatusField.ReliabilityPercent,
  'ReliabilityPercent',
  'Reliability Percent',
  'Numeric',
  'The reliability of this status, expressed as a percentage.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const StatusFieldMetaSubStatus = new FieldMeta<StatusField>(
  StatusField.SubStatus,
  'SubStatus',
  'Sub Status',
  'Status',
  'An additional sub status to clarify or ellaborate on the status',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const StatusFieldMetaCondition = new FieldMeta<StatusField>(
  StatusField.Condition,
  'Condition',
  'Condition',
  'Condition',
  'Measurements that quantify the condition of the objects covered by the status.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class StatusFieldMeta {
  public static readonly UBLExtensions = StatusFieldMetaUBLExtensions
  public static readonly ConditionCode = StatusFieldMetaConditionCode
  public static readonly ReferenceDate = StatusFieldMetaReferenceDate
  public static readonly ReferenceTime = StatusFieldMetaReferenceTime
  public static readonly Description = StatusFieldMetaDescription
  public static readonly StatusReasonCode = StatusFieldMetaStatusReasonCode
  public static readonly StatusReason = StatusFieldMetaStatusReason
  public static readonly SequenceID = StatusFieldMetaSequenceID
  public static readonly Text = StatusFieldMetaText
  public static readonly IndicationIndicator = StatusFieldMetaIndicationIndicator
  public static readonly Percent = StatusFieldMetaPercent
  public static readonly ReliabilityPercent = StatusFieldMetaReliabilityPercent
  public static readonly SubStatus = StatusFieldMetaSubStatus
  public static readonly Condition = StatusFieldMetaCondition
}

export const StatusFieldMap = new Map([
  [StatusField.UBLExtensions, StatusFieldMetaUBLExtensions],
  [StatusField.ConditionCode, StatusFieldMetaConditionCode],
  [StatusField.ReferenceDate, StatusFieldMetaReferenceDate],
  [StatusField.ReferenceTime, StatusFieldMetaReferenceTime],
  [StatusField.Description, StatusFieldMetaDescription],
  [StatusField.StatusReasonCode, StatusFieldMetaStatusReasonCode],
  [StatusField.StatusReason, StatusFieldMetaStatusReason],
  [StatusField.SequenceID, StatusFieldMetaSequenceID],
  [StatusField.Text, StatusFieldMetaText],
  [StatusField.IndicationIndicator, StatusFieldMetaIndicationIndicator],
  [StatusField.Percent, StatusFieldMetaPercent],
  [StatusField.ReliabilityPercent, StatusFieldMetaReliabilityPercent],
  [StatusField.SubStatus, StatusFieldMetaSubStatus],
  [StatusField.Condition, StatusFieldMetaCondition]
])
