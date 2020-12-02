import { FieldMeta } from '../FieldMeta'

export enum AuthorizationField {
  UBLExtensions = 'UBLExtensions',
  PurposeCode = 'PurposeCode',
  Purpose = 'Purpose',
  ValidityPeriod = 'ValidityPeriod',
  Certificate = 'Certificate'
}

export const AuthorizationFieldMetaUBLExtensions = new FieldMeta<AuthorizationField>(
  AuthorizationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const AuthorizationFieldMetaPurposeCode = new FieldMeta<AuthorizationField>(
  AuthorizationField.PurposeCode,
  'PurposeCode',
  'Purpose Code',
  'Code',
  'A code defining the business purpose or scope of this authorization',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AuthorizationFieldMetaPurpose = new FieldMeta<AuthorizationField>(
  AuthorizationField.Purpose,
  'Purpose',
  'Purpose',
  'Text',
  'The purpose or scope of this authorization expressed as a text',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const AuthorizationFieldMetaValidityPeriod = new FieldMeta<AuthorizationField>(
  AuthorizationField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  'Period',
  'The period during which this authorization is valid',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const AuthorizationFieldMetaCertificate = new FieldMeta<AuthorizationField>(
  AuthorizationField.Certificate,
  'Certificate',
  'Certificate',
  'Certificate',
  'One or more certificates related to this authorization',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class AuthorizationFieldMeta {
  public static readonly UBLExtensions = AuthorizationFieldMetaUBLExtensions
  public static readonly PurposeCode = AuthorizationFieldMetaPurposeCode
  public static readonly Purpose = AuthorizationFieldMetaPurpose
  public static readonly ValidityPeriod = AuthorizationFieldMetaValidityPeriod
  public static readonly Certificate = AuthorizationFieldMetaCertificate
}

export const AuthorizationFieldMap = new Map([
  [AuthorizationField.UBLExtensions, AuthorizationFieldMetaUBLExtensions],
  [AuthorizationField.PurposeCode, AuthorizationFieldMetaPurposeCode],
  [AuthorizationField.Purpose, AuthorizationFieldMetaPurpose],
  [AuthorizationField.ValidityPeriod, AuthorizationFieldMetaValidityPeriod],
  [AuthorizationField.Certificate, AuthorizationFieldMetaCertificate]
])
