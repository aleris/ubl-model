import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { ConditionType } from './ConditionMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { NumericType } from '../cbc/NumericMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const StatusFieldMetaConditionCode = new FieldMeta<StatusField>(
  StatusField.ConditionCode,
  'ConditionCode',
  'Condition Code',
  CodeType.name,
  'Specifies the status condition of the related object.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatusFieldMetaReferenceDate = new FieldMeta<StatusField>(
  StatusField.ReferenceDate,
  'ReferenceDate',
  'Reference Date',
  DateType.name,
  'The reference date for this status.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatusFieldMetaReferenceTime = new FieldMeta<StatusField>(
  StatusField.ReferenceTime,
  'ReferenceTime',
  'Reference Time',
  TimeType.name,
  'The reference time for this status.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatusFieldMetaDescription = new FieldMeta<StatusField>(
  StatusField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this status.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatusFieldMetaStatusReasonCode = new FieldMeta<StatusField>(
  StatusField.StatusReasonCode,
  'StatusReasonCode',
  'Status Reason Code',
  CodeType.name,
  'The reason for this status condition or position, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatusFieldMetaStatusReason = new FieldMeta<StatusField>(
  StatusField.StatusReason,
  'StatusReason',
  'Status Reason',
  TextType.name,
  'The reason for this status condition or position, expressed as text.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatusFieldMetaSequenceID = new FieldMeta<StatusField>(
  StatusField.SequenceID,
  'SequenceID',
  'Sequence Identifier',
  IdentifierType.name,
  'A sequence identifier for this status.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatusFieldMetaText = new FieldMeta<StatusField>(
  StatusField.Text,
  'Text',
  'Text',
  TextType.name,
  'Provides any textual information related to this status.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatusFieldMetaIndicationIndicator = new FieldMeta<StatusField>(
  StatusField.IndicationIndicator,
  'IndicationIndicator',
  'Indication Indicator',
  IndicatorType.name,
  'Specifies an indicator relevant to a specific status.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatusFieldMetaPercent = new FieldMeta<StatusField>(
  StatusField.Percent,
  'Percent',
  'Percent',
  NumericType.name,
  'A percentage meaningful in the context of this status.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatusFieldMetaReliabilityPercent = new FieldMeta<StatusField>(
  StatusField.ReliabilityPercent,
  'ReliabilityPercent',
  'Reliability Percent',
  NumericType.name,
  'The reliability of this status, expressed as a percentage.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatusFieldMetaSubStatus = new FieldMeta<StatusField>(
  StatusField.SubStatus,
  'SubStatus',
  'Sub Status',
  StatusType.name,
  'An additional sub status to clarify or ellaborate on the status',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatusFieldMetaCondition = new FieldMeta<StatusField>(
  StatusField.Condition,
  'Condition',
  'Condition',
  ConditionType.name,
  'Measurements that quantify the condition of the objects covered by the status.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const StatusType: Type<StatusField> = {
  name: 'Status',
  label: 'Status',
  module: TypeModule.cac,
  definition: 'A class to describe the condition or position of an object.',
  fields: StatusFieldMap,
}
