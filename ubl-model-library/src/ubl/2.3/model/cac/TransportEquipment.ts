import { AllowanceCharge } from './AllowanceCharge'
import { Code } from '../cbc/Code'
import { Delivery } from './Delivery'
import { Despatch } from './Despatch'
import { Dimension } from './Dimension'
import { DocumentReference } from './DocumentReference'
import { GoodsItem } from './GoodsItem'
import { HazardousGoodsTransit } from './HazardousGoodsTransit'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Location } from './Location'
import { Measure } from '../cbc/Measure'
import { Numeric } from '../cbc/Numeric'
import { Package } from './Package'
import { Party } from './Party'
import { Pickup } from './Pickup'
import { SupplierParty } from './SupplierParty'
import { Temperature } from './Temperature'
import { Text } from '../cbc/Text'
import { TradingTerms } from './TradingTerms'
import { TransportEquipmentSeal } from './TransportEquipmentSeal'
import { TransportEvent } from './TransportEvent'
import { TransportHandlingUnit } from './TransportHandlingUnit'
import { TransportMeans } from './TransportMeans'
import { UBLExtensions } from '../ext/UBLExtensions'
import { VerifiedGrossMass } from './VerifiedGrossMass'

/**
 * A class to describe a piece of equipment used to transport goods.
 */
export interface TransportEquipment {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this piece of transport equipment.
   * Identifier
   * Cardinality: 0..1
   * Examples: OCLU 1234567
   */
  ID?: Array<Identifier> | undefined

  /**
   * An identifier for the consignment contained by this piece of transport equipment.
   * Identifier
   * Cardinality: 0..n
   */
  ReferencedConsignmentID?: Array<Identifier> | undefined

  /**
   * A code signifying the type of this piece of transport equipment.
   * Code
   * Cardinality: 0..1
   */
  TransportEquipmentTypeCode?: Array<Code> | undefined

  /**
   * A code signifying the type of provider of this piece of transport equipment.
   * Code
   * Cardinality: 0..1
   */
  ProviderTypeCode?: Array<Code> | undefined

  /**
   * A code signifying the type of owner of this piece of transport equipment.
   * Code
   * Cardinality: 0..1
   */
  OwnerTypeCode?: Array<Code> | undefined

  /**
   * A code signifying the size and type of this piece of piece of transport equipment. When the piece of transport
   * equipment is a shipping container, it is recommended to use ContainerSizeTypeCode for validation.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Container Size Type Code
   */
  SizeTypeCode?: Array<Code> | undefined

  /**
   * A code signifying the current disposition of this piece of transport equipment.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Status
   */
  DispositionCode?: Array<Code> | undefined

  /**
   * A code signifying whether this piece of transport equipment is full, partially full, or empty.
   * Code
   * Cardinality: 0..1
   */
  FullnessIndicationCode?: Array<Code> | undefined

  /**
   * An indicator that this piece of transport equipment's refrigeration is on (true) or off (false).
   * Indicator
   * Cardinality: 0..1
   */
  RefrigerationOnIndicator?: Array<Indicator> | undefined

  /**
   * Additional information about this piece of transport equipment.
   * Text
   * Cardinality: 0..n
   */
  Information?: Array<Text> | undefined

  /**
   * An indicator that this piece of transport equipment is returnable (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  ReturnabilityIndicator?: Array<Indicator> | undefined

  /**
   * An indication of the legal status of this piece of transport equipment with respect to the Container Convention
   * Code.
   * Indicator
   * Cardinality: 0..1
   */
  LegalStatusIndicator?: Array<Indicator> | undefined

  /**
   * The percent of the airflow within this piece of transport equipment.
   * Percent
   * Cardinality: 0..1
   */
  AirFlowPercent?: Array<Numeric> | undefined

  /**
   * The percent humidity within this piece of transport equipment.
   * Percent
   * Cardinality: 0..1
   */
  HumidityPercent?: Array<Numeric> | undefined

