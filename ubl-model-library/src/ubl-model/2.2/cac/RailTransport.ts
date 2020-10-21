import { Identifier } from '../cbc/Identifier'

/**
 * A class defining details about a train wagon used as a means of transport.
 */
export interface RailTransport {
  /**
   * An identifier for the train used as the means of transport.
   * Identifier
   * Cardinality: 1
   * Alternative business terms: Train Number (WCO ID 167)
   */
  TrainID: [Identifier]

  /**
   * An identifier for the rail car on the train used as the means of transport.
   * Identifier
   * Cardinality: 0..1
   */
  RailCarID?: [Identifier] | undefined
}
