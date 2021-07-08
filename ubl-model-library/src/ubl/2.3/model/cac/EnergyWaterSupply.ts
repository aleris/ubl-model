import { ConsumptionAverage } from './ConsumptionAverage'
import { ConsumptionCorrection } from './ConsumptionCorrection'
import { ConsumptionReport } from './ConsumptionReport'
import { EnergyTaxReport } from './EnergyTaxReport'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe the supply (and therefore consumption) of an amount of energy or water.
 */
export interface EnergyWaterSupply {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An amount of energy or water consumed.
   * Consumption Report
   * Cardinality: 0..n
   */
  ConsumptionReport?: Array<ConsumptionReport> | undefined

  /**
   * A tax on the consumption of energy or water.
   * Energy Tax Report
   * Cardinality: 0..n
   */
  EnergyTaxReport?: Array<EnergyTaxReport> | undefined

  /**
   * A consumption average.
   * Consumption Average
   * Cardinality: 0..n
   */
  ConsumptionAverage?: Array<ConsumptionAverage> | undefined

  /**
   * Describes any corrections or adjustments to the supply of energy or water.
   * Consumption Correction
   * Cardinality: 0..n
   */
  EnergyWaterConsumptionCorrection?: Array<ConsumptionCorrection> | undefined
}
