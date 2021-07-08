import { Address } from './Address'
import { AllowanceCharge } from './AllowanceCharge'
import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Delivery } from './Delivery'
import { Despatch } from './Despatch'
import { Dimension } from './Dimension'
import { DocumentReference } from './DocumentReference'
import { GoodsItemContainer } from './GoodsItemContainer'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { InvoiceLine } from './InvoiceLine'
import { Item } from './Item'
import { Measure } from '../cbc/Measure'
import { Package } from './Package'
import { Pickup } from './Pickup'
import { Quantity } from '../cbc/Quantity'
import { Temperature } from './Temperature'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a separately identifiable quantity of goods of a single product type.
 */
export interface GoodsItem {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this goods item.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * A sequence number differentiating a specific goods item within a consignment.
   * Identifier
   * Cardinality: 0..1
   */
  SequenceNumberID?: Array<Identifier> | undefined

  /**
   * Text describing this goods item to identify it for customs, statistical, or transport purposes.
   * Text
   * Cardinality: 0..n
   * Alternative business terms: Description of goods (WCO ID 137)
   */
  Description?: Array<Text> | undefined

  /**
   * An indication that the transported goods item is subject to an international regulation concerning the carriage of
   * dangerous goods (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: default is negative
   */
  HazardousRiskIndicator?: Array<Indicator> | undefined

  /**
   * The total declared value for customs purposes of the goods item.
   * Amount
   * Cardinality: 0..1
   * Alternative business terms: For Customs Value (WCO ID 108)
   */
  DeclaredCustomsValueAmount?: Array<Amount> | undefined

  /**
   * The value of this goods item, declared by the shipper or his agent solely for the purpose of varying the carrier's
   * level of liability from that provided in the contract of carriage, in case of loss or damage to goods or delayed
   * delivery.
   * Amount
   * Cardinality: 0..1
   * Alternative business terms: Interest in delivery, declared value for carriage
   */
  DeclaredForCarriageValueAmount?: Array<Amount> | undefined

  /**
   * The total declared value of all the goods items in the same consignment with this goods item that have the same
   * statistical heading.
   * Amount
   * Cardinality: 0..1
   * Alternative business terms: Statistical Value (WCO ID 114)
   */
  DeclaredStatisticsValueAmount?: Array<Amount> | undefined

  /**
   * The monetary amount that has to be or has been paid as calculated under the applicable trade delivery.
   * Amount
   * Cardinality: 0..1
   * Alternative business terms: FOB Value
   */
  FreeOnBoardValueAmount?: Array<Amount> | undefined

  /**
   * The amount covered by insurance for this goods item.
   * Amount
   * Cardinality: 0..1
   * Alternative business terms: Value Insured
   */
  InsuranceValueAmount?: Array<Amount> | undefined

  /**
   * The amount on which a duty, tax, or fee will be assessed.
   * Amount
   * Cardinality: 0..1
   */
  ValueAmount?: Array<Amount> | undefined

  /**
   * The weight of this goods item, including packing and packaging but excluding the carrier's equipment.
   * Measure
   * Cardinality: 0..1
   * Alternative business terms: Actual Gross Weight
   */
  GrossWeightMeasure?: Array<Measure> | undefined

  /**
   * The weight of this goods item, excluding packing but including packaging that normally accompanies the goods.
   * Measure
   * Cardinality: 0..1
   */
  NetWeightMeasure?: Array<Measure> | undefined

  /**
   * The total weight of this goods item, excluding all packing and packaging.
   * Measure
   * Cardinality: 0..1
   * Alternative business terms: Customs Weight (WCO ID 128)
   */
  NetNetWeightMeasure?: Array<Measure> | undefined

  /**
   * The weight on which a charge is to be based.
   * Measure
   * Cardinality: 0..1
   */
  ChargeableWeightMeasure?: Array<Measure> | undefined

  /**
   * The volume of this goods item, normally calculated by multiplying its maximum length, width, and height.
   * Measure
   * Cardinality: 0..1
   * Alternative business terms: Volume, Gross Measurement Cube (GMC), Cube (WCO ID 134)
   */
  GrossVolumeMeasure?: Array<Measure> | undefined

  /**
   * The volume contained by a goods item, excluding the volume of any packaging material.
   * Measure
   * Cardinality: 0..1
   */
  NetVolumeMeasure?: Array<Measure> | undefined

  /**
   * The number of units making up this goods item.
   * Quantity
   * Cardinality: 0..1
   */
  Quantity?: Array<Quantity> | undefined

