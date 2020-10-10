import { Code } from '../cbc/Code'

/**
 * A class to define a set of codes that describes a retail tactic.
 */
export interface EventTacticEnumeration {
  /**
   * A code signifying the type of consumer incentive. Examples include:Free Item, Temporary Price reduction
   * Code
   * Cardinality: 0..1
   */
  ConsumerIncentiveTacticTypeCode: [Code] | undefined

  /**
   * A code signifying the type of display. Examples Include: ON_COUNTER_DISPLAY, FLOOR_GRAPHICS FLOOR_STACK_DISPLAY
   * Code
   * Cardinality: 0..1
   */
  DisplayTacticTypeCode: [Code] | undefined

  /**
   * A code signifying a special feature. Examples Include: BILLBOARD DIRECT_MAIL_AD, FLYER
   * Code
   * Cardinality: 0..1
   */
  FeatureTacticTypeCode: [Code] | undefined

  /**
   * A code signifying the type of trade item packing and labeling. Examples Include: BONUS_SIZE CO_BRANDED_TRADE_ITEM
   * Code
   * Cardinality: 0..1
   */
  TradeItemPackingLabelingTypeCode: [Code] | undefined
}
