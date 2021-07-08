import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DateType } from '../cbc/DateMeta'
import { DocumentResponseType } from '../cac/DocumentResponseMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DocumentStatusField {
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
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  DocumentResponse = 'DocumentResponse',
  AdditionalDocumentResponse = 'AdditionalDocumentResponse'
}

export const DocumentStatusFieldMetaUBLExtensions = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DocumentStatusFieldMetaUBLVersionID = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const DocumentStatusFieldMetaCustomizationID = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const DocumentStatusFieldMetaProfileID = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const DocumentStatusFieldMetaProfileExecutionID = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const DocumentStatusFieldMetaID = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentStatusFieldMetaCopyIndicator = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentStatusFieldMetaUUID = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentStatusFieldMetaIssueDate = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentStatusFieldMetaIssueTime = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentStatusFieldMetaNote = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentStatusFieldMetaSignature = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DocumentStatusFieldMetaSenderParty = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DocumentStatusFieldMetaReceiverParty = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DocumentStatusFieldMetaDocumentResponse = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.DocumentResponse,
  'DocumentResponse',
  'Document Response',
  DocumentResponseType.name,
  'A response to the document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DocumentStatusFieldMetaAdditionalDocumentResponse = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.AdditionalDocumentResponse,
  'AdditionalDocumentResponse',
  'Additional Document Response',
  DocumentResponseType.name,
  'A document linked or related to the document for which the status was requested.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class DocumentStatusFieldMeta {
  public static readonly UBLExtensions = DocumentStatusFieldMetaUBLExtensions
  public static readonly UBLVersionID = DocumentStatusFieldMetaUBLVersionID
  public static readonly CustomizationID = DocumentStatusFieldMetaCustomizationID
  public static readonly ProfileID = DocumentStatusFieldMetaProfileID
  public static readonly ProfileExecutionID = DocumentStatusFieldMetaProfileExecutionID
  public static readonly ID = DocumentStatusFieldMetaID
  public static readonly CopyIndicator = DocumentStatusFieldMetaCopyIndicator
  public static readonly UUID = DocumentStatusFieldMetaUUID
  public static readonly IssueDate = DocumentStatusFieldMetaIssueDate
  public static readonly IssueTime = DocumentStatusFieldMetaIssueTime
  public static readonly Note = DocumentStatusFieldMetaNote
  public static readonly Signature = DocumentStatusFieldMetaSignature
  public static readonly SenderParty = DocumentStatusFieldMetaSenderParty
  public static readonly ReceiverParty = DocumentStatusFieldMetaReceiverParty
  public static readonly DocumentResponse = DocumentStatusFieldMetaDocumentResponse
  public static readonly AdditionalDocumentResponse = DocumentStatusFieldMetaAdditionalDocumentResponse
}

export const DocumentStatusFieldMap = new Map([
  [DocumentStatusField.UBLExtensions, DocumentStatusFieldMetaUBLExtensions],
  [DocumentStatusField.UBLVersionID, DocumentStatusFieldMetaUBLVersionID],
  [DocumentStatusField.CustomizationID, DocumentStatusFieldMetaCustomizationID],
  [DocumentStatusField.ProfileID, DocumentStatusFieldMetaProfileID],
  [DocumentStatusField.ProfileExecutionID, DocumentStatusFieldMetaProfileExecutionID],
  [DocumentStatusField.ID, DocumentStatusFieldMetaID],
  [DocumentStatusField.CopyIndicator, DocumentStatusFieldMetaCopyIndicator],
  [DocumentStatusField.UUID, DocumentStatusFieldMetaUUID],
  [DocumentStatusField.IssueDate, DocumentStatusFieldMetaIssueDate],
  [DocumentStatusField.IssueTime, DocumentStatusFieldMetaIssueTime],
  [DocumentStatusField.Note, DocumentStatusFieldMetaNote],
  [DocumentStatusField.Signature, DocumentStatusFieldMetaSignature],
  [DocumentStatusField.SenderParty, DocumentStatusFieldMetaSenderParty],
  [DocumentStatusField.ReceiverParty, DocumentStatusFieldMetaReceiverParty],
  [DocumentStatusField.DocumentResponse, DocumentStatusFieldMetaDocumentResponse],
  [DocumentStatusField.AdditionalDocumentResponse, DocumentStatusFieldMetaAdditionalDocumentResponse]
])

export const DocumentStatusType: Type<DocumentStatusField> = {
  name: 'DocumentStatus',
  label: 'Document Status',
  module: TypeModule.doc,
  definition: 'A document used to provide information about the status of a collaboration/process associated with a document.',
  fields: DocumentStatusFieldMap,
}
