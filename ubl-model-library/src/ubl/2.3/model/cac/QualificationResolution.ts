import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { ProcurementProjectLot } from './ProcurementProjectLot'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe the acceptance or rejection of an economic operator in a tendering process.
 */
export interface QualificationResolution {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An indicator that the economic operator has been accepted into the tendering process (true) or rejected from the
   * tendering process (false).
   * Code
   * Cardinality: 1
   */
  AdmissionCode: Array<Code>

  /**
   * Text describing a reason for an exclusion from the tendering process.
   * Text
   * Cardinality: 0..n
   */
  ExclusionReason?: Array<Text> | undefined

  /**
   * Text describing this qualification resolution.
   * Text
   * Cardinality: 0..n
   */
  Resolution?: Array<Text> | undefined

  /**
   * The date on which this qualification resolution was formalized.
   * Date
   * Cardinality: 1
   */
  ResolutionDate: Array<Date>

  /**
   * The time at which this qualification resolution was formalized.
   * Time
   * Cardinality: 0..1
   */
  ResolutionTime?: Array<Time> | undefined

  /**
   * The Procurement project lot to which this tenderer is accepted or rejected.
   * Procurement Project Lot
   * Cardinality: 0..1
   */
  ProcurementProjectLot?: Array<ProcurementProjectLot> | undefined
}
