import { FieldMeta } from '../../FieldMeta'

export enum QualificationResolutionField {
  AdmissionCode = 'AdmissionCode',
  ExclusionReason = 'ExclusionReason',
  Resolution = 'Resolution',
  ResolutionDate = 'ResolutionDate',
  ResolutionTime = 'ResolutionTime',
  ProcurementProjectLot = 'ProcurementProjectLot'
}

export const QualificationResolutionFieldMetaAdmissionCode = new FieldMeta<QualificationResolutionField>(
  QualificationResolutionField.AdmissionCode,
  'AdmissionCode',
  'Admission Code',
  'Code',
  'An indicator that the economic operator has been accepted into the tendering process (true) or rejected from the tendering process (false).',
  '1',
  undefined,
  undefined
)

export const QualificationResolutionFieldMetaExclusionReason = new FieldMeta<QualificationResolutionField>(
  QualificationResolutionField.ExclusionReason,
  'ExclusionReason',
  'Exclusion Reason',
  'Text',
  'Text describing a reason for an exclusion from the tendering process.',
  '0..n',
  undefined,
  undefined
)

export const QualificationResolutionFieldMetaResolution = new FieldMeta<QualificationResolutionField>(
  QualificationResolutionField.Resolution,
  'Resolution',
  'Resolution',
  'Text',
  'Text describing this qualification resolution.',
  '0..n',
  undefined,
  undefined
)

export const QualificationResolutionFieldMetaResolutionDate = new FieldMeta<QualificationResolutionField>(
  QualificationResolutionField.ResolutionDate,
  'ResolutionDate',
  'Resolution Date',
  'Date',
  'The date on which this qualification resolution was formalized.',
  '1',
  undefined,
  undefined
)

export const QualificationResolutionFieldMetaResolutionTime = new FieldMeta<QualificationResolutionField>(
  QualificationResolutionField.ResolutionTime,
  'ResolutionTime',
  'Resolution Time',
  'Time',
  'The time at which this qualification resolution was formalized.',
  '0..1',
  undefined,
  undefined
)

export const QualificationResolutionFieldMetaProcurementProjectLot = new FieldMeta<QualificationResolutionField>(
  QualificationResolutionField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  'ProcurementProjectLot',
  'The Procurement project lot to which this tenderer is accepted or rejected.',
  '0..1',
  undefined,
  undefined
)

export class QualificationResolutionFieldMeta {
  public static readonly AdmissionCode = QualificationResolutionFieldMetaAdmissionCode
  public static readonly ExclusionReason = QualificationResolutionFieldMetaExclusionReason
  public static readonly Resolution = QualificationResolutionFieldMetaResolution
  public static readonly ResolutionDate = QualificationResolutionFieldMetaResolutionDate
  public static readonly ResolutionTime = QualificationResolutionFieldMetaResolutionTime
  public static readonly ProcurementProjectLot = QualificationResolutionFieldMetaProcurementProjectLot
}

export const QualificationResolutionFieldMap = new Map([
  [QualificationResolutionField.AdmissionCode, QualificationResolutionFieldMetaAdmissionCode],
  [QualificationResolutionField.ExclusionReason, QualificationResolutionFieldMetaExclusionReason],
  [QualificationResolutionField.Resolution, QualificationResolutionFieldMetaResolution],
  [QualificationResolutionField.ResolutionDate, QualificationResolutionFieldMetaResolutionDate],
  [QualificationResolutionField.ResolutionTime, QualificationResolutionFieldMetaResolutionTime],
  [QualificationResolutionField.ProcurementProjectLot, QualificationResolutionFieldMetaProcurementProjectLot]
])
