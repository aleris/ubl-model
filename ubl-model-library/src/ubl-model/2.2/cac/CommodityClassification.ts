import { Code } from '../cbc/Code'

/**
 * A class to describe the classification of a commodity.
 */
export interface CommodityClassification {
  /**
   * A code defined by a specific maintenance agency signifying the high-level nature of the commodity.
   * Code
   * Cardinality: 0..1
   * Examples: wooden products 
   */
  NatureCode: [Code] | undefined

  /**
   * A mutually agreed code signifying the type of cargo for purposes of commodity classification.
   * Code
   * Cardinality: 0..1
   * Examples: Refrigerated 
   */
  CargoTypeCode: [Code] | undefined

  /**
   * The harmonized international commodity code for cross border and regulatory (customs and trade statistics)
   * purposes.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Harmonized Code
   * Examples: 1102222883 
   */
  CommodityCode: [Code] | undefined

  /**
   * A code signifying the trade classification of the commodity.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: UN/SPSC Code
   * Examples: 3440234 
   */
  ItemClassificationCode: [Code] | undefined
}
