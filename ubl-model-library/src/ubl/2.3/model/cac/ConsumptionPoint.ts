import { Address } from './Address'
import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Meter } from './Meter'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
import { WebSiteAccess } from './WebSiteAccess'

/**
 * A class to define the point of consumption for a utility, such as a meter.
 */
export interface ConsumptionPoint {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this point of consumption.
   * Identifier
   * Cardinality: 1
   * Examples: 7411013716x
   */
  ID: Array<Identifier>

  /**
   * Text describing this consumption point.
   * Text
   * Cardinality: 0..n
   * Examples: Additional informations concerning the consumption point
   */
  Description?: Array<Text> | undefined

  /**
   * An identifier for the subscriber responsible for the consumption at this consumption point.
   * Identifier
   * Cardinality: 0..1
   * Examples: 98143211
   */
  SubscriberID?: Array<Identifier> | undefined

  /**
   * The type of subscriber, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  SubscriberType?: Array<Text> | undefined

  /**
   * The type of subscriber, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: APL
   */
  SubscriberTypeCode?: Array<Code> | undefined

  /**
   * The total quantity delivered, calculated at this consumption point.
   * Quantity
   * Cardinality: 0..1
   * Examples: 5761.00
   */
  TotalDeliveredQuantity?: Array<Quantity> | undefined

  /**
   * The address of this consumption point.
   * Address
   * Cardinality: 0..1
   */
  Address?: Array<Address> | undefined

  /**
   * Access information for the website of this consumption point.
   * Web Site Access
   * Cardinality: 0..1
   */
  WebSiteAccess?: Array<WebSiteAccess> | undefined

  /**
   * A meter at this consumption point.
   * Meter
   * Cardinality: 0..n
   */
  UtilityMeter?: Array<Meter> | undefined
}
