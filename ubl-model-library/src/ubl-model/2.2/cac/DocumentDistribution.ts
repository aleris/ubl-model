import { Code } from '../cbc/Code'
import { Numeric } from '../cbc/Numeric'
import { Party } from './Party'
import { Text } from '../cbc/Text'

/**
 * A class to describe the distribution of a document to an interested party.
 */
export interface DocumentDistribution {
  /**
   * The type of document, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  DocumentTypeCode: [Code] | undefined

  /**
   * Text describing the interested party's distribution rights.
   * Text
   * Cardinality: 1
   */
  PrintQualifier: [Text]

  /**
   * The maximum number of printed copies of the document that the interested party is allowed to make.
   * Numeric
   * Cardinality: 0..1
   */
  MaximumCopiesNumeric: [Numeric] | undefined

  /**
   * The maximum number of printed originals of the document that the interested party is allowed to make.
   * Numeric
   * Cardinality: 0..1
   */
  MaximumOriginalsNumeric: [Numeric] | undefined

  /**
   * The interested party to which the document should be distributed.
   * Party
   * Cardinality: 1
   */
  Party: [Party]
}