  /**
   * An indicator that this piece of transport equipment is approved for animal food (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  AnimalFoodApprovedIndicator?: Array<Indicator> | undefined

  /**
   * An indicator that this piece of transport equipment is approved for human food (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  HumanFoodApprovedIndicator?: Array<Indicator> | undefined

  /**
   * An indicator that this piece of transport equipment is approved for dangerous goods (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  DangerousGoodsApprovedIndicator?: Array<Indicator> | undefined

  /**
   * An indicator that this piece of transport equipment is refrigerated (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  RefrigeratedIndicator?: Array<Indicator> | undefined

  /**
   * Characteristics of this piece of transport equipment.
   * Text
   * Cardinality: 0..1
   */
  Characteristics?: Array<Text> | undefined

  /**
   * Damage associated with this piece of transport equipment.
   * Text
   * Cardinality: 0..n
   */
  DamageRemarks?: Array<Text> | undefined

  /**
   * Text describing this piece of transport equipment.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * Special transport requirements expressed as text.
   * Text
   * Cardinality: 0..n
   */
  SpecialTransportRequirements?: Array<Text> | undefined

  /**
   * The gross weight of this piece of transport equipment.
   * Measure
   * Cardinality: 0..1
   */
  GrossWeightMeasure?: Array<Measure> | undefined

  /**
   * The gross volume of this piece of transport equipment.
   * Measure
   * Cardinality: 0..1
   */
  GrossVolumeMeasure?: Array<Measure> | undefined

  /**
   * The weight of this piece of transport equipment when empty.
   * Measure
   * Cardinality: 0..1
   */
  TareWeightMeasure?: Array<Measure> | undefined

  /**
   * A code signifying the tracking device for this piece of transport equipment.
   * Code
   * Cardinality: 0..1
   */
  TrackingDeviceCode?: Array<Code> | undefined

  /**
   * An indicator that this piece of transport equipment can supply power (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  PowerIndicator?: Array<Indicator> | undefined

  /**
   * An identifier for use in tracing this piece of transport equipment, such as the EPC number used in RFID.
   * Identifier
   * Cardinality: 0..1
   */
  TraceID?: Array<Identifier> | undefined

  /**
   * A measurable dimension (length, mass, weight, or volume) of this piece of transport equipment.
   * Dimension
   * Cardinality: 0..n
   */
  MeasurementDimension?: Array<Dimension> | undefined

  /**
   * A seal securing the door of a piece of transport equipment.
   * Transport Equipment Seal
   * Cardinality: 0..n
   */
  TransportEquipmentSeal?: Array<TransportEquipmentSeal> | undefined

  /**
   * In the case of a refrigeration unit, the minimum allowable operating temperature for this container.
   * Temperature
   * Cardinality: 0..1
   */
  MinimumTemperature?: Array<Temperature> | undefined

  /**
   * In the case of a refrigeration unit, the maximum allowable operating temperature for this container.
   * Temperature
   * Cardinality: 0..1
   */
  MaximumTemperature?: Array<Temperature> | undefined

  /**
   * The party providing this piece of transport equipment.
   * Party
   * Cardinality: 0..1
   */
  ProviderParty?: Array<Party> | undefined

  /**
   * The authorized party responsible for certifying that the goods were loaded into this piece of transport equipment.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Party responsible for proof of vanning (WCO ID 059)
   */
  LoadingProofParty?: Array<Party> | undefined

  /**
   * The party that supplies this piece of transport equipment.
   * Supplier Party
   * Cardinality: 0..1
   * Alternative business terms: Party responsible for proof of vanning (WCO ID 059)
   */
  SupplierParty?: Array<SupplierParty> | undefined

  /**
   * The party that owns this piece of transport equipment.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Party responsible for proof of vanning (WCO ID 059)
   */
  OwnerParty?: Array<Party> | undefined

  /**
   * The party that operates this piece of transport equipment.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Party responsible for proof of vanning (WCO ID 059)
   */
  OperatingParty?: Array<Party> | undefined

  /**
   * The location where this piece of transport equipment is loaded.
   * Location
   * Cardinality: 0..1
   * Alternative business terms: Vanning address (WCO ID 068), Stuffing location
   */
  LoadingLocation?: Array<Location> | undefined

  /**
   * The location where this piece of transport equipment is unloaded.
   * Location
   * Cardinality: 0..1
   */
  UnloadingLocation?: Array<Location> | undefined

  /**
   * The location where this piece of transport equipment is being stored.
   * Location
   * Cardinality: 0..1
   */
  StorageLocation?: Array<Location> | undefined

