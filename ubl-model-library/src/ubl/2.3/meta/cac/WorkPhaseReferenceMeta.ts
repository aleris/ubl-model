import { FieldMeta } from '../FieldMeta'

export enum WorkPhaseReferenceField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  WorkPhaseCode = 'WorkPhaseCode',
  WorkPhase = 'WorkPhase',
  ProgressPercent = 'ProgressPercent',
  StartDate = 'StartDate',
  EndDate = 'EndDate',
  WorkOrderDocumentReference = 'WorkOrderDocumentReference'
}

export const WorkPhaseReferenceFieldMetaUBLExtensions = new FieldMeta<WorkPhaseReferenceField>(
  WorkPhaseReferenceField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const WorkPhaseReferenceFieldMetaID = new FieldMeta<WorkPhaseReferenceField>(
  WorkPhaseReferenceField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this phase of work.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const WorkPhaseReferenceFieldMetaWorkPhaseCode = new FieldMeta<WorkPhaseReferenceField>(
  WorkPhaseReferenceField.WorkPhaseCode,
  'WorkPhaseCode',
  'Work Phase Code',
  'Code',
  'A code signifying this phase of work.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const WorkPhaseReferenceFieldMetaWorkPhase = new FieldMeta<WorkPhaseReferenceField>(
  WorkPhaseReferenceField.WorkPhase,
  'WorkPhase',
  'Work Phase',
  'Text',
  'Text describing this phase of work.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const WorkPhaseReferenceFieldMetaProgressPercent = new FieldMeta<WorkPhaseReferenceField>(
  WorkPhaseReferenceField.ProgressPercent,
  'ProgressPercent',
  'Progress Percent',
  'Numeric',
  'The progress percentage of the work phase.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const WorkPhaseReferenceFieldMetaStartDate = new FieldMeta<WorkPhaseReferenceField>(
  WorkPhaseReferenceField.StartDate,
  'StartDate',
  'Start Date',
  'Date',
  'The date on which this phase of work begins.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const WorkPhaseReferenceFieldMetaEndDate = new FieldMeta<WorkPhaseReferenceField>(
  WorkPhaseReferenceField.EndDate,
  'EndDate',
  'End Date',
  'Date',
  'The date on which this phase of work ends.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const WorkPhaseReferenceFieldMetaWorkOrderDocumentReference = new FieldMeta<WorkPhaseReferenceField>(
  WorkPhaseReferenceField.WorkOrderDocumentReference,
  'WorkOrderDocumentReference',
  'Work Order Document Reference',
  'DocumentReference',
  'A reference to a document regarding the work order for the project in which this phase of work takes place.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class WorkPhaseReferenceFieldMeta {
  public static readonly UBLExtensions = WorkPhaseReferenceFieldMetaUBLExtensions
  public static readonly ID = WorkPhaseReferenceFieldMetaID
  public static readonly WorkPhaseCode = WorkPhaseReferenceFieldMetaWorkPhaseCode
  public static readonly WorkPhase = WorkPhaseReferenceFieldMetaWorkPhase
  public static readonly ProgressPercent = WorkPhaseReferenceFieldMetaProgressPercent
  public static readonly StartDate = WorkPhaseReferenceFieldMetaStartDate
  public static readonly EndDate = WorkPhaseReferenceFieldMetaEndDate
  public static readonly WorkOrderDocumentReference = WorkPhaseReferenceFieldMetaWorkOrderDocumentReference
}

export const WorkPhaseReferenceFieldMap = new Map([
  [WorkPhaseReferenceField.UBLExtensions, WorkPhaseReferenceFieldMetaUBLExtensions],
  [WorkPhaseReferenceField.ID, WorkPhaseReferenceFieldMetaID],
  [WorkPhaseReferenceField.WorkPhaseCode, WorkPhaseReferenceFieldMetaWorkPhaseCode],
  [WorkPhaseReferenceField.WorkPhase, WorkPhaseReferenceFieldMetaWorkPhase],
  [WorkPhaseReferenceField.ProgressPercent, WorkPhaseReferenceFieldMetaProgressPercent],
  [WorkPhaseReferenceField.StartDate, WorkPhaseReferenceFieldMetaStartDate],
  [WorkPhaseReferenceField.EndDate, WorkPhaseReferenceFieldMetaEndDate],
  [WorkPhaseReferenceField.WorkOrderDocumentReference, WorkPhaseReferenceFieldMetaWorkOrderDocumentReference]
])
