import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { ItemProperty } from './ItemProperty'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class for defining a lot identifier (the identifier of a set of item instances that would be used in case of a
 * recall of that item).
 */
export interface LotIdentification {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the lot.
   * Identifier
   * Cardinality: 0..1
   */
  LotNumberID?: Array<Identifier> | undefined

  /**
   * The expiry date of the lot.
   * Date
   * Cardinality: 0..1
   */
  ExpiryDate?: Array<Date> | undefined

  /**
   * An additional property of the lot.
   * Item Property
   * Cardinality: 0..n
   */
  AdditionalItemProperty?: Array<ItemProperty> | undefined
}
