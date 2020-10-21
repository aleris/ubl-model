/**
 * A character string (letters, figures, or symbols) that for brevity and/or languange independence may be used to
 * represent or replace a definitive value or text of an attribute together with relevant supplementary information.
 */
export interface Code {
  /**
   * Code
   */
  CodeContent: string

  /**
   * The identification of a list of codes.
   * Identifier
   */
  CodeListIdentifier?: string | undefined

  /**
   * An agency that maintains one or more lists of codes.
   * Identifier
   * Defaults to the UN/EDIFACT data element 3055 code list.
   */
  CodeListAgencyIdentifier?: string | undefined

  /**
   * The name of the agency that maintains the list of codes.
   * Text
   */
  CodeListAgencyName?: string | undefined

  /**
   * The name of a list of codes.
   * Text
   */
  CodeListName?: string | undefined

  /**
   * The version of the list of codes.
   * Identifier
   */
  CodeListVersionIdentifier?: string | undefined

  /**
   * The textual equivalent of the code content component.
   * Text
   */
  CodeName?: string | undefined

  /**
   * The identifier of the language used in the code name.
   * Identifier
   */
  CodeLanguageIdentifier?: string | undefined

  /**
   * The Uniform Resource Identifier that identifies where the code list is located.
   * Identifier
   */
  CodeListURI?: string | undefined

  /**
   * The Uniform Resource Identifier that identifies where the code list scheme is located.
   * Identifier
   */
  CodeListSchemeURI?: string | undefined
}
