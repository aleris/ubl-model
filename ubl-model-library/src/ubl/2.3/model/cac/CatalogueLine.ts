import { Code } from '../cbc/Code'
import { CustomerParty } from './CustomerParty'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Item } from './Item'
import { ItemComparison } from './ItemComparison'
import { ItemLocationQuantity } from './ItemLocationQuantity'
import { ItemProperty } from './ItemProperty'
import { LineReference } from './LineReference'
import { Numeric } from '../cbc/Numeric'
import { Party } from './Party'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { RelatedItem } from './RelatedItem'
import { SupplierParty } from './SupplierParty'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a line in a Catalogue describing a purchasable item.
 */
export interface CatalogueLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the line in the catalogue.
   * Identifier
   * Cardinality: 1
   * Examples: 1
   */
  ID: Array<Identifier>

  /**
   * A code signifying the action required to synchronize this catalogue line. Recommend codes (delete, update, add)
   * Code
   * Cardinality: 0..1
   * Examples: Replace , Update , Delete , Add
   */
  ActionCode?: Array<Code> | undefined

  /**
   * A code signifying the life cycle status of this catalogue line. Examples are pre-order, end of production
   * Code
   * Cardinality: 0..1
   * Examples: new - announcement only , new and available , deleted - announcement only
   */
  LifeCycleStatusCode?: Array<Code> | undefined

  /**
   * A subdivision of a contract or tender covering this catalogue line.
   * Text
   * Cardinality: 0..1
   * Examples: Installation , Phase One , Support and Maintenance
   */
  ContractSubdivision?: Array<Text> | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * An indicator that this catalogue line describes an orderable item (true) or is included for reference purposes only
   * (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: TRUE means orderable, FALSE means not orderable
   */
  OrderableIndicator?: Array<Indicator> | undefined

  /**
   * A textual description of the units in which the item described in this catalogue line can be ordered.
   * Text
   * Cardinality: 0..1
   */
  OrderableUnit?: Array<Text> | undefined

  /**
   * The numeric quantity of the ordering unit (and units of measure) of the catalogue line.
   * Quantity
   * Cardinality: 0..1
   * Examples: If order unit measure identifier is each , then content unit quantity is 1 .
   */
  ContentUnitQuantity?: Array<Quantity> | undefined

  /**
   * The number of items that can set the order quantity increments.
   * Numeric
   * Cardinality: 0..1
   */
  OrderQuantityIncrementNumeric?: Array<Numeric> | undefined

  /**
   * The minimum amount of the item described in this catalogue line that can be ordered.
   * Quantity
   * Cardinality: 0..1
   * Examples: 10 boxes
   */
  MinimumOrderQuantity?: Array<Quantity> | undefined

  /**
   * The maximum amount of the item described in this catalogue line that can be ordered.
   * Quantity
   * Cardinality: 0..1
   * Examples: 1 tonne
   */
  MaximumOrderQuantity?: Array<Quantity> | undefined

  /**
   * Text about a warranty (provided by WarrantyParty) for the good or service described in this catalogue line.
   * Text
   * Cardinality: 0..n
   * Examples: Unless specified otherwise and in addition to any rights the Customer may have under statute, Dell
   * Examples: warrants to the Customer that Dell branded Products (excluding third party products and software), will
   * Examples: be free from defects in materials and workmanship affecting normal use for a period of one year from
   * Examples: invoice date ( Standard Warranty ).
   */
  WarrantyInformation?: Array<Text> | undefined

  /**
   * A mutually agreed code signifying the level of packaging associated with the item described in this catalogue line.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Consumer Unit, Trading Unit
   * Examples: level 2 , Group 4
   */
  PackLevelCode?: Array<Code> | undefined

  /**
   * The customer responsible for the contract with which this catalogue line is associated.
   * Customer Party
   * Cardinality: 0..1
   */
  ContractorCustomerParty?: Array<CustomerParty> | undefined

  /**
   * The seller/supplier responsible for the contract with which this catalogue line is associated.
   * Supplier Party
   * Cardinality: 0..1
   */
  SellerSupplierParty?: Array<SupplierParty> | undefined

  /**
   * The party responsible for any warranty associated with the item described in this catalogue line.
   * Party
   * Cardinality: 0..1
   */
  WarrantyParty?: Array<Party> | undefined

  /**
   * The period for which a warranty associated with the item in this catalogue line is valid.
   * Period
   * Cardinality: 0..1
   */
  WarrantyValidityPeriod?: Array<Period> | undefined

  /**
   * The period for which the information in this catalogue line is valid.
   * Period
   * Cardinality: 0..1
   */
  LineValidityPeriod?: Array<Period> | undefined

  /**
   * A combination of price and quantity used to provide price comparisons based on different sizes of order.
   * Item Comparison
   * Cardinality: 0..n
   */
  ItemComparison?: Array<ItemComparison> | undefined

  /**
   * An item that may be a component of the item in this catalogue line.
   * Related Item
   * Cardinality: 0..n
   */
  ComponentRelatedItem?: Array<RelatedItem> | undefined

  /**
   * An item that may be an optional accessory of the item in this catalogue line.
   * Related Item
   * Cardinality: 0..n
   */
  AccessoryRelatedItem?: Array<RelatedItem> | undefined

  /**
   * An item that may be required for the item in this catalogue line.
   * Related Item
   * Cardinality: 0..n
   */
  RequiredRelatedItem?: Array<RelatedItem> | undefined

  /**
   * An item that may be a replacement for the item in this catalogue line.
   * Related Item
   * Cardinality: 0..n
   */
  ReplacementRelatedItem?: Array<RelatedItem> | undefined

  /**
   * An item that may complement the item in this catalogue line.
   * Related Item
   * Cardinality: 0..n
   */
  ComplementaryRelatedItem?: Array<RelatedItem> | undefined

  /**
   * An item in an existing catalogue that is being replaced by the item in this catalogue line.
   * Related Item
   * Cardinality: 0..n
   */
  ReplacedRelatedItem?: Array<RelatedItem> | undefined

  /**
   * Properties of the item in this catalogue line that are dependent on location and quantity.
   * Item Location Quantity
   * Cardinality: 0..n
   */
  RequiredItemLocationQuantity?: Array<ItemLocationQuantity> | undefined

  /**
   * A reference to a document associated with this catalogue line.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference?: Array<DocumentReference> | undefined

  /**
   * A specification of the item itself.
   * Item
   * Cardinality: 1
   */
  Item: Array<Item>

  /**
   * A property of the item in this catalogue line.
   * Item Property
   * Cardinality: 0..n
   */
  KeywordItemProperty?: Array<ItemProperty> | undefined

  /**
   * Reference to a Line on a Call For Tenders document.
   * Line Reference
   * Cardinality: 0..1
   */
  CallForTendersLineReference?: Array<LineReference> | undefined

  /**
   * A class defining references to a Call For Tenders document.
   * Document Reference
   * Cardinality: 0..1
   */
  CallForTendersDocumentReference?: Array<DocumentReference> | undefined
}
