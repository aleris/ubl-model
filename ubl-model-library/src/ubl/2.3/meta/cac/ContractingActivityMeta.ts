import { FieldMeta } from '../FieldMeta'

export enum ContractingActivityField {
  UBLExtensions = 'UBLExtensions',
  ActivityTypeCode = 'ActivityTypeCode',
  ActivityType = 'ActivityType'
}

export const ContractingActivityFieldMetaUBLExtensions = new FieldMeta<ContractingActivityField>(
  ContractingActivityField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ContractingActivityFieldMetaActivityTypeCode = new FieldMeta<ContractingActivityField>(
  ContractingActivityField.ActivityTypeCode,
  'ActivityTypeCode',
  'Activity Type Code',
  'Code',
  'A code specifying the nature of the type of business of the organization.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractingActivityFieldMetaActivityType = new FieldMeta<ContractingActivityField>(
  ContractingActivityField.ActivityType,
  'ActivityType',
  'Activity Type',
  'Text',
  'The nature of the type of business of the organization, expressed as text.',
  '0..1',
  'cbc',
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
