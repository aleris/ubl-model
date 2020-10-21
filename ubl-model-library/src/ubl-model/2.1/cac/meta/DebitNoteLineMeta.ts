import { FieldMeta } from '../../FieldMeta'

export enum DebitNoteLineField {
  ID = 'ID',
  UUID = 'UUID',
  Note = 'Note',
  DebitedQuantity = 'DebitedQuantity',
  LineExtensionAmount = 'LineExtensionAmount',
  TaxPointDate = 'TaxPointDate',
  AccountingCostCode = 'AccountingCostCode',
  AccountingCost = 'AccountingCost',
  PaymentPurposeCode = 'PaymentPurposeCode',
  DiscrepancyResponse = 'DiscrepancyResponse',
  DespatchLineReference = 'DespatchLineReference',
  ReceiptLineReference = 'ReceiptLineReference',
  BillingReference = 'BillingReference',
  DocumentReference = 'DocumentReference',
  PricingReference = 'PricingReference',
  Delivery = 'Delivery',
  TaxTotal = 'TaxTotal',
  AllowanceCharge = 'AllowanceCharge',
  Item = 'Item',
  Price = 'Price',
  SubDebitNoteLine = 'SubDebitNoteLine'
}

export const DebitNoteLineFieldMetaID = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this debit note line.',
  '1',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaUUID = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for this debit note line.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaNote = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaDebitedQuantity = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.DebitedQuantity,
  'DebitedQuantity',
  'Quantity',
  'Quantity',
  'The quantity of Items debited in this debit note line.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaLineExtensionAmount = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.LineExtensionAmount,
  'LineExtensionAmount',
  'Line Extension Amount',
  'Amount',
  'The total amount for this debit note line, including allowance charges but net of taxes.',
  '1',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaTaxPointDate = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.TaxPointDate,
  'TaxPointDate',
  'Tax Point Date',
  'Date',
  'The date of this debit note line, used to indicate the point at which tax becomes applicable.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaAccountingCostCode = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  'Code',
  'The buyer\'s accounting cost centre for this debit note line, expressed as a code.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaAccountingCost = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  'Text',
  'The buyer\'s accounting cost centre for this debit note line, expressed as text.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaPaymentPurposeCode = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.PaymentPurposeCode,
  'PaymentPurposeCode',
  'Payment Purpose Code',
  'Code',
  'A code signifying the business purpose for this payment.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaDiscrepancyResponse = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.DiscrepancyResponse,
  'DiscrepancyResponse',
  'Response',
  'Response',
  'A reason for the debit.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaDespatchLineReference = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.DespatchLineReference,
  'DespatchLineReference',
  'Line Reference',
  'LineReference',
  'A reference to a despatch line associated with this debit note line.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaReceiptLineReference = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.ReceiptLineReference,
  'ReceiptLineReference',
  'Line Reference',
  'LineReference',
  'A reference to a receipt line associated with this debit note line.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaBillingReference = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.BillingReference,
  'BillingReference',
  'Billing Reference',
  'BillingReference',
  'A reference to a billing document associated with this debit note line.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaDocumentReference = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a document associated with this debit note line.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaPricingReference = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.PricingReference,
  'PricingReference',
  'Pricing Reference',
  'PricingReference',
  'A reference to pricing and item location information associated with this debit note line.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaDelivery = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.Delivery,
  'Delivery',
  'Delivery',
  'Delivery',
  'A delivery associated with this debit note line.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaTaxTotal = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'A total amount of taxes of a particular kind applicable to this debit note line.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaAllowanceCharge = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'An allowance or charge associated with this debit note.',
  '0..n',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaItem = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.Item,
  'Item',
  'Item',
  'Item',
  'The item associated with this debit note line.',
  '0..1',
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaPrice = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.Price,
  'Price',
  'Price',
  'Price',
  'The price of the item associated with this debit note line.',
  '0..1',
  'Unit Price, Base Price',
  undefined
)

export const DebitNoteLineFieldMetaSubDebitNoteLine = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.SubDebitNoteLine,
  'SubDebitNoteLine',
  'Debit Note Line',
  'DebitNoteLine',
  'A recursive description of a debit note line subsidiary to this debit note line.',
  '0..n',
  undefined,
  undefined
)

