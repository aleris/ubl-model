import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { ConsignmentType } from '../cac/ConsignmentMeta'
import { ContractType } from '../cac/ContractMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { LocationType } from '../cac/LocationMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { TransportationServiceType } from '../cac/TransportationServiceMeta'
import { TransportExecutionTermsType } from '../cac/TransportExecutionTermsMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TransportExecutionPlanField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  VersionID = 'VersionID',
  CopyIndicator = 'CopyIndicator',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  DocumentStatusCode = 'DocumentStatusCode',
  DocumentStatusReasonCode = 'DocumentStatusReasonCode',
  DocumentStatusReasonDescription = 'DocumentStatusReasonDescription',
  Note = 'Note',
  TransportUserRemarks = 'TransportUserRemarks',
  TransportServiceProviderRemarks = 'TransportServiceProviderRemarks',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  TransportUserParty = 'TransportUserParty',
  TransportServiceProviderParty = 'TransportServiceProviderParty',
  BillToParty = 'BillToParty',
  Signature = 'Signature',
  TransportExecutionPlanRequestDocumentReference = 'TransportExecutionPlanRequestDocumentReference',
  TransportExecutionPlanDocumentReference = 'TransportExecutionPlanDocumentReference',
  TransportServiceDescriptionDocumentReference = 'TransportServiceDescriptionDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  TransportContract = 'TransportContract',
  TransportServiceProviderResponseRequiredPeriod = 'TransportServiceProviderResponseRequiredPeriod',
  TransportUserResponseRequiredPeriod = 'TransportUserResponseRequiredPeriod',
  ValidityPeriod = 'ValidityPeriod',
  MainTransportationService = 'MainTransportationService',
  AdditionalTransportationService = 'AdditionalTransportationService',
  ServiceStartTimePeriod = 'ServiceStartTimePeriod',
  ServiceEndTimePeriod = 'ServiceEndTimePeriod',
  FromLocation = 'FromLocation',
  ToLocation = 'ToLocation',
  AtLocation = 'AtLocation',
  TransportExecutionTerms = 'TransportExecutionTerms',
  Consignment = 'Consignment'
}

export const TransportExecutionPlanFieldMetaUBLExtensions = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaUBLVersionID = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaCustomizationID = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaProfileID = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaProfileExecutionID = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaID = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaVersionID = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'Indicates the current version of the Transport Execution Plan.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.1'
)

export const TransportExecutionPlanFieldMetaCopyIndicator = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaUUID = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaIssueDate = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Transport Document Date',
  undefined
)

export const TransportExecutionPlanFieldMetaIssueTime = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaDocumentStatusCode = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.DocumentStatusCode,
  'DocumentStatusCode',
  'Document Status Code',
  CodeType.name,
  'A code signifying the status of the Transport Execution Plan (updated, cancelled, confirmed, etc.)',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaDocumentStatusReasonCode = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.DocumentStatusReasonCode,
  'DocumentStatusReasonCode',
  'Document Status Reason Code',
  CodeType.name,
  'A code signifying a reason associated with the status of a Transport Execution Plan.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaDocumentStatusReasonDescription = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.DocumentStatusReasonDescription,
  'DocumentStatusReasonDescription',
  'Document Status Reason Description',
  TextType.name,
  'A reason for the status assigned to the Transport Execution Plan, expressed in text.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  '123 Standard Chartered Tower'
)

