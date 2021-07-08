import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DocumentStatusRequestField {
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
  TrackingID = 'TrackingID',
  RequestedDocumentReference = 'RequestedDocumentReference',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty'
}

export const DocumentStatusRequestFieldMetaUBLExtensions = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaUBLVersionID = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const DocumentStatusRequestFieldMetaCustomizationID = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const DocumentStatusRequestFieldMetaProfileID = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const DocumentStatusRequestFieldMetaProfileExecutionID = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const DocumentStatusRequestFieldMetaID = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaCopyIndicator = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaUUID = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaIssueDate = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaIssueTime = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaNote = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaTrackingID = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.TrackingID,
  'TrackingID',
  'Tracking Identifier',
  IdentifierType.name,
  'An identifier for tracking status of the business process .',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaRequestedDocumentReference = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.RequestedDocumentReference,
  'RequestedDocumentReference',
  'Requested Document Reference',
  DocumentReferenceType.name,
  'The document about which status is requested.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaSignature = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaSenderParty = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaReceiverParty = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class DocumentStatusRequestFieldMeta {
  public static readonly UBLExtensions = DocumentStatusRequestFieldMetaUBLExtensions
  public static readonly UBLVersionID = DocumentStatusRequestFieldMetaUBLVersionID
  public static readonly CustomizationID = DocumentStatusRequestFieldMetaCustomizationID
  public static readonly ProfileID = DocumentStatusRequestFieldMetaProfileID
  public static readonly ProfileExecutionID = DocumentStatusRequestFieldMetaProfileExecutionID
  public static readonly ID = DocumentStatusRequestFieldMetaID
  public static readonly CopyIndicator = DocumentStatusRequestFieldMetaCopyIndicator
  public static readonly UUID = DocumentStatusRequestFieldMetaUUID
  public static readonly IssueDate = DocumentStatusRequestFieldMetaIssueDate
  public static readonly IssueTime = DocumentStatusRequestFieldMetaIssueTime
  public static readonly Note = DocumentStatusRequestFieldMetaNote
  public static readonly TrackingID = DocumentStatusRequestFieldMetaTrackingID
  public static readonly RequestedDocumentReference = DocumentStatusRequestFieldMetaRequestedDocumentReference
  public static readonly Signature = DocumentStatusRequestFieldMetaSignature
  public static readonly SenderParty = DocumentStatusRequestFieldMetaSenderParty
  public static readonly ReceiverParty = DocumentStatusRequestFieldMetaReceiverParty
}

export const DocumentStatusRequestFieldMap = new Map([
  [DocumentStatusRequestField.UBLExtensions, DocumentStatusRequestFieldMetaUBLExtensions],
  [DocumentStatusRequestField.UBLVersionID, DocumentStatusRequestFieldMetaUBLVersionID],
  [DocumentStatusRequestField.CustomizationID, DocumentStatusRequestFieldMetaCustomizationID],
  [DocumentStatusRequestField.ProfileID, DocumentStatusRequestFieldMetaProfileID],
  [DocumentStatusRequestField.ProfileExecutionID, DocumentStatusRequestFieldMetaProfileExecutionID],
  [DocumentStatusRequestField.ID, DocumentStatusRequestFieldMetaID],
  [DocumentStatusRequestField.CopyIndicator, DocumentStatusRequestFieldMetaCopyIndicator],
  [DocumentStatusRequestField.UUID, DocumentStatusRequestFieldMetaUUID],
  [DocumentStatusRequestField.IssueDate, DocumentStatusRequestFieldMetaIssueDate],
  [DocumentStatusRequestField.IssueTime, DocumentStatusRequestFieldMetaIssueTime],
  [DocumentStatusRequestField.Note, DocumentStatusRequestFieldMetaNote],
  [DocumentStatusRequestField.TrackingID, DocumentStatusRequestFieldMetaTrackingID],
  [DocumentStatusRequestField.RequestedDocumentReference, DocumentStatusRequestFieldMetaRequestedDocumentReference],
  [DocumentStatusRequestField.Signature, DocumentStatusRequestFieldMetaSignature],
  [DocumentStatusRequestField.SenderParty, DocumentStatusRequestFieldMetaSenderParty],
  [DocumentStatusRequestField.ReceiverParty, DocumentStatusRequestFieldMetaReceiverParty]
])

export const DocumentStatusRequestType: Type<DocumentStatusRequestField> = {
  name: 'DocumentStatusRequest',
  label: 'Document Status Request',
  module: TypeModule.doc,
  definition: 'A document used to request the status of a collaboration/process associated with a document.',
  fields: DocumentStatusRequestFieldMap,
}
