import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { LotsGroupType } from './LotsGroupMeta'
import { NumericType } from '../cbc/NumericMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const LotDistributionFieldMetaMaximumLotsAwardedNumeric = new FieldMeta<LotDistributionField>(
  LotDistributionField.MaximumLotsAwardedNumeric,
  'MaximumLotsAwardedNumeric',
  'Maximum Lots Awarded',
  NumericType.name,
  'The maximum number of lots that can be awarded to a single tenderer.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LotDistributionFieldMetaMaximumLotsSubmittedNumeric = new FieldMeta<LotDistributionField>(
  LotDistributionField.MaximumLotsSubmittedNumeric,
  'MaximumLotsSubmittedNumeric',
  'Maximum Lots Submitted',
  NumericType.name,
  'The maximum number of lots to which a tenderer can submit an offer to.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LotDistributionFieldMetaGroupingLots = new FieldMeta<LotDistributionField>(
  LotDistributionField.GroupingLots,
  'GroupingLots',
  'Grouping Lots',
  TextType.name,
  'Description on how to combine lots when submitting a tender.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LotDistributionFieldMetaLotsGroup = new FieldMeta<LotDistributionField>(
  LotDistributionField.LotsGroup,
  'LotsGroup',
  'Lots Group',
  LotsGroupType.name,
  'A combination of lots used when evaluating a tender.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const LotDistributionType: Type<LotDistributionField> = {
  name: 'LotDistribution',
  label: 'Lot Distribution',
  module: TypeModule.cac,
  definition: 'A class defining how to treat different lots in a single procurement.',
  fields: LotDistributionFieldMap,
}
