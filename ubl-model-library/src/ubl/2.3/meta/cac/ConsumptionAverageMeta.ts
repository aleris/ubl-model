import { FieldMeta } from '../FieldMeta'

export enum ConsumptionAverageField {
  UBLExtensions = 'UBLExtensions',
  AverageAmount = 'AverageAmount',
  Description = 'Description'
}

export const ConsumptionAverageFieldMetaUBLExtensions = new FieldMeta<ConsumptionAverageField>(
  ConsumptionAverageField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ConsumptionAverageFieldMetaAverageAmount = new FieldMeta<ConsumptionAverageField>(
  ConsumptionAverageField.AverageAmount,
  'AverageAmount',
  'Average Amount',
  'Amount',
  'The average monetary amount of the consumption.',
  '0..1',
  'cbc',
  undefined,
  '1.65'
)

export const ConsumptionAverageFieldMetaDescription = new FieldMeta<ConsumptionAverageField>(
  ConsumptionAverageField.Description,
  'Description',
  'Description',
  'Text',
  'A description of the average consumed.',
  '0..n',
  'cbc',
  undefined,
  'Average price incl. value added tax per kilowatt-hour in the billing period.'
)

export class ConsumptionAverageFieldMeta {
  public static readonly UBLExtensions = ConsumptionAverageFieldMetaUBLExtensions
  public static readonly AverageAmount = ConsumptionAverageFieldMetaAverageAmount
  public static readonly Description = ConsumptionAverageFieldMetaDescription
}

export const ConsumptionAverageFieldMap = new Map([
  [ConsumptionAverageField.UBLExtensions, ConsumptionAverageFieldMetaUBLExtensions],
  [ConsumptionAverageField.AverageAmount, ConsumptionAverageFieldMetaAverageAmount],
  [ConsumptionAverageField.Description, ConsumptionAverageFieldMetaDescription]
])
