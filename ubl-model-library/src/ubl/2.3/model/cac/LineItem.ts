import { AllowanceCharge } from './AllowanceCharge'
import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Delivery } from './Delivery'
import { DeliveryTerms } from './DeliveryTerms'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Item } from './Item'
import { LineReference } from './LineReference'
import { OrderedShipment } from './OrderedShipment'
import { Party } from './Party'
import { Period } from './Period'
import { Price } from './Price'
import { PriceExtension } from './PriceExtension'
import { PricingReference } from './PricingReference'
import { Quantity } from '../cbc/Quantity'
import { TaxTotal } from './TaxTotal'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a line item.
 */
export interface LineItem {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this line item, assigned by the buyer.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * An identifier for this line item, assigned by the seller.
   * Identifier
   * Cardinality: 0..1
   */
  SalesOrderID?: Array<Identifier> | undefined

  /**
   * A universally unique identifier for this line item.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: Array<Identifier> | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * A code signifying the status of this line item with respect to its original state.
   * Code
   * Cardinality: 0..1
   */
  LineStatusCode?: Array<Code> | undefined

  /**
   * The quantity of items associated with this line item.
   * Quantity
   * Cardinality: 0..1
   */
  Quantity?: Array<Quantity> | undefined

  /**
   * The total amount for this line item, including allowance charges but net of taxes.
   * Amount
   * Cardinality: 0..1
   */
  LineExtensionAmount?: Array<Amount> | undefined

  /**
   * The total amount for this line item, including all allowances, charges and taxes.
   * Amount
   * Cardinality: 0..1
   */
  TaxInclusiveLineExtensionAmount?: Array<Amount> | undefined

  /**
   * The total tax amount for this line item.
   * Amount
   * Cardinality: 0..1
   */
  TotalTaxAmount?: Array<Amount> | undefined

  /**
   * The minimum quantity of the item associated with this line.
   * Quantity
   * Cardinality: 0..1
   */
  MinimumQuantity?: Array<Quantity> | undefined

  /**
   * The maximum quantity of the item associated with this line.
   * Quantity
   * Cardinality: 0..1
   */
  MaximumQuantity?: Array<Quantity> | undefined

  /**
   * The minimum back order quantity of the item associated with this line (where back order is allowed).
   * Quantity
   * Cardinality: 0..1
   */
  MinimumBackorderQuantity?: Array<Quantity> | undefined

  /**
   * The maximum back order quantity of the item associated with this line (where back order is allowed).
   * Quantity
   * Cardinality: 0..1
   */
  MaximumBackorderQuantity?: Array<Quantity> | undefined

  /**
   * A code signifying the inspection requirements for the item associated with this line item.
   * Code
   * Cardinality: 0..1
   */
  InspectionMethodCode?: Array<Code> | undefined

  /**
   * An indicator that a partial delivery is allowed (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  PartialDeliveryIndicator?: Array<Indicator> | undefined

  /**
   * An indicator that back order is allowed (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  BackOrderAllowedIndicator?: Array<Indicator> | undefined

  /**
   * The buyer's accounting cost centre for this line item, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  AccountingCostCode?: Array<Code> | undefined

  /**
   * The buyer's accounting cost centre for this line item, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  AccountingCost?: Array<Text> | undefined

  /**
   * Text describing a warranty (provided by WarrantyParty) for the good or service described in this line item.
   * Text
   * Cardinality: 0..n
   * Examples: Unless specified otherwise and in addition to any rights the Customer may have under statute, Dell
   * Examples: warrants to the Customer that Dell branded Products (excluding third party products and software), will
   * Examples: be free from defects in materials and workmanship affecting normal use for a period of one year from
   * Examples: invoice date ( Standard Warranty ).
   */
  WarrantyInformation?: Array<Text> | undefined

  /**
   * A delivery associated with this line item.
   * Delivery
   * Cardinality: 0..n
   */
  Delivery?: Array<Delivery> | undefined

  /**
   * Terms and conditions of the delivery associated with this line item.
   * Delivery Terms
   * Cardinality: 0..1
   */
  DeliveryTerms?: Array<DeliveryTerms> | undefined

  /**
   * The party who originated the Order associated with this line item.
   * Party
   * Cardinality: 0..1
   */
  OriginatorParty?: Array<Party> | undefined

  /**
   * An ordered shipment associated with this line item.
   * Ordered Shipment
   * Cardinality: 0..n
   */
  OrderedShipment?: Array<OrderedShipment> | undefined

  /**
   * A reference to pricing and item location information associated with this line item.
   * Pricing Reference
   * Cardinality: 0..1
   */
  PricingReference?: Array<PricingReference> | undefined

  /**
   * An allowance or charge associated with this line item.
   * Allowance Charge
   * Cardinality: 0..n
   */
  AllowanceCharge?: Array<AllowanceCharge> | undefined

  /**
   * The price of the item of trade associated with this line item.
   * Price
   * Cardinality: 0..1
   */
  Price?: Array<Price> | undefined

  /**
   * The item of trade associated with this line item.
   * Item
   * Cardinality: 1
   */
  Item: Array<Item>

  /**
   * The subsidiary line items that constitute the main line item, such as in a bill of materials.
   * Line Item
   * Cardinality: 0..n
   */
  SubLineItem?: Array<LineItem> | undefined

  /**
   * The period during which the warranty associated with this line item is valid.
   * Period
   * Cardinality: 0..1
   */
  WarrantyValidityPeriod?: Array<Period> | undefined

  /**
   * The party responsible for any warranty associated with this line item.
   * Party
   * Cardinality: 0..1
   */
  WarrantyParty?: Array<Party> | undefined

  /**
   * A total amount of taxes of a particular kind applicable to this item.
   * Tax Total
   * Cardinality: 0..n
   */
  TaxTotal?: Array<TaxTotal> | undefined

  /**
   * The price extension, calculated by multiplying the price per unit by the quantity of items.
   * Price Extension
   * Cardinality: 0..1
   */
  ItemPriceExtension?: Array<PriceExtension> | undefined

  /**
   * A reference to a line in a document associated with this line item.
   * Line Reference
   * Cardinality: 0..n
   */
  LineReference?: Array<LineReference> | undefined
}
