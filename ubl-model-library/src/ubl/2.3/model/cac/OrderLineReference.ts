import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { OrderReference } from './OrderReference'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a reference to an order line.
 */
export interface OrderLineReference {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the referenced order line, assigned by the buyer.
   * Identifier
   * Cardinality: 1
   */
  LineID: Array<Identifier>

  /**
   * An identifier for the referenced order line, assigned by the seller.
   * Identifier
   * Cardinality: 0..1
   */
  SalesOrderLineID?: Array<Identifier> | undefined

  /**
   * A universally unique identifier for this order line reference.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: Array<Identifier> | undefined

  /**
   * A code signifying the status of the referenced order line with respect to its original state.
   * Code
   * Cardinality: 0..1
   */
  LineStatusCode?: Array<Code> | undefined

  /**
   * A reference to the Order containing the referenced order line.
   * Order Reference
   * Cardinality: 0..1
   */
  OrderReference?: Array<OrderReference> | undefined
}
