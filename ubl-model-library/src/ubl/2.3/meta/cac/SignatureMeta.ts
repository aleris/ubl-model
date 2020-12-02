import { FieldMeta } from '../FieldMeta'

export enum SignatureField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  ReasonCode = 'ReasonCode',
  Note = 'Note',
  ValidationDate = 'ValidationDate',
  ValidationTime = 'ValidationTime',
  ValidatorID = 'ValidatorID',
  CanonicalizationMethod = 'CanonicalizationMethod',
  SignatureMethod = 'SignatureMethod',
  SignatoryParty = 'SignatoryParty',
  DigitalSignatureAttachment = 'DigitalSignatureAttachment',
  OriginalDocumentReference = 'OriginalDocumentReference'
}

export const SignatureFieldMetaUBLExtensions = new FieldMeta<SignatureField>(
  SignatureField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const SignatureFieldMetaID = new FieldMeta<SignatureField>(
  SignatureField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this signature.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const SignatureFieldMetaReasonCode = new FieldMeta<SignatureField>(
  SignatureField.ReasonCode,
  'ReasonCode',
  'Reason',
  'Code',
  'A code defining the reason or purpose of this signature',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SignatureFieldMetaNote = new FieldMeta<SignatureField>(
  SignatureField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures; in particular, information regarding the circumstances in which the signature is being used.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const SignatureFieldMetaValidationDate = new FieldMeta<SignatureField>(
  SignatureField.ValidationDate,
  'ValidationDate',
  'Validation Date',
  'Date',
  'The date upon which this signature was verified.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SignatureFieldMetaValidationTime = new FieldMeta<SignatureField>(
  SignatureField.ValidationTime,
  'ValidationTime',
  'Validation Time',
  'Time',
  'The time at which this signature was verified.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SignatureFieldMetaValidatorID = new FieldMeta<SignatureField>(
  SignatureField.ValidatorID,
  'ValidatorID',
  'Validator',
  'Identifier',
  'An identifier for the organization, person, service, or server that verified this signature.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SignatureFieldMetaCanonicalizationMethod = new FieldMeta<SignatureField>(
  SignatureField.CanonicalizationMethod,
  'CanonicalizationMethod',
  'Canonicalization Method',
  'Text',
  'The method used to perform XML canonicalization of this signature.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SignatureFieldMetaSignatureMethod = new FieldMeta<SignatureField>(
  SignatureField.SignatureMethod,
  'SignatureMethod',
  'Signature Method',
  'Text',
  'Text describing the method of signature.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SignatureFieldMetaSignatoryParty = new FieldMeta<SignatureField>(
  SignatureField.SignatoryParty,
  'SignatoryParty',
  'Signatory Party',
  'Party',
  'The signing party.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SignatureFieldMetaDigitalSignatureAttachment = new FieldMeta<SignatureField>(
  SignatureField.DigitalSignatureAttachment,
  'DigitalSignatureAttachment',
  'Digital Signature Attachment',
  'Attachment',
  'The actual encoded signature (e.g., in XMLDsig format).',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SignatureFieldMetaOriginalDocumentReference = new FieldMeta<SignatureField>(
  SignatureField.OriginalDocumentReference,
  'OriginalDocumentReference',
  'Original Document Reference',
  'DocumentReference',
  'A reference to the document that the signature applies to. For evidentiary purposes, this may be the document image that the signatory party saw when applying their signature.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class SignatureFieldMeta {
  public static readonly UBLExtensions = SignatureFieldMetaUBLExtensions
  public static readonly ID = SignatureFieldMetaID
  public static readonly ReasonCode = SignatureFieldMetaReasonCode
  public static readonly Note = SignatureFieldMetaNote
  public static readonly ValidationDate = SignatureFieldMetaValidationDate
  public static readonly ValidationTime = SignatureFieldMetaValidationTime
  public static readonly ValidatorID = SignatureFieldMetaValidatorID
  public static readonly CanonicalizationMethod = SignatureFieldMetaCanonicalizationMethod
  public static readonly SignatureMethod = SignatureFieldMetaSignatureMethod
  public static readonly SignatoryParty = SignatureFieldMetaSignatoryParty
  public static readonly DigitalSignatureAttachment = SignatureFieldMetaDigitalSignatureAttachment
  public static readonly OriginalDocumentReference = SignatureFieldMetaOriginalDocumentReference
}

export const SignatureFieldMap = new Map([
  [SignatureField.UBLExtensions, SignatureFieldMetaUBLExtensions],
  [SignatureField.ID, SignatureFieldMetaID],
  [SignatureField.ReasonCode, SignatureFieldMetaReasonCode],
  [SignatureField.Note, SignatureFieldMetaNote],
  [SignatureField.ValidationDate, SignatureFieldMetaValidationDate],
  [SignatureField.ValidationTime, SignatureFieldMetaValidationTime],
  [SignatureField.ValidatorID, SignatureFieldMetaValidatorID],
  [SignatureField.CanonicalizationMethod, SignatureFieldMetaCanonicalizationMethod],
  [SignatureField.SignatureMethod, SignatureFieldMetaSignatureMethod],
  [SignatureField.SignatoryParty, SignatureFieldMetaSignatoryParty],
  [SignatureField.DigitalSignatureAttachment, SignatureFieldMetaDigitalSignatureAttachment],
  [SignatureField.OriginalDocumentReference, SignatureFieldMetaOriginalDocumentReference]
])
