import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ContractingPartyFieldMetaBuyerProfileURI = new FieldMeta<ContractingPartyField>(
  ContractingPartyField.BuyerProfileURI,
  'BuyerProfileURI',
  'Buyer Profile URI',
  'Identifier',
  'The buyer profile is typically located on a web site where the contracting party publishes its procurement opportunities',
  '0..1',
  'cbc',
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
  'cac',
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
  'cac',
  undefined,
  undefined
)

export const ContractingPartyFieldMetaContractingRepresentationType = new FieldMeta<ContractingPartyField>(
  ContractingPartyField.ContractingRepresentationType,
  'ContractingRepresentationType',
  'Contracting Representation Type',
  'ContractingRepresentationType',
  'The type of represention empowering the party to act on behalf of a third party',
  '0..1',
  'cac',
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
  'cac',
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
