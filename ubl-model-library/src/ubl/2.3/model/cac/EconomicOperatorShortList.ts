import { Party } from './Party'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to provide information about the preselection of a short list of economic operators for consideration as
 * possible candidates in a tendering process.
 */
export interface EconomicOperatorShortList {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * Text describing the criteria used to restrict the number of candidates.
   * Text
   * Cardinality: 0..n
   */
  LimitationDescription?: Array<Text> | undefined

  /**
   * The number of economic operators expected to be on the short list.
   * Quantity
   * Cardinality: 0..1
   */
  ExpectedQuantity?: Array<Quantity> | undefined

  /**
   * The maximum number of economic operators on the short list.
   * Quantity
   * Cardinality: 0..1
   */
  MaximumQuantity?: Array<Quantity> | undefined

  /**
   * The minimum number of economic operators on the short list.
   * Quantity
   * Cardinality: 0..1
   */
  MinimumQuantity?: Array<Quantity> | undefined

  /**
   * The parties pre-selected allowed to submit tenders in a negotiated procedure. Negotiated procedure is a type of
   * procedure where the contracting authorities can set the parties to be invited in the procurement project
   * Party
   * Cardinality: 0..n
   */
  PreSelectedParty?: Array<Party> | undefined
}
