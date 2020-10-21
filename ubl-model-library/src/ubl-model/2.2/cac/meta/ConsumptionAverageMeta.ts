import { FieldMeta } from '../../FieldMeta'

export enum ConsumptionAverageField {
  AverageAmount = 'AverageAmount',
  Description = 'Description'
}

export const ConsumptionAverageFieldMetaAverageAmount = new FieldMeta<ConsumptionAverageField>(
  ConsumptionAverageField.AverageAmount,
  'AverageAmount',
  'Amount',
  'Amount',
  'The average monetary amount of the consumption.',
  '0..1',
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
  undefined,
  'Average price incl. value added tax per kilowatt-hour in the billing period.'
)

export class ConsumptionAverageFieldMeta {
  public static readonly AverageAmount = ConsumptionAverageFieldMetaAverageAmount
  public static readonly Description = ConsumptionAverageFieldMetaDescription
}

export const ConsumptionAverageFieldMap = new Map([
  [ConsumptionAverageField.AverageAmount, ConsumptionAverageFieldMetaAverageAmount],
  [ConsumptionAverageField.Description, ConsumptionAverageFieldMetaDescription]
])
