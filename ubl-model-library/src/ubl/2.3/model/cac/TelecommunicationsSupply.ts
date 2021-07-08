import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { TelecommunicationsSupplyLine } from './TelecommunicationsSupplyLine'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class describing the supply of a telecommunication service, e.g., providing telephone calls.
 */
export interface TelecommunicationsSupply {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The type of telecommunications supply, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: Itemized tele Statement
   */
  TelecommunicationsSupplyType?: Array<Text> | undefined

  /**
   * The type of telecommunications supply, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: TeleExtended
   */
  TelecommunicationsSupplyTypeCode?: Array<Code> | undefined

  /**
   * A code signifying the level of confidentiality of this information for this telecommunication supply.
   * Code
   * Cardinality: 1
   * Examples: CompanyLevel
   */
  PrivacyCode: Array<Code>

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
  TotalAmount?: Array<Amount> | undefined

  /**
   * Outlines the provided telecommunication supply
   * Telecommunications Supply Line
   * Cardinality: 1..n
   */
  TelecommunicationsSupplyLine: Array<TelecommunicationsSupplyLine>
}
