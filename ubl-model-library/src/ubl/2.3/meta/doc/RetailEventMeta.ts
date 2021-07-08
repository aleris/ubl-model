import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { EventCommentType } from '../cac/EventCommentMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { MiscellaneousEventType } from '../cac/MiscellaneousEventMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { PromotionalEventType } from '../cac/PromotionalEventMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum RetailEventField {
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
  RetailEventName = 'RetailEventName',
  RetailEventStatusCode = 'RetailEventStatusCode',
  SellerEventID = 'SellerEventID',
  BuyerEventID = 'BuyerEventID',
  Description = 'Description',
  Period = 'Period',
  OriginalDocumentReference = 'OriginalDocumentReference',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  EventComment = 'EventComment',
  PromotionalEvent = 'PromotionalEvent',
  MiscellaneousEvent = 'MiscellaneousEvent'
}

export const RetailEventFieldMetaUBLExtensions = new FieldMeta<RetailEventField>(
  RetailEventField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const RetailEventFieldMetaUBLVersionID = new FieldMeta<RetailEventField>(
  RetailEventField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const RetailEventFieldMetaCustomizationID = new FieldMeta<RetailEventField>(
  RetailEventField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const RetailEventFieldMetaProfileID = new FieldMeta<RetailEventField>(
  RetailEventField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const RetailEventFieldMetaProfileExecutionID = new FieldMeta<RetailEventField>(
  RetailEventField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const RetailEventFieldMetaID = new FieldMeta<RetailEventField>(
  RetailEventField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Retail Event Number',
  undefined
)

export const RetailEventFieldMetaCopyIndicator = new FieldMeta<RetailEventField>(
  RetailEventField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RetailEventFieldMetaUUID = new FieldMeta<RetailEventField>(
  RetailEventField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RetailEventFieldMetaIssueDate = new FieldMeta<RetailEventField>(
  RetailEventField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Retail Event Date',
  undefined
)

export const RetailEventFieldMetaIssueTime = new FieldMeta<RetailEventField>(
  RetailEventField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RetailEventFieldMetaNote = new FieldMeta<RetailEventField>(
  RetailEventField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RetailEventFieldMetaRetailEventName = new FieldMeta<RetailEventField>(
  RetailEventField.RetailEventName,
  'RetailEventName',
  'Retail Event Name',
  TextType.name,
  'A title, theme, slogan, or other identifier for the event for use by trading partners.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RetailEventFieldMetaRetailEventStatusCode = new FieldMeta<RetailEventField>(
  RetailEventField.RetailEventStatusCode,
  'RetailEventStatusCode',
  'Retail Event Status Code',
  CodeType.name,
  'Describes the logical state of the discrete activity affecting supply or demand in the supply chain',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RetailEventFieldMetaSellerEventID = new FieldMeta<RetailEventField>(
  RetailEventField.SellerEventID,
  'SellerEventID',
  'Seller Event Identifier',
  IdentifierType.name,
  'An event tracking identifier assigned by the seller.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RetailEventFieldMetaBuyerEventID = new FieldMeta<RetailEventField>(
  RetailEventField.BuyerEventID,
  'BuyerEventID',
  'Buyer Event Identifier',
  IdentifierType.name,
  'An event tracking identifier assigned by the buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RetailEventFieldMetaDescription = new FieldMeta<RetailEventField>(
  RetailEventField.Description,
  'Description',
  'Description',
  TextType.name,
  'Definition of the discrete activity affecting supply or demand in the supply chain',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RetailEventFieldMetaPeriod = new FieldMeta<RetailEventField>(
  RetailEventField.Period,
  'Period',
  'Period',
  PeriodType.name,
  'The period during which the event takes place.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const RetailEventFieldMetaOriginalDocumentReference = new FieldMeta<RetailEventField>(
  RetailEventField.OriginalDocumentReference,
  'OriginalDocumentReference',
  'Original Document Reference',
  DocumentReferenceType.name,
  'A reference to a Forecast document associated with this event.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RetailEventFieldMetaSignature = new FieldMeta<RetailEventField>(
  RetailEventField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RetailEventFieldMetaSenderParty = new FieldMeta<RetailEventField>(
  RetailEventField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const RetailEventFieldMetaReceiverParty = new FieldMeta<RetailEventField>(
  RetailEventField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const RetailEventFieldMetaBuyerCustomerParty = new FieldMeta<RetailEventField>(
  RetailEventField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RetailEventFieldMetaSellerSupplierParty = new FieldMeta<RetailEventField>(
  RetailEventField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RetailEventFieldMetaEventComment = new FieldMeta<RetailEventField>(
  RetailEventField.EventComment,
  'EventComment',
  'Event Comment',
  EventCommentType.name,
  'A comment regarding the event.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RetailEventFieldMetaPromotionalEvent = new FieldMeta<RetailEventField>(
  RetailEventField.PromotionalEvent,
  'PromotionalEvent',
  'Promotional Event',
  PromotionalEventType.name,
  'The description of a promotional event associated with this event.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RetailEventFieldMetaMiscellaneousEvent = new FieldMeta<RetailEventField>(
  RetailEventField.MiscellaneousEvent,
  'MiscellaneousEvent',
  'Miscellaneous Event',
  MiscellaneousEventType.name,
  'A miscellaneous event associated with this event.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class RetailEventFieldMeta {
  public static readonly UBLExtensions = RetailEventFieldMetaUBLExtensions
  public static readonly UBLVersionID = RetailEventFieldMetaUBLVersionID
  public static readonly CustomizationID = RetailEventFieldMetaCustomizationID
  public static readonly ProfileID = RetailEventFieldMetaProfileID
  public static readonly ProfileExecutionID = RetailEventFieldMetaProfileExecutionID
  public static readonly ID = RetailEventFieldMetaID
  public static readonly CopyIndicator = RetailEventFieldMetaCopyIndicator
  public static readonly UUID = RetailEventFieldMetaUUID
  public static readonly IssueDate = RetailEventFieldMetaIssueDate
  public static readonly IssueTime = RetailEventFieldMetaIssueTime
  public static readonly Note = RetailEventFieldMetaNote
  public static readonly RetailEventName = RetailEventFieldMetaRetailEventName
  public static readonly RetailEventStatusCode = RetailEventFieldMetaRetailEventStatusCode
  public static readonly SellerEventID = RetailEventFieldMetaSellerEventID
  public static readonly BuyerEventID = RetailEventFieldMetaBuyerEventID
  public static readonly Description = RetailEventFieldMetaDescription
  public static readonly Period = RetailEventFieldMetaPeriod
  public static readonly OriginalDocumentReference = RetailEventFieldMetaOriginalDocumentReference
  public static readonly Signature = RetailEventFieldMetaSignature
  public static readonly SenderParty = RetailEventFieldMetaSenderParty
  public static readonly ReceiverParty = RetailEventFieldMetaReceiverParty
  public static readonly BuyerCustomerParty = RetailEventFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = RetailEventFieldMetaSellerSupplierParty
  public static readonly EventComment = RetailEventFieldMetaEventComment
  public static readonly PromotionalEvent = RetailEventFieldMetaPromotionalEvent
  public static readonly MiscellaneousEvent = RetailEventFieldMetaMiscellaneousEvent
}

export const RetailEventFieldMap = new Map([
  [RetailEventField.UBLExtensions, RetailEventFieldMetaUBLExtensions],
  [RetailEventField.UBLVersionID, RetailEventFieldMetaUBLVersionID],
  [RetailEventField.CustomizationID, RetailEventFieldMetaCustomizationID],
  [RetailEventField.ProfileID, RetailEventFieldMetaProfileID],
  [RetailEventField.ProfileExecutionID, RetailEventFieldMetaProfileExecutionID],
  [RetailEventField.ID, RetailEventFieldMetaID],
  [RetailEventField.CopyIndicator, RetailEventFieldMetaCopyIndicator],
  [RetailEventField.UUID, RetailEventFieldMetaUUID],
  [RetailEventField.IssueDate, RetailEventFieldMetaIssueDate],
  [RetailEventField.IssueTime, RetailEventFieldMetaIssueTime],
  [RetailEventField.Note, RetailEventFieldMetaNote],
  [RetailEventField.RetailEventName, RetailEventFieldMetaRetailEventName],
  [RetailEventField.RetailEventStatusCode, RetailEventFieldMetaRetailEventStatusCode],
  [RetailEventField.SellerEventID, RetailEventFieldMetaSellerEventID],
  [RetailEventField.BuyerEventID, RetailEventFieldMetaBuyerEventID],
  [RetailEventField.Description, RetailEventFieldMetaDescription],
  [RetailEventField.Period, RetailEventFieldMetaPeriod],
  [RetailEventField.OriginalDocumentReference, RetailEventFieldMetaOriginalDocumentReference],
  [RetailEventField.Signature, RetailEventFieldMetaSignature],
  [RetailEventField.SenderParty, RetailEventFieldMetaSenderParty],
  [RetailEventField.ReceiverParty, RetailEventFieldMetaReceiverParty],
  [RetailEventField.BuyerCustomerParty, RetailEventFieldMetaBuyerCustomerParty],
  [RetailEventField.SellerSupplierParty, RetailEventFieldMetaSellerSupplierParty],
  [RetailEventField.EventComment, RetailEventFieldMetaEventComment],
  [RetailEventField.PromotionalEvent, RetailEventFieldMetaPromotionalEvent],
  [RetailEventField.MiscellaneousEvent, RetailEventFieldMetaMiscellaneousEvent]
])

export const RetailEventType: Type<RetailEventField> = {
  name: 'RetailEvent',
  label: 'Retail Event',
  module: TypeModule.doc,
  definition: 'A document used to specify basic information about retail events (such as promotions, product introductions, and community or environmental events) that affect supply or demand.',
  fields: RetailEventFieldMap,
}
