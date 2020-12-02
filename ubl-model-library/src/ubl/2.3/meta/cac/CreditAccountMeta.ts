import { FieldMeta } from '../FieldMeta'

export enum CreditAccountField {
  UBLExtensions = 'UBLExtensions',
  AccountID = 'AccountID'
}

export const CreditAccountFieldMetaUBLExtensions = new FieldMeta<CreditAccountField>(
  CreditAccountField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const CreditAccountFieldMetaAccountID = new FieldMeta<CreditAccountField>(
  CreditAccountField.AccountID,
  'AccountID',
  'Account Identifier',
  'Identifier',
  'An identifier for this credit account.',
  '1',
  'cbc',
  undefined,
  'Customer Code 29'
)

export class CreditAccountFieldMeta {
  public static readonly UBLExtensions = CreditAccountFieldMetaUBLExtensions
  public static readonly AccountID = CreditAccountFieldMetaAccountID
}

export const CreditAccountFieldMap = new Map([
  [CreditAccountField.UBLExtensions, CreditAccountFieldMetaUBLExtensions],
  [CreditAccountField.AccountID, CreditAccountFieldMetaAccountID]
])
