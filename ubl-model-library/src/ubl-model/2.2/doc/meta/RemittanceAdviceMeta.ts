import { FieldMeta } from '../../FieldMeta'

export enum RemittanceAdviceField {
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
  TotalPaymentAmount = 'TotalPaymentAmount',
  PaymentOrderReference = 'PaymentOrderReference',
  PayerReference = 'PayerReference',
  InvoicingPartyReference = 'InvoicingPartyReference',
  LineCountNumeric = 'LineCountNumeric',
  InvoicePeriod = 'InvoicePeriod',
  BillingReference = 'BillingReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature',
  AccountingCustomerParty = 'AccountingCustomerParty',
  AccountingSupplierParty = 'AccountingSupplierParty',
  PayeeParty = 'PayeeParty',
  PaymentMeans = 'PaymentMeans',
  TaxTotal = 'TaxTotal',
  RemittanceAdviceLine = 'RemittanceAdviceLine'
}

export const RemittanceAdviceFieldMetaUBLExtensions = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaUBLVersionID = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const RemittanceAdviceFieldMetaCustomizationID = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const RemittanceAdviceFieldMetaProfileID = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const RemittanceAdviceFieldMetaProfileExecutionID = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const RemittanceAdviceFieldMetaID = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaCopyIndicator = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaUUID = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaIssueDate = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaIssueTime = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaNote = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaDocumentCurrencyCode = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the default currency for this document.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaTotalDebitAmount = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.TotalDebitAmount,
  'TotalDebitAmount',
  'Debit Amount',
  'Amount',
  'The totals of all debit amounts for the Remittance Advice.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaTotalCreditAmount = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.TotalCreditAmount,
  'TotalCreditAmount',
  'Credit Amount',
  'Amount',
  'The totals of all credit amounts for the Remittance Advice.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaTotalPaymentAmount = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.TotalPaymentAmount,
  'TotalPaymentAmount',
  'Payment Amount',
  'Amount',
  'The total payable amount for the Remittance Advice (must be positive).',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaPaymentOrderReference = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.PaymentOrderReference,
  'PaymentOrderReference',
  'Payment Order Reference',
  'Text',
  'An internal reference to the order for payment from the payer to the payer\'s bank.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaPayerReference = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.PayerReference,
  'PayerReference',
  'Reference',
  'Text',
  'An internal reference to the payer\'s order for payment.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaInvoicingPartyReference = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.InvoicingPartyReference,
  'InvoicingPartyReference',
  'Reference',
  'Text',
  'An internal reference to the order for payment by the invoicing party. This may have been requested of the payer by the payee to accompany the payer\'s remittance.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaLineCountNumeric = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of Remittance Advice Lines in the document.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaInvoicePeriod = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.InvoicePeriod,
  'InvoicePeriod',
  'Period',
  'Period',
  'A period (rather than a specific invoice) associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaBillingReference = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.BillingReference,
  'BillingReference',
  'Billing Reference',
  'BillingReference',
  'A reference to a billing document associated with this document.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaAdditionalDocumentReference = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaSignature = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaAccountingCustomerParty = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The accounting customer party.',
  '1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaAccountingSupplierParty = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The accounting supplier party.',
  '1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaPayeeParty = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.PayeeParty,
  'PayeeParty',
  'Party',
  'Party',
  'The payee.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaPaymentMeans = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  'PaymentMeans',
  'Expected means of payment.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaTaxTotal = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'The total amount of a specific type of tax.',
  '0..n',
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaRemittanceAdviceLine = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.RemittanceAdviceLine,
  'RemittanceAdviceLine',
  'Remittance Advice Line',
  'RemittanceAdviceLine',
  'A line specifying a balance.',
  '1..n',
  undefined,
  undefined
)