  /**
   * A positioning of this piece of transport equipment.
   * Transport Event
   * Cardinality: 0..n
   */
  PositioningTransportEvent?: Array<TransportEvent> | undefined

  /**
   * A quarantine of this piece of transport equipment.
   * Transport Event
   * Cardinality: 0..n
   */
  QuarantineTransportEvent?: Array<TransportEvent> | undefined

  /**
   * A delivery of this piece of transport equipment.
   * Transport Event
   * Cardinality: 0..n
   */
  DeliveryTransportEvent?: Array<TransportEvent> | undefined

  /**
   * A pickup of this piece of transport equipment.
   * Transport Event
   * Cardinality: 0..n
   */
  PickupTransportEvent?: Array<TransportEvent> | undefined

  /**
   * A handling of this piece of transport equipment.
   * Transport Event
   * Cardinality: 0..n
   */
  HandlingTransportEvent?: Array<TransportEvent> | undefined

  /**
   * A loading of this piece of transport equipment.
   * Transport Event
   * Cardinality: 0..n
   */
  LoadingTransportEvent?: Array<TransportEvent> | undefined

  /**
   * A transport event associated with this piece of transport equipment.
   * Transport Event
   * Cardinality: 0..n
   */
  TransportEvent?: Array<TransportEvent> | undefined

  /**
   * The applicable transport means associated with this piece of transport equipment.
   * Transport Means
   * Cardinality: 0..1
   */
  ApplicableTransportMeans?: Array<TransportMeans> | undefined

  /**
   * A set of haulage trading terms associated with this piece of transport equipment.
   * Trading Terms
   * Cardinality: 0..n
   */
  HaulageTradingTerms?: Array<TradingTerms> | undefined

  /**
   * Transit-related information regarding a type of hazardous goods contained in this piece of transport equipment.
   * Hazardous Goods Transit
   * Cardinality: 0..n
   */
  HazardousGoodsTransit?: Array<HazardousGoodsTransit> | undefined

  /**
   * A packaged transport handling unit associated with this piece of transport equipment.
   * Transport Handling Unit
   * Cardinality: 0..n
   */
  PackagedTransportHandlingUnit?: Array<TransportHandlingUnit> | undefined

  /**
   * A service allowance charge associated with this piece of transport equipment.
   * Allowance Charge
   * Cardinality: 0..n
   */
  ServiceAllowanceCharge?: Array<AllowanceCharge> | undefined

  /**
   * A freight allowance charge associated with this piece of transport equipment.
   * Allowance Charge
   * Cardinality: 0..n
   */
  FreightAllowanceCharge?: Array<AllowanceCharge> | undefined

  /**
   * A piece of transport equipment attached to this piece of transport equipment.
   * Transport Equipment
   * Cardinality: 0..n
   */
  AttachedTransportEquipment?: Array<TransportEquipment> | undefined

  /**
   * The delivery of this piece of transport equipment.
   * Delivery
   * Cardinality: 0..1
   */
  Delivery?: Array<Delivery> | undefined

  /**
   * The pickup of this piece of transport equipment.
   * Pickup
   * Cardinality: 0..1
   */
  Pickup?: Array<Pickup> | undefined

  /**
   * The despatch of this piece of transport equipment.
   * Despatch
   * Cardinality: 0..1
   */
  Despatch?: Array<Despatch> | undefined

  /**
   * A reference to a shipping document associated with this piece of transport equipment.
   * Document Reference
   * Cardinality: 0..n
   */
  ShipmentDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A piece of transport equipment contained in this piece of transport equipment.
   * Transport Equipment
   * Cardinality: 0..n
   * Examples: e.g. pallets inside containers
   */
  ContainedInTransportEquipment?: Array<TransportEquipment> | undefined

  /**
   * A package contained in this piece of transport equipment.
   * Package
   * Cardinality: 0..n
   */
  Package?: Array<Package> | undefined

  /**
   * A goods item contained in this piece of transport equipment.
   * Goods Item
   * Cardinality: 0..n
   */
  GoodsItem?: Array<GoodsItem> | undefined

  /**
   * The verified gross mass of this piece of transport equipment.
   * Verified Gross Mass
   * Cardinality: 0..1
   */
  VerifiedGrossMass?: Array<VerifiedGrossMass> | undefined
}
