import { AllowanceCharge } from './AllowanceCharge'
import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { ExchangeRate } from './ExchangeRate'
import { Numeric } from '../cbc/Numeric'
import { Period } from './Period'
import { PriceList } from './PriceList'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a price, expressed in a data structure containing multiple properties (compare with
 * UnstructuredPrice).
 */
export interface Price {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The amount of the price.
   * Amount
   * Cardinality: 1
   * Alternative business terms: unit price
   * Examples: 23.45
   */
  PriceAmount: Array<Amount>

  /**
   * The quantity at which this price applies.
   * Quantity
   * Cardinality: 0..1
   */
  BaseQuantity?: Array<Quantity> | undefined

  /**
   * A reason for a price change.
   * Text
   * Cardinality: 0..n
   * Examples: Clearance of old stock , New contract applies
   */
  PriceChangeReason?: Array<Text> | undefined

  /**
   * The type of price, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  PriceTypeCode?: Array<Code> | undefined

  /**
   * The type of price, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: retail, wholesale, discount, contract
   */
  PriceType?: Array<Text> | undefined

  /**
   * The factor by which the base price unit can be converted to the orderable unit.
   * Rate
   * Cardinality: 0..1
   * Examples: Nails are priced by weight but ordered by quantity. So this would say how many nails per kilo
   */
  OrderableUnitFactorRate?: Array<Numeric> | undefined

  /**
   * A period during which this price is valid.
   * Period
   * Cardinality: 0..n
   */
  ValidityPeriod?: Array<Period> | undefined

  /**
   * Information about a price list applicable to this price.
   * Price List
   * Cardinality: 0..1
   */
  PriceList?: Array<PriceList> | undefined

  /**
   * An allowance or charge associated with this price.
   * Allowance Charge
   * Cardinality: 0..n
   */
  AllowanceCharge?: Array<AllowanceCharge> | undefined

  /**
   * The exchange rate applicable to this price, if it differs from the exchange rate applicable to the document as a
   * whole.
   * Exchange Rate
   * Cardinality: 0..1
   */
  PricingExchangeRate?: Array<ExchangeRate> | undefined

  /**
   * The price expressed in an alternative currency
   * Price
   * Cardinality: 0..n
   */
  AlternativeCurrencyPrice?: Array<Price> | undefined
}
