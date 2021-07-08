import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { PartyType } from './PartyMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum WinningPartyField {
  UBLExtensions = 'UBLExtensions',
  Rank = 'Rank',
  Party = 'Party'
}

export const WinningPartyFieldMetaUBLExtensions = new FieldMeta<WinningPartyField>(
  WinningPartyField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const WinningPartyFieldMetaRank = new FieldMeta<WinningPartyField>(
  WinningPartyField.Rank,
  'Rank',
  'Rank',
  TextType.name,
  'Indicates the rank obtained in the award.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WinningPartyFieldMetaParty = new FieldMeta<WinningPartyField>(
  WinningPartyField.Party,
  'Party',
  'Party',
  PartyType.name,
  'Information about an organization, sub-organization, or individual fulfilling a role in a business process.',
  FieldCardinality.Uni,
  TypeModule.cac,
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

export const WinningPartyType: Type<WinningPartyField> = {
  name: 'WinningParty',
  label: 'Winning Party',
  module: TypeModule.cac,
  definition: 'A party that is identified as the awarded by a tender result.',
  fields: WinningPartyFieldMap,
}
