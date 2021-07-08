import { Code } from '../cbc/Code'
import { Contact } from './Contact'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Location } from './Location'
import { Period } from './Period'
import { Shipment } from './Shipment'
import { Signature } from './Signature'
import { Status } from './Status'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a significant occurrence or happening related to the transportation of goods.
 */
export interface TransportEvent {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this transport event within an agreed event identification scheme.
   * Identifier
   * Cardinality: 0..1
   */
  IdentificationID?: Array<Identifier> | undefined

  /**
   * The date of this transport event.
   * Date
   * Cardinality: 0..1
   */
  OccurrenceDate?: Array<Date> | undefined

  /**
   * The time of this transport event.
   * Time
   * Cardinality: 0..1
   */
  OccurrenceTime?: Array<Time> | undefined

  /**
   * A code signifying the type of this transport event.
   * Code
   * Cardinality: 0..1
   */
  TransportEventTypeCode?: Array<Code> | undefined

  /**
   * Text describing this transport event.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * An indicator that this transport event has been completed (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  CompletionIndicator?: Array<Indicator> | undefined

  /**
   * The shipment involved in this transport event.
   * Shipment
   * Cardinality: 0..1
   */
  ReportedShipment?: Array<Shipment> | undefined

  /**
   * The current status of this transport event.
   * Status
   * Cardinality: 0..n
   */
  CurrentStatus?: Array<Status> | undefined

  /**
   * A contact associated with this transport event.
   * Contact
   * Cardinality: 0..n
   */
  Contact?: Array<Contact> | undefined

  /**
   * The location associated with this transport event.
   * Location
   * Cardinality: 0..1
   */
  Location?: Array<Location> | undefined

  /**
   * A signature that can be used to sign for an entry or an exit at a transport location (e.g., port terminal).
   * Signature
   * Cardinality: 0..1
   */
  Signature?: Array<Signature> | undefined

  /**
   * A period of time associated with this transport event.
   * Period
   * Cardinality: 0..n
   */
  Period?: Array<Period> | undefined
}
