import { Numeric } from '../cbc/Numeric'
import { Party } from './Party'

/**
 * A class to describe a shareholder party.
 */
export interface ShareholderParty {
  /**
   * The shareholder participation, expressed as a percentage.
   * Percent
   * Cardinality: 0..1
   */
  PartecipationPercent?: [Numeric] | undefined

  /**
   * The shareholder party.
   * Party
   * Cardinality: 0..1
   */
  Party?: [Party] | undefined
}
