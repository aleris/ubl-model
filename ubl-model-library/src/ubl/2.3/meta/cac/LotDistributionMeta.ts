import { FieldMeta } from '../FieldMeta'

export enum LotDistributionField {
  UBLExtensions = 'UBLExtensions',
  MaximumLotsAwardedNumeric = 'MaximumLotsAwardedNumeric',
  MaximumLotsSubmittedNumeric = 'MaximumLotsSubmittedNumeric',
  GroupingLots = 'GroupingLots',
  LotsGroup = 'LotsGroup'
}

export const LotDistributionFieldMetaUBLExtensions = new FieldMeta<LotDistributionField>(
  LotDistributionField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const LotDistributionFieldMetaMaximumLotsAwardedNumeric = new FieldMeta<LotDistributionField>(
  LotDistributionField.MaximumLotsAwardedNumeric,
  'MaximumLotsAwardedNumeric',
  'Maximum Lots Awarded',
  'Numeric',
  'The maximum number of lots that can be awarded to a single tenderer.',
  '0..1',
  'cbc',
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
  'cbc',
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
  'cbc',
  undefined,
  undefined
)

export const LotDistributionFieldMetaLotsGroup = new FieldMeta<LotDistributionField>(
  LotDistributionField.LotsGroup,
  'LotsGroup',
  'Lots Group',
  'LotsGroup',
  'A combination of lots used when evaluating a tender.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class LotDistributionFieldMeta {
  public static readonly UBLExtensions = LotDistributionFieldMetaUBLExtensions
  public static readonly MaximumLotsAwardedNumeric = LotDistributionFieldMetaMaximumLotsAwardedNumeric
  public static readonly MaximumLotsSubmittedNumeric = LotDistributionFieldMetaMaximumLotsSubmittedNumeric
  public static readonly GroupingLots = LotDistributionFieldMetaGroupingLots
  public static readonly LotsGroup = LotDistributionFieldMetaLotsGroup
}

export const LotDistributionFieldMap = new Map([
  [LotDistributionField.UBLExtensions, LotDistributionFieldMetaUBLExtensions],
  [LotDistributionField.MaximumLotsAwardedNumeric, LotDistributionFieldMetaMaximumLotsAwardedNumeric],
  [LotDistributionField.MaximumLotsSubmittedNumeric, LotDistributionFieldMetaMaximumLotsSubmittedNumeric],
  [LotDistributionField.GroupingLots, LotDistributionFieldMetaGroupingLots],
  [LotDistributionField.LotsGroup, LotDistributionFieldMetaLotsGroup]
])
