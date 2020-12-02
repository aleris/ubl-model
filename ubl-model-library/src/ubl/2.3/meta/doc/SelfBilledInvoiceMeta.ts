import { FieldMeta } from '../FieldMeta'

export enum SelfBilledInvoiceField {
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
  TaxPointDate = 'TaxPointDate',
  InvoiceTypeCode = 'InvoiceTypeCode',
  Note = 'Note',
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
  ContractDocumentReference = 'ContractDocumentReference',
  DespatchDocumentReference = 'DespatchDocumentReference',
  ReceiptDocumentReference = 'ReceiptDocumentReference',
  StatementDocumentReference = 'StatementDocumentReference',
  OriginatorDocumentReference = 'OriginatorDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  ProjectReference = 'ProjectReference',
  Signature = 'Signature',
  AccountingCustomerParty = 'AccountingCustomerParty',
  AccountingSupplierParty = 'AccountingSupplierParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  PayeeParty = 'PayeeParty',
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

export const SelfBilledInvoiceFieldMetaUBLExtensions = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaUBLVersionID = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const SelfBilledInvoiceFieldMetaCustomizationID = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const SelfBilledInvoiceFieldMetaProfileID = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const SelfBilledInvoiceFieldMetaProfileExecutionID = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaID = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaCopyIndicator = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaUUID = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaIssueDate = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaIssueTime = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaDueDate = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.DueDate,
  'DueDate',
  'Due Date',
  'Date',
  'The date on which Invoice is due.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaTaxPointDate = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.TaxPointDate,
  'TaxPointDate',
  'Tax Point Date',
  'Date',
  'The date of the invoice for tax purposes, in accordance with the applicable tax regulation.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaInvoiceTypeCode = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.InvoiceTypeCode,
  'InvoiceTypeCode',
  'Invoice Type Code',
  'Code',
  'A code signifying the type of invoice.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaNote = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaDocumentCurrencyCode = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Document Currency Code',
  'Code',
  'A code signifying the default currency for this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaTaxCurrencyCode = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.TaxCurrencyCode,
  'TaxCurrencyCode',
  'Tax Currency Code',
  'Code',
  'A code signifying the currency used for tax amounts in the Invoice.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaPricingCurrencyCode = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Pricing Currency Code',
  'Code',
  'A code signifying the currency used for prices in the Invoice.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaPaymentCurrencyCode = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.PaymentCurrencyCode,
  'PaymentCurrencyCode',
  'Payment Currency Code',
  'Code',
  'A code signifying the currency used for payment in the Invoice.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaPaymentAlternativeCurrencyCode = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.PaymentAlternativeCurrencyCode,
  'PaymentAlternativeCurrencyCode',
  'Payment Alternative Currency Code',
  'Code',
  'A code signifying the alternative currency used for payment in the Invoice.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaAccountingCostCode = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  'Code',
  'An accounting cost code, applied to the Invoice as a whole.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaAccountingCost = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  'Text',
  'An accounting cost code, applied to the Invoice as a whole, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaLineCountNumeric = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of Invoice Lines in this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaBuyerReference = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.BuyerReference,
  'BuyerReference',
  'Buyer Reference',
  'Text',
  'A reference provided by the buyer used for internal routing of the document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaInvoicePeriod = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.InvoicePeriod,
  'InvoicePeriod',
  'Invoice Period',
  'Period',
  'A period to which the Self Billed Invoice applies.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaOrderReference = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.OrderReference,
  'OrderReference',
  'Order Reference',
  'OrderReference',
  'A reference to the Order with which this Invoice is associated.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaBillingReference = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.BillingReference,
  'BillingReference',
  'Billing Reference',
  'BillingReference',
  'A reference to a billing document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaContractDocumentReference = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.ContractDocumentReference,
  'ContractDocumentReference',
  'Contract Document Reference',
  'DocumentReference',
  'A reference to a contract associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaDespatchDocumentReference = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.DespatchDocumentReference,
  'DespatchDocumentReference',
  'Despatch Document Reference',
  'DocumentReference',
  'A reference to a Despatch Advice associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaReceiptDocumentReference = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.ReceiptDocumentReference,
  'ReceiptDocumentReference',
  'Receipt Document Reference',
  'DocumentReference',
  'A reference to a Receipt Advice associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaStatementDocumentReference = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.StatementDocumentReference,
  'StatementDocumentReference',
  'Statement Document Reference',
  'DocumentReference',
  'A reference to a Statement associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaOriginatorDocumentReference = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.OriginatorDocumentReference,
  'OriginatorDocumentReference',
  'Originator Document Reference',
  'DocumentReference',
  'A reference to an originator document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaAdditionalDocumentReference = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaProjectReference = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.ProjectReference,
  'ProjectReference',
  'Project Reference',
  'ProjectReference',
  'A reference to a project associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaSignature = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaAccountingCustomerParty = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Accounting Customer Party',
  'CustomerParty',
  'The accounting customer party.',
  '1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaAccountingSupplierParty = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Accounting Supplier Party',
  'SupplierParty',
  'The accounting supplier party.',
  '1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaBuyerCustomerParty = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  'CustomerParty',
  'The buyer.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaSellerSupplierParty = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  'SupplierParty',
  'The seller.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaPayeeParty = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.PayeeParty,
  'PayeeParty',
  'Payee Party',
  'Party',
  'The payee.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaTaxRepresentativeParty = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.TaxRepresentativeParty,
  'TaxRepresentativeParty',
  'Tax Representative Party',
  'Party',
  'The tax representative.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaDelivery = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.Delivery,
  'Delivery',
  'Delivery',
  'Delivery',
  'A delivery associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaDeliveryTerms = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  'DeliveryTerms',
  'A set of delivery terms associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaPaymentMeans = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  'PaymentMeans',
  'Expected means of payment.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaPaymentTerms = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  'PaymentTerms',
  'A set of payment terms associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaPrepaidPayment = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.PrepaidPayment,
  'PrepaidPayment',
  'Prepaid Payment',
  'Payment',
  'A prepaid payment.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaAllowanceCharge = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'A discount or charge that applies to a price component.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaTaxExchangeRate = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.TaxExchangeRate,
  'TaxExchangeRate',
  'Tax Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the tax currency.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaPricingExchangeRate = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.PricingExchangeRate,
  'PricingExchangeRate',
  'Pricing Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the pricing currency.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaPaymentExchangeRate = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.PaymentExchangeRate,
  'PaymentExchangeRate',
  'Payment Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the payment currency.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaPaymentAlternativeExchangeRate = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.PaymentAlternativeExchangeRate,
  'PaymentAlternativeExchangeRate',
  'Payment Alternative Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the payment alternative currency.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaTaxTotal = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'The total amount of a specific type of tax.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaWithholdingTaxTotal = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.WithholdingTaxTotal,
  'WithholdingTaxTotal',
  'Withholding Tax Total',
  'TaxTotal',
  'The total withholding tax.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaLegalMonetaryTotal = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.LegalMonetaryTotal,
  'LegalMonetaryTotal',
  'Legal Monetary Total',
  'MonetaryTotal',
  'A set of totals associated with this Invoice that are required for the Invoice to be a legal document.',
  '1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledInvoiceFieldMetaInvoiceLine = new FieldMeta<SelfBilledInvoiceField>(
  SelfBilledInvoiceField.InvoiceLine,
  'InvoiceLine',
  'Invoice Line',
  'InvoiceLine',
  'A line describing an Invoice Item.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export class SelfBilledInvoiceFieldMeta {
  public static readonly UBLExtensions = SelfBilledInvoiceFieldMetaUBLExtensions
  public static readonly UBLVersionID = SelfBilledInvoiceFieldMetaUBLVersionID
  public static readonly CustomizationID = SelfBilledInvoiceFieldMetaCustomizationID
  public static readonly ProfileID = SelfBilledInvoiceFieldMetaProfileID
  public static readonly ProfileExecutionID = SelfBilledInvoiceFieldMetaProfileExecutionID
  public static readonly ID = SelfBilledInvoiceFieldMetaID
  public static readonly CopyIndicator = SelfBilledInvoiceFieldMetaCopyIndicator
  public static readonly UUID = SelfBilledInvoiceFieldMetaUUID
  public static readonly IssueDate = SelfBilledInvoiceFieldMetaIssueDate
  public static readonly IssueTime = SelfBilledInvoiceFieldMetaIssueTime
  public static readonly DueDate = SelfBilledInvoiceFieldMetaDueDate
  public static readonly TaxPointDate = SelfBilledInvoiceFieldMetaTaxPointDate
  public static readonly InvoiceTypeCode = SelfBilledInvoiceFieldMetaInvoiceTypeCode
  public static readonly Note = SelfBilledInvoiceFieldMetaNote
  public static readonly DocumentCurrencyCode = SelfBilledInvoiceFieldMetaDocumentCurrencyCode
  public static readonly TaxCurrencyCode = SelfBilledInvoiceFieldMetaTaxCurrencyCode
  public static readonly PricingCurrencyCode = SelfBilledInvoiceFieldMetaPricingCurrencyCode
  public static readonly PaymentCurrencyCode = SelfBilledInvoiceFieldMetaPaymentCurrencyCode
  public static readonly PaymentAlternativeCurrencyCode = SelfBilledInvoiceFieldMetaPaymentAlternativeCurrencyCode
  public static readonly AccountingCostCode = SelfBilledInvoiceFieldMetaAccountingCostCode
  public static readonly AccountingCost = SelfBilledInvoiceFieldMetaAccountingCost
  public static readonly LineCountNumeric = SelfBilledInvoiceFieldMetaLineCountNumeric
  public static readonly BuyerReference = SelfBilledInvoiceFieldMetaBuyerReference
  public static readonly InvoicePeriod = SelfBilledInvoiceFieldMetaInvoicePeriod
  public static readonly OrderReference = SelfBilledInvoiceFieldMetaOrderReference
  public static readonly BillingReference = SelfBilledInvoiceFieldMetaBillingReference
  public static readonly ContractDocumentReference = SelfBilledInvoiceFieldMetaContractDocumentReference
  public static readonly DespatchDocumentReference = SelfBilledInvoiceFieldMetaDespatchDocumentReference
  public static readonly ReceiptDocumentReference = SelfBilledInvoiceFieldMetaReceiptDocumentReference
  public static readonly StatementDocumentReference = SelfBilledInvoiceFieldMetaStatementDocumentReference
  public static readonly OriginatorDocumentReference = SelfBilledInvoiceFieldMetaOriginatorDocumentReference
  public static readonly AdditionalDocumentReference = SelfBilledInvoiceFieldMetaAdditionalDocumentReference
  public static readonly ProjectReference = SelfBilledInvoiceFieldMetaProjectReference
  public static readonly Signature = SelfBilledInvoiceFieldMetaSignature
  public static readonly AccountingCustomerParty = SelfBilledInvoiceFieldMetaAccountingCustomerParty
  public static readonly AccountingSupplierParty = SelfBilledInvoiceFieldMetaAccountingSupplierParty
  public static readonly BuyerCustomerParty = SelfBilledInvoiceFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = SelfBilledInvoiceFieldMetaSellerSupplierParty
  public static readonly PayeeParty = SelfBilledInvoiceFieldMetaPayeeParty
  public static readonly TaxRepresentativeParty = SelfBilledInvoiceFieldMetaTaxRepresentativeParty
  public static readonly Delivery = SelfBilledInvoiceFieldMetaDelivery
  public static readonly DeliveryTerms = SelfBilledInvoiceFieldMetaDeliveryTerms
  public static readonly PaymentMeans = SelfBilledInvoiceFieldMetaPaymentMeans
  public static readonly PaymentTerms = SelfBilledInvoiceFieldMetaPaymentTerms
  public static readonly PrepaidPayment = SelfBilledInvoiceFieldMetaPrepaidPayment
  public static readonly AllowanceCharge = SelfBilledInvoiceFieldMetaAllowanceCharge
  public static readonly TaxExchangeRate = SelfBilledInvoiceFieldMetaTaxExchangeRate
  public static readonly PricingExchangeRate = SelfBilledInvoiceFieldMetaPricingExchangeRate
  public static readonly PaymentExchangeRate = SelfBilledInvoiceFieldMetaPaymentExchangeRate
  public static readonly PaymentAlternativeExchangeRate = SelfBilledInvoiceFieldMetaPaymentAlternativeExchangeRate
  public static readonly TaxTotal = SelfBilledInvoiceFieldMetaTaxTotal
  public static readonly WithholdingTaxTotal = SelfBilledInvoiceFieldMetaWithholdingTaxTotal
  public static readonly LegalMonetaryTotal = SelfBilledInvoiceFieldMetaLegalMonetaryTotal
  public static readonly InvoiceLine = SelfBilledInvoiceFieldMetaInvoiceLine
}