export const TransportExecutionPlanFieldMetaNote = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaTransportUserRemarks = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.TransportUserRemarks,
  'TransportUserRemarks',
  'Transport User Remarks',
  TextType.name,
  'Remarks from the transport user regarding the transport operations referred to in the Transport Execution Plan.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaTransportServiceProviderRemarks = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.TransportServiceProviderRemarks,
  'TransportServiceProviderRemarks',
  'Transport Service Provider Remarks',
  TextType.name,
  'Remarks from the transport service provider regarding the transport operations referred to in the Transport Execution Plan.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaSenderParty = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this document (can be either the transport user or the transport service provider).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaReceiverParty = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this document (can be either the transport user or the transport service provider).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaTransportUserParty = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.TransportUserParty,
  'TransportUserParty',
  'Transport User Party',
  PartyType.name,
  'The party requesting the transport service from a transport service provider.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaTransportServiceProviderParty = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.TransportServiceProviderParty,
  'TransportServiceProviderParty',
  'Transport Service Provider Party',
  PartyType.name,
  'The party offering the transport service based upon a request from a transport user.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaBillToParty = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.BillToParty,
  'BillToParty',
  'Bill To Party',
  PartyType.name,
  'Describes the party that will pay for the transport service(s) provided in a Transport Execution Plan',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaSignature = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaTransportExecutionPlanRequestDocumentReference = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.TransportExecutionPlanRequestDocumentReference,
  'TransportExecutionPlanRequestDocumentReference',
  'Transport Execution Plan Request Document Reference',
  DocumentReferenceType.name,
  'A reference to a Transport Execution Plan Request.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaTransportExecutionPlanDocumentReference = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.TransportExecutionPlanDocumentReference,
  'TransportExecutionPlanDocumentReference',
  'Transport Execution Plan Document Reference',
  DocumentReferenceType.name,
  'A reference to an original Transport Execution Plan.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaTransportServiceDescriptionDocumentReference = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.TransportServiceDescriptionDocumentReference,
  'TransportServiceDescriptionDocumentReference',
  'Transport Service Description Document Reference',
  DocumentReferenceType.name,
  'A reference to the Transport Service Description, which is used by a transport service provider to announce transport services to transport users (buyers).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaAdditionalDocumentReference = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaTransportContract = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.TransportContract,
  'TransportContract',
  'Transport Contract',
  ContractType.name,
  'A contract related to the Transport Execution Plan.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaTransportServiceProviderResponseRequiredPeriod = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.TransportServiceProviderResponseRequiredPeriod,
  'TransportServiceProviderResponseRequiredPeriod',
  'Transport Service Provider Response Required Period',
  PeriodType.name,
  'Describes the deadline for when the Transport Service Provider will have to respond to a Transport Execution Plan .',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaTransportUserResponseRequiredPeriod = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.TransportUserResponseRequiredPeriod,
  'TransportUserResponseRequiredPeriod',
  'Transport User Response Required Period',
  PeriodType.name,
  'Describes the deadline for when the Transport User will have to respond to a Transport Execution Plan suggested by a Transport Service Provider.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaValidityPeriod = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'A period during which the Transport Execution Plan is valid.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaMainTransportationService = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.MainTransportationService,
  'MainTransportationService',
  'Main Transportation Service',
  TransportationServiceType.name,
  'Description of the main transportation service referenced in the Transport Execution Plan.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaAdditionalTransportationService = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.AdditionalTransportationService,
  'AdditionalTransportationService',
  'Additional Transportation Service',
  TransportationServiceType.name,
  'A description of an additional transportation service referenced in the Transport Execution Plan.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaServiceStartTimePeriod = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.ServiceStartTimePeriod,
  'ServiceStartTimePeriod',
  'Service Start Time Period',
  PeriodType.name,
  'The period within which the service must begin.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaServiceEndTimePeriod = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.ServiceEndTimePeriod,
  'ServiceEndTimePeriod',
  'Service End Time Period',
  PeriodType.name,
  'The period during which the service must be completed.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaFromLocation = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.FromLocation,
  'FromLocation',
  'From Location',
  LocationType.name,
  'The location of origin of the transport service referenced in the Transport Execution Plan.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaToLocation = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.ToLocation,
  'ToLocation',
  'To Location',
  LocationType.name,
  'The destination location for the transport service referenced in the Transport Execution Plan.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaAtLocation = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.AtLocation,
  'AtLocation',
  'At Location',
  LocationType.name,
  'The location of a transport service (e.g., terminal handling service) that does not require transport movement.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaTransportExecutionTerms = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.TransportExecutionTerms,
  'TransportExecutionTerms',
  'Transport Execution Terms',
  TransportExecutionTermsType.name,
  'A description of terms and conditions related to the Transport Execution Plan.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanFieldMetaConsignment = new FieldMeta<TransportExecutionPlanField>(
  TransportExecutionPlanField.Consignment,
  'Consignment',
  'Consignment',
  ConsignmentType.name,
  'A description of an identifiable collection of goods items to be transported between the consignor and the consignee. This information may be defined within a transport contract. A consignment may comprise more than one shipment (e.g., when consolidated by a freight forwarder).',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class TransportExecutionPlanFieldMeta {
  public static readonly UBLExtensions = TransportExecutionPlanFieldMetaUBLExtensions
  public static readonly UBLVersionID = TransportExecutionPlanFieldMetaUBLVersionID
  public static readonly CustomizationID = TransportExecutionPlanFieldMetaCustomizationID
  public static readonly ProfileID = TransportExecutionPlanFieldMetaProfileID
  public static readonly ProfileExecutionID = TransportExecutionPlanFieldMetaProfileExecutionID
  public static readonly ID = TransportExecutionPlanFieldMetaID
  public static readonly VersionID = TransportExecutionPlanFieldMetaVersionID
  public static readonly CopyIndicator = TransportExecutionPlanFieldMetaCopyIndicator
  public static readonly UUID = TransportExecutionPlanFieldMetaUUID
  public static readonly IssueDate = TransportExecutionPlanFieldMetaIssueDate
  public static readonly IssueTime = TransportExecutionPlanFieldMetaIssueTime
  public static readonly DocumentStatusCode = TransportExecutionPlanFieldMetaDocumentStatusCode
  public static readonly DocumentStatusReasonCode = TransportExecutionPlanFieldMetaDocumentStatusReasonCode
  public static readonly DocumentStatusReasonDescription = TransportExecutionPlanFieldMetaDocumentStatusReasonDescription
  public static readonly Note = TransportExecutionPlanFieldMetaNote
  public static readonly TransportUserRemarks = TransportExecutionPlanFieldMetaTransportUserRemarks
  public static readonly TransportServiceProviderRemarks = TransportExecutionPlanFieldMetaTransportServiceProviderRemarks
  public static readonly SenderParty = TransportExecutionPlanFieldMetaSenderParty
  public static readonly ReceiverParty = TransportExecutionPlanFieldMetaReceiverParty
  public static readonly TransportUserParty = TransportExecutionPlanFieldMetaTransportUserParty
  public static readonly TransportServiceProviderParty = TransportExecutionPlanFieldMetaTransportServiceProviderParty
  public static readonly BillToParty = TransportExecutionPlanFieldMetaBillToParty
  public static readonly Signature = TransportExecutionPlanFieldMetaSignature
  public static readonly TransportExecutionPlanRequestDocumentReference = TransportExecutionPlanFieldMetaTransportExecutionPlanRequestDocumentReference
  public static readonly TransportExecutionPlanDocumentReference = TransportExecutionPlanFieldMetaTransportExecutionPlanDocumentReference
  public static readonly TransportServiceDescriptionDocumentReference = TransportExecutionPlanFieldMetaTransportServiceDescriptionDocumentReference
  public static readonly AdditionalDocumentReference = TransportExecutionPlanFieldMetaAdditionalDocumentReference
  public static readonly TransportContract = TransportExecutionPlanFieldMetaTransportContract
  public static readonly TransportServiceProviderResponseRequiredPeriod = TransportExecutionPlanFieldMetaTransportServiceProviderResponseRequiredPeriod
  public static readonly TransportUserResponseRequiredPeriod = TransportExecutionPlanFieldMetaTransportUserResponseRequiredPeriod
  public static readonly ValidityPeriod = TransportExecutionPlanFieldMetaValidityPeriod
  public static readonly MainTransportationService = TransportExecutionPlanFieldMetaMainTransportationService
  public static readonly AdditionalTransportationService = TransportExecutionPlanFieldMetaAdditionalTransportationService
  public static readonly ServiceStartTimePeriod = TransportExecutionPlanFieldMetaServiceStartTimePeriod
  public static readonly ServiceEndTimePeriod = TransportExecutionPlanFieldMetaServiceEndTimePeriod
  public static readonly FromLocation = TransportExecutionPlanFieldMetaFromLocation
  public static readonly ToLocation = TransportExecutionPlanFieldMetaToLocation
  public static readonly AtLocation = TransportExecutionPlanFieldMetaAtLocation
  public static readonly TransportExecutionTerms = TransportExecutionPlanFieldMetaTransportExecutionTerms
  public static readonly Consignment = TransportExecutionPlanFieldMetaConsignment
}

