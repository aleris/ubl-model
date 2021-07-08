import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AttachmentType } from './AttachmentMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from './PartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const SignatureFieldMetaID = new FieldMeta<SignatureField>(
  SignatureField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this signature.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SignatureFieldMetaReasonCode = new FieldMeta<SignatureField>(
  SignatureField.ReasonCode,
  'ReasonCode',
  'Reason',
  CodeType.name,
  'A code defining the reason or purpose of this signature',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SignatureFieldMetaNote = new FieldMeta<SignatureField>(
  SignatureField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures; in particular, information regarding the circumstances in which the signature is being used.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SignatureFieldMetaValidationDate = new FieldMeta<SignatureField>(
  SignatureField.ValidationDate,
  'ValidationDate',
  'Validation Date',
  DateType.name,
  'The date upon which this signature was verified.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SignatureFieldMetaValidationTime = new FieldMeta<SignatureField>(
  SignatureField.ValidationTime,
  'ValidationTime',
  'Validation Time',
  TimeType.name,
  'The time at which this signature was verified.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SignatureFieldMetaValidatorID = new FieldMeta<SignatureField>(
  SignatureField.ValidatorID,
  'ValidatorID',
  'Validator',
  IdentifierType.name,
  'An identifier for the organization, person, service, or server that verified this signature.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SignatureFieldMetaCanonicalizationMethod = new FieldMeta<SignatureField>(
  SignatureField.CanonicalizationMethod,
  'CanonicalizationMethod',
  'Canonicalization Method',
  TextType.name,
  'The method used to perform XML canonicalization of this signature.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SignatureFieldMetaSignatureMethod = new FieldMeta<SignatureField>(
  SignatureField.SignatureMethod,
  'SignatureMethod',
  'Signature Method',
  TextType.name,
  'Text describing the method of signature.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SignatureFieldMetaSignatoryParty = new FieldMeta<SignatureField>(
  SignatureField.SignatoryParty,
  'SignatoryParty',
  'Signatory Party',
  PartyType.name,
  'The signing party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SignatureFieldMetaDigitalSignatureAttachment = new FieldMeta<SignatureField>(
  SignatureField.DigitalSignatureAttachment,
  'DigitalSignatureAttachment',
  'Digital Signature Attachment',
  AttachmentType.name,
  'The actual encoded signature (e.g., in XMLDsig format).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SignatureFieldMetaOriginalDocumentReference = new FieldMeta<SignatureField>(
  SignatureField.OriginalDocumentReference,
  'OriginalDocumentReference',
  'Original Document Reference',
  DocumentReferenceType.name,
  'A reference to the document that the signature applies to. For evidentiary purposes, this may be the document image that the signatory party saw when applying their signature.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const SignatureType: Type<SignatureField> = {
  name: 'Signature',
  label: 'Signature',
  module: TypeModule.cac,
  definition: 'A class to define a signature.',
  fields: SignatureFieldMap,
}
