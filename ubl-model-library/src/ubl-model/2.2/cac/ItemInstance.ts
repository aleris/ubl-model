import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { ItemProperty } from './ItemProperty'
import { LotIdentification } from './LotIdentification'
import { Time } from '../cbc/Time'

/**
 * A class to describe a specific, trackable instance of an item.
 */
export interface ItemInstance {
  /**
   * An identifier used for tracing this item instance, such as the EPC number used in RFID.
   * Identifier
   * Cardinality: 0..1
   */
  ProductTraceID?: [Identifier] | undefined

  /**
   * The date on which this item instance was manufactured.
   * Date
   * Cardinality: 0..1
   */
  ManufactureDate?: [Date] | undefined

  /**
   * The time at which this item instance was manufactured.
   * Time
   * Cardinality: 0..1
   */
  ManufactureTime?: [Time] | undefined

  /**
   * The date before which it is best to use this item instance.
   * Date
   * Cardinality: 0..1
   */
  BestBeforeDate?: [Date] | undefined

  /**
   * The registration identifier of this item instance.
   * Identifier
   * Cardinality: 0..1
   * Examples: car registration or licensing number
   */
  RegistrationID?: [Identifier] | undefined

  /**
   * The serial number of this item instance.
   * Identifier
   * Cardinality: 0..1
   * Examples: chassis number of a car
   */
  SerialID?: [Identifier] | undefined

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
  LotIdentification?: [LotIdentification] | undefined
}
