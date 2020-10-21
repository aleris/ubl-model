import { FieldMeta } from '../../FieldMeta'

export enum FreightInvoiceField {
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
  DueDate = 'DueDate',
  InvoiceTypeCode = 'InvoiceTypeCode',
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
  InvoicePeriod = 'InvoicePeriod',
  Shipment = 'Shipment',
  OrderReference = 'OrderReference',
  BillingReference = 'BillingReference',
  DespatchDocumentReference = 'DespatchDocumentReference',
  ReceiptDocumentReference = 'ReceiptDocumentReference',
  OriginatorDocumentReference = 'OriginatorDocumentReference',
  ContractDocumentReference = 'ContractDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  ProjectReference = 'ProjectReference',
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
  WithholdingTaxTotal = 'WithholdingTaxTotal',
  LegalMonetaryTotal = 'LegalMonetaryTotal',
  InvoiceLine = 'InvoiceLine'
}

export const FreightInvoiceFieldMetaUBLExtensions = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaUBLVersionID = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const FreightInvoiceFieldMetaCustomizationID = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const FreightInvoiceFieldMetaProfileID = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const FreightInvoiceFieldMetaProfileExecutionID = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const FreightInvoiceFieldMetaID = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'Invoice Number',
  undefined
)

export const FreightInvoiceFieldMetaCopyIndicator = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaUUID = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaIssueDate = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'Invoice Date',
  undefined
)

export const FreightInvoiceFieldMetaIssueTime = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaDueDate = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.DueDate,
  'DueDate',
  'Due Date',
  'Date',
  'The date on which Invoice is due.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaInvoiceTypeCode = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.InvoiceTypeCode,
  'InvoiceTypeCode',
  'Invoice Type Code',
  'Code',
  'A code signifying the type of the Freight Invoice.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaNote = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaTaxPointDate = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.TaxPointDate,
  'TaxPointDate',
  'Tax Point Date',
  'Date',
  'The date of the Freight Invoice, used to indicate the point at which tax becomes applicable.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaDocumentCurrencyCode = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the default currency for this document.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaTaxCurrencyCode = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.TaxCurrencyCode,
  'TaxCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency used for tax amounts in the Freight Invoice.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPricingCurrencyCode = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency used for prices in the Freight Invoice.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPaymentCurrencyCode = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PaymentCurrencyCode,
  'PaymentCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency used for payment in the Freight Invoice.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPaymentAlternativeCurrencyCode = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PaymentAlternativeCurrencyCode,
  'PaymentAlternativeCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the alternative currency used for payment in the Freight Invoice.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaAccountingCostCode = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  'Code',
  'The buyer\'s accounting code, applied to the Freight Invoice as a whole.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaAccountingCost = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  'Text',
  'The buyer\'s accounting cost centre, applied to the Freight Invoice as a whole, expressed as text.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaLineCountNumeric = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of Invoice Lines in the document.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaInvoicePeriod = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.InvoicePeriod,
  'InvoicePeriod',
  'Period',
  'Period',
  'The time periods to which the Freight Invoice applies.',
  '0..n',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaShipment = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.Shipment,
  'Shipment',
  'Shipment',
  'Shipment',
  'Details about one or more shipments covered by this Freight Invoice.',
  '1..n',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaOrderReference = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.OrderReference,
  'OrderReference',
  'Order Reference',
  'OrderReference',
  'Reference to an Order associated with this Freight Invoice.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaBillingReference = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.BillingReference,
  'BillingReference',
  'Billing Reference',
  'BillingReference',
  'A reference to a billing document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaDespatchDocumentReference = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.DespatchDocumentReference,
  'DespatchDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a Despatch Advice associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaReceiptDocumentReference = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.ReceiptDocumentReference,
  'ReceiptDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a Receipt Advice associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaOriginatorDocumentReference = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.OriginatorDocumentReference,
  'OriginatorDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an originator document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaContractDocumentReference = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.ContractDocumentReference,
  'ContractDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a contract associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaAdditionalDocumentReference = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaProjectReference = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.ProjectReference,
  'ProjectReference',
  'Project Reference',
  'ProjectReference',
  'A reference to a project associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaSignature = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaAccountingSupplierParty = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The accounting supplier party.',
  '1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaAccountingCustomerParty = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The accounting customer party.',
  '1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPayeeParty = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PayeeParty,
  'PayeeParty',
  'Party',
  'Party',
  'The payee.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaTaxRepresentativeParty = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.TaxRepresentativeParty,
  'TaxRepresentativeParty',
  'Party',
  'Party',
  'The tax representative.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPaymentMeans = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  'PaymentMeans',
  'Expected means of payment.',
  '0..n',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPaymentTerms = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  'PaymentTerms',
  'A set of payment terms associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPrepaidPayment = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PrepaidPayment,
  'PrepaidPayment',
  'Payment',
  'Payment',
  'A prepaid payment.',
  '0..n',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaAllowanceCharge = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'A discount or charge that applies to a price component.',
  '0..n',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaTaxExchangeRate = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.TaxExchangeRate,
  'TaxExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the tax currency.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPricingExchangeRate = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PricingExchangeRate,
  'PricingExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the pricing currency.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPaymentExchangeRate = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PaymentExchangeRate,
  'PaymentExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the payment currency.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPaymentAlternativeExchangeRate = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PaymentAlternativeExchangeRate,
  'PaymentAlternativeExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the payment alternative currency.',
  '0..1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaTaxTotal = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'The total amount of a specific type of tax.',
  '0..n',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaWithholdingTaxTotal = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.WithholdingTaxTotal,
  'WithholdingTaxTotal',
  'Tax Total',
  'TaxTotal',
  'The total withholding tax.',
  '0..n',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaLegalMonetaryTotal = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.LegalMonetaryTotal,
  'LegalMonetaryTotal',
  'Monetary Total',
  'MonetaryTotal',
  'The total amount payable on the Freight Invoice, including Allowances, Charges, and Taxes.',
  '1',
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaInvoiceLine = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.InvoiceLine,
  'InvoiceLine',
  'Invoice Line',
  'InvoiceLine',
  'An Invoice Line.',
  '1..n',
  undefined,
  undefined
)

