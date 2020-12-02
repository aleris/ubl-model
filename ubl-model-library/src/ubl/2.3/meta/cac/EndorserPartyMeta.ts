import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const EndorserPartyFieldMetaRoleCode = new FieldMeta<EndorserPartyField>(
  EndorserPartyField.RoleCode,
  'RoleCode',
  'Role Code',
  'Code',
  'A code specifying the role of the party providing the endorsement (e.g., issuer, embassy, insurance, etc.).',
  '1',
  'cbc',
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
  'cbc',
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
  'cac',
  undefined,
  undefined
)

export const EndorserPartyFieldMetaSignatoryContact = new FieldMeta<EndorserPartyField>(
  EndorserPartyField.SignatoryContact,
  'SignatoryContact',
  'Signatory Contact',
  'Contact',
  'The individual representing the exporter who signs the Certificate of Origin application before submitting it to the issuer party.',
  '1',
  'cac',
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
