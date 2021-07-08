import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CertificateType } from './CertificateMeta'
import { CodeType } from '../cbc/CodeMeta'
import { PeriodType } from './PeriodMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const AuthorizationFieldMetaPurposeCode = new FieldMeta<AuthorizationField>(
  AuthorizationField.PurposeCode,
  'PurposeCode',
  'Purpose Code',
  CodeType.name,
  'A code defining the business purpose or scope of this authorization',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AuthorizationFieldMetaPurpose = new FieldMeta<AuthorizationField>(
  AuthorizationField.Purpose,
  'Purpose',
  'Purpose',
  TextType.name,
  'The purpose or scope of this authorization expressed as a text',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AuthorizationFieldMetaValidityPeriod = new FieldMeta<AuthorizationField>(
  AuthorizationField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'The period during which this authorization is valid',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const AuthorizationFieldMetaCertificate = new FieldMeta<AuthorizationField>(
  AuthorizationField.Certificate,
  'Certificate',
  'Certificate',
  CertificateType.name,
  'One or more certificates related to this authorization',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const AuthorizationType: Type<AuthorizationField> = {
  name: 'Authorization',
  label: 'Authorization',
  module: TypeModule.cac,
  definition: 'A class to define an authorization that as been issued',
  fields: AuthorizationFieldMap,
}
