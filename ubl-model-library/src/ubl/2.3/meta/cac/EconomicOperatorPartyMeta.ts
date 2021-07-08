import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { EconomicOperatorRoleType } from './EconomicOperatorRoleMeta'
import { PartyType } from './PartyMeta'
import { QualifyingPartyType } from './QualifyingPartyMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum EconomicOperatorPartyField {
  UBLExtensions = 'UBLExtensions',
  QualifyingParty = 'QualifyingParty',
  EconomicOperatorRole = 'EconomicOperatorRole',
  Party = 'Party'
}

export const EconomicOperatorPartyFieldMetaUBLExtensions = new FieldMeta<EconomicOperatorPartyField>(
  EconomicOperatorPartyField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EconomicOperatorPartyFieldMetaQualifyingParty = new FieldMeta<EconomicOperatorPartyField>(
  EconomicOperatorPartyField.QualifyingParty,
  'QualifyingParty',
  'Qualifying Party',
  QualifyingPartyType.name,
  'The party qualifying this economic operator.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const EconomicOperatorPartyFieldMetaEconomicOperatorRole = new FieldMeta<EconomicOperatorPartyField>(
  EconomicOperatorPartyField.EconomicOperatorRole,
  'EconomicOperatorRole',
  'Economic Operator Role',
  EconomicOperatorRoleType.name,
  'The role of the party in a tender consortium.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const EconomicOperatorPartyFieldMetaParty = new FieldMeta<EconomicOperatorPartyField>(
  EconomicOperatorPartyField.Party,
  'Party',
  'Party',
  PartyType.name,
  'The party information about the economic operator in a tender.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export class EconomicOperatorPartyFieldMeta {
  public static readonly UBLExtensions = EconomicOperatorPartyFieldMetaUBLExtensions
  public static readonly QualifyingParty = EconomicOperatorPartyFieldMetaQualifyingParty
  public static readonly EconomicOperatorRole = EconomicOperatorPartyFieldMetaEconomicOperatorRole
  public static readonly Party = EconomicOperatorPartyFieldMetaParty
}

export const EconomicOperatorPartyFieldMap = new Map([
  [EconomicOperatorPartyField.UBLExtensions, EconomicOperatorPartyFieldMetaUBLExtensions],
  [EconomicOperatorPartyField.QualifyingParty, EconomicOperatorPartyFieldMetaQualifyingParty],
  [EconomicOperatorPartyField.EconomicOperatorRole, EconomicOperatorPartyFieldMetaEconomicOperatorRole],
  [EconomicOperatorPartyField.Party, EconomicOperatorPartyFieldMetaParty]
])

export const EconomicOperatorPartyType: Type<EconomicOperatorPartyField> = {
  name: 'EconomicOperatorParty',
  label: 'Economic Operator Party',
  module: TypeModule.cac,
  definition: 'A class to describe a potential contractor, supplier and service provider responding to a tender.',
  fields: EconomicOperatorPartyFieldMap,
}
