import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from '../cac/AllowanceChargeMeta'
import { BillingReferenceType } from '../cac/BillingReferenceMeta'
import { CodeType } from '../cbc/CodeMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { ExchangeRateType } from '../cac/ExchangeRateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { InvoiceLineType } from '../cac/InvoiceLineMeta'
import { MonetaryTotalType } from '../cac/MonetaryTotalMeta'
import { NumericType } from '../cbc/NumericMeta'
import { OrderReferenceType } from '../cac/OrderReferenceMeta'
import { PartyType } from '../cac/PartyMeta'
import { PaymentType } from '../cac/PaymentMeta'
import { PaymentMeansType } from '../cac/PaymentMeansMeta'
import { PaymentTermsType } from '../cac/PaymentTermsMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { ProjectReferenceType } from '../cac/ProjectReferenceMeta'
import { ShipmentType } from '../cac/ShipmentMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TaxTotalType } from '../cac/TaxTotalMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaUBLVersionID = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const FreightInvoiceFieldMetaCustomizationID = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const FreightInvoiceFieldMetaProfileID = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const FreightInvoiceFieldMetaProfileExecutionID = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const FreightInvoiceFieldMetaID = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Invoice Number',
  undefined
)

export const FreightInvoiceFieldMetaCopyIndicator = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaUUID = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaIssueDate = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Invoice Date',
  undefined
)

export const FreightInvoiceFieldMetaIssueTime = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaDueDate = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.DueDate,
  'DueDate',
  'Due Date',
  DateType.name,
  'The date on which Invoice is due.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaInvoiceTypeCode = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.InvoiceTypeCode,
  'InvoiceTypeCode',
  'Invoice Type Code',
  CodeType.name,
  'A code signifying the type of the Freight Invoice.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaNote = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaTaxPointDate = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.TaxPointDate,
  'TaxPointDate',
  'Tax Point Date',
  DateType.name,
  'The date of the Freight Invoice, used to indicate the point at which tax becomes applicable.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaDocumentCurrencyCode = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Document Currency Code',
  CodeType.name,
  'A code signifying the default currency for this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaTaxCurrencyCode = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.TaxCurrencyCode,
  'TaxCurrencyCode',
  'Tax Currency Code',
  CodeType.name,
  'A code signifying the currency used for tax amounts in the Freight Invoice.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPricingCurrencyCode = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Pricing Currency Code',
  CodeType.name,
  'A code signifying the currency used for prices in the Freight Invoice.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPaymentCurrencyCode = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PaymentCurrencyCode,
  'PaymentCurrencyCode',
  'Payment Currency Code',
  CodeType.name,
  'A code signifying the currency used for payment in the Freight Invoice.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPaymentAlternativeCurrencyCode = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PaymentAlternativeCurrencyCode,
  'PaymentAlternativeCurrencyCode',
  'Payment Alternative Currency Code',
  CodeType.name,
  'A code signifying the alternative currency used for payment in the Freight Invoice.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaAccountingCostCode = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  CodeType.name,
  'The buyer\'s accounting code, applied to the Freight Invoice as a whole.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaAccountingCost = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  TextType.name,
  'The buyer\'s accounting cost centre, applied to the Freight Invoice as a whole, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaLineCountNumeric = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  NumericType.name,
  'The number of Invoice Lines in the document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaInvoicePeriod = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.InvoicePeriod,
  'InvoicePeriod',
  'Invoice Period',
  PeriodType.name,
  'The time periods to which the Freight Invoice applies.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaShipment = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.Shipment,
  'Shipment',
  'Shipment',
  ShipmentType.name,
  'Details about one or more shipments covered by this Freight Invoice.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaOrderReference = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.OrderReference,
  'OrderReference',
  'Order Reference',
  OrderReferenceType.name,
  'Reference to an Order associated with this Freight Invoice.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaBillingReference = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.BillingReference,
  'BillingReference',
  'Billing Reference',
  BillingReferenceType.name,
  'A reference to a billing document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaDespatchDocumentReference = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.DespatchDocumentReference,
  'DespatchDocumentReference',
  'Despatch Document Reference',
  DocumentReferenceType.name,
  'A reference to a Despatch Advice associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaReceiptDocumentReference = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.ReceiptDocumentReference,
  'ReceiptDocumentReference',
  'Receipt Document Reference',
  DocumentReferenceType.name,
  'A reference to a Receipt Advice associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaOriginatorDocumentReference = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.OriginatorDocumentReference,
  'OriginatorDocumentReference',
  'Originator Document Reference',
  DocumentReferenceType.name,
  'A reference to an originator document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaContractDocumentReference = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.ContractDocumentReference,
  'ContractDocumentReference',
  'Contract Document Reference',
  DocumentReferenceType.name,
  'A reference to a contract associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaAdditionalDocumentReference = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaProjectReference = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.ProjectReference,
  'ProjectReference',
  'Project Reference',
  ProjectReferenceType.name,
  'A reference to a project associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaSignature = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaAccountingSupplierParty = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Accounting Supplier Party',
  SupplierPartyType.name,
  'The accounting supplier party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaAccountingCustomerParty = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Accounting Customer Party',
  CustomerPartyType.name,
  'The accounting customer party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPayeeParty = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PayeeParty,
  'PayeeParty',
  'Payee Party',
  PartyType.name,
  'The payee.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaTaxRepresentativeParty = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.TaxRepresentativeParty,
  'TaxRepresentativeParty',
  'Tax Representative Party',
  PartyType.name,
  'The tax representative.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPaymentMeans = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  PaymentMeansType.name,
  'Expected means of payment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPaymentTerms = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  PaymentTermsType.name,
  'A set of payment terms associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPrepaidPayment = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PrepaidPayment,
  'PrepaidPayment',
  'Prepaid Payment',
  PaymentType.name,
  'A prepaid payment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaAllowanceCharge = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'A discount or charge that applies to a price component.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaTaxExchangeRate = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.TaxExchangeRate,
  'TaxExchangeRate',
  'Tax Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the tax currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPricingExchangeRate = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PricingExchangeRate,
  'PricingExchangeRate',
  'Pricing Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the pricing currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPaymentExchangeRate = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PaymentExchangeRate,
  'PaymentExchangeRate',
  'Payment Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the payment currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaPaymentAlternativeExchangeRate = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.PaymentAlternativeExchangeRate,
  'PaymentAlternativeExchangeRate',
  'Payment Alternative Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the payment alternative currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaTaxTotal = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'The total amount of a specific type of tax.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaWithholdingTaxTotal = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.WithholdingTaxTotal,
  'WithholdingTaxTotal',
  'Withholding Tax Total',
  TaxTotalType.name,
  'The total withholding tax.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaLegalMonetaryTotal = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.LegalMonetaryTotal,
  'LegalMonetaryTotal',
  'Legal Monetary Total',
  MonetaryTotalType.name,
  'The total amount payable on the Freight Invoice, including Allowances, Charges, and Taxes.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const FreightInvoiceFieldMetaInvoiceLine = new FieldMeta<FreightInvoiceField>(
  FreightInvoiceField.InvoiceLine,
  'InvoiceLine',
  'Invoice Line',
  InvoiceLineType.name,
  'An Invoice Line.',
  FieldCardinality.Multi,
  TypeModule.cac,
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

export const FreightInvoiceType: Type<FreightInvoiceField> = {
  name: 'FreightInvoice',
  label: 'Freight Invoice',
  module: TypeModule.doc,
  definition: 'A document stating the charges incurred for a logistics service.',
  fields: FreightInvoiceFieldMap,
}
