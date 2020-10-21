import { FieldMeta } from '../../FieldMeta'

export enum WebSiteAccessField {
  URI = 'URI',
  Password = 'Password',
  Login = 'Login'
}

export const WebSiteAccessFieldMetaURI = new FieldMeta<WebSiteAccessField>(
  WebSiteAccessField.URI,
  'URI',
  'URI',
  'Identifier',
  'The Uniform Resource Identifier (URI) for this web site; i.e., its Uniform Resource Locator (URL).',
  '0..1',
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
  undefined,
  'Utsuser'
)

export class WebSiteAccessFieldMeta {
  public static readonly URI = WebSiteAccessFieldMetaURI
  public static readonly Password = WebSiteAccessFieldMetaPassword
  public static readonly Login = WebSiteAccessFieldMetaLogin
}

export const WebSiteAccessFieldMap = new Map([
  [WebSiteAccessField.URI, WebSiteAccessFieldMetaURI],
  [WebSiteAccessField.Password, WebSiteAccessFieldMetaPassword],
  [WebSiteAccessField.Login, WebSiteAccessFieldMetaLogin]
])
