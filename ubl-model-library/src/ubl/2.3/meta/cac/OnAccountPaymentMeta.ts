import { FieldMeta } from '../FieldMeta'

export enum OnAccountPaymentField {
  UBLExtensions = 'UBLExtensions',
  EstimatedConsumedQuantity = 'EstimatedConsumedQuantity',
  Note = 'Note',
  PaymentTerms = 'PaymentTerms'
}

export const OnAccountPaymentFieldMetaUBLExtensions = new FieldMeta<OnAccountPaymentField>(
  OnAccountPaymentField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const OnAccountPaymentFieldMetaEstimatedConsumedQuantity = new FieldMeta<OnAccountPaymentField>(
  OnAccountPaymentField.EstimatedConsumedQuantity,
  'EstimatedConsumedQuantity',
  'Estimated Consumed Quantity',
  'Quantity',
  'The estimated consumed quantity covered by the payment.',
  '1',
  'cbc',
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
  'cbc',
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
  'cac',
  undefined,
  undefined
)

export class OnAccountPaymentFieldMeta {
  public static readonly UBLExtensions = OnAccountPaymentFieldMetaUBLExtensions
  public static readonly EstimatedConsumedQuantity = OnAccountPaymentFieldMetaEstimatedConsumedQuantity
  public static readonly Note = OnAccountPaymentFieldMetaNote
  public static readonly PaymentTerms = OnAccountPaymentFieldMetaPaymentTerms
}

export const OnAccountPaymentFieldMap = new Map([
  [OnAccountPaymentField.UBLExtensions, OnAccountPaymentFieldMetaUBLExtensions],
  [OnAccountPaymentField.EstimatedConsumedQuantity, OnAccountPaymentFieldMetaEstimatedConsumedQuantity],
  [OnAccountPaymentField.Note, OnAccountPaymentFieldMetaNote],
  [OnAccountPaymentField.PaymentTerms, OnAccountPaymentFieldMetaPaymentTerms]
])
