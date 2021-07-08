import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { ProcurementProjectLotType } from './ProcurementProjectLotMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum QualificationResolutionField {
  UBLExtensions = 'UBLExtensions',
  AdmissionCode = 'AdmissionCode',
  ExclusionReason = 'ExclusionReason',
  Resolution = 'Resolution',
  ResolutionDate = 'ResolutionDate',
  ResolutionTime = 'ResolutionTime',
  ProcurementProjectLot = 'ProcurementProjectLot'
}

export const QualificationResolutionFieldMetaUBLExtensions = new FieldMeta<QualificationResolutionField>(
  QualificationResolutionField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const QualificationResolutionFieldMetaAdmissionCode = new FieldMeta<QualificationResolutionField>(
  QualificationResolutionField.AdmissionCode,
  'AdmissionCode',
  'Admission Code',
  CodeType.name,
  'An indicator that the economic operator has been accepted into the tendering process (true) or rejected from the tendering process (false).',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualificationResolutionFieldMetaExclusionReason = new FieldMeta<QualificationResolutionField>(
  QualificationResolutionField.ExclusionReason,
  'ExclusionReason',
  'Exclusion Reason',
  TextType.name,
  'Text describing a reason for an exclusion from the tendering process.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualificationResolutionFieldMetaResolution = new FieldMeta<QualificationResolutionField>(
  QualificationResolutionField.Resolution,
  'Resolution',
  'Resolution',
  TextType.name,
  'Text describing this qualification resolution.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualificationResolutionFieldMetaResolutionDate = new FieldMeta<QualificationResolutionField>(
  QualificationResolutionField.ResolutionDate,
  'ResolutionDate',
  'Resolution Date',
  DateType.name,
  'The date on which this qualification resolution was formalized.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualificationResolutionFieldMetaResolutionTime = new FieldMeta<QualificationResolutionField>(
  QualificationResolutionField.ResolutionTime,
  'ResolutionTime',
  'Resolution Time',
  TimeType.name,
  'The time at which this qualification resolution was formalized.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualificationResolutionFieldMetaProcurementProjectLot = new FieldMeta<QualificationResolutionField>(
  QualificationResolutionField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  ProcurementProjectLotType.name,
  'The Procurement project lot to which this tenderer is accepted or rejected.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class QualificationResolutionFieldMeta {
  public static readonly UBLExtensions = QualificationResolutionFieldMetaUBLExtensions
  public static readonly AdmissionCode = QualificationResolutionFieldMetaAdmissionCode
  public static readonly ExclusionReason = QualificationResolutionFieldMetaExclusionReason
  public static readonly Resolution = QualificationResolutionFieldMetaResolution
  public static readonly ResolutionDate = QualificationResolutionFieldMetaResolutionDate
  public static readonly ResolutionTime = QualificationResolutionFieldMetaResolutionTime
  public static readonly ProcurementProjectLot = QualificationResolutionFieldMetaProcurementProjectLot
}

export const QualificationResolutionFieldMap = new Map([
  [QualificationResolutionField.UBLExtensions, QualificationResolutionFieldMetaUBLExtensions],
  [QualificationResolutionField.AdmissionCode, QualificationResolutionFieldMetaAdmissionCode],
  [QualificationResolutionField.ExclusionReason, QualificationResolutionFieldMetaExclusionReason],
  [QualificationResolutionField.Resolution, QualificationResolutionFieldMetaResolution],
  [QualificationResolutionField.ResolutionDate, QualificationResolutionFieldMetaResolutionDate],
  [QualificationResolutionField.ResolutionTime, QualificationResolutionFieldMetaResolutionTime],
  [QualificationResolutionField.ProcurementProjectLot, QualificationResolutionFieldMetaProcurementProjectLot]
])

export const QualificationResolutionType: Type<QualificationResolutionField> = {
  name: 'QualificationResolution',
  label: 'Qualification Resolution',
  module: TypeModule.cac,
  definition: 'A class to describe the acceptance or rejection of an economic operator in a tendering process.',
  fields: QualificationResolutionFieldMap,
}