export const SelfBilledInvoiceFieldMap = new Map([
  [SelfBilledInvoiceField.UBLExtensions, SelfBilledInvoiceFieldMetaUBLExtensions],
  [SelfBilledInvoiceField.UBLVersionID, SelfBilledInvoiceFieldMetaUBLVersionID],
  [SelfBilledInvoiceField.CustomizationID, SelfBilledInvoiceFieldMetaCustomizationID],
  [SelfBilledInvoiceField.ProfileID, SelfBilledInvoiceFieldMetaProfileID],
  [SelfBilledInvoiceField.ProfileExecutionID, SelfBilledInvoiceFieldMetaProfileExecutionID],
  [SelfBilledInvoiceField.ID, SelfBilledInvoiceFieldMetaID],
  [SelfBilledInvoiceField.CopyIndicator, SelfBilledInvoiceFieldMetaCopyIndicator],
  [SelfBilledInvoiceField.UUID, SelfBilledInvoiceFieldMetaUUID],
  [SelfBilledInvoiceField.IssueDate, SelfBilledInvoiceFieldMetaIssueDate],
  [SelfBilledInvoiceField.IssueTime, SelfBilledInvoiceFieldMetaIssueTime],
  [SelfBilledInvoiceField.DueDate, SelfBilledInvoiceFieldMetaDueDate],
  [SelfBilledInvoiceField.TaxPointDate, SelfBilledInvoiceFieldMetaTaxPointDate],
  [SelfBilledInvoiceField.InvoiceTypeCode, SelfBilledInvoiceFieldMetaInvoiceTypeCode],
  [SelfBilledInvoiceField.Note, SelfBilledInvoiceFieldMetaNote],
  [SelfBilledInvoiceField.DocumentCurrencyCode, SelfBilledInvoiceFieldMetaDocumentCurrencyCode],
  [SelfBilledInvoiceField.TaxCurrencyCode, SelfBilledInvoiceFieldMetaTaxCurrencyCode],
  [SelfBilledInvoiceField.PricingCurrencyCode, SelfBilledInvoiceFieldMetaPricingCurrencyCode],
  [SelfBilledInvoiceField.PaymentCurrencyCode, SelfBilledInvoiceFieldMetaPaymentCurrencyCode],
  [SelfBilledInvoiceField.PaymentAlternativeCurrencyCode, SelfBilledInvoiceFieldMetaPaymentAlternativeCurrencyCode],
  [SelfBilledInvoiceField.AccountingCostCode, SelfBilledInvoiceFieldMetaAccountingCostCode],
  [SelfBilledInvoiceField.AccountingCost, SelfBilledInvoiceFieldMetaAccountingCost],
  [SelfBilledInvoiceField.LineCountNumeric, SelfBilledInvoiceFieldMetaLineCountNumeric],
  [SelfBilledInvoiceField.BuyerReference, SelfBilledInvoiceFieldMetaBuyerReference],
  [SelfBilledInvoiceField.InvoicePeriod, SelfBilledInvoiceFieldMetaInvoicePeriod],
  [SelfBilledInvoiceField.OrderReference, SelfBilledInvoiceFieldMetaOrderReference],
  [SelfBilledInvoiceField.BillingReference, SelfBilledInvoiceFieldMetaBillingReference],
  [SelfBilledInvoiceField.ContractDocumentReference, SelfBilledInvoiceFieldMetaContractDocumentReference],
  [SelfBilledInvoiceField.DespatchDocumentReference, SelfBilledInvoiceFieldMetaDespatchDocumentReference],
  [SelfBilledInvoiceField.ReceiptDocumentReference, SelfBilledInvoiceFieldMetaReceiptDocumentReference],
  [SelfBilledInvoiceField.StatementDocumentReference, SelfBilledInvoiceFieldMetaStatementDocumentReference],
  [SelfBilledInvoiceField.OriginatorDocumentReference, SelfBilledInvoiceFieldMetaOriginatorDocumentReference],
  [SelfBilledInvoiceField.AdditionalDocumentReference, SelfBilledInvoiceFieldMetaAdditionalDocumentReference],
  [SelfBilledInvoiceField.ProjectReference, SelfBilledInvoiceFieldMetaProjectReference],
  [SelfBilledInvoiceField.Signature, SelfBilledInvoiceFieldMetaSignature],
  [SelfBilledInvoiceField.AccountingCustomerParty, SelfBilledInvoiceFieldMetaAccountingCustomerParty],
  [SelfBilledInvoiceField.AccountingSupplierParty, SelfBilledInvoiceFieldMetaAccountingSupplierParty],
  [SelfBilledInvoiceField.BuyerCustomerParty, SelfBilledInvoiceFieldMetaBuyerCustomerParty],
  [SelfBilledInvoiceField.SellerSupplierParty, SelfBilledInvoiceFieldMetaSellerSupplierParty],
  [SelfBilledInvoiceField.PayeeParty, SelfBilledInvoiceFieldMetaPayeeParty],
  [SelfBilledInvoiceField.TaxRepresentativeParty, SelfBilledInvoiceFieldMetaTaxRepresentativeParty],
  [SelfBilledInvoiceField.Delivery, SelfBilledInvoiceFieldMetaDelivery],
  [SelfBilledInvoiceField.DeliveryTerms, SelfBilledInvoiceFieldMetaDeliveryTerms],
  [SelfBilledInvoiceField.PaymentMeans, SelfBilledInvoiceFieldMetaPaymentMeans],
  [SelfBilledInvoiceField.PaymentTerms, SelfBilledInvoiceFieldMetaPaymentTerms],
  [SelfBilledInvoiceField.PrepaidPayment, SelfBilledInvoiceFieldMetaPrepaidPayment],
  [SelfBilledInvoiceField.AllowanceCharge, SelfBilledInvoiceFieldMetaAllowanceCharge],
  [SelfBilledInvoiceField.TaxExchangeRate, SelfBilledInvoiceFieldMetaTaxExchangeRate],
  [SelfBilledInvoiceField.PricingExchangeRate, SelfBilledInvoiceFieldMetaPricingExchangeRate],
  [SelfBilledInvoiceField.PaymentExchangeRate, SelfBilledInvoiceFieldMetaPaymentExchangeRate],
  [SelfBilledInvoiceField.PaymentAlternativeExchangeRate, SelfBilledInvoiceFieldMetaPaymentAlternativeExchangeRate],
  [SelfBilledInvoiceField.TaxTotal, SelfBilledInvoiceFieldMetaTaxTotal],
  [SelfBilledInvoiceField.WithholdingTaxTotal, SelfBilledInvoiceFieldMetaWithholdingTaxTotal],
  [SelfBilledInvoiceField.LegalMonetaryTotal, SelfBilledInvoiceFieldMetaLegalMonetaryTotal],
  [SelfBilledInvoiceField.InvoiceLine, SelfBilledInvoiceFieldMetaInvoiceLine]
])
