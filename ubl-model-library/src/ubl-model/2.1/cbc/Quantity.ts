/**
 * A counted number of non-monetary units possibly including fractions.
 */
export interface Quantity {
  /**
   * Quantity
   */
  QuantityContent: number

  /**
   * The unit of the quantity
   * Code
   */
  QuantityUnitCode: string | undefined

  /**
   * The quantity unit code list.
   * Identifier
   */
  QuantityUnitCodeListIdentifier: string | undefined

  /**
   * The identification of the agency that maintains the quantity unit code list
   * Identifier
   * Defaults to the UN/EDIFACT data element 3055 code list.
   */
  QuantityUnitCodeListAgencyIdentifier: string | undefined

  /**
   * The name of the agency which maintains the quantity unit code list.
   * Text
   */
  QuantityUnitCodeListAgencyName: string | undefined
}
