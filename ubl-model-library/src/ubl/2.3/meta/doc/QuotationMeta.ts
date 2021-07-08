import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from '../cac/AllowanceChargeMeta'
import { CodeType } from '../cbc/CodeMeta'
import { ContractType } from '../cac/ContractMeta'
import { CountryType } from '../cac/CountryMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DeliveryType } from '../cac/DeliveryMeta'
import { DeliveryTermsType } from '../cac/DeliveryTermsMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { MonetaryTotalType } from '../cac/MonetaryTotalMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PaymentMeansType } from '../cac/PaymentMeansMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { QuotationLineType } from '../cac/QuotationLineMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TaxTotalType } from '../cac/TaxTotalMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { TransactionConditionsType } from '../cac/TransactionConditionsMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum QuotationField {
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
  PricingCurrencyCode = 'PricingCurrencyCode',
  LineCountNumeric = 'LineCountNumeric',
  ValidityPeriod = 'ValidityPeriod',
  RequestForQuotationDocumentReference = 'RequestForQuotationDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Contract = 'Contract',
  Signature = 'Signature',
  SellerSupplierParty = 'SellerSupplierParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  OriginatorCustomerParty = 'OriginatorCustomerParty',
  Delivery = 'Delivery',
  DeliveryTerms = 'DeliveryTerms',
  PaymentMeans = 'PaymentMeans',
  TransactionConditions = 'TransactionConditions',
  AllowanceCharge = 'AllowanceCharge',
  DestinationCountry = 'DestinationCountry',
  TaxTotal = 'TaxTotal',
  QuotedMonetaryTotal = 'QuotedMonetaryTotal',
  QuotationLine = 'QuotationLine'
}

