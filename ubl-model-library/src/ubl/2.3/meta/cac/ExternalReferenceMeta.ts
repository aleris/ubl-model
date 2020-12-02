import { FieldMeta } from '../FieldMeta'

export enum ExternalReferenceField {
  UBLExtensions = 'UBLExtensions',
  URI = 'URI',
  DocumentHash = 'DocumentHash',
  HashAlgorithmMethod = 'HashAlgorithmMethod',
  ExpiryDate = 'ExpiryDate',
  ExpiryTime = 'ExpiryTime',
  MimeCode = 'MimeCode',
  FormatCode = 'FormatCode',
  EncodingCode = 'EncodingCode',
  CharacterSetCode = 'CharacterSetCode',
  FileName = 'FileName',
  Description = 'Description'
}

export const ExternalReferenceFieldMetaUBLExtensions = new FieldMeta<ExternalReferenceField>(
  ExternalReferenceField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ExternalReferenceFieldMetaURI = new FieldMeta<ExternalReferenceField>(
  ExternalReferenceField.URI,
  'URI',
  'URI',
  'Identifier',
  'The Uniform Resource Identifier (URI) that identifies the external object as an Internet resource.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExternalReferenceFieldMetaDocumentHash = new FieldMeta<ExternalReferenceField>(
  ExternalReferenceField.DocumentHash,
  'DocumentHash',
  'Document Hash',
  'Text',
  'A hash value for the externally stored object.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExternalReferenceFieldMetaHashAlgorithmMethod = new FieldMeta<ExternalReferenceField>(
  ExternalReferenceField.HashAlgorithmMethod,
  'HashAlgorithmMethod',
  'Hash Algorithm Method',
  'Text',
  'A hash algorithm used to calculate the hash value of the externally stored object.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExternalReferenceFieldMetaExpiryDate = new FieldMeta<ExternalReferenceField>(
  ExternalReferenceField.ExpiryDate,
  'ExpiryDate',
  'Expiry Date',
  'Date',
  'The date on which availability of the resource can no longer be relied upon.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExternalReferenceFieldMetaExpiryTime = new FieldMeta<ExternalReferenceField>(
  ExternalReferenceField.ExpiryTime,
  'ExpiryTime',
  'Expiry Time',
  'Time',
  'The time after which availability of the resource can no longer be relied upon.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExternalReferenceFieldMetaMimeCode = new FieldMeta<ExternalReferenceField>(
  ExternalReferenceField.MimeCode,
  'MimeCode',
  'Mime Code',
  'Code',
  'A code signifying the mime type of the external object.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExternalReferenceFieldMetaFormatCode = new FieldMeta<ExternalReferenceField>(
  ExternalReferenceField.FormatCode,
  'FormatCode',
  'Format Code',
  'Code',
  'A code signifying the format of the external object.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExternalReferenceFieldMetaEncodingCode = new FieldMeta<ExternalReferenceField>(
  ExternalReferenceField.EncodingCode,
  'EncodingCode',
  'Encoding Code',
  'Code',
  'A code signifying the encoding/decoding algorithm used with the external object.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExternalReferenceFieldMetaCharacterSetCode = new FieldMeta<ExternalReferenceField>(
  ExternalReferenceField.CharacterSetCode,
  'CharacterSetCode',
  'Character Set Code',
  'Code',
  'A code signifying the character set of an external document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExternalReferenceFieldMetaFileName = new FieldMeta<ExternalReferenceField>(
  ExternalReferenceField.FileName,
  'FileName',
  'File Name',
  'Text',
  'The file name of the external object.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExternalReferenceFieldMetaDescription = new FieldMeta<ExternalReferenceField>(
  ExternalReferenceField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the external object.',
  '0..n',
  'cbc',
  undefined,
  'computer accessories for laptops'
)

export class ExternalReferenceFieldMeta {
  public static readonly UBLExtensions = ExternalReferenceFieldMetaUBLExtensions
  public static readonly URI = ExternalReferenceFieldMetaURI
  public static readonly DocumentHash = ExternalReferenceFieldMetaDocumentHash
  public static readonly HashAlgorithmMethod = ExternalReferenceFieldMetaHashAlgorithmMethod
  public static readonly ExpiryDate = ExternalReferenceFieldMetaExpiryDate
  public static readonly ExpiryTime = ExternalReferenceFieldMetaExpiryTime
  public static readonly MimeCode = ExternalReferenceFieldMetaMimeCode
  public static readonly FormatCode = ExternalReferenceFieldMetaFormatCode
  public static readonly EncodingCode = ExternalReferenceFieldMetaEncodingCode
  public static readonly CharacterSetCode = ExternalReferenceFieldMetaCharacterSetCode
  public static readonly FileName = ExternalReferenceFieldMetaFileName
  public static readonly Description = ExternalReferenceFieldMetaDescription
}

export const ExternalReferenceFieldMap = new Map([
  [ExternalReferenceField.UBLExtensions, ExternalReferenceFieldMetaUBLExtensions],
  [ExternalReferenceField.URI, ExternalReferenceFieldMetaURI],
  [ExternalReferenceField.DocumentHash, ExternalReferenceFieldMetaDocumentHash],
  [ExternalReferenceField.HashAlgorithmMethod, ExternalReferenceFieldMetaHashAlgorithmMethod],
  [ExternalReferenceField.ExpiryDate, ExternalReferenceFieldMetaExpiryDate],
  [ExternalReferenceField.ExpiryTime, ExternalReferenceFieldMetaExpiryTime],
  [ExternalReferenceField.MimeCode, ExternalReferenceFieldMetaMimeCode],
  [ExternalReferenceField.FormatCode, ExternalReferenceFieldMetaFormatCode],
  [ExternalReferenceField.EncodingCode, ExternalReferenceFieldMetaEncodingCode],
  [ExternalReferenceField.CharacterSetCode, ExternalReferenceFieldMetaCharacterSetCode],
  [ExternalReferenceField.FileName, ExternalReferenceFieldMetaFileName],
  [ExternalReferenceField.Description, ExternalReferenceFieldMetaDescription]
])
