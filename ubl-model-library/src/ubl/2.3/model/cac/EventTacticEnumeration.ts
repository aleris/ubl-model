import { Code } from '../cbc/Code'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define a set of codes that describes a retail tactic.
 */
export interface EventTacticEnumeration {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code signifying the type of consumer incentive. Examples include:Free Item, Temporary Price reduction
   * Code
   * Cardinality: 0..1
   */
  ConsumerIncentiveTacticTypeCode?: Array<Code> | undefined

  /**
   * A code signifying the type of display. Examples Include: ON_COUNTER_DISPLAY, FLOOR_GRAPHICS FLOOR_STACK_DISPLAY
   * Code
   * Cardinality: 0..1
   */
  DisplayTacticTypeCode?: Array<Code> | undefined

  /**
   * A code signifying a special feature. Examples Include: BILLBOARD DIRECT_MAIL_AD, FLYER
   * Code
   * Cardinality: 0..1
   */
  FeatureTacticTypeCode?: Array<Code> | undefined

  /**
   * A code signifying the type of trade item packing and labeling. Examples Include: BONUS_SIZE CO_BRANDED_TRADE_ITEM
   * Code
   * Cardinality: 0..1
   */
  TradeItemPackingLabelingTypeCode?: Array<Code> | undefined
}
