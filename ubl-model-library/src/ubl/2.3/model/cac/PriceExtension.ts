import { Amount } from '../cbc/Amount'
import { TaxTotal } from './TaxTotal'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a price extension, calculated by multiplying the price per unit by the quantity of items.
 */
export interface PriceExtension {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The amount of this price extension.
   * Amount
   * Cardinality: 1
   */
  Amount: Array<Amount>

  /**
   * A total amount of taxes of a particular kind applicable to this price extension.
   * Tax Total
   * Cardinality: 0..n
   */
  TaxTotal?: Array<TaxTotal> | undefined
}
