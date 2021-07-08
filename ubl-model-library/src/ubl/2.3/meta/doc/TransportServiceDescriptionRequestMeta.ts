import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { TransportationServiceType } from '../cac/TransportationServiceMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TransportServiceDescriptionRequestField {
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
  ServiceInformationPreferenceCode = 'ServiceInformationPreferenceCode',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  TransportServiceProviderParty = 'TransportServiceProviderParty',
  TransportationService = 'TransportationService'
}

export const TransportServiceDescriptionRequestFieldMetaUBLExtensions = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaUBLVersionID = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaCustomizationID = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaProfileID = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaProfileExecutionID = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaID = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaCopyIndicator = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaUUID = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaIssueDate = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaIssueTime = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaNote = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaServiceInformationPreferenceCode = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.ServiceInformationPreferenceCode,
  'ServiceInformationPreferenceCode',
  'Service Information Preference Code',
  CodeType.name,
  'A code signifying the category of service information requested to be provided in the Transport Service Description.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaSignature = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaSenderParty = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending the Transport Service Description Request.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaReceiverParty = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving the Transport Service Description Request.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaTransportServiceProviderParty = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.TransportServiceProviderParty,
  'TransportServiceProviderParty',
  'Transport Service Provider Party',
  PartyType.name,
  'The transport service provider.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaTransportationService = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.TransportationService,
  'TransportationService',
  'Transportation Service',
  TransportationServiceType.name,
  'A transportation service about which information is requested.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class TransportServiceDescriptionRequestFieldMeta {
  public static readonly UBLExtensions = TransportServiceDescriptionRequestFieldMetaUBLExtensions
  public static readonly UBLVersionID = TransportServiceDescriptionRequestFieldMetaUBLVersionID
  public static readonly CustomizationID = TransportServiceDescriptionRequestFieldMetaCustomizationID
  public static readonly ProfileID = TransportServiceDescriptionRequestFieldMetaProfileID
  public static readonly ProfileExecutionID = TransportServiceDescriptionRequestFieldMetaProfileExecutionID
  public static readonly ID = TransportServiceDescriptionRequestFieldMetaID
  public static readonly CopyIndicator = TransportServiceDescriptionRequestFieldMetaCopyIndicator
  public static readonly UUID = TransportServiceDescriptionRequestFieldMetaUUID
  public static readonly IssueDate = TransportServiceDescriptionRequestFieldMetaIssueDate
  public static readonly IssueTime = TransportServiceDescriptionRequestFieldMetaIssueTime
  public static readonly Note = TransportServiceDescriptionRequestFieldMetaNote
  public static readonly ServiceInformationPreferenceCode = TransportServiceDescriptionRequestFieldMetaServiceInformationPreferenceCode
  public static readonly Signature = TransportServiceDescriptionRequestFieldMetaSignature
  public static readonly SenderParty = TransportServiceDescriptionRequestFieldMetaSenderParty
  public static readonly ReceiverParty = TransportServiceDescriptionRequestFieldMetaReceiverParty
  public static readonly TransportServiceProviderParty = TransportServiceDescriptionRequestFieldMetaTransportServiceProviderParty
  public static readonly TransportationService = TransportServiceDescriptionRequestFieldMetaTransportationService
}

export const TransportServiceDescriptionRequestFieldMap = new Map([
  [TransportServiceDescriptionRequestField.UBLExtensions, TransportServiceDescriptionRequestFieldMetaUBLExtensions],
  [TransportServiceDescriptionRequestField.UBLVersionID, TransportServiceDescriptionRequestFieldMetaUBLVersionID],
  [TransportServiceDescriptionRequestField.CustomizationID, TransportServiceDescriptionRequestFieldMetaCustomizationID],
  [TransportServiceDescriptionRequestField.ProfileID, TransportServiceDescriptionRequestFieldMetaProfileID],
  [TransportServiceDescriptionRequestField.ProfileExecutionID, TransportServiceDescriptionRequestFieldMetaProfileExecutionID],
  [TransportServiceDescriptionRequestField.ID, TransportServiceDescriptionRequestFieldMetaID],
  [TransportServiceDescriptionRequestField.CopyIndicator, TransportServiceDescriptionRequestFieldMetaCopyIndicator],
  [TransportServiceDescriptionRequestField.UUID, TransportServiceDescriptionRequestFieldMetaUUID],
  [TransportServiceDescriptionRequestField.IssueDate, TransportServiceDescriptionRequestFieldMetaIssueDate],
  [TransportServiceDescriptionRequestField.IssueTime, TransportServiceDescriptionRequestFieldMetaIssueTime],
  [TransportServiceDescriptionRequestField.Note, TransportServiceDescriptionRequestFieldMetaNote],
  [TransportServiceDescriptionRequestField.ServiceInformationPreferenceCode, TransportServiceDescriptionRequestFieldMetaServiceInformationPreferenceCode],
  [TransportServiceDescriptionRequestField.Signature, TransportServiceDescriptionRequestFieldMetaSignature],
  [TransportServiceDescriptionRequestField.SenderParty, TransportServiceDescriptionRequestFieldMetaSenderParty],
  [TransportServiceDescriptionRequestField.ReceiverParty, TransportServiceDescriptionRequestFieldMetaReceiverParty],
  [TransportServiceDescriptionRequestField.TransportServiceProviderParty, TransportServiceDescriptionRequestFieldMetaTransportServiceProviderParty],
  [TransportServiceDescriptionRequestField.TransportationService, TransportServiceDescriptionRequestFieldMetaTransportationService]
])

export const TransportServiceDescriptionRequestType: Type<TransportServiceDescriptionRequestField> = {
  name: 'TransportServiceDescriptionRequest',
  label: 'Transport Service Description Request',
  module: TypeModule.doc,
  definition: 'A document requesting a Transport Service Description, sent from a party with a transport demand (transport user) to a party providing transport services (transport service provider).',
  fields: TransportServiceDescriptionRequestFieldMap,
}
