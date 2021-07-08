import { Identifier } from '../cbc/Identifier'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class for identifying a vehicle used for road transport.
 */
export interface RoadTransport {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The license plate identifier of this vehicle.
   * Identifier
   * Cardinality: 1
   * Alternative business terms: Vehicle registration number (WCO ID 167)
   */
  LicensePlateID: Array<Identifier>
}
