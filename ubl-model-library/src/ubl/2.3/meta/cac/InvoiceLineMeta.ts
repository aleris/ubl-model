import { FieldMeta } from '../FieldMeta'

export enum InvoiceLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  UUID = 'UUID',
  Note = 'Note',
  InvoicedQuantity = 'InvoicedQuantity',
  LineExtensionAmount = 'LineExtensionAmount',
  TaxInclusiveLineExtensionAmount = 'TaxInclusiveLineExtensionAmount',
  TaxPointDate = 'TaxPointDate',
  AccountingCostCode = 'AccountingCostCode',
  AccountingCost = 'AccountingCost',
  PaymentPurposeCode = 'PaymentPurposeCode',
  FreeOfChargeIndicator = 'FreeOfChargeIndicator',
  InvoicePeriod = 'InvoicePeriod',
  OrderLineReference = 'OrderLineReference',
  DespatchLineReference = 'DespatchLineReference',
  ReceiptLineReference = 'ReceiptLineReference',
  BillingReference = 'BillingReference',
  DocumentReference = 'DocumentReference',
  PricingReference = 'PricingReference',
  OriginatorParty = 'OriginatorParty',
  Delivery = 'Delivery',
  PaymentTerms = 'PaymentTerms',
  AllowanceCharge = 'AllowanceCharge',
  TaxTotal = 'TaxTotal',
  WithholdingTaxTotal = 'WithholdingTaxTotal',
  Item = 'Item',
  Price = 'Price',
  DeliveryTerms = 'DeliveryTerms',
  SubInvoiceLine = 'SubInvoiceLine',
  ItemPriceExtension = 'ItemPriceExtension'
}

export const InvoiceLineFieldMetaUBLExtensions = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaID = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this invoice line.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaUUID = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for this invoice line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaNote = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaInvoicedQuantity = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.InvoicedQuantity,
  'InvoicedQuantity',
  'Invoiced Quantity',
  'Quantity',
  'The quantity (of items) on this invoice line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaLineExtensionAmount = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.LineExtensionAmount,
  'LineExtensionAmount',
  'Line Extension Amount',
  'Amount',
  'The total amount for this invoice line, including allowance charges but net of taxes.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaTaxInclusiveLineExtensionAmount = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.TaxInclusiveLineExtensionAmount,
  'TaxInclusiveLineExtensionAmount',
  'Tax Inclusive Line Extension Amount',
  'Amount',
  'The total amount for this invoice line, including all allowances, charges and taxes.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaTaxPointDate = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.TaxPointDate,
  'TaxPointDate',
  'Tax Point Date',
  'Date',
  'The date of this invoice line, used to indicate the point at which tax becomes applicable.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaAccountingCostCode = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  'Code',
  'The buyer\'s accounting cost centre for this invoice line, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaAccountingCost = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  'Text',
  'The buyer\'s accounting cost centre for this invoice line, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaPaymentPurposeCode = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.PaymentPurposeCode,
  'PaymentPurposeCode',
  'Payment Purpose Code',
  'Code',
  'A code signifying the business purpose for this payment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaFreeOfChargeIndicator = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.FreeOfChargeIndicator,
  'FreeOfChargeIndicator',
  'Free Of Charge Indicator',
  'Indicator',
  'An indicator that this invoice line is free of charge (true) or not (false). The default is false.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaInvoicePeriod = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.InvoicePeriod,
  'InvoicePeriod',
  'Invoice Period',
  'Period',
  'An invoice period to which this invoice line applies.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaOrderLineReference = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.OrderLineReference,
  'OrderLineReference',
  'Order Line Reference',
  'OrderLineReference',
  'A reference to an order line associated with this invoice line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaDespatchLineReference = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.DespatchLineReference,
  'DespatchLineReference',
  'Despatch Line Reference',
  'LineReference',
  'A reference to a despatch line associated with this invoice line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaReceiptLineReference = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.ReceiptLineReference,
  'ReceiptLineReference',
  'Receipt Line Reference',
  'LineReference',
  'A reference to a receipt line associated with this invoice line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaBillingReference = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.BillingReference,
  'BillingReference',
  'Billing Reference',
  'BillingReference',
  'A reference to a billing document associated with this invoice line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaDocumentReference = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a document associated with this invoice line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaPricingReference = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.PricingReference,
  'PricingReference',
  'Pricing Reference',
  'PricingReference',
  'A reference to pricing and item location information associated with this invoice line.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaOriginatorParty = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.OriginatorParty,
  'OriginatorParty',
  'Originator Party',
  'Party',
  'The party who originated the Order to which the Invoice is related.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaDelivery = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.Delivery,
  'Delivery',
  'Delivery',
  'Delivery',
  'A delivery associated with this invoice line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaPaymentTerms = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  'PaymentTerms',
  'A specification of payment terms associated with this invoice line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaAllowanceCharge = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'An allowance or charge associated with this invoice line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaTaxTotal = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'A total amount of taxes of a particular kind applicable to this invoice line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaWithholdingTaxTotal = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.WithholdingTaxTotal,
  'WithholdingTaxTotal',
  'Withholding Tax Total',
  'TaxTotal',
  'A reference to a TaxTotal class describing the amount that has been withhold by the authorities, e.g. if the creditor is in dept because of non paid taxes.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaItem = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.Item,
  'Item',
  'Item',
  'Item',
  'The item associated with this invoice line.',
  '1',
  'cac',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaPrice = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.Price,
  'Price',
  'Price',
  'Price',
  'The price of the item associated with this invoice line.',
  '0..1',
  'cac',
  'Unit Price, Base Price',
  undefined
)

