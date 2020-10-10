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
import { TaxTotal } from './TaxTotal'
import { Text } from '../cbc/Text'

/**
 * A class to define a line in an Invoice.
 */
export interface InvoiceLine {
  /**
   * An identifier for this invoice line.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

  /**
   * A universally unique identifier for this invoice line.
   * Identifier
   * Cardinality: 0..1
   */
  UUID: [Identifier] | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note: Array<Text> | undefined

  /**
   * The quantity (of items) on this invoice line.
   * Quantity
   * Cardinality: 0..1
   */
  InvoicedQuantity: [Quantity] | undefined

  /**
   * The total amount for this invoice line, including allowance charges but net of taxes.
   * Amount
   * Cardinality: 1
   */
  LineExtensionAmount: [Amount]

  /**
   * The date of this invoice line, used to indicate the point at which tax becomes applicable.
   * Date
   * Cardinality: 0..1
   */
  TaxPointDate: [Date] | undefined

  /**
   * The buyer's accounting cost centre for this invoice line, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  AccountingCostCode: [Code] | undefined

  /**
   * The buyer's accounting cost centre for this invoice line, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  AccountingCost: [Text] | undefined

  /**
   * A code signifying the business purpose for this payment.
   * Code
   * Cardinality: 0..1
   */
  PaymentPurposeCode: [Code] | undefined

  /**
   * An indicator that this invoice line is free of charge (true) or not (false). The default is false.
   * Indicator
   * Cardinality: 0..1
   */
  FreeOfChargeIndicator: [Indicator] | undefined

  /**
   * An invoice period to which this invoice line applies.
   * Period
   * Cardinality: 0..n
   */
  InvoicePeriod: Array<Period> | undefined

  /**
   * A reference to an order line associated with this invoice line.
   * Order Line Reference
   * Cardinality: 0..n
   */
  OrderLineReference: Array<OrderLineReference> | undefined

  /**
   * A reference to a despatch line associated with this invoice line.
   * Line Reference
   * Cardinality: 0..n
   */
  DespatchLineReference: Array<LineReference> | undefined

  /**
   * A reference to a receipt line associated with this invoice line.
   * Line Reference
   * Cardinality: 0..n
   */
  ReceiptLineReference: Array<LineReference> | undefined

  /**
   * A reference to a billing document associated with this invoice line.
   * Billing Reference
   * Cardinality: 0..n
   */
  BillingReference: Array<BillingReference> | undefined

  /**
   * A reference to a document associated with this invoice line.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference: Array<DocumentReference> | undefined

  /**
   * A reference to pricing and item location information associated with this invoice line.
   * Pricing Reference
   * Cardinality: 0..1
   */
  PricingReference: [PricingReference] | undefined

  /**
   * The party who originated the Order to which the Invoice is related.
   * Party
   * Cardinality: 0..1
   */
  OriginatorParty: [Party] | undefined

  /**
   * A delivery associated with this invoice line.
   * Delivery
   * Cardinality: 0..n
   */
  Delivery: Array<Delivery> | undefined

  /**
   * A specification of payment terms associated with this invoice line.
   * Payment Terms
   * Cardinality: 0..n
   */
  PaymentTerms: Array<PaymentTerms> | undefined

  /**
   * An allowance or charge associated with this invoice line.
   * Allowance Charge
   * Cardinality: 0..n
   */
  AllowanceCharge: Array<AllowanceCharge> | undefined

  /**
   * A total amount of taxes of a particular kind applicable to this invoice line.
   * Tax Total
   * Cardinality: 0..n
   */
  TaxTotal: Array<TaxTotal> | undefined

  /**
   * A reference to a TaxTotal class describing the amount that has been withhold by the authorities, e.g. if the
   * creditor is in dept because of non paid taxes.
   * Tax Total
   * Cardinality: 0..n
   */
  WithholdingTaxTotal: Array<TaxTotal> | undefined

  /**
   * The item associated with this invoice line.
   * Item
   * Cardinality: 1
   */
  Item: [Item]

  /**
   * The price of the item associated with this invoice line.
   * Price
   * Cardinality: 0..1
   * Alternative business terms: Unit Price, Base Price
   */
  Price: [Price] | undefined

  /**
   * Terms and conditions of the delivery associated with this invoice line.
   * Delivery Terms
   * Cardinality: 0..1
   */
  DeliveryTerms: [DeliveryTerms] | undefined

  /**
   * An invoice line subsidiary to this invoice line.
   * Invoice Line
   * Cardinality: 0..n
   */
  SubInvoiceLine: Array<InvoiceLine> | undefined

  /**
   * The price extension, calculated by multiplying the price per unit by the quantity of items on this invoice line.
   * Price Extension
   * Cardinality: 0..1
   */
  ItemPriceExtension: [PriceExtension] | undefined
}
