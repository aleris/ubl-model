import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a regulation.
 */
export interface Regulation {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A name for this regulation.
   * Name
   * Cardinality: 1
   */
  Name: Array<Text>

  /**
   * Text describing a legal reference.
   * Text
   * Cardinality: 0..1
   * Examples: Art. 45 2 b
   */
  LegalReference?: Array<Text> | undefined

  /**
   * The Uniform Resource Identifier (URI) of an ontology related to this regulation.
   * Identifier
   * Cardinality: 0..1
   */
  OntologyURI?: Array<Identifier> | undefined
}
