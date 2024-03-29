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

export enum TransportExecutionPlanRequestField {
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
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  TransportUserParty = 'TransportUserParty',
  TransportServiceProviderParty = 'TransportServiceProviderParty',
  PayeeParty = 'PayeeParty',
  Signature = 'Signature',
  TransportExecutionPlanDocumentReference = 'TransportExecutionPlanDocumentReference',
  TransportServiceDescriptionDocumentReference = 'TransportServiceDescriptionDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  TransportContract = 'TransportContract',
  TransportServiceProviderResponseDeadlinePeriod = 'TransportServiceProviderResponseDeadlinePeriod',
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

export const TransportExecutionPlanRequestFieldMetaUBLExtensions = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaUBLVersionID = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaCustomizationID = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaProfileID = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaProfileExecutionID = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaID = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaVersionID = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'An identifier for the current version of the Transport Execution Plan Request.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.1'
)

export const TransportExecutionPlanRequestFieldMetaCopyIndicator = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaUUID = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaIssueDate = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Transport Document Date',
  undefined
)

export const TransportExecutionPlanRequestFieldMetaIssueTime = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaDocumentStatusCode = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.DocumentStatusCode,
  'DocumentStatusCode',
  'Document Status Code',
  CodeType.name,
  'A code signifying the status of the Transport Execution Plan Request.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaDocumentStatusReasonCode = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.DocumentStatusReasonCode,
  'DocumentStatusReasonCode',
  'Document Status Reason Code',
  CodeType.name,
  'A code signifying a reason associated with the status of the Transport Execution Plan Request.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaDocumentStatusReasonDescription = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.DocumentStatusReasonDescription,
  'DocumentStatusReasonDescription',
  'Document Status Reason Description',
  TextType.name,
  'A reason associated with the status of the Transport Execution Plan Request.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  '123 Standard Chartered Tower'
)

