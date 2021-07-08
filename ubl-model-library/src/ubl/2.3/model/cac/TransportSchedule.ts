import { Date } from '../cbc/Date'
import { Location } from './Location'
import { Numeric } from '../cbc/Numeric'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { TransportEvent } from './TransportEvent'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * Describes the location and schedule relating to a transport means.
 */
export interface TransportSchedule {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A number indicating the order of this status in the sequence in which statuses are to be presented.
   * Numeric
   * Cardinality: 1
   */
  SequenceNumeric: Array<Numeric>

  /**
   * The reference date for the transport schedule status.
   * Date
   * Cardinality: 0..1
   */
  ReferenceDate?: Array<Date> | undefined

  /**
   * The reference time for the transport schedule status.
   * Time
   * Cardinality: 0..1
   */
  ReferenceTime?: Array<Time> | undefined

  /**
   * The reliability of the transport schedule status, expressed as a percentage.
   * Percent
   * Cardinality: 0..1
   */
  ReliabilityPercent?: Array<Numeric> | undefined

  /**
   * Remarks related to the transport schedule status.
   * Text
   * Cardinality: 0..n
   */
  Remarks?: Array<Text> | undefined

  /**
   * The location for which status is reported.
   * Location
   * Cardinality: 1
   */
  StatusLocation: Array<Location>

  /**
   * The actual arrival at a location.
   * Transport Event
   * Cardinality: 0..1
   */
  ActualArrivalTransportEvent?: Array<TransportEvent> | undefined

  /**
   * The actual departure from a location.
   * Transport Event
   * Cardinality: 0..1
   */
  ActualDepartureTransportEvent?: Array<TransportEvent> | undefined

  /**
   * An estimated departure from a specified location.
   * Transport Event
   * Cardinality: 0..1
   */
  EstimatedDepartureTransportEvent?: Array<TransportEvent> | undefined

  /**
   * An estimated arrival at a specified location.
   * Transport Event
   * Cardinality: 0..1
   */
  EstimatedArrivalTransportEvent?: Array<TransportEvent> | undefined

  /**
   * The planned departure from a specified location.
   * Transport Event
   * Cardinality: 0..1
   */
  PlannedDepartureTransportEvent?: Array<TransportEvent> | undefined

  /**
   * The planned arrival at a specified location.
   * Transport Event
   * Cardinality: 0..1
   */
  PlannedArrivalTransportEvent?: Array<TransportEvent> | undefined
}
