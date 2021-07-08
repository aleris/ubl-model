import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define a category within a classification scheme.
 */
export interface ClassificationCategory {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The name of this category within the classification scheme.
   * Name
   * Cardinality: 0..1
   * Alternative business terms: Code List Name
   * Examples: UNSPSC Class , UNSPSC Segment , UNSPSC Family
   */
  Name?: Array<Text> | undefined

  /**
   * The value of a code used to identify this category within the classification scheme.
   * Text
   * Cardinality: 0..1
   * Alternative business terms: Code Value
   * Examples: 3420001, 3273666, HSJJD-213
   */
  CodeValue?: Array<Text> | undefined

  /**
   * Text describing this category.
   * Text
   * Cardinality: 0..n
   * Alternative business terms: Code Name
   * Examples: Electrical Goods , Wooden Toys
   */
  Description?: Array<Text> | undefined

  /**
   * A recursive description of a subcategory of this category.
   * Classification Category
   * Cardinality: 0..n
   */
  CategorizesClassificationCategory?: Array<ClassificationCategory> | undefined
}
