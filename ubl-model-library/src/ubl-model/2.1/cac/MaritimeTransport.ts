import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Location } from './Location'
import { Measure } from '../cbc/Measure'
import { Text } from '../cbc/Text'

/**
 * A class to describe a vessel used for transport by water (including sea, river, and canal).
 */
export interface MaritimeTransport {
  /**
   * An identifier for a specific vessel.
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: Lloyds Number, Registration Number (WCO ID 167)
   * Examples: International Maritime Organisation number of a vessel
   */
  VesselID: [Identifier] | undefined

  /**
   * The name of the vessel.
   * Name
   * Cardinality: 0..1
   * Alternative business terms: Ships Name
   */
  VesselName: [Text] | undefined

  /**
   * The radio call sign of the vessel.
   * Identifier
   * Cardinality: 0..1
   * Examples: NES
   */
  RadioCallSignID: [Identifier] | undefined

  /**
   * Information about what services a vessel will require when it arrives at a port, such as refueling, maintenance,
   * waste disposal etc.
   * Text
   * Cardinality: 0..n
   */
  ShipsRequirements: Array<Text> | undefined

  /**
   * Gross tonnage is calculated by measuring a ship's volume (from keel to funnel, to the outside of the hull framing)
   * and applying a mathematical formula and is used to determine things such as a ship's manning regulations, safety
   * rules, registration fees and port dues.
   * Measure
   * Cardinality: 0..1
   */
  GrossTonnageMeasure: [Measure] | undefined

  /**
   * Net tonnage is calculated by measuring a ship's internal volume and applying a mathematical formula and is used to
   * calculate the port duties.
   * Measure
   * Cardinality: 0..1
   */
  NetTonnageMeasure: [Measure] | undefined

  /**
   * The certificate issued to the ship by the ships registry in a given flag state.
   * Document Reference
   * Cardinality: 0..1
   */
  RegistryCertificateDocumentReference: [DocumentReference] | undefined

  /**
   * The port in which a vessel is registered or permanently based.
   * Location
   * Cardinality: 0..1
   */
  RegistryPortLocation: [Location] | undefined
}
