import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'

/**
 * The Statement of correction, for examples heating correction.
 */
export interface ConsumptionCorrection {
  /**
   * Statement for the correction type.
   * Text
   * Cardinality: 0..1
   * Examples: Heating Correction
   */
  CorrectionType?: [Text] | undefined

  /**
   * Statement at the code for the correction type.
   * Code
   * Cardinality: 0..1
   * Examples: HeatingCorrection
   */
  CorrectionTypeCode?: [Code] | undefined

  /**
   * Statement for meter number.
   * Text
   * Cardinality: 0..1
   * Examples: 530071575
   */
  MeterNumber?: [Text] | undefined

  /**
   * Correction of the gas pressure.
   * Quantity
   * Cardinality: 0..1
   */
  GasPressureQuantity?: [Quantity] | undefined

  /**
   * Statement for the actuel heating correction temperature.
   * Quantity
   * Cardinality: 0..1
   * Examples: -36.69
   */
  ActualTemperatureReductionQuantity?: [Quantity] | undefined

  /**
   * Statement for the standard for heating correction temperature.
   * Quantity
   * Cardinality: 0..1
   * Examples: -37.00
   */
  NormalTemperatureReductionQuantity?: [Quantity] | undefined

  /**
   * Deviation from standard heating correction.
   * Quantity
   * Cardinality: 0..1
   * Examples: 0.31
   */
  DifferenceTemperatureReductionQuantity?: [Quantity] | undefined

  /**
   * Description related to the corrections.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * Correction per MWH per degree C.
   * Amount
   * Cardinality: 0..1
   * Examples: 0.0000
   */
  CorrectionUnitAmount?: [Amount] | undefined

  /**
   * Your consumpt for district heating energy.
   * Quantity
   * Cardinality: 0..1
   * Examples: 563.6240
   */
  ConsumptionEnergyQuantity?: [Quantity] | undefined

  /**
   * Your consumpt for district heating water.
   * Quantity
   * Cardinality: 0..1
   * Examples: 13212.14
   */
  ConsumptionWaterQuantity?: [Quantity] | undefined

  /**
   * Your correction for heating correction.
   * Amount
   * Cardinality: 0..1
   * Examples: 0.00
   */
  CorrectionAmount?: [Amount] | undefined
}