export const TransportExecutionPlanRequestFieldMetaNote = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaTransportUserRemarks = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.TransportUserRemarks,
  'TransportUserRemarks',
  'Transport User Remarks',
  TextType.name,
  'Remarks from the transport user regarding the transport operations referenced in the Transport Execution Plan Request.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaSenderParty = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending the Transport Execution Plan Request.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaReceiverParty = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving the Transport Execution Plan Request.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaTransportUserParty = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.TransportUserParty,
  'TransportUserParty',
  'Transport User Party',
  PartyType.name,
  'The party requesting the transport services referenced in the Transport Execution Plan Request.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaTransportServiceProviderParty = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.TransportServiceProviderParty,
  'TransportServiceProviderParty',
  'Transport Service Provider Party',
  PartyType.name,
  'The party providing the transport services referenced in the Transport Execution Plan Request.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaPayeeParty = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.PayeeParty,
  'PayeeParty',
  'Payee Party',
  PartyType.name,
  'The party that will pay for the transport service(s) referred to in a Transport Execution Plan.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaSignature = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaTransportExecutionPlanDocumentReference = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.TransportExecutionPlanDocumentReference,
  'TransportExecutionPlanDocumentReference',
  'Transport Execution Plan Document Reference',
  DocumentReferenceType.name,
  'A reference to an original Transport Execution Plan Document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaTransportServiceDescriptionDocumentReference = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.TransportServiceDescriptionDocumentReference,
  'TransportServiceDescriptionDocumentReference',
  'Transport Service Description Document Reference',
  DocumentReferenceType.name,
  'A reference to the Transport Service Description, which is used by a transport service provider to announce transport services to transport users (buyers).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaAdditionalDocumentReference = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaTransportContract = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.TransportContract,
  'TransportContract',
  'Transport Contract',
  ContractType.name,
  'A potential contract related to the Transport Execution Plan Request.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaTransportServiceProviderResponseDeadlinePeriod = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.TransportServiceProviderResponseDeadlinePeriod,
  'TransportServiceProviderResponseDeadlinePeriod',
  'Transport Service Provider Response Deadline Period',
  PeriodType.name,
  'A deadline for a response from the Transport Service Provider to this Transport Execution Plan Request.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaMainTransportationService = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.MainTransportationService,
  'MainTransportationService',
  'Main Transportation Service',
  TransportationServiceType.name,
  'A description of the main transportation service referenced in the Transport Execution Plan Request.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaAdditionalTransportationService = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.AdditionalTransportationService,
  'AdditionalTransportationService',
  'Additional Transportation Service',
  TransportationServiceType.name,
  'A description of an additional transportation service referenced in the Transport Execution Plan Request.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaServiceStartTimePeriod = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.ServiceStartTimePeriod,
  'ServiceStartTimePeriod',
  'Service Start Time Period',
  PeriodType.name,
  'The period within which the services referred to in the Transport Execution Plan Request must begin.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaServiceEndTimePeriod = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.ServiceEndTimePeriod,
  'ServiceEndTimePeriod',
  'Service End Time Period',
  PeriodType.name,
  'The period during which the services referred to in the Transport Execution Plan Request must be completed.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaFromLocation = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.FromLocation,
  'FromLocation',
  'From Location',
  LocationType.name,
  'The location of origin of the transport service referenced in the Transport Execution Plan Request.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaToLocation = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.ToLocation,
  'ToLocation',
  'To Location',
  LocationType.name,
  'The destination location for the transport service referenced in the Transport Execution Plan Request.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaAtLocation = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.AtLocation,
  'AtLocation',
  'At Location',
  LocationType.name,
  'The location of a transport service (e.g., terminal handling service) that does not require transport movement.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaTransportExecutionTerms = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.TransportExecutionTerms,
  'TransportExecutionTerms',
  'Transport Execution Terms',
  TransportExecutionTermsType.name,
  'A description of terms and conditions related to the Transport Execution Plan Request.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaConsignment = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.Consignment,
  'Consignment',
  'Consignment',
  ConsignmentType.name,
  'A description of an identifiable collection of goods items to be transported between the consignor and the consignee. This information may be defined within a transport contract. A consignment may comprise more than one shipment (e.g., when consolidated by a freight forwarder).',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class TransportExecutionPlanRequestFieldMeta {
  public static readonly UBLExtensions = TransportExecutionPlanRequestFieldMetaUBLExtensions
  public static readonly UBLVersionID = TransportExecutionPlanRequestFieldMetaUBLVersionID
  public static readonly CustomizationID = TransportExecutionPlanRequestFieldMetaCustomizationID
  public static readonly ProfileID = TransportExecutionPlanRequestFieldMetaProfileID
  public static readonly ProfileExecutionID = TransportExecutionPlanRequestFieldMetaProfileExecutionID
  public static readonly ID = TransportExecutionPlanRequestFieldMetaID
  public static readonly VersionID = TransportExecutionPlanRequestFieldMetaVersionID
  public static readonly CopyIndicator = TransportExecutionPlanRequestFieldMetaCopyIndicator
  public static readonly UUID = TransportExecutionPlanRequestFieldMetaUUID
  public static readonly IssueDate = TransportExecutionPlanRequestFieldMetaIssueDate
  public static readonly IssueTime = TransportExecutionPlanRequestFieldMetaIssueTime
  public static readonly DocumentStatusCode = TransportExecutionPlanRequestFieldMetaDocumentStatusCode
  public static readonly DocumentStatusReasonCode = TransportExecutionPlanRequestFieldMetaDocumentStatusReasonCode
  public static readonly DocumentStatusReasonDescription = TransportExecutionPlanRequestFieldMetaDocumentStatusReasonDescription
  public static readonly Note = TransportExecutionPlanRequestFieldMetaNote
  public static readonly TransportUserRemarks = TransportExecutionPlanRequestFieldMetaTransportUserRemarks
  public static readonly SenderParty = TransportExecutionPlanRequestFieldMetaSenderParty
  public static readonly ReceiverParty = TransportExecutionPlanRequestFieldMetaReceiverParty
  public static readonly TransportUserParty = TransportExecutionPlanRequestFieldMetaTransportUserParty
  public static readonly TransportServiceProviderParty = TransportExecutionPlanRequestFieldMetaTransportServiceProviderParty
  public static readonly PayeeParty = TransportExecutionPlanRequestFieldMetaPayeeParty
  public static readonly Signature = TransportExecutionPlanRequestFieldMetaSignature
  public static readonly TransportExecutionPlanDocumentReference = TransportExecutionPlanRequestFieldMetaTransportExecutionPlanDocumentReference
  public static readonly TransportServiceDescriptionDocumentReference = TransportExecutionPlanRequestFieldMetaTransportServiceDescriptionDocumentReference
  public static readonly AdditionalDocumentReference = TransportExecutionPlanRequestFieldMetaAdditionalDocumentReference
  public static readonly TransportContract = TransportExecutionPlanRequestFieldMetaTransportContract
  public static readonly TransportServiceProviderResponseDeadlinePeriod = TransportExecutionPlanRequestFieldMetaTransportServiceProviderResponseDeadlinePeriod
  public static readonly MainTransportationService = TransportExecutionPlanRequestFieldMetaMainTransportationService
  public static readonly AdditionalTransportationService = TransportExecutionPlanRequestFieldMetaAdditionalTransportationService
  public static readonly ServiceStartTimePeriod = TransportExecutionPlanRequestFieldMetaServiceStartTimePeriod
  public static readonly ServiceEndTimePeriod = TransportExecutionPlanRequestFieldMetaServiceEndTimePeriod
  public static readonly FromLocation = TransportExecutionPlanRequestFieldMetaFromLocation
  public static readonly ToLocation = TransportExecutionPlanRequestFieldMetaToLocation
  public static readonly AtLocation = TransportExecutionPlanRequestFieldMetaAtLocation
  public static readonly TransportExecutionTerms = TransportExecutionPlanRequestFieldMetaTransportExecutionTerms
  public static readonly Consignment = TransportExecutionPlanRequestFieldMetaConsignment
}

