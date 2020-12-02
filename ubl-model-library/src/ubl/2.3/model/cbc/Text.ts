/**
 * A character string (i.e. a finite set of characters) generally in the form of words of a language.
 */
export interface Text {
  /**
   * Text
   */
  _: string

  /**
   * The identifier of the language used in the content component.
   * Identifier
   */
  languageID?: string | undefined

  /**
   * The identification of the locale of the language.
   * Identifier
   */
  languageLocaleID?: string | undefined
}
