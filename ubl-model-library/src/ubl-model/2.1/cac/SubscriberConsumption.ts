import { Code } from '../cbc/Code'
import { Consumption } from './Consumption'
import { ConsumptionPoint } from './ConsumptionPoint'
import { Identifier } from '../cbc/Identifier'
import { OnAccountPayment } from './OnAccountPayment'
import { Party } from './Party'
import { Quantity } from '../cbc/Quantity'
import { SupplierConsumption } from './SupplierConsumption'
import { Text } from '../cbc/Text'

/**
 * The consumption for a specific party for given consumption point provided by a numbers of suppliers. An enterprise
 * can have one utility statement for several parties (e.g. a ministry of defence receiving a telephone bill). In this
 * way each subscriber consumption represent a sub utility statement.
 */
export interface SubscriberConsumption {
  /**
   * The identifier tor this specification.
   * Identifier
   * Cardinality: 0..1
   */
  ConsumptionID?: [Identifier] | undefined

  /**
   * The code which specifies the type of this specification, e.g. an on account specification or the yearly
   * specification.
   * Code
   * Cardinality: 0..1
   */
  SpecificationTypeCode?: [Code] | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   * Examples: This is how we have calculating your yearly statement
   */
  Note?: Array<Text> | undefined

  /**
   * The total quantity consumed, as calculated from meter readings.
   * Quantity
   * Cardinality: 0..1
   * Examples: 2000.0
   */
  TotalMeteredQuantity?: [Quantity] | undefined

  /**
   * The party subscribing to the utility.
   * Party
   * Cardinality: 0..1
   */
  SubscriberParty?: [Party] | undefined

  /**
   * The point at which the utility is consumed.
   * Consumption Point
   * Cardinality: 1
   */
  UtilityConsumptionPoint: [ConsumptionPoint]

  /**
   * The planned prepayments (on account) regarding this subscription.
   * On Account Payment
   * Cardinality: 0..n
   */
  OnAccountPayment?: Array<OnAccountPayment> | undefined

  /**
   * The consumption in case the consumption is from one and only one supplier.
   * Consumption
   * Cardinality: 0..1
   */
  Consumption?: [Consumption] | undefined

  /**
   * The consumption in case the consumption is from more than one supplier.
   * Supplier Consumption
   * Cardinality: 0..n
   */
  SupplierConsumption?: Array<SupplierConsumption> | undefined
}
