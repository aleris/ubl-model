import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { ContactType } from './ContactMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PartyType } from './PartyMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum EndorserPartyField {
  UBLExtensions = 'UBLExtensions',
  RoleCode = 'RoleCode',
  SequenceNumeric = 'SequenceNumeric',
  Party = 'Party',
  SignatoryContact = 'SignatoryContact'
}

export const EndorserPartyFieldMetaUBLExtensions = new FieldMeta<EndorserPartyField>(
  EndorserPartyField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EndorserPartyFieldMetaRoleCode = new FieldMeta<EndorserPartyField>(
  EndorserPartyField.RoleCode,
  'RoleCode',
  'Role Code',
  CodeType.name,
  'A code specifying the role of the party providing the endorsement (e.g., issuer, embassy, insurance, etc.).',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EndorserPartyFieldMetaSequenceNumeric = new FieldMeta<EndorserPartyField>(
  EndorserPartyField.SequenceNumeric,
  'SequenceNumeric',
  'Sequence',
  NumericType.name,
  'A number indicating the order of the endorsement provided by this party in the sequence in which endorsements are to be applied.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EndorserPartyFieldMetaParty = new FieldMeta<EndorserPartyField>(
  EndorserPartyField.Party,
  'Party',
  'Party',
  PartyType.name,
  'The party endorsing the application.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const EndorserPartyFieldMetaSignatoryContact = new FieldMeta<EndorserPartyField>(
  EndorserPartyField.SignatoryContact,
  'SignatoryContact',
  'Signatory Contact',
  ContactType.name,
  'The individual representing the exporter who signs the Certificate of Origin application before submitting it to the issuer party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export class EndorserPartyFieldMeta {
  public static readonly UBLExtensions = EndorserPartyFieldMetaUBLExtensions
  public static readonly RoleCode = EndorserPartyFieldMetaRoleCode
  public static readonly SequenceNumeric = EndorserPartyFieldMetaSequenceNumeric
  public static readonly Party = EndorserPartyFieldMetaParty
  public static readonly SignatoryContact = EndorserPartyFieldMetaSignatoryContact
}

export const EndorserPartyFieldMap = new Map([
  [EndorserPartyField.UBLExtensions, EndorserPartyFieldMetaUBLExtensions],
  [EndorserPartyField.RoleCode, EndorserPartyFieldMetaRoleCode],
  [EndorserPartyField.SequenceNumeric, EndorserPartyFieldMetaSequenceNumeric],
  [EndorserPartyField.Party, EndorserPartyFieldMetaParty],
  [EndorserPartyField.SignatoryContact, EndorserPartyFieldMetaSignatoryContact]
])

export const EndorserPartyType: Type<EndorserPartyField> = {
  name: 'EndorserParty',
  label: 'Endorser Party',
  module: TypeModule.cac,
  definition: 'A class to describe the party endorsing a document.',
  fields: EndorserPartyFieldMap,
}
