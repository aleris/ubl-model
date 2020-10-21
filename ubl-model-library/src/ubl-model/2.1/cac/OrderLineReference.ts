import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { OrderReference } from './OrderReference'

/**
 * A class to define a reference to an order line.
 */
export interface OrderLineReference {
  /**
   * An identifier for the referenced order line, assigned by the buyer.
   * Identifier
   * Cardinality: 1
   */
  LineID: [Identifier]

  /**
   * An identifier for the referenced order line, assigned by the seller.
   * Identifier
   * Cardinality: 0..1
   */
  SalesOrderLineID?: [Identifier] | undefined

  /**
   * A universally unique identifier for this order line reference.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: [Identifier] | undefined

  /**
   * A code signifying the status of the referenced order line with respect to its original state.
   * Code
   * Cardinality: 0..1
   */
  LineStatusCode?: [Code] | undefined

  /**
   * A reference to the Order containing the referenced order line.
   * Order Reference
   * Cardinality: 0..1
   */
  OrderReference?: [OrderReference] | undefined
}
