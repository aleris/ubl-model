import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const WebSiteFieldMetaID = new FieldMeta<WebSiteField>(
  WebSiteField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for a specific web site.',
  '0..1',
  'cbc',
  undefined,
  'UBL'
)

export const WebSiteFieldMetaName = new FieldMeta<WebSiteField>(
  WebSiteField.Name,
  'Name',
  'Name',
  'Text',
  'The common name of the web site.',
  '0..1',
  'cbc',
  undefined,
  'UBL Online Community'
)

export const WebSiteFieldMetaDescription = new FieldMeta<WebSiteField>(
  WebSiteField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the web site.',
  '0..n',
  'cbc',
  undefined,
  'Online community for the Universal Business Language (UBL) OASIS Standard'
)

export const WebSiteFieldMetaWebSiteTypeCode = new FieldMeta<WebSiteField>(
  WebSiteField.WebSiteTypeCode,
  'WebSiteTypeCode',
  'Web Site Type Code',
  'Code',
  'A code that specifies the type web site.',
  '0..1',
  'cbc',
  undefined,
  'Satellite, Portal, Operative, Industry, ...'
)

export const WebSiteFieldMetaURI = new FieldMeta<WebSiteField>(
  WebSiteField.URI,
  'URI',
  'URI',
  'Identifier',
  'The Uniform Resource Identifier (URI) of the web site; i.e., its Uniform Resource Locator (URL).',
  '1',
  'cbc',
  undefined,
  'http://ubl.xml.org/'
)

export const WebSiteFieldMetaWebSiteAccess = new FieldMeta<WebSiteField>(
  WebSiteField.WebSiteAccess,
  'WebSiteAccess',
  'Web Site Access',
  'WebSiteAccess',
  'Access information for the website (e.g. guest credentials).',
  '0..n',
  'cac',
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