export const QuotationFieldMetaUBLExtensions = new FieldMeta<QuotationField>(
  QuotationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const QuotationFieldMetaUBLVersionID = new FieldMeta<QuotationField>(
  QuotationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const QuotationFieldMetaCustomizationID = new FieldMeta<QuotationField>(
  QuotationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const QuotationFieldMetaProfileID = new FieldMeta<QuotationField>(
  QuotationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the subset of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const QuotationFieldMetaProfileExecutionID = new FieldMeta<QuotationField>(
  QuotationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QuotationFieldMetaID = new FieldMeta<QuotationField>(
  QuotationField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QuotationFieldMetaCopyIndicator = new FieldMeta<QuotationField>(
  QuotationField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QuotationFieldMetaUUID = new FieldMeta<QuotationField>(
  QuotationField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QuotationFieldMetaIssueDate = new FieldMeta<QuotationField>(
  QuotationField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QuotationFieldMetaIssueTime = new FieldMeta<QuotationField>(
  QuotationField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QuotationFieldMetaNote = new FieldMeta<QuotationField>(
  QuotationField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QuotationFieldMetaPricingCurrencyCode = new FieldMeta<QuotationField>(
  QuotationField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Pricing Currency Code',
  CodeType.name,
  'A code signifying the currency used for all prices in the Quotation.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QuotationFieldMetaLineCountNumeric = new FieldMeta<QuotationField>(
  QuotationField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  NumericType.name,
  'The number of Quotation Lines in this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QuotationFieldMetaValidityPeriod = new FieldMeta<QuotationField>(
  QuotationField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'The period for which the Quotation is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QuotationFieldMetaRequestForQuotationDocumentReference = new FieldMeta<QuotationField>(
  QuotationField.RequestForQuotationDocumentReference,
  'RequestForQuotationDocumentReference',
  'Request For Quotation Document Reference',
  DocumentReferenceType.name,
  'A reference to the Request for Quotation associated with this Quotation.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QuotationFieldMetaAdditionalDocumentReference = new FieldMeta<QuotationField>(
  QuotationField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QuotationFieldMetaContract = new FieldMeta<QuotationField>(
  QuotationField.Contract,
  'Contract',
  'Contract',
  ContractType.name,
  'A contract associated with this Quotation.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QuotationFieldMetaSignature = new FieldMeta<QuotationField>(
  QuotationField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QuotationFieldMetaSellerSupplierParty = new FieldMeta<QuotationField>(
  QuotationField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const QuotationFieldMetaBuyerCustomerParty = new FieldMeta<QuotationField>(
  QuotationField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'Association to the Buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QuotationFieldMetaOriginatorCustomerParty = new FieldMeta<QuotationField>(
  QuotationField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Originator Customer Party',
  CustomerPartyType.name,
  'The originator.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QuotationFieldMetaDelivery = new FieldMeta<QuotationField>(
  QuotationField.Delivery,
  'Delivery',
  'Delivery',
  DeliveryType.name,
  'A delivery associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QuotationFieldMetaDeliveryTerms = new FieldMeta<QuotationField>(
  QuotationField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  DeliveryTermsType.name,
  'A set of delivery terms associated with this document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QuotationFieldMetaPaymentMeans = new FieldMeta<QuotationField>(
  QuotationField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  PaymentMeansType.name,
  'Expected means of payment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QuotationFieldMetaTransactionConditions = new FieldMeta<QuotationField>(
  QuotationField.TransactionConditions,
  'TransactionConditions',
  'Transaction Conditions',
  TransactionConditionsType.name,
  'A specification of purchasing, sales, or payment conditions applying to Orders related to this Quotation.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QuotationFieldMetaAllowanceCharge = new FieldMeta<QuotationField>(
  QuotationField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'A discount or charge that applies to a price component.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QuotationFieldMetaDestinationCountry = new FieldMeta<QuotationField>(
  QuotationField.DestinationCountry,
  'DestinationCountry',
  'Destination Country',
  CountryType.name,
  'The country of destination of potential orders (for customs purposes).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QuotationFieldMetaTaxTotal = new FieldMeta<QuotationField>(
  QuotationField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'The total amount of a specific type of tax.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QuotationFieldMetaQuotedMonetaryTotal = new FieldMeta<QuotationField>(
  QuotationField.QuotedMonetaryTotal,
  'QuotedMonetaryTotal',
  'Quoted Monetary Total',
  MonetaryTotalType.name,
  'The total amount of the Quotation.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const QuotationFieldMetaQuotationLine = new FieldMeta<QuotationField>(
  QuotationField.QuotationLine,
  'QuotationLine',
  'Quotation Line',
  QuotationLineType.name,
  'A line quoting a cost for one kind of item.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class QuotationFieldMeta {
  public static readonly UBLExtensions = QuotationFieldMetaUBLExtensions
  public static readonly UBLVersionID = QuotationFieldMetaUBLVersionID
  public static readonly CustomizationID = QuotationFieldMetaCustomizationID
  public static readonly ProfileID = QuotationFieldMetaProfileID
  public static readonly ProfileExecutionID = QuotationFieldMetaProfileExecutionID
  public static readonly ID = QuotationFieldMetaID
  public static readonly CopyIndicator = QuotationFieldMetaCopyIndicator
  public static readonly UUID = QuotationFieldMetaUUID
  public static readonly IssueDate = QuotationFieldMetaIssueDate
  public static readonly IssueTime = QuotationFieldMetaIssueTime
  public static readonly Note = QuotationFieldMetaNote
  public static readonly PricingCurrencyCode = QuotationFieldMetaPricingCurrencyCode
  public static readonly LineCountNumeric = QuotationFieldMetaLineCountNumeric
  public static readonly ValidityPeriod = QuotationFieldMetaValidityPeriod
  public static readonly RequestForQuotationDocumentReference = QuotationFieldMetaRequestForQuotationDocumentReference
  public static readonly AdditionalDocumentReference = QuotationFieldMetaAdditionalDocumentReference
  public static readonly Contract = QuotationFieldMetaContract
  public static readonly Signature = QuotationFieldMetaSignature
  public static readonly SellerSupplierParty = QuotationFieldMetaSellerSupplierParty
  public static readonly BuyerCustomerParty = QuotationFieldMetaBuyerCustomerParty
  public static readonly OriginatorCustomerParty = QuotationFieldMetaOriginatorCustomerParty
  public static readonly Delivery = QuotationFieldMetaDelivery
  public static readonly DeliveryTerms = QuotationFieldMetaDeliveryTerms
  public static readonly PaymentMeans = QuotationFieldMetaPaymentMeans
  public static readonly TransactionConditions = QuotationFieldMetaTransactionConditions
  public static readonly AllowanceCharge = QuotationFieldMetaAllowanceCharge
  public static readonly DestinationCountry = QuotationFieldMetaDestinationCountry
  public static readonly TaxTotal = QuotationFieldMetaTaxTotal
  public static readonly QuotedMonetaryTotal = QuotationFieldMetaQuotedMonetaryTotal
  public static readonly QuotationLine = QuotationFieldMetaQuotationLine
}

export const QuotationFieldMap = new Map([
  [QuotationField.UBLExtensions, QuotationFieldMetaUBLExtensions],
  [QuotationField.UBLVersionID, QuotationFieldMetaUBLVersionID],
  [QuotationField.CustomizationID, QuotationFieldMetaCustomizationID],
  [QuotationField.ProfileID, QuotationFieldMetaProfileID],
  [QuotationField.ProfileExecutionID, QuotationFieldMetaProfileExecutionID],
  [QuotationField.ID, QuotationFieldMetaID],
  [QuotationField.CopyIndicator, QuotationFieldMetaCopyIndicator],
  [QuotationField.UUID, QuotationFieldMetaUUID],
  [QuotationField.IssueDate, QuotationFieldMetaIssueDate],
  [QuotationField.IssueTime, QuotationFieldMetaIssueTime],
  [QuotationField.Note, QuotationFieldMetaNote],
  [QuotationField.PricingCurrencyCode, QuotationFieldMetaPricingCurrencyCode],
  [QuotationField.LineCountNumeric, QuotationFieldMetaLineCountNumeric],
  [QuotationField.ValidityPeriod, QuotationFieldMetaValidityPeriod],
  [QuotationField.RequestForQuotationDocumentReference, QuotationFieldMetaRequestForQuotationDocumentReference],
  [QuotationField.AdditionalDocumentReference, QuotationFieldMetaAdditionalDocumentReference],
  [QuotationField.Contract, QuotationFieldMetaContract],
  [QuotationField.Signature, QuotationFieldMetaSignature],
  [QuotationField.SellerSupplierParty, QuotationFieldMetaSellerSupplierParty],
  [QuotationField.BuyerCustomerParty, QuotationFieldMetaBuyerCustomerParty],
  [QuotationField.OriginatorCustomerParty, QuotationFieldMetaOriginatorCustomerParty],
  [QuotationField.Delivery, QuotationFieldMetaDelivery],
  [QuotationField.DeliveryTerms, QuotationFieldMetaDeliveryTerms],
  [QuotationField.PaymentMeans, QuotationFieldMetaPaymentMeans],
  [QuotationField.TransactionConditions, QuotationFieldMetaTransactionConditions],
  [QuotationField.AllowanceCharge, QuotationFieldMetaAllowanceCharge],
  [QuotationField.DestinationCountry, QuotationFieldMetaDestinationCountry],
  [QuotationField.TaxTotal, QuotationFieldMetaTaxTotal],
  [QuotationField.QuotedMonetaryTotal, QuotationFieldMetaQuotedMonetaryTotal],
  [QuotationField.QuotationLine, QuotationFieldMetaQuotationLine]
])

export const QuotationType: Type<QuotationField> = {
  name: 'Quotation',
  label: 'Quotation',
  module: TypeModule.doc,
  definition: 'A document used to quote for the provision of goods and services.',
  fields: QuotationFieldMap,
}
