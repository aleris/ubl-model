import { FieldMeta } from '../../FieldMeta'

export enum ResultOfVerificationField {
  ValidatorID = 'ValidatorID',
  ValidationResultCode = 'ValidationResultCode',
  ValidationDate = 'ValidationDate',
  ValidationTime = 'ValidationTime',
  ValidateProcess = 'ValidateProcess',
  ValidateTool = 'ValidateTool',
  ValidateToolVersion = 'ValidateToolVersion',
  SignatoryParty = 'SignatoryParty'
}

export const ResultOfVerificationFieldMetaValidatorID = new FieldMeta<ResultOfVerificationField>(
  ResultOfVerificationField.ValidatorID,
  'ValidatorID',
  'Validator',
  'Identifier',
  'An identifier for the organization, person, service, or server that verified the signature.',
  '0..1',
  undefined,
  undefined
)

export const ResultOfVerificationFieldMetaValidationResultCode = new FieldMeta<ResultOfVerificationField>(
  ResultOfVerificationField.ValidationResultCode,
  'ValidationResultCode',
  'Result Code',
  'Code',
  'A code signifying the result of the verification.',
  '0..1',
  undefined,
  undefined
)

export const ResultOfVerificationFieldMetaValidationDate = new FieldMeta<ResultOfVerificationField>(
  ResultOfVerificationField.ValidationDate,
  'ValidationDate',
  'Validation Date',
  'Date',
  'The date upon which verification took place.',
  '0..1',
  undefined,
  undefined
)

export const ResultOfVerificationFieldMetaValidationTime = new FieldMeta<ResultOfVerificationField>(
  ResultOfVerificationField.ValidationTime,
  'ValidationTime',
  'Validation Time',
  'Time',
  'The time at which verification took place.',
  '0..1',
  undefined,
  undefined
)

export const ResultOfVerificationFieldMetaValidateProcess = new FieldMeta<ResultOfVerificationField>(
  ResultOfVerificationField.ValidateProcess,
  'ValidateProcess',
  'Process',
  'Text',
  'The verification process.',
  '0..1',
  undefined,
  undefined
)

export const ResultOfVerificationFieldMetaValidateTool = new FieldMeta<ResultOfVerificationField>(
  ResultOfVerificationField.ValidateTool,
  'ValidateTool',
  'Tool',
  'Text',
  'The tool used to verify the signature.',
  '0..1',
  undefined,
  undefined
)

export const ResultOfVerificationFieldMetaValidateToolVersion = new FieldMeta<ResultOfVerificationField>(
  ResultOfVerificationField.ValidateToolVersion,
  'ValidateToolVersion',
  'Tool Version',
  'Text',
  'The version of the tool used to verify the signature.',
  '0..1',
  undefined,
  undefined
)

export const ResultOfVerificationFieldMetaSignatoryParty = new FieldMeta<ResultOfVerificationField>(
  ResultOfVerificationField.SignatoryParty,
  'SignatoryParty',
  'Party',
  'Party',
  'The signing party.',
  '0..1',
  undefined,
  undefined
)

export class ResultOfVerificationFieldMeta {
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
  [ResultOfVerificationField.ValidatorID, ResultOfVerificationFieldMetaValidatorID],
  [ResultOfVerificationField.ValidationResultCode, ResultOfVerificationFieldMetaValidationResultCode],
  [ResultOfVerificationField.ValidationDate, ResultOfVerificationFieldMetaValidationDate],
  [ResultOfVerificationField.ValidationTime, ResultOfVerificationFieldMetaValidationTime],
  [ResultOfVerificationField.ValidateProcess, ResultOfVerificationFieldMetaValidateProcess],
  [ResultOfVerificationField.ValidateTool, ResultOfVerificationFieldMetaValidateTool],
  [ResultOfVerificationField.ValidateToolVersion, ResultOfVerificationFieldMetaValidateToolVersion],
  [ResultOfVerificationField.SignatoryParty, ResultOfVerificationFieldMetaSignatoryParty]
])
