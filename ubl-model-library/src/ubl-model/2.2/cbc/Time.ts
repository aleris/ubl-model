/**
 * A particular time point in the progression of time together with the relevant supplementary information.
 */
export interface Time {
  /**
   * Time
   */
  _: string

  /**
   * The format of the time content
   * Text
   */
  format: string | undefined
}
