import { FieldMeta } from '../FieldMeta'

export enum SelfBilledCreditNoteField {
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
  CreditNoteTypeCode = 'CreditNoteTypeCode',
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
  DiscrepancyResponse = 'DiscrepancyResponse',
  OrderReference = 'OrderReference',
  BillingReference = 'BillingReference',
  DespatchDocumentReference = 'DespatchDocumentReference',
  ReceiptDocumentReference = 'ReceiptDocumentReference',
  ContractDocumentReference = 'ContractDocumentReference',
  StatementDocumentReference = 'StatementDocumentReference',
  OriginatorDocumentReference = 'OriginatorDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  ProjectReference = 'ProjectReference',
  Signature = 'Signature',
  AccountingCustomerParty = 'AccountingCustomerParty',
  AccountingSupplierParty = 'AccountingSupplierParty',
  PayeeParty = 'PayeeParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  TaxRepresentativeParty = 'TaxRepresentativeParty',
  Delivery = 'Delivery',
  DeliveryTerms = 'DeliveryTerms',
  PaymentMeans = 'PaymentMeans',
  PaymentTerms = 'PaymentTerms',
  AllowanceCharge = 'AllowanceCharge',
  TaxExchangeRate = 'TaxExchangeRate',
  PricingExchangeRate = 'PricingExchangeRate',
  PaymentExchangeRate = 'PaymentExchangeRate',
  PaymentAlternativeExchangeRate = 'PaymentAlternativeExchangeRate',
  TaxTotal = 'TaxTotal',
  WithholdingTaxTotal = 'WithholdingTaxTotal',
  LegalMonetaryTotal = 'LegalMonetaryTotal',
  CreditNoteLine = 'CreditNoteLine'
}

