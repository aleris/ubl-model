import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum SocialMediaProfileField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Name = 'Name',
  SocialMediaTypeCode = 'SocialMediaTypeCode',
  URI = 'URI'
}

export const SocialMediaProfileFieldMetaUBLExtensions = new FieldMeta<SocialMediaProfileField>(
  SocialMediaProfileField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const SocialMediaProfileFieldMetaID = new FieldMeta<SocialMediaProfileField>(
  SocialMediaProfileField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for a specific social media.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'FB'
)

export const SocialMediaProfileFieldMetaName = new FieldMeta<SocialMediaProfileField>(
  SocialMediaProfileField.Name,
  'Name',
  'Name',
  TextType.name,
  'The common name of the social media.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Facebook'
)

export const SocialMediaProfileFieldMetaSocialMediaTypeCode = new FieldMeta<SocialMediaProfileField>(
  SocialMediaProfileField.SocialMediaTypeCode,
  'SocialMediaTypeCode',
  'Social Media Type Code',
  CodeType.name,
  'A code that specifies the type of social media.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BusinessNetwork, SocialNetwork, ...'
)

export const SocialMediaProfileFieldMetaURI = new FieldMeta<SocialMediaProfileField>(
  SocialMediaProfileField.URI,
  'URI',
  'URI',
  IdentifierType.name,
  'The Uniform Resource Identifier (URI) of a party profile in the social media; i.e., its Uniform Resource Locator (URL).',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  'https://www.facebook.com/oasis.open/'
)

export class SocialMediaProfileFieldMeta {
  public static readonly UBLExtensions = SocialMediaProfileFieldMetaUBLExtensions
  public static readonly ID = SocialMediaProfileFieldMetaID
  public static readonly Name = SocialMediaProfileFieldMetaName
  public static readonly SocialMediaTypeCode = SocialMediaProfileFieldMetaSocialMediaTypeCode
  public static readonly URI = SocialMediaProfileFieldMetaURI
}

export const SocialMediaProfileFieldMap = new Map([
  [SocialMediaProfileField.UBLExtensions, SocialMediaProfileFieldMetaUBLExtensions],
  [SocialMediaProfileField.ID, SocialMediaProfileFieldMetaID],
  [SocialMediaProfileField.Name, SocialMediaProfileFieldMetaName],
  [SocialMediaProfileField.SocialMediaTypeCode, SocialMediaProfileFieldMetaSocialMediaTypeCode],
  [SocialMediaProfileField.URI, SocialMediaProfileFieldMetaURI]
])

export const SocialMediaProfileType: Type<SocialMediaProfileField> = {
  name: 'SocialMediaProfile',
  label: 'Social Media Profile',
  module: TypeModule.cac,
  definition: 'A class to describe a social media profile.',
  fields: SocialMediaProfileFieldMap,
}
