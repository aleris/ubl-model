import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { ConsignmentType } from '../cac/ConsignmentMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { LocationType } from '../cac/LocationMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TransportationStatusRequestField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  CarrierAssignedID = 'CarrierAssignedID',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  Name = 'Name',
  Description = 'Description',
  Note = 'Note',
  ShippingOrderID = 'ShippingOrderID',
  OtherInstruction = 'OtherInstruction',
  TransportationStatusTypeCode = 'TransportationStatusTypeCode',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  TransportExecutionPlanDocumentReference = 'TransportExecutionPlanDocumentReference',
  Consignment = 'Consignment',
  DocumentReference = 'DocumentReference',
  Signature = 'Signature',
  RequestedStatusLocation = 'RequestedStatusLocation',
  RequestedStatusPeriod = 'RequestedStatusPeriod'
}

export const TransportationStatusRequestFieldMetaUBLExtensions = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaUBLVersionID = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const TransportationStatusRequestFieldMetaCustomizationID = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const TransportationStatusRequestFieldMetaProfileID = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const TransportationStatusRequestFieldMetaProfileExecutionID = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const TransportationStatusRequestFieldMetaID = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaCarrierAssignedID = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.CarrierAssignedID,
  'CarrierAssignedID',
  'Carrier Assigned Identifier',
  IdentifierType.name,
  'A reference number assigned by a carrier or its agent to identify a specific shipment, such as a booking reference number when cargo space is reserved prior to loading.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaUUID = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaIssueDate = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaIssueTime = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaName = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.Name,
  'Name',
  'Name',
  TextType.name,
  'Text, assigned by the sender, that identifies this document to business users.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaDescription = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.Description,
  'Description',
  'Description',
  TextType.name,
  'A textual description of the document instance.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaNote = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaShippingOrderID = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.ShippingOrderID,
  'ShippingOrderID',
  'Shipping Order Identifier',
  IdentifierType.name,
  'A reference number for a shipping order.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaOtherInstruction = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.OtherInstruction,
  'OtherInstruction',
  'Other Instruction',
  TextType.name,
  'An instruction regarding this message.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaTransportationStatusTypeCode = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.TransportationStatusTypeCode,
  'TransportationStatusTypeCode',
  'Transportation Status Type Code',
  CodeType.name,
  'A code signifying the type of status requested in a Transportation Status document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaSenderParty = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaReceiverParty = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaTransportExecutionPlanDocumentReference = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.TransportExecutionPlanDocumentReference,
  'TransportExecutionPlanDocumentReference',
  'Transport Execution Plan Document Reference',
  DocumentReferenceType.name,
  'A reference to the Transport Execution Plan associated with the transport service for which status is requested.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaConsignment = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.Consignment,
  'Consignment',
  'Consignment',
  ConsignmentType.name,
  'A consignment regarding which status is requested.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaDocumentReference = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to another document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaSignature = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaRequestedStatusLocation = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.RequestedStatusLocation,
  'RequestedStatusLocation',
  'Requested Status Location',
  LocationType.name,
  'A location for which status is requested.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaRequestedStatusPeriod = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.RequestedStatusPeriod,
  'RequestedStatusPeriod',
  'Requested Status Period',
  PeriodType.name,
  'A period for which status is requested.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TransportationStatusRequestFieldMeta {
  public static readonly UBLExtensions = TransportationStatusRequestFieldMetaUBLExtensions
  public static readonly UBLVersionID = TransportationStatusRequestFieldMetaUBLVersionID
  public static readonly CustomizationID = TransportationStatusRequestFieldMetaCustomizationID
  public static readonly ProfileID = TransportationStatusRequestFieldMetaProfileID
  public static readonly ProfileExecutionID = TransportationStatusRequestFieldMetaProfileExecutionID
  public static readonly ID = TransportationStatusRequestFieldMetaID
  public static readonly CarrierAssignedID = TransportationStatusRequestFieldMetaCarrierAssignedID
  public static readonly UUID = TransportationStatusRequestFieldMetaUUID
  public static readonly IssueDate = TransportationStatusRequestFieldMetaIssueDate
  public static readonly IssueTime = TransportationStatusRequestFieldMetaIssueTime
  public static readonly Name = TransportationStatusRequestFieldMetaName
  public static readonly Description = TransportationStatusRequestFieldMetaDescription
  public static readonly Note = TransportationStatusRequestFieldMetaNote
  public static readonly ShippingOrderID = TransportationStatusRequestFieldMetaShippingOrderID
  public static readonly OtherInstruction = TransportationStatusRequestFieldMetaOtherInstruction
  public static readonly TransportationStatusTypeCode = TransportationStatusRequestFieldMetaTransportationStatusTypeCode
  public static readonly SenderParty = TransportationStatusRequestFieldMetaSenderParty
  public static readonly ReceiverParty = TransportationStatusRequestFieldMetaReceiverParty
  public static readonly TransportExecutionPlanDocumentReference = TransportationStatusRequestFieldMetaTransportExecutionPlanDocumentReference
  public static readonly Consignment = TransportationStatusRequestFieldMetaConsignment
  public static readonly DocumentReference = TransportationStatusRequestFieldMetaDocumentReference
  public static readonly Signature = TransportationStatusRequestFieldMetaSignature
  public static readonly RequestedStatusLocation = TransportationStatusRequestFieldMetaRequestedStatusLocation
  public static readonly RequestedStatusPeriod = TransportationStatusRequestFieldMetaRequestedStatusPeriod
}

