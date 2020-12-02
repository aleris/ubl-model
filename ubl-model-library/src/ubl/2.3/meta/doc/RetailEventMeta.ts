import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const RetailEventFieldMetaUBLVersionID = new FieldMeta<RetailEventField>(
  RetailEventField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const RetailEventFieldMetaCustomizationID = new FieldMeta<RetailEventField>(
  RetailEventField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const RetailEventFieldMetaProfileID = new FieldMeta<RetailEventField>(
  RetailEventField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const RetailEventFieldMetaProfileExecutionID = new FieldMeta<RetailEventField>(
  RetailEventField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const RetailEventFieldMetaID = new FieldMeta<RetailEventField>(
  RetailEventField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  'Retail Event Number',
  undefined
)

export const RetailEventFieldMetaCopyIndicator = new FieldMeta<RetailEventField>(
  RetailEventField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RetailEventFieldMetaUUID = new FieldMeta<RetailEventField>(
  RetailEventField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RetailEventFieldMetaIssueDate = new FieldMeta<RetailEventField>(
  RetailEventField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '0..1',
  'cbc',
  'Retail Event Date',
  undefined
)

export const RetailEventFieldMetaIssueTime = new FieldMeta<RetailEventField>(
  RetailEventField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RetailEventFieldMetaNote = new FieldMeta<RetailEventField>(
  RetailEventField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const RetailEventFieldMetaRetailEventName = new FieldMeta<RetailEventField>(
  RetailEventField.RetailEventName,
  'RetailEventName',
  'Retail Event Name',
  'Text',
  'A title, theme, slogan, or other identifier for the event for use by trading partners.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RetailEventFieldMetaRetailEventStatusCode = new FieldMeta<RetailEventField>(
  RetailEventField.RetailEventStatusCode,
  'RetailEventStatusCode',
  'Retail Event Status Code',
  'Code',
  'Describes the logical state of the discrete activity affecting supply or demand in the supply chain',
  '1',
  'cbc',
  undefined,
  undefined
)

export const RetailEventFieldMetaSellerEventID = new FieldMeta<RetailEventField>(
  RetailEventField.SellerEventID,
  'SellerEventID',
  'Seller Event Identifier',
  'Identifier',
  'An event tracking identifier assigned by the seller.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RetailEventFieldMetaBuyerEventID = new FieldMeta<RetailEventField>(
  RetailEventField.BuyerEventID,
  'BuyerEventID',
  'Buyer Event Identifier',
  'Identifier',
  'An event tracking identifier assigned by the buyer.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RetailEventFieldMetaDescription = new FieldMeta<RetailEventField>(
  RetailEventField.Description,
  'Description',
  'Description',
  'Text',
  'Definition of the discrete activity affecting supply or demand in the supply chain',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const RetailEventFieldMetaPeriod = new FieldMeta<RetailEventField>(
  RetailEventField.Period,
  'Period',
  'Period',
  'Period',
  'The period during which the event takes place.',
  '1',
  'cac',
  undefined,
  undefined
)

export const RetailEventFieldMetaOriginalDocumentReference = new FieldMeta<RetailEventField>(
  RetailEventField.OriginalDocumentReference,
  'OriginalDocumentReference',
  'Original Document Reference',
  'DocumentReference',
  'A reference to a Forecast document associated with this event.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const RetailEventFieldMetaSignature = new FieldMeta<RetailEventField>(
  RetailEventField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const RetailEventFieldMetaSenderParty = new FieldMeta<RetailEventField>(
  RetailEventField.SenderParty,
  'SenderParty',
  'Sender Party',
  'Party',
  'The party sending this document.',
  '1',
  'cac',
  undefined,
  undefined
)

export const RetailEventFieldMetaReceiverParty = new FieldMeta<RetailEventField>(
  RetailEventField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  'Party',
  'The party receiving this document.',
  '1',
  'cac',
  undefined,
  undefined
)

export const RetailEventFieldMetaBuyerCustomerParty = new FieldMeta<RetailEventField>(
  RetailEventField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  'CustomerParty',
  'The buyer.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const RetailEventFieldMetaSellerSupplierParty = new FieldMeta<RetailEventField>(
  RetailEventField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  'SupplierParty',
  'The seller.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const RetailEventFieldMetaEventComment = new FieldMeta<RetailEventField>(
  RetailEventField.EventComment,
  'EventComment',
  'Event Comment',
  'EventComment',
  'A comment regarding the event.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const RetailEventFieldMetaPromotionalEvent = new FieldMeta<RetailEventField>(
  RetailEventField.PromotionalEvent,
  'PromotionalEvent',
  'Promotional Event',
  'PromotionalEvent',
  'The description of a promotional event associated with this event.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const RetailEventFieldMetaMiscellaneousEvent = new FieldMeta<RetailEventField>(
  RetailEventField.MiscellaneousEvent,
  'MiscellaneousEvent',
  'Miscellaneous Event',
  'MiscellaneousEvent',
  'A miscellaneous event associated with this event.',
  '0..1',
  'cac',
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