export const SelfBilledCreditNoteFieldMetaUBLExtensions = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaUBLVersionID = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const SelfBilledCreditNoteFieldMetaCustomizationID = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const SelfBilledCreditNoteFieldMetaProfileID = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const SelfBilledCreditNoteFieldMetaProfileExecutionID = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const SelfBilledCreditNoteFieldMetaID = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaCopyIndicator = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaUUID = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaIssueDate = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaIssueTime = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaDueDate = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.DueDate,
  'DueDate',
  'Due Date',
  'Date',
  'The date on which SelfBilledCreditNote is due.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaTaxPointDate = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.TaxPointDate,
  'TaxPointDate',
  'Tax Point Date',
  'Date',
  'The date of the Self Billed Credit Note, used to indicate the point at which tax becomes applicable.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaCreditNoteTypeCode = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.CreditNoteTypeCode,
  'CreditNoteTypeCode',
  'Credit Note Type Code',
  'Code',
  'A code signifying the type of Selfbilled CreditNote',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaNote = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaDocumentCurrencyCode = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Document Currency Code',
  'Code',
  'A code signifying the default currency for this document.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaTaxCurrencyCode = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.TaxCurrencyCode,
  'TaxCurrencyCode',
  'Tax Currency Code',
  'Code',
  'A code signifying the currency used for tax amounts in the Self Billed Credit Note.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaPricingCurrencyCode = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Pricing Currency Code',
  'Code',
  'A code signifying the currency used for prices in the Self Billed Credit Note.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaPaymentCurrencyCode = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.PaymentCurrencyCode,
  'PaymentCurrencyCode',
  'Payment Currency Code',
  'Code',
  'A code signifying the currency used for payment in the Self Billed Credit Note.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaPaymentAlternativeCurrencyCode = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.PaymentAlternativeCurrencyCode,
  'PaymentAlternativeCurrencyCode',
  'Payment Alternative Currency Code',
  'Code',
  'A code signifying the alternative currency used for payment in the Self Billed Credit Note.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaAccountingCostCode = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  'Code',
  'The buyer\'s accounting code, applied to the Self Billed Credit Note as a whole.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaAccountingCost = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  'Text',
  'The buyer\'s accounting code, applied to the Self Billed Credit Note as a whole, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaLineCountNumeric = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of Self Billed Credit Note Lines in this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaBuyerReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.BuyerReference,
  'BuyerReference',
  'Buyer Reference',
  'Text',
  'A reference provided by the buyer used for internal routing of the document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaInvoicePeriod = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.InvoicePeriod,
  'InvoicePeriod',
  'Invoice Period',
  'Period',
  'A period (rather than a specific Invoice) associated with the Self Billed Credit Note.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaDiscrepancyResponse = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.DiscrepancyResponse,
  'DiscrepancyResponse',
  'Discrepancy Response',
  'Response',
  'A reason for the Self Billed Credit Note as a whole.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaOrderReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.OrderReference,
  'OrderReference',
  'Order Reference',
  'OrderReference',
  'The Order associated with this Self Billed Credit Note.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaBillingReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.BillingReference,
  'BillingReference',
  'Billing Reference',
  'BillingReference',
  'A reference to a billing document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaDespatchDocumentReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.DespatchDocumentReference,
  'DespatchDocumentReference',
  'Despatch Document Reference',
  'DocumentReference',
  'A reference to a Despatch Advice associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaReceiptDocumentReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.ReceiptDocumentReference,
  'ReceiptDocumentReference',
  'Receipt Document Reference',
  'DocumentReference',
  'A reference to a Receipt Advice associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaContractDocumentReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.ContractDocumentReference,
  'ContractDocumentReference',
  'Contract Document Reference',
  'DocumentReference',
  'A reference to a contract associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaStatementDocumentReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.StatementDocumentReference,
  'StatementDocumentReference',
  'Statement Document Reference',
  'DocumentReference',
  'A reference to a Statement associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaOriginatorDocumentReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.OriginatorDocumentReference,
  'OriginatorDocumentReference',
  'Originator Document Reference',
  'DocumentReference',
  'A reference to an originator document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaAdditionalDocumentReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaProjectReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.ProjectReference,
  'ProjectReference',
  'Project Reference',
  'ProjectReference',
  'A reference to a project associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaSignature = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaAccountingCustomerParty = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Accounting Customer Party',
  'CustomerParty',
  'The accounting customer party.',
  '1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaAccountingSupplierParty = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Accounting Supplier Party',
  'SupplierParty',
  'The accounting supplier party.',
  '1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaPayeeParty = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.PayeeParty,
  'PayeeParty',
  'Payee Party',
  'Party',
  'The payee.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaBuyerCustomerParty = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  'CustomerParty',
  'The buyer.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaSellerSupplierParty = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  'SupplierParty',
  'The seller.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaTaxRepresentativeParty = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.TaxRepresentativeParty,
  'TaxRepresentativeParty',
  'Tax Representative Party',
  'Party',
  'The tax representative.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaDelivery = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.Delivery,
  'Delivery',
  'Delivery',
  'Delivery',
  'A delivery associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaDeliveryTerms = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  'DeliveryTerms',
  'A set of delivery terms associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaPaymentMeans = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  'PaymentMeans',
  'Expected means of payment.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaPaymentTerms = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  'PaymentTerms',
  'A set of payment terms associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaAllowanceCharge = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'A discount or charge that applies to a price component.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaTaxExchangeRate = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.TaxExchangeRate,
  'TaxExchangeRate',
  'Tax Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the tax currency.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaPricingExchangeRate = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.PricingExchangeRate,
  'PricingExchangeRate',
  'Pricing Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the pricing currency.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaPaymentExchangeRate = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.PaymentExchangeRate,
  'PaymentExchangeRate',
  'Payment Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the payment currency.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaPaymentAlternativeExchangeRate = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.PaymentAlternativeExchangeRate,
  'PaymentAlternativeExchangeRate',
  'Payment Alternative Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the payment alternative currency.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaTaxTotal = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'The total amount of a specific type of tax.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaWithholdingTaxTotal = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.WithholdingTaxTotal,
  'WithholdingTaxTotal',
  'Withholding Tax Total',
  'TaxTotal',
  'The total withholding tax.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaLegalMonetaryTotal = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.LegalMonetaryTotal,
  'LegalMonetaryTotal',
  'Legal Monetary Total',
  'MonetaryTotal',
  'The total amount payable on the Self Billed Credit Note, including Allowances, Charges, and Taxes.',
  '1',
  'cac',
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaCreditNoteLine = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.CreditNoteLine,
  'CreditNoteLine',
  'Credit Note Line',
  'CreditNoteLine',
  'A Self Billed Credit Note Line.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export class SelfBilledCreditNoteFieldMeta {
  public static readonly UBLExtensions = SelfBilledCreditNoteFieldMetaUBLExtensions
  public static readonly UBLVersionID = SelfBilledCreditNoteFieldMetaUBLVersionID
  public static readonly CustomizationID = SelfBilledCreditNoteFieldMetaCustomizationID
  public static readonly ProfileID = SelfBilledCreditNoteFieldMetaProfileID
  public static readonly ProfileExecutionID = SelfBilledCreditNoteFieldMetaProfileExecutionID
  public static readonly ID = SelfBilledCreditNoteFieldMetaID
  public static readonly CopyIndicator = SelfBilledCreditNoteFieldMetaCopyIndicator
  public static readonly UUID = SelfBilledCreditNoteFieldMetaUUID
  public static readonly IssueDate = SelfBilledCreditNoteFieldMetaIssueDate
  public static readonly IssueTime = SelfBilledCreditNoteFieldMetaIssueTime
  public static readonly DueDate = SelfBilledCreditNoteFieldMetaDueDate
  public static readonly TaxPointDate = SelfBilledCreditNoteFieldMetaTaxPointDate
  public static readonly CreditNoteTypeCode = SelfBilledCreditNoteFieldMetaCreditNoteTypeCode
  public static readonly Note = SelfBilledCreditNoteFieldMetaNote
  public static readonly DocumentCurrencyCode = SelfBilledCreditNoteFieldMetaDocumentCurrencyCode
  public static readonly TaxCurrencyCode = SelfBilledCreditNoteFieldMetaTaxCurrencyCode
  public static readonly PricingCurrencyCode = SelfBilledCreditNoteFieldMetaPricingCurrencyCode
  public static readonly PaymentCurrencyCode = SelfBilledCreditNoteFieldMetaPaymentCurrencyCode
  public static readonly PaymentAlternativeCurrencyCode = SelfBilledCreditNoteFieldMetaPaymentAlternativeCurrencyCode
  public static readonly AccountingCostCode = SelfBilledCreditNoteFieldMetaAccountingCostCode
  public static readonly AccountingCost = SelfBilledCreditNoteFieldMetaAccountingCost
  public static readonly LineCountNumeric = SelfBilledCreditNoteFieldMetaLineCountNumeric
  public static readonly BuyerReference = SelfBilledCreditNoteFieldMetaBuyerReference
  public static readonly InvoicePeriod = SelfBilledCreditNoteFieldMetaInvoicePeriod
  public static readonly DiscrepancyResponse = SelfBilledCreditNoteFieldMetaDiscrepancyResponse
  public static readonly OrderReference = SelfBilledCreditNoteFieldMetaOrderReference
  public static readonly BillingReference = SelfBilledCreditNoteFieldMetaBillingReference
  public static readonly DespatchDocumentReference = SelfBilledCreditNoteFieldMetaDespatchDocumentReference
  public static readonly ReceiptDocumentReference = SelfBilledCreditNoteFieldMetaReceiptDocumentReference
  public static readonly ContractDocumentReference = SelfBilledCreditNoteFieldMetaContractDocumentReference
  public static readonly StatementDocumentReference = SelfBilledCreditNoteFieldMetaStatementDocumentReference
  public static readonly OriginatorDocumentReference = SelfBilledCreditNoteFieldMetaOriginatorDocumentReference
  public static readonly AdditionalDocumentReference = SelfBilledCreditNoteFieldMetaAdditionalDocumentReference
  public static readonly ProjectReference = SelfBilledCreditNoteFieldMetaProjectReference
  public static readonly Signature = SelfBilledCreditNoteFieldMetaSignature
  public static readonly AccountingCustomerParty = SelfBilledCreditNoteFieldMetaAccountingCustomerParty
  public static readonly AccountingSupplierParty = SelfBilledCreditNoteFieldMetaAccountingSupplierParty
  public static readonly PayeeParty = SelfBilledCreditNoteFieldMetaPayeeParty
  public static readonly BuyerCustomerParty = SelfBilledCreditNoteFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = SelfBilledCreditNoteFieldMetaSellerSupplierParty
  public static readonly TaxRepresentativeParty = SelfBilledCreditNoteFieldMetaTaxRepresentativeParty
  public static readonly Delivery = SelfBilledCreditNoteFieldMetaDelivery
  public static readonly DeliveryTerms = SelfBilledCreditNoteFieldMetaDeliveryTerms
  public static readonly PaymentMeans = SelfBilledCreditNoteFieldMetaPaymentMeans
  public static readonly PaymentTerms = SelfBilledCreditNoteFieldMetaPaymentTerms
  public static readonly AllowanceCharge = SelfBilledCreditNoteFieldMetaAllowanceCharge
  public static readonly TaxExchangeRate = SelfBilledCreditNoteFieldMetaTaxExchangeRate
  public static readonly PricingExchangeRate = SelfBilledCreditNoteFieldMetaPricingExchangeRate
  public static readonly PaymentExchangeRate = SelfBilledCreditNoteFieldMetaPaymentExchangeRate
  public static readonly PaymentAlternativeExchangeRate = SelfBilledCreditNoteFieldMetaPaymentAlternativeExchangeRate
  public static readonly TaxTotal = SelfBilledCreditNoteFieldMetaTaxTotal
  public static readonly WithholdingTaxTotal = SelfBilledCreditNoteFieldMetaWithholdingTaxTotal
  public static readonly LegalMonetaryTotal = SelfBilledCreditNoteFieldMetaLegalMonetaryTotal
  public static readonly CreditNoteLine = SelfBilledCreditNoteFieldMetaCreditNoteLine
}

