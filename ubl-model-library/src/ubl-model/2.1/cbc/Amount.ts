/**
 * A number of monetary units specified in a currency where the unit of the currency is explicit or implied.
 */
export interface Amount {
  /**
   * Amount
   */
  AmountContent: number

  /**
   * The currency of the amount.
   * Identifier
   * Reference UNECE Rec 9, using 3-letter alphabetic codes.
   */
  AmountCurrencyIdentifier?: string | undefined

  /**
   * The VersionID of the UN/ECE Rec9 code list.
   * Identifier
   */
  AmountCurrencyCodeListVersionIdentifier?: string | undefined
}
