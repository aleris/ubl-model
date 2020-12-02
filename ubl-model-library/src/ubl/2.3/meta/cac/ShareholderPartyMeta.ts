import { FieldMeta } from '../FieldMeta'

export enum ShareholderPartyField {
  UBLExtensions = 'UBLExtensions',
  PartecipationPercent = 'PartecipationPercent',
  Party = 'Party'
}

export const ShareholderPartyFieldMetaUBLExtensions = new FieldMeta<ShareholderPartyField>(
  ShareholderPartyField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ShareholderPartyFieldMetaPartecipationPercent = new FieldMeta<ShareholderPartyField>(
  ShareholderPartyField.PartecipationPercent,
  'PartecipationPercent',
  'Partecipation',
  'Numeric',
  'The shareholder participation, expressed as a percentage.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ShareholderPartyFieldMetaParty = new FieldMeta<ShareholderPartyField>(
  ShareholderPartyField.Party,
  'Party',
  'Party',
  'Party',
  'The shareholder party.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class ShareholderPartyFieldMeta {
  public static readonly UBLExtensions = ShareholderPartyFieldMetaUBLExtensions
  public static readonly PartecipationPercent = ShareholderPartyFieldMetaPartecipationPercent
  public static readonly Party = ShareholderPartyFieldMetaParty
}

export const ShareholderPartyFieldMap = new Map([
  [ShareholderPartyField.UBLExtensions, ShareholderPartyFieldMetaUBLExtensions],
  [ShareholderPartyField.PartecipationPercent, ShareholderPartyFieldMetaPartecipationPercent],
  [ShareholderPartyField.Party, ShareholderPartyFieldMetaParty]
])
