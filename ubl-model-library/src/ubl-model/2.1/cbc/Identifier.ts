/**
 * A character string to identify and distinguish uniquely, one instance of an object in an identification scheme from
 * all other objects in the same scheme together with relevant supplementary information.
 */
export interface Identifier {
  /**
   * Identifier
   */
  IdentifierContent: string

  /**
   * The identification of the identification scheme.
   * Identifier
   */
  IdentifierSchemeIdentifier: string | undefined

  /**
   * The name of the identification scheme.
   * Text
   */
  IdentifierSchemeName: string | undefined

  /**
   * The identification of the agency that maintains the identification scheme.
   * Identifier
   * Defaults to the UN/EDIFACT data element 3055 code list.
   */
  IdentifierSchemeAgencyIdentifier: string | undefined

  /**
   * The name of the agency that maintains the identification scheme.
   * Text
   */
  IdentifierSchemeAgencyName: string | undefined

  /**
   * The version of the identification scheme.
   * Identifier
   */
  IdentifierSchemeVersionIdentifier: string | undefined

  /**
   * The Uniform Resource Identifier that identifies where the identification scheme data is located.
   * Identifier
   */
  IdentifierSchemeDataURI: string | undefined

  /**
   * The Uniform Resource Identifier that identifies where the identification scheme is located.
   * Identifier
   */
  IdentifierSchemeURI: string | undefined
}
