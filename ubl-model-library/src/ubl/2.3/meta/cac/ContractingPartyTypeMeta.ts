import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ContractingPartyTypeField {
  UBLExtensions = 'UBLExtensions',
  PartyTypeCode = 'PartyTypeCode',
  PartyType = 'PartyType'
}

export const ContractingPartyTypeFieldMetaUBLExtensions = new FieldMeta<ContractingPartyTypeField>(
  ContractingPartyTypeField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ContractingPartyTypeFieldMetaPartyTypeCode = new FieldMeta<ContractingPartyTypeField>(
  ContractingPartyTypeField.PartyTypeCode,
  'PartyTypeCode',
  'Party Type Code',
  CodeType.name,
  'A code specifying the type of party that is independent of its role.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractingPartyTypeFieldMetaPartyType = new FieldMeta<ContractingPartyTypeField>(
  ContractingPartyTypeField.PartyType,
  'PartyType',
  'Party Type',
  TextType.name,
  'The type of party that is independent of its role, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
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

export const ContractingPartyTypeType: Type<ContractingPartyTypeField> = {
  name: 'ContractingPartyType',
  label: 'Contracting Party Type',
  module: TypeModule.cac,
  definition: 'The type of contracting party that is independent of its role.',
  fields: ContractingPartyTypeFieldMap,
}
