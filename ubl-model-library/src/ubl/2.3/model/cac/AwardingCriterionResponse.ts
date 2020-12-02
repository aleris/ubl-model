import { Amount } from '../cbc/Amount'
import { Identifier } from '../cbc/Identifier'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * Defines the response for an awarding criterion from the tendering party.
 */
export interface AwardingCriterionResponse {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identification of this awarding criterion response.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * An identifer of the awarding criterion being referred to.
   * Identifier
   * Cardinality: 0..1
   */
  AwardingCriterionID?: Array<Identifier> | undefined

  /**
   * Describes the awarding criterion.
   * Text
   * Cardinality: 0..n
   */
  AwardingCriterionDescription?: Array<Text> | undefined

  /**
   * Describes the awarding criterion response.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * Specifies the quantity tendered for this awarding criterion.
   * Quantity
   * Cardinality: 0..1
   */
  Quantity?: Array<Quantity> | undefined

  /**
   * Specifies the monetary amount tendered for this awarding criterion.
   * Amount
   * Cardinality: 0..1
   */
  Amount?: Array<Amount> | undefined

  /**
   * Defines responses to any subsidiary awarding criterion.
   * Awarding Criterion Response
   * Cardinality: 0..n
   */
  SubordinateAwardingCriterionResponse?: Array<AwardingCriterionResponse> | undefined
}
