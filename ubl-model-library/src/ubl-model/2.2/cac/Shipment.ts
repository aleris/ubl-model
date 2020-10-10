import { Address } from './Address'
import { AllowanceCharge } from './AllowanceCharge'
import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Consignment } from './Consignment'
import { Country } from './Country'
import { Delivery } from './Delivery'
import { GoodsItem } from './GoodsItem'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Location } from './Location'
import { Measure } from '../cbc/Measure'
import { Quantity } from '../cbc/Quantity'
import { ShipmentStage } from './ShipmentStage'
import { Text } from '../cbc/Text'
import { TransportHandlingUnit } from './TransportHandlingUnit'

/**
 * A class defining an identifiable collection of one or more goods items to be transported between the seller party and
 * the buyer party. This information may be defined within a commercial contract. A shipment can be transported in
 * different consignments (e.g., split for logistical purposes).
 */
export interface Shipment {
  /**
   * An identifier for this shipment.
   * Identifier
   * Cardinality: 1
   * Alternative business terms: Waybill Number
   */
  ID: [Identifier]

  /**
   * A code signifying the priority or level of service required for this shipment.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Service Level, Service Priority
   */
  ShippingPriorityLevelCode: [Code] | undefined

  /**
   * The handling required for this shipment, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Special Handling
   */
  HandlingCode: [Code] | undefined

  /**
   * The handling required for this shipment, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  HandlingInstructions: Array<Text> | undefined

  /**
   * Free-form text pertinent to this shipment, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Information: Array<Text> | undefined

  /**
   * The total gross weight of a shipment; the weight of the goods plus packaging plus transport equipment.
   * Measure
   * Cardinality: 0..1
   */
  GrossWeightMeasure: [Measure] | undefined

  /**
   * The net weight of this shipment, excluding packaging.
   * Measure
   * Cardinality: 0..1
   */
  NetWeightMeasure: [Measure] | undefined

  /**
   * The total net weight of this shipment, excluding packaging and transport equipment.
   * Measure
   * Cardinality: 0..1
   */
  NetNetWeightMeasure: [Measure] | undefined

  /**
   * The total volume of the goods in this shipment, including packaging.
   * Measure
   * Cardinality: 0..1
   */
  GrossVolumeMeasure: [Measure] | undefined

  /**
   * The total volume of the goods in this shipment, excluding packaging and transport equipment.
   * Measure
   * Cardinality: 0..1
   */
  NetVolumeMeasure: [Measure] | undefined

  /**
   * The total number of goods items in this shipment.
   * Quantity
   * Cardinality: 0..1
   */
  TotalGoodsItemQuantity: [Quantity] | undefined

  /**
   * The number of pieces of transport handling equipment (pallets, boxes, cases, etc.) in this shipment.
   * Quantity
   * Cardinality: 0..1
   * Alternative business terms: Number of THUs
   */
  TotalTransportHandlingUnitQuantity: [Quantity] | undefined

  /**
   * The amount covered by insurance for this shipment.
   * Amount
   * Cardinality: 0..1
   * Alternative business terms: Value Insured
   */
  InsuranceValueAmount: [Amount] | undefined

  /**
   * The total declared value for customs purposes of those goods in this shipment that are subject to the same customs
   * procedure and have the same tariff/statistical heading, country information, and duty regime.
   * Amount
   * Cardinality: 0..1
   */
  DeclaredCustomsValueAmount: [Amount] | undefined

  /**
   * The value of this shipment, declared by the shipper or his agent solely for the purpose of varying the carrier's
   * level of liability from that provided in the contract of carriage, in case of loss or damage to goods or delayed
   * delivery.
   * Amount
   * Cardinality: 0..1
   * Alternative business terms: Declared value for carriage, Interest in delivery
   */
  DeclaredForCarriageValueAmount: [Amount] | undefined

  /**
   * The value, declared for statistical purposes, of those goods in this shipment that have the same statistical
   * heading.
   * Amount
   * Cardinality: 0..1
   * Alternative business terms: Statistical Value
   */
  DeclaredStatisticsValueAmount: [Amount] | undefined

  /**
   * The monetary amount that has to be or has been paid as calculated under the applicable trade delivery.
   * Amount
   * Cardinality: 0..1
   * Alternative business terms: FOB Value
   */
  FreeOnBoardValueAmount: [Amount] | undefined

  /**
   * Special instructions relating to this shipment.
   * Text
   * Cardinality: 0..n
   */
  SpecialInstructions: Array<Text> | undefined

  /**
   * Delivery instructions relating to this shipment.
   * Text
   * Cardinality: 0..n
   */
  DeliveryInstructions: Array<Text> | undefined

  /**
   * An indicator that the consignment has been split in transit (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  SplitConsignmentIndicator: [Indicator] | undefined

  /**
   * The total number of consignments within this shipment.
   * Quantity
   * Cardinality: 0..1
   */
  ConsignmentQuantity: [Quantity] | undefined

  /**
   * A consignment covering this shipment.
   * Consignment
   * Cardinality: 0..n
   */
  Consignment: Array<Consignment> | undefined

  /**
   * A goods item included in this shipment.
   * Goods Item
   * Cardinality: 0..n
   */
  GoodsItem: Array<GoodsItem> | undefined

  /**
   * A stage in the transport movement of this shipment.
   * Shipment Stage
   * Cardinality: 0..n
   */
  ShipmentStage: Array<ShipmentStage> | undefined

  /**
   * The delivery of this shipment.
   * Delivery
   * Cardinality: 0..1
   */
  Delivery: [Delivery] | undefined

  /**
   * A transport handling unit associated with this shipment.
   * Transport Handling Unit
   * Cardinality: 0..n
   */
  TransportHandlingUnit: Array<TransportHandlingUnit> | undefined

  /**
   * The address to which a shipment should be returned.
   * Address
   * Cardinality: 0..1
   */
  ReturnAddress: [Address] | undefined

  /**
   * The region in which the goods have been produced or manufactured, according to criteria laid down for the purposes
   * of application of the customs tariff, or of quantitative restrictions, or of any other measure related to trade.
   * Address
   * Cardinality: 0..1
   */
  OriginAddress: [Address] | undefined

  /**
   * The first arrival location of a shipment. This would be a port for sea, an airport for air, a terminal for rail, or
   * a border post for land crossing.
   * Location
   * Cardinality: 0..1
   */
  FirstArrivalPortLocation: [Location] | undefined

  /**
   * The final exporting location for a shipment. This would be a port for sea, an airport for air, a terminal for rail,
   * or a border post for land crossing.
   * Location
   * Cardinality: 0..1
   */
  LastExitPortLocation: [Location] | undefined

  /**
   * The country from which the goods were originally exported, without any commercial transaction taking place in
   * intermediate countries.
   * Country
   * Cardinality: 0..1
   * Alternative business terms: Country of exportation (WCO ID 062)
   */
  ExportCountry: [Country] | undefined

  /**
   * A cost incurred by the shipper in moving goods, by whatever means, from one place to another under the terms of the
   * contract of carriage. In addition to transport costs, this may include such elements as packing, documentation,
   * loading, unloading, and insurance to the extent that they relate to the freight costs.
   * Allowance Charge
   * Cardinality: 0..n
   * Alternative business terms: Freight Costs
   */
  FreightAllowanceCharge: Array<AllowanceCharge> | undefined
}
