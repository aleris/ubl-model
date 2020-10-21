import { FieldMeta } from '../../FieldMeta'

export enum ItemIdentificationField {
  ID = 'ID',
  ExtendedID = 'ExtendedID',
  BarcodeSymbologyID = 'BarcodeSymbologyID',
  PhysicalAttribute = 'PhysicalAttribute',
  MeasurementDimension = 'MeasurementDimension',
  IssuerParty = 'IssuerParty'
}

export const ItemIdentificationFieldMetaID = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the item.',
  '1',
  undefined,
  'CUST001 3333-44-123'
)

export const ItemIdentificationFieldMetaExtendedID = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.ExtendedID,
  'ExtendedID',
  'Identifier',
  'Identifier',
  'An extended identifier for the item that identifies the item with specific properties, e.g., Item 123 = Chair / Item 123 Ext 45 = brown chair. Two chairs can have the same item number, but one is brown. The other is white.',
  '0..1',
  undefined,
  undefined
)

export const ItemIdentificationFieldMetaBarcodeSymbologyID = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.BarcodeSymbologyID,
  'BarcodeSymbologyID',
  'Symbology Identifier',
  'Identifier',
  'An identifier for a system of barcodes.',
  '0..1',
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
  undefined,
  undefined
)

export const ItemIdentificationFieldMetaMeasurementDimension = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.MeasurementDimension,
  'MeasurementDimension',
  'Dimension',
  'Dimension',
  'A measurable dimension (length, mass, weight, or volume) of the item.',
  '0..n',
  undefined,
  undefined
)

export const ItemIdentificationFieldMetaIssuerParty = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.IssuerParty,
  'IssuerParty',
  'Party',
  'Party',
  'The party that issued this item identification.',
  '0..1',
  undefined,
  undefined
)

export class ItemIdentificationFieldMeta {
  public static readonly ID = ItemIdentificationFieldMetaID
  public static readonly ExtendedID = ItemIdentificationFieldMetaExtendedID
  public static readonly BarcodeSymbologyID = ItemIdentificationFieldMetaBarcodeSymbologyID
  public static readonly PhysicalAttribute = ItemIdentificationFieldMetaPhysicalAttribute
  public static readonly MeasurementDimension = ItemIdentificationFieldMetaMeasurementDimension
  public static readonly IssuerParty = ItemIdentificationFieldMetaIssuerParty
}

export const ItemIdentificationFieldMap = new Map([
  [ItemIdentificationField.ID, ItemIdentificationFieldMetaID],
  [ItemIdentificationField.ExtendedID, ItemIdentificationFieldMetaExtendedID],
  [ItemIdentificationField.BarcodeSymbologyID, ItemIdentificationFieldMetaBarcodeSymbologyID],
  [ItemIdentificationField.PhysicalAttribute, ItemIdentificationFieldMetaPhysicalAttribute],
  [ItemIdentificationField.MeasurementDimension, ItemIdentificationFieldMetaMeasurementDimension],
  [ItemIdentificationField.IssuerParty, ItemIdentificationFieldMetaIssuerParty]
])
