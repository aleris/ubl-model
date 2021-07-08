import { Code } from '../cbc/Code'
import { Numeric } from '../cbc/Numeric'
import { Party } from './Party'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe the distribution of a document to an interested party.
 */
export interface DocumentDistribution {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The type of document, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  DocumentTypeCode?: Array<Code> | undefined

  /**
   * Text describing the interested party's distribution rights.
   * Text
   * Cardinality: 1
   */
  PrintQualifier: Array<Text>

  /**
   * The maximum number of printed copies of the document that the interested party is allowed to make.
   * Numeric
   * Cardinality: 0..1
   */
  MaximumCopiesNumeric?: Array<Numeric> | undefined

  /**
   * The maximum number of printed originals of the document that the interested party is allowed to make.
   * Numeric
   * Cardinality: 0..1
   */
  MaximumOriginalsNumeric?: Array<Numeric> | undefined

  /**
   * The interested party to which the document should be distributed.
   * Party
   * Cardinality: 1
   */
  Party: Array<Party>
}