export const TransportExecutionPlanRequestFieldMap = new Map([
  [TransportExecutionPlanRequestField.UBLExtensions, TransportExecutionPlanRequestFieldMetaUBLExtensions],
  [TransportExecutionPlanRequestField.UBLVersionID, TransportExecutionPlanRequestFieldMetaUBLVersionID],
  [TransportExecutionPlanRequestField.CustomizationID, TransportExecutionPlanRequestFieldMetaCustomizationID],
  [TransportExecutionPlanRequestField.ProfileID, TransportExecutionPlanRequestFieldMetaProfileID],
  [TransportExecutionPlanRequestField.ProfileExecutionID, TransportExecutionPlanRequestFieldMetaProfileExecutionID],
  [TransportExecutionPlanRequestField.ID, TransportExecutionPlanRequestFieldMetaID],
  [TransportExecutionPlanRequestField.VersionID, TransportExecutionPlanRequestFieldMetaVersionID],
  [TransportExecutionPlanRequestField.CopyIndicator, TransportExecutionPlanRequestFieldMetaCopyIndicator],
  [TransportExecutionPlanRequestField.UUID, TransportExecutionPlanRequestFieldMetaUUID],
  [TransportExecutionPlanRequestField.IssueDate, TransportExecutionPlanRequestFieldMetaIssueDate],
  [TransportExecutionPlanRequestField.IssueTime, TransportExecutionPlanRequestFieldMetaIssueTime],
  [TransportExecutionPlanRequestField.DocumentStatusCode, TransportExecutionPlanRequestFieldMetaDocumentStatusCode],
  [TransportExecutionPlanRequestField.DocumentStatusReasonCode, TransportExecutionPlanRequestFieldMetaDocumentStatusReasonCode],
  [TransportExecutionPlanRequestField.DocumentStatusReasonDescription, TransportExecutionPlanRequestFieldMetaDocumentStatusReasonDescription],
  [TransportExecutionPlanRequestField.Note, TransportExecutionPlanRequestFieldMetaNote],
  [TransportExecutionPlanRequestField.TransportUserRemarks, TransportExecutionPlanRequestFieldMetaTransportUserRemarks],
  [TransportExecutionPlanRequestField.SenderParty, TransportExecutionPlanRequestFieldMetaSenderParty],
  [TransportExecutionPlanRequestField.ReceiverParty, TransportExecutionPlanRequestFieldMetaReceiverParty],
  [TransportExecutionPlanRequestField.TransportUserParty, TransportExecutionPlanRequestFieldMetaTransportUserParty],
  [TransportExecutionPlanRequestField.TransportServiceProviderParty, TransportExecutionPlanRequestFieldMetaTransportServiceProviderParty],
  [TransportExecutionPlanRequestField.PayeeParty, TransportExecutionPlanRequestFieldMetaPayeeParty],
  [TransportExecutionPlanRequestField.Signature, TransportExecutionPlanRequestFieldMetaSignature],
  [TransportExecutionPlanRequestField.TransportExecutionPlanDocumentReference, TransportExecutionPlanRequestFieldMetaTransportExecutionPlanDocumentReference],
  [TransportExecutionPlanRequestField.TransportServiceDescriptionDocumentReference, TransportExecutionPlanRequestFieldMetaTransportServiceDescriptionDocumentReference],
  [TransportExecutionPlanRequestField.AdditionalDocumentReference, TransportExecutionPlanRequestFieldMetaAdditionalDocumentReference],
  [TransportExecutionPlanRequestField.TransportContract, TransportExecutionPlanRequestFieldMetaTransportContract],
  [TransportExecutionPlanRequestField.TransportServiceProviderResponseDeadlinePeriod, TransportExecutionPlanRequestFieldMetaTransportServiceProviderResponseDeadlinePeriod],
  [TransportExecutionPlanRequestField.MainTransportationService, TransportExecutionPlanRequestFieldMetaMainTransportationService],
  [TransportExecutionPlanRequestField.AdditionalTransportationService, TransportExecutionPlanRequestFieldMetaAdditionalTransportationService],
  [TransportExecutionPlanRequestField.ServiceStartTimePeriod, TransportExecutionPlanRequestFieldMetaServiceStartTimePeriod],
  [TransportExecutionPlanRequestField.ServiceEndTimePeriod, TransportExecutionPlanRequestFieldMetaServiceEndTimePeriod],
  [TransportExecutionPlanRequestField.FromLocation, TransportExecutionPlanRequestFieldMetaFromLocation],
  [TransportExecutionPlanRequestField.ToLocation, TransportExecutionPlanRequestFieldMetaToLocation],
  [TransportExecutionPlanRequestField.AtLocation, TransportExecutionPlanRequestFieldMetaAtLocation],
  [TransportExecutionPlanRequestField.TransportExecutionTerms, TransportExecutionPlanRequestFieldMetaTransportExecutionTerms],
  [TransportExecutionPlanRequestField.Consignment, TransportExecutionPlanRequestFieldMetaConsignment]
])

export const TransportExecutionPlanRequestType: Type<TransportExecutionPlanRequestField> = {
  name: 'TransportExecutionPlanRequest',
  label: 'Transport Execution Plan Request',
  module: TypeModule.doc,
  definition: 'A document sent by a transport user to request a transport service from a transport service provider.',
  fields: TransportExecutionPlanRequestFieldMap,
}
