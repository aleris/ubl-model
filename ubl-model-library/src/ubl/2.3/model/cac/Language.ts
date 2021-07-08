import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a language.
 */
export interface Language {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this language.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * The name of this language.
   * Name
   * Cardinality: 0..1
   */
  Name?: Array<Text> | undefined

  /**
   * A code signifying the locale in which this language is used.
   * Code
   * Cardinality: 0..1
   */
  LocaleCode?: Array<Code> | undefined
}
