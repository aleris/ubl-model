import { FieldMeta } from '../../FieldMeta'

export enum EndorserPartyField {
  RoleCode = 'RoleCode',
  SequenceNumeric = 'SequenceNumeric',
  Party = 'Party',
  SignatoryContact = 'SignatoryContact'
}

export const EndorserPartyFieldMetaRoleCode = new FieldMeta<EndorserPartyField>(
  EndorserPartyField.RoleCode,
  'RoleCode',
  'Role Code',
  'Code',
  'A code specifying the role of the party providing the endorsement (e.g., issuer, embassy, insurance, etc.).',
  '1',
  undefined,
  undefined
)

export const EndorserPartyFieldMetaSequenceNumeric = new FieldMeta<EndorserPartyField>(
  EndorserPartyField.SequenceNumeric,
  'SequenceNumeric',
  'Sequence',
  'Numeric',
  'A number indicating the order of the endorsement provided by this party in the sequence in which endorsements are to be applied.',
  '1',
  undefined,
  undefined
)

export const EndorserPartyFieldMetaParty = new FieldMeta<EndorserPartyField>(
  EndorserPartyField.Party,
  'Party',
  'Party',
  'Party',
  'The party endorsing the application.',
  '1',
  undefined,
  undefined
)

export const EndorserPartyFieldMetaSignatoryContact = new FieldMeta<EndorserPartyField>(
  EndorserPartyField.SignatoryContact,
  'SignatoryContact',
  'Contact',
  'Contact',
  'The individual representing the exporter who signs the Certificate of Origin application before submitting it to the issuer party.',
  '1',
  undefined,
  undefined
)

export class EndorserPartyFieldMeta {
  public static readonly RoleCode = EndorserPartyFieldMetaRoleCode
  public static readonly SequenceNumeric = EndorserPartyFieldMetaSequenceNumeric
  public static readonly Party = EndorserPartyFieldMetaParty
  public static readonly SignatoryContact = EndorserPartyFieldMetaSignatoryContact
}

export const EndorserPartyFieldMap = new Map([
  [EndorserPartyField.RoleCode, EndorserPartyFieldMetaRoleCode],
  [EndorserPartyField.SequenceNumeric, EndorserPartyFieldMetaSequenceNumeric],
  [EndorserPartyField.Party, EndorserPartyFieldMetaParty],
  [EndorserPartyField.SignatoryContact, EndorserPartyFieldMetaSignatoryContact]
])