export class FreightInvoiceFieldMeta {
  public static readonly UBLExtensions = FreightInvoiceFieldMetaUBLExtensions
  public static readonly UBLVersionID = FreightInvoiceFieldMetaUBLVersionID
  public static readonly CustomizationID = FreightInvoiceFieldMetaCustomizationID
  public static readonly ProfileID = FreightInvoiceFieldMetaProfileID
  public static readonly ProfileExecutionID = FreightInvoiceFieldMetaProfileExecutionID
  public static readonly ID = FreightInvoiceFieldMetaID
  public static readonly CopyIndicator = FreightInvoiceFieldMetaCopyIndicator
  public static readonly UUID = FreightInvoiceFieldMetaUUID
  public static readonly IssueDate = FreightInvoiceFieldMetaIssueDate
  public static readonly IssueTime = FreightInvoiceFieldMetaIssueTime
  public static readonly DueDate = FreightInvoiceFieldMetaDueDate
  public static readonly InvoiceTypeCode = FreightInvoiceFieldMetaInvoiceTypeCode
  public static readonly Note = FreightInvoiceFieldMetaNote
  public static readonly TaxPointDate = FreightInvoiceFieldMetaTaxPointDate
  public static readonly DocumentCurrencyCode = FreightInvoiceFieldMetaDocumentCurrencyCode
  public static readonly TaxCurrencyCode = FreightInvoiceFieldMetaTaxCurrencyCode
  public static readonly PricingCurrencyCode = FreightInvoiceFieldMetaPricingCurrencyCode
  public static readonly PaymentCurrencyCode = FreightInvoiceFieldMetaPaymentCurrencyCode
  public static readonly PaymentAlternativeCurrencyCode = FreightInvoiceFieldMetaPaymentAlternativeCurrencyCode
  public static readonly AccountingCostCode = FreightInvoiceFieldMetaAccountingCostCode
  public static readonly AccountingCost = FreightInvoiceFieldMetaAccountingCost
  public static readonly LineCountNumeric = FreightInvoiceFieldMetaLineCountNumeric
  public static readonly InvoicePeriod = FreightInvoiceFieldMetaInvoicePeriod
  public static readonly Shipment = FreightInvoiceFieldMetaShipment
  public static readonly OrderReference = FreightInvoiceFieldMetaOrderReference
  public static readonly BillingReference = FreightInvoiceFieldMetaBillingReference
  public static readonly DespatchDocumentReference = FreightInvoiceFieldMetaDespatchDocumentReference
  public static readonly ReceiptDocumentReference = FreightInvoiceFieldMetaReceiptDocumentReference
  public static readonly OriginatorDocumentReference = FreightInvoiceFieldMetaOriginatorDocumentReference
  public static readonly ContractDocumentReference = FreightInvoiceFieldMetaContractDocumentReference
  public static readonly AdditionalDocumentReference = FreightInvoiceFieldMetaAdditionalDocumentReference
  public static readonly ProjectReference = FreightInvoiceFieldMetaProjectReference
  public static readonly Signature = FreightInvoiceFieldMetaSignature
  public static readonly AccountingSupplierParty = FreightInvoiceFieldMetaAccountingSupplierParty
  public static readonly AccountingCustomerParty = FreightInvoiceFieldMetaAccountingCustomerParty
  public static readonly PayeeParty = FreightInvoiceFieldMetaPayeeParty
  public static readonly TaxRepresentativeParty = FreightInvoiceFieldMetaTaxRepresentativeParty
  public static readonly PaymentMeans = FreightInvoiceFieldMetaPaymentMeans
  public static readonly PaymentTerms = FreightInvoiceFieldMetaPaymentTerms
  public static readonly PrepaidPayment = FreightInvoiceFieldMetaPrepaidPayment
  public static readonly AllowanceCharge = FreightInvoiceFieldMetaAllowanceCharge
  public static readonly TaxExchangeRate = FreightInvoiceFieldMetaTaxExchangeRate
  public static readonly PricingExchangeRate = FreightInvoiceFieldMetaPricingExchangeRate
  public static readonly PaymentExchangeRate = FreightInvoiceFieldMetaPaymentExchangeRate
  public static readonly PaymentAlternativeExchangeRate = FreightInvoiceFieldMetaPaymentAlternativeExchangeRate
  public static readonly TaxTotal = FreightInvoiceFieldMetaTaxTotal
  public static readonly WithholdingTaxTotal = FreightInvoiceFieldMetaWithholdingTaxTotal
  public static readonly LegalMonetaryTotal = FreightInvoiceFieldMetaLegalMonetaryTotal
  public static readonly InvoiceLine = FreightInvoiceFieldMetaInvoiceLine
}

