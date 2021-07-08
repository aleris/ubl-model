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
import { TransportEventType } from '../cac/TransportEventMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TransportationStatusField {
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
  TransportExecutionStatusCode = 'TransportExecutionStatusCode',
  Consignment = 'Consignment',
  TransportEvent = 'TransportEvent',
  DocumentReference = 'DocumentReference',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  TransportationStatusRequestDocumentReference = 'TransportationStatusRequestDocumentReference',
  TransportExecutionPlanDocumentReference = 'TransportExecutionPlanDocumentReference',
  UpdatedPickupTransportEvent = 'UpdatedPickupTransportEvent',
  UpdatedDeliveryTransportEvent = 'UpdatedDeliveryTransportEvent',
  StatusLocation = 'StatusLocation',
  StatusPeriod = 'StatusPeriod'
}

export const TransportationStatusFieldMetaUBLExtensions = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaUBLVersionID = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const TransportationStatusFieldMetaCustomizationID = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const TransportationStatusFieldMetaProfileID = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const TransportationStatusFieldMetaProfileExecutionID = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const TransportationStatusFieldMetaID = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaCarrierAssignedID = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.CarrierAssignedID,
  'CarrierAssignedID',
  'Carrier Assigned Identifier',
  IdentifierType.name,
  'A reference number assigned by a carrier or its agent to identify a specific shipment, such as a booking reference number when cargo space is reserved prior to loading.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaUUID = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaIssueDate = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaIssueTime = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaName = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.Name,
  'Name',
  'Name',
  TextType.name,
  'Text, assigned by the sender, that identifies this document to business users.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaDescription = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.Description,
  'Description',
  'Description',
  TextType.name,
  'A textual description of transportation status.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaNote = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaShippingOrderID = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.ShippingOrderID,
  'ShippingOrderID',
  'Shipping Order Identifier',
  IdentifierType.name,
  'A reference number for a shipping order.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaOtherInstruction = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.OtherInstruction,
  'OtherInstruction',
  'Other Instruction',
  TextType.name,
  'An instruction regarding this message.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaTransportationStatusTypeCode = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.TransportationStatusTypeCode,
  'TransportationStatusTypeCode',
  'Transportation Status Type Code',
  CodeType.name,
  'A code signifying the type of status provided in a Transportation Status document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaTransportExecutionStatusCode = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.TransportExecutionStatusCode,
  'TransportExecutionStatusCode',
  'Transport Execution Status Code',
  CodeType.name,
  'A code signifying the overall status of transport service execution.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaConsignment = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.Consignment,
  'Consignment',
  'Consignment',
  ConsignmentType.name,
  'A consignment associated with this Transportation Status report.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaTransportEvent = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.TransportEvent,
  'TransportEvent',
  'Transport Event',
  TransportEventType.name,
  'An event associated with this Transportation Status report.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaDocumentReference = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to another document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaSignature = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaSenderParty = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this Transportation Status report.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaReceiverParty = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this Transportation Status report.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaTransportationStatusRequestDocumentReference = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.TransportationStatusRequestDocumentReference,
  'TransportationStatusRequestDocumentReference',
  'Transportation Status Request Document Reference',
  DocumentReferenceType.name,
  'A reference to the Transportation Status Request to which this report is a response.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaTransportExecutionPlanDocumentReference = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.TransportExecutionPlanDocumentReference,
  'TransportExecutionPlanDocumentReference',
  'Transport Execution Plan Document Reference',
  DocumentReferenceType.name,
  'A reference to the Transport Execution Plan associated with the transport service whose status is being reported.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaUpdatedPickupTransportEvent = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.UpdatedPickupTransportEvent,
  'UpdatedPickupTransportEvent',
  'Updated Pickup Transport Event',
  TransportEventType.name,
  'Update of the original plan regarding a pickup of goods.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaUpdatedDeliveryTransportEvent = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.UpdatedDeliveryTransportEvent,
  'UpdatedDeliveryTransportEvent',
  'Updated Delivery Transport Event',
  TransportEventType.name,
  'Update of the original plan regarding a delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaStatusLocation = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.StatusLocation,
  'StatusLocation',
  'Status Location',
  LocationType.name,
  'Locations associated with this Transportation Status report.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationStatusFieldMetaStatusPeriod = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.StatusPeriod,
  'StatusPeriod',
  'Status Period',
  PeriodType.name,
  'A period for which status is provided.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TransportationStatusFieldMeta {
  public static readonly UBLExtensions = TransportationStatusFieldMetaUBLExtensions
  public static readonly UBLVersionID = TransportationStatusFieldMetaUBLVersionID
  public static readonly CustomizationID = TransportationStatusFieldMetaCustomizationID
  public static readonly ProfileID = TransportationStatusFieldMetaProfileID
  public static readonly ProfileExecutionID = TransportationStatusFieldMetaProfileExecutionID
  public static readonly ID = TransportationStatusFieldMetaID
  public static readonly CarrierAssignedID = TransportationStatusFieldMetaCarrierAssignedID
  public static readonly UUID = TransportationStatusFieldMetaUUID
  public static readonly IssueDate = TransportationStatusFieldMetaIssueDate
  public static readonly IssueTime = TransportationStatusFieldMetaIssueTime
  public static readonly Name = TransportationStatusFieldMetaName
  public static readonly Description = TransportationStatusFieldMetaDescription
  public static readonly Note = TransportationStatusFieldMetaNote
  public static readonly ShippingOrderID = TransportationStatusFieldMetaShippingOrderID
  public static readonly OtherInstruction = TransportationStatusFieldMetaOtherInstruction
  public static readonly TransportationStatusTypeCode = TransportationStatusFieldMetaTransportationStatusTypeCode
  public static readonly TransportExecutionStatusCode = TransportationStatusFieldMetaTransportExecutionStatusCode
  public static readonly Consignment = TransportationStatusFieldMetaConsignment
  public static readonly TransportEvent = TransportationStatusFieldMetaTransportEvent
  public static readonly DocumentReference = TransportationStatusFieldMetaDocumentReference
  public static readonly Signature = TransportationStatusFieldMetaSignature
  public static readonly SenderParty = TransportationStatusFieldMetaSenderParty
  public static readonly ReceiverParty = TransportationStatusFieldMetaReceiverParty
  public static readonly TransportationStatusRequestDocumentReference = TransportationStatusFieldMetaTransportationStatusRequestDocumentReference
  public static readonly TransportExecutionPlanDocumentReference = TransportationStatusFieldMetaTransportExecutionPlanDocumentReference
  public static readonly UpdatedPickupTransportEvent = TransportationStatusFieldMetaUpdatedPickupTransportEvent
  public static readonly UpdatedDeliveryTransportEvent = TransportationStatusFieldMetaUpdatedDeliveryTransportEvent
  public static readonly StatusLocation = TransportationStatusFieldMetaStatusLocation
  public static readonly StatusPeriod = TransportationStatusFieldMetaStatusPeriod
}

