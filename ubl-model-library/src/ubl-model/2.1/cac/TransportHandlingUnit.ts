import { Code } from '../cbc/Code'
import { CustomsDeclaration } from './CustomsDeclaration'
import { DespatchLine } from './DespatchLine'
import { Dimension } from './Dimension'
import { DocumentReference } from './DocumentReference'
import { GoodsItem } from './GoodsItem'
import { HazardousGoodsTransit } from './HazardousGoodsTransit'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Package } from './Package'
import { Quantity } from '../cbc/Quantity'
import { ReceiptLine } from './ReceiptLine'
import { Shipment } from './Shipment'
import { Status } from './Status'
import { Temperature } from './Temperature'
import { Text } from '../cbc/Text'
import { TransportEquipment } from './TransportEquipment'
import { TransportMeans } from './TransportMeans'

/**
 * A class to describe a uniquely identifiable unit consisting of one or more packages, goods items, or pieces of
 * transport equipment.
 */
export interface TransportHandlingUnit {
  /**
   * An identifier for this transport handling unit.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: [Identifier] | undefined

  /**
   * A code signifying the type of this transport handling unit.
   * Code
   * Cardinality: 0..1
   */
  TransportHandlingUnitTypeCode?: [Code] | undefined

  /**
   * The handling required for this transport handling unit, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Special Handling
   */
  HandlingCode?: [Code] | undefined

  /**
   * The handling required for this transport handling unit, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  HandlingInstructions?: Array<Text> | undefined

  /**
   * An indicator that the materials contained in this transport handling unit are subject to an international
   * regulation concerning the carriage of dangerous goods (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: Default is negative
   */
  HazardousRiskIndicator?: [Indicator] | undefined

  /**
   * The total number of goods items in this transport handling unit.
   * Quantity
   * Cardinality: 0..1
   */
  TotalGoodsItemQuantity?: [Quantity] | undefined

  /**
   * The total number of packages in this transport handling unit.
   * Quantity
   * Cardinality: 0..1
   */
  TotalPackageQuantity?: [Quantity] | undefined

  /**
   * Text describing damage associated with this transport handling unit.
   * Text
   * Cardinality: 0..n
   */
  DamageRemarks?: Array<Text> | undefined

  /**
   * Text describing the marks and numbers on this transport handling unit.
   * Text
   * Cardinality: 0..n
   * Alternative business terms: Marks and Numbers, Shipping Marks
   */
  ShippingMarks?: Array<Text> | undefined

  /**
   * An identifier for use in tracing this transport handling unit, such as the EPC number used in RFID.
   * Identifier
   * Cardinality: 0..1
   */
  TraceID?: [Identifier] | undefined

  /**
   * A despatch line associated with this transport handling unit.
   * Despatch Line
   * Cardinality: 0..n
   */
  HandlingUnitDespatchLine?: Array<DespatchLine> | undefined

  /**
   * A package contained in this transport handling unit.
   * Package
   * Cardinality: 0..n
   */
  ActualPackage?: Array<Package> | undefined

  /**
   * A receipt line associated with this transport handling unit.
   * Receipt Line
   * Cardinality: 0..n
   */
  ReceivedHandlingUnitReceiptLine?: Array<ReceiptLine> | undefined

  /**
   * A piece of transport equipment associated with this transport handling unit.
   * Transport Equipment
   * Cardinality: 0..n
   */
  TransportEquipment?: Array<TransportEquipment> | undefined

  /**
   * A means of transport associated with this transport handling unit.
   * Transport Means
   * Cardinality: 0..n
   */
  TransportMeans?: Array<TransportMeans> | undefined

  /**
   * Transit-related information regarding a type of hazardous goods contained in this transport handling unit.
   * Hazardous Goods Transit
   * Cardinality: 0..n
   */
  HazardousGoodsTransit?: Array<HazardousGoodsTransit> | undefined

  /**
   * A measurable dimension (length, mass, weight, or volume) of this transport handling unit.
   * Dimension
   * Cardinality: 0..n
   */
  MeasurementDimension?: Array<Dimension> | undefined

  /**
   * The minimum required operating temperature of this transport handling unit.
   * Temperature
   * Cardinality: 0..1
   */
  MinimumTemperature?: [Temperature] | undefined

  /**
   * The maximum allowable operating temperature of this transport handling unit.
   * Temperature
   * Cardinality: 0..1
   */
  MaximumTemperature?: [Temperature] | undefined

  /**
   * A goods item contained in this transport handling unit.
   * Goods Item
   * Cardinality: 0..n
   */
  GoodsItem?: Array<GoodsItem> | undefined

  /**
   * The floor space measurement dimension associated with this transport handling unit.
   * Dimension
   * Cardinality: 0..1
   */
  FloorSpaceMeasurementDimension?: [Dimension] | undefined

  /**
   * The pallet space measurement dimension associated to this transport handling unit.
   * Dimension
   * Cardinality: 0..1
   */
  PalletSpaceMeasurementDimension?: [Dimension] | undefined

  /**
   * A reference to a shipping document associated with this transport handling unit.
   * Document Reference
   * Cardinality: 0..n
   */
  ShipmentDocumentReference?: Array<DocumentReference> | undefined

  /**
   * The status of this transport handling unit.
   * Status
   * Cardinality: 0..n
   */
  Status?: Array<Status> | undefined

  /**
   * Describes identifiers or references relating to customs procedures.
   * Customs Declaration
   * Cardinality: 0..n
   */
  CustomsDeclaration?: Array<CustomsDeclaration> | undefined

  /**
   * A shipment associated with this transport handling unit.
   * Shipment
   * Cardinality: 0..n
   */
  ReferencedShipment?: Array<Shipment> | undefined

  /**
   * A package contained in this transport handling unit.
   * Package
   * Cardinality: 0..n
   */
  Package?: Array<Package> | undefined
}
