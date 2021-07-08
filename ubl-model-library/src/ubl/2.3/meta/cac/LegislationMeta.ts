import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { LanguageType } from './LanguageMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum LegislationField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Title = 'Title',
  Description = 'Description',
  JurisdictionLevel = 'JurisdictionLevel',
  Article = 'Article',
  URI = 'URI',
  Language = 'Language',
  JurisdictionRegionAddress = 'JurisdictionRegionAddress'
}

export const LegislationFieldMetaUBLExtensions = new FieldMeta<LegislationField>(
  LegislationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const LegislationFieldMetaID = new FieldMeta<LegislationField>(
  LegislationField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier to refer to the legislation.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LegislationFieldMetaTitle = new FieldMeta<LegislationField>(
  LegislationField.Title,
  'Title',
  'Title',
  TextType.name,
  'The title of the legislation.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LegislationFieldMetaDescription = new FieldMeta<LegislationField>(
  LegislationField.Description,
  'Description',
  'Description',
  TextType.name,
  'The textual description of the legislation.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LegislationFieldMetaJurisdictionLevel = new FieldMeta<LegislationField>(
  LegislationField.JurisdictionLevel,
  'JurisdictionLevel',
  'Jurisdiction Level',
  TextType.name,
  'The jurisdiction level for the legislation.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LegislationFieldMetaArticle = new FieldMeta<LegislationField>(
  LegislationField.Article,
  'Article',
  'Article',
  TextType.name,
  'The article of the legislation.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LegislationFieldMetaURI = new FieldMeta<LegislationField>(
  LegislationField.URI,
  'URI',
  'URI',
  IdentifierType.name,
  'A URI to the legislation.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LegislationFieldMetaLanguage = new FieldMeta<LegislationField>(
  LegislationField.Language,
  'Language',
  'Language',
  LanguageType.name,
  'The language of the legislation.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const LegislationFieldMetaJurisdictionRegionAddress = new FieldMeta<LegislationField>(
  LegislationField.JurisdictionRegionAddress,
  'JurisdictionRegionAddress',
  'Jurisdiction Region Address',
  AddressType.name,
  'The geopolitical region in which this legislation applies.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class LegislationFieldMeta {
  public static readonly UBLExtensions = LegislationFieldMetaUBLExtensions
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
  [LegislationField.UBLExtensions, LegislationFieldMetaUBLExtensions],
  [LegislationField.ID, LegislationFieldMetaID],
  [LegislationField.Title, LegislationFieldMetaTitle],
  [LegislationField.Description, LegislationFieldMetaDescription],
  [LegislationField.JurisdictionLevel, LegislationFieldMetaJurisdictionLevel],
  [LegislationField.Article, LegislationFieldMetaArticle],
  [LegislationField.URI, LegislationFieldMetaURI],
  [LegislationField.Language, LegislationFieldMetaLanguage],
  [LegislationField.JurisdictionRegionAddress, LegislationFieldMetaJurisdictionRegionAddress]
])

export const LegislationType: Type<LegislationField> = {
  name: 'Legislation',
  label: 'Legislation',
  module: TypeModule.cac,
  definition: 'A class to describe a reference to a piece of legislation.',
  fields: LegislationFieldMap,
}
