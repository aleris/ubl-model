import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'
import { WorkPhaseReferenceType } from './WorkPhaseReferenceMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ProjectReferenceFieldMetaID = new FieldMeta<ProjectReferenceField>(
  ProjectReferenceField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for the referenced project.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProjectReferenceFieldMetaUUID = new FieldMeta<ProjectReferenceField>(
  ProjectReferenceField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for the referenced project.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProjectReferenceFieldMetaIssueDate = new FieldMeta<ProjectReferenceField>(
  ProjectReferenceField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date on which the referenced project was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProjectReferenceFieldMetaWorkPhaseReference = new FieldMeta<ProjectReferenceField>(
  ProjectReferenceField.WorkPhaseReference,
  'WorkPhaseReference',
  'Work Phase Reference',
  WorkPhaseReferenceType.name,
  'A specific phase of work in the referenced project.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const ProjectReferenceType: Type<ProjectReferenceField> = {
  name: 'ProjectReference',
  label: 'Project Reference',
  module: TypeModule.cac,
  definition: 'A class to define a reference to a procurement project.',
  fields: ProjectReferenceFieldMap,
}
