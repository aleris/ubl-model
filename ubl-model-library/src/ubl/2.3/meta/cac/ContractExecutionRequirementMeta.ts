import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ContractExecutionRequirementField {
  UBLExtensions = 'UBLExtensions',
  Name = 'Name',
  ExecutionRequirementCode = 'ExecutionRequirementCode',
  Description = 'Description'
}

export const ContractExecutionRequirementFieldMetaUBLExtensions = new FieldMeta<ContractExecutionRequirementField>(
  ContractExecutionRequirementField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ContractExecutionRequirementFieldMetaName = new FieldMeta<ContractExecutionRequirementField>(
  ContractExecutionRequirementField.Name,
  'Name',
  'Name',
  TextType.name,
  'A name for this requirement.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractExecutionRequirementFieldMetaExecutionRequirementCode = new FieldMeta<ContractExecutionRequirementField>(
  ContractExecutionRequirementField.ExecutionRequirementCode,
  'ExecutionRequirementCode',
  'Execution Requirement Code',
  CodeType.name,
  'A code signifying the type of party independent of its role.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractExecutionRequirementFieldMetaDescription = new FieldMeta<ContractExecutionRequirementField>(
  ContractExecutionRequirementField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this requirement.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class ContractExecutionRequirementFieldMeta {
  public static readonly UBLExtensions = ContractExecutionRequirementFieldMetaUBLExtensions
  public static readonly Name = ContractExecutionRequirementFieldMetaName
  public static readonly ExecutionRequirementCode = ContractExecutionRequirementFieldMetaExecutionRequirementCode
  public static readonly Description = ContractExecutionRequirementFieldMetaDescription
}

export const ContractExecutionRequirementFieldMap = new Map([
  [ContractExecutionRequirementField.UBLExtensions, ContractExecutionRequirementFieldMetaUBLExtensions],
  [ContractExecutionRequirementField.Name, ContractExecutionRequirementFieldMetaName],
  [ContractExecutionRequirementField.ExecutionRequirementCode, ContractExecutionRequirementFieldMetaExecutionRequirementCode],
  [ContractExecutionRequirementField.Description, ContractExecutionRequirementFieldMetaDescription]
])

export const ContractExecutionRequirementType: Type<ContractExecutionRequirementField> = {
  name: 'ContractExecutionRequirement',
  label: 'Contract Execution Requirement',
  module: TypeModule.cac,
  definition: 'A class to describe a requirement for execution of a contract.',
  fields: ContractExecutionRequirementFieldMap,
}
