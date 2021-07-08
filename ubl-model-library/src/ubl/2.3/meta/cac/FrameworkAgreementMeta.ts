import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { PeriodType } from './PeriodMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TenderRequirementType } from './TenderRequirementMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum FrameworkAgreementField {
  UBLExtensions = 'UBLExtensions',
  ExpectedOperatorQuantity = 'ExpectedOperatorQuantity',
  MaximumOperatorQuantity = 'MaximumOperatorQuantity',
  Justification = 'Justification',
  Frequency = 'Frequency',
  EstimatedMaximumValueAmount = 'EstimatedMaximumValueAmount',
  MaximumValueAmount = 'MaximumValueAmount',
  DurationPeriod = 'DurationPeriod',
  SubsequentProcessTenderRequirement = 'SubsequentProcessTenderRequirement'
}

export const FrameworkAgreementFieldMetaUBLExtensions = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaExpectedOperatorQuantity = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.ExpectedOperatorQuantity,
  'ExpectedOperatorQuantity',
  'Expected Operator',
  QuantityType.name,
  'The number of economic operators expected to participate in this framework agreement.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaMaximumOperatorQuantity = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.MaximumOperatorQuantity,
  'MaximumOperatorQuantity',
  'Maximum Operator',
  QuantityType.name,
  'The maximum number of economic operators allowed to participate in this framework agreement.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaJustification = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.Justification,
  'Justification',
  'Justification',
  TextType.name,
  'Text describing the justification for this framework agreement.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaFrequency = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.Frequency,
  'Frequency',
  'Frequency',
  TextType.name,
  'Text describing the frequency with which subsequent contracts will be awarded.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaEstimatedMaximumValueAmount = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.EstimatedMaximumValueAmount,
  'EstimatedMaximumValueAmount',
  'Estimated Maximum Value',
  AmountType.name,
  'The estimated value which will be spent within a framework agreement over its whole duration, including options and renewals.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaMaximumValueAmount = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.MaximumValueAmount,
  'MaximumValueAmount',
  'Maximum Value',
  AmountType.name,
  'The maximum Value which can be spent within a framework agreement over its whole duration, including options and renewals.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaDurationPeriod = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.DurationPeriod,
  'DurationPeriod',
  'Duration Period',
  PeriodType.name,
  'The period during which this framework agreement applies.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaSubsequentProcessTenderRequirement = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.SubsequentProcessTenderRequirement,
  'SubsequentProcessTenderRequirement',
  'Subsequent Process Tender Requirement',
  TenderRequirementType.name,
  'A tender requirement intended for consumption by downstream tendering processes derived from the establishment of this framework agreement.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  'Curricula required'
)

export class FrameworkAgreementFieldMeta {
  public static readonly UBLExtensions = FrameworkAgreementFieldMetaUBLExtensions
  public static readonly ExpectedOperatorQuantity = FrameworkAgreementFieldMetaExpectedOperatorQuantity
  public static readonly MaximumOperatorQuantity = FrameworkAgreementFieldMetaMaximumOperatorQuantity
  public static readonly Justification = FrameworkAgreementFieldMetaJustification
  public static readonly Frequency = FrameworkAgreementFieldMetaFrequency
  public static readonly EstimatedMaximumValueAmount = FrameworkAgreementFieldMetaEstimatedMaximumValueAmount
  public static readonly MaximumValueAmount = FrameworkAgreementFieldMetaMaximumValueAmount
  public static readonly DurationPeriod = FrameworkAgreementFieldMetaDurationPeriod
  public static readonly SubsequentProcessTenderRequirement = FrameworkAgreementFieldMetaSubsequentProcessTenderRequirement
}

export const FrameworkAgreementFieldMap = new Map([
  [FrameworkAgreementField.UBLExtensions, FrameworkAgreementFieldMetaUBLExtensions],
  [FrameworkAgreementField.ExpectedOperatorQuantity, FrameworkAgreementFieldMetaExpectedOperatorQuantity],
  [FrameworkAgreementField.MaximumOperatorQuantity, FrameworkAgreementFieldMetaMaximumOperatorQuantity],
  [FrameworkAgreementField.Justification, FrameworkAgreementFieldMetaJustification],
  [FrameworkAgreementField.Frequency, FrameworkAgreementFieldMetaFrequency],
  [FrameworkAgreementField.EstimatedMaximumValueAmount, FrameworkAgreementFieldMetaEstimatedMaximumValueAmount],
  [FrameworkAgreementField.MaximumValueAmount, FrameworkAgreementFieldMetaMaximumValueAmount],
  [FrameworkAgreementField.DurationPeriod, FrameworkAgreementFieldMetaDurationPeriod],
  [FrameworkAgreementField.SubsequentProcessTenderRequirement, FrameworkAgreementFieldMetaSubsequentProcessTenderRequirement]
])

export const FrameworkAgreementType: Type<FrameworkAgreementField> = {
  name: 'FrameworkAgreement',
  label: 'Framework Agreement',
  module: TypeModule.cac,
  definition: 'A class to describe a tendering framework agreement.',
  fields: FrameworkAgreementFieldMap,
}
