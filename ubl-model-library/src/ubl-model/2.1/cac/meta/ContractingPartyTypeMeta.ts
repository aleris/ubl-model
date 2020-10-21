import { FieldMeta } from '../../FieldMeta'

export enum ContractingPartyTypeField {
  PartyTypeCode = 'PartyTypeCode',
  PartyType = 'PartyType'
}

export const ContractingPartyTypeFieldMetaPartyTypeCode = new FieldMeta<ContractingPartyTypeField>(
  ContractingPartyTypeField.PartyTypeCode,
  'PartyTypeCode',
  'Party Type Code',
  'Code',
  'A code specifying the type of party that is independent of its role.',
  '0..1',
  undefined,
  undefined
)

export const ContractingPartyTypeFieldMetaPartyType = new FieldMeta<ContractingPartyTypeField>(
  ContractingPartyTypeField.PartyType,
  'PartyType',
  'Party Type',
  'Text',
  'The type of party that is independent of its role, expressed as text.',
  '0..1',
  undefined,
  undefined
)

export class ContractingPartyTypeFieldMeta {
  public static readonly PartyTypeCode = ContractingPartyTypeFieldMetaPartyTypeCode
  public static readonly PartyType = ContractingPartyTypeFieldMetaPartyType
}

export const ContractingPartyTypeFieldMap = new Map([
  [ContractingPartyTypeField.PartyTypeCode, ContractingPartyTypeFieldMetaPartyTypeCode],
  [ContractingPartyTypeField.PartyType, ContractingPartyTypeFieldMetaPartyType]
])
