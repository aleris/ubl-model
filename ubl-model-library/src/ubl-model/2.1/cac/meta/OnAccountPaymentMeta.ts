import { FieldMeta } from '../../FieldMeta'

export enum OnAccountPaymentField {
  EstimatedConsumedQuantity = 'EstimatedConsumedQuantity',
  Note = 'Note',
  PaymentTerms = 'PaymentTerms'
}

export const OnAccountPaymentFieldMetaEstimatedConsumedQuantity = new FieldMeta<OnAccountPaymentField>(
  OnAccountPaymentField.EstimatedConsumedQuantity,
  'EstimatedConsumedQuantity',
  'Consumed Quantity',
  'Quantity',
  'The estimated consumed quantity covered by the payment.',
  '1',
  undefined,
  undefined
)

export const OnAccountPaymentFieldMetaNote = new FieldMeta<OnAccountPaymentField>(
  OnAccountPaymentField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  'We make a reservation for price regulations. You will receive you next yearly statement about one year from today.'
)

export const OnAccountPaymentFieldMetaPaymentTerms = new FieldMeta<OnAccountPaymentField>(
  OnAccountPaymentField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  'PaymentTerms',
  'A specification of payment terms associated with this payment.',
  '1..n',
  undefined,
  undefined
)

export class OnAccountPaymentFieldMeta {
  public static readonly EstimatedConsumedQuantity = OnAccountPaymentFieldMetaEstimatedConsumedQuantity
  public static readonly Note = OnAccountPaymentFieldMetaNote
  public static readonly PaymentTerms = OnAccountPaymentFieldMetaPaymentTerms
}

export const OnAccountPaymentFieldMap = new Map([
  [OnAccountPaymentField.EstimatedConsumedQuantity, OnAccountPaymentFieldMetaEstimatedConsumedQuantity],
  [OnAccountPaymentField.Note, OnAccountPaymentFieldMetaNote],
  [OnAccountPaymentField.PaymentTerms, OnAccountPaymentFieldMetaPaymentTerms]
])
