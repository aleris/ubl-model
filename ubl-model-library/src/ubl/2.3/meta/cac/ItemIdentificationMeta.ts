import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DimensionType } from './DimensionMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from './PartyMeta'
import { PhysicalAttributeType } from './PhysicalAttributeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ItemIdentificationFieldMetaID = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for the item.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  'CUST001 3333-44-123'
)

export const ItemIdentificationFieldMetaExtendedID = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.ExtendedID,
  'ExtendedID',
  'Extended Identifier',
  IdentifierType.name,
  'An extended identifier for the item that identifies the item with specific properties, e.g., Item 123 = Chair / Item 123 Ext 45 = brown chair. Two chairs can have the same item number, but one is brown. The other is white.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemIdentificationFieldMetaBarcodeSymbologyID = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.BarcodeSymbologyID,
  'BarcodeSymbologyID',
  'Barcode Symbology Identifier',
  IdentifierType.name,
  'An identifier for a system of barcodes.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemIdentificationFieldMetaIssuerScopeID = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.IssuerScopeID,
  'IssuerScopeID',
  'Issuer Scope Identifier',
  IdentifierType.name,
  'A scope within which the issuer has assigned this identifier.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemIdentificationFieldMetaPhysicalAttribute = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.PhysicalAttribute,
  'PhysicalAttribute',
  'Physical Attribute',
  PhysicalAttributeType.name,
  'A physical attribute of the item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemIdentificationFieldMetaMeasurementDimension = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.MeasurementDimension,
  'MeasurementDimension',
  'Measurement Dimension',
  DimensionType.name,
  'A measurable dimension (length, mass, weight, or volume) of the item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemIdentificationFieldMetaIssuerParty = new FieldMeta<ItemIdentificationField>(
  ItemIdentificationField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  PartyType.name,
  'The party that issued this item identification.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const ItemIdentificationType: Type<ItemIdentificationField> = {
  name: 'ItemIdentification',
  label: 'Item Identification',
  module: TypeModule.cac,
  definition: 'A class for assigning identifying information to an item.',
  fields: ItemIdentificationFieldMap,
}
