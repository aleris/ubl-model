import { FieldMeta } from '../../FieldMeta'

export enum LegislationField {
  ID = 'ID',
  Title = 'Title',
  Description = 'Description',
  JurisdictionLevel = 'JurisdictionLevel',
  Article = 'Article',
  URI = 'URI',
  Language = 'Language',
  JurisdictionRegionAddress = 'JurisdictionRegionAddress'
}

export const LegislationFieldMetaID = new FieldMeta<LegislationField>(
  LegislationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier to refer to the legislation.',
  '0..1',
  undefined,
  undefined
)

export const LegislationFieldMetaTitle = new FieldMeta<LegislationField>(
  LegislationField.Title,
  'Title',
  'Title',
  'Text',
  'The title of the legislation.',
  '0..n',
  undefined,
  undefined
)

export const LegislationFieldMetaDescription = new FieldMeta<LegislationField>(
  LegislationField.Description,
  'Description',
  'Description',
  'Text',
  'The textual description of the legislation.',
  '0..n',
  undefined,
  undefined
)

export const LegislationFieldMetaJurisdictionLevel = new FieldMeta<LegislationField>(
  LegislationField.JurisdictionLevel,
  'JurisdictionLevel',
  'Jurisdiction Level',
  'Text',
  'The jurisdiction level for the legislation.',
  '0..n',
  undefined,
  undefined
)

export const LegislationFieldMetaArticle = new FieldMeta<LegislationField>(
  LegislationField.Article,
  'Article',
  'Article',
  'Text',
  'The article of the legislation.',
  '0..n',
  undefined,
  undefined
)

export const LegislationFieldMetaURI = new FieldMeta<LegislationField>(
  LegislationField.URI,
  'URI',
  'URI',
  'Identifier',
  'A URI to the legislation.',
  '0..n',
  undefined,
  undefined
)

export const LegislationFieldMetaLanguage = new FieldMeta<LegislationField>(
  LegislationField.Language,
  'Language',
  'Language',
  'Language',
  'The language of the legislation.',
  '0..n',
  undefined,
  undefined
)

export const LegislationFieldMetaJurisdictionRegionAddress = new FieldMeta<LegislationField>(
  LegislationField.JurisdictionRegionAddress,
  'JurisdictionRegionAddress',
  'Address',
  'Address',
  'The geopolitical region in which this legislation applies.',
  '0..n',
  undefined,
  undefined
)

export class LegislationFieldMeta {
  public static readonly ID = LegislationFieldMetaID
  public static readonly Title = LegislationFieldMetaTitle
  public static readonly Description = LegislationFieldMetaDescription
  public static readonly JurisdictionLevel = LegislationFieldMetaJurisdictionLevel
  public static readonly Article = LegislationFieldMetaArticle
  public static readonly URI = LegislationFieldMetaURI
  public static readonly Language = LegislationFieldMetaLanguage
  public static readonly JurisdictionRegionAddress = LegislationFieldMetaJurisdictionRegionAddress
}

export const LegislationFieldMap = new Map([
  [LegislationField.ID, LegislationFieldMetaID],
  [LegislationField.Title, LegislationFieldMetaTitle],
  [LegislationField.Description, LegislationFieldMetaDescription],
  [LegislationField.JurisdictionLevel, LegislationFieldMetaJurisdictionLevel],
  [LegislationField.Article, LegislationFieldMetaArticle],
  [LegislationField.URI, LegislationFieldMetaURI],
  [LegislationField.Language, LegislationFieldMetaLanguage],
  [LegislationField.JurisdictionRegionAddress, LegislationFieldMetaJurisdictionRegionAddress]
])
