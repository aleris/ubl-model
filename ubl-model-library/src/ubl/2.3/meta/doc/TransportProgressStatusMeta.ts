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
import { TransportMeansType } from '../cac/TransportMeansMeta'
import { TransportScheduleType } from '../cac/TransportScheduleMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TransportProgressStatusField {
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
  StatusAvailableIndicator = 'StatusAvailableIndicator',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  SourceIssuerParty = 'SourceIssuerParty',
  TransportProgressStatusRequestDocumentReference = 'TransportProgressStatusRequestDocumentReference',
  TransportMeans = 'TransportMeans',
  TransportSchedule = 'TransportSchedule'
}

export const TransportProgressStatusFieldMetaUBLExtensions = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaUBLVersionID = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaCustomizationID = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaProfileID = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaProfileExecutionID = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaID = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaCopyIndicator = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaUUID = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaIssueDate = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaIssueTime = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaNote = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaStatusAvailableIndicator = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.StatusAvailableIndicator,
  'StatusAvailableIndicator',
  'Status Available Indicator',
  IndicatorType.name,
  'Indicates whether transport progress information is available.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaSignature = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaSenderParty = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending the Transport Progress Status.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaReceiverParty = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving the Transport Progress Status.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaSourceIssuerParty = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.SourceIssuerParty,
  'SourceIssuerParty',
  'Source Issuer Party',
  PartyType.name,
  'The party that is the source of the Transport Progress Status.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaTransportProgressStatusRequestDocumentReference = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.TransportProgressStatusRequestDocumentReference,
  'TransportProgressStatusRequestDocumentReference',
  'Transport Progress Status Request Document Reference',
  DocumentReferenceType.name,
  'A reference to the Transport Progress Status Request document to which this status report is a response.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaTransportMeans = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.TransportMeans,
  'TransportMeans',
  'Transport Means',
  TransportMeansType.name,
  'The transport means by which the current transport service is effectuated.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaTransportSchedule = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.TransportSchedule,
  'TransportSchedule',
  'Transport Schedule',
  TransportScheduleType.name,
  'Describes the status and schedule of the transport means operating the transport service as well as the current location of the transport means.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TransportProgressStatusFieldMeta {
  public static readonly UBLExtensions = TransportProgressStatusFieldMetaUBLExtensions
  public static readonly UBLVersionID = TransportProgressStatusFieldMetaUBLVersionID
  public static readonly CustomizationID = TransportProgressStatusFieldMetaCustomizationID
  public static readonly ProfileID = TransportProgressStatusFieldMetaProfileID
  public static readonly ProfileExecutionID = TransportProgressStatusFieldMetaProfileExecutionID
  public static readonly ID = TransportProgressStatusFieldMetaID
  public static readonly CopyIndicator = TransportProgressStatusFieldMetaCopyIndicator
  public static readonly UUID = TransportProgressStatusFieldMetaUUID
  public static readonly IssueDate = TransportProgressStatusFieldMetaIssueDate
  public static readonly IssueTime = TransportProgressStatusFieldMetaIssueTime
  public static readonly Note = TransportProgressStatusFieldMetaNote
  public static readonly StatusAvailableIndicator = TransportProgressStatusFieldMetaStatusAvailableIndicator
  public static readonly Signature = TransportProgressStatusFieldMetaSignature
  public static readonly SenderParty = TransportProgressStatusFieldMetaSenderParty
  public static readonly ReceiverParty = TransportProgressStatusFieldMetaReceiverParty
  public static readonly SourceIssuerParty = TransportProgressStatusFieldMetaSourceIssuerParty
  public static readonly TransportProgressStatusRequestDocumentReference = TransportProgressStatusFieldMetaTransportProgressStatusRequestDocumentReference
  public static readonly TransportMeans = TransportProgressStatusFieldMetaTransportMeans
  public static readonly TransportSchedule = TransportProgressStatusFieldMetaTransportSchedule
}

export const TransportProgressStatusFieldMap = new Map([
  [TransportProgressStatusField.UBLExtensions, TransportProgressStatusFieldMetaUBLExtensions],
  [TransportProgressStatusField.UBLVersionID, TransportProgressStatusFieldMetaUBLVersionID],
  [TransportProgressStatusField.CustomizationID, TransportProgressStatusFieldMetaCustomizationID],
  [TransportProgressStatusField.ProfileID, TransportProgressStatusFieldMetaProfileID],
  [TransportProgressStatusField.ProfileExecutionID, TransportProgressStatusFieldMetaProfileExecutionID],
  [TransportProgressStatusField.ID, TransportProgressStatusFieldMetaID],
  [TransportProgressStatusField.CopyIndicator, TransportProgressStatusFieldMetaCopyIndicator],
  [TransportProgressStatusField.UUID, TransportProgressStatusFieldMetaUUID],
  [TransportProgressStatusField.IssueDate, TransportProgressStatusFieldMetaIssueDate],
  [TransportProgressStatusField.IssueTime, TransportProgressStatusFieldMetaIssueTime],
  [TransportProgressStatusField.Note, TransportProgressStatusFieldMetaNote],
  [TransportProgressStatusField.StatusAvailableIndicator, TransportProgressStatusFieldMetaStatusAvailableIndicator],
  [TransportProgressStatusField.Signature, TransportProgressStatusFieldMetaSignature],
  [TransportProgressStatusField.SenderParty, TransportProgressStatusFieldMetaSenderParty],
  [TransportProgressStatusField.ReceiverParty, TransportProgressStatusFieldMetaReceiverParty],
  [TransportProgressStatusField.SourceIssuerParty, TransportProgressStatusFieldMetaSourceIssuerParty],
  [TransportProgressStatusField.TransportProgressStatusRequestDocumentReference, TransportProgressStatusFieldMetaTransportProgressStatusRequestDocumentReference],
  [TransportProgressStatusField.TransportMeans, TransportProgressStatusFieldMetaTransportMeans],
  [TransportProgressStatusField.TransportSchedule, TransportProgressStatusFieldMetaTransportSchedule]
])

export const TransportProgressStatusType: Type<TransportProgressStatusField> = {
  name: 'TransportProgressStatus',
  label: 'Transport Progress Status',
  module: TypeModule.doc,
  definition: 'A document sent from a Transportation Network Manager to a Transport Service Provider giving the status of the whereabouts and schedule of the transport means involved in a transport service.',
  fields: TransportProgressStatusFieldMap,
}
