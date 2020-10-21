import { FieldMeta } from '../../FieldMeta'

export enum CreditNoteLineField {
  ID = 'ID',
  UUID = 'UUID',
  Note = 'Note',
  CreditedQuantity = 'CreditedQuantity',
  LineExtensionAmount = 'LineExtensionAmount',
  TaxPointDate = 'TaxPointDate',
  AccountingCostCode = 'AccountingCostCode',
  AccountingCost = 'AccountingCost',
  PaymentPurposeCode = 'PaymentPurposeCode',
  FreeOfChargeIndicator = 'FreeOfChargeIndicator',
  InvoicePeriod = 'InvoicePeriod',
  OrderLineReference = 'OrderLineReference',
  DiscrepancyResponse = 'DiscrepancyResponse',
  DespatchLineReference = 'DespatchLineReference',
  ReceiptLineReference = 'ReceiptLineReference',
  BillingReference = 'BillingReference',
  DocumentReference = 'DocumentReference',
  PricingReference = 'PricingReference',
  OriginatorParty = 'OriginatorParty',
  Delivery = 'Delivery',
  PaymentTerms = 'PaymentTerms',
  TaxTotal = 'TaxTotal',
  AllowanceCharge = 'AllowanceCharge',
  Item = 'Item',
  Price = 'Price',
  DeliveryTerms = 'DeliveryTerms',
  SubCreditNoteLine = 'SubCreditNoteLine',
  ItemPriceExtension = 'ItemPriceExtension'
}

export const CreditNoteLineFieldMetaID = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this credit note line.',
  '1',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaUUID = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for this credit note line.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaNote = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaCreditedQuantity = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.CreditedQuantity,
  'CreditedQuantity',
  'Quantity',
  'Quantity',
  'The quantity of items credited in this credit note line.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaLineExtensionAmount = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.LineExtensionAmount,
  'LineExtensionAmount',
  'Line Extension Amount',
  'Amount',
  'The total amount for this credit note line, including allowance charges but exclusive of taxes.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaTaxPointDate = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.TaxPointDate,
  'TaxPointDate',
  'Tax Point Date',
  'Date',
  'The date of this credit note line, used to indicate the point at which tax becomes applicable.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaAccountingCostCode = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  'Code',
  'The buyer\'s accounting cost centre for this credit note line, expressed as a code.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaAccountingCost = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  'Text',
  'The buyer\'s accounting cost centre for this credit note line, expressed as text.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaPaymentPurposeCode = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.PaymentPurposeCode,
  'PaymentPurposeCode',
  'Payment Purpose Code',
  'Code',
  'A code signifying the business purpose for this payment.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaFreeOfChargeIndicator = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.FreeOfChargeIndicator,
  'FreeOfChargeIndicator',
  'Indicator',
  'Indicator',
  'An indicator that this credit note line is free of charge (true) or not (false). The default is false.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaInvoicePeriod = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.InvoicePeriod,
  'InvoicePeriod',
  'Period',
  'Period',
  'An invoice period to which this credit note line applies.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaOrderLineReference = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.OrderLineReference,
  'OrderLineReference',
  'Order Line Reference',
  'OrderLineReference',
  'A reference to an order line associated with this credit note line.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaDiscrepancyResponse = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.DiscrepancyResponse,
  'DiscrepancyResponse',
  'Response',
  'Response',
  'A reason for the credit.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaDespatchLineReference = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.DespatchLineReference,
  'DespatchLineReference',
  'Line Reference',
  'LineReference',
  'A reference to a despatch line associated with this credit note line.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaReceiptLineReference = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.ReceiptLineReference,
  'ReceiptLineReference',
  'Line Reference',
  'LineReference',
  'A reference to a receipt line associated with this credit note line.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaBillingReference = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.BillingReference,
  'BillingReference',
  'Billing Reference',
  'BillingReference',
  'A reference to a billing document associated with this credit note line.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaDocumentReference = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a document associated with this credit note line.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaPricingReference = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.PricingReference,
  'PricingReference',
  'Pricing Reference',
  'PricingReference',
  'A reference to pricing and item location information associated with this credit note line.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaOriginatorParty = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.OriginatorParty,
  'OriginatorParty',
  'Party',
  'Party',
  'The party who originated the Order to which the Credit Note is related.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaDelivery = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.Delivery,
  'Delivery',
  'Delivery',
  'Delivery',
  'A delivery associated with this credit note line.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaPaymentTerms = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  'PaymentTerms',
  'A specification of payment terms associated with this credit note line.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaTaxTotal = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'A total amount of taxes of a particular kind applicable to this credit note line.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaAllowanceCharge = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'An allowance or charge associated with this credit note.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaItem = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.Item,
  'Item',
  'Item',
  'Item',
  'The item associated with this credit note line.',
  '0..1',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaPrice = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.Price,
  'Price',
  'Price',
  'Price',
  'The price of the item associated with this credit note line.',
  '0..1',
  'Unit Price, Base Price',
  undefined
)

export const CreditNoteLineFieldMetaDeliveryTerms = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  'DeliveryTerms',
  'Terms and conditions of a delivery associated with this credit note line.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaSubCreditNoteLine = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.SubCreditNoteLine,
  'SubCreditNoteLine',
  'Credit Note Line',
  'CreditNoteLine',
  'A class defining one or more Credit Note Lines detailing the credit note line.',
  '0..n',
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaItemPriceExtension = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.ItemPriceExtension,
  'ItemPriceExtension',
  'Price Extension',
  'PriceExtension',
  'The price extension, calculated by multiplying the price per unit by the quantity of items on this credit note line.',
  '0..1',
  undefined,
  undefined
)

