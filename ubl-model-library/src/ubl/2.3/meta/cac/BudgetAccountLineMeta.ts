import { FieldMeta } from '../FieldMeta'

export enum BudgetAccountLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  TotalAmount = 'TotalAmount',
  BudgetAccount = 'BudgetAccount'
}

export const BudgetAccountLineFieldMetaUBLExtensions = new FieldMeta<BudgetAccountLineField>(
  BudgetAccountLineField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const BudgetAccountLineFieldMetaID = new FieldMeta<BudgetAccountLineField>(
  BudgetAccountLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this budget account line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const BudgetAccountLineFieldMetaTotalAmount = new FieldMeta<BudgetAccountLineField>(
  BudgetAccountLineField.TotalAmount,
  'TotalAmount',
  'Total Amount',
  'Amount',
  'The total monetary amount for this budget account line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const BudgetAccountLineFieldMetaBudgetAccount = new FieldMeta<BudgetAccountLineField>(
  BudgetAccountLineField.BudgetAccount,
  'BudgetAccount',
  'Budget Account',
  'BudgetAccount',
  'An account covering this budget account line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class BudgetAccountLineFieldMeta {
  public static readonly UBLExtensions = BudgetAccountLineFieldMetaUBLExtensions
  public static readonly ID = BudgetAccountLineFieldMetaID
  public static readonly TotalAmount = BudgetAccountLineFieldMetaTotalAmount
  public static readonly BudgetAccount = BudgetAccountLineFieldMetaBudgetAccount
}

export const BudgetAccountLineFieldMap = new Map([
  [BudgetAccountLineField.UBLExtensions, BudgetAccountLineFieldMetaUBLExtensions],
  [BudgetAccountLineField.ID, BudgetAccountLineFieldMetaID],
  [BudgetAccountLineField.TotalAmount, BudgetAccountLineFieldMetaTotalAmount],
  [BudgetAccountLineField.BudgetAccount, BudgetAccountLineFieldMetaBudgetAccount]
])
