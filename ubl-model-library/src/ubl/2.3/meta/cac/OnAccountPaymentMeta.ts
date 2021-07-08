import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { PaymentTermsType } from './PaymentTermsMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum OnAccountPaymentField {
  UBLExtensions = 'UBLExtensions',
  EstimatedConsumedQuantity = 'EstimatedConsumedQuantity',
  Note = 'Note',
  PaymentTerms = 'PaymentTerms'
}

export const OnAccountPaymentFieldMetaUBLExtensions = new FieldMeta<OnAccountPaymentField>(
  OnAccountPaymentField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const OnAccountPaymentFieldMetaEstimatedConsumedQuantity = new FieldMeta<OnAccountPaymentField>(
  OnAccountPaymentField.EstimatedConsumedQuantity,
  'EstimatedConsumedQuantity',
  'Estimated Consumed Quantity',
  QuantityType.name,
  'The estimated consumed quantity covered by the payment.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OnAccountPaymentFieldMetaNote = new FieldMeta<OnAccountPaymentField>(
  OnAccountPaymentField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'We make a reservation for price regulations. You will receive you next yearly statement about one year from today.'
)

export const OnAccountPaymentFieldMetaPaymentTerms = new FieldMeta<OnAccountPaymentField>(
  OnAccountPaymentField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  PaymentTermsType.name,
  'A specification of payment terms associated with this payment.',
  FieldCardinality.Multi,
  TypeModule.cac,
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

export const OnAccountPaymentType: Type<OnAccountPaymentField> = {
  name: 'OnAccountPayment',
  label: 'On Account Payment',
  module: TypeModule.cac,
  definition: 'A scheduled prepayment (on-account payment) for a estimated utility consumption',
  fields: OnAccountPaymentFieldMap,
}
