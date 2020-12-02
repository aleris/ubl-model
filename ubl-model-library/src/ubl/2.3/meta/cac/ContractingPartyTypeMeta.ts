import { FieldMeta } from '../FieldMeta'

export enum ContractingPartyTypeField {
  UBLExtensions = 'UBLExtensions',
  PartyTypeCode = 'PartyTypeCode',
  PartyType = 'PartyType'
}

export const ContractingPartyTypeFieldMetaUBLExtensions = new FieldMeta<ContractingPartyTypeField>(
  ContractingPartyTypeField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ContractingPartyTypeFieldMetaPartyTypeCode = new FieldMeta<ContractingPartyTypeField>(
  ContractingPartyTypeField.PartyTypeCode,
  'PartyTypeCode',
  'Party Type Code',
  'Code',
  'A code specifying the type of party that is independent of its role.',
  '0..1',
  'cbc',
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
  'cbc',
  undefined,
  undefined
)

export class ContractingPartyTypeFieldMeta {
  public static readonly UBLExtensions = ContractingPartyTypeFieldMetaUBLExtensions
  public static readonly PartyTypeCode = ContractingPartyTypeFieldMetaPartyTypeCode
  public static readonly PartyType = ContractingPartyTypeFieldMetaPartyType
}

export const ContractingPartyTypeFieldMap = new Map([
  [ContractingPartyTypeField.UBLExtensions, ContractingPartyTypeFieldMetaUBLExtensions],
  [ContractingPartyTypeField.PartyTypeCode, ContractingPartyTypeFieldMetaPartyTypeCode],
  [ContractingPartyTypeField.PartyType, ContractingPartyTypeFieldMetaPartyType]
])
