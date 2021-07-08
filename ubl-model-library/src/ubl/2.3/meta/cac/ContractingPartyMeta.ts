import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ContractingActivityType } from './ContractingActivityMeta'
import { ContractingPartyTypeType } from './ContractingPartyTypeMeta'
import { ContractingRepresentationTypeType } from './ContractingRepresentationTypeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from './PartyMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ContractingPartyField {
  UBLExtensions = 'UBLExtensions',
  BuyerProfileURI = 'BuyerProfileURI',
  ContractingPartyType = 'ContractingPartyType',
  ContractingActivity = 'ContractingActivity',
  ContractingRepresentationType = 'ContractingRepresentationType',
  Party = 'Party'
}

export const ContractingPartyFieldMetaUBLExtensions = new FieldMeta<ContractingPartyField>(
  ContractingPartyField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ContractingPartyFieldMetaBuyerProfileURI = new FieldMeta<ContractingPartyField>(
  ContractingPartyField.BuyerProfileURI,
  'BuyerProfileURI',
  'Buyer Profile URI',
  IdentifierType.name,
  'The buyer profile is typically located on a web site where the contracting party publishes its procurement opportunities',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Buyer Profile',
  undefined
)

export const ContractingPartyFieldMetaContractingPartyType = new FieldMeta<ContractingPartyField>(
  ContractingPartyField.ContractingPartyType,
  'ContractingPartyType',
  'Contracting Party Type',
  ContractingPartyTypeType.name,
  'The type of contracting party that is independent of its role.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ContractingPartyFieldMetaContractingActivity = new FieldMeta<ContractingPartyField>(
  ContractingPartyField.ContractingActivity,
  'ContractingActivity',
  'Contracting Activity',
  ContractingActivityType.name,
  'The nature of the type of business of the organization',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ContractingPartyFieldMetaContractingRepresentationType = new FieldMeta<ContractingPartyField>(
  ContractingPartyField.ContractingRepresentationType,
  'ContractingRepresentationType',
  'Contracting Representation Type',
  ContractingRepresentationTypeType.name,
  'The type of represention empowering the party to act on behalf of a third party',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ContractingPartyFieldMetaParty = new FieldMeta<ContractingPartyField>(
  ContractingPartyField.Party,
  'Party',
  'Party',
  PartyType.name,
  'The contracting party itself.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export class ContractingPartyFieldMeta {
  public static readonly UBLExtensions = ContractingPartyFieldMetaUBLExtensions
  public static readonly BuyerProfileURI = ContractingPartyFieldMetaBuyerProfileURI
  public static readonly ContractingPartyType = ContractingPartyFieldMetaContractingPartyType
  public static readonly ContractingActivity = ContractingPartyFieldMetaContractingActivity
  public static readonly ContractingRepresentationType = ContractingPartyFieldMetaContractingRepresentationType
  public static readonly Party = ContractingPartyFieldMetaParty
}

export const ContractingPartyFieldMap = new Map([
  [ContractingPartyField.UBLExtensions, ContractingPartyFieldMetaUBLExtensions],
  [ContractingPartyField.BuyerProfileURI, ContractingPartyFieldMetaBuyerProfileURI],
  [ContractingPartyField.ContractingPartyType, ContractingPartyFieldMetaContractingPartyType],
  [ContractingPartyField.ContractingActivity, ContractingPartyFieldMetaContractingActivity],
  [ContractingPartyField.ContractingRepresentationType, ContractingPartyFieldMetaContractingRepresentationType],
  [ContractingPartyField.Party, ContractingPartyFieldMetaParty]
])

export const ContractingPartyType: Type<ContractingPartyField> = {
  name: 'ContractingParty',
  label: 'Contracting Party',
  module: TypeModule.cac,
  definition: 'A class to describe an individual, a group, or a body having a procurement role in a tendering process.',
  fields: ContractingPartyFieldMap,
}
