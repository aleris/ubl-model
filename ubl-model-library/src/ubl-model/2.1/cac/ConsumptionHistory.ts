import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'

/**
 * A class to describe the measurement of a type of consumption during a particular period, used for the subscriber to
 * get an overview of his consumption
 */
export interface ConsumptionHistory {
  /**
   * A text identifier for the meter measuring the consumption.
   * Text
   * Cardinality: 0..1
   * Examples: 61722x
   */
  MeterNumber: [Text] | undefined

  /**
   * The quantity consumed.
   * Quantity
   * Cardinality: 1
   * Examples: 7621.00
   */
  Quantity: [Quantity]

  /**
   * The monetary amount to be charged for the quantity consumed.
   * Amount
   * Cardinality: 0..1
   */
  Amount: [Amount] | undefined

  /**
   * The consumption level, expressed as a code used explain the consumption quantity, e.g.. diversion from the normal.
   * Code
   * Cardinality: 0..1
   * Examples: B
   */
  ConsumptionLevelCode: [Code] | undefined

  /**
   * The consumption level, expressed as text, used explain the consumption quantity, e.g.. diversion from the normal.
   * Text
   * Cardinality: 0..1
   * Examples: Average
   */
  ConsumptionLevel: [Text] | undefined

  /**
   * Text describing the consumption itself.
   * Text
   * Cardinality: 0..n
   * Examples: 2004/2005
   */
  Description: Array<Text> | undefined

  /**
   * The period during which the consumption took place.
   * Period
   * Cardinality: 1
   */
  Period: [Period]
}
