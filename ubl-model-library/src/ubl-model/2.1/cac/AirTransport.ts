import { Identifier } from '../cbc/Identifier'

/**
 * A class to identify a specific aircraft used for transportation.
 */
export interface AirTransport {
  /**
   * An identifer for a specific aircraft.
   * Identifier
   * Cardinality: 1
   */
  AircraftID: [Identifier]
}
