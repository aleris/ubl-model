import { Code } from '../cbc/Code'
import { CustomerParty } from './CustomerParty'
import { Identifier } from '../cbc/Identifier'
import { Location } from './Location'
import { Period } from './Period'
import { SalesItem } from './SalesItem'
import { SupplierParty } from './SupplierParty'

/**
 * A class to associate a time period and locations (activity data) with an item for inventory planning purposes.
 */
export interface ActivityDataLine {
  /**
   * An identifier for this activity data line.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

  /**
   * A code signifying the type of supply chain activity.
   * Code
   * Cardinality: 1
   */
  SupplyChainActivityTypeCode: [Code]

  /**
   * The buyer of the item.
   * Customer Party
   * Cardinality: 0..1
   */
  BuyerCustomerParty?: [CustomerParty] | undefined

  /**
   * The seller of the item.
   * Supplier Party
   * Cardinality: 0..1
   */
  SellerSupplierParty?: [SupplierParty] | undefined

  /**
   * The period during which the activity is realized.
   * Period
   * Cardinality: 0..1
   */
  ActivityPeriod?: [Period] | undefined

  /**
   * Either the location where the movement of goods is observed or the location from which the goods are moved.
   * Location
   * Cardinality: 1
   */
  ActivityOriginLocation: [Location]

  /**
   * The location to which the goods are moved.
   * Location
   * Cardinality: 0..1
   */
  ActivityFinalLocation?: [Location] | undefined

  /**
   * Sales information for an item to which this line applies.
   * Sales Item
   * Cardinality: 1..n
   */
  SalesItem: Array<SalesItem>
}
