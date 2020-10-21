import { FieldMeta } from '../../FieldMeta'

export enum ContractExecutionRequirementField {
  Name = 'Name',
  ExecutionRequirementCode = 'ExecutionRequirementCode',
  Description = 'Description'
}

export const ContractExecutionRequirementFieldMetaName = new FieldMeta<ContractExecutionRequirementField>(
  ContractExecutionRequirementField.Name,
  'Name',
  'Name',
  'Text',
  'A name for this requirement.',
  '0..n',
  undefined,
  undefined
)

export const ContractExecutionRequirementFieldMetaExecutionRequirementCode = new FieldMeta<ContractExecutionRequirementField>(
  ContractExecutionRequirementField.ExecutionRequirementCode,
  'ExecutionRequirementCode',
  'Execution Requirement Code',
  'Code',
  'A code signifying the type of party independent of its role.',
  '0..1',
  undefined,
  undefined
)

export const ContractExecutionRequirementFieldMetaDescription = new FieldMeta<ContractExecutionRequirementField>(
  ContractExecutionRequirementField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this requirement.',
  '0..n',
  undefined,
  undefined
)

export class ContractExecutionRequirementFieldMeta {
  public static readonly Name = ContractExecutionRequirementFieldMetaName
  public static readonly ExecutionRequirementCode = ContractExecutionRequirementFieldMetaExecutionRequirementCode
  public static readonly Description = ContractExecutionRequirementFieldMetaDescription
}

export const ContractExecutionRequirementFieldMap = new Map([
  [ContractExecutionRequirementField.Name, ContractExecutionRequirementFieldMetaName],
  [ContractExecutionRequirementField.ExecutionRequirementCode, ContractExecutionRequirementFieldMetaExecutionRequirementCode],
  [ContractExecutionRequirementField.Description, ContractExecutionRequirementFieldMetaDescription]
])
