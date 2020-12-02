import { FieldMeta } from '../FieldMeta'

export enum ReminderField {
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
  ReminderTypeCode = 'ReminderTypeCode',
  ReminderSequenceNumeric = 'ReminderSequenceNumeric',
  Note = 'Note',
  TaxPointDate = 'TaxPointDate',
  DocumentCurrencyCode = 'DocumentCurrencyCode',
  TaxCurrencyCode = 'TaxCurrencyCode',
  PricingCurrencyCode = 'PricingCurrencyCode',
  PaymentCurrencyCode = 'PaymentCurrencyCode',
  PaymentAlternativeCurrencyCode = 'PaymentAlternativeCurrencyCode',
  AccountingCostCode = 'AccountingCostCode',
  AccountingCost = 'AccountingCost',
  LineCountNumeric = 'LineCountNumeric',
  ReminderPeriod = 'ReminderPeriod',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature',
  AccountingSupplierParty = 'AccountingSupplierParty',
  AccountingCustomerParty = 'AccountingCustomerParty',
  PayeeParty = 'PayeeParty',
  TaxRepresentativeParty = 'TaxRepresentativeParty',
  PaymentMeans = 'PaymentMeans',
  PaymentTerms = 'PaymentTerms',
  PrepaidPayment = 'PrepaidPayment',
  AllowanceCharge = 'AllowanceCharge',
  TaxExchangeRate = 'TaxExchangeRate',
  PricingExchangeRate = 'PricingExchangeRate',
  PaymentExchangeRate = 'PaymentExchangeRate',
  PaymentAlternativeExchangeRate = 'PaymentAlternativeExchangeRate',
  TaxTotal = 'TaxTotal',
  LegalMonetaryTotal = 'LegalMonetaryTotal',
  ReminderLine = 'ReminderLine'
}

