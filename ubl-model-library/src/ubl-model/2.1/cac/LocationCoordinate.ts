import { Code } from '../cbc/Code'
import { Measure } from '../cbc/Measure'

/**
 * A class for defining a set of geographical coordinates (apparently misnamed).
 */
export interface LocationCoordinate {
  /**
   * A code signifying the location system used.
   * Code
   * Cardinality: 0..1
   */
  CoordinateSystemCode?: [Code] | undefined

  /**
   * The degree component of a latitude measured in degrees and minutes.
   * Measure
   * Cardinality: 0..1
   */
  LatitudeDegreesMeasure?: [Measure] | undefined

  /**
   * The minutes component of a latitude measured in degrees and minutes (modulo 60).
   * Measure
   * Cardinality: 0..1
   */
  LatitudeMinutesMeasure?: [Measure] | undefined

  /**
   * A code signifying the direction of latitude measurement from the equator (north or south).
   * Code
   * Cardinality: 0..1
   */
  LatitudeDirectionCode?: [Code] | undefined

  /**
   * The degree component of a longitude measured in degrees and minutes.
   * Measure
   * Cardinality: 0..1
   */
  LongitudeDegreesMeasure?: [Measure] | undefined

  /**
   * The minutes component of a longitude measured in degrees and minutes (modulo 60).
   * Measure
   * Cardinality: 0..1
   */
  LongitudeMinutesMeasure?: [Measure] | undefined

  /**
   * A code signifying the direction of longitude measurement from the prime meridian (east or west).
   * Code
   * Cardinality: 0..1
   */
  LongitudeDirectionCode?: [Code] | undefined

  /**
   * The altitude of the location.
   * Measure
   * Cardinality: 0..1
   */
  AltitudeMeasure?: [Measure] | undefined
}
