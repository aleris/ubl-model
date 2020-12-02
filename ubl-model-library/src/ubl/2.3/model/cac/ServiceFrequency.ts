import { Code } from '../cbc/Code'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to specify which day of the week a transport service is operational.
 */
export interface ServiceFrequency {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A day of the week, expressed as code.
   * Code
   * Cardinality: 1
   */
  WeekDayCode: Array<Code>
}
