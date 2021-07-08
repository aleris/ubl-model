import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ClassificationCategoryType } from './ClassificationCategoryMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ClassificationSchemeField {
  UBLExtensions = 'UBLExtensions',
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

export const ClassificationSchemeFieldMetaUBLExtensions = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaID = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this classification scheme.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaUUID = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for this classification scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaLastRevisionDate = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.LastRevisionDate,
  'LastRevisionDate',
  'Last Revision Date',
  DateType.name,
  'The date on which this classification scheme was last revised.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaLastRevisionTime = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.LastRevisionTime,
  'LastRevisionTime',
  'Last Revision Time',
  TimeType.name,
  'The time at which this classification scheme was last revised.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaNote = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaName = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this classification scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'UNSPSC'
)

export const ClassificationSchemeFieldMetaDescription = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this classification scheme.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'an open, global multi-sector standard for classification of products and services'
)

export const ClassificationSchemeFieldMetaAgencyID = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.AgencyID,
  'AgencyID',
  'Agency Identifier',
  IdentifierType.name,
  'An identifier for the agency that maintains this classification scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Defaults to the UN/EDIFACT data element 3055 code list.'
)

export const ClassificationSchemeFieldMetaAgencyName = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.AgencyName,
  'AgencyName',
  'Agency Name',
  TextType.name,
  'The name of the agency that maintains the classification scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaVersionID = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'An identifier for the version of this classification scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaURI = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.URI,
  'URI',
  'URI',
  IdentifierType.name,
  'The Uniform Resource Identifier (URI) of the documentation for this classification scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaSchemeURI = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.SchemeURI,
  'SchemeURI',
  'Scheme URI',
  IdentifierType.name,
  'The Uniform Resource Identifier (URI) of this classification scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaLanguageID = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.LanguageID,
  'LanguageID',
  'Language',
  IdentifierType.name,
  'An identifier for the language of this classification scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ClassificationSchemeFieldMetaClassificationCategory = new FieldMeta<ClassificationSchemeField>(
  ClassificationSchemeField.ClassificationCategory,
  'ClassificationCategory',
  'Classification Category',
  ClassificationCategoryType.name,
  'A description of a category within this classification scheme.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class ClassificationSchemeFieldMeta {
  public static readonly UBLExtensions = ClassificationSchemeFieldMetaUBLExtensions
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
  [ClassificationSchemeField.UBLExtensions, ClassificationSchemeFieldMetaUBLExtensions],
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

export const ClassificationSchemeType: Type<ClassificationSchemeField> = {
  name: 'ClassificationScheme',
  label: 'Classification Scheme',
  module: TypeModule.cac,
  definition: 'A class to define a classification scheme, such as a taxonomy for classifying goods or services.',
  fields: ClassificationSchemeFieldMap,
}
