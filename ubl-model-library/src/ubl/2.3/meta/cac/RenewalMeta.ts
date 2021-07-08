import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { PeriodType } from './PeriodMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum RenewalField {
  UBLExtensions = 'UBLExtensions',
  Amount = 'Amount',
  Period = 'Period'
}

export const RenewalFieldMetaUBLExtensions = new FieldMeta<RenewalField>(
  RenewalField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const RenewalFieldMetaAmount = new FieldMeta<RenewalField>(
  RenewalField.Amount,
  'Amount',
  'Amount',
  AmountType.name,
  'The monetary amount of this renewal.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RenewalFieldMetaPeriod = new FieldMeta<RenewalField>(
  RenewalField.Period,
  'Period',
  'Period',
  PeriodType.name,
  'The period for which the arrangement is now valid',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class RenewalFieldMeta {
  public static readonly UBLExtensions = RenewalFieldMetaUBLExtensions
  public static readonly Amount = RenewalFieldMetaAmount
  public static readonly Period = RenewalFieldMetaPeriod
}

export const RenewalFieldMap = new Map([
  [RenewalField.UBLExtensions, RenewalFieldMetaUBLExtensions],
  [RenewalField.Amount, RenewalFieldMetaAmount],
  [RenewalField.Period, RenewalFieldMetaPeriod]
])

export const RenewalType: Type<RenewalField> = {
  name: 'Renewal',
  label: 'Renewal',
  module: TypeModule.cac,
  definition: 'A class to describe the renewal of a commercial arrangement, such as a contract or licence fee.',
  fields: RenewalFieldMap,
}
