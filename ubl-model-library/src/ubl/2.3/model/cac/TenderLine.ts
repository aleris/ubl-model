import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Item } from './Item'
import { ItemLocationQuantity } from './ItemLocationQuantity'
import { LineReference } from './LineReference'
import { Numeric } from '../cbc/Numeric'
import { Party } from './Party'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { RelatedItem } from './RelatedItem'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define a line in a Tender.
 */
export interface TenderLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this tender line.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * The quantity of the item quoted in this tender line.
   * Quantity
   * Cardinality: 0..1
   */
  Quantity?: Array<Quantity> | undefined

  /**
   * The total amount for this tender line, including allowance charges but net of taxes.
   * Amount
   * Cardinality: 0..1
   */
  LineExtensionAmount?: Array<Amount> | undefined

  /**
   * The total amount for this tender line, including all allowances, charges and taxes.
   * Amount
   * Cardinality: 0..1
   */
  TaxInclusiveLineExtensionAmount?: Array<Amount> | undefined

  /**
   * The total tax amount for this tender line.
   * Amount
   * Cardinality: 0..1
   */
  TotalTaxAmount?: Array<Amount> | undefined

  /**
   * Text describing a unit in which the item described in this tender line can be ordered.
   * Text
   * Cardinality: 0..1
   */
  OrderableUnit?: Array<Text> | undefined

  /**
   * The unit of measure and quantity of the orderable unit.
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
   * The minimum number of items described in this tender line that can be ordered.
   * Quantity
   * Cardinality: 0..1
   * Examples: 10 boxes
   */
  MinimumOrderQuantity?: Array<Quantity> | undefined

  /**
   * The maximum number of items described in this tender line that can be ordered.
   * Quantity
   * Cardinality: 0..1
   * Examples: 1 tonne
   */
  MaximumOrderQuantity?: Array<Quantity> | undefined

  /**
   * Text about a warranty (provided by WarrantyParty) for the good or service described in this tender line.
   * Text
   * Cardinality: 0..n
   * Examples: Unless specified otherwise and in addition to any rights the Customer may have under statute, Dell
   * Examples: warrants to the Customer that Dell branded Products (excluding third party products and software), will
   * Examples: be free from defects in materials and workmanship affecting normal use for a period of one year from
   * Examples: invoice date ( Standard Warranty ).
   */
  WarrantyInformation?: Array<Text> | undefined

  /**
   * A mutually agreed code signifying the level of packaging associated with the item described in this tender line.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Consumer Unit, Trading Unit
   * Examples: level 2 , Group 4
   */
  PackLevelCode?: Array<Code> | undefined

  /**
   * A reference to a document associated with this tender line.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference?: Array<DocumentReference> | undefined

  /**
   * The item associated with this tender line.
   * Item
   * Cardinality: 0..1
   */
  Item?: Array<Item> | undefined

  /**
   * A set of location-specific properties (e.g., price, quantity, lead time) associated with the item described in this
   * tender line.
   * Item Location Quantity
   * Cardinality: 0..n
   */
  OfferedItemLocationQuantity?: Array<ItemLocationQuantity> | undefined

  /**
   * A catalogue item that may be a replacement for the item described in this tender line.
   * Related Item
   * Cardinality: 0..n
   */
  ReplacementRelatedItem?: Array<RelatedItem> | undefined

  /**
   * The party responsible for any warranty described in this tender line.
   * Party
   * Cardinality: 0..1
   */
  WarrantyParty?: Array<Party> | undefined

  /**
   * The period for which a warranty associated with the item described in this tender line is valid.
   * Period
   * Cardinality: 0..1
   */
  WarrantyValidityPeriod?: Array<Period> | undefined

  /**
   * An association to a Sub Tender Line
   * Tender Line
   * Cardinality: 0..n
   */
  SubTenderLine?: Array<TenderLine> | undefined

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
