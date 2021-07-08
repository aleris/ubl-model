import { Numeric } from '../cbc/Numeric'
import { Party } from './Party'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a shareholder party.
 */
export interface ShareholderParty {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The shareholder participation, expressed as a percentage.
   * Percent
   * Cardinality: 0..1
   */
  PartecipationPercent?: Array<Numeric> | undefined

  /**
   * The shareholder party.
   * Party
   * Cardinality: 0..1
   */
  Party?: Array<Party> | undefined
}
