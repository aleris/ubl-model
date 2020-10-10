import { Code } from '../cbc/Code'
import { EmissionCalculationMethod } from './EmissionCalculationMethod'
import { Measure } from '../cbc/Measure'
import { Text } from '../cbc/Text'

/**
 * A class to describe an environmental emission.
 */
export interface EnvironmentalEmission {
  /**
   * A code specifying the type of environmental emission.
   * Code
   * Cardinality: 1
   */
  EnvironmentalEmissionTypeCode: [Code]

  /**
   * A value measurement for the environmental emission.
   * Measure
   * Cardinality: 1
   */
  ValueMeasure: [Measure]

  /**
   * Text describing this environmental emission.
   * Text
   * Cardinality: 0..n
   */
  Description: Array<Text> | undefined

  /**
   * A method used to calculate the amount of this emission.
   * Emission Calculation Method
   * Cardinality: 0..n
   */
  EmissionCalculationMethod: Array<EmissionCalculationMethod> | undefined
}