export const ReminderFieldMetaUBLExtensions = new FieldMeta<ReminderField>(
  ReminderField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ReminderFieldMetaUBLVersionID = new FieldMeta<ReminderField>(
  ReminderField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const ReminderFieldMetaCustomizationID = new FieldMeta<ReminderField>(
  ReminderField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const ReminderFieldMetaProfileID = new FieldMeta<ReminderField>(
  ReminderField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const ReminderFieldMetaProfileExecutionID = new FieldMeta<ReminderField>(
  ReminderField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const ReminderFieldMetaID = new FieldMeta<ReminderField>(
  ReminderField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  'Invoice Number',
  undefined
)

export const ReminderFieldMetaCopyIndicator = new FieldMeta<ReminderField>(
  ReminderField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderFieldMetaUUID = new FieldMeta<ReminderField>(
  ReminderField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderFieldMetaIssueDate = new FieldMeta<ReminderField>(
  ReminderField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  'Invoice Date',
  undefined
)

export const ReminderFieldMetaIssueTime = new FieldMeta<ReminderField>(
  ReminderField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderFieldMetaReminderTypeCode = new FieldMeta<ReminderField>(
  ReminderField.ReminderTypeCode,
  'ReminderTypeCode',
  'Reminder Type Code',
  'Code',
  'A code signifying the type of the Reminder.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderFieldMetaReminderSequenceNumeric = new FieldMeta<ReminderField>(
  ReminderField.ReminderSequenceNumeric,
  'ReminderSequenceNumeric',
  'Reminder Sequence',
  'Numeric',
  'The number of the current Reminder in the sequence of reminders relating to the specified payments; the number of reminders previously sent plus one.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderFieldMetaNote = new FieldMeta<ReminderField>(
  ReminderField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ReminderFieldMetaTaxPointDate = new FieldMeta<ReminderField>(
  ReminderField.TaxPointDate,
  'TaxPointDate',
  'Tax Point Date',
  'Date',
  'The date of the Reminder, used to indicate the point at which tax becomes applicable.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderFieldMetaDocumentCurrencyCode = new FieldMeta<ReminderField>(
  ReminderField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Document Currency Code',
  'Code',
  'A code signifying the default currency for this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderFieldMetaTaxCurrencyCode = new FieldMeta<ReminderField>(
  ReminderField.TaxCurrencyCode,
  'TaxCurrencyCode',
  'Tax Currency Code',
  'Code',
  'A code signifying the currency used for tax amounts in the Reminder.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderFieldMetaPricingCurrencyCode = new FieldMeta<ReminderField>(
  ReminderField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Pricing Currency Code',
  'Code',
  'A code signifying the currency used for prices in the Reminder.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderFieldMetaPaymentCurrencyCode = new FieldMeta<ReminderField>(
  ReminderField.PaymentCurrencyCode,
  'PaymentCurrencyCode',
  'Payment Currency Code',
  'Code',
  'A code signifying the currency used for payment in the Reminder.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderFieldMetaPaymentAlternativeCurrencyCode = new FieldMeta<ReminderField>(
  ReminderField.PaymentAlternativeCurrencyCode,
  'PaymentAlternativeCurrencyCode',
  'Payment Alternative Currency Code',
  'Code',
  'A code signifying the alternative currency used for payment in the Reminder.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderFieldMetaAccountingCostCode = new FieldMeta<ReminderField>(
  ReminderField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  'Code',
  'The buyer\'s accounting code, applied to the Reminder as a whole.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderFieldMetaAccountingCost = new FieldMeta<ReminderField>(
  ReminderField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  'Text',
  'The buyer\'s accounting code, applied to the Reminder as a whole, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderFieldMetaLineCountNumeric = new FieldMeta<ReminderField>(
  ReminderField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of Reminder Lines in this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderFieldMetaReminderPeriod = new FieldMeta<ReminderField>(
  ReminderField.ReminderPeriod,
  'ReminderPeriod',
  'Reminder Period',
  'Period',
  'The periods to which the Reminder applies.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ReminderFieldMetaAdditionalDocumentReference = new FieldMeta<ReminderField>(
  ReminderField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ReminderFieldMetaSignature = new FieldMeta<ReminderField>(
  ReminderField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ReminderFieldMetaAccountingSupplierParty = new FieldMeta<ReminderField>(
  ReminderField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Accounting Supplier Party',
  'SupplierParty',
  'The accounting supplier party.',
  '1',
  'cac',
  undefined,
  undefined
)

export const ReminderFieldMetaAccountingCustomerParty = new FieldMeta<ReminderField>(
  ReminderField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Accounting Customer Party',
  'CustomerParty',
  'The accounting customer party.',
  '1',
  'cac',
  undefined,
  undefined
)

export const ReminderFieldMetaPayeeParty = new FieldMeta<ReminderField>(
  ReminderField.PayeeParty,
  'PayeeParty',
  'Payee Party',
  'Party',
  'The payee.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ReminderFieldMetaTaxRepresentativeParty = new FieldMeta<ReminderField>(
  ReminderField.TaxRepresentativeParty,
  'TaxRepresentativeParty',
  'Tax Representative Party',
  'Party',
  'The tax representative.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ReminderFieldMetaPaymentMeans = new FieldMeta<ReminderField>(
  ReminderField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  'PaymentMeans',
  'Expected means of payment.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ReminderFieldMetaPaymentTerms = new FieldMeta<ReminderField>(
  ReminderField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  'PaymentTerms',
  'A set of payment terms associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ReminderFieldMetaPrepaidPayment = new FieldMeta<ReminderField>(
  ReminderField.PrepaidPayment,
  'PrepaidPayment',
  'Prepaid Payment',
  'Payment',
  'A prepaid payment.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ReminderFieldMetaAllowanceCharge = new FieldMeta<ReminderField>(
  ReminderField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'A discount or charge that applies to a price component.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ReminderFieldMetaTaxExchangeRate = new FieldMeta<ReminderField>(
  ReminderField.TaxExchangeRate,
  'TaxExchangeRate',
  'Tax Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the tax currency.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ReminderFieldMetaPricingExchangeRate = new FieldMeta<ReminderField>(
  ReminderField.PricingExchangeRate,
  'PricingExchangeRate',
  'Pricing Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the pricing currency.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ReminderFieldMetaPaymentExchangeRate = new FieldMeta<ReminderField>(
  ReminderField.PaymentExchangeRate,
  'PaymentExchangeRate',
  'Payment Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the payment currency.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ReminderFieldMetaPaymentAlternativeExchangeRate = new FieldMeta<ReminderField>(
  ReminderField.PaymentAlternativeExchangeRate,
  'PaymentAlternativeExchangeRate',
  'Payment Alternative Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the payment alternative currency.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ReminderFieldMetaTaxTotal = new FieldMeta<ReminderField>(
  ReminderField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'The total amount of a specific type of tax.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ReminderFieldMetaLegalMonetaryTotal = new FieldMeta<ReminderField>(
  ReminderField.LegalMonetaryTotal,
  'LegalMonetaryTotal',
  'Legal Monetary Total',
  'MonetaryTotal',
  'The total amount payable on the Invoice, including Allowances, Charges, and Taxes.',
  '1',
  'cac',
  undefined,
  undefined
)

export const ReminderFieldMetaReminderLine = new FieldMeta<ReminderField>(
  ReminderField.ReminderLine,
  'ReminderLine',
  'Reminder Line',
  'ReminderLine',
  'A line describing a payment past due.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export class ReminderFieldMeta {
  public static readonly UBLExtensions = ReminderFieldMetaUBLExtensions
  public static readonly UBLVersionID = ReminderFieldMetaUBLVersionID
  public static readonly CustomizationID = ReminderFieldMetaCustomizationID
  public static readonly ProfileID = ReminderFieldMetaProfileID
  public static readonly ProfileExecutionID = ReminderFieldMetaProfileExecutionID
  public static readonly ID = ReminderFieldMetaID
  public static readonly CopyIndicator = ReminderFieldMetaCopyIndicator
  public static readonly UUID = ReminderFieldMetaUUID
  public static readonly IssueDate = ReminderFieldMetaIssueDate
  public static readonly IssueTime = ReminderFieldMetaIssueTime
  public static readonly ReminderTypeCode = ReminderFieldMetaReminderTypeCode
  public static readonly ReminderSequenceNumeric = ReminderFieldMetaReminderSequenceNumeric
  public static readonly Note = ReminderFieldMetaNote
  public static readonly TaxPointDate = ReminderFieldMetaTaxPointDate
  public static readonly DocumentCurrencyCode = ReminderFieldMetaDocumentCurrencyCode
  public static readonly TaxCurrencyCode = ReminderFieldMetaTaxCurrencyCode
  public static readonly PricingCurrencyCode = ReminderFieldMetaPricingCurrencyCode
  public static readonly PaymentCurrencyCode = ReminderFieldMetaPaymentCurrencyCode
  public static readonly PaymentAlternativeCurrencyCode = ReminderFieldMetaPaymentAlternativeCurrencyCode
  public static readonly AccountingCostCode = ReminderFieldMetaAccountingCostCode
  public static readonly AccountingCost = ReminderFieldMetaAccountingCost
  public static readonly LineCountNumeric = ReminderFieldMetaLineCountNumeric
  public static readonly ReminderPeriod = ReminderFieldMetaReminderPeriod
  public static readonly AdditionalDocumentReference = ReminderFieldMetaAdditionalDocumentReference
  public static readonly Signature = ReminderFieldMetaSignature
  public static readonly AccountingSupplierParty = ReminderFieldMetaAccountingSupplierParty
  public static readonly AccountingCustomerParty = ReminderFieldMetaAccountingCustomerParty
  public static readonly PayeeParty = ReminderFieldMetaPayeeParty
  public static readonly TaxRepresentativeParty = ReminderFieldMetaTaxRepresentativeParty
  public static readonly PaymentMeans = ReminderFieldMetaPaymentMeans
  public static readonly PaymentTerms = ReminderFieldMetaPaymentTerms
  public static readonly PrepaidPayment = ReminderFieldMetaPrepaidPayment
  public static readonly AllowanceCharge = ReminderFieldMetaAllowanceCharge
  public static readonly TaxExchangeRate = ReminderFieldMetaTaxExchangeRate
  public static readonly PricingExchangeRate = ReminderFieldMetaPricingExchangeRate
  public static readonly PaymentExchangeRate = ReminderFieldMetaPaymentExchangeRate
  public static readonly PaymentAlternativeExchangeRate = ReminderFieldMetaPaymentAlternativeExchangeRate
  public static readonly TaxTotal = ReminderFieldMetaTaxTotal
  public static readonly LegalMonetaryTotal = ReminderFieldMetaLegalMonetaryTotal
  public static readonly ReminderLine = ReminderFieldMetaReminderLine
}

export const ReminderFieldMap = new Map([
  [ReminderField.UBLExtensions, ReminderFieldMetaUBLExtensions],
  [ReminderField.UBLVersionID, ReminderFieldMetaUBLVersionID],
  [ReminderField.CustomizationID, ReminderFieldMetaCustomizationID],
  [ReminderField.ProfileID, ReminderFieldMetaProfileID],
  [ReminderField.ProfileExecutionID, ReminderFieldMetaProfileExecutionID],
  [ReminderField.ID, ReminderFieldMetaID],
  [ReminderField.CopyIndicator, ReminderFieldMetaCopyIndicator],
  [ReminderField.UUID, ReminderFieldMetaUUID],
  [ReminderField.IssueDate, ReminderFieldMetaIssueDate],
  [ReminderField.IssueTime, ReminderFieldMetaIssueTime],
  [ReminderField.ReminderTypeCode, ReminderFieldMetaReminderTypeCode],
  [ReminderField.ReminderSequenceNumeric, ReminderFieldMetaReminderSequenceNumeric],
  [ReminderField.Note, ReminderFieldMetaNote],
  [ReminderField.TaxPointDate, ReminderFieldMetaTaxPointDate],
  [ReminderField.DocumentCurrencyCode, ReminderFieldMetaDocumentCurrencyCode],
  [ReminderField.TaxCurrencyCode, ReminderFieldMetaTaxCurrencyCode],
  [ReminderField.PricingCurrencyCode, ReminderFieldMetaPricingCurrencyCode],
  [ReminderField.PaymentCurrencyCode, ReminderFieldMetaPaymentCurrencyCode],
  [ReminderField.PaymentAlternativeCurrencyCode, ReminderFieldMetaPaymentAlternativeCurrencyCode],
  [ReminderField.AccountingCostCode, ReminderFieldMetaAccountingCostCode],
  [ReminderField.AccountingCost, ReminderFieldMetaAccountingCost],
  [ReminderField.LineCountNumeric, ReminderFieldMetaLineCountNumeric],
  [ReminderField.ReminderPeriod, ReminderFieldMetaReminderPeriod],
  [ReminderField.AdditionalDocumentReference, ReminderFieldMetaAdditionalDocumentReference],
  [ReminderField.Signature, ReminderFieldMetaSignature],
  [ReminderField.AccountingSupplierParty, ReminderFieldMetaAccountingSupplierParty],
  [ReminderField.AccountingCustomerParty, ReminderFieldMetaAccountingCustomerParty],
  [ReminderField.PayeeParty, ReminderFieldMetaPayeeParty],
  [ReminderField.TaxRepresentativeParty, ReminderFieldMetaTaxRepresentativeParty],
  [ReminderField.PaymentMeans, ReminderFieldMetaPaymentMeans],
  [ReminderField.PaymentTerms, ReminderFieldMetaPaymentTerms],
  [ReminderField.PrepaidPayment, ReminderFieldMetaPrepaidPayment],
  [ReminderField.AllowanceCharge, ReminderFieldMetaAllowanceCharge],
  [ReminderField.TaxExchangeRate, ReminderFieldMetaTaxExchangeRate],
  [ReminderField.PricingExchangeRate, ReminderFieldMetaPricingExchangeRate],
  [ReminderField.PaymentExchangeRate, ReminderFieldMetaPaymentExchangeRate],
  [ReminderField.PaymentAlternativeExchangeRate, ReminderFieldMetaPaymentAlternativeExchangeRate],
  [ReminderField.TaxTotal, ReminderFieldMetaTaxTotal],
  [ReminderField.LegalMonetaryTotal, ReminderFieldMetaLegalMonetaryTotal],
  [ReminderField.ReminderLine, ReminderFieldMetaReminderLine]
])
