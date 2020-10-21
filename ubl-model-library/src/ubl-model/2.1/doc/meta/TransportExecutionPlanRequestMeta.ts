import { FieldMeta } from '../../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaUBLVersionID = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaCustomizationID = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaProfileID = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaProfileExecutionID = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaID = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaVersionID = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'An identifier for the current version of the Transport Execution Plan Request.',
  '0..1',
  undefined,
  '1.1'
)

export const TransportExecutionPlanRequestFieldMetaCopyIndicator = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaUUID = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaIssueDate = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '0..1',
  'Transport Document Date',
  undefined
)

export const TransportExecutionPlanRequestFieldMetaIssueTime = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaDocumentStatusCode = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.DocumentStatusCode,
  'DocumentStatusCode',
  'Document Status Code',
  'Code',
  'A code signifying the status of the Transport Execution Plan Request.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaDocumentStatusReasonCode = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.DocumentStatusReasonCode,
  'DocumentStatusReasonCode',
  'Document Status Reason Code',
  'Code',
  'A code signifying a reason associated with the status of the Transport Execution Plan Request.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaDocumentStatusReasonDescription = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.DocumentStatusReasonDescription,
  'DocumentStatusReasonDescription',
  'Document Status Reason Description',
  'Text',
  'A reason associated with the status of the Transport Execution Plan Request.',
  '0..n',
  undefined,
  '123 Standard Chartered Tower'
)

export const TransportExecutionPlanRequestFieldMetaNote = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaTransportUserRemarks = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.TransportUserRemarks,
  'TransportUserRemarks',
  'Remarks',
  'Text',
  'Remarks from the transport user regarding the transport operations referenced in the Transport Execution Plan Request.',
  '0..n',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaSenderParty = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.SenderParty,
  'SenderParty',
  'Party',
  'Party',
  'The party sending the Transport Execution Plan Request.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaReceiverParty = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving the Transport Execution Plan Request.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaTransportUserParty = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.TransportUserParty,
  'TransportUserParty',
  'Party',
  'Party',
  'The party requesting the transport services referenced in the Transport Execution Plan Request.',
  '1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaTransportServiceProviderParty = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.TransportServiceProviderParty,
  'TransportServiceProviderParty',
  'Party',
  'Party',
  'The party providing the transport services referenced in the Transport Execution Plan Request.',
  '1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaPayeeParty = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.PayeeParty,
  'PayeeParty',
  'Party',
  'Party',
  'The party that will pay for the transport service(s) referred to in a Transport Execution Plan.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaSignature = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaTransportExecutionPlanDocumentReference = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.TransportExecutionPlanDocumentReference,
  'TransportExecutionPlanDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an original Transport Execution Plan Document.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaTransportServiceDescriptionDocumentReference = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.TransportServiceDescriptionDocumentReference,
  'TransportServiceDescriptionDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to the Transport Service Description, which is used by a transport service provider to announce transport services to transport users (buyers).',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaAdditionalDocumentReference = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaTransportContract = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.TransportContract,
  'TransportContract',
  'Contract',
  'Contract',
  'A potential contract related to the Transport Execution Plan Request.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaTransportServiceProviderResponseDeadlinePeriod = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.TransportServiceProviderResponseDeadlinePeriod,
  'TransportServiceProviderResponseDeadlinePeriod',
  'Period',
  'Period',
  'A deadline for a response from the Transport Service Provider to this Transport Execution Plan Request.',
  '0..n',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaMainTransportationService = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.MainTransportationService,
  'MainTransportationService',
  'Transportation Service',
  'TransportationService',
  'A description of the main transportation service referenced in the Transport Execution Plan Request.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaAdditionalTransportationService = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.AdditionalTransportationService,
  'AdditionalTransportationService',
  'Transportation Service',
  'TransportationService',
  'A description of an additional transportation service referenced in the Transport Execution Plan Request.',
  '0..n',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaServiceStartTimePeriod = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.ServiceStartTimePeriod,
  'ServiceStartTimePeriod',
  'Period',
  'Period',
  'The period within which the services referred to in the Transport Execution Plan Request must begin.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaServiceEndTimePeriod = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.ServiceEndTimePeriod,
  'ServiceEndTimePeriod',
  'Period',
  'Period',
  'The period during which the services referred to in the Transport Execution Plan Request must be completed.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaFromLocation = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.FromLocation,
  'FromLocation',
  'Location',
  'Location',
  'The location of origin of the transport service referenced in the Transport Execution Plan Request.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaToLocation = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.ToLocation,
  'ToLocation',
  'Location',
  'Location',
  'The destination location for the transport service referenced in the Transport Execution Plan Request.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaAtLocation = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.AtLocation,
  'AtLocation',
  'Location',
  'Location',
  'The location of a transport service (e.g., terminal handling service) that does not require transport movement.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaTransportExecutionTerms = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.TransportExecutionTerms,
  'TransportExecutionTerms',
  'Transport Execution Terms',
  'TransportExecutionTerms',
  'A description of terms and conditions related to the Transport Execution Plan Request.',
  '0..1',
  undefined,
  undefined
)

export const TransportExecutionPlanRequestFieldMetaConsignment = new FieldMeta<TransportExecutionPlanRequestField>(
  TransportExecutionPlanRequestField.Consignment,
  'Consignment',
  'Consignment',
  'Consignment',
  'A description of an identifiable collection of goods items to be transported between the consignor and the consignee. This information may be defined within a transport contract. A consignment may comprise more than one shipment (e.g., when consolidated by a freight forwarder).',
  '1..n',
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
