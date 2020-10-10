import { Identifier } from '../cbc/Identifier'

/**
 * A class for identifying a vehicle used for road transport.
 */
export interface RoadTransport {
  /**
   * The license plate identifier of this vehicle.
   * Identifier
   * Cardinality: 1
   * Alternative business terms: Vehicle registration number (WCO ID 167)
   */
  LicensePlateID: [Identifier]
}
