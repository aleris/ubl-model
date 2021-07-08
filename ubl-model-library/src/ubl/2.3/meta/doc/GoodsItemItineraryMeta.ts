import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ConsignmentType } from '../cac/ConsignmentMeta'
import { DateType } from '../cbc/DateMeta'
import { GoodsItemType } from '../cac/GoodsItemMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PackageType } from '../cac/PackageMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { TransportationSegmentType } from '../cac/TransportationSegmentMeta'
import { TransportEquipmentType } from '../cac/TransportEquipmentMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaUBLVersionID = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaCustomizationID = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaProfileID = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaProfileExecutionID = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaID = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaCopyIndicator = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaUUID = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaIssueDate = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaIssueTime = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaNote = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaVersionID = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'Identifies a version of a Goods Item Itinerary in order to distinguish updates.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaTransportExecutionPlanReferenceID = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.TransportExecutionPlanReferenceID,
  'TransportExecutionPlanReferenceID',
  'Transport Execution Plan Reference',
  IdentifierType.name,
  'The Transport Execution Plan associated with this Goods Item Itinerary.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaSignature = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaSenderParty = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The sender of this Goods Item Itinerary.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaReceiverParty = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The receiver of this Goods Item Itinerary.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaReferencedConsignment = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.ReferencedConsignment,
  'ReferencedConsignment',
  'Referenced Consignment',
  ConsignmentType.name,
  'A consignment being transported in the transport service associated with this Goods Item Itinerary.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaReferencedTransportEquipment = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.ReferencedTransportEquipment,
  'ReferencedTransportEquipment',
  'Referenced Transport Equipment',
  TransportEquipmentType.name,
  'Transport equipment being transported in the transport service associated with this Goods Item Itinerary.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaReferencedPackage = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.ReferencedPackage,
  'ReferencedPackage',
  'Referenced Package',
  PackageType.name,
  'A package being transported in the transport service associated with this Goods Item Itinerary.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaReferencedGoodsItem = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.ReferencedGoodsItem,
  'ReferencedGoodsItem',
  'Referenced Goods Item',
  GoodsItemType.name,
  'An item of goods being transported in the transport service associated with this Goods Item Itinerary.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemItineraryFieldMetaTransportationSegment = new FieldMeta<GoodsItemItineraryField>(
  GoodsItemItineraryField.TransportationSegment,
  'TransportationSegment',
  'Transportation Segment',
  TransportationSegmentType.name,
  'A part of a transport service that has its own Transport Execution Plan. A Transportation Segment may cover services other than transport, such as terminal handling, document management, customs procedures, etc.',
  FieldCardinality.Multi,
  TypeModule.cac,
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

export const GoodsItemItineraryType: Type<GoodsItemItineraryField> = {
  name: 'GoodsItemItinerary',
  label: 'Goods Item Itinerary',
  module: TypeModule.doc,
  definition: 'A document providing details relating to a transport service, such as transport movement, identification of equipment and goods, subcontracted service providers, etc.',
  fields: GoodsItemItineraryFieldMap,
}
