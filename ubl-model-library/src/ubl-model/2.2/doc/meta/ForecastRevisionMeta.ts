import { FieldMeta } from '../../FieldMeta'

export enum ForecastRevisionField {
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
  SequenceNumberID = 'SequenceNumberID',
  RevisionStatusCode = 'RevisionStatusCode',
  PurposeCode = 'PurposeCode',
  ForecastPeriod = 'ForecastPeriod',
  OriginalDocumentReference = 'OriginalDocumentReference',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  ForecastRevisionLine = 'ForecastRevisionLine'
}

export const ForecastRevisionFieldMetaUBLExtensions = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaUBLVersionID = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const ForecastRevisionFieldMetaCustomizationID = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const ForecastRevisionFieldMetaProfileID = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const ForecastRevisionFieldMetaProfileExecutionID = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const ForecastRevisionFieldMetaID = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'Forecast Revision Number',
  undefined
)

export const ForecastRevisionFieldMetaCopyIndicator = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaUUID = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaIssueDate = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'Forecast Date',
  undefined
)

export const ForecastRevisionFieldMetaIssueTime = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaNote = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaSequenceNumberID = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.SequenceNumberID,
  'SequenceNumberID',
  'Sequence Number',
  'Identifier',
  'A sequence number, to ensure the proper sequencing of revisions.',
  '1',
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaRevisionStatusCode = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.RevisionStatusCode,
  'RevisionStatusCode',
  'Status Code',
  'Code',
  'Indicates the revision status of this Forecast Revision.',
  '0..1',
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaPurposeCode = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.PurposeCode,
  'PurposeCode',
  'Purpose Code',
  'Code',
  'Indicates the purpose of the revision.',
  '0..1',
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaForecastPeriod = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.ForecastPeriod,
  'ForecastPeriod',
  'Period',
  'Period',
  'The period to which the Forecast applies.',
  '1',
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaOriginalDocumentReference = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.OriginalDocumentReference,
  'OriginalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'The Forecast document being revised.',
  '0..n',
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaSignature = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaSenderParty = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.SenderParty,
  'SenderParty',
  'Party',
  'Party',
  'The party sending this document.',
  '1',
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaReceiverParty = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving this document.',
  '1',
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaBuyerCustomerParty = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The buyer.',
  '0..1',
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaSellerSupplierParty = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller.',
  '0..1',
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaForecastRevisionLine = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.ForecastRevisionLine,
  'ForecastRevisionLine',
  'Forecast Revision Line',
  'ForecastRevisionLine',
  'A line that revises a line in the Forecast.',
  '1..n',
  undefined,
  undefined
)

export class ForecastRevisionFieldMeta {
  public static readonly UBLExtensions = ForecastRevisionFieldMetaUBLExtensions
  public static readonly UBLVersionID = ForecastRevisionFieldMetaUBLVersionID
  public static readonly CustomizationID = ForecastRevisionFieldMetaCustomizationID
  public static readonly ProfileID = ForecastRevisionFieldMetaProfileID
  public static readonly ProfileExecutionID = ForecastRevisionFieldMetaProfileExecutionID
  public static readonly ID = ForecastRevisionFieldMetaID
  public static readonly CopyIndicator = ForecastRevisionFieldMetaCopyIndicator
  public static readonly UUID = ForecastRevisionFieldMetaUUID
  public static readonly IssueDate = ForecastRevisionFieldMetaIssueDate
  public static readonly IssueTime = ForecastRevisionFieldMetaIssueTime
  public static readonly Note = ForecastRevisionFieldMetaNote
  public static readonly SequenceNumberID = ForecastRevisionFieldMetaSequenceNumberID
  public static readonly RevisionStatusCode = ForecastRevisionFieldMetaRevisionStatusCode
  public static readonly PurposeCode = ForecastRevisionFieldMetaPurposeCode
  public static readonly ForecastPeriod = ForecastRevisionFieldMetaForecastPeriod
  public static readonly OriginalDocumentReference = ForecastRevisionFieldMetaOriginalDocumentReference
  public static readonly Signature = ForecastRevisionFieldMetaSignature
  public static readonly SenderParty = ForecastRevisionFieldMetaSenderParty
  public static readonly ReceiverParty = ForecastRevisionFieldMetaReceiverParty
  public static readonly BuyerCustomerParty = ForecastRevisionFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = ForecastRevisionFieldMetaSellerSupplierParty
  public static readonly ForecastRevisionLine = ForecastRevisionFieldMetaForecastRevisionLine
}

export const ForecastRevisionFieldMap = new Map([
  [ForecastRevisionField.UBLExtensions, ForecastRevisionFieldMetaUBLExtensions],
  [ForecastRevisionField.UBLVersionID, ForecastRevisionFieldMetaUBLVersionID],
  [ForecastRevisionField.CustomizationID, ForecastRevisionFieldMetaCustomizationID],
  [ForecastRevisionField.ProfileID, ForecastRevisionFieldMetaProfileID],
  [ForecastRevisionField.ProfileExecutionID, ForecastRevisionFieldMetaProfileExecutionID],
  [ForecastRevisionField.ID, ForecastRevisionFieldMetaID],
  [ForecastRevisionField.CopyIndicator, ForecastRevisionFieldMetaCopyIndicator],
  [ForecastRevisionField.UUID, ForecastRevisionFieldMetaUUID],
  [ForecastRevisionField.IssueDate, ForecastRevisionFieldMetaIssueDate],
  [ForecastRevisionField.IssueTime, ForecastRevisionFieldMetaIssueTime],
  [ForecastRevisionField.Note, ForecastRevisionFieldMetaNote],
  [ForecastRevisionField.SequenceNumberID, ForecastRevisionFieldMetaSequenceNumberID],
  [ForecastRevisionField.RevisionStatusCode, ForecastRevisionFieldMetaRevisionStatusCode],
  [ForecastRevisionField.PurposeCode, ForecastRevisionFieldMetaPurposeCode],
  [ForecastRevisionField.ForecastPeriod, ForecastRevisionFieldMetaForecastPeriod],
  [ForecastRevisionField.OriginalDocumentReference, ForecastRevisionFieldMetaOriginalDocumentReference],
  [ForecastRevisionField.Signature, ForecastRevisionFieldMetaSignature],
  [ForecastRevisionField.SenderParty, ForecastRevisionFieldMetaSenderParty],
  [ForecastRevisionField.ReceiverParty, ForecastRevisionFieldMetaReceiverParty],
  [ForecastRevisionField.BuyerCustomerParty, ForecastRevisionFieldMetaBuyerCustomerParty],
  [ForecastRevisionField.SellerSupplierParty, ForecastRevisionFieldMetaSellerSupplierParty],
  [ForecastRevisionField.ForecastRevisionLine, ForecastRevisionFieldMetaForecastRevisionLine]
])
