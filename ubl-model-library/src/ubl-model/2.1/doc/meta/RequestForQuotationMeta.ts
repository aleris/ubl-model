import { FieldMeta } from '../../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaUBLVersionID = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const RequestForQuotationFieldMetaCustomizationID = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const RequestForQuotationFieldMetaProfileID = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const RequestForQuotationFieldMetaProfileExecutionID = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const RequestForQuotationFieldMetaID = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '0..1',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaCopyIndicator = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaUUID = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaIssueDate = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaIssueTime = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '1',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaSubmissionDueDate = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.SubmissionDueDate,
  'SubmissionDueDate',
  'Submission Due Date',
  'Date',
  'The due date for submission of the Quotation.',
  '0..1',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaNote = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaPricingCurrencyCode = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Currency Code',
  'Code',
  'The currency that the Seller should use to price the Quotation.',
  '0..1',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaLineCountNumeric = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of Request For Quotation Lines in this document.',
  '0..1',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaRequestedValidityPeriod = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.RequestedValidityPeriod,
  'RequestedValidityPeriod',
  'Period',
  'Period',
  'The validity period requested for this Quotation.',
  '0..1',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaCatalogueDocumentReference = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.CatalogueDocumentReference,
  'CatalogueDocumentReference',
  'Document Reference',
  'DocumentReference',
  'The Catalogue on which this Request for Quotation is based.',
  '0..1',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaAdditionalDocumentReference = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaSignature = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaOriginatorCustomerParty = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The originator.',
  '0..1',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaSellerSupplierParty = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller.',
  '1',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaBuyerCustomerParty = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The buyer.',
  '0..1',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaDelivery = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.Delivery,
  'Delivery',
  'Delivery',
  'Delivery',
  'A delivery associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaDeliveryTerms = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  'DeliveryTerms',
  'A set of delivery terms associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaDestinationCountry = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.DestinationCountry,
  'DestinationCountry',
  'Country',
  'Country',
  'The country of destination of potential orders (for customs purposes).',
  '0..1',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaContract = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.Contract,
  'Contract',
  'Contract',
  'Contract',
  'A contract associated with this Request for Quotation..',
  '0..n',
  undefined,
  undefined
)

export const RequestForQuotationFieldMetaRequestForQuotationLine = new FieldMeta<RequestForQuotationField>(
  RequestForQuotationField.RequestForQuotationLine,
  'RequestForQuotationLine',
  'Request For Quotation Line',
  'RequestForQuotationLine',
  'A line specifying a kind of item of sale.',
  '1..n',
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
