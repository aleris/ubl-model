import { FieldMeta } from '../FieldMeta'

export enum WebSiteAccessField {
  UBLExtensions = 'UBLExtensions',
  URI = 'URI',
  Password = 'Password',
  Login = 'Login'
}

export const WebSiteAccessFieldMetaUBLExtensions = new FieldMeta<WebSiteAccessField>(
  WebSiteAccessField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const WebSiteAccessFieldMetaURI = new FieldMeta<WebSiteAccessField>(
  WebSiteAccessField.URI,
  'URI',
  'URI',
  'Identifier',
  'The Uniform Resource Identifier (URI) for this web site; i.e., its Uniform Resource Locator (URL).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const WebSiteAccessFieldMetaPassword = new FieldMeta<WebSiteAccessField>(
  WebSiteAccessField.Password,
  'Password',
  'Password',
  'Text',
  'A password to the web site.',
  '1',
  'cbc',
  undefined,
  'confidence'
)

export const WebSiteAccessFieldMetaLogin = new FieldMeta<WebSiteAccessField>(
  WebSiteAccessField.Login,
  'Login',
  'Login',
  'Text',
  'Text describing login details.',
  '1',
  'cbc',
  undefined,
  'Utsuser'
)

export class WebSiteAccessFieldMeta {
  public static readonly UBLExtensions = WebSiteAccessFieldMetaUBLExtensions
  public static readonly URI = WebSiteAccessFieldMetaURI
  public static readonly Password = WebSiteAccessFieldMetaPassword
  public static readonly Login = WebSiteAccessFieldMetaLogin
}

export const WebSiteAccessFieldMap = new Map([
  [WebSiteAccessField.UBLExtensions, WebSiteAccessFieldMetaUBLExtensions],
  [WebSiteAccessField.URI, WebSiteAccessFieldMetaURI],
  [WebSiteAccessField.Password, WebSiteAccessFieldMetaPassword],
  [WebSiteAccessField.Login, WebSiteAccessFieldMetaLogin]
])
