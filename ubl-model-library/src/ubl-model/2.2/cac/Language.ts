import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * A class to describe a language.
 */
export interface Language {
  /**
   * An identifier for this language.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * The name of this language.
   * Name
   * Cardinality: 0..1
   */
  Name: [Text] | undefined

  /**
   * A code signifying the locale in which this language is used.
   * Code
   * Cardinality: 0..1
   */
  LocaleCode: [Code] | undefined
}
