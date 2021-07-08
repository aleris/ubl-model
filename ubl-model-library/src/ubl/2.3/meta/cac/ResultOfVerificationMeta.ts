import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from './PartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ResultOfVerificationField {
  UBLExtensions = 'UBLExtensions',
  ValidatorID = 'ValidatorID',
  ValidationResultCode = 'ValidationResultCode',
  ValidationDate = 'ValidationDate',
  ValidationTime = 'ValidationTime',
  ValidateProcess = 'ValidateProcess',
  ValidateTool = 'ValidateTool',
  ValidateToolVersion = 'ValidateToolVersion',
  SignatoryParty = 'SignatoryParty'
}

export const ResultOfVerificationFieldMetaUBLExtensions = new FieldMeta<ResultOfVerificationField>(
  ResultOfVerificationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ResultOfVerificationFieldMetaValidatorID = new FieldMeta<ResultOfVerificationField>(
  ResultOfVerificationField.ValidatorID,
  'ValidatorID',
  'Validator',
  IdentifierType.name,
  'An identifier for the organization, person, service, or server that verified the signature.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ResultOfVerificationFieldMetaValidationResultCode = new FieldMeta<ResultOfVerificationField>(
  ResultOfVerificationField.ValidationResultCode,
  'ValidationResultCode',
  'Validation Result Code',
  CodeType.name,
  'A code signifying the result of the verification.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ResultOfVerificationFieldMetaValidationDate = new FieldMeta<ResultOfVerificationField>(
  ResultOfVerificationField.ValidationDate,
  'ValidationDate',
  'Validation Date',
  DateType.name,
  'The date upon which verification took place.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ResultOfVerificationFieldMetaValidationTime = new FieldMeta<ResultOfVerificationField>(
  ResultOfVerificationField.ValidationTime,
  'ValidationTime',
  'Validation Time',
  TimeType.name,
  'The time at which verification took place.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ResultOfVerificationFieldMetaValidateProcess = new FieldMeta<ResultOfVerificationField>(
  ResultOfVerificationField.ValidateProcess,
  'ValidateProcess',
  'Validate Process',
  TextType.name,
  'The verification process.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ResultOfVerificationFieldMetaValidateTool = new FieldMeta<ResultOfVerificationField>(
  ResultOfVerificationField.ValidateTool,
  'ValidateTool',
  'Validate Tool',
  TextType.name,
  'The tool used to verify the signature.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ResultOfVerificationFieldMetaValidateToolVersion = new FieldMeta<ResultOfVerificationField>(
  ResultOfVerificationField.ValidateToolVersion,
  'ValidateToolVersion',
  'Validate Tool Version',
  TextType.name,
  'The version of the tool used to verify the signature.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ResultOfVerificationFieldMetaSignatoryParty = new FieldMeta<ResultOfVerificationField>(
  ResultOfVerificationField.SignatoryParty,
  'SignatoryParty',
  'Signatory Party',
  PartyType.name,
  'The signing party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class ResultOfVerificationFieldMeta {
  public static readonly UBLExtensions = ResultOfVerificationFieldMetaUBLExtensions
  public static readonly ValidatorID = ResultOfVerificationFieldMetaValidatorID
  public static readonly ValidationResultCode = ResultOfVerificationFieldMetaValidationResultCode
  public static readonly ValidationDate = ResultOfVerificationFieldMetaValidationDate
  public static readonly ValidationTime = ResultOfVerificationFieldMetaValidationTime
  public static readonly ValidateProcess = ResultOfVerificationFieldMetaValidateProcess
  public static readonly ValidateTool = ResultOfVerificationFieldMetaValidateTool
  public static readonly ValidateToolVersion = ResultOfVerificationFieldMetaValidateToolVersion
  public static readonly SignatoryParty = ResultOfVerificationFieldMetaSignatoryParty
}

export const ResultOfVerificationFieldMap = new Map([
  [ResultOfVerificationField.UBLExtensions, ResultOfVerificationFieldMetaUBLExtensions],
  [ResultOfVerificationField.ValidatorID, ResultOfVerificationFieldMetaValidatorID],
  [ResultOfVerificationField.ValidationResultCode, ResultOfVerificationFieldMetaValidationResultCode],
  [ResultOfVerificationField.ValidationDate, ResultOfVerificationFieldMetaValidationDate],
  [ResultOfVerificationField.ValidationTime, ResultOfVerificationFieldMetaValidationTime],
  [ResultOfVerificationField.ValidateProcess, ResultOfVerificationFieldMetaValidateProcess],
  [ResultOfVerificationField.ValidateTool, ResultOfVerificationFieldMetaValidateTool],
  [ResultOfVerificationField.ValidateToolVersion, ResultOfVerificationFieldMetaValidateToolVersion],
  [ResultOfVerificationField.SignatoryParty, ResultOfVerificationFieldMetaSignatoryParty]
])

export const ResultOfVerificationType: Type<ResultOfVerificationField> = {
  name: 'ResultOfVerification',
  label: 'Result Of Verification',
  module: TypeModule.cac,
  definition: 'A class to describe the result of an attempt to verify a signature.',
  fields: ResultOfVerificationFieldMap,
}
