import { Address } from './Address'
import { Certificate } from './Certificate'
import { CommodityClassification } from './CommodityClassification'
import { Country } from './Country'
import { Dimension } from './Dimension'
import { DocumentReference } from './DocumentReference'
import { HazardousItem } from './HazardousItem'
import { Indicator } from '../cbc/Indicator'
import { ItemIdentification } from './ItemIdentification'
import { ItemInstance } from './ItemInstance'
import { ItemProperty } from './ItemProperty'
import { Numeric } from '../cbc/Numeric'
import { Party } from './Party'
import { Quantity } from '../cbc/Quantity'
import { TaxCategory } from './TaxCategory'
import { Text } from '../cbc/Text'
import { TransactionConditions } from './TransactionConditions'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe an item of trade. It includes a generic description applicable to all examples of the item
 * together with optional subsidiary descriptions of any number of actual instances of the type.
 */
export interface Item {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * Text describing this item.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * The unit packaging quantity; the number of subunits making up this item.
   * Quantity
   * Cardinality: 0..1
   */
  PackQuantity?: Array<Quantity> | undefined

  /**
   * The number of items in a pack of this item.
   * Numeric
   * Cardinality: 0..1
   */
  PackSizeNumeric?: Array<Numeric> | undefined

  /**
   * An indicator that this item was ordered from a catalogue (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  CatalogueIndicator?: Array<Indicator> | undefined

  /**
   * A short name optionally given to this item, such as a name from a catalogue, as distinct from a description.
   * Name
   * Cardinality: 0..1
   */
  Name?: Array<Text> | undefined

  /**
   * An indication that the transported item, as delivered, is subject to an international regulation concerning the
   * carriage of dangerous goods (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: Default is negative
   */
  HazardousRiskIndicator?: Array<Indicator> | undefined

  /**
   * Further details regarding this item (e.g., the URL of a relevant web page).
   * Text
   * Cardinality: 0..n
   */
  AdditionalInformation?: Array<Text> | undefined

  /**
   * A keyword (search string) for this item, assigned by the seller party. Can also be a synonym for the name of the
   * item.
   * Text
   * Cardinality: 0..n
   */
  Keyword?: Array<Text> | undefined

  /**
   * A brand name of this item.
   * Name
   * Cardinality: 0..n
   * Examples: Coca-Cola
   */
  BrandName?: Array<Text> | undefined

  /**
   * A model name of this item.
   * Name
   * Cardinality: 0..n
   * Examples: VW Beetle
   */
  ModelName?: Array<Text> | undefined

  /**
   * Identifying information for this item, assigned by the buyer.
   * Item Identification
   * Cardinality: 0..1
   */
  BuyersItemIdentification?: Array<ItemIdentification> | undefined

  /**
   * Identifying information for this item, assigned by the seller.
   * Item Identification
   * Cardinality: 0..1
   */
  SellersItemIdentification?: Array<ItemIdentification> | undefined

  /**
   * Identifying information for this item, assigned by the manufacturer.
   * Item Identification
   * Cardinality: 0..n
   */
  ManufacturersItemIdentification?: Array<ItemIdentification> | undefined

  /**
   * Identifying information for this item, assigned according to a standard system.
   * Item Identification
   * Cardinality: 0..1
   */
  StandardItemIdentification?: Array<ItemIdentification> | undefined

  /**
   * Identifying information for this item, assigned according to a cataloguing system.
   * Item Identification
   * Cardinality: 0..1
   */
  CatalogueItemIdentification?: Array<ItemIdentification> | undefined

  /**
   * An additional identifier for this item.
   * Item Identification
   * Cardinality: 0..n
   */
  AdditionalItemIdentification?: Array<ItemIdentification> | undefined

  /**
   * A reference to the catalogue in which this item appears.
   * Document Reference
   * Cardinality: 0..1
   */
  CatalogueDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a specification document for this item.
   * Document Reference
   * Cardinality: 0..n
   */
  ItemSpecificationDocumentReference?: Array<DocumentReference> | undefined

  /**
   * The country of origin of this item.
   * Country
   * Cardinality: 0..1
   */
  OriginCountry?: Array<Country> | undefined

  /**
   * A classification of this item according to a specific system for classifying commodities.
   * Commodity Classification
   * Cardinality: 0..n
   */
  CommodityClassification?: Array<CommodityClassification> | undefined

  /**
   * A set of sales conditions applying to this item.
   * Transaction Conditions
   * Cardinality: 0..n
   */
  TransactionConditions?: Array<TransactionConditions> | undefined

  /**
   * Information pertaining to this item as a hazardous item.
   * Hazardous Item
   * Cardinality: 0..n
   */
  HazardousItem?: Array<HazardousItem> | undefined

  /**
   * A tax category applicable to this item.
   * Tax Category
   * Cardinality: 0..n
   */
  ClassifiedTaxCategory?: Array<TaxCategory> | undefined

  /**
   * An additional property of this item.
   * Item Property
   * Cardinality: 0..n
   */
  AdditionalItemProperty?: Array<ItemProperty> | undefined

  /**
   * The manufacturer of this item.
   * Party
   * Cardinality: 0..n
   */
  ManufacturerParty?: Array<Party> | undefined

  /**
   * The party responsible for specification of this item.
   * Party
   * Cardinality: 0..1
   */
  InformationContentProviderParty?: Array<Party> | undefined

  /**
   * A region (not country) of origin of this item.
   * Address
   * Cardinality: 0..n
   */
  OriginAddress?: Array<Address> | undefined

  /**
   * A trackable, unique instantiation of this item.
   * Item Instance
   * Cardinality: 0..n
   */
  ItemInstance?: Array<ItemInstance> | undefined

  /**
   * A certificate associated with this item.
   * Certificate
   * Cardinality: 0..n
   */
  Certificate?: Array<Certificate> | undefined

  /**
   * One of the measurable dimensions (length, mass, weight, or volume) of this item.
   * Dimension
   * Cardinality: 0..n
   */
  Dimension?: Array<Dimension> | undefined
}