  /**
   * A code signifying the treatment preference for this goods item according to international trading agreements.
   * Code
   * Cardinality: 0..1
   * Examples: Preference Criterion is used in the following manner in the paper CO of another country (e.g.): A - The
   * Examples: good is wholly obtained or produced entirely in the territory of one or more of the NAFTA countries as
   * Examples: reference in Article 415. Note: The purchase of a good in the territory does not necessarily render it
   * Examples: wholly obtained or produced . If the good is an agricultural good, see also criterion F and Annex 703.2.
   * Examples: (Reference: Article 401(a), 415). B - ... C - ... D - ... E - ... F - The good is an originating
   * Examples: agricultural good under preference criterion A,B, or C above and is not subjected to quantitative
   * Examples: restriction in the importing NAFTA country because.... Thus, the column Preference Criterion will
   * Examples: indicate either A, B, C,...
   */
  PreferenceCriterionCode?: Array<Code> | undefined

  /**
   * An identifier for a set of tariff codes required to specify a type of goods for customs, transport, statistical, or
   * other regulatory purposes.
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: Tariff code extensions (WCO ID 255)
   */
  RequiredCustomsID?: Array<Identifier> | undefined

  /**
   * A code assigned by customs to signify the status of this goods item.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Customs status of goods (WCO ID 094)
   */
  CustomsStatusCode?: Array<Code> | undefined

  /**
   * Quantity of the units in this goods item as required by customs for tariff, statistical, or fiscal purposes.
   * Quantity
   * Cardinality: 0..1
   */
  CustomsTariffQuantity?: Array<Quantity> | undefined

  /**
   * An indicator that this goods item has been classified for import by customs (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  CustomsImportClassifiedIndicator?: Array<Indicator> | undefined

  /**
   * The number of units in the goods item to which charges apply.
   * Quantity
   * Cardinality: 0..1
   */
  ChargeableQuantity?: Array<Quantity> | undefined

  /**
   * The number of units in the goods item that may be returned.
   * Quantity
   * Cardinality: 0..1
   */
  ReturnableQuantity?: Array<Quantity> | undefined

  /**
   * An identifier for use in tracing this goods item, such as the EPC number used in RFID.
   * Identifier
   * Cardinality: 0..1
   */
  TraceID?: Array<Identifier> | undefined

  /**
   * Product information relating to a goods item.
   * Item
   * Cardinality: 0..n
   */
  Item?: Array<Item> | undefined

  /**
   * The transporting of a goods item in a unit of transport equipment (e.g., container).
   * Goods Item Container
   * Cardinality: 0..n
   */
  GoodsItemContainer?: Array<GoodsItemContainer> | undefined

  /**
   * A cost incurred by the shipper in moving goods, by whatever means, from one place to another under the terms of the
   * contract of carriage. In addition to transport costs, this may include such elements as packing, documentation,
   * loading, unloading, and insurance to the extent that they relate to the freight costs.
   * Allowance Charge
   * Cardinality: 0..n
   * Alternative business terms: Freight Costs
   */
  FreightAllowanceCharge?: Array<AllowanceCharge> | undefined

  /**
   * Information about an invoice line relating to this goods item.
   * Invoice Line
   * Cardinality: 0..n
   */
  InvoiceLine?: Array<InvoiceLine> | undefined

  /**
   * The temperature of the goods item.
   * Temperature
   * Cardinality: 0..n
   * Examples: maximum, storage, minimum
   */
  Temperature?: Array<Temperature> | undefined

  /**
   * A goods item contained in this goods item.
   * Goods Item
   * Cardinality: 0..n
   */
  ContainedGoodsItem?: Array<GoodsItem> | undefined

  /**
   * The region in which the goods have been produced or manufactured, according to criteria laid down for the purposes
   * of application of the customs tariff, or of quantitative restrictions, or of any other measure related to trade.
   * Address
   * Cardinality: 0..1
   * Alternative business terms: Region of origin (WCO ID 066)
   */
  OriginAddress?: Array<Address> | undefined

  /**
   * The delivery of this goods item.
   * Delivery
   * Cardinality: 0..1
   */
  Delivery?: Array<Delivery> | undefined

  /**
   * The pickup of this goods item.
   * Pickup
   * Cardinality: 0..1
   */
  Pickup?: Array<Pickup> | undefined

  /**
   * The despatch of this goods item.
   * Despatch
   * Cardinality: 0..1
   */
  Despatch?: Array<Despatch> | undefined

  /**
   * A measurable dimension (length, mass, weight, or volume) of this goods item.
   * Dimension
   * Cardinality: 0..n
   */
  MeasurementDimension?: Array<Dimension> | undefined

  /**
   * A package containing this goods item.
   * Package
   * Cardinality: 0..n
   */
  ContainingPackage?: Array<Package> | undefined

  /**
   * A reference to a shipping document associated with this goods item.
   * Document Reference
   * Cardinality: 0..1
   */
  ShipmentDocumentReference?: Array<DocumentReference> | undefined

  /**
   * Information about minimum temperature.
   * Temperature
   * Cardinality: 0..1
   */
  MinimumTemperature?: Array<Temperature> | undefined

  /**
   * Information about maximum temperature.
   * Temperature
   * Cardinality: 0..1
   */
  MaximumTemperature?: Array<Temperature> | undefined
}
