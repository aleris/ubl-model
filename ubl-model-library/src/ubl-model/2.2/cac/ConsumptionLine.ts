import { AllowanceCharge } from './AllowanceCharge'
import { Amount } from '../cbc/Amount'
import { Delivery } from './Delivery'
import { Identifier } from '../cbc/Identifier'
import { Period } from './Period'
import { Price } from './Price'
import { Quantity } from '../cbc/Quantity'
import { TaxTotal } from './TaxTotal'
import { UnstructuredPrice } from './UnstructuredPrice'
import { UtilityItem } from './UtilityItem'

/**
 * A class to describe a line item for utility consumption. To specify more than one utility item, use separate
 * consumption lines.
 */
export interface ConsumptionLine {
  /**
   * An identifier for this consumption line.
   * Identifier
   * Cardinality: 1
   * Examples: 1
   */
  ID: [Identifier]

  /**
   * An identifier for the transaction line on a related document (such as an invoice) that covers this consumption
   * line.
   * Identifier
   * Cardinality: 0..1
   * Examples: Consumption
   */
  ParentDocumentLineReferenceID?: [Identifier] | undefined

  /**
   * The quantity invoiced.
   * Quantity
   * Cardinality: 1
   */
  InvoicedQuantity: [Quantity]

  /**
   * The monetary amount, including discount, to be charged for this consumption line.
   * Amount
   * Cardinality: 1
   */
  LineExtensionAmount: [Amount]

  /**
   * The period of time covered by this consumption line.
   * Period
   * Cardinality: 0..1
   */
  Period?: [Period] | undefined

  /**
   * A delivery of the utility item on this consumption line.
   * Delivery
   * Cardinality: 0..n
   */
  Delivery?: Array<Delivery> | undefined

  /**
   * An allowance or charge that applies to this consumption line.
   * Allowance Charge
   * Cardinality: 0..n
   */
  AllowanceCharge?: Array<AllowanceCharge> | undefined

  /**
   * A total amount of taxes of a particular kind applicable to this consumption line.
   * Tax Total
   * Cardinality: 0..n
   */
  TaxTotal?: Array<TaxTotal> | undefined

  /**
   * The utility item consumed.
   * Utility Item
   * Cardinality: 1
   */
  UtilityItem: [UtilityItem]

  /**
   * The price associated with this consumption line, expressed in a data structure containing multiple properties.
   * Price
   * Cardinality: 0..1
   */
  Price?: [Price] | undefined

  /**
   * The price associated with this consumption line expressed in a less structured form that includes just the amount
   * and the time of use.
   * Unstructured Price
   * Cardinality: 0..1
   */
  UnstructuredPrice?: [UnstructuredPrice] | undefined
}
