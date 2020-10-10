import { Code } from '../cbc/Code'
import { Location } from './Location'

/**
 * A class to define how an environmental emission is calculated.
 */
export interface EmissionCalculationMethod {
  /**
   * A code signifying the method used to calculate the emission.
   * Code
   * Cardinality: 0..1
   */
  CalculationMethodCode: [Code] | undefined

  /**
   * A code signifying whether a piece of transport equipment is full, partially full, or empty. This indication is used
   * as a parameter when calculating the environmental emission.
   * Code
   * Cardinality: 0..1
   */
  FullnessIndicationCode: [Code] | undefined

  /**
   * A start location from which an environmental emission is calculated.
   * Location
   * Cardinality: 0..1
   */
  MeasurementFromLocation: [Location] | undefined

  /**
   * An end location to which an environmental emission is calculated.
   * Location
   * Cardinality: 0..1
   */
  MeasurementToLocation: [Location] | undefined
}
