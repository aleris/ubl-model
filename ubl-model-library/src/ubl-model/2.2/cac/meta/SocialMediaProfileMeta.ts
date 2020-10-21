import { FieldMeta } from '../../FieldMeta'

export enum SocialMediaProfileField {
  ID = 'ID',
  Name = 'Name',
  SocialMediaTypeCode = 'SocialMediaTypeCode',
  URI = 'URI'
}

export const SocialMediaProfileFieldMetaID = new FieldMeta<SocialMediaProfileField>(
  SocialMediaProfileField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for a specific social media.',
  '0..1',
  undefined,
  'FB'
)

export const SocialMediaProfileFieldMetaName = new FieldMeta<SocialMediaProfileField>(
  SocialMediaProfileField.Name,
  'Name',
  'Name',
  'Text',
  'The common name of the social media.',
  '0..1',
  undefined,
  'Facebook'
)

export const SocialMediaProfileFieldMetaSocialMediaTypeCode = new FieldMeta<SocialMediaProfileField>(
  SocialMediaProfileField.SocialMediaTypeCode,
  'SocialMediaTypeCode',
  'Social Media Type Code',
  'Code',
  'A code that specifies the type of social media.',
  '0..1',
  undefined,
  'BusinessNetwork, SocialNetwork, ...'
)

export const SocialMediaProfileFieldMetaURI = new FieldMeta<SocialMediaProfileField>(
  SocialMediaProfileField.URI,
  'URI',
  'URI',
  'Identifier',
  'The Uniform Resource Identifier (URI) of a party profile in the social media; i.e., its Uniform Resource Locator (URL).',
  '1',
  undefined,
  'https://www.facebook.com/oasis.open/'
)

export class SocialMediaProfileFieldMeta {
  public static readonly ID = SocialMediaProfileFieldMetaID
  public static readonly Name = SocialMediaProfileFieldMetaName
  public static readonly SocialMediaTypeCode = SocialMediaProfileFieldMetaSocialMediaTypeCode
  public static readonly URI = SocialMediaProfileFieldMetaURI
}

export const SocialMediaProfileFieldMap = new Map([
  [SocialMediaProfileField.ID, SocialMediaProfileFieldMetaID],
  [SocialMediaProfileField.Name, SocialMediaProfileFieldMetaName],
  [SocialMediaProfileField.SocialMediaTypeCode, SocialMediaProfileFieldMetaSocialMediaTypeCode],
  [SocialMediaProfileField.URI, SocialMediaProfileFieldMetaURI]
])
