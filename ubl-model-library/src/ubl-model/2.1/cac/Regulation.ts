import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * A class to describe a regulation.
 */
export interface Regulation {
  /**
   * A name for this regulation.
   * Name
   * Cardinality: 1
   */
  Name: [Text]

  /**
   * Text describing a legal reference.
   * Text
   * Cardinality: 0..1
   * Examples: Art. 45 2 b
   */
  LegalReference: [Text] | undefined

  /**
   * The Uniform Resource Identifier (URI) of an ontology related to this regulation.
   * Identifier
   * Cardinality: 0..1
   */
  OntologyURI: [Identifier] | undefined
}
