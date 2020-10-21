import { FieldMeta } from '../../FieldMeta'

export enum StatementField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  CopyIndicator = 'CopyIndicator',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  Note = 'Note',
  DocumentCurrencyCode = 'DocumentCurrencyCode',
  TotalDebitAmount = 'TotalDebitAmount',
  TotalCreditAmount = 'TotalCreditAmount',
  TotalBalanceAmount = 'TotalBalanceAmount',
  LineCountNumeric = 'LineCountNumeric',
  StatementTypeCode = 'StatementTypeCode',
  StatementPeriod = 'StatementPeriod',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature',
  AccountingSupplierParty = 'AccountingSupplierParty',
  AccountingCustomerParty = 'AccountingCustomerParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  OriginatorCustomerParty = 'OriginatorCustomerParty',
  PayeeParty = 'PayeeParty',
  PaymentMeans = 'PaymentMeans',
  PaymentTerms = 'PaymentTerms',
  AllowanceCharge = 'AllowanceCharge',
  TaxTotal = 'TaxTotal',
  StatementLine = 'StatementLine'
}

export const StatementFieldMetaUBLExtensions = new FieldMeta<StatementField>(
  StatementField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const StatementFieldMetaUBLVersionID = new FieldMeta<StatementField>(
  StatementField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const StatementFieldMetaCustomizationID = new FieldMeta<StatementField>(
  StatementField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const StatementFieldMetaProfileID = new FieldMeta<StatementField>(
  StatementField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const StatementFieldMetaProfileExecutionID = new FieldMeta<StatementField>(
  StatementField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const StatementFieldMetaID = new FieldMeta<StatementField>(
  StatementField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const StatementFieldMetaCopyIndicator = new FieldMeta<StatementField>(
  StatementField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const StatementFieldMetaUUID = new FieldMeta<StatementField>(
  StatementField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const StatementFieldMetaIssueDate = new FieldMeta<StatementField>(
  StatementField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const StatementFieldMetaIssueTime = new FieldMeta<StatementField>(
  StatementField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const StatementFieldMetaNote = new FieldMeta<StatementField>(
  StatementField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const StatementFieldMetaDocumentCurrencyCode = new FieldMeta<StatementField>(
  StatementField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Currency Code',
  'Code',
  'The default currency for the Statement.',
  '1',
  undefined,
  undefined
)

export const StatementFieldMetaTotalDebitAmount = new FieldMeta<StatementField>(
  StatementField.TotalDebitAmount,
  'TotalDebitAmount',
  'Debit Amount',
  'Amount',
  'The total of all debit amounts for the Statement.',
  '0..1',
  undefined,
  undefined
)

export const StatementFieldMetaTotalCreditAmount = new FieldMeta<StatementField>(
  StatementField.TotalCreditAmount,
  'TotalCreditAmount',
  'Credit Amount',
  'Amount',
  'The total of all credit amounts for the Statement.',
  '0..1',
  undefined,
  undefined
)

export const StatementFieldMetaTotalBalanceAmount = new FieldMeta<StatementField>(
  StatementField.TotalBalanceAmount,
  'TotalBalanceAmount',
  'Balance Amount',
  'Amount',
  'The total amount for the Statement.',
  '0..1',
  undefined,
  undefined
)

export const StatementFieldMetaLineCountNumeric = new FieldMeta<StatementField>(
  StatementField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of Statement Lines in the Statement.',
  '0..1',
  undefined,
  undefined
)

export const StatementFieldMetaStatementTypeCode = new FieldMeta<StatementField>(
  StatementField.StatementTypeCode,
  'StatementTypeCode',
  'Statement Type Code',
  'Code',
  'A code signifying the type of the Statement.',
  '0..1',
  undefined,
  undefined
)

export const StatementFieldMetaStatementPeriod = new FieldMeta<StatementField>(
  StatementField.StatementPeriod,
  'StatementPeriod',
  'Period',
  'Period',
  'A period to which the Statement applies.',
  '0..1',
  undefined,
  undefined
)

export const StatementFieldMetaAdditionalDocumentReference = new FieldMeta<StatementField>(
  StatementField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const StatementFieldMetaSignature = new FieldMeta<StatementField>(
  StatementField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const StatementFieldMetaAccountingSupplierParty = new FieldMeta<StatementField>(
  StatementField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The accounting supplier party.',
  '1',
  undefined,
  undefined
)

export const StatementFieldMetaAccountingCustomerParty = new FieldMeta<StatementField>(
  StatementField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The accounting customer party.',
  '1',
  undefined,
  undefined
)

export const StatementFieldMetaBuyerCustomerParty = new FieldMeta<StatementField>(
  StatementField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The buyer.',
  '0..1',
  undefined,
  undefined
)

export const StatementFieldMetaSellerSupplierParty = new FieldMeta<StatementField>(
  StatementField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller.',
  '0..1',
  undefined,
  undefined
)

export const StatementFieldMetaOriginatorCustomerParty = new FieldMeta<StatementField>(
  StatementField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The originator.',
  '0..1',
  undefined,
  undefined
)

export const StatementFieldMetaPayeeParty = new FieldMeta<StatementField>(
  StatementField.PayeeParty,
  'PayeeParty',
  'Party',
  'Party',
  'The payee.',
  '0..1',
  undefined,
  undefined
)

export const StatementFieldMetaPaymentMeans = new FieldMeta<StatementField>(
  StatementField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  'PaymentMeans',
  'Expected means of payment.',
  '0..n',
  undefined,
  undefined
)

export const StatementFieldMetaPaymentTerms = new FieldMeta<StatementField>(
  StatementField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  'PaymentTerms',
  'A set of payment terms associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const StatementFieldMetaAllowanceCharge = new FieldMeta<StatementField>(
  StatementField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'A discount or charge that applies to a price component.',
  '0..n',
  undefined,
  undefined
)

export const StatementFieldMetaTaxTotal = new FieldMeta<StatementField>(
  StatementField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'The total amount of a specific type of tax.',
  '0..n',
  undefined,
  undefined
)

export const StatementFieldMetaStatementLine = new FieldMeta<StatementField>(
  StatementField.StatementLine,
  'StatementLine',
  'Statement Line',
  'StatementLine',
  'A Statement Line.',
  '1..n',
  undefined,
  undefined
)

export class StatementFieldMeta {
  public static readonly UBLExtensions = StatementFieldMetaUBLExtensions
  public static readonly UBLVersionID = StatementFieldMetaUBLVersionID
  public static readonly CustomizationID = StatementFieldMetaCustomizationID
  public static readonly ProfileID = StatementFieldMetaProfileID
  public static readonly ProfileExecutionID = StatementFieldMetaProfileExecutionID
  public static readonly ID = StatementFieldMetaID
  public static readonly CopyIndicator = StatementFieldMetaCopyIndicator
  public static readonly UUID = StatementFieldMetaUUID
  public static readonly IssueDate = StatementFieldMetaIssueDate
  public static readonly IssueTime = StatementFieldMetaIssueTime
  public static readonly Note = StatementFieldMetaNote
  public static readonly DocumentCurrencyCode = StatementFieldMetaDocumentCurrencyCode
  public static readonly TotalDebitAmount = StatementFieldMetaTotalDebitAmount
  public static readonly TotalCreditAmount = StatementFieldMetaTotalCreditAmount
  public static readonly TotalBalanceAmount = StatementFieldMetaTotalBalanceAmount
  public static readonly LineCountNumeric = StatementFieldMetaLineCountNumeric
  public static readonly StatementTypeCode = StatementFieldMetaStatementTypeCode
  public static readonly StatementPeriod = StatementFieldMetaStatementPeriod
  public static readonly AdditionalDocumentReference = StatementFieldMetaAdditionalDocumentReference
  public static readonly Signature = StatementFieldMetaSignature
  public static readonly AccountingSupplierParty = StatementFieldMetaAccountingSupplierParty
  public static readonly AccountingCustomerParty = StatementFieldMetaAccountingCustomerParty
  public static readonly BuyerCustomerParty = StatementFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = StatementFieldMetaSellerSupplierParty
  public static readonly OriginatorCustomerParty = StatementFieldMetaOriginatorCustomerParty
  public static readonly PayeeParty = StatementFieldMetaPayeeParty
  public static readonly PaymentMeans = StatementFieldMetaPaymentMeans
  public static readonly PaymentTerms = StatementFieldMetaPaymentTerms
  public static readonly AllowanceCharge = StatementFieldMetaAllowanceCharge
  public static readonly TaxTotal = StatementFieldMetaTaxTotal
  public static readonly StatementLine = StatementFieldMetaStatementLine
}

export const StatementFieldMap = new Map([
  [StatementField.UBLExtensions, StatementFieldMetaUBLExtensions],
  [StatementField.UBLVersionID, StatementFieldMetaUBLVersionID],
  [StatementField.CustomizationID, StatementFieldMetaCustomizationID],
  [StatementField.ProfileID, StatementFieldMetaProfileID],
  [StatementField.ProfileExecutionID, StatementFieldMetaProfileExecutionID],
  [StatementField.ID, StatementFieldMetaID],
  [StatementField.CopyIndicator, StatementFieldMetaCopyIndicator],
  [StatementField.UUID, StatementFieldMetaUUID],
  [StatementField.IssueDate, StatementFieldMetaIssueDate],
  [StatementField.IssueTime, StatementFieldMetaIssueTime],
  [StatementField.Note, StatementFieldMetaNote],
  [StatementField.DocumentCurrencyCode, StatementFieldMetaDocumentCurrencyCode],
  [StatementField.TotalDebitAmount, StatementFieldMetaTotalDebitAmount],
  [StatementField.TotalCreditAmount, StatementFieldMetaTotalCreditAmount],
  [StatementField.TotalBalanceAmount, StatementFieldMetaTotalBalanceAmount],
  [StatementField.LineCountNumeric, StatementFieldMetaLineCountNumeric],
  [StatementField.StatementTypeCode, StatementFieldMetaStatementTypeCode],
  [StatementField.StatementPeriod, StatementFieldMetaStatementPeriod],
  [StatementField.AdditionalDocumentReference, StatementFieldMetaAdditionalDocumentReference],
  [StatementField.Signature, StatementFieldMetaSignature],
  [StatementField.AccountingSupplierParty, StatementFieldMetaAccountingSupplierParty],
  [StatementField.AccountingCustomerParty, StatementFieldMetaAccountingCustomerParty],
  [StatementField.BuyerCustomerParty, StatementFieldMetaBuyerCustomerParty],
  [StatementField.SellerSupplierParty, StatementFieldMetaSellerSupplierParty],
  [StatementField.OriginatorCustomerParty, StatementFieldMetaOriginatorCustomerParty],
  [StatementField.PayeeParty, StatementFieldMetaPayeeParty],
  [StatementField.PaymentMeans, StatementFieldMetaPaymentMeans],
  [StatementField.PaymentTerms, StatementFieldMetaPaymentTerms],
  [StatementField.AllowanceCharge, StatementFieldMetaAllowanceCharge],
  [StatementField.TaxTotal, StatementFieldMetaTaxTotal],
  [StatementField.StatementLine, StatementFieldMetaStatementLine]
])
