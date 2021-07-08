import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { BranchType } from './BranchMeta'
import { CodeType } from '../cbc/CodeMeta'
import { CountryType } from './CountryMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum FinancialAccountField {
  UBLExtensions = 'UBLExtensions',
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

export const FinancialAccountFieldMetaUBLExtensions = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const FinancialAccountFieldMetaID = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'The identifier for this financial account; the bank account number.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'SWIFT(BIC) and IBAN are defined in ISO 9362 and ISO 13616.'
)

export const FinancialAccountFieldMetaName = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this financial account.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FinancialAccountFieldMetaAliasName = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.AliasName,
  'AliasName',
  'Alias Name',
  TextType.name,
  'An alias for the name of this financial account, to be used in place of the actual account name for security reasons.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FinancialAccountFieldMetaAccountTypeCode = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.AccountTypeCode,
  'AccountTypeCode',
  'Account Type Code',
  CodeType.name,
  'A code signifying the type of this financial account.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FinancialAccountFieldMetaAccountFormatCode = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.AccountFormatCode,
  'AccountFormatCode',
  'Account Format Code',
  CodeType.name,
  'A code signifying the format of this financial account.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'ISO20022 Clearing System Identification Code'
)

export const FinancialAccountFieldMetaCurrencyCode = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.CurrencyCode,
  'CurrencyCode',
  'Currency Code',
  CodeType.name,
  'A code signifying the currency in which this financial account is held.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FinancialAccountFieldMetaPaymentNote = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.PaymentNote,
  'PaymentNote',
  'Payment Note',
  TextType.name,
  'Free-form text applying to the Payment for the owner of this account.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FinancialAccountFieldMetaFinancialInstitutionBranch = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.FinancialInstitutionBranch,
  'FinancialInstitutionBranch',
  'Financial Institution Branch',
  BranchType.name,
  'The branch of the financial institution associated with this financial account.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FinancialAccountFieldMetaCountry = new FieldMeta<FinancialAccountField>(
  FinancialAccountField.Country,
  'Country',
  'Country',
  CountryType.name,
  'The country in which the holder of the financial account is domiciled.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class FinancialAccountFieldMeta {
  public static readonly UBLExtensions = FinancialAccountFieldMetaUBLExtensions
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
  [FinancialAccountField.UBLExtensions, FinancialAccountFieldMetaUBLExtensions],
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

export const FinancialAccountType: Type<FinancialAccountField> = {
  name: 'FinancialAccount',
  label: 'Financial Account',
  module: TypeModule.cac,
  definition: 'A class to describe a financial account.',
  fields: FinancialAccountFieldMap,
}
