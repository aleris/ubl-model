import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { NumericType } from '../cbc/NumericMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const WorkPhaseReferenceFieldMetaID = new FieldMeta<WorkPhaseReferenceField>(
  WorkPhaseReferenceField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this phase of work.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WorkPhaseReferenceFieldMetaWorkPhaseCode = new FieldMeta<WorkPhaseReferenceField>(
  WorkPhaseReferenceField.WorkPhaseCode,
  'WorkPhaseCode',
  'Work Phase Code',
  CodeType.name,
  'A code signifying this phase of work.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WorkPhaseReferenceFieldMetaWorkPhase = new FieldMeta<WorkPhaseReferenceField>(
  WorkPhaseReferenceField.WorkPhase,
  'WorkPhase',
  'Work Phase',
  TextType.name,
  'Text describing this phase of work.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WorkPhaseReferenceFieldMetaProgressPercent = new FieldMeta<WorkPhaseReferenceField>(
  WorkPhaseReferenceField.ProgressPercent,
  'ProgressPercent',
  'Progress Percent',
  NumericType.name,
  'The progress percentage of the work phase.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WorkPhaseReferenceFieldMetaStartDate = new FieldMeta<WorkPhaseReferenceField>(
  WorkPhaseReferenceField.StartDate,
  'StartDate',
  'Start Date',
  DateType.name,
  'The date on which this phase of work begins.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WorkPhaseReferenceFieldMetaEndDate = new FieldMeta<WorkPhaseReferenceField>(
  WorkPhaseReferenceField.EndDate,
  'EndDate',
  'End Date',
  DateType.name,
  'The date on which this phase of work ends.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WorkPhaseReferenceFieldMetaWorkOrderDocumentReference = new FieldMeta<WorkPhaseReferenceField>(
  WorkPhaseReferenceField.WorkOrderDocumentReference,
  'WorkOrderDocumentReference',
  'Work Order Document Reference',
  DocumentReferenceType.name,
  'A reference to a document regarding the work order for the project in which this phase of work takes place.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const WorkPhaseReferenceType: Type<WorkPhaseReferenceField> = {
  name: 'WorkPhaseReference',
  label: 'Work Phase Reference',
  module: TypeModule.cac,
  definition: 'A class that refers to a phase of work. Used for instance to specify what part of the contract the billing is referring to.',
  fields: WorkPhaseReferenceFieldMap,
}
