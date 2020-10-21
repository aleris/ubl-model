import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { TelecommunicationsSupplyLine } from './TelecommunicationsSupplyLine'
import { Text } from '../cbc/Text'

/**
 * A class describing the supply of a telecommunication service, e.g., providing telephone calls.
 */
export interface TelecommunicationsSupply {
  /**
   * The type of telecommunications supply, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: Itemized tele Statement
   */
  TelecommunicationsSupplyType?: [Text] | undefined

  /**
   * The type of telecommunications supply, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: TeleExtended
   */
  TelecommunicationsSupplyTypeCode?: [Code] | undefined

  /**
   * A code signifying the level of confidentiality of this information for this telecommunication supply.
   * Code
   * Cardinality: 1
   * Examples: CompanyLevel
   */
  PrivacyCode: [Code]

  /**
   * Text describing the telecommunications supply.
   * Text
   * Cardinality: 0..n
   * Examples: Extended conversation Statement January quarter 2008.
   */
  Description?: Array<Text> | undefined

  /**
   * The total amount associated with this telecommunications supply.
   * Amount
   * Cardinality: 0..1
   */
  TotalAmount?: [Amount] | undefined

  /**
   * Outlines the provided telecommunication supply
   * Telecommunications Supply Line
   * Cardinality: 1..n
   */
  TelecommunicationsSupplyLine: Array<TelecommunicationsSupplyLine>
}