export class CreditNoteLineFieldMeta {
  public static readonly ID = CreditNoteLineFieldMetaID
  public static readonly UUID = CreditNoteLineFieldMetaUUID
  public static readonly Note = CreditNoteLineFieldMetaNote
  public static readonly CreditedQuantity = CreditNoteLineFieldMetaCreditedQuantity
  public static readonly LineExtensionAmount = CreditNoteLineFieldMetaLineExtensionAmount
  public static readonly TaxPointDate = CreditNoteLineFieldMetaTaxPointDate
  public static readonly AccountingCostCode = CreditNoteLineFieldMetaAccountingCostCode
  public static readonly AccountingCost = CreditNoteLineFieldMetaAccountingCost
  public static readonly PaymentPurposeCode = CreditNoteLineFieldMetaPaymentPurposeCode
  public static readonly FreeOfChargeIndicator = CreditNoteLineFieldMetaFreeOfChargeIndicator
  public static readonly InvoicePeriod = CreditNoteLineFieldMetaInvoicePeriod
  public static readonly OrderLineReference = CreditNoteLineFieldMetaOrderLineReference
  public static readonly DiscrepancyResponse = CreditNoteLineFieldMetaDiscrepancyResponse
  public static readonly DespatchLineReference = CreditNoteLineFieldMetaDespatchLineReference
  public static readonly ReceiptLineReference = CreditNoteLineFieldMetaReceiptLineReference
  public static readonly BillingReference = CreditNoteLineFieldMetaBillingReference
  public static readonly DocumentReference = CreditNoteLineFieldMetaDocumentReference
  public static readonly PricingReference = CreditNoteLineFieldMetaPricingReference
  public static readonly OriginatorParty = CreditNoteLineFieldMetaOriginatorParty
  public static readonly Delivery = CreditNoteLineFieldMetaDelivery
  public static readonly PaymentTerms = CreditNoteLineFieldMetaPaymentTerms
  public static readonly TaxTotal = CreditNoteLineFieldMetaTaxTotal
  public static readonly AllowanceCharge = CreditNoteLineFieldMetaAllowanceCharge
  public static readonly Item = CreditNoteLineFieldMetaItem
  public static readonly Price = CreditNoteLineFieldMetaPrice
  public static readonly DeliveryTerms = CreditNoteLineFieldMetaDeliveryTerms
  public static readonly SubCreditNoteLine = CreditNoteLineFieldMetaSubCreditNoteLine
  public static readonly ItemPriceExtension = CreditNoteLineFieldMetaItemPriceExtension
}

export const CreditNoteLineFieldMap = new Map([
  [CreditNoteLineField.ID, CreditNoteLineFieldMetaID],
  [CreditNoteLineField.UUID, CreditNoteLineFieldMetaUUID],
  [CreditNoteLineField.Note, CreditNoteLineFieldMetaNote],
  [CreditNoteLineField.CreditedQuantity, CreditNoteLineFieldMetaCreditedQuantity],
  [CreditNoteLineField.LineExtensionAmount, CreditNoteLineFieldMetaLineExtensionAmount],
  [CreditNoteLineField.TaxPointDate, CreditNoteLineFieldMetaTaxPointDate],
  [CreditNoteLineField.AccountingCostCode, CreditNoteLineFieldMetaAccountingCostCode],
  [CreditNoteLineField.AccountingCost, CreditNoteLineFieldMetaAccountingCost],
  [CreditNoteLineField.PaymentPurposeCode, CreditNoteLineFieldMetaPaymentPurposeCode],
  [CreditNoteLineField.FreeOfChargeIndicator, CreditNoteLineFieldMetaFreeOfChargeIndicator],
  [CreditNoteLineField.InvoicePeriod, CreditNoteLineFieldMetaInvoicePeriod],
  [CreditNoteLineField.OrderLineReference, CreditNoteLineFieldMetaOrderLineReference],
  [CreditNoteLineField.DiscrepancyResponse, CreditNoteLineFieldMetaDiscrepancyResponse],
  [CreditNoteLineField.DespatchLineReference, CreditNoteLineFieldMetaDespatchLineReference],
  [CreditNoteLineField.ReceiptLineReference, CreditNoteLineFieldMetaReceiptLineReference],
  [CreditNoteLineField.BillingReference, CreditNoteLineFieldMetaBillingReference],
  [CreditNoteLineField.DocumentReference, CreditNoteLineFieldMetaDocumentReference],
  [CreditNoteLineField.PricingReference, CreditNoteLineFieldMetaPricingReference],
  [CreditNoteLineField.OriginatorParty, CreditNoteLineFieldMetaOriginatorParty],
  [CreditNoteLineField.Delivery, CreditNoteLineFieldMetaDelivery],
  [CreditNoteLineField.PaymentTerms, CreditNoteLineFieldMetaPaymentTerms],
  [CreditNoteLineField.TaxTotal, CreditNoteLineFieldMetaTaxTotal],
  [CreditNoteLineField.AllowanceCharge, CreditNoteLineFieldMetaAllowanceCharge],
  [CreditNoteLineField.Item, CreditNoteLineFieldMetaItem],
  [CreditNoteLineField.Price, CreditNoteLineFieldMetaPrice],
  [CreditNoteLineField.DeliveryTerms, CreditNoteLineFieldMetaDeliveryTerms],
  [CreditNoteLineField.SubCreditNoteLine, CreditNoteLineFieldMetaSubCreditNoteLine],
  [CreditNoteLineField.ItemPriceExtension, CreditNoteLineFieldMetaItemPriceExtension]
])
