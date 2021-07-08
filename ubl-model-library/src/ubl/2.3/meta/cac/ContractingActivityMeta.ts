import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ContractingActivityField {
  UBLExtensions = 'UBLExtensions',
  ActivityTypeCode = 'ActivityTypeCode',
  ActivityType = 'ActivityType'
}

export const ContractingActivityFieldMetaUBLExtensions = new FieldMeta<ContractingActivityField>(
  ContractingActivityField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ContractingActivityFieldMetaActivityTypeCode = new FieldMeta<ContractingActivityField>(
  ContractingActivityField.ActivityTypeCode,
  'ActivityTypeCode',
  'Activity Type Code',
  CodeType.name,
  'A code specifying the nature of the type of business of the organization.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractingActivityFieldMetaActivityType = new FieldMeta<ContractingActivityField>(
  ContractingActivityField.ActivityType,
  'ActivityType',
  'Activity Type',
  TextType.name,
  'The nature of the type of business of the organization, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class ContractingActivityFieldMeta {
  public static readonly UBLExtensions = ContractingActivityFieldMetaUBLExtensions
  public static readonly ActivityTypeCode = ContractingActivityFieldMetaActivityTypeCode
  public static readonly ActivityType = ContractingActivityFieldMetaActivityType
}

export const ContractingActivityFieldMap = new Map([
  [ContractingActivityField.UBLExtensions, ContractingActivityFieldMetaUBLExtensions],
  [ContractingActivityField.ActivityTypeCode, ContractingActivityFieldMetaActivityTypeCode],
  [ContractingActivityField.ActivityType, ContractingActivityFieldMetaActivityType]
])

export const ContractingActivityType: Type<ContractingActivityField> = {
  name: 'ContractingActivity',
  label: 'Contracting Activity',
  module: TypeModule.cac,
  definition: 'The nature of the type of business of the organization.',
  fields: ContractingActivityFieldMap,
}
