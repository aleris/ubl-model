import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaUBLVersionID = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const TransportationStatusRequestFieldMetaCustomizationID = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const TransportationStatusRequestFieldMetaProfileID = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const TransportationStatusRequestFieldMetaProfileExecutionID = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const TransportationStatusRequestFieldMetaID = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaCarrierAssignedID = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.CarrierAssignedID,
  'CarrierAssignedID',
  'Carrier Assigned Identifier',
  'Identifier',
  'A reference number assigned by a carrier or its agent to identify a specific shipment, such as a booking reference number when cargo space is reserved prior to loading.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaUUID = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaIssueDate = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaIssueTime = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaName = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.Name,
  'Name',
  'Name',
  'Text',
  'Text, assigned by the sender, that identifies this document to business users.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaDescription = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.Description,
  'Description',
  'Description',
  'Text',
  'A textual description of the document instance.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaNote = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaShippingOrderID = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.ShippingOrderID,
  'ShippingOrderID',
  'Shipping Order Identifier',
  'Identifier',
  'A reference number for a shipping order.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaOtherInstruction = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.OtherInstruction,
  'OtherInstruction',
  'Other Instruction',
  'Text',
  'An instruction regarding this message.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaTransportationStatusTypeCode = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.TransportationStatusTypeCode,
  'TransportationStatusTypeCode',
  'Transportation Status Type Code',
  'Code',
  'A code signifying the type of status requested in a Transportation Status document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaSenderParty = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.SenderParty,
  'SenderParty',
  'Sender Party',
  'Party',
  'The party sending this document.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaReceiverParty = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  'Party',
  'The party receiving this document.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaTransportExecutionPlanDocumentReference = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.TransportExecutionPlanDocumentReference,
  'TransportExecutionPlanDocumentReference',
  'Transport Execution Plan Document Reference',
  'DocumentReference',
  'A reference to the Transport Execution Plan associated with the transport service for which status is requested.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaConsignment = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.Consignment,
  'Consignment',
  'Consignment',
  'Consignment',
  'A consignment regarding which status is requested.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaDocumentReference = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to another document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaSignature = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaRequestedStatusLocation = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.RequestedStatusLocation,
  'RequestedStatusLocation',
  'Requested Status Location',
  'Location',
  'A location for which status is requested.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TransportationStatusRequestFieldMetaRequestedStatusPeriod = new FieldMeta<TransportationStatusRequestField>(
  TransportationStatusRequestField.RequestedStatusPeriod,
  'RequestedStatusPeriod',
  'Requested Status Period',
  'Period',
  'A period for which status is requested.',
  '0..n',
  'cac',
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
