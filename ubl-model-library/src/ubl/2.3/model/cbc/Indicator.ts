/**
 * A list of two mutually exclusive Boolean values that express the only possible states of a Property.
 */
export interface Indicator {
  /**
   * Indicator
   */
  _: boolean

  /**
   * Whether the indicator is numeric, textual or binary.
   * Text
   */
  format?: boolean | undefined
}
