import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Measure } from '../cbc/Measure'
import { Numeric } from '../cbc/Numeric'
import { Period } from './Period'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a service level agreement which regulates the quality, availability and responsibilities of
 * digital services.
 */
export interface ServiceLevelAgreement {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this service level agreement.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * A specific type of service subject to this service level agreement.
   * Code
   * Cardinality: 0..1
   * Examples: AP, SMP
   */
  ServiceTypeCode?: Array<Code> | undefined

  /**
   * A specific type of service subject to this service level agreement, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  ServiceType?: Array<Text> | undefined

  /**
   * The availability percentage (e.g. 98.5% of the time).
   * Percent
   * Cardinality: 0..1
   * Alternative business terms: Time Service Factor
   * Examples: 98.5
   */
  AvailabilityTimePercent?: Array<Numeric> | undefined

  /**
   * Indicates whether this service is available on monday (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  MondayAvailabilityIndicator?: Array<Indicator> | undefined

  /**
   * Indicates whether this service is available on tuesday (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  TuesdayAvailabilityIndicator?: Array<Indicator> | undefined

  /**
   * Indicates whether this service is available on wednesday (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  WednesdayAvailabilityIndicator?: Array<Indicator> | undefined

  /**
   * Indicates whether this service is available on thursday (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  ThursdayAvailabilityIndicator?: Array<Indicator> | undefined

  /**
   * Indicates whether this service is available on friday (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  FridayAvailabilityIndicator?: Array<Indicator> | undefined

  /**
   * Indicates whether this service is available on saturday (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  SaturdayAvailabilityIndicator?: Array<Indicator> | undefined

  /**
   * Indicates whether this service is available on sunday (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  SundayAvailabilityIndicator?: Array<Indicator> | undefined

  /**
   * The response time for aknowledgment (e.g. to send a receipt to a sending Access Point within 300 seconds).
   * Measure
   * Cardinality: 0..1
   * Examples: 300
   */
  MinimumResponseTimeDurationMeasure?: Array<Measure> | undefined

  /**
   * The minimum down time schedule for programmed maintenance (e.g. scheduled 3 days before).
   * Measure
   * Cardinality: 0..1
   * Examples: 3
   */
  MinimumDownTimeScheduleDurationMeasure?: Array<Measure> | undefined

  /**
   * The maximum length of time between the occurrence of an incident and the issuance of a notification (e.g. within 4
   * hours).
   * Measure
   * Cardinality: 0..1
   * Examples: 4
   */
  MaximumIncidentNotificationDurationMeasure?: Array<Measure> | undefined

  /**
   * The maximum data loss permitted (e.g. last 24 hours).
   * Measure
   * Cardinality: 0..1
   * Examples: 24
   */
  MaximumDataLossDurationMeasure?: Array<Measure> | undefined

  /**
   * The time taken to recover after an outage of service (e.g. 3 hours).
   * Measure
   * Cardinality: 0..1
   * Alternative business terms: MTTR
   * Examples: 3
   */
  MeanTimeToRecoverDurationMeasure?: Array<Measure> | undefined

  /**
   * The period for which the service is available.
   * Period
   * Cardinality: 0..n
   * Alternative business terms: Uptime
   */
  ServiceAvailabilityPeriod?: Array<Period> | undefined

  /**
   * The period of time designated in advance by the technical staff, during which preventive maintenance that could
   * cause disruption of service may be performed.
   * Period
   * Cardinality: 0..n
   * Alternative business terms: Downtime
   */
  ServiceMaintenancePeriod?: Array<Period> | undefined
}
