import { FieldMeta } from '../../FieldMeta'

export enum ShareholderPartyField {
  PartecipationPercent = 'PartecipationPercent',
  Party = 'Party'
}

export const ShareholderPartyFieldMetaPartecipationPercent = new FieldMeta<ShareholderPartyField>(
  ShareholderPartyField.PartecipationPercent,
  'PartecipationPercent',
  'Partecipation',
  'Numeric',
  'The shareholder participation, expressed as a percentage.',
  '0..1',
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
  undefined,
  undefined
)

export class ShareholderPartyFieldMeta {
  public static readonly PartecipationPercent = ShareholderPartyFieldMetaPartecipationPercent
  public static readonly Party = ShareholderPartyFieldMetaParty
}

export const ShareholderPartyFieldMap = new Map([
  [ShareholderPartyField.PartecipationPercent, ShareholderPartyFieldMetaPartecipationPercent],
  [ShareholderPartyField.Party, ShareholderPartyFieldMetaParty]
])