export const FreightInvoiceFieldMap = new Map([
  [FreightInvoiceField.UBLExtensions, FreightInvoiceFieldMetaUBLExtensions],
  [FreightInvoiceField.UBLVersionID, FreightInvoiceFieldMetaUBLVersionID],
  [FreightInvoiceField.CustomizationID, FreightInvoiceFieldMetaCustomizationID],
  [FreightInvoiceField.ProfileID, FreightInvoiceFieldMetaProfileID],
  [FreightInvoiceField.ProfileExecutionID, FreightInvoiceFieldMetaProfileExecutionID],
  [FreightInvoiceField.ID, FreightInvoiceFieldMetaID],
  [FreightInvoiceField.CopyIndicator, FreightInvoiceFieldMetaCopyIndicator],
  [FreightInvoiceField.UUID, FreightInvoiceFieldMetaUUID],
  [FreightInvoiceField.IssueDate, FreightInvoiceFieldMetaIssueDate],
  [FreightInvoiceField.IssueTime, FreightInvoiceFieldMetaIssueTime],
  [FreightInvoiceField.DueDate, FreightInvoiceFieldMetaDueDate],
  [FreightInvoiceField.InvoiceTypeCode, FreightInvoiceFieldMetaInvoiceTypeCode],
  [FreightInvoiceField.Note, FreightInvoiceFieldMetaNote],
  [FreightInvoiceField.TaxPointDate, FreightInvoiceFieldMetaTaxPointDate],
  [FreightInvoiceField.DocumentCurrencyCode, FreightInvoiceFieldMetaDocumentCurrencyCode],
  [FreightInvoiceField.TaxCurrencyCode, FreightInvoiceFieldMetaTaxCurrencyCode],
  [FreightInvoiceField.PricingCurrencyCode, FreightInvoiceFieldMetaPricingCurrencyCode],
  [FreightInvoiceField.PaymentCurrencyCode, FreightInvoiceFieldMetaPaymentCurrencyCode],
  [FreightInvoiceField.PaymentAlternativeCurrencyCode, FreightInvoiceFieldMetaPaymentAlternativeCurrencyCode],
  [FreightInvoiceField.AccountingCostCode, FreightInvoiceFieldMetaAccountingCostCode],
  [FreightInvoiceField.AccountingCost, FreightInvoiceFieldMetaAccountingCost],
  [FreightInvoiceField.LineCountNumeric, FreightInvoiceFieldMetaLineCountNumeric],
  [FreightInvoiceField.InvoicePeriod, FreightInvoiceFieldMetaInvoicePeriod],
  [FreightInvoiceField.Shipment, FreightInvoiceFieldMetaShipment],
  [FreightInvoiceField.OrderReference, FreightInvoiceFieldMetaOrderReference],
  [FreightInvoiceField.BillingReference, FreightInvoiceFieldMetaBillingReference],
  [FreightInvoiceField.DespatchDocumentReference, FreightInvoiceFieldMetaDespatchDocumentReference],
  [FreightInvoiceField.ReceiptDocumentReference, FreightInvoiceFieldMetaReceiptDocumentReference],
  [FreightInvoiceField.OriginatorDocumentReference, FreightInvoiceFieldMetaOriginatorDocumentReference],
  [FreightInvoiceField.ContractDocumentReference, FreightInvoiceFieldMetaContractDocumentReference],
  [FreightInvoiceField.AdditionalDocumentReference, FreightInvoiceFieldMetaAdditionalDocumentReference],
  [FreightInvoiceField.ProjectReference, FreightInvoiceFieldMetaProjectReference],
  [FreightInvoiceField.Signature, FreightInvoiceFieldMetaSignature],
  [FreightInvoiceField.AccountingSupplierParty, FreightInvoiceFieldMetaAccountingSupplierParty],
  [FreightInvoiceField.AccountingCustomerParty, FreightInvoiceFieldMetaAccountingCustomerParty],
  [FreightInvoiceField.PayeeParty, FreightInvoiceFieldMetaPayeeParty],
  [FreightInvoiceField.TaxRepresentativeParty, FreightInvoiceFieldMetaTaxRepresentativeParty],
  [FreightInvoiceField.PaymentMeans, FreightInvoiceFieldMetaPaymentMeans],
  [FreightInvoiceField.PaymentTerms, FreightInvoiceFieldMetaPaymentTerms],
  [FreightInvoiceField.PrepaidPayment, FreightInvoiceFieldMetaPrepaidPayment],
  [FreightInvoiceField.AllowanceCharge, FreightInvoiceFieldMetaAllowanceCharge],
  [FreightInvoiceField.TaxExchangeRate, FreightInvoiceFieldMetaTaxExchangeRate],
  [FreightInvoiceField.PricingExchangeRate, FreightInvoiceFieldMetaPricingExchangeRate],
  [FreightInvoiceField.PaymentExchangeRate, FreightInvoiceFieldMetaPaymentExchangeRate],
  [FreightInvoiceField.PaymentAlternativeExchangeRate, FreightInvoiceFieldMetaPaymentAlternativeExchangeRate],
  [FreightInvoiceField.TaxTotal, FreightInvoiceFieldMetaTaxTotal],
  [FreightInvoiceField.WithholdingTaxTotal, FreightInvoiceFieldMetaWithholdingTaxTotal],
  [FreightInvoiceField.LegalMonetaryTotal, FreightInvoiceFieldMetaLegalMonetaryTotal],
  [FreightInvoiceField.InvoiceLine, FreightInvoiceFieldMetaInvoiceLine]
])
