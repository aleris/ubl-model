import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
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
import { NumericType } from '../cbc/NumericMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { RequestForQuotationLineType } from '../cac/RequestForQuotationLineMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum RequestForQuotationField {
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
  SubmissionDueDate = 'SubmissionDueDate',
  Note = 'Note',
  PricingCurrencyCode = 'PricingCurrencyCode',
  LineCountNumeric = 'LineCountNumeric',
  RequestedValidityPeriod = 'RequestedValidityPeriod',
  CatalogueDocumentReference = 'CatalogueDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature',
  OriginatorCustomerParty = 'OriginatorCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  Delivery = 'Delivery',
  DeliveryTerms = 'DeliveryTerms',
  DestinationCountry = 'DestinationCountry',
  Contract = 'Contract',
  RequestForQuotationLine = 'RequestForQuotationLine'
}

export const RequestForQuotationFieldMetaUBLExtensions = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaUBLVersionID = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const RequestForQuotationFieldMetaCustomizationID = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const RequestForQuotationFieldMetaProfileID = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const RequestForQuotationFieldMetaProfileExecutionID = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const RequestForQuotationFieldMetaID = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaCopyIndicator = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaUUID = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaIssueDate = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaIssueTime = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaSubmissionDueDate = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.SubmissionDueDate,
  'SubmissionDueDate',
  'Submission Due Date',
  DateType.name,
  'The due date for submission of the Quotation.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaNote = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaPricingCurrencyCode = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Pricing Currency Code',
  CodeType.name,
  'The currency that the Seller should use to price the Quotation.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaLineCountNumeric = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  NumericType.name,
  'The number of Request For Quotation Lines in this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaRequestedValidityPeriod = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.RequestedValidityPeriod,
  'RequestedValidityPeriod',
  'Requested Validity Period',
  PeriodType.name,
  'The validity period requested for this Quotation.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaCatalogueDocumentReference = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.CatalogueDocumentReference,
  'CatalogueDocumentReference',
  'Catalogue Document Reference',
  DocumentReferenceType.name,
  'The Catalogue on which this Request for Quotation is based.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaAdditionalDocumentReference = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaSignature = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaOriginatorCustomerParty = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Originator Customer Party',
  CustomerPartyType.name,
  'The originator.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaSellerSupplierParty = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaBuyerCustomerParty = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaDelivery = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.Delivery,
  'Delivery',
  'Delivery',
  DeliveryType.name,
  'A delivery associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaDeliveryTerms = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  DeliveryTermsType.name,
  'A set of delivery terms associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaDestinationCountry = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.DestinationCountry,
  'DestinationCountry',
  'Destination Country',
  CountryType.name,
  'The country of destination of potential orders (for customs purposes).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaContract = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.Contract,
  'Contract',
  'Contract',
  ContractType.name,
  'A contract associated with this Request for Quotation..',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaRequestForQuotationLine = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.RequestForQuotationLine,
  'RequestForQuotationLine',
  'Request For Quotation Line',
  RequestForQuotationLineType.name,
  'A line specifying a kind of item of sale.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class RequestForQuotationFieldMeta {
  public static readonly UBLExtensions = RequestForQuotationFieldMetaUBLExtensions
  public static readonly UBLVersionID = RequestForQuotationFieldMetaUBLVersionID
  public static readonly CustomizationID = RequestForQuotationFieldMetaCustomizationID
  public static readonly ProfileID = RequestForQuotationFieldMetaProfileID
  public static readonly ProfileExecutionID = RequestForQuotationFieldMetaProfileExecutionID
  public static readonly ID = RequestForQuotationFieldMetaID
  public static readonly CopyIndicator = RequestForQuotationFieldMetaCopyIndicator
  public static readonly UUID = RequestForQuotationFieldMetaUUID
  public static readonly IssueDate = RequestForQuotationFieldMetaIssueDate
  public static readonly IssueTime = RequestForQuotationFieldMetaIssueTime
  public static readonly SubmissionDueDate = RequestForQuotationFieldMetaSubmissionDueDate
  public static readonly Note = RequestForQuotationFieldMetaNote
  public static readonly PricingCurrencyCode = RequestForQuotationFieldMetaPricingCurrencyCode
  public static readonly LineCountNumeric = RequestForQuotationFieldMetaLineCountNumeric
  public static readonly RequestedValidityPeriod = RequestForQuotationFieldMetaRequestedValidityPeriod
  public static readonly CatalogueDocumentReference = RequestForQuotationFieldMetaCatalogueDocumentReference
  public static readonly AdditionalDocumentReference = RequestForQuotationFieldMetaAdditionalDocumentReference
  public static readonly Signature = RequestForQuotationFieldMetaSignature
  public static readonly OriginatorCustomerParty = RequestForQuotationFieldMetaOriginatorCustomerParty
  public static readonly SellerSupplierParty = RequestForQuotationFieldMetaSellerSupplierParty
  public static readonly BuyerCustomerParty = RequestForQuotationFieldMetaBuyerCustomerParty
  public static readonly Delivery = RequestForQuotationFieldMetaDelivery
  public static readonly DeliveryTerms = RequestForQuotationFieldMetaDeliveryTerms
  public static readonly DestinationCountry = RequestForQuotationFieldMetaDestinationCountry
  public static readonly Contract = RequestForQuotationFieldMetaContract
  public static readonly RequestForQuotationLine = RequestForQuotationFieldMetaRequestForQuotationLine
}

