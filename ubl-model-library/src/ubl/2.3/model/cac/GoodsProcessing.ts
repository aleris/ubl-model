import { Code } from '../cbc/Code'
import { CriterionItem } from './CriterionItem'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'
import { Period } from './Period'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe the processing of goods and products
 */
export interface GoodsProcessing {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this goods processing.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * A type code for this goods processing.
   * Code
   * Cardinality: 0..1
   */
  TypeCode?: Array<Code> | undefined

  /**
   * A description for this goods processing expressed in one or more languages
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * The period within this goods processing was performed
   * Period
   * Cardinality: 0..1
   */
  Period?: Array<Period> | undefined

  /**
   * The party processing the goods
   * Party
   * Cardinality: 0..1
   */
  ProcessingParty?: Array<Party> | undefined

  /**
   * A reference to a criterion item that applies to this goods processing
   * Criterion Item
   * Cardinality: 0..n
   */
  CriterionItem?: Array<CriterionItem> | undefined

  /**
   * A subordinate processing to this goods processing
   * Goods Processing
   * Cardinality: 0..n
   */
  SubGoodsProcessing?: Array<GoodsProcessing> | undefined
}
