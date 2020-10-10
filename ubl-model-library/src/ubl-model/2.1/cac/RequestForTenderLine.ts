import { Amount } from '../cbc/Amount'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Item } from './Item'
import { ItemLocationQuantity } from './ItemLocationQuantity'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'

/**
 * A class to define a line in a Request for Tender describing an item of goods or a service solicited in the Request
 * for Tender.
 */
export interface RequestForTenderLine {
  /**
   * An identifier for this request for tender line.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * A universally unique identifier for this request for tender line.
   * Identifier
   * Cardinality: 0..1
   */
  UUID: [Identifier] | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note: Array<Text> | undefined

  /**
   * The quantity of the item for which a tender is requested in this line.
   * Quantity
   * Cardinality: 0..1
   */
  Quantity: [Quantity] | undefined

  /**
   * The minimum quantity of the item associated with this request for tender line.
   * Quantity
   * Cardinality: 0..1
   */
  MinimumQuantity: [Quantity] | undefined

  /**
   * The maximum quantity of the item associated with this request for tender line.
   * Quantity
   * Cardinality: 0..1
   */
  MaximumQuantity: [Quantity] | undefined

  /**
   * Indicates whether the amounts are taxes included (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  TaxIncludedIndicator: [Indicator] | undefined

  /**
   * The minimum amount allowed for this deliverable.
   * Amount
   * Cardinality: 0..1
   */
  MinimumAmount: [Amount] | undefined

  /**
   * The maximum amount allowed for this deliverable.
   * Amount
   * Cardinality: 0..1
   */
  MaximumAmount: [Amount] | undefined

  /**
   * The estimated total amount of the deliverable.
   * Amount
   * Cardinality: 0..1
   */
  EstimatedAmount: [Amount] | undefined

  /**
   * A reference to a document associated with this request for tender line.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference: Array<DocumentReference> | undefined

  /**
   * An applicable period for the deliverable or set of deliverables in this tendering process.
   * Period
   * Cardinality: 0..n
   */
  DeliveryPeriod: Array<Period> | undefined

  /**
   * Properties of the item specified in this request for tender line that are dependent on location and quantity.
   * Item Location Quantity
   * Cardinality: 0..n
   */
  RequiredItemLocationQuantity: Array<ItemLocationQuantity> | undefined

  /**
   * The period during which a warranty to be associated with this request for tender line must apply.
   * Period
   * Cardinality: 0..1
   */
  WarrantyValidityPeriod: [Period] | undefined

  /**
   * An item for which a tender is requested.
   * Item
   * Cardinality: 1
   */
  Item: [Item]

  /**
   * A subsidiary request for tender line.
   * Request For Tender Line
   * Cardinality: 0..n
   */
  SubRequestForTenderLine: Array<RequestForTenderLine> | undefined
}