export const RequestForQuotationFieldMap = new Map([
  [RequestForQuotationField.UBLExtensions, RequestForQuotationFieldMetaUBLExtensions],
  [RequestForQuotationField.UBLVersionID, RequestForQuotationFieldMetaUBLVersionID],
  [RequestForQuotationField.CustomizationID, RequestForQuotationFieldMetaCustomizationID],
  [RequestForQuotationField.ProfileID, RequestForQuotationFieldMetaProfileID],
  [RequestForQuotationField.ProfileExecutionID, RequestForQuotationFieldMetaProfileExecutionID],
  [RequestForQuotationField.ID, RequestForQuotationFieldMetaID],
  [RequestForQuotationField.CopyIndicator, RequestForQuotationFieldMetaCopyIndicator],
  [RequestForQuotationField.UUID, RequestForQuotationFieldMetaUUID],
  [RequestForQuotationField.IssueDate, RequestForQuotationFieldMetaIssueDate],
  [RequestForQuotationField.IssueTime, RequestForQuotationFieldMetaIssueTime],
  [RequestForQuotationField.SubmissionDueDate, RequestForQuotationFieldMetaSubmissionDueDate],
  [RequestForQuotationField.Note, RequestForQuotationFieldMetaNote],
  [RequestForQuotationField.PricingCurrencyCode, RequestForQuotationFieldMetaPricingCurrencyCode],
  [RequestForQuotationField.LineCountNumeric, RequestForQuotationFieldMetaLineCountNumeric],
  [RequestForQuotationField.RequestedValidityPeriod, RequestForQuotationFieldMetaRequestedValidityPeriod],
  [RequestForQuotationField.CatalogueDocumentReference, RequestForQuotationFieldMetaCatalogueDocumentReference],
  [RequestForQuotationField.AdditionalDocumentReference, RequestForQuotationFieldMetaAdditionalDocumentReference],
  [RequestForQuotationField.Signature, RequestForQuotationFieldMetaSignature],
  [RequestForQuotationField.OriginatorCustomerParty, RequestForQuotationFieldMetaOriginatorCustomerParty],
  [RequestForQuotationField.SellerSupplierParty, RequestForQuotationFieldMetaSellerSupplierParty],
  [RequestForQuotationField.BuyerCustomerParty, RequestForQuotationFieldMetaBuyerCustomerParty],
  [RequestForQuotationField.Delivery, RequestForQuotationFieldMetaDelivery],
  [RequestForQuotationField.DeliveryTerms, RequestForQuotationFieldMetaDeliveryTerms],
  [RequestForQuotationField.DestinationCountry, RequestForQuotationFieldMetaDestinationCountry],
  [RequestForQuotationField.Contract, RequestForQuotationFieldMetaContract],
  [RequestForQuotationField.RequestForQuotationLine, RequestForQuotationFieldMetaRequestForQuotationLine]
])

export const RequestForQuotationType: Type<RequestForQuotationField> = {
  name: 'RequestForQuotation',
  label: 'Request For Quotation',
  module: TypeModule.doc,
  definition: 'A document used to request a Quotation for goods and services from a Seller.',
  fields: RequestForQuotationFieldMap,
}
