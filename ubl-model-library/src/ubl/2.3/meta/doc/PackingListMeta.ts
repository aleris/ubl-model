import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DateType } from '../cbc/DateMeta'
import { DocumentDistributionType } from '../cac/DocumentDistributionMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from '../cac/PartyMeta'
import { ShipmentType } from '../cac/ShipmentMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PackingListField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  Name = 'Name',
  Description = 'Description',
  Note = 'Note',
  VersionID = 'VersionID',
  OtherInstruction = 'OtherInstruction',
  ConsignorParty = 'ConsignorParty',
  CarrierParty = 'CarrierParty',
  FreightForwarderParty = 'FreightForwarderParty',
  Shipment = 'Shipment',
  DocumentReference = 'DocumentReference',
  DocumentDistribution = 'DocumentDistribution',
  Signature = 'Signature'
}

export const PackingListFieldMetaUBLExtensions = new FieldMeta<PackingListField>(
  PackingListField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PackingListFieldMetaUBLVersionID = new FieldMeta<PackingListField>(
  PackingListField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const PackingListFieldMetaCustomizationID = new FieldMeta<PackingListField>(
  PackingListField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const PackingListFieldMetaProfileID = new FieldMeta<PackingListField>(
  PackingListField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the subset of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const PackingListFieldMetaProfileExecutionID = new FieldMeta<PackingListField>(
  PackingListField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const PackingListFieldMetaID = new FieldMeta<PackingListField>(
  PackingListField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Packing List Number',
  undefined
)

export const PackingListFieldMetaUUID = new FieldMeta<PackingListField>(
  PackingListField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document..',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PackingListFieldMetaIssueDate = new FieldMeta<PackingListField>(
  PackingListField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PackingListFieldMetaIssueTime = new FieldMeta<PackingListField>(
  PackingListField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PackingListFieldMetaName = new FieldMeta<PackingListField>(
  PackingListField.Name,
  'Name',
  'Name',
  TextType.name,
  'Text, assigned by the sender, that identifies this document to business users.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PackingListFieldMetaDescription = new FieldMeta<PackingListField>(
  PackingListField.Description,
  'Description',
  'Description',
  TextType.name,
  'Textual description of the document instance.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PackingListFieldMetaNote = new FieldMeta<PackingListField>(
  PackingListField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PackingListFieldMetaVersionID = new FieldMeta<PackingListField>(
  PackingListField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'Version identifier of a Packing List.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PackingListFieldMetaOtherInstruction = new FieldMeta<PackingListField>(
  PackingListField.OtherInstruction,
  'OtherInstruction',
  'Other Instruction',
  TextType.name,
  'Contains other free-text-based instructions related to the shipment to the forwarders or carriers. This should only be used where such information cannot be represented in other structured information entities within the document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PackingListFieldMetaConsignorParty = new FieldMeta<PackingListField>(
  PackingListField.ConsignorParty,
  'ConsignorParty',
  'Consignor Party',
  PartyType.name,
  'The party consigning goods, as stipulated in the transport contract by the party ordering transport.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Consignor (WCO ID 71 and 72)',
  undefined
)

export const PackingListFieldMetaCarrierParty = new FieldMeta<PackingListField>(
  PackingListField.CarrierParty,
  'CarrierParty',
  'Carrier Party',
  PartyType.name,
  'The party providing the transport of goods between named points.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Transport Company, Shipping Line, NVOCC, Airline, Haulier, Courier, Carrier (WCO ID 49 and 50)',
  undefined
)

export const PackingListFieldMetaFreightForwarderParty = new FieldMeta<PackingListField>(
  PackingListField.FreightForwarderParty,
  'FreightForwarderParty',
  'Freight Forwarder Party',
  PartyType.name,
  'The party combining individual smaller shipments into a single larger consignment (a so-called consolidated consignment) that is sent to a counterpart who mirrors the consolidator\'s activity by dividing the consolidated consignment into its original components.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Consolidator (WCO ID 192 AND 193)',
  undefined
)

export const PackingListFieldMetaShipment = new FieldMeta<PackingListField>(
  PackingListField.Shipment,
  'Shipment',
  'Shipment',
  ShipmentType.name,
  'A description of the shipment.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const PackingListFieldMetaDocumentReference = new FieldMeta<PackingListField>(
  PackingListField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to another document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PackingListFieldMetaDocumentDistribution = new FieldMeta<PackingListField>(
  PackingListField.DocumentDistribution,
  'DocumentDistribution',
  'Document Distribution',
  DocumentDistributionType.name,
  'A list of interested parties to whom this document is distributed.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PackingListFieldMetaSignature = new FieldMeta<PackingListField>(
  PackingListField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class PackingListFieldMeta {
  public static readonly UBLExtensions = PackingListFieldMetaUBLExtensions
  public static readonly UBLVersionID = PackingListFieldMetaUBLVersionID
  public static readonly CustomizationID = PackingListFieldMetaCustomizationID
  public static readonly ProfileID = PackingListFieldMetaProfileID
  public static readonly ProfileExecutionID = PackingListFieldMetaProfileExecutionID
  public static readonly ID = PackingListFieldMetaID
  public static readonly UUID = PackingListFieldMetaUUID
  public static readonly IssueDate = PackingListFieldMetaIssueDate
  public static readonly IssueTime = PackingListFieldMetaIssueTime
  public static readonly Name = PackingListFieldMetaName
  public static readonly Description = PackingListFieldMetaDescription
  public static readonly Note = PackingListFieldMetaNote
  public static readonly VersionID = PackingListFieldMetaVersionID
  public static readonly OtherInstruction = PackingListFieldMetaOtherInstruction
  public static readonly ConsignorParty = PackingListFieldMetaConsignorParty
  public static readonly CarrierParty = PackingListFieldMetaCarrierParty
  public static readonly FreightForwarderParty = PackingListFieldMetaFreightForwarderParty
  public static readonly Shipment = PackingListFieldMetaShipment
  public static readonly DocumentReference = PackingListFieldMetaDocumentReference
  public static readonly DocumentDistribution = PackingListFieldMetaDocumentDistribution
  public static readonly Signature = PackingListFieldMetaSignature
}

export const PackingListFieldMap = new Map([
  [PackingListField.UBLExtensions, PackingListFieldMetaUBLExtensions],
  [PackingListField.UBLVersionID, PackingListFieldMetaUBLVersionID],
  [PackingListField.CustomizationID, PackingListFieldMetaCustomizationID],
  [PackingListField.ProfileID, PackingListFieldMetaProfileID],
  [PackingListField.ProfileExecutionID, PackingListFieldMetaProfileExecutionID],
  [PackingListField.ID, PackingListFieldMetaID],
  [PackingListField.UUID, PackingListFieldMetaUUID],
  [PackingListField.IssueDate, PackingListFieldMetaIssueDate],
  [PackingListField.IssueTime, PackingListFieldMetaIssueTime],
  [PackingListField.Name, PackingListFieldMetaName],
  [PackingListField.Description, PackingListFieldMetaDescription],
  [PackingListField.Note, PackingListFieldMetaNote],
  [PackingListField.VersionID, PackingListFieldMetaVersionID],
  [PackingListField.OtherInstruction, PackingListFieldMetaOtherInstruction],
  [PackingListField.ConsignorParty, PackingListFieldMetaConsignorParty],
  [PackingListField.CarrierParty, PackingListFieldMetaCarrierParty],
  [PackingListField.FreightForwarderParty, PackingListFieldMetaFreightForwarderParty],
  [PackingListField.Shipment, PackingListFieldMetaShipment],
  [PackingListField.DocumentReference, PackingListFieldMetaDocumentReference],
  [PackingListField.DocumentDistribution, PackingListFieldMetaDocumentDistribution],
  [PackingListField.Signature, PackingListFieldMetaSignature]
])

export const PackingListType: Type<PackingListField> = {
  name: 'PackingList',
  label: 'Packing List',
  module: TypeModule.doc,
  definition: 'A document describing how goods are packed.',
  fields: PackingListFieldMap,
}
