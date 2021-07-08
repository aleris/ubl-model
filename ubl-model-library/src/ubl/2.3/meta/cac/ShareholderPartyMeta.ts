import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { NumericType } from '../cbc/NumericMeta'
import { PartyType } from './PartyMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ShareholderPartyField {
  UBLExtensions = 'UBLExtensions',
  PartecipationPercent = 'PartecipationPercent',
  Party = 'Party'
}

export const ShareholderPartyFieldMetaUBLExtensions = new FieldMeta<ShareholderPartyField>(
  ShareholderPartyField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ShareholderPartyFieldMetaPartecipationPercent = new FieldMeta<ShareholderPartyField>(
  ShareholderPartyField.PartecipationPercent,
  'PartecipationPercent',
  'Partecipation',
  NumericType.name,
  'The shareholder participation, expressed as a percentage.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShareholderPartyFieldMetaParty = new FieldMeta<ShareholderPartyField>(
  ShareholderPartyField.Party,
  'Party',
  'Party',
  PartyType.name,
  'The shareholder party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const ShareholderPartyType: Type<ShareholderPartyField> = {
  name: 'ShareholderParty',
  label: 'Shareholder Party',
  module: TypeModule.cac,
  definition: 'A class to describe a shareholder party.',
  fields: ShareholderPartyFieldMap,
}
