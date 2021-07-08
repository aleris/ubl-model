import { Party } from './Party'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A party that is identified as the awarded by a tender result.
 */
export interface WinningParty {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * Indicates the rank obtained in the award.
   * Text
   * Cardinality: 0..1
   */
  Rank?: Array<Text> | undefined

  /**
   * Information about an organization, sub-organization, or individual fulfilling a role in a business process.
   * Party
   * Cardinality: 1
   */
  Party: Array<Party>
}
