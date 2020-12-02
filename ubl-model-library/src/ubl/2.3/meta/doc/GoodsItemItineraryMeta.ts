import { FieldMeta } from '../FieldMeta'

export enum GoodsItemItineraryField {
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
  VersionID = 'VersionID',
  TransportExecutionPlanReferenceID = 'TransportExecutionPlanReferenceID',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  ReferencedConsignment = 'ReferencedConsignment',
  ReferencedTransportEquipment = 'ReferencedTransportEquipment',
  ReferencedPackage = 'ReferencedPackage',
  ReferencedGoodsItem = 'ReferencedGoodsItem',
  TransportationSegment = 'TransportationSegment'
}

export const GoodsItemItineraryFieldMetaUBLExtensions = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaUBLVersionID = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaCustomizationID = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaProfileID = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaProfileExecutionID = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaID = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaCopyIndicator = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaUUID = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaIssueDate = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaIssueTime = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaNote = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaVersionID = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'Identifies a version of a Goods Item Itinerary in order to distinguish updates.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaTransportExecutionPlanReferenceID = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.TransportExecutionPlanReferenceID,
  'TransportExecutionPlanReferenceID',
  'Transport Execution Plan Reference',
  'Identifier',
  'The Transport Execution Plan associated with this Goods Item Itinerary.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaSignature = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaSenderParty = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.SenderParty,
  'SenderParty',
  'Sender Party',
  'Party',
  'The sender of this Goods Item Itinerary.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaReceiverParty = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  'Party',
  'The receiver of this Goods Item Itinerary.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaReferencedConsignment = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.ReferencedConsignment,
  'ReferencedConsignment',
  'Referenced Consignment',
  'Consignment',
  'A consignment being transported in the transport service associated with this Goods Item Itinerary.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaReferencedTransportEquipment = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.ReferencedTransportEquipment,
  'ReferencedTransportEquipment',
  'Referenced Transport Equipment',
  'TransportEquipment',
  'Transport equipment being transported in the transport service associated with this Goods Item Itinerary.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaReferencedPackage = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.ReferencedPackage,
  'ReferencedPackage',
  'Referenced Package',
  'Package',
  'A package being transported in the transport service associated with this Goods Item Itinerary.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaReferencedGoodsItem = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.ReferencedGoodsItem,
  'ReferencedGoodsItem',
  'Referenced Goods Item',
  'GoodsItem',
  'An item of goods being transported in the transport service associated with this Goods Item Itinerary.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaTransportationSegment = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.TransportationSegment,
  'TransportationSegment',
  'Transportation Segment',
  'TransportationSegment',
  'A part of a transport service that has its own Transport Execution Plan. A Transportation Segment may cover services other than transport, such as terminal handling, document management, customs procedures, etc.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export class GoodsItemItineraryFieldMeta {
  public static readonly UBLExtensions = GoodsItemItineraryFieldMetaUBLExtensions
  public static readonly UBLVersionID = GoodsItemItineraryFieldMetaUBLVersionID
  public static readonly CustomizationID = GoodsItemItineraryFieldMetaCustomizationID
  public static readonly ProfileID = GoodsItemItineraryFieldMetaProfileID
  public static readonly ProfileExecutionID = GoodsItemItineraryFieldMetaProfileExecutionID
  public static readonly ID = GoodsItemItineraryFieldMetaID
  public static readonly CopyIndicator = GoodsItemItineraryFieldMetaCopyIndicator
  public static readonly UUID = GoodsItemItineraryFieldMetaUUID
  public static readonly IssueDate = GoodsItemItineraryFieldMetaIssueDate
  public static readonly IssueTime = GoodsItemItineraryFieldMetaIssueTime
  public static readonly Note = GoodsItemItineraryFieldMetaNote
  public static readonly VersionID = GoodsItemItineraryFieldMetaVersionID
  public static readonly TransportExecutionPlanReferenceID = GoodsItemItineraryFieldMetaTransportExecutionPlanReferenceID
  public static readonly Signature = GoodsItemItineraryFieldMetaSignature
  public static readonly SenderParty = GoodsItemItineraryFieldMetaSenderParty
  public static readonly ReceiverParty = GoodsItemItineraryFieldMetaReceiverParty
  public static readonly ReferencedConsignment = GoodsItemItineraryFieldMetaReferencedConsignment
  public static readonly ReferencedTransportEquipment = GoodsItemItineraryFieldMetaReferencedTransportEquipment
  public static readonly ReferencedPackage = GoodsItemItineraryFieldMetaReferencedPackage
  public static readonly ReferencedGoodsItem = GoodsItemItineraryFieldMetaReferencedGoodsItem
  public static readonly TransportationSegment = GoodsItemItineraryFieldMetaTransportationSegment
}

export const GoodsItemItineraryFieldMap = new Map([
  [GoodsItemItineraryField.UBLExtensions, GoodsItemItineraryFieldMetaUBLExtensions],
  [GoodsItemItineraryField.UBLVersionID, GoodsItemItineraryFieldMetaUBLVersionID],
  [GoodsItemItineraryField.CustomizationID, GoodsItemItineraryFieldMetaCustomizationID],
  [GoodsItemItineraryField.ProfileID, GoodsItemItineraryFieldMetaProfileID],
  [GoodsItemItineraryField.ProfileExecutionID, GoodsItemItineraryFieldMetaProfileExecutionID],
  [GoodsItemItineraryField.ID, GoodsItemItineraryFieldMetaID],
  [GoodsItemItineraryField.CopyIndicator, GoodsItemItineraryFieldMetaCopyIndicator],
  [GoodsItemItineraryField.UUID, GoodsItemItineraryFieldMetaUUID],
  [GoodsItemItineraryField.IssueDate, GoodsItemItineraryFieldMetaIssueDate],
  [GoodsItemItineraryField.IssueTime, GoodsItemItineraryFieldMetaIssueTime],
  [GoodsItemItineraryField.Note, GoodsItemItineraryFieldMetaNote],
  [GoodsItemItineraryField.VersionID, GoodsItemItineraryFieldMetaVersionID],
  [GoodsItemItineraryField.TransportExecutionPlanReferenceID, GoodsItemItineraryFieldMetaTransportExecutionPlanReferenceID],
  [GoodsItemItineraryField.Signature, GoodsItemItineraryFieldMetaSignature],
  [GoodsItemItineraryField.SenderParty, GoodsItemItineraryFieldMetaSenderParty],
  [GoodsItemItineraryField.ReceiverParty, GoodsItemItineraryFieldMetaReceiverParty],
  [GoodsItemItineraryField.ReferencedConsignment, GoodsItemItineraryFieldMetaReferencedConsignment],
  [GoodsItemItineraryField.ReferencedTransportEquipment, GoodsItemItineraryFieldMetaReferencedTransportEquipment],
  [GoodsItemItineraryField.ReferencedPackage, GoodsItemItineraryFieldMetaReferencedPackage],
  [GoodsItemItineraryField.ReferencedGoodsItem, GoodsItemItineraryFieldMetaReferencedGoodsItem],
  [GoodsItemItineraryField.TransportationSegment, GoodsItemItineraryFieldMetaTransportationSegment]
])
