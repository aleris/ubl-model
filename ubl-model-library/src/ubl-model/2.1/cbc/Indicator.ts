/**
 * A list of two mutually exclusive Boolean values that express the only possible states of a Property.
 */
export interface Indicator {
  /**
   * Indicator
   */
  IndicatorContent: string

  /**
   * Whether the indicator is numeric, textual or binary.
   * Text
   */
  IndicatorFormat?: string | undefined
}
