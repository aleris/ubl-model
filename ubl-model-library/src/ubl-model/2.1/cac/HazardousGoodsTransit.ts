import { Code } from '../cbc/Code'
import { Temperature } from './Temperature'

/**
 * A class to describe hazardous goods in transit.
 */
export interface HazardousGoodsTransit {
  /**
   * An identifier for a transport emergency card describing the actions to be taken in an emergency in transporting the
   * hazardous goods. It may be the identity number of a hazardous emergency response plan assigned by the appropriate
   * authority.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: TREM card
   */
  TransportEmergencyCardCode?: [Code] | undefined

  /**
   * A code signifying the packaging requirement for transportation of the hazardous goods as assigned by IATA, IMDB,
   * ADR, RID etc.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Packing Group
   */
  PackingCriteriaCode?: [Code] | undefined

  /**
   * A code signifying the set of legal regulations governing the transportation of the hazardous goods.
   * Code
   * Cardinality: 0..1
   */
  HazardousRegulationCode?: [Code] | undefined

  /**
   * A code signifying the Inhalation Toxicity Hazard Zone for the hazardous goods, as defined by the US Department of
   * Transportation.
   * Code
   * Cardinality: 0..1
   */
  InhalationToxicityZoneCode?: [Code] | undefined

  /**
   * A code signifying authorization for the transportation of hazardous cargo.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Permission for Transport
   */
  TransportAuthorizationCode?: [Code] | undefined

  /**
   * The maximum temperature at which the hazardous goods can safely be transported.
   * Temperature
   * Cardinality: 0..1
   */
  MaximumTemperature?: [Temperature] | undefined

  /**
   * The minimum temperature at which the hazardous goods can safely be transported.
   * Temperature
   * Cardinality: 0..1
   */
  MinimumTemperature?: [Temperature] | undefined
}
