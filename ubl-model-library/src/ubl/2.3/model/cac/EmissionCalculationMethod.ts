import { Code } from '../cbc/Code'
import { Location } from './Location'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define how an environmental emission is calculated.
 */
export interface EmissionCalculationMethod {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code signifying the method used to calculate the emission.
   * Code
   * Cardinality: 0..1
   */
  CalculationMethodCode?: Array<Code> | undefined

  /**
   * A code signifying whether a piece of transport equipment is full, partially full, or empty. This indication is used
   * as a parameter when calculating the environmental emission.
   * Code
   * Cardinality: 0..1
   */
  FullnessIndicationCode?: Array<Code> | undefined

  /**
   * A start location from which an environmental emission is calculated.
   * Location
   * Cardinality: 0..1
   */
  MeasurementFromLocation?: Array<Location> | undefined

  /**
   * An end location to which an environmental emission is calculated.
   * Location
   * Cardinality: 0..1
   */
  MeasurementToLocation?: Array<Location> | undefined
}
