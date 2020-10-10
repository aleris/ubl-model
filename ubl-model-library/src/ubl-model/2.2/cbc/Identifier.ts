/**
 * A character string to identify and distinguish uniquely, one instance of an object in an identification scheme from
 * all other objects in the same scheme together with relevant supplementary information.
 */
export interface Identifier {
  /**
   * Identifier
   */
  _: string

  /**
   * The identification of the identification scheme.
   * Identifier
   */
  schemeID: string | undefined

  /**
   * The name of the identification scheme.
   * Text
   */
  schemeName: string | undefined

  /**
   * The identification of the agency that maintains the identification scheme.
   * Identifier
   * Defaults to the UN/EDIFACT data element 3055 code list.
   */
  schemeAgencyID: string | undefined

  /**
   * The name of the agency that maintains the identification scheme.
   * Text
   */
  schemeAgencyName: string | undefined

  /**
   * The version of the identification scheme.
   * Identifier
   */
  schemeVersionID: string | undefined

  /**
   * The Uniform Resource Identifier that identifies where the identification scheme data is located.
   * Identifier
   */
  schemeDataURI: string | undefined

  /**
   * The Uniform Resource Identifier that identifies where the identification scheme is located.
   * Identifier
   */
  schemeURI: string | undefined
}
