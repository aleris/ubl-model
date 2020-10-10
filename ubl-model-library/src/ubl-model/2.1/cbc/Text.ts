/**
 * A character string (i.e. a finite set of characters) generally in the form of words of a language.
 */
export interface Text {
  /**
   * Text
   */
  TextContent: string

  /**
   * The identifier of the language used in the content component.
   * Identifier
   */
  TextLanguageIdentifier: string | undefined

  /**
   * The identification of the locale of the language.
   * Identifier
   */
  TextLanguageLocaleIdentifier: string | undefined
}
