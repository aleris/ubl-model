import { FieldMeta } from '../../FieldMeta'

export enum DutyField {
  Amount = 'Amount',
  Duty = 'Duty',
  DutyCode = 'DutyCode',
  TaxCategory = 'TaxCategory'
}

export const DutyFieldMetaAmount = new FieldMeta<DutyField>(
  DutyField.Amount,
  'Amount',
  'Amount',
  'Amount',
  'The amount of this duty.',
  '1',
  undefined,
  '88.23'
)

export const DutyFieldMetaDuty = new FieldMeta<DutyField>(
  DutyField.Duty,
  'Duty',
  'Duty',
  'Text',
  'Text describing this duty.',
  '0..1',
  undefined,
  'ConnectionFee'
)

export const DutyFieldMetaDutyCode = new FieldMeta<DutyField>(
  DutyField.DutyCode,
  'DutyCode',
  'Duty Code',
  'Code',
  'The type of this charge rate, expressed as a code.',
  '0..1',
  undefined,
  'ConnectionFee'
)

export const DutyFieldMetaTaxCategory = new FieldMeta<DutyField>(
  DutyField.TaxCategory,
  'TaxCategory',
  'Tax Category',
  'TaxCategory',
  'The tax category applicable to this duty.',
  '0..1',
  undefined,
  undefined
)

export class DutyFieldMeta {
  public static readonly Amount = DutyFieldMetaAmount
  public static readonly Duty = DutyFieldMetaDuty
  public static readonly DutyCode = DutyFieldMetaDutyCode
  public static readonly TaxCategory = DutyFieldMetaTaxCategory
}

export const DutyFieldMap = new Map([
  [DutyField.Amount, DutyFieldMetaAmount],
  [DutyField.Duty, DutyFieldMetaDuty],
  [DutyField.DutyCode, DutyFieldMetaDutyCode],
  [DutyField.TaxCategory, DutyFieldMetaTaxCategory]
])
