import { Dimension } from './Dimension'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * A class to describe a location on board a means of transport where specified goods or transport equipment have been
 * stowed or are to be stowed.
 */
export interface Stowage {
  /**
   * An identifier for the location.
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: Cell Location, coded
   */
  LocationID?: [Identifier] | undefined

  /**
   * Text describing the location.
   * Text
   * Cardinality: 0..n
   * Alternative business terms: Cell Location
   */
  Location?: Array<Text> | undefined

  /**
   * A measurable dimension (length, mass, weight, or volume) of this stowage.
   * Dimension
   * Cardinality: 0..n
   */
  MeasurementDimension?: Array<Dimension> | undefined
}
