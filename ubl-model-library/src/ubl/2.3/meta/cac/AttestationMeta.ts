import { FieldMeta } from '../FieldMeta'

export enum AttestationField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Description = 'Description',
  Note = 'Note',
  ValidityPeriod = 'ValidityPeriod',
  IssuerParty = 'IssuerParty',
  AttestationLine = 'AttestationLine'
}

export const AttestationFieldMetaUBLExtensions = new FieldMeta<AttestationField>(
  AttestationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const AttestationFieldMetaID = new FieldMeta<AttestationField>(
  AttestationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this attestation',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AttestationFieldMetaDescription = new FieldMeta<AttestationField>(
  AttestationField.Description,
  'Description',
  'Description',
  'Text',
  'A textual description of this attestation',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const AttestationFieldMetaNote = new FieldMeta<AttestationField>(
  AttestationField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const AttestationFieldMetaValidityPeriod = new FieldMeta<AttestationField>(
  AttestationField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  'Period',
  'The period during which this attestation is valid',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const AttestationFieldMetaIssuerParty = new FieldMeta<AttestationField>(
  AttestationField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  'Party',
  'The party issuing this attestation',
  '1',
  'cac',
  undefined,
  undefined
)

export const AttestationFieldMetaAttestationLine = new FieldMeta<AttestationField>(
  AttestationField.AttestationLine,
  'AttestationLine',
  'Attestation Line',
  'AttestationLine',
  'An attestation or statement made and which forms part of this attestation',
  '1',
  'cac',
  undefined,
  undefined
)

export class AttestationFieldMeta {
  public static readonly UBLExtensions = AttestationFieldMetaUBLExtensions
  public static readonly ID = AttestationFieldMetaID
  public static readonly Description = AttestationFieldMetaDescription
  public static readonly Note = AttestationFieldMetaNote
  public static readonly ValidityPeriod = AttestationFieldMetaValidityPeriod
  public static readonly IssuerParty = AttestationFieldMetaIssuerParty
  public static readonly AttestationLine = AttestationFieldMetaAttestationLine
}

export const AttestationFieldMap = new Map([
  [AttestationField.UBLExtensions, AttestationFieldMetaUBLExtensions],
  [AttestationField.ID, AttestationFieldMetaID],
  [AttestationField.Description, AttestationFieldMetaDescription],
  [AttestationField.Note, AttestationFieldMetaNote],
  [AttestationField.ValidityPeriod, AttestationFieldMetaValidityPeriod],
  [AttestationField.IssuerParty, AttestationFieldMetaIssuerParty],
  [AttestationField.AttestationLine, AttestationFieldMetaAttestationLine]
])
