import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Measure } from '../cbc/Measure'
import { Party } from './Party'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a verified gross mass (VGM) measure and its documentation.
 */
export interface VerifiedGrossMass {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this mass measure.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * The weighing date.
   * Date
   * Cardinality: 0..1
   */
  WeighingDate?: Array<Date> | undefined

  /**
   * The weighing time.
   * Time
   * Cardinality: 0..1
   */
  WeighingTime?: Array<Time> | undefined

  /**
   * A code signifying the weighing method used (e.g. according the SOLAS Convention).
   * Code
   * Cardinality: 1
   * Examples: 1, 2
   */
  WeighingMethodCode: Array<Code>

  /**
   * An identifier for the weighing device used for executing the weight measurement.
   * Identifier
   * Cardinality: 0..1
   * Examples: WeighScale-01
   */
  WeighingDeviceID?: Array<Identifier> | undefined

  /**
   * Text describing the weighing device type used for executing the weight measurement.
   * Text
   * Cardinality: 0..1
   * Examples: Truck Scale, Weighbridge
   */
  WeighingDeviceType?: Array<Text> | undefined

  /**
   * The total verified gross mass of a packed container which includes the cargo weight, block and bracing materials
   * and container tare.
   * Measure
   * Cardinality: 1
   * Alternative business terms: VGM
   */
  GrossMassMeasure: Array<Measure>

  /**
   * The party executing the weight measure.
   * Party
   * Cardinality: 0..1
   */
  WeighingParty?: Array<Party> | undefined

  /**
   * The party playing the role of the Shipper (BCO, FF or NVOCC) who is responsible for the VGM (e.g. according the
   * SOLAS Convention).
   * Party
   * Cardinality: 0..1
   */
  ShipperParty?: Array<Party> | undefined

  /**
   * The party responsible for signing the VGM on behalf of the Shipper.
   * Party
   * Cardinality: 0..1
   */
  ResponsibleParty?: Array<Party> | undefined

  /**
   * A reference to the VGM documentary evidence.
   * Document Reference
   * Cardinality: 1..n
   */
  DocumentReference: Array<DocumentReference>
}
