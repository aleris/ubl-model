import { Address } from './Address'
import { AllowanceCharge } from './AllowanceCharge'
import { DeliveryUnit } from './DeliveryUnit'
import { DependentPriceReference } from './DependentPriceReference'
import { Indicator } from '../cbc/Indicator'
import { Measure } from '../cbc/Measure'
import { Package } from './Package'
import { Price } from './Price'
import { Quantity } from '../cbc/Quantity'
import { TaxCategory } from './TaxCategory'
import { Text } from '../cbc/Text'

/**
 * A class for information about pricing structure, lead time, and location associated with an item.
 */
export interface ItemLocationQuantity {
  /**
   * The lead time, i.e., the time taken from the time at which an item is ordered to the time of its delivery.
   * Measure
   * Cardinality: 0..1
   * Examples: 2 days , 24 hours
   */
  LeadTimeMeasure?: [Measure] | undefined

  /**
   * The minimum quantity that can be ordered to qualify for a specific price.
   * Quantity
   * Cardinality: 0..1
   * Examples: 10 boxes , 1 carton , 1000 sheets
   */
  MinimumQuantity?: [Quantity] | undefined

  /**
   * The maximum quantity that can be ordered to qualify for a specific price.
   * Quantity
   * Cardinality: 0..1
   * Examples: 10 boxes , 1 carton , 1000 sheets
   */
  MaximumQuantity?: [Quantity] | undefined

  /**
   * An indication that the transported item, as delivered, in the stated quantity to the stated location, is subject to
   * an international regulation concerning the carriage of dangerous goods (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: Default is negative
   */
  HazardousRiskIndicator?: [Indicator] | undefined

  /**
   * Text describing trade restrictions on the quantity of this item or on the item itself.
   * Text
   * Cardinality: 0..n
   * Examples: not for export
   */
  TradingRestrictions?: Array<Text> | undefined

  /**
   * The applicable sales territory.
   * Address
   * Cardinality: 0..n
   */
  ApplicableTerritoryAddress?: Array<Address> | undefined

  /**
   * The price associated with the given location.
   * Price
   * Cardinality: 0..1
   */
  Price?: [Price] | undefined

  /**
   * A delivery unit in which the item is located.
   * Delivery Unit
   * Cardinality: 0..n
   */
  DeliveryUnit?: Array<DeliveryUnit> | undefined

  /**
   * A tax category applicable to this item location quantity.
   * Tax Category
   * Cardinality: 0..n
   */
  ApplicableTaxCategory?: Array<TaxCategory> | undefined

  /**
   * The package to which this price applies.
   * Package
   * Cardinality: 0..1
   */
  Package?: [Package] | undefined

  /**
   * An allowance or charge associated with this item location quantity.
   * Allowance Charge
   * Cardinality: 0..n
   */
  AllowanceCharge?: Array<AllowanceCharge> | undefined

  /**
   * The price of the item as a percentage of the price of some other item.
   * Dependent Price Reference
   * Cardinality: 0..1
   */
  DependentPriceReference?: [DependentPriceReference] | undefined
}
