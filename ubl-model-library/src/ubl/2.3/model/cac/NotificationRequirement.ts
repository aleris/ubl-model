import { Code } from '../cbc/Code'
import { Location } from './Location'
import { Measure } from '../cbc/Measure'
import { Party } from './Party'
import { Period } from './Period'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a notification requirement.
 */
export interface NotificationRequirement {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code signifying the type of notification (e.g., pickup status).
   * Code
   * Cardinality: 1
   */
  NotificationTypeCode: Array<Code>

  /**
   * The length of time between the occurrence of a given event and the issuance of a notification.
   * Measure
   * Cardinality: 0..1
   */
  PostEventNotificationDurationMeasure?: Array<Measure> | undefined

  /**
   * The length of time to elapse between the issuance of a notification and the occurrence of the event it relates to.
   * Measure
   * Cardinality: 0..1
   */
  PreEventNotificationDurationMeasure?: Array<Measure> | undefined

  /**
   * A party to be notified.
   * Party
   * Cardinality: 0..n
   */
  NotifyParty?: Array<Party> | undefined

  /**
   * A period during which a notification should be issued.
   * Period
   * Cardinality: 0..n
   */
  NotificationPeriod?: Array<Period> | undefined

  /**
   * A location at which a notification should be issued.
   * Location
   * Cardinality: 0..n
   */
  NotificationLocation?: Array<Location> | undefined
}
