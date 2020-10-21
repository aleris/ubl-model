import { FieldMeta } from '../../FieldMeta'

export enum DebitNoteField {
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
  DiscrepancyResponse = 'DiscrepancyResponse',
  OrderReference = 'OrderReference',
  BillingReference = 'BillingReference',
  DespatchDocumentReference = 'DespatchDocumentReference',
  ReceiptDocumentReference = 'ReceiptDocumentReference',
  StatementDocumentReference = 'StatementDocumentReference',
  ContractDocumentReference = 'ContractDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature',
  AccountingSupplierParty = 'AccountingSupplierParty',
  AccountingCustomerParty = 'AccountingCustomerParty',
  PayeeParty = 'PayeeParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  TaxRepresentativeParty = 'TaxRepresentativeParty',
  PrepaidPayment = 'PrepaidPayment',
  AllowanceCharge = 'AllowanceCharge',
  Delivery = 'Delivery',
  DeliveryTerms = 'DeliveryTerms',
  PaymentMeans = 'PaymentMeans',
  PaymentTerms = 'PaymentTerms',
  TaxExchangeRate = 'TaxExchangeRate',
  PricingExchangeRate = 'PricingExchangeRate',
  PaymentExchangeRate = 'PaymentExchangeRate',
  PaymentAlternativeExchangeRate = 'PaymentAlternativeExchangeRate',
  TaxTotal = 'TaxTotal',
  RequestedMonetaryTotal = 'RequestedMonetaryTotal',
  DebitNoteLine = 'DebitNoteLine'
}

