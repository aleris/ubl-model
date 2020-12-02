import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const SocialMediaProfileFieldMetaID = new FieldMeta<SocialMediaProfileField>(
  SocialMediaProfileField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for a specific social media.',
  '0..1',
  'cbc',
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
  'cbc',
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
  'cbc',
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
  'cbc',
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
