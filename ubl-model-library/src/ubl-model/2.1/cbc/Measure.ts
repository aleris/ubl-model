/**
 * A numeric value determined by measuring an object along with the specified unit of measure.
 */
export interface Measure {
  /**
   * Measure
   */
  MeasureContent: number

  /**
   * The type of unit of measure.
   * Code
   * Reference UNECE Rec. 20 and X12 355
   */
  MeasureUnitCode: string | undefined

  /**
   * The version of the measure unit code list.
   * Identifier
   */
  MeasureUnitCodeListVersionIdentifier: string | undefined
}
