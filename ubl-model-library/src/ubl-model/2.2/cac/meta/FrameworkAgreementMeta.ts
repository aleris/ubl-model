import { FieldMeta } from '../../FieldMeta'

export enum FrameworkAgreementField {
  ExpectedOperatorQuantity = 'ExpectedOperatorQuantity',
  MaximumOperatorQuantity = 'MaximumOperatorQuantity',
  Justification = 'Justification',
  Frequency = 'Frequency',
  DurationPeriod = 'DurationPeriod',
  SubsequentProcessTenderRequirement = 'SubsequentProcessTenderRequirement'
}

export const FrameworkAgreementFieldMetaExpectedOperatorQuantity = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.ExpectedOperatorQuantity,
  'ExpectedOperatorQuantity',
  'Operator',
  'Quantity',
  'The number of economic operators expected to participate in this framework agreement.',
  '0..1',
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaMaximumOperatorQuantity = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.MaximumOperatorQuantity,
  'MaximumOperatorQuantity',
  'Operator',
  'Quantity',
  'The maximum number of economic operators allowed to participate in this framework agreement.',
  '0..1',
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
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaDurationPeriod = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.DurationPeriod,
  'DurationPeriod',
  'Period',
  'Period',
  'The period during which this framework agreement applies.',
  '0..1',
  undefined,
  undefined
)

export const FrameworkAgreementFieldMetaSubsequentProcessTenderRequirement = new FieldMeta<FrameworkAgreementField>(
  FrameworkAgreementField.SubsequentProcessTenderRequirement,
  'SubsequentProcessTenderRequirement',
  'Tender Requirement',
  'TenderRequirement',
  'A tender requirement intended for consumption by downstream tendering processes derived from the establishment of this framework agreement.',
  '0..n',
  undefined,
  'Curricula required'
)

export class FrameworkAgreementFieldMeta {
  public static readonly ExpectedOperatorQuantity = FrameworkAgreementFieldMetaExpectedOperatorQuantity
  public static readonly MaximumOperatorQuantity = FrameworkAgreementFieldMetaMaximumOperatorQuantity
  public static readonly Justification = FrameworkAgreementFieldMetaJustification
  public static readonly Frequency = FrameworkAgreementFieldMetaFrequency
  public static readonly DurationPeriod = FrameworkAgreementFieldMetaDurationPeriod
  public static readonly SubsequentProcessTenderRequirement = FrameworkAgreementFieldMetaSubsequentProcessTenderRequirement
}

export const FrameworkAgreementFieldMap = new Map([
  [FrameworkAgreementField.ExpectedOperatorQuantity, FrameworkAgreementFieldMetaExpectedOperatorQuantity],
  [FrameworkAgreementField.MaximumOperatorQuantity, FrameworkAgreementFieldMetaMaximumOperatorQuantity],
  [FrameworkAgreementField.Justification, FrameworkAgreementFieldMetaJustification],
  [FrameworkAgreementField.Frequency, FrameworkAgreementFieldMetaFrequency],
  [FrameworkAgreementField.DurationPeriod, FrameworkAgreementFieldMetaDurationPeriod],
  [FrameworkAgreementField.SubsequentProcessTenderRequirement, FrameworkAgreementFieldMetaSubsequentProcessTenderRequirement]
])
