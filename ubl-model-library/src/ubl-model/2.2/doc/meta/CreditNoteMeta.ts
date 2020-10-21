import { FieldMeta } from '../../FieldMeta'

export enum CreditNoteField {
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
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  StatementDocumentReference = 'StatementDocumentReference',
  OriginatorDocumentReference = 'OriginatorDocumentReference',
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
  TaxExchangeRate = 'TaxExchangeRate',
  PricingExchangeRate = 'PricingExchangeRate',
  PaymentExchangeRate = 'PaymentExchangeRate',
  PaymentAlternativeExchangeRate = 'PaymentAlternativeExchangeRate',
  AllowanceCharge = 'AllowanceCharge',
  TaxTotal = 'TaxTotal',
  WithholdingTaxTotal = 'WithholdingTaxTotal',
  LegalMonetaryTotal = 'LegalMonetaryTotal',
  CreditNoteLine = 'CreditNoteLine'
}

export const CreditNoteFieldMetaUBLExtensions = new FieldMeta<CreditNoteField>(
  CreditNoteField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaUBLVersionID = new FieldMeta<CreditNoteField>(
  CreditNoteField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const CreditNoteFieldMetaCustomizationID = new FieldMeta<CreditNoteField>(
  CreditNoteField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const CreditNoteFieldMetaProfileID = new FieldMeta<CreditNoteField>(
  CreditNoteField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const CreditNoteFieldMetaProfileExecutionID = new FieldMeta<CreditNoteField>(
  CreditNoteField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const CreditNoteFieldMetaID = new FieldMeta<CreditNoteField>(
  CreditNoteField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaCopyIndicator = new FieldMeta<CreditNoteField>(
  CreditNoteField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaUUID = new FieldMeta<CreditNoteField>(
  CreditNoteField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaIssueDate = new FieldMeta<CreditNoteField>(
  CreditNoteField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaIssueTime = new FieldMeta<CreditNoteField>(
  CreditNoteField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaDueDate = new FieldMeta<CreditNoteField>(
  CreditNoteField.DueDate,
  'DueDate',
  'Due Date',
  'Date',
  'The date on which this Credit Note is due.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaTaxPointDate = new FieldMeta<CreditNoteField>(
  CreditNoteField.TaxPointDate,
  'TaxPointDate',
  'Tax Point Date',
  'Date',
  'The date of the Credit Note, used to indicate the point at which tax becomes applicable.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaCreditNoteTypeCode = new FieldMeta<CreditNoteField>(
  CreditNoteField.CreditNoteTypeCode,
  'CreditNoteTypeCode',
  'Credit Note Type Code',
  'Code',
  'A code signifying the type of the Credit Note.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaNote = new FieldMeta<CreditNoteField>(
  CreditNoteField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaDocumentCurrencyCode = new FieldMeta<CreditNoteField>(
  CreditNoteField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the default currency for this document.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaTaxCurrencyCode = new FieldMeta<CreditNoteField>(
  CreditNoteField.TaxCurrencyCode,
  'TaxCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency used for tax amounts in the Credit Note.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaPricingCurrencyCode = new FieldMeta<CreditNoteField>(
  CreditNoteField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency used for prices in the Credit Note.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaPaymentCurrencyCode = new FieldMeta<CreditNoteField>(
  CreditNoteField.PaymentCurrencyCode,
  'PaymentCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency used for payment in the Credit Note.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaPaymentAlternativeCurrencyCode = new FieldMeta<CreditNoteField>(
  CreditNoteField.PaymentAlternativeCurrencyCode,
  'PaymentAlternativeCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the alternative currency used for payment in the Credit Note.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaAccountingCostCode = new FieldMeta<CreditNoteField>(
  CreditNoteField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  'Code',
  'The buyer\'s accounting code, applied to the Credit Note as a whole.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaAccountingCost = new FieldMeta<CreditNoteField>(
  CreditNoteField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  'Text',
  'The buyer\'s accounting code, applied to the Credit Note as a whole, expressed as text.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaLineCountNumeric = new FieldMeta<CreditNoteField>(
  CreditNoteField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of Credit Note Lines in the document.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaBuyerReference = new FieldMeta<CreditNoteField>(
  CreditNoteField.BuyerReference,
  'BuyerReference',
  'Reference',
  'Text',
  'A reference provided by the buyer used for internal routing of the document.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaInvoicePeriod = new FieldMeta<CreditNoteField>(
  CreditNoteField.InvoicePeriod,
  'InvoicePeriod',
  'Period',
  'Period',
  'Associates the Credit Note with Invoicing Periods rather than with a specific Invoice.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaDiscrepancyResponse = new FieldMeta<CreditNoteField>(
  CreditNoteField.DiscrepancyResponse,
  'DiscrepancyResponse',
  'Response',
  'Response',
  'A reason for the Credit Note as a whole.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaOrderReference = new FieldMeta<CreditNoteField>(
  CreditNoteField.OrderReference,
  'OrderReference',
  'Order Reference',
  'OrderReference',
  'The Order associated with this Credit Note.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaBillingReference = new FieldMeta<CreditNoteField>(
  CreditNoteField.BillingReference,
  'BillingReference',
  'Billing Reference',
  'BillingReference',
  'A reference to a billing document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaDespatchDocumentReference = new FieldMeta<CreditNoteField>(
  CreditNoteField.DespatchDocumentReference,
  'DespatchDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a Despatch Advice associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaReceiptDocumentReference = new FieldMeta<CreditNoteField>(
  CreditNoteField.ReceiptDocumentReference,
  'ReceiptDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a Receipt Advice associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaContractDocumentReference = new FieldMeta<CreditNoteField>(
  CreditNoteField.ContractDocumentReference,
  'ContractDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a contract associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaAdditionalDocumentReference = new FieldMeta<CreditNoteField>(
  CreditNoteField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaStatementDocumentReference = new FieldMeta<CreditNoteField>(
  CreditNoteField.StatementDocumentReference,
  'StatementDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a Statement associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaOriginatorDocumentReference = new FieldMeta<CreditNoteField>(
  CreditNoteField.OriginatorDocumentReference,
  'OriginatorDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an originator document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaProjectReference = new FieldMeta<CreditNoteField>(
  CreditNoteField.ProjectReference,
  'ProjectReference',
  'Project Reference',
  'ProjectReference',
  'A reference to a project associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaSignature = new FieldMeta<CreditNoteField>(
  CreditNoteField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaAccountingSupplierParty = new FieldMeta<CreditNoteField>(
  CreditNoteField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The accounting supplier party.',
  '1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaAccountingCustomerParty = new FieldMeta<CreditNoteField>(
  CreditNoteField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The accounting customer party.',
  '1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaPayeeParty = new FieldMeta<CreditNoteField>(
  CreditNoteField.PayeeParty,
  'PayeeParty',
  'Party',
  'Party',
  'The payee.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaBuyerCustomerParty = new FieldMeta<CreditNoteField>(
  CreditNoteField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The buyer.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaSellerSupplierParty = new FieldMeta<CreditNoteField>(
  CreditNoteField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaTaxRepresentativeParty = new FieldMeta<CreditNoteField>(
  CreditNoteField.TaxRepresentativeParty,
  'TaxRepresentativeParty',
  'Party',
  'Party',
  'The tax representative.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaDelivery = new FieldMeta<CreditNoteField>(
  CreditNoteField.Delivery,
  'Delivery',
  'Delivery',
  'Delivery',
  'A delivery associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaDeliveryTerms = new FieldMeta<CreditNoteField>(
  CreditNoteField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  'DeliveryTerms',
  'A set of delivery terms associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaPaymentMeans = new FieldMeta<CreditNoteField>(
  CreditNoteField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  'PaymentMeans',
  'Expected means of payment.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaPaymentTerms = new FieldMeta<CreditNoteField>(
  CreditNoteField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  'PaymentTerms',
  'A set of payment terms associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaTaxExchangeRate = new FieldMeta<CreditNoteField>(
  CreditNoteField.TaxExchangeRate,
  'TaxExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the tax currency.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaPricingExchangeRate = new FieldMeta<CreditNoteField>(
  CreditNoteField.PricingExchangeRate,
  'PricingExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the pricing currency.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaPaymentExchangeRate = new FieldMeta<CreditNoteField>(
  CreditNoteField.PaymentExchangeRate,
  'PaymentExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the payment currency.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaPaymentAlternativeExchangeRate = new FieldMeta<CreditNoteField>(
  CreditNoteField.PaymentAlternativeExchangeRate,
  'PaymentAlternativeExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the payment alternative currency.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaAllowanceCharge = new FieldMeta<CreditNoteField>(
  CreditNoteField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'A discount or charge that applies to a price component.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaTaxTotal = new FieldMeta<CreditNoteField>(
  CreditNoteField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'The total amount of a specific type of tax.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaWithholdingTaxTotal = new FieldMeta<CreditNoteField>(
  CreditNoteField.WithholdingTaxTotal,
  'WithholdingTaxTotal',
  'Tax Total',
  'TaxTotal',
  'The total withholding tax.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteFieldMetaLegalMonetaryTotal = new FieldMeta<CreditNoteField>(
  CreditNoteField.LegalMonetaryTotal,
  'LegalMonetaryTotal',
  'Monetary Total',
  'MonetaryTotal',
  'The total amount payable on the Credit Note, including allowances, charges, and taxes.',
  '1',
  undefined,
  undefined
)

export const CreditNoteFieldMetaCreditNoteLine = new FieldMeta<CreditNoteField>(
  CreditNoteField.CreditNoteLine,
  'CreditNoteLine',
  'Credit Note Line',
  'CreditNoteLine',
  'A Credit Note line.',
  '1..n',
  undefined,
  undefined
)

export class CreditNoteFieldMeta {
  public static readonly UBLExtensions = CreditNoteFieldMetaUBLExtensions
  public static readonly UBLVersionID = CreditNoteFieldMetaUBLVersionID
  public static readonly CustomizationID = CreditNoteFieldMetaCustomizationID
  public static readonly ProfileID = CreditNoteFieldMetaProfileID
  public static readonly ProfileExecutionID = CreditNoteFieldMetaProfileExecutionID
  public static readonly ID = CreditNoteFieldMetaID
  public static readonly CopyIndicator = CreditNoteFieldMetaCopyIndicator
  public static readonly UUID = CreditNoteFieldMetaUUID
  public static readonly IssueDate = CreditNoteFieldMetaIssueDate
  public static readonly IssueTime = CreditNoteFieldMetaIssueTime
  public static readonly DueDate = CreditNoteFieldMetaDueDate
  public static readonly TaxPointDate = CreditNoteFieldMetaTaxPointDate
  public static readonly CreditNoteTypeCode = CreditNoteFieldMetaCreditNoteTypeCode
  public static readonly Note = CreditNoteFieldMetaNote
  public static readonly DocumentCurrencyCode = CreditNoteFieldMetaDocumentCurrencyCode
  public static readonly TaxCurrencyCode = CreditNoteFieldMetaTaxCurrencyCode
  public static readonly PricingCurrencyCode = CreditNoteFieldMetaPricingCurrencyCode
  public static readonly PaymentCurrencyCode = CreditNoteFieldMetaPaymentCurrencyCode
  public static readonly PaymentAlternativeCurrencyCode = CreditNoteFieldMetaPaymentAlternativeCurrencyCode
  public static readonly AccountingCostCode = CreditNoteFieldMetaAccountingCostCode
  public static readonly AccountingCost = CreditNoteFieldMetaAccountingCost
  public static readonly LineCountNumeric = CreditNoteFieldMetaLineCountNumeric
  public static readonly BuyerReference = CreditNoteFieldMetaBuyerReference
  public static readonly InvoicePeriod = CreditNoteFieldMetaInvoicePeriod
  public static readonly DiscrepancyResponse = CreditNoteFieldMetaDiscrepancyResponse
  public static readonly OrderReference = CreditNoteFieldMetaOrderReference
  public static readonly BillingReference = CreditNoteFieldMetaBillingReference
  public static readonly DespatchDocumentReference = CreditNoteFieldMetaDespatchDocumentReference
  public static readonly ReceiptDocumentReference = CreditNoteFieldMetaReceiptDocumentReference
  public static readonly ContractDocumentReference = CreditNoteFieldMetaContractDocumentReference
  public static readonly AdditionalDocumentReference = CreditNoteFieldMetaAdditionalDocumentReference
  public static readonly StatementDocumentReference = CreditNoteFieldMetaStatementDocumentReference
  public static readonly OriginatorDocumentReference = CreditNoteFieldMetaOriginatorDocumentReference
  public static readonly ProjectReference = CreditNoteFieldMetaProjectReference
  public static readonly Signature = CreditNoteFieldMetaSignature
  public static readonly AccountingSupplierParty = CreditNoteFieldMetaAccountingSupplierParty
  public static readonly AccountingCustomerParty = CreditNoteFieldMetaAccountingCustomerParty
  public static readonly PayeeParty = CreditNoteFieldMetaPayeeParty
  public static readonly BuyerCustomerParty = CreditNoteFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = CreditNoteFieldMetaSellerSupplierParty
  public static readonly TaxRepresentativeParty = CreditNoteFieldMetaTaxRepresentativeParty
  public static readonly Delivery = CreditNoteFieldMetaDelivery
  public static readonly DeliveryTerms = CreditNoteFieldMetaDeliveryTerms
  public static readonly PaymentMeans = CreditNoteFieldMetaPaymentMeans
  public static readonly PaymentTerms = CreditNoteFieldMetaPaymentTerms
  public static readonly TaxExchangeRate = CreditNoteFieldMetaTaxExchangeRate
  public static readonly PricingExchangeRate = CreditNoteFieldMetaPricingExchangeRate
  public static readonly PaymentExchangeRate = CreditNoteFieldMetaPaymentExchangeRate
  public static readonly PaymentAlternativeExchangeRate = CreditNoteFieldMetaPaymentAlternativeExchangeRate
  public static readonly AllowanceCharge = CreditNoteFieldMetaAllowanceCharge
  public static readonly TaxTotal = CreditNoteFieldMetaTaxTotal
  public static readonly WithholdingTaxTotal = CreditNoteFieldMetaWithholdingTaxTotal
  public static readonly LegalMonetaryTotal = CreditNoteFieldMetaLegalMonetaryTotal
  public static readonly CreditNoteLine = CreditNoteFieldMetaCreditNoteLine
}

export const CreditNoteFieldMap = new Map([
  [CreditNoteField.UBLExtensions, CreditNoteFieldMetaUBLExtensions],
  [CreditNoteField.UBLVersionID, CreditNoteFieldMetaUBLVersionID],
  [CreditNoteField.CustomizationID, CreditNoteFieldMetaCustomizationID],
  [CreditNoteField.ProfileID, CreditNoteFieldMetaProfileID],
  [CreditNoteField.ProfileExecutionID, CreditNoteFieldMetaProfileExecutionID],
  [CreditNoteField.ID, CreditNoteFieldMetaID],
  [CreditNoteField.CopyIndicator, CreditNoteFieldMetaCopyIndicator],
  [CreditNoteField.UUID, CreditNoteFieldMetaUUID],
  [CreditNoteField.IssueDate, CreditNoteFieldMetaIssueDate],
  [CreditNoteField.IssueTime, CreditNoteFieldMetaIssueTime],
  [CreditNoteField.DueDate, CreditNoteFieldMetaDueDate],
  [CreditNoteField.TaxPointDate, CreditNoteFieldMetaTaxPointDate],
  [CreditNoteField.CreditNoteTypeCode, CreditNoteFieldMetaCreditNoteTypeCode],
  [CreditNoteField.Note, CreditNoteFieldMetaNote],
  [CreditNoteField.DocumentCurrencyCode, CreditNoteFieldMetaDocumentCurrencyCode],
  [CreditNoteField.TaxCurrencyCode, CreditNoteFieldMetaTaxCurrencyCode],
  [CreditNoteField.PricingCurrencyCode, CreditNoteFieldMetaPricingCurrencyCode],
  [CreditNoteField.PaymentCurrencyCode, CreditNoteFieldMetaPaymentCurrencyCode],
  [CreditNoteField.PaymentAlternativeCurrencyCode, CreditNoteFieldMetaPaymentAlternativeCurrencyCode],
  [CreditNoteField.AccountingCostCode, CreditNoteFieldMetaAccountingCostCode],
  [CreditNoteField.AccountingCost, CreditNoteFieldMetaAccountingCost],
  [CreditNoteField.LineCountNumeric, CreditNoteFieldMetaLineCountNumeric],
  [CreditNoteField.BuyerReference, CreditNoteFieldMetaBuyerReference],
  [CreditNoteField.InvoicePeriod, CreditNoteFieldMetaInvoicePeriod],
  [CreditNoteField.DiscrepancyResponse, CreditNoteFieldMetaDiscrepancyResponse],
  [CreditNoteField.OrderReference, CreditNoteFieldMetaOrderReference],
  [CreditNoteField.BillingReference, CreditNoteFieldMetaBillingReference],
  [CreditNoteField.DespatchDocumentReference, CreditNoteFieldMetaDespatchDocumentReference],
  [CreditNoteField.ReceiptDocumentReference, CreditNoteFieldMetaReceiptDocumentReference],
  [CreditNoteField.ContractDocumentReference, CreditNoteFieldMetaContractDocumentReference],
  [CreditNoteField.AdditionalDocumentReference, CreditNoteFieldMetaAdditionalDocumentReference],
  [CreditNoteField.StatementDocumentReference, CreditNoteFieldMetaStatementDocumentReference],
  [CreditNoteField.OriginatorDocumentReference, CreditNoteFieldMetaOriginatorDocumentReference],
  [CreditNoteField.ProjectReference, CreditNoteFieldMetaProjectReference],
  [CreditNoteField.Signature, CreditNoteFieldMetaSignature],
  [CreditNoteField.AccountingSupplierParty, CreditNoteFieldMetaAccountingSupplierParty],
  [CreditNoteField.AccountingCustomerParty, CreditNoteFieldMetaAccountingCustomerParty],
  [CreditNoteField.PayeeParty, CreditNoteFieldMetaPayeeParty],
  [CreditNoteField.BuyerCustomerParty, CreditNoteFieldMetaBuyerCustomerParty],
  [CreditNoteField.SellerSupplierParty, CreditNoteFieldMetaSellerSupplierParty],
  [CreditNoteField.TaxRepresentativeParty, CreditNoteFieldMetaTaxRepresentativeParty],
  [CreditNoteField.Delivery, CreditNoteFieldMetaDelivery],
  [CreditNoteField.DeliveryTerms, CreditNoteFieldMetaDeliveryTerms],
  [CreditNoteField.PaymentMeans, CreditNoteFieldMetaPaymentMeans],
  [CreditNoteField.PaymentTerms, CreditNoteFieldMetaPaymentTerms],
  [CreditNoteField.TaxExchangeRate, CreditNoteFieldMetaTaxExchangeRate],
  [CreditNoteField.PricingExchangeRate, CreditNoteFieldMetaPricingExchangeRate],
  [CreditNoteField.PaymentExchangeRate, CreditNoteFieldMetaPaymentExchangeRate],
  [CreditNoteField.PaymentAlternativeExchangeRate, CreditNoteFieldMetaPaymentAlternativeExchangeRate],
  [CreditNoteField.AllowanceCharge, CreditNoteFieldMetaAllowanceCharge],
  [CreditNoteField.TaxTotal, CreditNoteFieldMetaTaxTotal],
  [CreditNoteField.WithholdingTaxTotal, CreditNoteFieldMetaWithholdingTaxTotal],
  [CreditNoteField.LegalMonetaryTotal, CreditNoteFieldMetaLegalMonetaryTotal],
  [CreditNoteField.CreditNoteLine, CreditNoteFieldMetaCreditNoteLine]
])
