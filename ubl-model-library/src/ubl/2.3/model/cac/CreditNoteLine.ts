import { AllowanceCharge } from './AllowanceCharge'
import { Amount } from '../cbc/Amount'
import { BillingReference } from './BillingReference'
import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Delivery } from './Delivery'
import { DeliveryTerms } from './DeliveryTerms'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Item } from './Item'
import { LineReference } from './LineReference'
import { OrderLineReference } from './OrderLineReference'
import { Party } from './Party'
import { PaymentTerms } from './PaymentTerms'
import { Period } from './Period'
import { Price } from './Price'
import { PriceExtension } from './PriceExtension'
import { PricingReference } from './PricingReference'
import { Quantity } from '../cbc/Quantity'
import { Response } from './Response'
import { TaxTotal } from './TaxTotal'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define a line in a Credit Note or Self Billed Credit Note.
 */
export interface CreditNoteLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this credit note line.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * A universally unique identifier for this credit note line.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: Array<Identifier> | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * The quantity of items credited in this credit note line.
   * Quantity
   * Cardinality: 0..1
   */
  CreditedQuantity?: Array<Quantity> | undefined

  /**
   * The total amount for this credit note line, including allowance charges but exclusive of taxes.
   * Amount
   * Cardinality: 0..1
   */
  LineExtensionAmount?: Array<Amount> | undefined

  /**
   * The total amount for this credit note line, including all allowances, charges and taxes.
   * Amount
   * Cardinality: 0..1
   */
  TaxInclusiveLineExtensionAmount?: Array<Amount> | undefined

  /**
   * The date of this credit note line, used to indicate the point at which tax becomes applicable.
   * Date
   * Cardinality: 0..1
   */
  TaxPointDate?: Array<Date> | undefined

  /**
   * The buyer's accounting cost centre for this credit note line, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  AccountingCostCode?: Array<Code> | undefined

  /**
   * The buyer's accounting cost centre for this credit note line, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  AccountingCost?: Array<Text> | undefined

  /**
   * A code signifying the business purpose for this payment.
   * Code
   * Cardinality: 0..1
   */
  PaymentPurposeCode?: Array<Code> | undefined

  /**
   * An indicator that this credit note line is free of charge (true) or not (false). The default is false.
   * Indicator
   * Cardinality: 0..1
   */
  FreeOfChargeIndicator?: Array<Indicator> | undefined

  /**
   * An invoice period to which this credit note line applies.
   * Period
   * Cardinality: 0..n
   */
  InvoicePeriod?: Array<Period> | undefined

  /**
   * A reference to an order line associated with this credit note line.
   * Order Line Reference
   * Cardinality: 0..n
   */
  OrderLineReference?: Array<OrderLineReference> | undefined

  /**
   * A reason for the credit.
   * Response
   * Cardinality: 0..n
   */
  DiscrepancyResponse?: Array<Response> | undefined

  /**
   * A reference to a despatch line associated with this credit note line.
   * Line Reference
   * Cardinality: 0..n
   */
  DespatchLineReference?: Array<LineReference> | undefined

  /**
   * A reference to a receipt line associated with this credit note line.
   * Line Reference
   * Cardinality: 0..n
   */
  ReceiptLineReference?: Array<LineReference> | undefined

  /**
   * A reference to a billing document associated with this credit note line.
   * Billing Reference
   * Cardinality: 0..n
   */
  BillingReference?: Array<BillingReference> | undefined

  /**
   * A reference to a document associated with this credit note line.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to pricing and item location information associated with this credit note line.
   * Pricing Reference
   * Cardinality: 0..1
   */
  PricingReference?: Array<PricingReference> | undefined

  /**
   * The party who originated the Order to which the Credit Note is related.
   * Party
   * Cardinality: 0..1
   */
  OriginatorParty?: Array<Party> | undefined

  /**
   * A delivery associated with this credit note line.
   * Delivery
   * Cardinality: 0..n
   */
  Delivery?: Array<Delivery> | undefined

  /**
   * A specification of payment terms associated with this credit note line.
   * Payment Terms
   * Cardinality: 0..n
   */
  PaymentTerms?: Array<PaymentTerms> | undefined

  /**
   * A total amount of taxes of a particular kind applicable to this credit note line.
   * Tax Total
   * Cardinality: 0..n
   */
  TaxTotal?: Array<TaxTotal> | undefined

  /**
   * An allowance or charge associated with this credit note.
   * Allowance Charge
   * Cardinality: 0..n
   */
  AllowanceCharge?: Array<AllowanceCharge> | undefined

  /**
   * The item associated with this credit note line.
   * Item
   * Cardinality: 0..1
   */
  Item?: Array<Item> | undefined

  /**
   * The price of the item associated with this credit note line.
   * Price
   * Cardinality: 0..1
   * Alternative business terms: Unit Price, Base Price
   */
  Price?: Array<Price> | undefined

  /**
   * Terms and conditions of a delivery associated with this credit note line.
   * Delivery Terms
   * Cardinality: 0..n
   */
  DeliveryTerms?: Array<DeliveryTerms> | undefined

  /**
   * A class defining one or more Credit Note Lines detailing the credit note line.
   * Credit Note Line
   * Cardinality: 0..n
   */
  SubCreditNoteLine?: Array<CreditNoteLine> | undefined

  /**
   * The price extension, calculated by multiplying the price per unit by the quantity of items on this credit note
   * line.
   * Price Extension
   * Cardinality: 0..1
   */
  ItemPriceExtension?: Array<PriceExtension> | undefined
}
