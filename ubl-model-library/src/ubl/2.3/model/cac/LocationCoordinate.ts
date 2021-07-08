import { Code } from '../cbc/Code'
import { Measure } from '../cbc/Measure'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class for defining a set of geographical coordinates (apparently misnamed).
 */
export interface LocationCoordinate {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code signifying the location system used.
   * Code
   * Cardinality: 0..1
   */
  CoordinateSystemCode?: Array<Code> | undefined

  /**
   * The degree component of a latitude measured in degrees and minutes.
   * Measure
   * Cardinality: 0..1
   */
  LatitudeDegreesMeasure?: Array<Measure> | undefined

  /**
   * The minutes component of a latitude measured in degrees and minutes (modulo 60).
   * Measure
   * Cardinality: 0..1
   */
  LatitudeMinutesMeasure?: Array<Measure> | undefined

  /**
   * A code signifying the direction of latitude measurement from the equator (north or south).
   * Code
   * Cardinality: 0..1
   */
  LatitudeDirectionCode?: Array<Code> | undefined

  /**
   * The degree component of a longitude measured in degrees and minutes.
   * Measure
   * Cardinality: 0..1
   */
  LongitudeDegreesMeasure?: Array<Measure> | undefined

  /**
   * The minutes component of a longitude measured in degrees and minutes (modulo 60).
   * Measure
   * Cardinality: 0..1
   */
  LongitudeMinutesMeasure?: Array<Measure> | undefined

  /**
   * A code signifying the direction of longitude measurement from the prime meridian (east or west).
   * Code
   * Cardinality: 0..1
   */
  LongitudeDirectionCode?: Array<Code> | undefined

  /**
   * The altitude of the location.
   * Measure
   * Cardinality: 0..1
   */
  AltitudeMeasure?: Array<Measure> | undefined
}