export class RemittanceAdviceFieldMeta {
  public static readonly UBLExtensions = RemittanceAdviceFieldMetaUBLExtensions
  public static readonly UBLVersionID = RemittanceAdviceFieldMetaUBLVersionID
  public static readonly CustomizationID = RemittanceAdviceFieldMetaCustomizationID
  public static readonly ProfileID = RemittanceAdviceFieldMetaProfileID
  public static readonly ProfileExecutionID = RemittanceAdviceFieldMetaProfileExecutionID
  public static readonly ID = RemittanceAdviceFieldMetaID
  public static readonly CopyIndicator = RemittanceAdviceFieldMetaCopyIndicator
  public static readonly UUID = RemittanceAdviceFieldMetaUUID
  public static readonly IssueDate = RemittanceAdviceFieldMetaIssueDate
  public static readonly IssueTime = RemittanceAdviceFieldMetaIssueTime
  public static readonly Note = RemittanceAdviceFieldMetaNote
  public static readonly DocumentCurrencyCode = RemittanceAdviceFieldMetaDocumentCurrencyCode
  public static readonly TotalDebitAmount = RemittanceAdviceFieldMetaTotalDebitAmount
  public static readonly TotalCreditAmount = RemittanceAdviceFieldMetaTotalCreditAmount
  public static readonly TotalPaymentAmount = RemittanceAdviceFieldMetaTotalPaymentAmount
  public static readonly PaymentOrderReference = RemittanceAdviceFieldMetaPaymentOrderReference
  public static readonly PayerReference = RemittanceAdviceFieldMetaPayerReference
  public static readonly InvoicingPartyReference = RemittanceAdviceFieldMetaInvoicingPartyReference
  public static readonly LineCountNumeric = RemittanceAdviceFieldMetaLineCountNumeric
  public static readonly InvoicePeriod = RemittanceAdviceFieldMetaInvoicePeriod
  public static readonly BillingReference = RemittanceAdviceFieldMetaBillingReference
  public static readonly AdditionalDocumentReference = RemittanceAdviceFieldMetaAdditionalDocumentReference
  public static readonly Signature = RemittanceAdviceFieldMetaSignature
  public static readonly AccountingCustomerParty = RemittanceAdviceFieldMetaAccountingCustomerParty
  public static readonly AccountingSupplierParty = RemittanceAdviceFieldMetaAccountingSupplierParty
  public static readonly PayeeParty = RemittanceAdviceFieldMetaPayeeParty
  public static readonly PaymentMeans = RemittanceAdviceFieldMetaPaymentMeans
  public static readonly TaxTotal = RemittanceAdviceFieldMetaTaxTotal
  public static readonly RemittanceAdviceLine = RemittanceAdviceFieldMetaRemittanceAdviceLine
}

export const RemittanceAdviceFieldMap = new Map([
  [RemittanceAdviceField.UBLExtensions, RemittanceAdviceFieldMetaUBLExtensions],
  [RemittanceAdviceField.UBLVersionID, RemittanceAdviceFieldMetaUBLVersionID],
  [RemittanceAdviceField.CustomizationID, RemittanceAdviceFieldMetaCustomizationID],
  [RemittanceAdviceField.ProfileID, RemittanceAdviceFieldMetaProfileID],
  [RemittanceAdviceField.ProfileExecutionID, RemittanceAdviceFieldMetaProfileExecutionID],
  [RemittanceAdviceField.ID, RemittanceAdviceFieldMetaID],
  [RemittanceAdviceField.CopyIndicator, RemittanceAdviceFieldMetaCopyIndicator],
  [RemittanceAdviceField.UUID, RemittanceAdviceFieldMetaUUID],
  [RemittanceAdviceField.IssueDate, RemittanceAdviceFieldMetaIssueDate],
  [RemittanceAdviceField.IssueTime, RemittanceAdviceFieldMetaIssueTime],
  [RemittanceAdviceField.Note, RemittanceAdviceFieldMetaNote],
  [RemittanceAdviceField.DocumentCurrencyCode, RemittanceAdviceFieldMetaDocumentCurrencyCode],
  [RemittanceAdviceField.TotalDebitAmount, RemittanceAdviceFieldMetaTotalDebitAmount],
  [RemittanceAdviceField.TotalCreditAmount, RemittanceAdviceFieldMetaTotalCreditAmount],
  [RemittanceAdviceField.TotalPaymentAmount, RemittanceAdviceFieldMetaTotalPaymentAmount],
  [RemittanceAdviceField.PaymentOrderReference, RemittanceAdviceFieldMetaPaymentOrderReference],
  [RemittanceAdviceField.PayerReference, RemittanceAdviceFieldMetaPayerReference],
  [RemittanceAdviceField.InvoicingPartyReference, RemittanceAdviceFieldMetaInvoicingPartyReference],
  [RemittanceAdviceField.LineCountNumeric, RemittanceAdviceFieldMetaLineCountNumeric],
  [RemittanceAdviceField.InvoicePeriod, RemittanceAdviceFieldMetaInvoicePeriod],
  [RemittanceAdviceField.BillingReference, RemittanceAdviceFieldMetaBillingReference],
  [RemittanceAdviceField.AdditionalDocumentReference, RemittanceAdviceFieldMetaAdditionalDocumentReference],
  [RemittanceAdviceField.Signature, RemittanceAdviceFieldMetaSignature],
  [RemittanceAdviceField.AccountingCustomerParty, RemittanceAdviceFieldMetaAccountingCustomerParty],
  [RemittanceAdviceField.AccountingSupplierParty, RemittanceAdviceFieldMetaAccountingSupplierParty],
  [RemittanceAdviceField.PayeeParty, RemittanceAdviceFieldMetaPayeeParty],
  [RemittanceAdviceField.PaymentMeans, RemittanceAdviceFieldMetaPaymentMeans],
  [RemittanceAdviceField.TaxTotal, RemittanceAdviceFieldMetaTaxTotal],
  [RemittanceAdviceField.RemittanceAdviceLine, RemittanceAdviceFieldMetaRemittanceAdviceLine]
])
