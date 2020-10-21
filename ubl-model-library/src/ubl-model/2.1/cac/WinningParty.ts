import { Party } from './Party'
import { Text } from '../cbc/Text'

/**
 * A party that is identified as the awarded by a tender result.
 */
export interface WinningParty {
  /**
   * Indicates the rank obtained in the award.
   * Text
   * Cardinality: 0..1
   */
  Rank?: [Text] | undefined

  /**
   * Information about an organization, sub-organization, or individual fulfilling a role in a business process.
   * Party
   * Cardinality: 1
   */
  Party: [Party]
}
