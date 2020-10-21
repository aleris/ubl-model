import { FieldMeta } from '../../FieldMeta'

export enum LotDistributionField {
  MaximumLotsAwardedNumeric = 'MaximumLotsAwardedNumeric',
  MaximumLotsSubmittedNumeric = 'MaximumLotsSubmittedNumeric',
  GroupingLots = 'GroupingLots'
}

export const LotDistributionFieldMetaMaximumLotsAwardedNumeric = new FieldMeta<LotDistributionField>(
  LotDistributionField.MaximumLotsAwardedNumeric,
  'MaximumLotsAwardedNumeric',
  'Maximum Lots Awarded',
  'Numeric',
  'The maximum number of lots that can be awarded to a single tenderer.',
  '0..1',
  undefined,
  undefined
)

export const LotDistributionFieldMetaMaximumLotsSubmittedNumeric = new FieldMeta<LotDistributionField>(
  LotDistributionField.MaximumLotsSubmittedNumeric,
  'MaximumLotsSubmittedNumeric',
  'Maximum Lots Submitted',
  'Numeric',
  'The maximum number of lots to which a tenderer can submit an offer to.',
  '0..1',
  undefined,
  undefined
)

export const LotDistributionFieldMetaGroupingLots = new FieldMeta<LotDistributionField>(
  LotDistributionField.GroupingLots,
  'GroupingLots',
  'Grouping Lots',
  'Text',
  'Description on how to combine lots when submitting a tender.',
  '0..n',
  undefined,
  undefined
)

export class LotDistributionFieldMeta {
  public static readonly MaximumLotsAwardedNumeric = LotDistributionFieldMetaMaximumLotsAwardedNumeric
  public static readonly MaximumLotsSubmittedNumeric = LotDistributionFieldMetaMaximumLotsSubmittedNumeric
  public static readonly GroupingLots = LotDistributionFieldMetaGroupingLots
}

export const LotDistributionFieldMap = new Map([
  [LotDistributionField.MaximumLotsAwardedNumeric, LotDistributionFieldMetaMaximumLotsAwardedNumeric],
  [LotDistributionField.MaximumLotsSubmittedNumeric, LotDistributionFieldMetaMaximumLotsSubmittedNumeric],
  [LotDistributionField.GroupingLots, LotDistributionFieldMetaGroupingLots]
])
