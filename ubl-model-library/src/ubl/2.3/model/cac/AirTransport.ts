import { Identifier } from '../cbc/Identifier'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to identify a specific aircraft used for transportation.
 */
export interface AirTransport {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifer for a specific aircraft.
   * Identifier
   * Cardinality: 1
   */
  AircraftID: Array<Identifier>
}
