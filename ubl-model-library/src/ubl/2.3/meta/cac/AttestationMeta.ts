import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AttestationLineType } from './AttestationLineMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from './PartyMeta'
import { PeriodType } from './PeriodMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const AttestationFieldMetaID = new FieldMeta<AttestationField>(
  AttestationField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this attestation',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AttestationFieldMetaDescription = new FieldMeta<AttestationField>(
  AttestationField.Description,
  'Description',
  'Description',
  TextType.name,
  'A textual description of this attestation',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AttestationFieldMetaNote = new FieldMeta<AttestationField>(
  AttestationField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AttestationFieldMetaValidityPeriod = new FieldMeta<AttestationField>(
  AttestationField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'The period during which this attestation is valid',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const AttestationFieldMetaIssuerParty = new FieldMeta<AttestationField>(
  AttestationField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  PartyType.name,
  'The party issuing this attestation',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const AttestationFieldMetaAttestationLine = new FieldMeta<AttestationField>(
  AttestationField.AttestationLine,
  'AttestationLine',
  'Attestation Line',
  AttestationLineType.name,
  'An attestation or statement made and which forms part of this attestation',
  FieldCardinality.Uni,
  TypeModule.cac,
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

export const AttestationType: Type<AttestationField> = {
  name: 'Attestation',
  label: 'Attestation',
  module: TypeModule.cac,
  definition: 'A class describing an attestation made for an item',
  fields: AttestationFieldMap,
}
