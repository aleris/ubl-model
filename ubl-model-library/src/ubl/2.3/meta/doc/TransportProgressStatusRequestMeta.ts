import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { LocationType } from '../cac/LocationMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { TransportMeansType } from '../cac/TransportMeansMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TransportProgressStatusRequestField {
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
  TransportMeans = 'TransportMeans',
  StatusLocation = 'StatusLocation'
}

export const TransportProgressStatusRequestFieldMetaUBLExtensions = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaUBLVersionID = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaCustomizationID = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaProfileID = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaProfileExecutionID = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaID = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaCopyIndicator = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaUUID = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaIssueDate = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaIssueTime = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaNote = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaSignature = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaSenderParty = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending the Transport Progress Status Request.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaReceiverParty = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving the Transport Progress Status Request.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaTransportMeans = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.TransportMeans,
  'TransportMeans',
  'Transport Means',
  TransportMeansType.name,
  'The transport means by which the current transport service is effectuated and for which status is requested.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaStatusLocation = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.StatusLocation,
  'StatusLocation',
  'Status Location',
  LocationType.name,
  'A location for which status is requested.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TransportProgressStatusRequestFieldMeta {
  public static readonly UBLExtensions = TransportProgressStatusRequestFieldMetaUBLExtensions
  public static readonly UBLVersionID = TransportProgressStatusRequestFieldMetaUBLVersionID
  public static readonly CustomizationID = TransportProgressStatusRequestFieldMetaCustomizationID
  public static readonly ProfileID = TransportProgressStatusRequestFieldMetaProfileID
  public static readonly ProfileExecutionID = TransportProgressStatusRequestFieldMetaProfileExecutionID
  public static readonly ID = TransportProgressStatusRequestFieldMetaID
  public static readonly CopyIndicator = TransportProgressStatusRequestFieldMetaCopyIndicator
  public static readonly UUID = TransportProgressStatusRequestFieldMetaUUID
  public static readonly IssueDate = TransportProgressStatusRequestFieldMetaIssueDate
  public static readonly IssueTime = TransportProgressStatusRequestFieldMetaIssueTime
  public static readonly Note = TransportProgressStatusRequestFieldMetaNote
  public static readonly Signature = TransportProgressStatusRequestFieldMetaSignature
  public static readonly SenderParty = TransportProgressStatusRequestFieldMetaSenderParty
  public static readonly ReceiverParty = TransportProgressStatusRequestFieldMetaReceiverParty
  public static readonly TransportMeans = TransportProgressStatusRequestFieldMetaTransportMeans
  public static readonly StatusLocation = TransportProgressStatusRequestFieldMetaStatusLocation
}

export const TransportProgressStatusRequestFieldMap = new Map([
  [TransportProgressStatusRequestField.UBLExtensions, TransportProgressStatusRequestFieldMetaUBLExtensions],
  [TransportProgressStatusRequestField.UBLVersionID, TransportProgressStatusRequestFieldMetaUBLVersionID],
  [TransportProgressStatusRequestField.CustomizationID, TransportProgressStatusRequestFieldMetaCustomizationID],
  [TransportProgressStatusRequestField.ProfileID, TransportProgressStatusRequestFieldMetaProfileID],
  [TransportProgressStatusRequestField.ProfileExecutionID, TransportProgressStatusRequestFieldMetaProfileExecutionID],
  [TransportProgressStatusRequestField.ID, TransportProgressStatusRequestFieldMetaID],
  [TransportProgressStatusRequestField.CopyIndicator, TransportProgressStatusRequestFieldMetaCopyIndicator],
  [TransportProgressStatusRequestField.UUID, TransportProgressStatusRequestFieldMetaUUID],
  [TransportProgressStatusRequestField.IssueDate, TransportProgressStatusRequestFieldMetaIssueDate],
  [TransportProgressStatusRequestField.IssueTime, TransportProgressStatusRequestFieldMetaIssueTime],
  [TransportProgressStatusRequestField.Note, TransportProgressStatusRequestFieldMetaNote],
  [TransportProgressStatusRequestField.Signature, TransportProgressStatusRequestFieldMetaSignature],
  [TransportProgressStatusRequestField.SenderParty, TransportProgressStatusRequestFieldMetaSenderParty],
  [TransportProgressStatusRequestField.ReceiverParty, TransportProgressStatusRequestFieldMetaReceiverParty],
  [TransportProgressStatusRequestField.TransportMeans, TransportProgressStatusRequestFieldMetaTransportMeans],
  [TransportProgressStatusRequestField.StatusLocation, TransportProgressStatusRequestFieldMetaStatusLocation]
])

export const TransportProgressStatusRequestType: Type<TransportProgressStatusRequestField> = {
  name: 'TransportProgressStatusRequest',
  label: 'Transport Progress Status Request',
  module: TypeModule.doc,
  definition: 'A document sent from a transport service provider to a transportation network manager requesting a Transport Progress Status.',
  fields: TransportProgressStatusRequestFieldMap,
}
