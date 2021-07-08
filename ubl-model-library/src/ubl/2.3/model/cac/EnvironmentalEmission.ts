import { Code } from '../cbc/Code'
import { EmissionCalculationMethod } from './EmissionCalculationMethod'
import { Measure } from '../cbc/Measure'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe an environmental emission.
 */
export interface EnvironmentalEmission {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code specifying the type of environmental emission.
   * Code
   * Cardinality: 1
   */
  EnvironmentalEmissionTypeCode: Array<Code>

  /**
   * A value measurement for the environmental emission.
   * Measure
   * Cardinality: 1
   */
  ValueMeasure: Array<Measure>

  /**
   * Text describing this environmental emission.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * A method used to calculate the amount of this emission.
   * Emission Calculation Method
   * Cardinality: 0..n
   */
  EmissionCalculationMethod?: Array<EmissionCalculationMethod> | undefined
}
