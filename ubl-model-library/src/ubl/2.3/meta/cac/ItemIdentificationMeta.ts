import { FieldMeta } from '../FieldMeta'

export enum ItemIdentificationField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  ExtendedID = 'ExtendedID',
  BarcodeSymbologyID = 'BarcodeSymbologyID',
  IssuerScopeID = 'IssuerScopeID',
  PhysicalAttribute = 'PhysicalAttribute',
  MeasurementDimension = 'MeasurementDimension',
  IssuerParty = 'IssuerParty'
}

export const ItemIdentificationFieldMetaUBLExtensions = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ItemIdentificationFieldMetaID = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the item.',
  '1',
  'cbc',
  undefined,
  'CUST001 3333-44-123'
)

export const ItemIdentificationFieldMetaExtendedID = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.ExtendedID,
  'ExtendedID',
  'Extended Identifier',
  'Identifier',
  'An extended identifier for the item that identifies the item with specific properties, e.g., Item 123 = Chair / Item 123 Ext 45 = brown chair. Two chairs can have the same item number, but one is brown. The other is white.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemIdentificationFieldMetaBarcodeSymbologyID = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.BarcodeSymbologyID,
  'BarcodeSymbologyID',
  'Barcode Symbology Identifier',
  'Identifier',
  'An identifier for a system of barcodes.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemIdentificationFieldMetaIssuerScopeID = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.IssuerScopeID,
  'IssuerScopeID',
  'Issuer Scope Identifier',
  'Identifier',
  'A scope within which the issuer has assigned this identifier.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemIdentificationFieldMetaPhysicalAttribute = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.PhysicalAttribute,
  'PhysicalAttribute',
  'Physical Attribute',
  'PhysicalAttribute',
  'A physical attribute of the item.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ItemIdentificationFieldMetaMeasurementDimension = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.MeasurementDimension,
  'MeasurementDimension',
  'Measurement Dimension',
  'Dimension',
  'A measurable dimension (length, mass, weight, or volume) of the item.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ItemIdentificationFieldMetaIssuerParty = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  'Party',
  'The party that issued this item identification.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class ItemIdentificationFieldMeta {
  public static readonly UBLExtensions = ItemIdentificationFieldMetaUBLExtensions
  public static readonly ID = ItemIdentificationFieldMetaID
  public static readonly ExtendedID = ItemIdentificationFieldMetaExtendedID
  public static readonly BarcodeSymbologyID = ItemIdentificationFieldMetaBarcodeSymbologyID
  public static readonly IssuerScopeID = ItemIdentificationFieldMetaIssuerScopeID
  public static readonly PhysicalAttribute = ItemIdentificationFieldMetaPhysicalAttribute
  public static readonly MeasurementDimension = ItemIdentificationFieldMetaMeasurementDimension
  public static readonly IssuerParty = ItemIdentificationFieldMetaIssuerParty
}

export const ItemIdentificationFieldMap = new Map([
  [ItemIdentificationField.UBLExtensions, ItemIdentificationFieldMetaUBLExtensions],
  [ItemIdentificationField.ID, ItemIdentificationFieldMetaID],
  [ItemIdentificationField.ExtendedID, ItemIdentificationFieldMetaExtendedID],
  [ItemIdentificationField.BarcodeSymbologyID, ItemIdentificationFieldMetaBarcodeSymbologyID],
  [ItemIdentificationField.IssuerScopeID, ItemIdentificationFieldMetaIssuerScopeID],
  [ItemIdentificationField.PhysicalAttribute, ItemIdentificationFieldMetaPhysicalAttribute],
  [ItemIdentificationField.MeasurementDimension, ItemIdentificationFieldMetaMeasurementDimension],
  [ItemIdentificationField.IssuerParty, ItemIdentificationFieldMetaIssuerParty]
])
