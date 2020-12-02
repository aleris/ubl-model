import { FieldMeta } from '../FieldMeta'

export enum WinningPartyField {
  UBLExtensions = 'UBLExtensions',
  Rank = 'Rank',
  Party = 'Party'
}

export const WinningPartyFieldMetaUBLExtensions = new FieldMeta<WinningPartyField>(
  WinningPartyField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const WinningPartyFieldMetaRank = new FieldMeta<WinningPartyField>(
  WinningPartyField.Rank,
  'Rank',
  'Rank',
  'Text',
  'Indicates the rank obtained in the award.',
  '0..1',
  'cbc',
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
  'cac',
  undefined,
  undefined
)

export class WinningPartyFieldMeta {
  public static readonly UBLExtensions = WinningPartyFieldMetaUBLExtensions
  public static readonly Rank = WinningPartyFieldMetaRank
  public static readonly Party = WinningPartyFieldMetaParty
}

export const WinningPartyFieldMap = new Map([
  [WinningPartyField.UBLExtensions, WinningPartyFieldMetaUBLExtensions],
  [WinningPartyField.Rank, WinningPartyFieldMetaRank],
  [WinningPartyField.Party, WinningPartyFieldMetaParty]
])
