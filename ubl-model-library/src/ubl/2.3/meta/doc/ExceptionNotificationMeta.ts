import { FieldMeta } from '../FieldMeta'

export enum ExceptionNotificationField {
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
  ExceptionObservationPeriod = 'ExceptionObservationPeriod',
  DocumentReference = 'DocumentReference',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  ExceptionNotificationLine = 'ExceptionNotificationLine'
}

export const ExceptionNotificationFieldMetaUBLExtensions = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaUBLVersionID = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const ExceptionNotificationFieldMetaCustomizationID = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const ExceptionNotificationFieldMetaProfileID = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const ExceptionNotificationFieldMetaProfileExecutionID = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const ExceptionNotificationFieldMetaID = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  'Exception Notification Number',
  undefined
)

export const ExceptionNotificationFieldMetaCopyIndicator = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaUUID = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaIssueDate = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  'Exception Notification Date',
  undefined
)

export const ExceptionNotificationFieldMetaIssueTime = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaNote = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaExceptionObservationPeriod = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.ExceptionObservationPeriod,
  'ExceptionObservationPeriod',
  'Exception Observation Period',
  'Period',
  'The period of time during which the exceptions are observed.',
  '1',
  'cac',
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaDocumentReference = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to another document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaSignature = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaSenderParty = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.SenderParty,
  'SenderParty',
  'Sender Party',
  'Party',
  'The party sending this document.',
  '1',
  'cac',
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaReceiverParty = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  'Party',
  'The party receiving this document.',
  '1',
  'cac',
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaBuyerCustomerParty = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  'CustomerParty',
  'The buyer.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaSellerSupplierParty = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  'SupplierParty',
  'The seller.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaExceptionNotificationLine = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.ExceptionNotificationLine,
  'ExceptionNotificationLine',
  'Exception Notification Line',
  'ExceptionNotificationLine',
  'A line in the Exception Notification.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export class ExceptionNotificationFieldMeta {
  public static readonly UBLExtensions = ExceptionNotificationFieldMetaUBLExtensions
  public static readonly UBLVersionID = ExceptionNotificationFieldMetaUBLVersionID
  public static readonly CustomizationID = ExceptionNotificationFieldMetaCustomizationID
  public static readonly ProfileID = ExceptionNotificationFieldMetaProfileID
  public static readonly ProfileExecutionID = ExceptionNotificationFieldMetaProfileExecutionID
  public static readonly ID = ExceptionNotificationFieldMetaID
  public static readonly CopyIndicator = ExceptionNotificationFieldMetaCopyIndicator
  public static readonly UUID = ExceptionNotificationFieldMetaUUID
  public static readonly IssueDate = ExceptionNotificationFieldMetaIssueDate
  public static readonly IssueTime = ExceptionNotificationFieldMetaIssueTime
  public static readonly Note = ExceptionNotificationFieldMetaNote
  public static readonly ExceptionObservationPeriod = ExceptionNotificationFieldMetaExceptionObservationPeriod
  public static readonly DocumentReference = ExceptionNotificationFieldMetaDocumentReference
  public static readonly Signature = ExceptionNotificationFieldMetaSignature
  public static readonly SenderParty = ExceptionNotificationFieldMetaSenderParty
  public static readonly ReceiverParty = ExceptionNotificationFieldMetaReceiverParty
  public static readonly BuyerCustomerParty = ExceptionNotificationFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = ExceptionNotificationFieldMetaSellerSupplierParty
  public static readonly ExceptionNotificationLine = ExceptionNotificationFieldMetaExceptionNotificationLine
}

export const ExceptionNotificationFieldMap = new Map([
  [ExceptionNotificationField.UBLExtensions, ExceptionNotificationFieldMetaUBLExtensions],
  [ExceptionNotificationField.UBLVersionID, ExceptionNotificationFieldMetaUBLVersionID],
  [ExceptionNotificationField.CustomizationID, ExceptionNotificationFieldMetaCustomizationID],
  [ExceptionNotificationField.ProfileID, ExceptionNotificationFieldMetaProfileID],
  [ExceptionNotificationField.ProfileExecutionID, ExceptionNotificationFieldMetaProfileExecutionID],
  [ExceptionNotificationField.ID, ExceptionNotificationFieldMetaID],
  [ExceptionNotificationField.CopyIndicator, ExceptionNotificationFieldMetaCopyIndicator],
  [ExceptionNotificationField.UUID, ExceptionNotificationFieldMetaUUID],
  [ExceptionNotificationField.IssueDate, ExceptionNotificationFieldMetaIssueDate],
  [ExceptionNotificationField.IssueTime, ExceptionNotificationFieldMetaIssueTime],
  [ExceptionNotificationField.Note, ExceptionNotificationFieldMetaNote],
  [ExceptionNotificationField.ExceptionObservationPeriod, ExceptionNotificationFieldMetaExceptionObservationPeriod],
  [ExceptionNotificationField.DocumentReference, ExceptionNotificationFieldMetaDocumentReference],
  [ExceptionNotificationField.Signature, ExceptionNotificationFieldMetaSignature],
  [ExceptionNotificationField.SenderParty, ExceptionNotificationFieldMetaSenderParty],
  [ExceptionNotificationField.ReceiverParty, ExceptionNotificationFieldMetaReceiverParty],
  [ExceptionNotificationField.BuyerCustomerParty, ExceptionNotificationFieldMetaBuyerCustomerParty],
  [ExceptionNotificationField.SellerSupplierParty, ExceptionNotificationFieldMetaSellerSupplierParty],
  [ExceptionNotificationField.ExceptionNotificationLine, ExceptionNotificationFieldMetaExceptionNotificationLine]
])