export const SelfBilledCreditNoteFieldMap = new Map([
  [SelfBilledCreditNoteField.UBLExtensions, SelfBilledCreditNoteFieldMetaUBLExtensions],
  [SelfBilledCreditNoteField.UBLVersionID, SelfBilledCreditNoteFieldMetaUBLVersionID],
  [SelfBilledCreditNoteField.CustomizationID, SelfBilledCreditNoteFieldMetaCustomizationID],
  [SelfBilledCreditNoteField.ProfileID, SelfBilledCreditNoteFieldMetaProfileID],
  [SelfBilledCreditNoteField.ProfileExecutionID, SelfBilledCreditNoteFieldMetaProfileExecutionID],
  [SelfBilledCreditNoteField.ID, SelfBilledCreditNoteFieldMetaID],
  [SelfBilledCreditNoteField.CopyIndicator, SelfBilledCreditNoteFieldMetaCopyIndicator],
  [SelfBilledCreditNoteField.UUID, SelfBilledCreditNoteFieldMetaUUID],
  [SelfBilledCreditNoteField.IssueDate, SelfBilledCreditNoteFieldMetaIssueDate],
  [SelfBilledCreditNoteField.IssueTime, SelfBilledCreditNoteFieldMetaIssueTime],
  [SelfBilledCreditNoteField.DueDate, SelfBilledCreditNoteFieldMetaDueDate],
  [SelfBilledCreditNoteField.TaxPointDate, SelfBilledCreditNoteFieldMetaTaxPointDate],
  [SelfBilledCreditNoteField.CreditNoteTypeCode, SelfBilledCreditNoteFieldMetaCreditNoteTypeCode],
  [SelfBilledCreditNoteField.Note, SelfBilledCreditNoteFieldMetaNote],
  [SelfBilledCreditNoteField.DocumentCurrencyCode, SelfBilledCreditNoteFieldMetaDocumentCurrencyCode],
  [SelfBilledCreditNoteField.TaxCurrencyCode, SelfBilledCreditNoteFieldMetaTaxCurrencyCode],
  [SelfBilledCreditNoteField.PricingCurrencyCode, SelfBilledCreditNoteFieldMetaPricingCurrencyCode],
  [SelfBilledCreditNoteField.PaymentCurrencyCode, SelfBilledCreditNoteFieldMetaPaymentCurrencyCode],
  [SelfBilledCreditNoteField.PaymentAlternativeCurrencyCode, SelfBilledCreditNoteFieldMetaPaymentAlternativeCurrencyCode],
  [SelfBilledCreditNoteField.AccountingCostCode, SelfBilledCreditNoteFieldMetaAccountingCostCode],
  [SelfBilledCreditNoteField.AccountingCost, SelfBilledCreditNoteFieldMetaAccountingCost],
  [SelfBilledCreditNoteField.LineCountNumeric, SelfBilledCreditNoteFieldMetaLineCountNumeric],
  [SelfBilledCreditNoteField.BuyerReference, SelfBilledCreditNoteFieldMetaBuyerReference],
  [SelfBilledCreditNoteField.InvoicePeriod, SelfBilledCreditNoteFieldMetaInvoicePeriod],
  [SelfBilledCreditNoteField.DiscrepancyResponse, SelfBilledCreditNoteFieldMetaDiscrepancyResponse],
  [SelfBilledCreditNoteField.OrderReference, SelfBilledCreditNoteFieldMetaOrderReference],
  [SelfBilledCreditNoteField.BillingReference, SelfBilledCreditNoteFieldMetaBillingReference],
  [SelfBilledCreditNoteField.DespatchDocumentReference, SelfBilledCreditNoteFieldMetaDespatchDocumentReference],
  [SelfBilledCreditNoteField.ReceiptDocumentReference, SelfBilledCreditNoteFieldMetaReceiptDocumentReference],
  [SelfBilledCreditNoteField.ContractDocumentReference, SelfBilledCreditNoteFieldMetaContractDocumentReference],
  [SelfBilledCreditNoteField.StatementDocumentReference, SelfBilledCreditNoteFieldMetaStatementDocumentReference],
  [SelfBilledCreditNoteField.OriginatorDocumentReference, SelfBilledCreditNoteFieldMetaOriginatorDocumentReference],
  [SelfBilledCreditNoteField.AdditionalDocumentReference, SelfBilledCreditNoteFieldMetaAdditionalDocumentReference],
  [SelfBilledCreditNoteField.ProjectReference, SelfBilledCreditNoteFieldMetaProjectReference],
  [SelfBilledCreditNoteField.Signature, SelfBilledCreditNoteFieldMetaSignature],
  [SelfBilledCreditNoteField.AccountingCustomerParty, SelfBilledCreditNoteFieldMetaAccountingCustomerParty],
  [SelfBilledCreditNoteField.AccountingSupplierParty, SelfBilledCreditNoteFieldMetaAccountingSupplierParty],
  [SelfBilledCreditNoteField.PayeeParty, SelfBilledCreditNoteFieldMetaPayeeParty],
  [SelfBilledCreditNoteField.BuyerCustomerParty, SelfBilledCreditNoteFieldMetaBuyerCustomerParty],
  [SelfBilledCreditNoteField.SellerSupplierParty, SelfBilledCreditNoteFieldMetaSellerSupplierParty],
  [SelfBilledCreditNoteField.TaxRepresentativeParty, SelfBilledCreditNoteFieldMetaTaxRepresentativeParty],
  [SelfBilledCreditNoteField.Delivery, SelfBilledCreditNoteFieldMetaDelivery],
  [SelfBilledCreditNoteField.DeliveryTerms, SelfBilledCreditNoteFieldMetaDeliveryTerms],
  [SelfBilledCreditNoteField.PaymentMeans, SelfBilledCreditNoteFieldMetaPaymentMeans],
  [SelfBilledCreditNoteField.PaymentTerms, SelfBilledCreditNoteFieldMetaPaymentTerms],
  [SelfBilledCreditNoteField.AllowanceCharge, SelfBilledCreditNoteFieldMetaAllowanceCharge],
  [SelfBilledCreditNoteField.TaxExchangeRate, SelfBilledCreditNoteFieldMetaTaxExchangeRate],
  [SelfBilledCreditNoteField.PricingExchangeRate, SelfBilledCreditNoteFieldMetaPricingExchangeRate],
  [SelfBilledCreditNoteField.PaymentExchangeRate, SelfBilledCreditNoteFieldMetaPaymentExchangeRate],
  [SelfBilledCreditNoteField.PaymentAlternativeExchangeRate, SelfBilledCreditNoteFieldMetaPaymentAlternativeExchangeRate],
  [SelfBilledCreditNoteField.TaxTotal, SelfBilledCreditNoteFieldMetaTaxTotal],
  [SelfBilledCreditNoteField.WithholdingTaxTotal, SelfBilledCreditNoteFieldMetaWithholdingTaxTotal],
  [SelfBilledCreditNoteField.LegalMonetaryTotal, SelfBilledCreditNoteFieldMetaLegalMonetaryTotal],
  [SelfBilledCreditNoteField.CreditNoteLine, SelfBilledCreditNoteFieldMetaCreditNoteLine]
])
