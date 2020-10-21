import { FieldMeta } from '../../FieldMeta'

export enum BillingReferenceLineField {
  ID = 'ID',
  Amount = 'Amount',
  AllowanceCharge = 'AllowanceCharge'
}

export const BillingReferenceLineFieldMetaID = new FieldMeta<BillingReferenceLineField>(
  BillingReferenceLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this transaction line in a billing document.',
  '1',
  undefined,
  undefined
)

export const BillingReferenceLineFieldMetaAmount = new FieldMeta<BillingReferenceLineField>(
  BillingReferenceLineField.Amount,
  'Amount',
  'Amount',
  'Amount',
  'The monetary amount of the transaction line, including any allowances and charges but excluding taxes.',
  '0..1',
  undefined,
  undefined
)

export const BillingReferenceLineFieldMetaAllowanceCharge = new FieldMeta<BillingReferenceLineField>(
  BillingReferenceLineField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'An allowance or charge applicable to the transaction line.',
  '0..n',
  undefined,
  undefined
)

export class BillingReferenceLineFieldMeta {
  public static readonly ID = BillingReferenceLineFieldMetaID
  public static readonly Amount = BillingReferenceLineFieldMetaAmount
  public static readonly AllowanceCharge = BillingReferenceLineFieldMetaAllowanceCharge
}

export const BillingReferenceLineFieldMap = new Map([
  [BillingReferenceLineField.ID, BillingReferenceLineFieldMetaID],
  [BillingReferenceLineField.Amount, BillingReferenceLineFieldMetaAmount],
  [BillingReferenceLineField.AllowanceCharge, BillingReferenceLineFieldMetaAllowanceCharge]
])
