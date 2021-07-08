import { Code } from '../cbc/Code'
import { Contract } from './Contract'
import { Identifier } from '../cbc/Identifier'
import { Numeric } from '../cbc/Numeric'
import { Quantity } from '../cbc/Quantity'
import { TaxCategory } from './TaxCategory'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe the consumption of a utility product.
 */
export interface UtilityItem {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this utility item.
   * Identifier
   * Cardinality: 1
   * Examples: 1
   */
  ID: Array<Identifier>

  /**
   * An identifier for the subscriber to the utility.
   * Identifier
   * Cardinality: 0..1
   * Examples: 98143211
   */
  SubscriberID?: Array<Identifier> | undefined

  /**
   * Identification of the subscriber type, expressed as text..
   * Text
   * Cardinality: 0..1
   */
  SubscriberType?: Array<Text> | undefined

  /**
   * The code identifying for the service type.
   * Code
   * Cardinality: 0..1
   */
  SubscriberTypeCode?: Array<Code> | undefined

  /**
   * Text describing the consumption product.
   * Text
   * Cardinality: 0..n
   * Examples: Basis price quarter (5.761 kWh per 35,58 cents), Transport of electricity, etc.
   */
  Description?: Array<Text> | undefined

  /**
   * The unit packaging quantity.
   * Quantity
   * Cardinality: 0..1
   * Examples: 1
   */
  PackQuantity?: Array<Quantity> | undefined

  /**
   * The number of items in a pack.
   * Numeric
   * Cardinality: 0..1
   */
  PackSizeNumeric?: Array<Numeric> | undefined

  /**
   * The type of product consumed, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: Consumption
   */
  ConsumptionType?: Array<Text> | undefined

  /**
   * The type of product consumed, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: Consumption
   */
  ConsumptionTypeCode?: Array<Code> | undefined

  /**
   * Information of the actual payments type for the utility Item
   * Text
   * Cardinality: 0..1
   */
  CurrentChargeType?: Array<Text> | undefined

  /**
   * Information of the actual payments type code expressed as a code
   * Code
   * Cardinality: 0..1
   */
  CurrentChargeTypeCode?: Array<Code> | undefined

  /**
   * Information about the one-time payment type in case everything is paid One time
   * Text
   * Cardinality: 0..1
   */
  OneTimeChargeType?: Array<Text> | undefined

  /**
   * Information about the one-time payment type code
   * Code
   * Cardinality: 0..1
   */
  OneTimeChargeTypeCode?: Array<Code> | undefined

  /**
   * The tax category applicable to this utility item.
   * Tax Category
   * Cardinality: 0..1
   */
  TaxCategory?: Array<TaxCategory> | undefined

  /**
   * A contract setting forth conditions applicable to this utility item.
   * Contract
   * Cardinality: 0..1
   */
  Contract?: Array<Contract> | undefined
}
