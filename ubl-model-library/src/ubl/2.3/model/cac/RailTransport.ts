import { Identifier } from '../cbc/Identifier'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class defining details about a train wagon used as a means of transport.
 */
export interface RailTransport {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the train used as the means of transport.
   * Identifier
   * Cardinality: 1
   * Alternative business terms: Train Number (WCO ID 167)
   */
  TrainID: Array<Identifier>

  /**
   * An identifier for the rail car on the train used as the means of transport.
   * Identifier
   * Cardinality: 0..1
   */
  RailCarID?: Array<Identifier> | undefined
}
