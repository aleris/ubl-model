import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * The Statement of correction, for examples heating correction.
 */
export interface ConsumptionCorrection {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * Statement for the correction type.
   * Text
   * Cardinality: 0..1
   * Examples: Heating Correction
   */
  CorrectionType?: Array<Text> | undefined

  /**
   * Statement at the code for the correction type.
   * Code
   * Cardinality: 0..1
   * Examples: HeatingCorrection
   */
  CorrectionTypeCode?: Array<Code> | undefined

  /**
   * Statement for meter number.
   * Text
   * Cardinality: 0..1
   * Examples: 530071575
   */
  MeterNumber?: Array<Text> | undefined

  /**
   * Correction of the gas pressure.
   * Quantity
   * Cardinality: 0..1
   */
  GasPressureQuantity?: Array<Quantity> | undefined

  /**
   * Statement for the actuel heating correction temperature.
   * Quantity
   * Cardinality: 0..1
   * Examples: -36.69
   */
  ActualTemperatureReductionQuantity?: Array<Quantity> | undefined

  /**
   * Statement for the standard for heating correction temperature.
   * Quantity
   * Cardinality: 0..1
   * Examples: -37.00
   */
  NormalTemperatureReductionQuantity?: Array<Quantity> | undefined

  /**
   * Deviation from standard heating correction.
   * Quantity
   * Cardinality: 0..1
   * Examples: 0.31
   */
  DifferenceTemperatureReductionQuantity?: Array<Quantity> | undefined

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
  CorrectionUnitAmount?: Array<Amount> | undefined

  /**
   * Your consumpt for district heating energy.
   * Quantity
   * Cardinality: 0..1
   * Examples: 563.6240
   */
  ConsumptionEnergyQuantity?: Array<Quantity> | undefined

  /**
   * Your consumpt for district heating water.
   * Quantity
   * Cardinality: 0..1
   * Examples: 13212.14
   */
  ConsumptionWaterQuantity?: Array<Quantity> | undefined

  /**
   * Your correction for heating correction.
   * Amount
   * Cardinality: 0..1
   * Examples: 0.00
   */
  CorrectionAmount?: Array<Amount> | undefined
}
