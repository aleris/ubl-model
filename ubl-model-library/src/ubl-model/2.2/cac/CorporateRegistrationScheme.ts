import { Address } from './Address'
import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * A class to describe a scheme for corporate registration.
 */
export interface CorporateRegistrationScheme {
  /**
   * An identifier for this registration scheme.
   * Identifier
   * Cardinality: 0..1
   * Examples: ASIC in Australia
   */
  ID?: [Identifier] | undefined

  /**
   * The name of this registration scheme.
   * Name
   * Cardinality: 0..1
   * Examples: Australian Securities and Investment Commission in Australia
   */
  Name?: [Text] | undefined

  /**
   * A code signifying the type of this registration scheme.
   * Code
   * Cardinality: 0..1
   * Examples: ACN
   */
  CorporateRegistrationTypeCode?: [Code] | undefined

  /**
   * A geographic area in which this registration scheme applies.
   * Address
   * Cardinality: 0..n
   * Examples: England , Wales
   */
  JurisdictionRegionAddress?: Array<Address> | undefined
}
