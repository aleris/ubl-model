import { FieldMeta } from '../../FieldMeta'

export enum EconomicOperatorPartyField {
  QualifyingParty = 'QualifyingParty',
  EconomicOperatorRole = 'EconomicOperatorRole',
  Party = 'Party'
}

export const EconomicOperatorPartyFieldMetaQualifyingParty = new FieldMeta<EconomicOperatorPartyField>(
  EconomicOperatorPartyField.QualifyingParty,
  'QualifyingParty',
  'Qualifying Party',
  'QualifyingParty',
  'The party qualifying this economic operator.',
  '0..n',
  undefined,
  undefined
)

export const EconomicOperatorPartyFieldMetaEconomicOperatorRole = new FieldMeta<EconomicOperatorPartyField>(
  EconomicOperatorPartyField.EconomicOperatorRole,
  'EconomicOperatorRole',
  'Economic Operator Role',
  'EconomicOperatorRole',
  'The role of the party in a tender consortium.',
  '0..1',
  undefined,
  undefined
)

export const EconomicOperatorPartyFieldMetaParty = new FieldMeta<EconomicOperatorPartyField>(
  EconomicOperatorPartyField.Party,
  'Party',
  'Party',
  'Party',
  'The party information about the economic operator in a tender.',
  '1',
  undefined,
  undefined
)

export class EconomicOperatorPartyFieldMeta {
  public static readonly QualifyingParty = EconomicOperatorPartyFieldMetaQualifyingParty
  public static readonly EconomicOperatorRole = EconomicOperatorPartyFieldMetaEconomicOperatorRole
  public static readonly Party = EconomicOperatorPartyFieldMetaParty
}

export const EconomicOperatorPartyFieldMap = new Map([
  [EconomicOperatorPartyField.QualifyingParty, EconomicOperatorPartyFieldMetaQualifyingParty],
  [EconomicOperatorPartyField.EconomicOperatorRole, EconomicOperatorPartyFieldMetaEconomicOperatorRole],
  [EconomicOperatorPartyField.Party, EconomicOperatorPartyFieldMetaParty]
])
