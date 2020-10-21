import { FieldMeta } from '../../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaUBLVersionID = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const InstructionForReturnsFieldMetaCustomizationID = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const InstructionForReturnsFieldMetaProfileID = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const InstructionForReturnsFieldMetaProfileExecutionID = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const InstructionForReturnsFieldMetaID = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'Document Number, Instruction for Returns Number',
  undefined
)

export const InstructionForReturnsFieldMetaCopyIndicator = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaUUID = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaIssueDate = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaIssueTime = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaNote = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaDocumentReference = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to another document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaSignature = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaSellerSupplierParty = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller.',
  '1',
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaRetailerCustomerParty = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.RetailerCustomerParty,
  'RetailerCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The retailer.',
  '1',
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaManufacturerParty = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.ManufacturerParty,
  'ManufacturerParty',
  'Party',
  'Party',
  'The manufacturer.',
  '0..1',
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaShipment = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.Shipment,
  'Shipment',
  'Shipment',
  'Shipment',
  'The shipment.',
  '0..1',
  undefined,
  undefined
)

export const InstructionForReturnsFieldMetaInstructionForReturnsLine = new FieldMeta<InstructionForReturnsField>(
  InstructionForReturnsField.InstructionForReturnsLine,
  'InstructionForReturnsLine',
  'Instruction For Returns Line',
  'InstructionForReturnsLine',
  'A line providing details about one type of article to be returned.',
  '1..n',
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
