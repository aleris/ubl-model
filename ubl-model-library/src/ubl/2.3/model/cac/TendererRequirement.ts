import { Code } from '../cbc/Code'
import { Evidence } from './Evidence'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe an action or statement required of an economic operator participating in a tendering process.
 */
export interface TendererRequirement {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A name of this tenderer requirement.
   * Name
   * Cardinality: 0..n
   */
  Name?: Array<Text> | undefined

  /**
   * A code signifying this requirement.
   * Code
   * Cardinality: 0..1
   */
  TendererRequirementTypeCode?: Array<Code> | undefined

  /**
   * Text describing this requirement.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * The legal reference of the exclusion criterion.
   * Text
   * Cardinality: 0..1
   * Examples: Art. 45 2 b
   */
  LegalReference?: Array<Text> | undefined

  /**
   * An item of evidence that should be submitted to satisfy this requirement.
   * Evidence
   * Cardinality: 0..n
   */
  SuggestedEvidence?: Array<Evidence> | undefined
}
