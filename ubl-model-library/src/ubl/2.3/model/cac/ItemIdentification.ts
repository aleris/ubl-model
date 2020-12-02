import { Dimension } from './Dimension'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'
import { PhysicalAttribute } from './PhysicalAttribute'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class for assigning identifying information to an item.
 */
export interface ItemIdentification {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the item.
   * Identifier
   * Cardinality: 1
   * Examples: CUST001 3333-44-123
   */
  ID: Array<Identifier>

  /**
   * An extended identifier for the item that identifies the item with specific properties, e.g., Item 123 = Chair /
   * Item 123 Ext 45 = brown chair. Two chairs can have the same item number, but one is brown. The other is white.
   * Identifier
   * Cardinality: 0..1
   */
  ExtendedID?: Array<Identifier> | undefined

  /**
   * An identifier for a system of barcodes.
   * Identifier
   * Cardinality: 0..1
   */
  BarcodeSymbologyID?: Array<Identifier> | undefined

  /**
   * A scope within which the issuer has assigned this identifier.
   * Identifier
   * Cardinality: 0..1
   */
  IssuerScopeID?: Array<Identifier> | undefined

  /**
   * A physical attribute of the item.
   * Physical Attribute
   * Cardinality: 0..n
   */
  PhysicalAttribute?: Array<PhysicalAttribute> | undefined

  /**
   * A measurable dimension (length, mass, weight, or volume) of the item.
   * Dimension
   * Cardinality: 0..n
   */
  MeasurementDimension?: Array<Dimension> | undefined

  /**
   * The party that issued this item identification.
   * Party
   * Cardinality: 0..1
   */
  IssuerParty?: Array<Party> | undefined
}
