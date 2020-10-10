import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Measure } from '../cbc/Measure'
import { Numeric } from '../cbc/Numeric'
import { Period } from './Period'
import { Text } from '../cbc/Text'

/**
 * A class to describe a service level agreement which regulates the quality, availability and responsibilities of
 * digital services.
 */
export interface ServiceLevelAgreement {
  /**
   * An identifier for this service level agreement.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * A specific type of service subject to this service level agreement.
   * Code
   * Cardinality: 0..1
   * Examples: AP, SMP
   */
  ServiceTypeCode: [Code] | undefined

  /**
   * A specific type of service subject to this service level agreement, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  ServiceType: Array<Text> | undefined

  /**
   * The availability percentage (e.g. 98.5% of the time).
   * Percent
   * Cardinality: 0..1
   * Alternative business terms: Time Service Factor
   * Examples: 98.5
   */
  AvailabilityTimePercent: [Numeric] | undefined

  /**
   * Indicates whether this service is available on monday (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  MondayAvailabilityIndicator: [Indicator] | undefined

  /**
   * Indicates whether this service is available on tuesday (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  TuesdayAvailabilityIndicator: [Indicator] | undefined

  /**
   * Indicates whether this service is available on wednesday (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  WednesdayAvailabilityIndicator: [Indicator] | undefined

  /**
   * Indicates whether this service is available on thursday (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  ThursdayAvailabilityIndicator: [Indicator] | undefined

  /**
   * Indicates whether this service is available on friday (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  FridayAvailabilityIndicator: [Indicator] | undefined

  /**
   * Indicates whether this service is available on saturday (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  SaturdayAvailabilityIndicator: [Indicator] | undefined

  /**
   * Indicates whether this service is available on sunday (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  SundayAvailabilityIndicator: [Indicator] | undefined

  /**
   * The response time for aknowledgment (e.g. to send a receipt to a sending Access Point within 300 seconds).
   * Measure
   * Cardinality: 0..1
   * Examples: 300
   */
  MinimumResponseTimeDurationMeasure: [Measure] | undefined

  /**
   * The minimum down time schedule for programmed maintenance (e.g. scheduled 3 days before).
   * Measure
   * Cardinality: 0..1
   * Examples: 3
   */
  MinimumDownTimeScheduleDurationMeasure: [Measure] | undefined

  /**
   * The maximum length of time between the occurrence of an incident and the issuance of a notification (e.g. within 4
   * hours).
   * Measure
   * Cardinality: 0..1
   * Examples: 4
   */
  MaximumIncidentNotificationDurationMeasure: [Measure] | undefined

  /**
   * The maximum data loss permitted (e.g. last 24 hours).
   * Measure
   * Cardinality: 0..1
   * Examples: 24
   */
  MaximumDataLossDurationMeasure: [Measure] | undefined

  /**
   * The time taken to recover after an outage of service (e.g. 3 hours).
   * Measure
   * Cardinality: 0..1
   * Alternative business terms: MTTR
   * Examples: 3
   */
  MeanTimeToRecoverDurationMeasure: [Measure] | undefined

  /**
   * The period for which the service is available.
   * Period
   * Cardinality: 0..n
   * Alternative business terms: Uptime
   */
  ServiceAvailabilityPeriod: Array<Period> | undefined

  /**
   * The period of time designated in advance by the technical staff, during which preventive maintenance that could
   * cause disruption of service may be performed.
   * Period
   * Cardinality: 0..n
   * Alternative business terms: Downtime
   */
  ServiceMaintenancePeriod: Array<Period> | undefined
}
