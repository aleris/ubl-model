import { FieldMeta } from '../../FieldMeta'

export enum RenewalField {
  Amount = 'Amount',
  Period = 'Period'
}

export const RenewalFieldMetaAmount = new FieldMeta<RenewalField>(
  RenewalField.Amount,
  'Amount',
  'Amount',
  'Amount',
  'The monetary amount of this renewal.',
  '0..1',
  undefined,
  undefined
)

export const RenewalFieldMetaPeriod = new FieldMeta<RenewalField>(
  RenewalField.Period,
  'Period',
  'Period',
  'Period',
  'The period for which the arrangement is now valid',
  '0..1',
  undefined,
  undefined
)

export class RenewalFieldMeta {
  public static readonly Amount = RenewalFieldMetaAmount
  public static readonly Period = RenewalFieldMetaPeriod
}

export const RenewalFieldMap = new Map([
  [RenewalField.Amount, RenewalFieldMetaAmount],
  [RenewalField.Period, RenewalFieldMetaPeriod]
])