export const InvoiceLineFieldMetaDeliveryTerms = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  'DeliveryTerms',
  'Terms and conditions of the delivery associated with this invoice line.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaSubInvoiceLine = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.SubInvoiceLine,
  'SubInvoiceLine',
  'Sub Invoice Line',
  'InvoiceLine',
  'An invoice line subsidiary to this invoice line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const InvoiceLineFieldMetaItemPriceExtension = new FieldMeta<InvoiceLineField>(
  InvoiceLineField.ItemPriceExtension,
  'ItemPriceExtension',
  'Item Price Extension',
  'PriceExtension',
  'The price extension, calculated by multiplying the price per unit by the quantity of items on this invoice line.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class InvoiceLineFieldMeta {
  public static readonly UBLExtensions = InvoiceLineFieldMetaUBLExtensions
  public static readonly ID = InvoiceLineFieldMetaID
  public static readonly UUID = InvoiceLineFieldMetaUUID
  public static readonly Note = InvoiceLineFieldMetaNote
  public static readonly InvoicedQuantity = InvoiceLineFieldMetaInvoicedQuantity
  public static readonly LineExtensionAmount = InvoiceLineFieldMetaLineExtensionAmount
  public static readonly TaxInclusiveLineExtensionAmount = InvoiceLineFieldMetaTaxInclusiveLineExtensionAmount
  public static readonly TaxPointDate = InvoiceLineFieldMetaTaxPointDate
  public static readonly AccountingCostCode = InvoiceLineFieldMetaAccountingCostCode
  public static readonly AccountingCost = InvoiceLineFieldMetaAccountingCost
  public static readonly PaymentPurposeCode = InvoiceLineFieldMetaPaymentPurposeCode
  public static readonly FreeOfChargeIndicator = InvoiceLineFieldMetaFreeOfChargeIndicator
  public static readonly InvoicePeriod = InvoiceLineFieldMetaInvoicePeriod
  public static readonly OrderLineReference = InvoiceLineFieldMetaOrderLineReference
  public static readonly DespatchLineReference = InvoiceLineFieldMetaDespatchLineReference
  public static readonly ReceiptLineReference = InvoiceLineFieldMetaReceiptLineReference
  public static readonly BillingReference = InvoiceLineFieldMetaBillingReference
  public static readonly DocumentReference = InvoiceLineFieldMetaDocumentReference
  public static readonly PricingReference = InvoiceLineFieldMetaPricingReference
  public static readonly OriginatorParty = InvoiceLineFieldMetaOriginatorParty
  public static readonly Delivery = InvoiceLineFieldMetaDelivery
  public static readonly PaymentTerms = InvoiceLineFieldMetaPaymentTerms
  public static readonly AllowanceCharge = InvoiceLineFieldMetaAllowanceCharge
  public static readonly TaxTotal = InvoiceLineFieldMetaTaxTotal
  public static readonly WithholdingTaxTotal = InvoiceLineFieldMetaWithholdingTaxTotal
  public static readonly Item = InvoiceLineFieldMetaItem
  public static readonly Price = InvoiceLineFieldMetaPrice
  public static readonly DeliveryTerms = InvoiceLineFieldMetaDeliveryTerms
  public static readonly SubInvoiceLine = InvoiceLineFieldMetaSubInvoiceLine
  public static readonly ItemPriceExtension = InvoiceLineFieldMetaItemPriceExtension
}

