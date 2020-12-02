import { Code } from '../cbc/Code'
import { Contract } from './Contract'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Numeric } from '../cbc/Numeric'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define an exchange rate.
 */
export interface ExchangeRate {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The reference currency for this exchange rate; the currency from which the exchange is being made.
   * Code
   * Cardinality: 1
   */
  SourceCurrencyCode: Array<Code>

  /**
   * In the case of a source currency with denominations of small value, the unit base.
   * Rate
   * Cardinality: 0..1
   */
  SourceCurrencyBaseRate?: Array<Numeric> | undefined

  /**
   * The target currency for this exchange rate; the currency to which the exchange is being made.
   * Code
   * Cardinality: 1
   */
  TargetCurrencyCode: Array<Code>

  /**
   * In the case of a target currency with denominations of small value, the unit base.
   * Rate
   * Cardinality: 0..1
   */
  TargetCurrencyBaseRate?: Array<Numeric> | undefined

  /**
   * An identifier for the currency exchange market used as the source of this exchange rate.
   * Identifier
   * Cardinality: 0..1
   */
  ExchangeMarketID?: Array<Identifier> | undefined

  /**
   * The factor applied to the source currency to calculate the target currency.
   * Rate
   * Cardinality: 0..1
   */
  CalculationRate?: Array<Numeric> | undefined

  /**
   * A code signifying whether the calculation rate is a multiplier or a divisor.
   * Code
   * Cardinality: 0..1
   */
  MathematicOperatorCode?: Array<Code> | undefined

  /**
   * The date on which the exchange rate was established.
   * Date
   * Cardinality: 0..1
   */
  Date?: Array<Date> | undefined

  /**
   * A contract for foreign exchange.
   * Contract
   * Cardinality: 0..1
   */
  ForeignExchangeContract?: Array<Contract> | undefined
}