export const TransportationStatusRequestFieldMap = new Map([
  [TransportationStatusRequestField.UBLExtensions, TransportationStatusRequestFieldMetaUBLExtensions],
  [TransportationStatusRequestField.UBLVersionID, TransportationStatusRequestFieldMetaUBLVersionID],
  [TransportationStatusRequestField.CustomizationID, TransportationStatusRequestFieldMetaCustomizationID],
  [TransportationStatusRequestField.ProfileID, TransportationStatusRequestFieldMetaProfileID],
  [TransportationStatusRequestField.ProfileExecutionID, TransportationStatusRequestFieldMetaProfileExecutionID],
  [TransportationStatusRequestField.ID, TransportationStatusRequestFieldMetaID],
  [TransportationStatusRequestField.CarrierAssignedID, TransportationStatusRequestFieldMetaCarrierAssignedID],
  [TransportationStatusRequestField.UUID, TransportationStatusRequestFieldMetaUUID],
  [TransportationStatusRequestField.IssueDate, TransportationStatusRequestFieldMetaIssueDate],
  [TransportationStatusRequestField.IssueTime, TransportationStatusRequestFieldMetaIssueTime],
  [TransportationStatusRequestField.Name, TransportationStatusRequestFieldMetaName],
  [TransportationStatusRequestField.Description, TransportationStatusRequestFieldMetaDescription],
  [TransportationStatusRequestField.Note, TransportationStatusRequestFieldMetaNote],
  [TransportationStatusRequestField.ShippingOrderID, TransportationStatusRequestFieldMetaShippingOrderID],
  [TransportationStatusRequestField.OtherInstruction, TransportationStatusRequestFieldMetaOtherInstruction],
  [TransportationStatusRequestField.TransportationStatusTypeCode, TransportationStatusRequestFieldMetaTransportationStatusTypeCode],
  [TransportationStatusRequestField.SenderParty, TransportationStatusRequestFieldMetaSenderParty],
  [TransportationStatusRequestField.ReceiverParty, TransportationStatusRequestFieldMetaReceiverParty],
  [TransportationStatusRequestField.TransportExecutionPlanDocumentReference, TransportationStatusRequestFieldMetaTransportExecutionPlanDocumentReference],
  [TransportationStatusRequestField.Consignment, TransportationStatusRequestFieldMetaConsignment],
  [TransportationStatusRequestField.DocumentReference, TransportationStatusRequestFieldMetaDocumentReference],
  [TransportationStatusRequestField.Signature, TransportationStatusRequestFieldMetaSignature],
  [TransportationStatusRequestField.RequestedStatusLocation, TransportationStatusRequestFieldMetaRequestedStatusLocation],
  [TransportationStatusRequestField.RequestedStatusPeriod, TransportationStatusRequestFieldMetaRequestedStatusPeriod]
])

export const TransportationStatusRequestType: Type<TransportationStatusRequestField> = {
  name: 'TransportationStatusRequest',
  label: 'Transportation Status Request',
  module: TypeModule.doc,
  definition: 'A document requesting a Transportation Status report.',
  fields: TransportationStatusRequestFieldMap,
}
