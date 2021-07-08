import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from '../cac/AllowanceChargeMeta'
import { BillingReferenceType } from '../cac/BillingReferenceMeta'
import { CodeType } from '../cbc/CodeMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DebitNoteLineType } from '../cac/DebitNoteLineMeta'
import { DeliveryType } from '../cac/DeliveryMeta'
import { DeliveryTermsType } from '../cac/DeliveryTermsMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { ExchangeRateType } from '../cac/ExchangeRateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { MonetaryTotalType } from '../cac/MonetaryTotalMeta'
import { NumericType } from '../cbc/NumericMeta'
import { OrderReferenceType } from '../cac/OrderReferenceMeta'
import { PartyType } from '../cac/PartyMeta'
import { PaymentType } from '../cac/PaymentMeta'
import { PaymentMeansType } from '../cac/PaymentMeansMeta'
import { PaymentTermsType } from '../cac/PaymentTermsMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { ResponseType } from '../cac/ResponseMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TaxTotalType } from '../cac/TaxTotalMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  WithholdingTaxTotal = 'WithholdingTaxTotal',
  RequestedMonetaryTotal = 'RequestedMonetaryTotal',
  DebitNoteLine = 'DebitNoteLine'
}

export const DebitNoteFieldMetaUBLExtensions = new FieldMeta<DebitNoteField>(
  DebitNoteField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DebitNoteFieldMetaUBLVersionID = new FieldMeta<DebitNoteField>(
  DebitNoteField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const DebitNoteFieldMetaCustomizationID = new FieldMeta<DebitNoteField>(
  DebitNoteField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const DebitNoteFieldMetaProfileID = new FieldMeta<DebitNoteField>(
  DebitNoteField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const DebitNoteFieldMetaProfileExecutionID = new FieldMeta<DebitNoteField>(
  DebitNoteField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const DebitNoteFieldMetaID = new FieldMeta<DebitNoteField>(
  DebitNoteField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteFieldMetaCopyIndicator = new FieldMeta<DebitNoteField>(
  DebitNoteField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteFieldMetaUUID = new FieldMeta<DebitNoteField>(
  DebitNoteField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteFieldMetaIssueDate = new FieldMeta<DebitNoteField>(
  DebitNoteField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteFieldMetaIssueTime = new FieldMeta<DebitNoteField>(
  DebitNoteField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteFieldMetaNote = new FieldMeta<DebitNoteField>(
  DebitNoteField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteFieldMetaTaxPointDate = new FieldMeta<DebitNoteField>(
  DebitNoteField.TaxPointDate,
  'TaxPointDate',
  'Tax Point Date',
  DateType.name,
  'The date of the Debit Note, used to indicate the point at which tax becomes applicable.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteFieldMetaDocumentCurrencyCode = new FieldMeta<DebitNoteField>(
  DebitNoteField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Document Currency Code',
  CodeType.name,
  'A code signifying the default currency for this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteFieldMetaTaxCurrencyCode = new FieldMeta<DebitNoteField>(
  DebitNoteField.TaxCurrencyCode,
  'TaxCurrencyCode',
  'Tax Currency Code',
  CodeType.name,
  'A code signifying the currency used for tax amounts in the Debit Note.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteFieldMetaPricingCurrencyCode = new FieldMeta<DebitNoteField>(
  DebitNoteField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Pricing Currency Code',
  CodeType.name,
  'A code signifying the currency used for prices in the Debit Note.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteFieldMetaPaymentCurrencyCode = new FieldMeta<DebitNoteField>(
  DebitNoteField.PaymentCurrencyCode,
  'PaymentCurrencyCode',
  'Payment Currency Code',
  CodeType.name,
  'A code signifying the currency used for payment in the Debit Note.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteFieldMetaPaymentAlternativeCurrencyCode = new FieldMeta<DebitNoteField>(
  DebitNoteField.PaymentAlternativeCurrencyCode,
  'PaymentAlternativeCurrencyCode',
  'Payment Alternative Currency Code',
  CodeType.name,
  'A code signifying the alternative currency used for payment in the Debit Note.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteFieldMetaAccountingCostCode = new FieldMeta<DebitNoteField>(
  DebitNoteField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  CodeType.name,
  'The Buyer\'s accounting code, applied to the Credit Note as a whole.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteFieldMetaAccountingCost = new FieldMeta<DebitNoteField>(
  DebitNoteField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  TextType.name,
  'The Buyer\'s accounting code, applied to the Credit Note as a whole, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteFieldMetaLineCountNumeric = new FieldMeta<DebitNoteField>(
  DebitNoteField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  NumericType.name,
  'The number of Debit Note Lines in this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteFieldMetaInvoicePeriod = new FieldMeta<DebitNoteField>(
  DebitNoteField.InvoicePeriod,
  'InvoicePeriod',
  'Invoice Period',
  PeriodType.name,
  'A period (rather than a specific invoice) associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaDiscrepancyResponse = new FieldMeta<DebitNoteField>(
  DebitNoteField.DiscrepancyResponse,
  'DiscrepancyResponse',
  'Discrepancy Response',
  ResponseType.name,
  'A reason for the Debit Note as a whole.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaOrderReference = new FieldMeta<DebitNoteField>(
  DebitNoteField.OrderReference,
  'OrderReference',
  'Order Reference',
  OrderReferenceType.name,
  'A reference to an Order with which this Debit Note is associated.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaBillingReference = new FieldMeta<DebitNoteField>(
  DebitNoteField.BillingReference,
  'BillingReference',
  'Billing Reference',
  BillingReferenceType.name,
  'A reference to a billing document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaDespatchDocumentReference = new FieldMeta<DebitNoteField>(
  DebitNoteField.DespatchDocumentReference,
  'DespatchDocumentReference',
  'Despatch Document Reference',
  DocumentReferenceType.name,
  'A reference to a Despatch Advice associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaReceiptDocumentReference = new FieldMeta<DebitNoteField>(
  DebitNoteField.ReceiptDocumentReference,
  'ReceiptDocumentReference',
  'Receipt Document Reference',
  DocumentReferenceType.name,
  'A reference to a Receipt Advice associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaStatementDocumentReference = new FieldMeta<DebitNoteField>(
  DebitNoteField.StatementDocumentReference,
  'StatementDocumentReference',
  'Statement Document Reference',
  DocumentReferenceType.name,
  'A reference to a Statement associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaContractDocumentReference = new FieldMeta<DebitNoteField>(
  DebitNoteField.ContractDocumentReference,
  'ContractDocumentReference',
  'Contract Document Reference',
  DocumentReferenceType.name,
  'A reference to a contract associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaAdditionalDocumentReference = new FieldMeta<DebitNoteField>(
  DebitNoteField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaSignature = new FieldMeta<DebitNoteField>(
  DebitNoteField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaAccountingSupplierParty = new FieldMeta<DebitNoteField>(
  DebitNoteField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Accounting Supplier Party',
  SupplierPartyType.name,
  'The accounting supplier party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaAccountingCustomerParty = new FieldMeta<DebitNoteField>(
  DebitNoteField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Accounting Customer Party',
  CustomerPartyType.name,
  'The accounting customer party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaPayeeParty = new FieldMeta<DebitNoteField>(
  DebitNoteField.PayeeParty,
  'PayeeParty',
  'Payee Party',
  PartyType.name,
  'The payee.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaBuyerCustomerParty = new FieldMeta<DebitNoteField>(
  DebitNoteField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaSellerSupplierParty = new FieldMeta<DebitNoteField>(
  DebitNoteField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaTaxRepresentativeParty = new FieldMeta<DebitNoteField>(
  DebitNoteField.TaxRepresentativeParty,
  'TaxRepresentativeParty',
  'Tax Representative Party',
  PartyType.name,
  'The tax representative.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaPrepaidPayment = new FieldMeta<DebitNoteField>(
  DebitNoteField.PrepaidPayment,
  'PrepaidPayment',
  'Prepaid Payment',
  PaymentType.name,
  'A prepaid payment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaAllowanceCharge = new FieldMeta<DebitNoteField>(
  DebitNoteField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'A discount or charge that applies to a price component.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaDelivery = new FieldMeta<DebitNoteField>(
  DebitNoteField.Delivery,
  'Delivery',
  'Delivery',
  DeliveryType.name,
  'A delivery associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaDeliveryTerms = new FieldMeta<DebitNoteField>(
  DebitNoteField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  DeliveryTermsType.name,
  'A set of delivery terms associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaPaymentMeans = new FieldMeta<DebitNoteField>(
  DebitNoteField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  PaymentMeansType.name,
  'Expected means of payment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaPaymentTerms = new FieldMeta<DebitNoteField>(
  DebitNoteField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  PaymentTermsType.name,
  'A set of payment terms associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaTaxExchangeRate = new FieldMeta<DebitNoteField>(
  DebitNoteField.TaxExchangeRate,
  'TaxExchangeRate',
  'Tax Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the tax currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaPricingExchangeRate = new FieldMeta<DebitNoteField>(
  DebitNoteField.PricingExchangeRate,
  'PricingExchangeRate',
  'Pricing Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the pricing currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaPaymentExchangeRate = new FieldMeta<DebitNoteField>(
  DebitNoteField.PaymentExchangeRate,
  'PaymentExchangeRate',
  'Payment Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the payment currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaPaymentAlternativeExchangeRate = new FieldMeta<DebitNoteField>(
  DebitNoteField.PaymentAlternativeExchangeRate,
  'PaymentAlternativeExchangeRate',
  'Payment Alternative Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the payment alternative currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaTaxTotal = new FieldMeta<DebitNoteField>(
  DebitNoteField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'The total amount of a specific type of tax.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaWithholdingTaxTotal = new FieldMeta<DebitNoteField>(
  DebitNoteField.WithholdingTaxTotal,
  'WithholdingTaxTotal',
  'Withholding Tax Total',
  TaxTotalType.name,
  'The total withholding tax.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaRequestedMonetaryTotal = new FieldMeta<DebitNoteField>(
  DebitNoteField.RequestedMonetaryTotal,
  'RequestedMonetaryTotal',
  'Requested Monetary Total',
  MonetaryTotalType.name,
  'The total amount payable on the Debit Note, including allowances, charges, and taxes.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteFieldMetaDebitNoteLine = new FieldMeta<DebitNoteField>(
  DebitNoteField.DebitNoteLine,
  'DebitNoteLine',
  'Debit Note Line',
  DebitNoteLineType.name,
  'A Debit Note line.',
  FieldCardinality.Multi,
  TypeModule.cac,
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
  public static readonly WithholdingTaxTotal = DebitNoteFieldMetaWithholdingTaxTotal
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
  [DebitNoteField.WithholdingTaxTotal, DebitNoteFieldMetaWithholdingTaxTotal],
  [DebitNoteField.RequestedMonetaryTotal, DebitNoteFieldMetaRequestedMonetaryTotal],
  [DebitNoteField.DebitNoteLine, DebitNoteFieldMetaDebitNoteLine]
])

export const DebitNoteType: Type<DebitNoteField> = {
  name: 'DebitNote',
  label: 'Debit Note',
  module: TypeModule.doc,
  definition: 'A document used to specify debts incurred by the Debtor.',
  fields: DebitNoteFieldMap,
}
