/**
 * Numeric information that is assigned or is determined by calculation, counting, or sequencing. It does not require a
 * unit of quantity or unit of measure.
 */
export interface Numeric {
  /**
   * Numeric
   */
  _: string

  /**
   * Whether the number is an integer, decimal, real number or percentage.
   * Text
   */
  format: string | undefined
}
