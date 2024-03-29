import { AllowanceCharge } from './AllowanceCharge'
import { Code } from '../cbc/Code'
import { EnergyWaterSupply } from './EnergyWaterSupply'
import { MonetaryTotal } from './MonetaryTotal'
import { Period } from './Period'
import { TaxTotal } from './TaxTotal'
import { TelecommunicationsSupply } from './TelecommunicationsSupply'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe the consumption of a utility.
 */
export interface Consumption {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code identifying the type of the Utility Statement required for this consumption. Explains the kind of utility
   * the statement is about, e.g.. "gas", "electricity", "telephone"
   * Code
   * Cardinality: 0..1
   * Examples: Electricity
   */
  UtilityStatementTypeCode?: Array<Code> | undefined

  /**
   * The period of consumption.
   * Period
   * Cardinality: 0..1
   */
  MainPeriod?: Array<Period> | undefined

  /**
   * An allowance or charges that may apply with this consumption.
   * Allowance Charge
   * Cardinality: 0..n
   */
  AllowanceCharge?: Array<AllowanceCharge> | undefined

  /**
   * The total of taxes for each tax type covering the consumption.
   * Tax Total
   * Cardinality: 0..n
   */
  TaxTotal?: Array<TaxTotal> | undefined

  /**
   * The details of any energy or water consumption.
   * Energy Water Supply
   * Cardinality: 0..1
   */
  EnergyWaterSupply?: Array<EnergyWaterSupply> | undefined

  /**
   * The details of any telecommunications consumption.
   * Telecommunications Supply
   * Cardinality: 0..1
   */
  TelecommunicationsSupply?: Array<TelecommunicationsSupply> | undefined

  /**
   * The total amount payable on this consumption, including any allowances, charges, or taxes.
   * Monetary Total
   * Cardinality: 1
   */
  LegalMonetaryTotal: Array<MonetaryTotal>
}
