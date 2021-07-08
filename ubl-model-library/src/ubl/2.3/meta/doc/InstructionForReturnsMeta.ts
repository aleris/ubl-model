import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { InstructionForReturnsLineType } from '../cac/InstructionForReturnsLineMeta'
import { PartyType } from '../cac/PartyMeta'
import { ShipmentType } from '../cac/ShipmentMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum InstructionForReturnsField {
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
  DocumentReference = 'DocumentReference',
  Signature = 'Signature',
  SellerSupplierParty = 'SellerSupplierParty',
  RetailerCustomerParty = 'RetailerCustomerParty',
  ManufacturerParty = 'ManufacturerParty',
  Shipment = 'Shipment',
  InstructionForReturnsLine = 'InstructionForReturnsLine'
}

export const InstructionForReturnsFieldMetaUBLExtensions = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaUBLVersionID = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const InstructionForReturnsFieldMetaCustomizationID = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const InstructionForReturnsFieldMetaProfileID = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const InstructionForReturnsFieldMetaProfileExecutionID = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const InstructionForReturnsFieldMetaID = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Document Number, Instruction for Returns Number',
  undefined
)

export const InstructionForReturnsFieldMetaCopyIndicator = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaUUID = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaIssueDate = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaIssueTime = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaNote = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaDocumentReference = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to another document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaSignature = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaSellerSupplierParty = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaRetailerCustomerParty = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.RetailerCustomerParty,
  'RetailerCustomerParty',
  'Retailer Customer Party',
  CustomerPartyType.name,
  'The retailer.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaManufacturerParty = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.ManufacturerParty,
  'ManufacturerParty',
  'Manufacturer Party',
  PartyType.name,
  'The manufacturer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaShipment = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.Shipment,
  'Shipment',
  'Shipment',
  ShipmentType.name,
  'The shipment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaInstructionForReturnsLine = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.InstructionForReturnsLine,
  'InstructionForReturnsLine',
  'Instruction For Returns Line',
  InstructionForReturnsLineType.name,
  'A line providing details about one type of article to be returned.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class InstructionForReturnsFieldMeta {
  public static readonly UBLExtensions = InstructionForReturnsFieldMetaUBLExtensions
  public static readonly UBLVersionID = InstructionForReturnsFieldMetaUBLVersionID
  public static readonly CustomizationID = InstructionForReturnsFieldMetaCustomizationID
  public static readonly ProfileID = InstructionForReturnsFieldMetaProfileID
  public static readonly ProfileExecutionID = InstructionForReturnsFieldMetaProfileExecutionID
  public static readonly ID = InstructionForReturnsFieldMetaID
  public static readonly CopyIndicator = InstructionForReturnsFieldMetaCopyIndicator
  public static readonly UUID = InstructionForReturnsFieldMetaUUID
  public static readonly IssueDate = InstructionForReturnsFieldMetaIssueDate
  public static readonly IssueTime = InstructionForReturnsFieldMetaIssueTime
  public static readonly Note = InstructionForReturnsFieldMetaNote
  public static readonly DocumentReference = InstructionForReturnsFieldMetaDocumentReference
  public static readonly Signature = InstructionForReturnsFieldMetaSignature
  public static readonly SellerSupplierParty = InstructionForReturnsFieldMetaSellerSupplierParty
  public static readonly RetailerCustomerParty = InstructionForReturnsFieldMetaRetailerCustomerParty
  public static readonly ManufacturerParty = InstructionForReturnsFieldMetaManufacturerParty
  public static readonly Shipment = InstructionForReturnsFieldMetaShipment
  public static readonly InstructionForReturnsLine = InstructionForReturnsFieldMetaInstructionForReturnsLine
}

export const InstructionForReturnsFieldMap = new Map([
  [InstructionForReturnsField.UBLExtensions, InstructionForReturnsFieldMetaUBLExtensions],
  [InstructionForReturnsField.UBLVersionID, InstructionForReturnsFieldMetaUBLVersionID],
  [InstructionForReturnsField.CustomizationID, InstructionForReturnsFieldMetaCustomizationID],
  [InstructionForReturnsField.ProfileID, InstructionForReturnsFieldMetaProfileID],
  [InstructionForReturnsField.ProfileExecutionID, InstructionForReturnsFieldMetaProfileExecutionID],
  [InstructionForReturnsField.ID, InstructionForReturnsFieldMetaID],
  [InstructionForReturnsField.CopyIndicator, InstructionForReturnsFieldMetaCopyIndicator],
  [InstructionForReturnsField.UUID, InstructionForReturnsFieldMetaUUID],
  [InstructionForReturnsField.IssueDate, InstructionForReturnsFieldMetaIssueDate],
  [InstructionForReturnsField.IssueTime, InstructionForReturnsFieldMetaIssueTime],
  [InstructionForReturnsField.Note, InstructionForReturnsFieldMetaNote],
  [InstructionForReturnsField.DocumentReference, InstructionForReturnsFieldMetaDocumentReference],
  [InstructionForReturnsField.Signature, InstructionForReturnsFieldMetaSignature],
  [InstructionForReturnsField.SellerSupplierParty, InstructionForReturnsFieldMetaSellerSupplierParty],
  [InstructionForReturnsField.RetailerCustomerParty, InstructionForReturnsFieldMetaRetailerCustomerParty],
  [InstructionForReturnsField.ManufacturerParty, InstructionForReturnsFieldMetaManufacturerParty],
  [InstructionForReturnsField.Shipment, InstructionForReturnsFieldMetaShipment],
  [InstructionForReturnsField.InstructionForReturnsLine, InstructionForReturnsFieldMetaInstructionForReturnsLine]
])

export const InstructionForReturnsType: Type<InstructionForReturnsField> = {
  name: 'InstructionForReturns',
  label: 'Instruction For Returns',
  module: TypeModule.doc,
  definition: 'A document used to initiate a return of goods. The producer is requesting the return of products that are not selling well, either to use in other places or to free up rack or shelf space.',
  fields: InstructionForReturnsFieldMap,
}
