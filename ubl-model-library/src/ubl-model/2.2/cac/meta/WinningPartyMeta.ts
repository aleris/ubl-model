import { FieldMeta } from '../../FieldMeta'

export enum WinningPartyField {
  Rank = 'Rank',
  Party = 'Party'
}

export const WinningPartyFieldMetaRank = new FieldMeta<WinningPartyField>(
  WinningPartyField.Rank,
  'Rank',
  'Rank',
  'Text',
  'Indicates the rank obtained in the award.',
  '0..1',
  undefined,
  undefined
)

export const WinningPartyFieldMetaParty = new FieldMeta<WinningPartyField>(
  WinningPartyField.Party,
  'Party',
  'Party',
  'Party',
  'Information about an organization, sub-organization, or individual fulfilling a role in a business process.',
  '1',
  undefined,
  undefined
)

export class WinningPartyFieldMeta {
  public static readonly Rank = WinningPartyFieldMetaRank
  public static readonly Party = WinningPartyFieldMetaParty
}

export const WinningPartyFieldMap = new Map([
  [WinningPartyField.Rank, WinningPartyFieldMetaRank],
  [WinningPartyField.Party, WinningPartyFieldMetaParty]
])
