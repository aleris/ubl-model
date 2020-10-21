import { FieldMeta } from '../../FieldMeta'

export enum CatalogueReferenceField {
  ID = 'ID',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  RevisionDate = 'RevisionDate',
  RevisionTime = 'RevisionTime',
  Note = 'Note',
  Description = 'Description',
  VersionID = 'VersionID',
  PreviousVersionID = 'PreviousVersionID'
}

export const CatalogueReferenceFieldMetaID = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for a specific catalogue.',
  '1',
  undefined,
  undefined
)

export const CatalogueReferenceFieldMetaUUID = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for a specific catalogue.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueReferenceFieldMetaIssueDate = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date on which the catalogue was issued.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueReferenceFieldMetaIssueTime = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time at which the catalogue was issued.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueReferenceFieldMetaRevisionDate = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.RevisionDate,
  'RevisionDate',
  'Revision Date',
  'Date',
  'The date on which the information in the catalogue was last revised.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueReferenceFieldMetaRevisionTime = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.RevisionTime,
  'RevisionTime',
  'Revision Time',
  'Time',
  'The time at which the information in the catalogue was last revised.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueReferenceFieldMetaNote = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const CatalogueReferenceFieldMetaDescription = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the catalogue.',
  '0..n',
  undefined,
  'computer accessories for laptops'
)

export const CatalogueReferenceFieldMetaVersionID = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'An identifier for the current version of the catalogue.',
  '0..1',
  undefined,
  '1.1'
)

export const CatalogueReferenceFieldMetaPreviousVersionID = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.PreviousVersionID,
  'PreviousVersionID',
  'Version',
  'Identifier',
  'An identifier for the previous version of the catalogue that is superseded by this version.',
  '0..1',
  undefined,
  '1.0'
)

export class CatalogueReferenceFieldMeta {
  public static readonly ID = CatalogueReferenceFieldMetaID
  public static readonly UUID = CatalogueReferenceFieldMetaUUID
  public static readonly IssueDate = CatalogueReferenceFieldMetaIssueDate
  public static readonly IssueTime = CatalogueReferenceFieldMetaIssueTime
  public static readonly RevisionDate = CatalogueReferenceFieldMetaRevisionDate
  public static readonly RevisionTime = CatalogueReferenceFieldMetaRevisionTime
  public static readonly Note = CatalogueReferenceFieldMetaNote
  public static readonly Description = CatalogueReferenceFieldMetaDescription
  public static readonly VersionID = CatalogueReferenceFieldMetaVersionID
  public static readonly PreviousVersionID = CatalogueReferenceFieldMetaPreviousVersionID
}

export const CatalogueReferenceFieldMap = new Map([
  [CatalogueReferenceField.ID, CatalogueReferenceFieldMetaID],
  [CatalogueReferenceField.UUID, CatalogueReferenceFieldMetaUUID],
  [CatalogueReferenceField.IssueDate, CatalogueReferenceFieldMetaIssueDate],
  [CatalogueReferenceField.IssueTime, CatalogueReferenceFieldMetaIssueTime],
  [CatalogueReferenceField.RevisionDate, CatalogueReferenceFieldMetaRevisionDate],
  [CatalogueReferenceField.RevisionTime, CatalogueReferenceFieldMetaRevisionTime],
  [CatalogueReferenceField.Note, CatalogueReferenceFieldMetaNote],
  [CatalogueReferenceField.Description, CatalogueReferenceFieldMetaDescription],
  [CatalogueReferenceField.VersionID, CatalogueReferenceFieldMetaVersionID],
  [CatalogueReferenceField.PreviousVersionID, CatalogueReferenceFieldMetaPreviousVersionID]
])