export const TransportationStatusFieldMap = new Map([
  [TransportationStatusField.UBLExtensions, TransportationStatusFieldMetaUBLExtensions],
  [TransportationStatusField.UBLVersionID, TransportationStatusFieldMetaUBLVersionID],
  [TransportationStatusField.CustomizationID, TransportationStatusFieldMetaCustomizationID],
  [TransportationStatusField.ProfileID, TransportationStatusFieldMetaProfileID],
  [TransportationStatusField.ProfileExecutionID, TransportationStatusFieldMetaProfileExecutionID],
  [TransportationStatusField.ID, TransportationStatusFieldMetaID],
  [TransportationStatusField.CarrierAssignedID, TransportationStatusFieldMetaCarrierAssignedID],
  [TransportationStatusField.UUID, TransportationStatusFieldMetaUUID],
  [TransportationStatusField.IssueDate, TransportationStatusFieldMetaIssueDate],
  [TransportationStatusField.IssueTime, TransportationStatusFieldMetaIssueTime],
  [TransportationStatusField.Name, TransportationStatusFieldMetaName],
  [TransportationStatusField.Description, TransportationStatusFieldMetaDescription],
  [TransportationStatusField.Note, TransportationStatusFieldMetaNote],
  [TransportationStatusField.ShippingOrderID, TransportationStatusFieldMetaShippingOrderID],
  [TransportationStatusField.OtherInstruction, TransportationStatusFieldMetaOtherInstruction],
  [TransportationStatusField.TransportationStatusTypeCode, TransportationStatusFieldMetaTransportationStatusTypeCode],
  [TransportationStatusField.TransportExecutionStatusCode, TransportationStatusFieldMetaTransportExecutionStatusCode],
  [TransportationStatusField.Consignment, TransportationStatusFieldMetaConsignment],
  [TransportationStatusField.TransportEvent, TransportationStatusFieldMetaTransportEvent],
  [TransportationStatusField.DocumentReference, TransportationStatusFieldMetaDocumentReference],
  [TransportationStatusField.Signature, TransportationStatusFieldMetaSignature],
  [TransportationStatusField.SenderParty, TransportationStatusFieldMetaSenderParty],
  [TransportationStatusField.ReceiverParty, TransportationStatusFieldMetaReceiverParty],
  [TransportationStatusField.TransportationStatusRequestDocumentReference, TransportationStatusFieldMetaTransportationStatusRequestDocumentReference],
  [TransportationStatusField.TransportExecutionPlanDocumentReference, TransportationStatusFieldMetaTransportExecutionPlanDocumentReference],
  [TransportationStatusField.UpdatedPickupTransportEvent, TransportationStatusFieldMetaUpdatedPickupTransportEvent],
  [TransportationStatusField.UpdatedDeliveryTransportEvent, TransportationStatusFieldMetaUpdatedDeliveryTransportEvent],
  [TransportationStatusField.StatusLocation, TransportationStatusFieldMetaStatusLocation],
  [TransportationStatusField.StatusPeriod, TransportationStatusFieldMetaStatusPeriod]
])

export const TransportationStatusType: Type<TransportationStatusField> = {
  name: 'TransportationStatus',
  label: 'Transportation Status',
  module: TypeModule.doc,
  definition: 'A document to circulate reports of transportation status or changes in status (events) among a group of participants.',
  fields: TransportationStatusFieldMap,
}