export const InvoiceLineFieldMap = new Map([
  [InvoiceLineField.UBLExtensions, InvoiceLineFieldMetaUBLExtensions],
  [InvoiceLineField.ID, InvoiceLineFieldMetaID],
  [InvoiceLineField.UUID, InvoiceLineFieldMetaUUID],
  [InvoiceLineField.Note, InvoiceLineFieldMetaNote],
  [InvoiceLineField.InvoicedQuantity, InvoiceLineFieldMetaInvoicedQuantity],
  [InvoiceLineField.LineExtensionAmount, InvoiceLineFieldMetaLineExtensionAmount],
  [InvoiceLineField.TaxInclusiveLineExtensionAmount, InvoiceLineFieldMetaTaxInclusiveLineExtensionAmount],
  [InvoiceLineField.TaxPointDate, InvoiceLineFieldMetaTaxPointDate],
  [InvoiceLineField.AccountingCostCode, InvoiceLineFieldMetaAccountingCostCode],
  [InvoiceLineField.AccountingCost, InvoiceLineFieldMetaAccountingCost],
  [InvoiceLineField.PaymentPurposeCode, InvoiceLineFieldMetaPaymentPurposeCode],
  [InvoiceLineField.FreeOfChargeIndicator, InvoiceLineFieldMetaFreeOfChargeIndicator],
  [InvoiceLineField.InvoicePeriod, InvoiceLineFieldMetaInvoicePeriod],
  [InvoiceLineField.OrderLineReference, InvoiceLineFieldMetaOrderLineReference],
  [InvoiceLineField.DespatchLineReference, InvoiceLineFieldMetaDespatchLineReference],
  [InvoiceLineField.ReceiptLineReference, InvoiceLineFieldMetaReceiptLineReference],
  [InvoiceLineField.BillingReference, InvoiceLineFieldMetaBillingReference],
  [InvoiceLineField.DocumentReference, InvoiceLineFieldMetaDocumentReference],
  [InvoiceLineField.PricingReference, InvoiceLineFieldMetaPricingReference],
  [InvoiceLineField.OriginatorParty, InvoiceLineFieldMetaOriginatorParty],
  [InvoiceLineField.Delivery, InvoiceLineFieldMetaDelivery],
  [InvoiceLineField.PaymentTerms, InvoiceLineFieldMetaPaymentTerms],
  [InvoiceLineField.AllowanceCharge, InvoiceLineFieldMetaAllowanceCharge],
  [InvoiceLineField.TaxTotal, InvoiceLineFieldMetaTaxTotal],
  [InvoiceLineField.WithholdingTaxTotal, InvoiceLineFieldMetaWithholdingTaxTotal],
  [InvoiceLineField.Item, InvoiceLineFieldMetaItem],
  [InvoiceLineField.Price, InvoiceLineFieldMetaPrice],
  [InvoiceLineField.DeliveryTerms, InvoiceLineFieldMetaDeliveryTerms],
  [InvoiceLineField.SubInvoiceLine, InvoiceLineFieldMetaSubInvoiceLine],
  [InvoiceLineField.ItemPriceExtension, InvoiceLineFieldMetaItemPriceExtension]
])
