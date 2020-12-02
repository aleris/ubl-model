import { Code } from '../cbc/Code'
import { Delivery } from './Delivery'
import { DeliveryUnit } from './DeliveryUnit'
import { Despatch } from './Despatch'
import { Dimension } from './Dimension'
import { GoodsItem } from './GoodsItem'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Pickup } from './Pickup'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { TransportEquipment } from './TransportEquipment'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a package.
 */
export interface Package {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this package.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * The quantity of items contained in this package.
   * Quantity
   * Cardinality: 0..1
   */
  Quantity?: Array<Quantity> | undefined

  /**
   * An indicator that the packaging material is returnable (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  ReturnableMaterialIndicator?: Array<Indicator> | undefined

  /**
   * A code signifying a level of packaging.
   * Code
   * Cardinality: 0..1
   */
  PackageLevelCode?: Array<Code> | undefined

  /**
   * A code signifying a type of packaging.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Package classification code
   */
  PackagingTypeCode?: Array<Code> | undefined

  /**
   * Text describing the packaging material.
   * Text
   * Cardinality: 0..n
   */
  PackingMaterial?: Array<Text> | undefined

  /**
   * An identifier for use in tracing this package, such as the EPC number used in RFID.
   * Identifier
   * Cardinality: 0..1
   */
  TraceID?: Array<Identifier> | undefined

  /**
   * A package contained within this package.
   * Package
   * Cardinality: 0..n
   */
  ContainedPackage?: Array<Package> | undefined

  /**
   * The piece of transport equipment containing this package.
   * Transport Equipment
   * Cardinality: 0..1
   */
  ContainingTransportEquipment?: Array<TransportEquipment> | undefined

  /**
   * A goods item included in this package.
   * Goods Item
   * Cardinality: 0..n
   */
  GoodsItem?: Array<GoodsItem> | undefined

  /**
   * A measurable dimension (length, mass, weight, or volume) of this package.
   * Dimension
   * Cardinality: 0..n
   */
  MeasurementDimension?: Array<Dimension> | undefined

  /**
   * A delivery unit within this package.
   * Delivery Unit
   * Cardinality: 0..n
   */
  DeliveryUnit?: Array<DeliveryUnit> | undefined

  /**
   * The delivery of this package.
   * Delivery
   * Cardinality: 0..1
   */
  Delivery?: Array<Delivery> | undefined

  /**
   * The pickup of this package.
   * Pickup
   * Cardinality: 0..1
   */
  Pickup?: Array<Pickup> | undefined

  /**
   * The despatch of this package.
   * Despatch
   * Cardinality: 0..1
   */
  Despatch?: Array<Despatch> | undefined
}
