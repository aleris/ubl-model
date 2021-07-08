import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { ItemProperty } from './ItemProperty'
import { LotIdentification } from './LotIdentification'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a specific, trackable instance of an item.
 */
export interface ItemInstance {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier used for tracing this item instance, such as the EPC number used in RFID.
   * Identifier
   * Cardinality: 0..1
   */
  ProductTraceID?: Array<Identifier> | undefined

  /**
   * The date on which this item instance was manufactured.
   * Date
   * Cardinality: 0..1
   */
  ManufactureDate?: Array<Date> | undefined

  /**
   * The time at which this item instance was manufactured.
   * Time
   * Cardinality: 0..1
   */
  ManufactureTime?: Array<Time> | undefined

  /**
   * The date before which it is best to use this item instance.
   * Date
   * Cardinality: 0..1
   */
  BestBeforeDate?: Array<Date> | undefined

  /**
   * The registration identifier of this item instance.
   * Identifier
   * Cardinality: 0..1
   * Examples: car registration or licensing number
   */
  RegistrationID?: Array<Identifier> | undefined

  /**
   * The serial number of this item instance.
   * Identifier
   * Cardinality: 0..1
   * Examples: chassis number of a car
   */
  SerialID?: Array<Identifier> | undefined

  /**
   * An additional property of this item instance.
   * Item Property
   * Cardinality: 0..n
   */
  AdditionalItemProperty?: Array<ItemProperty> | undefined

  /**
   * The lot identifier of this item instance (the identifier that allows recall of the item if necessary).
   * Lot Identification
   * Cardinality: 0..1
   */
  LotIdentification?: Array<LotIdentification> | undefined
}
