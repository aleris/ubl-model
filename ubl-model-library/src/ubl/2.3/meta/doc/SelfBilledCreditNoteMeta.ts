import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from '../cac/AllowanceChargeMeta'
import { BillingReferenceType } from '../cac/BillingReferenceMeta'
import { CodeType } from '../cbc/CodeMeta'
import { CreditNoteLineType } from '../cac/CreditNoteLineMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
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
import { PaymentMeansType } from '../cac/PaymentMeansMeta'
import { PaymentTermsType } from '../cac/PaymentTermsMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { ProjectReferenceType } from '../cac/ProjectReferenceMeta'
import { ResponseType } from '../cac/ResponseMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TaxTotalType } from '../cac/TaxTotalMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaUBLVersionID = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const SelfBilledCreditNoteFieldMetaCustomizationID = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const SelfBilledCreditNoteFieldMetaProfileID = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const SelfBilledCreditNoteFieldMetaProfileExecutionID = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const SelfBilledCreditNoteFieldMetaID = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaCopyIndicator = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaUUID = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaIssueDate = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaIssueTime = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaDueDate = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.DueDate,
  'DueDate',
  'Due Date',
  DateType.name,
  'The date on which SelfBilledCreditNote is due.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaTaxPointDate = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.TaxPointDate,
  'TaxPointDate',
  'Tax Point Date',
  DateType.name,
  'The date of the Self Billed Credit Note, used to indicate the point at which tax becomes applicable.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaCreditNoteTypeCode = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.CreditNoteTypeCode,
  'CreditNoteTypeCode',
  'Credit Note Type Code',
  CodeType.name,
  'A code signifying the type of Selfbilled CreditNote',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaNote = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaDocumentCurrencyCode = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Document Currency Code',
  CodeType.name,
  'A code signifying the default currency for this document.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaTaxCurrencyCode = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.TaxCurrencyCode,
  'TaxCurrencyCode',
  'Tax Currency Code',
  CodeType.name,
  'A code signifying the currency used for tax amounts in the Self Billed Credit Note.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaPricingCurrencyCode = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Pricing Currency Code',
  CodeType.name,
  'A code signifying the currency used for prices in the Self Billed Credit Note.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaPaymentCurrencyCode = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.PaymentCurrencyCode,
  'PaymentCurrencyCode',
  'Payment Currency Code',
  CodeType.name,
  'A code signifying the currency used for payment in the Self Billed Credit Note.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaPaymentAlternativeCurrencyCode = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.PaymentAlternativeCurrencyCode,
  'PaymentAlternativeCurrencyCode',
  'Payment Alternative Currency Code',
  CodeType.name,
  'A code signifying the alternative currency used for payment in the Self Billed Credit Note.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaAccountingCostCode = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  CodeType.name,
  'The buyer\'s accounting code, applied to the Self Billed Credit Note as a whole.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaAccountingCost = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  TextType.name,
  'The buyer\'s accounting code, applied to the Self Billed Credit Note as a whole, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaLineCountNumeric = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  NumericType.name,
  'The number of Self Billed Credit Note Lines in this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaBuyerReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.BuyerReference,
  'BuyerReference',
  'Buyer Reference',
  TextType.name,
  'A reference provided by the buyer used for internal routing of the document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaInvoicePeriod = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.InvoicePeriod,
  'InvoicePeriod',
  'Invoice Period',
  PeriodType.name,
  'A period (rather than a specific Invoice) associated with the Self Billed Credit Note.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaDiscrepancyResponse = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.DiscrepancyResponse,
  'DiscrepancyResponse',
  'Discrepancy Response',
  ResponseType.name,
  'A reason for the Self Billed Credit Note as a whole.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaOrderReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.OrderReference,
  'OrderReference',
  'Order Reference',
  OrderReferenceType.name,
  'The Order associated with this Self Billed Credit Note.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaBillingReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.BillingReference,
  'BillingReference',
  'Billing Reference',
  BillingReferenceType.name,
  'A reference to a billing document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaDespatchDocumentReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.DespatchDocumentReference,
  'DespatchDocumentReference',
  'Despatch Document Reference',
  DocumentReferenceType.name,
  'A reference to a Despatch Advice associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaReceiptDocumentReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.ReceiptDocumentReference,
  'ReceiptDocumentReference',
  'Receipt Document Reference',
  DocumentReferenceType.name,
  'A reference to a Receipt Advice associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaContractDocumentReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.ContractDocumentReference,
  'ContractDocumentReference',
  'Contract Document Reference',
  DocumentReferenceType.name,
  'A reference to a contract associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaStatementDocumentReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.StatementDocumentReference,
  'StatementDocumentReference',
  'Statement Document Reference',
  DocumentReferenceType.name,
  'A reference to a Statement associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaOriginatorDocumentReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.OriginatorDocumentReference,
  'OriginatorDocumentReference',
  'Originator Document Reference',
  DocumentReferenceType.name,
  'A reference to an originator document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaAdditionalDocumentReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaProjectReference = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.ProjectReference,
  'ProjectReference',
  'Project Reference',
  ProjectReferenceType.name,
  'A reference to a project associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaSignature = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaAccountingCustomerParty = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Accounting Customer Party',
  CustomerPartyType.name,
  'The accounting customer party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaAccountingSupplierParty = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Accounting Supplier Party',
  SupplierPartyType.name,
  'The accounting supplier party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaPayeeParty = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.PayeeParty,
  'PayeeParty',
  'Payee Party',
  PartyType.name,
  'The payee.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaBuyerCustomerParty = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaSellerSupplierParty = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaTaxRepresentativeParty = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.TaxRepresentativeParty,
  'TaxRepresentativeParty',
  'Tax Representative Party',
  PartyType.name,
  'The tax representative.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaDelivery = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.Delivery,
  'Delivery',
  'Delivery',
  DeliveryType.name,
  'A delivery associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaDeliveryTerms = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  DeliveryTermsType.name,
  'A set of delivery terms associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaPaymentMeans = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  PaymentMeansType.name,
  'Expected means of payment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaPaymentTerms = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  PaymentTermsType.name,
  'A set of payment terms associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaAllowanceCharge = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'A discount or charge that applies to a price component.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaTaxExchangeRate = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.TaxExchangeRate,
  'TaxExchangeRate',
  'Tax Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the tax currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaPricingExchangeRate = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.PricingExchangeRate,
  'PricingExchangeRate',
  'Pricing Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the pricing currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaPaymentExchangeRate = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.PaymentExchangeRate,
  'PaymentExchangeRate',
  'Payment Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the payment currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaPaymentAlternativeExchangeRate = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.PaymentAlternativeExchangeRate,
  'PaymentAlternativeExchangeRate',
  'Payment Alternative Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the payment alternative currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaTaxTotal = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'The total amount of a specific type of tax.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaWithholdingTaxTotal = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.WithholdingTaxTotal,
  'WithholdingTaxTotal',
  'Withholding Tax Total',
  TaxTotalType.name,
  'The total withholding tax.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaLegalMonetaryTotal = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.LegalMonetaryTotal,
  'LegalMonetaryTotal',
  'Legal Monetary Total',
  MonetaryTotalType.name,
  'The total amount payable on the Self Billed Credit Note, including Allowances, Charges, and Taxes.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const SelfBilledCreditNoteFieldMetaCreditNoteLine = new FieldMeta<SelfBilledCreditNoteField>(
  SelfBilledCreditNoteField.CreditNoteLine,
  'CreditNoteLine',
  'Credit Note Line',
  CreditNoteLineType.name,
  'A Self Billed Credit Note Line.',
  FieldCardinality.Multi,
  TypeModule.cac,
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

export const SelfBilledCreditNoteType: Type<SelfBilledCreditNoteField> = {
  name: 'SelfBilledCreditNote',
  label: 'Self Billed Credit Note',
  module: TypeModule.doc,
  definition: 'A credit note created by the debtor in a self billing arrangement with a creditor; Self Billed Credit Note replaces Debit Note in such arrangements.',
  fields: SelfBilledCreditNoteFieldMap,
}
