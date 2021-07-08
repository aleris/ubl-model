import { Dimension } from './Dimension'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a location on board a means of transport where specified goods or transport equipment have been
 * stowed or are to be stowed.
 */
export interface Stowage {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the location.
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: Cell Location, coded
   */
  LocationID?: Array<Identifier> | undefined

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
