import { FieldMeta } from '../../FieldMeta'

export enum ClassificationSchemeField {
  ID = 'ID',
  UUID = 'UUID',
  LastRevisionDate = 'LastRevisionDate',
  LastRevisionTime = 'LastRevisionTime',
  Note = 'Note',
  Name = 'Name',
  Description = 'Description',
  AgencyID = 'AgencyID',
  AgencyName = 'AgencyName',
  VersionID = 'VersionID',
  URI = 'URI',
  SchemeURI = 'SchemeURI',
  LanguageID = 'LanguageID',
  ClassificationCategory = 'ClassificationCategory'
}

export const ClassificationSchemeFieldMetaID = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this classification scheme.',
  '1',
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaUUID = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for this classification scheme.',
  '0..1',
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaLastRevisionDate = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.LastRevisionDate,
  'LastRevisionDate',
  'Revision Date',
  'Date',
  'The date on which this classification scheme was last revised.',
  '0..1',
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaLastRevisionTime = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.LastRevisionTime,
  'LastRevisionTime',
  'Revision Time',
  'Time',
  'The time at which this classification scheme was last revised.',
  '0..1',
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaNote = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaName = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this classification scheme.',
  '0..1',
  undefined,
  'UNSPSC'
)

export const ClassificationSchemeFieldMetaDescription = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this classification scheme.',
  '0..n',
  undefined,
  'an open, global multi-sector standard for classification of products and services'
)

export const ClassificationSchemeFieldMetaAgencyID = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.AgencyID,
  'AgencyID',
  'Agency Identifier',
  'Identifier',
  'An identifier for the agency that maintains this classification scheme.',
  '0..1',
  undefined,
  'Defaults to the UN/EDIFACT data element 3055 code list.'
)

export const ClassificationSchemeFieldMetaAgencyName = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.AgencyName,
  'AgencyName',
  'Agency Name',
  'Text',
  'The name of the agency that maintains the classification scheme.',
  '0..1',
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaVersionID = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'An identifier for the version of this classification scheme.',
  '0..1',
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaURI = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.URI,
  'URI',
  'URI',
  'Identifier',
  'The Uniform Resource Identifier (URI) of the documentation for this classification scheme.',
  '0..1',
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaSchemeURI = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.SchemeURI,
  'SchemeURI',
  'URI',
  'Identifier',
  'The Uniform Resource Identifier (URI) of this classification scheme.',
  '0..1',
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaLanguageID = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.LanguageID,
  'LanguageID',
  'Language',
  'Identifier',
  'An identifier for the language of this classification scheme.',
  '0..1',
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaClassificationCategory = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.ClassificationCategory,
  'ClassificationCategory',
  'Classification Category',
  'ClassificationCategory',
  'A description of a category within this classification scheme.',
  '1..n',
  undefined,
  undefined
)

export class ClassificationSchemeFieldMeta {
  public static readonly ID = ClassificationSchemeFieldMetaID
  public static readonly UUID = ClassificationSchemeFieldMetaUUID
  public static readonly LastRevisionDate = ClassificationSchemeFieldMetaLastRevisionDate
  public static readonly LastRevisionTime = ClassificationSchemeFieldMetaLastRevisionTime
  public static readonly Note = ClassificationSchemeFieldMetaNote
  public static readonly Name = ClassificationSchemeFieldMetaName
  public static readonly Description = ClassificationSchemeFieldMetaDescription
  public static readonly AgencyID = ClassificationSchemeFieldMetaAgencyID
  public static readonly AgencyName = ClassificationSchemeFieldMetaAgencyName
  public static readonly VersionID = ClassificationSchemeFieldMetaVersionID
  public static readonly URI = ClassificationSchemeFieldMetaURI
  public static readonly SchemeURI = ClassificationSchemeFieldMetaSchemeURI
  public static readonly LanguageID = ClassificationSchemeFieldMetaLanguageID
  public static readonly ClassificationCategory = ClassificationSchemeFieldMetaClassificationCategory
}

export const ClassificationSchemeFieldMap = new Map([
  [ClassificationSchemeField.ID, ClassificationSchemeFieldMetaID],
  [ClassificationSchemeField.UUID, ClassificationSchemeFieldMetaUUID],
  [ClassificationSchemeField.LastRevisionDate, ClassificationSchemeFieldMetaLastRevisionDate],
  [ClassificationSchemeField.LastRevisionTime, ClassificationSchemeFieldMetaLastRevisionTime],
  [ClassificationSchemeField.Note, ClassificationSchemeFieldMetaNote],
  [ClassificationSchemeField.Name, ClassificationSchemeFieldMetaName],
  [ClassificationSchemeField.Description, ClassificationSchemeFieldMetaDescription],
  [ClassificationSchemeField.AgencyID, ClassificationSchemeFieldMetaAgencyID],
  [ClassificationSchemeField.AgencyName, ClassificationSchemeFieldMetaAgencyName],
  [ClassificationSchemeField.VersionID, ClassificationSchemeFieldMetaVersionID],
  [ClassificationSchemeField.URI, ClassificationSchemeFieldMetaURI],
  [ClassificationSchemeField.SchemeURI, ClassificationSchemeFieldMetaSchemeURI],
  [ClassificationSchemeField.LanguageID, ClassificationSchemeFieldMetaLanguageID],
  [ClassificationSchemeField.ClassificationCategory, ClassificationSchemeFieldMetaClassificationCategory]
])
