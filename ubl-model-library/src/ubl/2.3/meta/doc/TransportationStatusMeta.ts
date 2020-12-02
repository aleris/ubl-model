import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaUBLVersionID = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const TransportationStatusFieldMetaCustomizationID = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const TransportationStatusFieldMetaProfileID = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const TransportationStatusFieldMetaProfileExecutionID = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const TransportationStatusFieldMetaID = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaCarrierAssignedID = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.CarrierAssignedID,
  'CarrierAssignedID',
  'Carrier Assigned Identifier',
  'Identifier',
  'A reference number assigned by a carrier or its agent to identify a specific shipment, such as a booking reference number when cargo space is reserved prior to loading.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaUUID = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaIssueDate = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaIssueTime = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaName = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.Name,
  'Name',
  'Name',
  'Text',
  'Text, assigned by the sender, that identifies this document to business users.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaDescription = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.Description,
  'Description',
  'Description',
  'Text',
  'A textual description of transportation status.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaNote = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaShippingOrderID = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.ShippingOrderID,
  'ShippingOrderID',
  'Shipping Order Identifier',
  'Identifier',
  'A reference number for a shipping order.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaOtherInstruction = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.OtherInstruction,
  'OtherInstruction',
  'Other Instruction',
  'Text',
  'An instruction regarding this message.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaTransportationStatusTypeCode = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.TransportationStatusTypeCode,
  'TransportationStatusTypeCode',
  'Transportation Status Type Code',
  'Code',
  'A code signifying the type of status provided in a Transportation Status document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaTransportExecutionStatusCode = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.TransportExecutionStatusCode,
  'TransportExecutionStatusCode',
  'Transport Execution Status Code',
  'Code',
  'A code signifying the overall status of transport service execution.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaConsignment = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.Consignment,
  'Consignment',
  'Consignment',
  'Consignment',
  'A consignment associated with this Transportation Status report.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaTransportEvent = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.TransportEvent,
  'TransportEvent',
  'Transport Event',
  'TransportEvent',
  'An event associated with this Transportation Status report.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaDocumentReference = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to another document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaSignature = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaSenderParty = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.SenderParty,
  'SenderParty',
  'Sender Party',
  'Party',
  'The party sending this Transportation Status report.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaReceiverParty = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  'Party',
  'The party receiving this Transportation Status report.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaTransportationStatusRequestDocumentReference = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.TransportationStatusRequestDocumentReference,
  'TransportationStatusRequestDocumentReference',
  'Transportation Status Request Document Reference',
  'DocumentReference',
  'A reference to the Transportation Status Request to which this report is a response.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaTransportExecutionPlanDocumentReference = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.TransportExecutionPlanDocumentReference,
  'TransportExecutionPlanDocumentReference',
  'Transport Execution Plan Document Reference',
  'DocumentReference',
  'A reference to the Transport Execution Plan associated with the transport service whose status is being reported.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaUpdatedPickupTransportEvent = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.UpdatedPickupTransportEvent,
  'UpdatedPickupTransportEvent',
  'Updated Pickup Transport Event',
  'TransportEvent',
  'Update of the original plan regarding a pickup of goods.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaUpdatedDeliveryTransportEvent = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.UpdatedDeliveryTransportEvent,
  'UpdatedDeliveryTransportEvent',
  'Updated Delivery Transport Event',
  'TransportEvent',
  'Update of the original plan regarding a delivery.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaStatusLocation = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.StatusLocation,
  'StatusLocation',
  'Status Location',
  'Location',
  'Locations associated with this Transportation Status report.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TransportationStatusFieldMetaStatusPeriod = new FieldMeta<TransportationStatusField>(
  TransportationStatusField.StatusPeriod,
  'StatusPeriod',
  'Status Period',
  'Period',
  'A period for which status is provided.',
  '0..n',
  'cac',
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
