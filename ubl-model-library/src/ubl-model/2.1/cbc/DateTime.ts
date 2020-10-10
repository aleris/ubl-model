/**
 * A particular point in the progression of time together with the relevant supplementary information.
 */
export interface DateTime {
  /**
   * Date Time
   */
  DateTimeContent: string

  /**
   * The format of the date time content
   * Text
   */
  DateTimeFormat: string | undefined
}
