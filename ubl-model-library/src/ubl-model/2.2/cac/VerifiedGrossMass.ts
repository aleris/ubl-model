import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Measure } from '../cbc/Measure'
import { Party } from './Party'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'

/**
 * A class to describe a verified gross mass (VGM) measure and its documentation.
 */
export interface VerifiedGrossMass {
  /**
   * An identifier for this mass measure.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * The weighing date.
   * Date
   * Cardinality: 0..1
   */
  WeighingDate: [Date] | undefined

  /**
   * The weighing time.
   * Time
   * Cardinality: 0..1
   */
  WeighingTime: [Time] | undefined

  /**
   * A code signifying the weighing method used (e.g. according the SOLAS Convention).
   * Code
   * Cardinality: 1
   * Examples: 1, 2
   */
  WeighingMethodCode: [Code]

  /**
   * An identifier for the weighing device used for executing the weight measurement.
   * Identifier
   * Cardinality: 0..1
   * Examples: WeighScale-01
   */
  WeighingDeviceID: [Identifier] | undefined

  /**
   * Text describing the weighing device type used for executing the weight measurement.
   * Text
   * Cardinality: 0..1
   * Examples: Truck Scale, Weighbridge
   */
  WeighingDeviceType: [Text] | undefined

  /**
   * The total verified gross mass of a packed container which includes the cargo weight, block and bracing materials
   * and container tare.
   * Measure
   * Cardinality: 1
   * Alternative business terms: VGM
   */
  GrossMassMeasure: [Measure]

  /**
   * The party executing the weight measure.
   * Party
   * Cardinality: 0..1
   */
  WeighingParty: [Party] | undefined

  /**
   * The party playing the role of the Shipper (BCO, FF or NVOCC) who is responsible for the VGM (e.g. according the
   * SOLAS Convention).
   * Party
   * Cardinality: 0..1
   */
  ShipperParty: [Party] | undefined

  /**
   * The party responsible for signing the VGM on behalf of the Shipper.
   * Party
   * Cardinality: 0..1
   */
  ResponsibleParty: [Party] | undefined

  /**
   * A reference to the VGM documentary evidence.
   * Document Reference
   * Cardinality: 1..n
   */
  DocumentReference: Array<DocumentReference>
}
