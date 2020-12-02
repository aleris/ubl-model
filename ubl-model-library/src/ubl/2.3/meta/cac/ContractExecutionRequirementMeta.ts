import { FieldMeta } from '../FieldMeta'

export enum ContractExecutionRequirementField {
  UBLExtensions = 'UBLExtensions',
  Name = 'Name',
  ExecutionRequirementCode = 'ExecutionRequirementCode',
  Description = 'Description'
}

export const ContractExecutionRequirementFieldMetaUBLExtensions = new FieldMeta<ContractExecutionRequirementField>(
  ContractExecutionRequirementField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ContractExecutionRequirementFieldMetaName = new FieldMeta<ContractExecutionRequirementField>(
  ContractExecutionRequirementField.Name,
  'Name',
  'Name',
  'Text',
  'A name for this requirement.',
  '0..n',
  'cbc',
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
  'cbc',
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
  'cbc',
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
