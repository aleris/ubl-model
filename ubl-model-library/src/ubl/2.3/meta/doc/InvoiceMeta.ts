import { FieldMeta } from '../FieldMeta'

export enum InvoiceField {
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
  BuyerReference = 'BuyerReference',
  InvoicePeriod = 'InvoicePeriod',
  OrderReference = 'OrderReference',
  BillingReference = 'BillingReference',
  DespatchDocumentReference = 'DespatchDocumentReference',
  ReceiptDocumentReference = 'ReceiptDocumentReference',
  StatementDocumentReference = 'StatementDocumentReference',
  OriginatorDocumentReference = 'OriginatorDocumentReference',
  ContractDocumentReference = 'ContractDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  ProjectReference = 'ProjectReference',
  Signature = 'Signature',
  AccountingSupplierParty = 'AccountingSupplierParty',
  AccountingCustomerParty = 'AccountingCustomerParty',
  PayeeParty = 'PayeeParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  TaxRepresentativeParty = 'TaxRepresentativeParty',
  Delivery = 'Delivery',
  DeliveryTerms = 'DeliveryTerms',
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

export const InvoiceFieldMetaUBLExtensions = new FieldMeta<InvoiceField>(
  InvoiceField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const InvoiceFieldMetaUBLVersionID = new FieldMeta<InvoiceField>(
  InvoiceField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const InvoiceFieldMetaCustomizationID = new FieldMeta<InvoiceField>(
  InvoiceField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const InvoiceFieldMetaProfileID = new FieldMeta<InvoiceField>(
  InvoiceField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const InvoiceFieldMetaProfileExecutionID = new FieldMeta<InvoiceField>(
  InvoiceField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const InvoiceFieldMetaID = new FieldMeta<InvoiceField>(
  InvoiceField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  'Invoice Number',
  undefined
)

export const InvoiceFieldMetaCopyIndicator = new FieldMeta<InvoiceField>(
  InvoiceField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceFieldMetaUUID = new FieldMeta<InvoiceField>(
  InvoiceField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceFieldMetaIssueDate = new FieldMeta<InvoiceField>(
  InvoiceField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  'Invoice Date',
  undefined
)

export const InvoiceFieldMetaIssueTime = new FieldMeta<InvoiceField>(
  InvoiceField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceFieldMetaDueDate = new FieldMeta<InvoiceField>(
  InvoiceField.DueDate,
  'DueDate',
  'Due Date',
  'Date',
  'The date on which Invoice is due.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceFieldMetaInvoiceTypeCode = new FieldMeta<InvoiceField>(
  InvoiceField.InvoiceTypeCode,
  'InvoiceTypeCode',
  'Invoice Type Code',
  'Code',
  'A code signifying the type of the Invoice.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceFieldMetaNote = new FieldMeta<InvoiceField>(
  InvoiceField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const InvoiceFieldMetaTaxPointDate = new FieldMeta<InvoiceField>(
  InvoiceField.TaxPointDate,
  'TaxPointDate',
  'Tax Point Date',
  'Date',
  'The date of the Invoice, used to indicate the point at which tax becomes applicable.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceFieldMetaDocumentCurrencyCode = new FieldMeta<InvoiceField>(
  InvoiceField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Document Currency Code',
  'Code',
  'A code signifying the default currency for this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceFieldMetaTaxCurrencyCode = new FieldMeta<InvoiceField>(
  InvoiceField.TaxCurrencyCode,
  'TaxCurrencyCode',
  'Tax Currency Code',
  'Code',
  'A code signifying the currency used for tax amounts in the Invoice.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceFieldMetaPricingCurrencyCode = new FieldMeta<InvoiceField>(
  InvoiceField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Pricing Currency Code',
  'Code',
  'A code signifying the currency used for prices in the Invoice.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceFieldMetaPaymentCurrencyCode = new FieldMeta<InvoiceField>(
  InvoiceField.PaymentCurrencyCode,
  'PaymentCurrencyCode',
  'Payment Currency Code',
  'Code',
  'A code signifying the currency used for payment in the Invoice.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceFieldMetaPaymentAlternativeCurrencyCode = new FieldMeta<InvoiceField>(
  InvoiceField.PaymentAlternativeCurrencyCode,
  'PaymentAlternativeCurrencyCode',
  'Payment Alternative Currency Code',
  'Code',
  'A code signifying the alternative currency used for payment in the Invoice.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceFieldMetaAccountingCostCode = new FieldMeta<InvoiceField>(
  InvoiceField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  'Code',
  'The buyer\'s accounting code, applied to the Invoice as a whole.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceFieldMetaAccountingCost = new FieldMeta<InvoiceField>(
  InvoiceField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  'Text',
  'The buyer\'s accounting code, applied to the Invoice as a whole, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceFieldMetaLineCountNumeric = new FieldMeta<InvoiceField>(
  InvoiceField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of lines in the document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceFieldMetaBuyerReference = new FieldMeta<InvoiceField>(
  InvoiceField.BuyerReference,
  'BuyerReference',
  'Buyer Reference',
  'Text',
  'A reference provided by the buyer used for internal routing of the document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceFieldMetaInvoicePeriod = new FieldMeta<InvoiceField>(
  InvoiceField.InvoicePeriod,
  'InvoicePeriod',
  'Invoice Period',
  'Period',
  'A period to which the Invoice applies.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaOrderReference = new FieldMeta<InvoiceField>(
  InvoiceField.OrderReference,
  'OrderReference',
  'Order Reference',
  'OrderReference',
  'A reference to the Order with which this Invoice is associated.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaBillingReference = new FieldMeta<InvoiceField>(
  InvoiceField.BillingReference,
  'BillingReference',
  'Billing Reference',
  'BillingReference',
  'A reference to a billing document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaDespatchDocumentReference = new FieldMeta<InvoiceField>(
  InvoiceField.DespatchDocumentReference,
  'DespatchDocumentReference',
  'Despatch Document Reference',
  'DocumentReference',
  'A reference to a Despatch Advice associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaReceiptDocumentReference = new FieldMeta<InvoiceField>(
  InvoiceField.ReceiptDocumentReference,
  'ReceiptDocumentReference',
  'Receipt Document Reference',
  'DocumentReference',
  'A reference to a Receipt Advice associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaStatementDocumentReference = new FieldMeta<InvoiceField>(
  InvoiceField.StatementDocumentReference,
  'StatementDocumentReference',
  'Statement Document Reference',
  'DocumentReference',
  'A reference to a Statement associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaOriginatorDocumentReference = new FieldMeta<InvoiceField>(
  InvoiceField.OriginatorDocumentReference,
  'OriginatorDocumentReference',
  'Originator Document Reference',
  'DocumentReference',
  'A reference to an originator document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaContractDocumentReference = new FieldMeta<InvoiceField>(
  InvoiceField.ContractDocumentReference,
  'ContractDocumentReference',
  'Contract Document Reference',
  'DocumentReference',
  'A reference to a contract associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaAdditionalDocumentReference = new FieldMeta<InvoiceField>(
  InvoiceField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaProjectReference = new FieldMeta<InvoiceField>(
  InvoiceField.ProjectReference,
  'ProjectReference',
  'Project Reference',
  'ProjectReference',
  'Information about a project.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaSignature = new FieldMeta<InvoiceField>(
  InvoiceField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaAccountingSupplierParty = new FieldMeta<InvoiceField>(
  InvoiceField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Accounting Supplier Party',
  'SupplierParty',
  'The accounting supplier party.',
  '1',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaAccountingCustomerParty = new FieldMeta<InvoiceField>(
  InvoiceField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Accounting Customer Party',
  'CustomerParty',
  'The accounting customer party.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaPayeeParty = new FieldMeta<InvoiceField>(
  InvoiceField.PayeeParty,
  'PayeeParty',
  'Payee Party',
  'Party',
  'The payee.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaBuyerCustomerParty = new FieldMeta<InvoiceField>(
  InvoiceField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  'CustomerParty',
  'The buyer.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaSellerSupplierParty = new FieldMeta<InvoiceField>(
  InvoiceField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  'SupplierParty',
  'The seller.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaTaxRepresentativeParty = new FieldMeta<InvoiceField>(
  InvoiceField.TaxRepresentativeParty,
  'TaxRepresentativeParty',
  'Tax Representative Party',
  'Party',
  'The tax representative.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaDelivery = new FieldMeta<InvoiceField>(
  InvoiceField.Delivery,
  'Delivery',
  'Delivery',
  'Delivery',
  'A delivery associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaDeliveryTerms = new FieldMeta<InvoiceField>(
  InvoiceField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  'DeliveryTerms',
  'A set of delivery terms associated with this document.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaPaymentMeans = new FieldMeta<InvoiceField>(
  InvoiceField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  'PaymentMeans',
  'Expected means of payment.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaPaymentTerms = new FieldMeta<InvoiceField>(
  InvoiceField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  'PaymentTerms',
  'A set of payment terms associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaPrepaidPayment = new FieldMeta<InvoiceField>(
  InvoiceField.PrepaidPayment,
  'PrepaidPayment',
  'Prepaid Payment',
  'Payment',
  'A prepaid payment.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaAllowanceCharge = new FieldMeta<InvoiceField>(
  InvoiceField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'A discount or charge that applies to a price component.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaTaxExchangeRate = new FieldMeta<InvoiceField>(
  InvoiceField.TaxExchangeRate,
  'TaxExchangeRate',
  'Tax Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the tax currency.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaPricingExchangeRate = new FieldMeta<InvoiceField>(
  InvoiceField.PricingExchangeRate,
  'PricingExchangeRate',
  'Pricing Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the pricing currency.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaPaymentExchangeRate = new FieldMeta<InvoiceField>(
  InvoiceField.PaymentExchangeRate,
  'PaymentExchangeRate',
  'Payment Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the payment currency.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaPaymentAlternativeExchangeRate = new FieldMeta<InvoiceField>(
  InvoiceField.PaymentAlternativeExchangeRate,
  'PaymentAlternativeExchangeRate',
  'Payment Alternative Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the payment alternative currency.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaTaxTotal = new FieldMeta<InvoiceField>(
  InvoiceField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'The total amount of a specific type of tax.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaWithholdingTaxTotal = new FieldMeta<InvoiceField>(
  InvoiceField.WithholdingTaxTotal,
  'WithholdingTaxTotal',
  'Withholding Tax Total',
  'TaxTotal',
  'The total withholding tax.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaLegalMonetaryTotal = new FieldMeta<InvoiceField>(
  InvoiceField.LegalMonetaryTotal,
  'LegalMonetaryTotal',
  'Legal Monetary Total',
  'MonetaryTotal',
  'The total amount payable on the Invoice, including Allowances, Charges, and Taxes.',
  '1',
  'cac',
  undefined,
  undefined
)

export const InvoiceFieldMetaInvoiceLine = new FieldMeta<InvoiceField>(
  InvoiceField.InvoiceLine,
  'InvoiceLine',
  'Invoice Line',
  'InvoiceLine',
  'A line describing an invoice item.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export class InvoiceFieldMeta {
  public static readonly UBLExtensions = InvoiceFieldMetaUBLExtensions
  public static readonly UBLVersionID = InvoiceFieldMetaUBLVersionID
  public static readonly CustomizationID = InvoiceFieldMetaCustomizationID
  public static readonly ProfileID = InvoiceFieldMetaProfileID
  public static readonly ProfileExecutionID = InvoiceFieldMetaProfileExecutionID
  public static readonly ID = InvoiceFieldMetaID
  public static readonly CopyIndicator = InvoiceFieldMetaCopyIndicator
  public static readonly UUID = InvoiceFieldMetaUUID
  public static readonly IssueDate = InvoiceFieldMetaIssueDate
  public static readonly IssueTime = InvoiceFieldMetaIssueTime
  public static readonly DueDate = InvoiceFieldMetaDueDate
  public static readonly InvoiceTypeCode = InvoiceFieldMetaInvoiceTypeCode
  public static readonly Note = InvoiceFieldMetaNote
  public static readonly TaxPointDate = InvoiceFieldMetaTaxPointDate
  public static readonly DocumentCurrencyCode = InvoiceFieldMetaDocumentCurrencyCode
  public static readonly TaxCurrencyCode = InvoiceFieldMetaTaxCurrencyCode
  public static readonly PricingCurrencyCode = InvoiceFieldMetaPricingCurrencyCode
  public static readonly PaymentCurrencyCode = InvoiceFieldMetaPaymentCurrencyCode
  public static readonly PaymentAlternativeCurrencyCode = InvoiceFieldMetaPaymentAlternativeCurrencyCode
  public static readonly AccountingCostCode = InvoiceFieldMetaAccountingCostCode
  public static readonly AccountingCost = InvoiceFieldMetaAccountingCost
  public static readonly LineCountNumeric = InvoiceFieldMetaLineCountNumeric
  public static readonly BuyerReference = InvoiceFieldMetaBuyerReference
  public static readonly InvoicePeriod = InvoiceFieldMetaInvoicePeriod
  public static readonly OrderReference = InvoiceFieldMetaOrderReference
  public static readonly BillingReference = InvoiceFieldMetaBillingReference
  public static readonly DespatchDocumentReference = InvoiceFieldMetaDespatchDocumentReference
  public static readonly ReceiptDocumentReference = InvoiceFieldMetaReceiptDocumentReference
  public static readonly StatementDocumentReference = InvoiceFieldMetaStatementDocumentReference
  public static readonly OriginatorDocumentReference = InvoiceFieldMetaOriginatorDocumentReference
  public static readonly ContractDocumentReference = InvoiceFieldMetaContractDocumentReference
  public static readonly AdditionalDocumentReference = InvoiceFieldMetaAdditionalDocumentReference
  public static readonly ProjectReference = InvoiceFieldMetaProjectReference
  public static readonly Signature = InvoiceFieldMetaSignature
  public static readonly AccountingSupplierParty = InvoiceFieldMetaAccountingSupplierParty
  public static readonly AccountingCustomerParty = InvoiceFieldMetaAccountingCustomerParty
  public static readonly PayeeParty = InvoiceFieldMetaPayeeParty
  public static readonly BuyerCustomerParty = InvoiceFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = InvoiceFieldMetaSellerSupplierParty
  public static readonly TaxRepresentativeParty = InvoiceFieldMetaTaxRepresentativeParty
  public static readonly Delivery = InvoiceFieldMetaDelivery
  public static readonly DeliveryTerms = InvoiceFieldMetaDeliveryTerms
  public static readonly PaymentMeans = InvoiceFieldMetaPaymentMeans
  public static readonly PaymentTerms = InvoiceFieldMetaPaymentTerms
  public static readonly PrepaidPayment = InvoiceFieldMetaPrepaidPayment
  public static readonly AllowanceCharge = InvoiceFieldMetaAllowanceCharge
  public static readonly TaxExchangeRate = InvoiceFieldMetaTaxExchangeRate
  public static readonly PricingExchangeRate = InvoiceFieldMetaPricingExchangeRate
  public static readonly PaymentExchangeRate = InvoiceFieldMetaPaymentExchangeRate
  public static readonly PaymentAlternativeExchangeRate = InvoiceFieldMetaPaymentAlternativeExchangeRate
  public static readonly TaxTotal = InvoiceFieldMetaTaxTotal
  public static readonly WithholdingTaxTotal = InvoiceFieldMetaWithholdingTaxTotal
  public static readonly LegalMonetaryTotal = InvoiceFieldMetaLegalMonetaryTotal
  public static readonly InvoiceLine = InvoiceFieldMetaInvoiceLine
}

export const InvoiceFieldMap = new Map([
  [InvoiceField.UBLExtensions, InvoiceFieldMetaUBLExtensions],
  [InvoiceField.UBLVersionID, InvoiceFieldMetaUBLVersionID],
  [InvoiceField.CustomizationID, InvoiceFieldMetaCustomizationID],
  [InvoiceField.ProfileID, InvoiceFieldMetaProfileID],
  [InvoiceField.ProfileExecutionID, InvoiceFieldMetaProfileExecutionID],
  [InvoiceField.ID, InvoiceFieldMetaID],
  [InvoiceField.CopyIndicator, InvoiceFieldMetaCopyIndicator],
  [InvoiceField.UUID, InvoiceFieldMetaUUID],
  [InvoiceField.IssueDate, InvoiceFieldMetaIssueDate],
  [InvoiceField.IssueTime, InvoiceFieldMetaIssueTime],
  [InvoiceField.DueDate, InvoiceFieldMetaDueDate],
  [InvoiceField.InvoiceTypeCode, InvoiceFieldMetaInvoiceTypeCode],
  [InvoiceField.Note, InvoiceFieldMetaNote],
  [InvoiceField.TaxPointDate, InvoiceFieldMetaTaxPointDate],
  [InvoiceField.DocumentCurrencyCode, InvoiceFieldMetaDocumentCurrencyCode],
  [InvoiceField.TaxCurrencyCode, InvoiceFieldMetaTaxCurrencyCode],
  [InvoiceField.PricingCurrencyCode, InvoiceFieldMetaPricingCurrencyCode],
  [InvoiceField.PaymentCurrencyCode, InvoiceFieldMetaPaymentCurrencyCode],
  [InvoiceField.PaymentAlternativeCurrencyCode, InvoiceFieldMetaPaymentAlternativeCurrencyCode],
  [InvoiceField.AccountingCostCode, InvoiceFieldMetaAccountingCostCode],
  [InvoiceField.AccountingCost, InvoiceFieldMetaAccountingCost],
  [InvoiceField.LineCountNumeric, InvoiceFieldMetaLineCountNumeric],
  [InvoiceField.BuyerReference, InvoiceFieldMetaBuyerReference],
  [InvoiceField.InvoicePeriod, InvoiceFieldMetaInvoicePeriod],
  [InvoiceField.OrderReference, InvoiceFieldMetaOrderReference],
  [InvoiceField.BillingReference, InvoiceFieldMetaBillingReference],
  [InvoiceField.DespatchDocumentReference, InvoiceFieldMetaDespatchDocumentReference],
  [InvoiceField.ReceiptDocumentReference, InvoiceFieldMetaReceiptDocumentReference],
  [InvoiceField.StatementDocumentReference, InvoiceFieldMetaStatementDocumentReference],
  [InvoiceField.OriginatorDocumentReference, InvoiceFieldMetaOriginatorDocumentReference],
  [InvoiceField.ContractDocumentReference, InvoiceFieldMetaContractDocumentReference],
  [InvoiceField.AdditionalDocumentReference, InvoiceFieldMetaAdditionalDocumentReference],
  [InvoiceField.ProjectReference, InvoiceFieldMetaProjectReference],
  [InvoiceField.Signature, InvoiceFieldMetaSignature],
  [InvoiceField.AccountingSupplierParty, InvoiceFieldMetaAccountingSupplierParty],
  [InvoiceField.AccountingCustomerParty, InvoiceFieldMetaAccountingCustomerParty],
  [InvoiceField.PayeeParty, InvoiceFieldMetaPayeeParty],
  [InvoiceField.BuyerCustomerParty, InvoiceFieldMetaBuyerCustomerParty],
  [InvoiceField.SellerSupplierParty, InvoiceFieldMetaSellerSupplierParty],
  [InvoiceField.TaxRepresentativeParty, InvoiceFieldMetaTaxRepresentativeParty],
  [InvoiceField.Delivery, InvoiceFieldMetaDelivery],
  [InvoiceField.DeliveryTerms, InvoiceFieldMetaDeliveryTerms],
  [InvoiceField.PaymentMeans, InvoiceFieldMetaPaymentMeans],
  [InvoiceField.PaymentTerms, InvoiceFieldMetaPaymentTerms],
  [InvoiceField.PrepaidPayment, InvoiceFieldMetaPrepaidPayment],
  [InvoiceField.AllowanceCharge, InvoiceFieldMetaAllowanceCharge],
  [InvoiceField.TaxExchangeRate, InvoiceFieldMetaTaxExchangeRate],
  [InvoiceField.PricingExchangeRate, InvoiceFieldMetaPricingExchangeRate],
  [InvoiceField.PaymentExchangeRate, InvoiceFieldMetaPaymentExchangeRate],
  [InvoiceField.PaymentAlternativeExchangeRate, InvoiceFieldMetaPaymentAlternativeExchangeRate],
  [InvoiceField.TaxTotal, InvoiceFieldMetaTaxTotal],
  [InvoiceField.WithholdingTaxTotal, InvoiceFieldMetaWithholdingTaxTotal],
  [InvoiceField.LegalMonetaryTotal, InvoiceFieldMetaLegalMonetaryTotal],
  [InvoiceField.InvoiceLine, InvoiceFieldMetaInvoiceLine]
])
