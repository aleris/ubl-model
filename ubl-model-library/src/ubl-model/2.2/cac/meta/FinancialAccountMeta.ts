import { FieldMeta } from '../../FieldMeta'

export enum FinancialAccountField {
  ID = 'ID',
  Name = 'Name',
  AliasName = 'AliasName',
  AccountTypeCode = 'AccountTypeCode',
  AccountFormatCode = 'AccountFormatCode',
  CurrencyCode = 'CurrencyCode',
  PaymentNote = 'PaymentNote',
  FinancialInstitutionBranch = 'FinancialInstitutionBranch',
  Country = 'Country'
}

export const FinancialAccountFieldMetaID = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'The identifier for this financial account; the bank account number.',
  '0..1',
  undefined,
  'SWIFT(BIC) and IBAN are defined in ISO 9362 and ISO 13616.'
)

export const FinancialAccountFieldMetaName = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this financial account.',
  '0..1',
  undefined,
  undefined
)

export const FinancialAccountFieldMetaAliasName = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.AliasName,
  'AliasName',
  'Name',
  'Text',
  'An alias for the name of this financial account, to be used in place of the actual account name for security reasons.',
  '0..1',
  undefined,
  undefined
)

export const FinancialAccountFieldMetaAccountTypeCode = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.AccountTypeCode,
  'AccountTypeCode',
  'Account Type Code',
  'Code',
  'A code signifying the type of this financial account.',
  '0..1',
  undefined,
  undefined
)

export const FinancialAccountFieldMetaAccountFormatCode = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.AccountFormatCode,
  'AccountFormatCode',
  'Account Format Code',
  'Code',
  'A code signifying the format of this financial account.',
  '0..1',
  undefined,
  'ISO20022 Clearing System Identification Code'
)

export const FinancialAccountFieldMetaCurrencyCode = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.CurrencyCode,
  'CurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency in which this financial account is held.',
  '0..1',
  undefined,
  undefined
)

export const FinancialAccountFieldMetaPaymentNote = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.PaymentNote,
  'PaymentNote',
  'Note',
  'Text',
  'Free-form text applying to the Payment for the owner of this account.',
  '0..n',
  undefined,
  undefined
)

export const FinancialAccountFieldMetaFinancialInstitutionBranch = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.FinancialInstitutionBranch,
  'FinancialInstitutionBranch',
  'Branch',
  'Branch',
  'The branch of the financial institution associated with this financial account.',
  '0..1',
  undefined,
  undefined
)

export const FinancialAccountFieldMetaCountry = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.Country,
  'Country',
  'Country',
  'Country',
  'The country in which the holder of the financial account is domiciled.',
  '0..1',
  undefined,
  undefined
)

export class FinancialAccountFieldMeta {
  public static readonly ID = FinancialAccountFieldMetaID
  public static readonly Name = FinancialAccountFieldMetaName
  public static readonly AliasName = FinancialAccountFieldMetaAliasName
  public static readonly AccountTypeCode = FinancialAccountFieldMetaAccountTypeCode
  public static readonly AccountFormatCode = FinancialAccountFieldMetaAccountFormatCode
  public static readonly CurrencyCode = FinancialAccountFieldMetaCurrencyCode
  public static readonly PaymentNote = FinancialAccountFieldMetaPaymentNote
  public static readonly FinancialInstitutionBranch = FinancialAccountFieldMetaFinancialInstitutionBranch
  public static readonly Country = FinancialAccountFieldMetaCountry
}

export const FinancialAccountFieldMap = new Map([
  [FinancialAccountField.ID, FinancialAccountFieldMetaID],
  [FinancialAccountField.Name, FinancialAccountFieldMetaName],
  [FinancialAccountField.AliasName, FinancialAccountFieldMetaAliasName],
  [FinancialAccountField.AccountTypeCode, FinancialAccountFieldMetaAccountTypeCode],
  [FinancialAccountField.AccountFormatCode, FinancialAccountFieldMetaAccountFormatCode],
  [FinancialAccountField.CurrencyCode, FinancialAccountFieldMetaCurrencyCode],
  [FinancialAccountField.PaymentNote, FinancialAccountFieldMetaPaymentNote],
  [FinancialAccountField.FinancialInstitutionBranch, FinancialAccountFieldMetaFinancialInstitutionBranch],
  [FinancialAccountField.Country, FinancialAccountFieldMetaCountry]
])
