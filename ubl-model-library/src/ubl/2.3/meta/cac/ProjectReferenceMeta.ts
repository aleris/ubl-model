import { FieldMeta } from '../FieldMeta'

export enum ProjectReferenceField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  WorkPhaseReference = 'WorkPhaseReference'
}

export const ProjectReferenceFieldMetaUBLExtensions = new FieldMeta<ProjectReferenceField>(
  ProjectReferenceField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ProjectReferenceFieldMetaID = new FieldMeta<ProjectReferenceField>(
  ProjectReferenceField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the referenced project.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ProjectReferenceFieldMetaUUID = new FieldMeta<ProjectReferenceField>(
  ProjectReferenceField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for the referenced project.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProjectReferenceFieldMetaIssueDate = new FieldMeta<ProjectReferenceField>(
  ProjectReferenceField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date on which the referenced project was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProjectReferenceFieldMetaWorkPhaseReference = new FieldMeta<ProjectReferenceField>(
  ProjectReferenceField.WorkPhaseReference,
  'WorkPhaseReference',
  'Work Phase Reference',
  'WorkPhaseReference',
  'A specific phase of work in the referenced project.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class ProjectReferenceFieldMeta {
  public static readonly UBLExtensions = ProjectReferenceFieldMetaUBLExtensions
  public static readonly ID = ProjectReferenceFieldMetaID
  public static readonly UUID = ProjectReferenceFieldMetaUUID
  public static readonly IssueDate = ProjectReferenceFieldMetaIssueDate
  public static readonly WorkPhaseReference = ProjectReferenceFieldMetaWorkPhaseReference
}

export const ProjectReferenceFieldMap = new Map([
  [ProjectReferenceField.UBLExtensions, ProjectReferenceFieldMetaUBLExtensions],
  [ProjectReferenceField.ID, ProjectReferenceFieldMetaID],
  [ProjectReferenceField.UUID, ProjectReferenceFieldMetaUUID],
  [ProjectReferenceField.IssueDate, ProjectReferenceFieldMetaIssueDate],
  [ProjectReferenceField.WorkPhaseReference, ProjectReferenceFieldMetaWorkPhaseReference]
])
