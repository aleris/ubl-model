import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaExpectedOperatorQuantity = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.ExpectedOperatorQuantity,
  'ExpectedOperatorQuantity',
  'Expected Operator',
  'Quantity',
  'The number of economic operators expected to participate in this framework agreement.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaMaximumOperatorQuantity = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.MaximumOperatorQuantity,
  'MaximumOperatorQuantity',
  'Maximum Operator',
  'Quantity',
  'The maximum number of economic operators allowed to participate in this framework agreement.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaJustification = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.Justification,
  'Justification',
  'Justification',
  'Text',
  'Text describing the justification for this framework agreement.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaFrequency = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.Frequency,
  'Frequency',
  'Frequency',
  'Text',
  'Text describing the frequency with which subsequent contracts will be awarded.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaEstimatedMaximumValueAmount = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.EstimatedMaximumValueAmount,
  'EstimatedMaximumValueAmount',
  'Estimated Maximum Value',
  'Amount',
  'The estimated value which will be spent within a framework agreement over its whole duration, including options and renewals.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaMaximumValueAmount = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.MaximumValueAmount,
  'MaximumValueAmount',
  'Maximum Value',
  'Amount',
  'The maximum Value which can be spent within a framework agreement over its whole duration, including options and renewals.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaDurationPeriod = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.DurationPeriod,
  'DurationPeriod',
  'Duration Period',
  'Period',
  'The period during which this framework agreement applies.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaSubsequentProcessTenderRequirement = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.SubsequentProcessTenderRequirement,
  'SubsequentProcessTenderRequirement',
  'Subsequent Process Tender Requirement',
  'TenderRequirement',
  'A tender requirement intended for consumption by downstream tendering processes derived from the establishment of this framework agreement.',
  '0..n',
  'cac',
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