export class DebitNoteLineFieldMeta {
  public static readonly ID = DebitNoteLineFieldMetaID
  public static readonly UUID = DebitNoteLineFieldMetaUUID
  public static readonly Note = DebitNoteLineFieldMetaNote
  public static readonly DebitedQuantity = DebitNoteLineFieldMetaDebitedQuantity
  public static readonly LineExtensionAmount = DebitNoteLineFieldMetaLineExtensionAmount
  public static readonly TaxPointDate = DebitNoteLineFieldMetaTaxPointDate
  public static readonly AccountingCostCode = DebitNoteLineFieldMetaAccountingCostCode
  public static readonly AccountingCost = DebitNoteLineFieldMetaAccountingCost
  public static readonly PaymentPurposeCode = DebitNoteLineFieldMetaPaymentPurposeCode
  public static readonly DiscrepancyResponse = DebitNoteLineFieldMetaDiscrepancyResponse
  public static readonly DespatchLineReference = DebitNoteLineFieldMetaDespatchLineReference
  public static readonly ReceiptLineReference = DebitNoteLineFieldMetaReceiptLineReference
  public static readonly BillingReference = DebitNoteLineFieldMetaBillingReference
  public static readonly DocumentReference = DebitNoteLineFieldMetaDocumentReference
  public static readonly PricingReference = DebitNoteLineFieldMetaPricingReference
  public static readonly Delivery = DebitNoteLineFieldMetaDelivery
  public static readonly TaxTotal = DebitNoteLineFieldMetaTaxTotal
  public static readonly AllowanceCharge = DebitNoteLineFieldMetaAllowanceCharge
  public static readonly Item = DebitNoteLineFieldMetaItem
  public static readonly Price = DebitNoteLineFieldMetaPrice
  public static readonly SubDebitNoteLine = DebitNoteLineFieldMetaSubDebitNoteLine
}

export const DebitNoteLineFieldMap = new Map([
  [DebitNoteLineField.ID, DebitNoteLineFieldMetaID],
  [DebitNoteLineField.UUID, DebitNoteLineFieldMetaUUID],
  [DebitNoteLineField.Note, DebitNoteLineFieldMetaNote],
  [DebitNoteLineField.DebitedQuantity, DebitNoteLineFieldMetaDebitedQuantity],
  [DebitNoteLineField.LineExtensionAmount, DebitNoteLineFieldMetaLineExtensionAmount],
  [DebitNoteLineField.TaxPointDate, DebitNoteLineFieldMetaTaxPointDate],
  [DebitNoteLineField.AccountingCostCode, DebitNoteLineFieldMetaAccountingCostCode],
  [DebitNoteLineField.AccountingCost, DebitNoteLineFieldMetaAccountingCost],
  [DebitNoteLineField.PaymentPurposeCode, DebitNoteLineFieldMetaPaymentPurposeCode],
  [DebitNoteLineField.DiscrepancyResponse, DebitNoteLineFieldMetaDiscrepancyResponse],
  [DebitNoteLineField.DespatchLineReference, DebitNoteLineFieldMetaDespatchLineReference],
  [DebitNoteLineField.ReceiptLineReference, DebitNoteLineFieldMetaReceiptLineReference],
  [DebitNoteLineField.BillingReference, DebitNoteLineFieldMetaBillingReference],
  [DebitNoteLineField.DocumentReference, DebitNoteLineFieldMetaDocumentReference],
  [DebitNoteLineField.PricingReference, DebitNoteLineFieldMetaPricingReference],
  [DebitNoteLineField.Delivery, DebitNoteLineFieldMetaDelivery],
  [DebitNoteLineField.TaxTotal, DebitNoteLineFieldMetaTaxTotal],
  [DebitNoteLineField.AllowanceCharge, DebitNoteLineFieldMetaAllowanceCharge],
  [DebitNoteLineField.Item, DebitNoteLineFieldMetaItem],
  [DebitNoteLineField.Price, DebitNoteLineFieldMetaPrice],
  [DebitNoteLineField.SubDebitNoteLine, DebitNoteLineFieldMetaSubDebitNoteLine]
])
