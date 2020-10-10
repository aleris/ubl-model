import { Numeric } from '../cbc/Numeric'
import { Period } from './Period'
import { Renewal } from './Renewal'
import { Text } from '../cbc/Text'

/**
 * A class to describe possible extensions to a contract.
 */
export interface ContractExtension {
  /**
   * A description for the possible options that can be carried out during the execution of the contract.
   * Text
   * Cardinality: 0..n
   */
  OptionsDescription: Array<Text> | undefined

  /**
   * The fixed minimum number of contract extensions or renewals.
   * Numeric
   * Cardinality: 0..1
   */
  MinimumNumberNumeric: [Numeric] | undefined

  /**
   * The maximum allowed number of contract extensions.
   * Numeric
   * Cardinality: 0..1
   */
  MaximumNumberNumeric: [Numeric] | undefined

  /**
   * The period during which the option for extending the contract is available.
   * Period
   * Cardinality: 0..1
   */
  OptionValidityPeriod: [Period] | undefined

  /**
   * The period allowed for each contract extension.
   * Renewal
   * Cardinality: 0..n
   */
  Renewal: Array<Renewal> | undefined
}
