import { Code } from '../cbc/Code'
import { CustomerParty } from './CustomerParty'
import { Identifier } from '../cbc/Identifier'
import { Location } from './Location'
import { Period } from './Period'
import { SalesItem } from './SalesItem'
import { SupplierParty } from './SupplierParty'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to associate a time period and locations (activity data) with an item for inventory planning purposes.
 */
export interface ActivityDataLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this activity data line.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * A code signifying the type of supply chain activity.
   * Code
   * Cardinality: 1
   */
  SupplyChainActivityTypeCode: Array<Code>

  /**
   * The buyer of the item.
   * Customer Party
   * Cardinality: 0..1
   */
  BuyerCustomerParty?: Array<CustomerParty> | undefined

  /**
   * The seller of the item.
   * Supplier Party
   * Cardinality: 0..1
   */
  SellerSupplierParty?: Array<SupplierParty> | undefined

  /**
   * The period during which the activity is realized.
   * Period
   * Cardinality: 0..1
   */
  ActivityPeriod?: Array<Period> | undefined

  /**
   * Either the location where the movement of goods is observed or the location from which the goods are moved.
   * Location
   * Cardinality: 1
   */
  ActivityOriginLocation: Array<Location>

  /**
   * The location to which the goods are moved.
   * Location
   * Cardinality: 0..1
   */
  ActivityFinalLocation?: Array<Location> | undefined

  /**
   * Sales information for an item to which this line applies.
   * Sales Item
   * Cardinality: 1..n
   */
  SalesItem: Array<SalesItem>
}
