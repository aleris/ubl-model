import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum WebSiteAccessField {
  UBLExtensions = 'UBLExtensions',
  URI = 'URI',
  Password = 'Password',
  Login = 'Login'
}

export const WebSiteAccessFieldMetaUBLExtensions = new FieldMeta<WebSiteAccessField>(
  WebSiteAccessField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const WebSiteAccessFieldMetaURI = new FieldMeta<WebSiteAccessField>(
  WebSiteAccessField.URI,
  'URI',
  'URI',
  IdentifierType.name,
  'The Uniform Resource Identifier (URI) for this web site; i.e., its Uniform Resource Locator (URL).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WebSiteAccessFieldMetaPassword = new FieldMeta<WebSiteAccessField>(
  WebSiteAccessField.Password,
  'Password',
  'Password',
  TextType.name,
  'A password to the web site.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  'confidence'
)

export const WebSiteAccessFieldMetaLogin = new FieldMeta<WebSiteAccessField>(
  WebSiteAccessField.Login,
  'Login',
  'Login',
  TextType.name,
  'Text describing login details.',
  FieldCardinality.Uni,
  TypeModule.cbc,
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

export const WebSiteAccessType: Type<WebSiteAccessField> = {
  name: 'WebSiteAccess',
  label: 'Web Site Access',
  module: TypeModule.cac,
  definition: 'A class to describe access to a web site.',
  fields: WebSiteAccessFieldMap,
}
