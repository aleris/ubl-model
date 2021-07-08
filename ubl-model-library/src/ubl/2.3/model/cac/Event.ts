import { Code } from '../cbc/Code'
import { Contact } from './Contact'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Location } from './Location'
import { Status } from './Status'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a significant occurrence relating to an object, process, or person.
 */
export interface Event {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this event within an agreed event identification scheme.
   * Identifier
   * Cardinality: 0..1
   */
  IdentificationID?: Array<Identifier> | undefined

  /**
   * The date of this event.
   * Date
   * Cardinality: 0..1
   */
  OccurrenceDate?: Array<Date> | undefined

  /**
   * The time of this event.
   * Time
   * Cardinality: 0..1
   */
  OccurrenceTime?: Array<Time> | undefined

  /**
   * A code signifying the type of this event.
   * Code
   * Cardinality: 0..1
   */
  TypeCode?: Array<Code> | undefined

  /**
   * Text describing this event.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * An indicator that this event has been completed (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  CompletionIndicator?: Array<Indicator> | undefined

  /**
   * The current status of this event.
   * Status
   * Cardinality: 0..n
   */
  CurrentStatus?: Array<Status> | undefined

  /**
   * Contacts associated with this event.
   * Contact
   * Cardinality: 0..n
   */
  Contact?: Array<Contact> | undefined

  /**
   * The location of this event.
   * Location
   * Cardinality: 0..1
   */
  OccurenceLocation?: Array<Location> | undefined
}
