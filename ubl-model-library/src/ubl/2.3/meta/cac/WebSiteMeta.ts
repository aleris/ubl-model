import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'
import { WebSiteAccessType } from './WebSiteAccessMeta'

export enum WebSiteField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Name = 'Name',
  Description = 'Description',
  WebSiteTypeCode = 'WebSiteTypeCode',
  URI = 'URI',
  WebSiteAccess = 'WebSiteAccess'
}

export const WebSiteFieldMetaUBLExtensions = new FieldMeta<WebSiteField>(
  WebSiteField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const WebSiteFieldMetaID = new FieldMeta<WebSiteField>(
  WebSiteField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for a specific web site.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'UBL'
)

export const WebSiteFieldMetaName = new FieldMeta<WebSiteField>(
  WebSiteField.Name,
  'Name',
  'Name',
  TextType.name,
  'The common name of the web site.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'UBL Online Community'
)

export const WebSiteFieldMetaDescription = new FieldMeta<WebSiteField>(
  WebSiteField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the web site.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'Online community for the Universal Business Language (UBL) OASIS Standard'
)

export const WebSiteFieldMetaWebSiteTypeCode = new FieldMeta<WebSiteField>(
  WebSiteField.WebSiteTypeCode,
  'WebSiteTypeCode',
  'Web Site Type Code',
  CodeType.name,
  'A code that specifies the type web site.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Satellite, Portal, Operative, Industry, ...'
)

export const WebSiteFieldMetaURI = new FieldMeta<WebSiteField>(
  WebSiteField.URI,
  'URI',
  'URI',
  IdentifierType.name,
  'The Uniform Resource Identifier (URI) of the web site; i.e., its Uniform Resource Locator (URL).',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  'http://ubl.xml.org/'
)

export const WebSiteFieldMetaWebSiteAccess = new FieldMeta<WebSiteField>(
  WebSiteField.WebSiteAccess,
  'WebSiteAccess',
  'Web Site Access',
  WebSiteAccessType.name,
  'Access information for the website (e.g. guest credentials).',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class WebSiteFieldMeta {
  public static readonly UBLExtensions = WebSiteFieldMetaUBLExtensions
  public static readonly ID = WebSiteFieldMetaID
  public static readonly Name = WebSiteFieldMetaName
  public static readonly Description = WebSiteFieldMetaDescription
  public static readonly WebSiteTypeCode = WebSiteFieldMetaWebSiteTypeCode
  public static readonly URI = WebSiteFieldMetaURI
  public static readonly WebSiteAccess = WebSiteFieldMetaWebSiteAccess
}

export const WebSiteFieldMap = new Map([
  [WebSiteField.UBLExtensions, WebSiteFieldMetaUBLExtensions],
  [WebSiteField.ID, WebSiteFieldMetaID],
  [WebSiteField.Name, WebSiteFieldMetaName],
  [WebSiteField.Description, WebSiteFieldMetaDescription],
  [WebSiteField.WebSiteTypeCode, WebSiteFieldMetaWebSiteTypeCode],
  [WebSiteField.URI, WebSiteFieldMetaURI],
  [WebSiteField.WebSiteAccess, WebSiteFieldMetaWebSiteAccess]
])

export const WebSiteType: Type<WebSiteField> = {
  name: 'WebSite',
  label: 'Web Site',
  module: TypeModule.cac,
  definition: 'A class to describe a web site.',
  fields: WebSiteFieldMap,
}
