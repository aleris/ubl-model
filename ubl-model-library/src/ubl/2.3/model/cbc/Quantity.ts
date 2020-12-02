/**
 * A counted number of non-monetary units possibly including fractions.
 */
export interface Quantity {
  /**
   * Quantity
   */
  _: number

  /**
   * The unit of the quantity
   * Code
   */
  unitCode?: string | undefined

  /**
   * The quantity unit code list.
   * Identifier
   */
  unitCodeListID?: string | undefined

  /**
   * The identification of the agency that maintains the quantity unit code list
   * Identifier
   * Defaults to the UN/EDIFACT data element 3055 code list.
   */
  unitCodeListAgencyID?: string | undefined

  /**
   * The name of the agency which maintains the quantity unit code list.
   * Text
   */
  unitCodeListAgencyName?: string | undefined
}
