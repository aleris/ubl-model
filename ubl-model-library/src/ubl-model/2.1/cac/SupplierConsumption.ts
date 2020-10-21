import { Consumption } from './Consumption'
import { ConsumptionLine } from './ConsumptionLine'
import { Contract } from './Contract'
import { Party } from './Party'
import { Text } from '../cbc/Text'

/**
 * The consumption in case the consumption is for one and only one supplier.
 */
export interface SupplierConsumption {
  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   * Examples: This is what you pay for electricity to DONG Energy North Utility
   */
  Description?: Array<Text> | undefined

  /**
   * The party supplying the utility.
   * Party
   * Cardinality: 0..1
   */
  UtilitySupplierParty?: [Party] | undefined

  /**
   * The utility customer.
   * Party
   * Cardinality: 0..1
   */
  UtilityCustomerParty?: [Party] | undefined

  /**
   * The consumption regarding this supplier
   * Consumption
   * Cardinality: 1
   */
  Consumption: [Consumption]

  /**
   * A contract setting forth conditions regulating the consumption.
   * Contract
   * Cardinality: 0..1
   */
  Contract?: [Contract] | undefined

  /**
   * The consumption of a utility product.
   * Consumption Line
   * Cardinality: 1..n
   */
  ConsumptionLine: Array<ConsumptionLine>
}
