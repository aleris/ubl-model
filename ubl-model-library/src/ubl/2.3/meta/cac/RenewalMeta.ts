import { FieldMeta } from '../FieldMeta'

export enum RenewalField {
  UBLExtensions = 'UBLExtensions',
  Amount = 'Amount',
  Period = 'Period'
}

export const RenewalFieldMetaUBLExtensions = new FieldMeta<RenewalField>(
  RenewalField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const RenewalFieldMetaAmount = new FieldMeta<RenewalField>(
  RenewalField.Amount,
  'Amount',
  'Amount',
  'Amount',
  'The monetary amount of this renewal.',
  '0..1',
  'cbc',
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
  'cac',
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
