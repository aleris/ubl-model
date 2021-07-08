import { Address } from './Address'
import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a scheme for corporate registration.
 */
export interface CorporateRegistrationScheme {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this registration scheme.
   * Identifier
   * Cardinality: 0..1
   * Examples: ASIC in Australia
   */
  ID?: Array<Identifier> | undefined

  /**
   * The name of this registration scheme.
   * Name
   * Cardinality: 0..1
   * Examples: Australian Securities and Investment Commission in Australia
   */
  Name?: Array<Text> | undefined

  /**
   * A code signifying the type of this registration scheme.
   * Code
   * Cardinality: 0..1
   * Examples: ACN
   */
  CorporateRegistrationTypeCode?: Array<Code> | undefined

  /**
   * A geographic area in which this registration scheme applies.
   * Address
   * Cardinality: 0..n
   * Examples: England , Wales
   */
  JurisdictionRegionAddress?: Array<Address> | undefined
}
