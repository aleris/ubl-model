import { FieldMeta } from '../../FieldMeta'

export enum CreditAccountField {
  AccountID = 'AccountID'
}

export const CreditAccountFieldMetaAccountID = new FieldMeta<CreditAccountField>(
  CreditAccountField.AccountID,
  'AccountID',
  'Account Identifier',
  'Identifier',
  'An identifier for this credit account.',
  '1',
  undefined,
  'Customer Code 29'
)

export class CreditAccountFieldMeta {
  public static readonly AccountID = CreditAccountFieldMetaAccountID
}

export const CreditAccountFieldMap = new Map([
  [CreditAccountField.AccountID, CreditAccountFieldMetaAccountID]
])
