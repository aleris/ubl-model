import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum CatalogueReferenceField {
  UBLExtensions = 'UBLExtensions',
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

export const CatalogueReferenceFieldMetaUBLExtensions = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CatalogueReferenceFieldMetaID = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for a specific catalogue.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueReferenceFieldMetaUUID = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for a specific catalogue.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueReferenceFieldMetaIssueDate = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date on which the catalogue was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueReferenceFieldMetaIssueTime = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time at which the catalogue was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueReferenceFieldMetaRevisionDate = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.RevisionDate,
  'RevisionDate',
  'Revision Date',
  DateType.name,
  'The date on which the information in the catalogue was last revised.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueReferenceFieldMetaRevisionTime = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.RevisionTime,
  'RevisionTime',
  'Revision Time',
  TimeType.name,
  'The time at which the information in the catalogue was last revised.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueReferenceFieldMetaNote = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueReferenceFieldMetaDescription = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the catalogue.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'computer accessories for laptops'
)

export const CatalogueReferenceFieldMetaVersionID = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'An identifier for the current version of the catalogue.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.1'
)

export const CatalogueReferenceFieldMetaPreviousVersionID = new FieldMeta<CatalogueReferenceField>(
  CatalogueReferenceField.PreviousVersionID,
  'PreviousVersionID',
  'Previous Version',
  IdentifierType.name,
  'An identifier for the previous version of the catalogue that is superseded by this version.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.0'
)

export class CatalogueReferenceFieldMeta {
  public static readonly UBLExtensions = CatalogueReferenceFieldMetaUBLExtensions
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
  [CatalogueReferenceField.UBLExtensions, CatalogueReferenceFieldMetaUBLExtensions],
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

export const CatalogueReferenceType: Type<CatalogueReferenceField> = {
  name: 'CatalogueReference',
  label: 'Catalogue Reference',
  module: TypeModule.cac,
  definition: 'A class to define a reference to a catalogue.',
  fields: CatalogueReferenceFieldMap,
}
