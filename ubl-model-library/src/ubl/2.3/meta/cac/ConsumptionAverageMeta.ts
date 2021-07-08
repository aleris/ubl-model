import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ConsumptionAverageField {
  UBLExtensions = 'UBLExtensions',
  AverageAmount = 'AverageAmount',
  Description = 'Description'
}

export const ConsumptionAverageFieldMetaUBLExtensions = new FieldMeta<ConsumptionAverageField>(
  ConsumptionAverageField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ConsumptionAverageFieldMetaAverageAmount = new FieldMeta<ConsumptionAverageField>(
  ConsumptionAverageField.AverageAmount,
  'AverageAmount',
  'Average Amount',
  AmountType.name,
  'The average monetary amount of the consumption.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.65'
)

export const ConsumptionAverageFieldMetaDescription = new FieldMeta<ConsumptionAverageField>(
  ConsumptionAverageField.Description,
  'Description',
  'Description',
  TextType.name,
  'A description of the average consumed.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
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

export const ConsumptionAverageType: Type<ConsumptionAverageField> = {
  name: 'ConsumptionAverage',
  label: 'Consumption Average',
  module: TypeModule.cac,
  definition: 'A class to define an average consumption as a monetary amount.',
  fields: ConsumptionAverageFieldMap,
}
