import { FieldMeta } from '../../FieldMeta'

export enum BudgetAccountLineField {
  ID = 'ID',
  TotalAmount = 'TotalAmount',
  BudgetAccount = 'BudgetAccount'
}

export const BudgetAccountLineFieldMetaID = new FieldMeta<BudgetAccountLineField>(
  BudgetAccountLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this budget account line.',
  '0..1',
  undefined,
  undefined
)

export const BudgetAccountLineFieldMetaTotalAmount = new FieldMeta<BudgetAccountLineField>(
  BudgetAccountLineField.TotalAmount,
  'TotalAmount',
  'Amount',
  'Amount',
  'The total monetary amount for this budget account line.',
  '0..1',
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
  undefined,
  undefined
)

export class BudgetAccountLineFieldMeta {
  public static readonly ID = BudgetAccountLineFieldMetaID
  public static readonly TotalAmount = BudgetAccountLineFieldMetaTotalAmount
  public static readonly BudgetAccount = BudgetAccountLineFieldMetaBudgetAccount
}

export const BudgetAccountLineFieldMap = new Map([
  [BudgetAccountLineField.ID, BudgetAccountLineFieldMetaID],
  [BudgetAccountLineField.TotalAmount, BudgetAccountLineFieldMetaTotalAmount],
  [BudgetAccountLineField.BudgetAccount, BudgetAccountLineFieldMetaBudgetAccount]
])
