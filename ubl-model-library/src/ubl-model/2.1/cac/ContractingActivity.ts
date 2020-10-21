import { Code } from '../cbc/Code'
import { Text } from '../cbc/Text'

/**
 * The nature of the type of business of the organization.
 */
export interface ContractingActivity {
  /**
   * A code specifying the nature of the type of business of the organization.
   * Code
   * Cardinality: 0..1
   */
  ActivityTypeCode?: [Code] | undefined

  /**
   * The nature of the type of business of the organization, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  ActivityType?: [Text] | undefined
}
