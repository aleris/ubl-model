import { AllowanceCharge } from './AllowanceCharge'
import { Amount } from '../cbc/Amount'
import { BillingReference } from './BillingReference'
import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Delivery } from './Delivery'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Item } from './Item'
import { LineReference } from './LineReference'
import { Price } from './Price'
import { PricingReference } from './PricingReference'
import { Quantity } from '../cbc/Quantity'
import { Response } from './Response'
import { TaxTotal } from './TaxTotal'
import { Text } from '../cbc/Text'

/**
 * A class to define a line in a Debit Note.
 */
export interface DebitNoteLine {
  /**
   * An identifier for this debit note line.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

  /**
   * A universally unique identifier for this debit note line.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: [Identifier] | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * The quantity of Items debited in this debit note line.
   * Quantity
   * Cardinality: 0..1
   */
  DebitedQuantity?: [Quantity] | undefined

  /**
   * The total amount for this debit note line, including allowance charges but net of taxes.
   * Amount
   * Cardinality: 1
   */
  LineExtensionAmount: [Amount]

  /**
   * The date of this debit note line, used to indicate the point at which tax becomes applicable.
   * Date
   * Cardinality: 0..1
   */
  TaxPointDate?: [Date] | undefined

  /**
   * The buyer's accounting cost centre for this debit note line, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  AccountingCostCode?: [Code] | undefined

  /**
   * The buyer's accounting cost centre for this debit note line, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  AccountingCost?: [Text] | undefined

  /**
   * A code signifying the business purpose for this payment.
   * Code
   * Cardinality: 0..1
   */
  PaymentPurposeCode?: [Code] | undefined

  /**
   * A reason for the debit.
   * Response
   * Cardinality: 0..n
   */
  DiscrepancyResponse?: Array<Response> | undefined

  /**
   * A reference to a despatch line associated with this debit note line.
   * Line Reference
   * Cardinality: 0..n
   */
  DespatchLineReference?: Array<LineReference> | undefined

  /**
   * A reference to a receipt line associated with this debit note line.
   * Line Reference
   * Cardinality: 0..n
   */
  ReceiptLineReference?: Array<LineReference> | undefined

  /**
   * A reference to a billing document associated with this debit note line.
   * Billing Reference
   * Cardinality: 0..n
   */
  BillingReference?: Array<BillingReference> | undefined

  /**
   * A reference to a document associated with this debit note line.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to pricing and item location information associated with this debit note line.
   * Pricing Reference
   * Cardinality: 0..1
   */
  PricingReference?: [PricingReference] | undefined

  /**
   * A delivery associated with this debit note line.
   * Delivery
   * Cardinality: 0..n
   */
  Delivery?: Array<Delivery> | undefined

  /**
   * A total amount of taxes of a particular kind applicable to this debit note line.
   * Tax Total
   * Cardinality: 0..n
   */
  TaxTotal?: Array<TaxTotal> | undefined

  /**
   * An allowance or charge associated with this debit note.
   * Allowance Charge
   * Cardinality: 0..n
   */
  AllowanceCharge?: Array<AllowanceCharge> | undefined

  /**
   * The item associated with this debit note line.
   * Item
   * Cardinality: 0..1
   */
  Item?: [Item] | undefined

  /**
   * The price of the item associated with this debit note line.
   * Price
   * Cardinality: 0..1
   * Alternative business terms: Unit Price, Base Price
   */
  Price?: [Price] | undefined

  /**
   * A recursive description of a debit note line subsidiary to this debit note line.
   * Debit Note Line
   * Cardinality: 0..n
   */
  SubDebitNoteLine?: Array<DebitNoteLine> | undefined
}
