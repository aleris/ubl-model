import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define a reference to an earlier consumption report (e.g., last year's consumption).
 */
export interface ConsumptionReportReference {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the referenced consumption report.
   * Identifier
   * Cardinality: 1
   * Examples: n/a
   */
  ConsumptionReportID: Array<Identifier>

  /**
   * The reported consumption type, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: Consumption
   */
  ConsumptionType?: Array<Text> | undefined

  /**
   * The reported consumption type, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: Consumption
   */
  ConsumptionTypeCode?: Array<Code> | undefined

  /**
   * The total quantity consumed during the period of the referenced report.
   * Quantity
   * Cardinality: 1
   * Examples: 20479.00
   */
  TotalConsumedQuantity: Array<Quantity>

  /**
   * The period of consumption covered by the referenced report.
   * Period
   * Cardinality: 1
   */
  Period: Array<Period>
}