export const DebitNoteFieldMetaUBLExtensions = new FieldMeta<DebitNoteField>(
  DebitNoteField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaUBLVersionID = new FieldMeta<DebitNoteField>(
  DebitNoteField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const DebitNoteFieldMetaCustomizationID = new FieldMeta<DebitNoteField>(
  DebitNoteField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const DebitNoteFieldMetaProfileID = new FieldMeta<DebitNoteField>(
  DebitNoteField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const DebitNoteFieldMetaProfileExecutionID = new FieldMeta<DebitNoteField>(
  DebitNoteField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const DebitNoteFieldMetaID = new FieldMeta<DebitNoteField>(
  DebitNoteField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaCopyIndicator = new FieldMeta<DebitNoteField>(
  DebitNoteField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaUUID = new FieldMeta<DebitNoteField>(
  DebitNoteField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaIssueDate = new FieldMeta<DebitNoteField>(
  DebitNoteField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaIssueTime = new FieldMeta<DebitNoteField>(
  DebitNoteField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaNote = new FieldMeta<DebitNoteField>(
  DebitNoteField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteFieldMetaTaxPointDate = new FieldMeta<DebitNoteField>(
  DebitNoteField.TaxPointDate,
  'TaxPointDate',
  'Tax Point Date',
  'Date',
  'The date of the Debit Note, used to indicate the point at which tax becomes applicable.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaDocumentCurrencyCode = new FieldMeta<DebitNoteField>(
  DebitNoteField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the default currency for this document.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaTaxCurrencyCode = new FieldMeta<DebitNoteField>(
  DebitNoteField.TaxCurrencyCode,
  'TaxCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency used for tax amounts in the Debit Note.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaPricingCurrencyCode = new FieldMeta<DebitNoteField>(
  DebitNoteField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency used for prices in the Debit Note.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaPaymentCurrencyCode = new FieldMeta<DebitNoteField>(
  DebitNoteField.PaymentCurrencyCode,
  'PaymentCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency used for payment in the Debit Note.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaPaymentAlternativeCurrencyCode = new FieldMeta<DebitNoteField>(
  DebitNoteField.PaymentAlternativeCurrencyCode,
  'PaymentAlternativeCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the alternative currency used for payment in the Debit Note.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaAccountingCostCode = new FieldMeta<DebitNoteField>(
  DebitNoteField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  'Code',
  'The Buyer\'s accounting code, applied to the Credit Note as a whole.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaAccountingCost = new FieldMeta<DebitNoteField>(
  DebitNoteField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  'Text',
  'The Buyer\'s accounting code, applied to the Credit Note as a whole, expressed as text.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaLineCountNumeric = new FieldMeta<DebitNoteField>(
  DebitNoteField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of Debit Note Lines in this document.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaInvoicePeriod = new FieldMeta<DebitNoteField>(
  DebitNoteField.InvoicePeriod,
  'InvoicePeriod',
  'Period',
  'Period',
  'A period (rather than a specific invoice) associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteFieldMetaDiscrepancyResponse = new FieldMeta<DebitNoteField>(
  DebitNoteField.DiscrepancyResponse,
  'DiscrepancyResponse',
  'Response',
  'Response',
  'A reason for the Debit Note as a whole.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteFieldMetaOrderReference = new FieldMeta<DebitNoteField>(
  DebitNoteField.OrderReference,
  'OrderReference',
  'Order Reference',
  'OrderReference',
  'A reference to an Order with which this Debit Note is associated.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaBillingReference = new FieldMeta<DebitNoteField>(
  DebitNoteField.BillingReference,
  'BillingReference',
  'Billing Reference',
  'BillingReference',
  'A reference to a billing document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteFieldMetaDespatchDocumentReference = new FieldMeta<DebitNoteField>(
  DebitNoteField.DespatchDocumentReference,
  'DespatchDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a Despatch Advice associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteFieldMetaReceiptDocumentReference = new FieldMeta<DebitNoteField>(
  DebitNoteField.ReceiptDocumentReference,
  'ReceiptDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a Receipt Advice associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteFieldMetaStatementDocumentReference = new FieldMeta<DebitNoteField>(
  DebitNoteField.StatementDocumentReference,
  'StatementDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a Statement associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteFieldMetaContractDocumentReference = new FieldMeta<DebitNoteField>(
  DebitNoteField.ContractDocumentReference,
  'ContractDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a contract associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteFieldMetaAdditionalDocumentReference = new FieldMeta<DebitNoteField>(
  DebitNoteField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteFieldMetaSignature = new FieldMeta<DebitNoteField>(
  DebitNoteField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteFieldMetaAccountingSupplierParty = new FieldMeta<DebitNoteField>(
  DebitNoteField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The accounting supplier party.',
  '1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaAccountingCustomerParty = new FieldMeta<DebitNoteField>(
  DebitNoteField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The accounting customer party.',
  '1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaPayeeParty = new FieldMeta<DebitNoteField>(
  DebitNoteField.PayeeParty,
  'PayeeParty',
  'Party',
  'Party',
  'The payee.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaBuyerCustomerParty = new FieldMeta<DebitNoteField>(
  DebitNoteField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The buyer.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaSellerSupplierParty = new FieldMeta<DebitNoteField>(
  DebitNoteField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaTaxRepresentativeParty = new FieldMeta<DebitNoteField>(
  DebitNoteField.TaxRepresentativeParty,
  'TaxRepresentativeParty',
  'Party',
  'Party',
  'The tax representative.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaPrepaidPayment = new FieldMeta<DebitNoteField>(
  DebitNoteField.PrepaidPayment,
  'PrepaidPayment',
  'Payment',
  'Payment',
  'A prepaid payment.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteFieldMetaAllowanceCharge = new FieldMeta<DebitNoteField>(
  DebitNoteField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'A discount or charge that applies to a price component.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteFieldMetaDelivery = new FieldMeta<DebitNoteField>(
  DebitNoteField.Delivery,
  'Delivery',
  'Delivery',
  'Delivery',
  'A delivery associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteFieldMetaDeliveryTerms = new FieldMeta<DebitNoteField>(
  DebitNoteField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  'DeliveryTerms',
  'A set of delivery terms associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteFieldMetaPaymentMeans = new FieldMeta<DebitNoteField>(
  DebitNoteField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  'PaymentMeans',
  'Expected means of payment.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteFieldMetaPaymentTerms = new FieldMeta<DebitNoteField>(
  DebitNoteField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  'PaymentTerms',
  'A set of payment terms associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteFieldMetaTaxExchangeRate = new FieldMeta<DebitNoteField>(
  DebitNoteField.TaxExchangeRate,
  'TaxExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the tax currency.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaPricingExchangeRate = new FieldMeta<DebitNoteField>(
  DebitNoteField.PricingExchangeRate,
  'PricingExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the pricing currency.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaPaymentExchangeRate = new FieldMeta<DebitNoteField>(
  DebitNoteField.PaymentExchangeRate,
  'PaymentExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the payment currency.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaPaymentAlternativeExchangeRate = new FieldMeta<DebitNoteField>(
  DebitNoteField.PaymentAlternativeExchangeRate,
  'PaymentAlternativeExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the payment alternative currency.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaTaxTotal = new FieldMeta<DebitNoteField>(
  DebitNoteField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'The total amount of a specific type of tax.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteFieldMetaRequestedMonetaryTotal = new FieldMeta<DebitNoteField>(
  DebitNoteField.RequestedMonetaryTotal,
  'RequestedMonetaryTotal',
  'Monetary Total',
  'MonetaryTotal',
  'The total amount payable on the Debit Note, including allowances, charges, and taxes.',
  '1',
  undefined,
  undefined
)

export const DebitNoteFieldMetaDebitNoteLine = new FieldMeta<DebitNoteField>(
  DebitNoteField.DebitNoteLine,
  'DebitNoteLine',
  'Debit Note Line',
  'DebitNoteLine',
  'A Debit Note line.',
  '1..n',
  undefined,
  undefined
)

export class DebitNoteFieldMeta {
  public static readonly UBLExtensions = DebitNoteFieldMetaUBLExtensions
  public static readonly UBLVersionID = DebitNoteFieldMetaUBLVersionID
  public static readonly CustomizationID = DebitNoteFieldMetaCustomizationID
  public static readonly ProfileID = DebitNoteFieldMetaProfileID
  public static readonly ProfileExecutionID = DebitNoteFieldMetaProfileExecutionID
  public static readonly ID = DebitNoteFieldMetaID
  public static readonly CopyIndicator = DebitNoteFieldMetaCopyIndicator
  public static readonly UUID = DebitNoteFieldMetaUUID
  public static readonly IssueDate = DebitNoteFieldMetaIssueDate
  public static readonly IssueTime = DebitNoteFieldMetaIssueTime
  public static readonly Note = DebitNoteFieldMetaNote
  public static readonly TaxPointDate = DebitNoteFieldMetaTaxPointDate
  public static readonly DocumentCurrencyCode = DebitNoteFieldMetaDocumentCurrencyCode
  public static readonly TaxCurrencyCode = DebitNoteFieldMetaTaxCurrencyCode
  public static readonly PricingCurrencyCode = DebitNoteFieldMetaPricingCurrencyCode
  public static readonly PaymentCurrencyCode = DebitNoteFieldMetaPaymentCurrencyCode
  public static readonly PaymentAlternativeCurrencyCode = DebitNoteFieldMetaPaymentAlternativeCurrencyCode
  public static readonly AccountingCostCode = DebitNoteFieldMetaAccountingCostCode
  public static readonly AccountingCost = DebitNoteFieldMetaAccountingCost
  public static readonly LineCountNumeric = DebitNoteFieldMetaLineCountNumeric
  public static readonly InvoicePeriod = DebitNoteFieldMetaInvoicePeriod
  public static readonly DiscrepancyResponse = DebitNoteFieldMetaDiscrepancyResponse
  public static readonly OrderReference = DebitNoteFieldMetaOrderReference
  public static readonly BillingReference = DebitNoteFieldMetaBillingReference
  public static readonly DespatchDocumentReference = DebitNoteFieldMetaDespatchDocumentReference
  public static readonly ReceiptDocumentReference = DebitNoteFieldMetaReceiptDocumentReference
  public static readonly StatementDocumentReference = DebitNoteFieldMetaStatementDocumentReference
  public static readonly ContractDocumentReference = DebitNoteFieldMetaContractDocumentReference
  public static readonly AdditionalDocumentReference = DebitNoteFieldMetaAdditionalDocumentReference
  public static readonly Signature = DebitNoteFieldMetaSignature
  public static readonly AccountingSupplierParty = DebitNoteFieldMetaAccountingSupplierParty
  public static readonly AccountingCustomerParty = DebitNoteFieldMetaAccountingCustomerParty
  public static readonly PayeeParty = DebitNoteFieldMetaPayeeParty
  public static readonly BuyerCustomerParty = DebitNoteFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = DebitNoteFieldMetaSellerSupplierParty
  public static readonly TaxRepresentativeParty = DebitNoteFieldMetaTaxRepresentativeParty
  public static readonly PrepaidPayment = DebitNoteFieldMetaPrepaidPayment
  public static readonly AllowanceCharge = DebitNoteFieldMetaAllowanceCharge
  public static readonly Delivery = DebitNoteFieldMetaDelivery
  public static readonly DeliveryTerms = DebitNoteFieldMetaDeliveryTerms
  public static readonly PaymentMeans = DebitNoteFieldMetaPaymentMeans
  public static readonly PaymentTerms = DebitNoteFieldMetaPaymentTerms
  public static readonly TaxExchangeRate = DebitNoteFieldMetaTaxExchangeRate
  public static readonly PricingExchangeRate = DebitNoteFieldMetaPricingExchangeRate
  public static readonly PaymentExchangeRate = DebitNoteFieldMetaPaymentExchangeRate
  public static readonly PaymentAlternativeExchangeRate = DebitNoteFieldMetaPaymentAlternativeExchangeRate
  public static readonly TaxTotal = DebitNoteFieldMetaTaxTotal
  public static readonly RequestedMonetaryTotal = DebitNoteFieldMetaRequestedMonetaryTotal
  public static readonly DebitNoteLine = DebitNoteFieldMetaDebitNoteLine
}

export const DebitNoteFieldMap = new Map([
  [DebitNoteField.UBLExtensions, DebitNoteFieldMetaUBLExtensions],
  [DebitNoteField.UBLVersionID, DebitNoteFieldMetaUBLVersionID],
  [DebitNoteField.CustomizationID, DebitNoteFieldMetaCustomizationID],
  [DebitNoteField.ProfileID, DebitNoteFieldMetaProfileID],
  [DebitNoteField.ProfileExecutionID, DebitNoteFieldMetaProfileExecutionID],
  [DebitNoteField.ID, DebitNoteFieldMetaID],
  [DebitNoteField.CopyIndicator, DebitNoteFieldMetaCopyIndicator],
  [DebitNoteField.UUID, DebitNoteFieldMetaUUID],
  [DebitNoteField.IssueDate, DebitNoteFieldMetaIssueDate],
  [DebitNoteField.IssueTime, DebitNoteFieldMetaIssueTime],
  [DebitNoteField.Note, DebitNoteFieldMetaNote],
  [DebitNoteField.TaxPointDate, DebitNoteFieldMetaTaxPointDate],
  [DebitNoteField.DocumentCurrencyCode, DebitNoteFieldMetaDocumentCurrencyCode],
  [DebitNoteField.TaxCurrencyCode, DebitNoteFieldMetaTaxCurrencyCode],
  [DebitNoteField.PricingCurrencyCode, DebitNoteFieldMetaPricingCurrencyCode],
  [DebitNoteField.PaymentCurrencyCode, DebitNoteFieldMetaPaymentCurrencyCode],
  [DebitNoteField.PaymentAlternativeCurrencyCode, DebitNoteFieldMetaPaymentAlternativeCurrencyCode],
  [DebitNoteField.AccountingCostCode, DebitNoteFieldMetaAccountingCostCode],
  [DebitNoteField.AccountingCost, DebitNoteFieldMetaAccountingCost],
  [DebitNoteField.LineCountNumeric, DebitNoteFieldMetaLineCountNumeric],
  [DebitNoteField.InvoicePeriod, DebitNoteFieldMetaInvoicePeriod],
  [DebitNoteField.DiscrepancyResponse, DebitNoteFieldMetaDiscrepancyResponse],
  [DebitNoteField.OrderReference, DebitNoteFieldMetaOrderReference],
  [DebitNoteField.BillingReference, DebitNoteFieldMetaBillingReference],
  [DebitNoteField.DespatchDocumentReference, DebitNoteFieldMetaDespatchDocumentReference],
  [DebitNoteField.ReceiptDocumentReference, DebitNoteFieldMetaReceiptDocumentReference],
  [DebitNoteField.StatementDocumentReference, DebitNoteFieldMetaStatementDocumentReference],
  [DebitNoteField.ContractDocumentReference, DebitNoteFieldMetaContractDocumentReference],
  [DebitNoteField.AdditionalDocumentReference, DebitNoteFieldMetaAdditionalDocumentReference],
  [DebitNoteField.Signature, DebitNoteFieldMetaSignature],
  [DebitNoteField.AccountingSupplierParty, DebitNoteFieldMetaAccountingSupplierParty],
  [DebitNoteField.AccountingCustomerParty, DebitNoteFieldMetaAccountingCustomerParty],
  [DebitNoteField.PayeeParty, DebitNoteFieldMetaPayeeParty],
  [DebitNoteField.BuyerCustomerParty, DebitNoteFieldMetaBuyerCustomerParty],
  [DebitNoteField.SellerSupplierParty, DebitNoteFieldMetaSellerSupplierParty],
  [DebitNoteField.TaxRepresentativeParty, DebitNoteFieldMetaTaxRepresentativeParty],
  [DebitNoteField.PrepaidPayment, DebitNoteFieldMetaPrepaidPayment],
  [DebitNoteField.AllowanceCharge, DebitNoteFieldMetaAllowanceCharge],
  [DebitNoteField.Delivery, DebitNoteFieldMetaDelivery],
  [DebitNoteField.DeliveryTerms, DebitNoteFieldMetaDeliveryTerms],
  [DebitNoteField.PaymentMeans, DebitNoteFieldMetaPaymentMeans],
  [DebitNoteField.PaymentTerms, DebitNoteFieldMetaPaymentTerms],
  [DebitNoteField.TaxExchangeRate, DebitNoteFieldMetaTaxExchangeRate],
  [DebitNoteField.PricingExchangeRate, DebitNoteFieldMetaPricingExchangeRate],
  [DebitNoteField.PaymentExchangeRate, DebitNoteFieldMetaPaymentExchangeRate],
  [DebitNoteField.PaymentAlternativeExchangeRate, DebitNoteFieldMetaPaymentAlternativeExchangeRate],
  [DebitNoteField.TaxTotal, DebitNoteFieldMetaTaxTotal],
  [DebitNoteField.RequestedMonetaryTotal, DebitNoteFieldMetaRequestedMonetaryTotal],
  [DebitNoteField.DebitNoteLine, DebitNoteFieldMetaDebitNoteLine]
])
