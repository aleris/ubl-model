import { FieldMeta } from '../../FieldMeta'

export enum ContractingPartyField {
  BuyerProfileURI = 'BuyerProfileURI',
  ContractingPartyType = 'ContractingPartyType',
  ContractingActivity = 'ContractingActivity',
  Party = 'Party'
}

export const ContractingPartyFieldMetaBuyerProfileURI = new FieldMeta<ContractingPartyField>(
  ContractingPartyField.BuyerProfileURI,
  'BuyerProfileURI',
  'URI',
  'Identifier',
  'The buyer profile is typically located on a web site where the contracting party publishes its procurement opportunities',
  '0..1',
  'Buyer Profile',
  undefined
)

export const ContractingPartyFieldMetaContractingPartyType = new FieldMeta<ContractingPartyField>(
  ContractingPartyField.ContractingPartyType,
  'ContractingPartyType',
  'Contracting Party Type',
  'ContractingPartyType',
  'The type of contracting party that is independent of its role.',
  '0..n',
  undefined,
  undefined
)

export const ContractingPartyFieldMetaContractingActivity = new FieldMeta<ContractingPartyField>(
  ContractingPartyField.ContractingActivity,
  'ContractingActivity',
  'Contracting Activity',
  'ContractingActivity',
  'The nature of the type of business of the organization',
  '0..n',
  undefined,
  undefined
)

export const ContractingPartyFieldMetaParty = new FieldMeta<ContractingPartyField>(
  ContractingPartyField.Party,
  'Party',
  'Party',
  'Party',
  'The contracting party itself.',
  '1',
  undefined,
  undefined
)

export class ContractingPartyFieldMeta {
  public static readonly BuyerProfileURI = ContractingPartyFieldMetaBuyerProfileURI
  public static readonly ContractingPartyType = ContractingPartyFieldMetaContractingPartyType
  public static readonly ContractingActivity = ContractingPartyFieldMetaContractingActivity
  public static readonly Party = ContractingPartyFieldMetaParty
}

export const ContractingPartyFieldMap = new Map([
  [ContractingPartyField.BuyerProfileURI, ContractingPartyFieldMetaBuyerProfileURI],
  [ContractingPartyField.ContractingPartyType, ContractingPartyFieldMetaContractingPartyType],
  [ContractingPartyField.ContractingActivity, ContractingPartyFieldMetaContractingActivity],
  [ContractingPartyField.Party, ContractingPartyFieldMetaParty]
])
