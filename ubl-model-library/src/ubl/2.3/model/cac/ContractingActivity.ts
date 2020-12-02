import { Code } from '../cbc/Code'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * The nature of the type of business of the organization.
 */
export interface ContractingActivity {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code specifying the nature of the type of business of the organization.
   * Code
   * Cardinality: 0..1
   */
  ActivityTypeCode?: Array<Code> | undefined

  /**
   * The nature of the type of business of the organization, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  ActivityType?: Array<Text> | undefined
}
