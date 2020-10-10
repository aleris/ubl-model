/**
 * A particular time point in the progression of time together with the relevant supplementary information.
 */
export interface Time {
  /**
   * Time
   */
  TimeContent: string

  /**
   * The format of the time content
   * Text
   */
  TimeFormat: string | undefined
}