export const TransportExecutionPlanFieldMap = new Map([
  [TransportExecutionPlanField.UBLExtensions, TransportExecutionPlanFieldMetaUBLExtensions],
  [TransportExecutionPlanField.UBLVersionID, TransportExecutionPlanFieldMetaUBLVersionID],
  [TransportExecutionPlanField.CustomizationID, TransportExecutionPlanFieldMetaCustomizationID],
  [TransportExecutionPlanField.ProfileID, TransportExecutionPlanFieldMetaProfileID],
  [TransportExecutionPlanField.ProfileExecutionID, TransportExecutionPlanFieldMetaProfileExecutionID],
  [TransportExecutionPlanField.ID, TransportExecutionPlanFieldMetaID],
  [TransportExecutionPlanField.VersionID, TransportExecutionPlanFieldMetaVersionID],
  [TransportExecutionPlanField.CopyIndicator, TransportExecutionPlanFieldMetaCopyIndicator],
  [TransportExecutionPlanField.UUID, TransportExecutionPlanFieldMetaUUID],
  [TransportExecutionPlanField.IssueDate, TransportExecutionPlanFieldMetaIssueDate],
  [TransportExecutionPlanField.IssueTime, TransportExecutionPlanFieldMetaIssueTime],
  [TransportExecutionPlanField.DocumentStatusCode, TransportExecutionPlanFieldMetaDocumentStatusCode],
  [TransportExecutionPlanField.DocumentStatusReasonCode, TransportExecutionPlanFieldMetaDocumentStatusReasonCode],
  [TransportExecutionPlanField.DocumentStatusReasonDescription, TransportExecutionPlanFieldMetaDocumentStatusReasonDescription],
  [TransportExecutionPlanField.Note, TransportExecutionPlanFieldMetaNote],
  [TransportExecutionPlanField.TransportUserRemarks, TransportExecutionPlanFieldMetaTransportUserRemarks],
  [TransportExecutionPlanField.TransportServiceProviderRemarks, TransportExecutionPlanFieldMetaTransportServiceProviderRemarks],
  [TransportExecutionPlanField.SenderParty, TransportExecutionPlanFieldMetaSenderParty],
  [TransportExecutionPlanField.ReceiverParty, TransportExecutionPlanFieldMetaReceiverParty],
  [TransportExecutionPlanField.TransportUserParty, TransportExecutionPlanFieldMetaTransportUserParty],
  [TransportExecutionPlanField.TransportServiceProviderParty, TransportExecutionPlanFieldMetaTransportServiceProviderParty],
  [TransportExecutionPlanField.BillToParty, TransportExecutionPlanFieldMetaBillToParty],
  [TransportExecutionPlanField.Signature, TransportExecutionPlanFieldMetaSignature],
  [TransportExecutionPlanField.TransportExecutionPlanRequestDocumentReference, TransportExecutionPlanFieldMetaTransportExecutionPlanRequestDocumentReference],
  [TransportExecutionPlanField.TransportExecutionPlanDocumentReference, TransportExecutionPlanFieldMetaTransportExecutionPlanDocumentReference],
  [TransportExecutionPlanField.TransportServiceDescriptionDocumentReference, TransportExecutionPlanFieldMetaTransportServiceDescriptionDocumentReference],
  [TransportExecutionPlanField.AdditionalDocumentReference, TransportExecutionPlanFieldMetaAdditionalDocumentReference],
  [TransportExecutionPlanField.TransportContract, TransportExecutionPlanFieldMetaTransportContract],
  [TransportExecutionPlanField.TransportServiceProviderResponseRequiredPeriod, TransportExecutionPlanFieldMetaTransportServiceProviderResponseRequiredPeriod],
  [TransportExecutionPlanField.TransportUserResponseRequiredPeriod, TransportExecutionPlanFieldMetaTransportUserResponseRequiredPeriod],
  [TransportExecutionPlanField.ValidityPeriod, TransportExecutionPlanFieldMetaValidityPeriod],
  [TransportExecutionPlanField.MainTransportationService, TransportExecutionPlanFieldMetaMainTransportationService],
  [TransportExecutionPlanField.AdditionalTransportationService, TransportExecutionPlanFieldMetaAdditionalTransportationService],
  [TransportExecutionPlanField.ServiceStartTimePeriod, TransportExecutionPlanFieldMetaServiceStartTimePeriod],
  [TransportExecutionPlanField.ServiceEndTimePeriod, TransportExecutionPlanFieldMetaServiceEndTimePeriod],
  [TransportExecutionPlanField.FromLocation, TransportExecutionPlanFieldMetaFromLocation],
  [TransportExecutionPlanField.ToLocation, TransportExecutionPlanFieldMetaToLocation],
  [TransportExecutionPlanField.AtLocation, TransportExecutionPlanFieldMetaAtLocation],
  [TransportExecutionPlanField.TransportExecutionTerms, TransportExecutionPlanFieldMetaTransportExecutionTerms],
  [TransportExecutionPlanField.Consignment, TransportExecutionPlanFieldMetaConsignment]
])

export const TransportExecutionPlanType: Type<TransportExecutionPlanField> = {
  name: 'TransportExecutionPlan',
  label: 'Transport Execution Plan',
  module: TypeModule.doc,
  definition: 'A document used in the negotiation of a transport service between a transport user and a transport service provider.',
  fields: TransportExecutionPlanFieldMap,
}
