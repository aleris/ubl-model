import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Period } from './Period'
import { SalesItem } from './SalesItem'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * Detailed information about a particular Forecast Line within a Forecast Document
 */
export interface ForecastLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this forecast line.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * An indicator that the status of the forecast is modifiable (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  FrozenDocumentIndicator?: Array<Indicator> | undefined

  /**
   * A code signifying the type of forecast. Examples: BASE PROMOTIONAL SEASONAL TOTAL
   * Code
   * Cardinality: 1
   * Examples: seasonal, total
   */
  ForecastTypeCode: Array<Code>

  /**
   * The period to which the forecast applies.
   * Period
   * Cardinality: 0..1
   */
  ForecastPeriod?: Array<Period> | undefined

  /**
   * Sales information for the item to which this line applies.
   * Sales Item
   * Cardinality: 0..1
   */
  SalesItem?: Array<SalesItem> | undefined
}
