import { Code } from '../cbc/Code'

/**
 * A class to specify which day of the week a transport service is operational.
 */
export interface ServiceFrequency {
  /**
   * A day of the week, expressed as code.
   * Code
   * Cardinality: 1
   */
  WeekDayCode: [Code]
}
