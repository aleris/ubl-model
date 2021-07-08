import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from './AllowanceChargeMeta'
import { AmountType } from '../cbc/AmountMeta'
import { BillingReferenceType } from './BillingReferenceMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { DeliveryType } from './DeliveryMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ItemType } from './ItemMeta'
import { LineReferenceType } from './LineReferenceMeta'
import { PriceType } from './PriceMeta'
import { PricingReferenceType } from './PricingReferenceMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { ResponseType } from './ResponseMeta'
import { TaxTotalType } from './TaxTotalMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DebitNoteLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  UUID = 'UUID',
  Note = 'Note',
  DebitedQuantity = 'DebitedQuantity',
  LineExtensionAmount = 'LineExtensionAmount',
  TaxInclusiveLineExtensionAmount = 'TaxInclusiveLineExtensionAmount',
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

export const DebitNoteLineFieldMetaUBLExtensions = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaID = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this debit note line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaUUID = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for this debit note line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaNote = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaDebitedQuantity = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.DebitedQuantity,
  'DebitedQuantity',
  'Debited Quantity',
  QuantityType.name,
  'The quantity of Items debited in this debit note line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaLineExtensionAmount = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.LineExtensionAmount,
  'LineExtensionAmount',
  'Line Extension Amount',
  AmountType.name,
  'The total amount for this debit note line, including allowance charges but net of taxes.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaTaxInclusiveLineExtensionAmount = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.TaxInclusiveLineExtensionAmount,
  'TaxInclusiveLineExtensionAmount',
  'Tax Inclusive Line Extension Amount',
  AmountType.name,
  'The total amount for this debit note line, including all allowances, charges and taxes.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaTaxPointDate = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.TaxPointDate,
  'TaxPointDate',
  'Tax Point Date',
  DateType.name,
  'The date of this debit note line, used to indicate the point at which tax becomes applicable.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaAccountingCostCode = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  CodeType.name,
  'The buyer\'s accounting cost centre for this debit note line, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaAccountingCost = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  TextType.name,
  'The buyer\'s accounting cost centre for this debit note line, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaPaymentPurposeCode = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.PaymentPurposeCode,
  'PaymentPurposeCode',
  'Payment Purpose Code',
  CodeType.name,
  'A code signifying the business purpose for this payment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaDiscrepancyResponse = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.DiscrepancyResponse,
  'DiscrepancyResponse',
  'Discrepancy Response',
  ResponseType.name,
  'A reason for the debit.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaDespatchLineReference = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.DespatchLineReference,
  'DespatchLineReference',
  'Despatch Line Reference',
  LineReferenceType.name,
  'A reference to a despatch line associated with this debit note line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaReceiptLineReference = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.ReceiptLineReference,
  'ReceiptLineReference',
  'Receipt Line Reference',
  LineReferenceType.name,
  'A reference to a receipt line associated with this debit note line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaBillingReference = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.BillingReference,
  'BillingReference',
  'Billing Reference',
  BillingReferenceType.name,
  'A reference to a billing document associated with this debit note line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaDocumentReference = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to a document associated with this debit note line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaPricingReference = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.PricingReference,
  'PricingReference',
  'Pricing Reference',
  PricingReferenceType.name,
  'A reference to pricing and item location information associated with this debit note line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaDelivery = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.Delivery,
  'Delivery',
  'Delivery',
  DeliveryType.name,
  'A delivery associated with this debit note line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaTaxTotal = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'A total amount of taxes of a particular kind applicable to this debit note line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaAllowanceCharge = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'An allowance or charge associated with this debit note.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaItem = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.Item,
  'Item',
  'Item',
  ItemType.name,
  'The item associated with this debit note line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DebitNoteLineFieldMetaPrice = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.Price,
  'Price',
  'Price',
  PriceType.name,
  'The price of the item associated with this debit note line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Unit Price, Base Price',
  undefined
)

export const DebitNoteLineFieldMetaSubDebitNoteLine = new FieldMeta<DebitNoteLineField>(
  DebitNoteLineField.SubDebitNoteLine,
  'SubDebitNoteLine',
  'Sub Debit Note Line',
  DebitNoteLineType.name,
  'A recursive description of a debit note line subsidiary to this debit note line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class DebitNoteLineFieldMeta {
  public static readonly UBLExtensions = DebitNoteLineFieldMetaUBLExtensions
  public static readonly ID = DebitNoteLineFieldMetaID
  public static readonly UUID = DebitNoteLineFieldMetaUUID
  public static readonly Note = DebitNoteLineFieldMetaNote
  public static readonly DebitedQuantity = DebitNoteLineFieldMetaDebitedQuantity
  public static readonly LineExtensionAmount = DebitNoteLineFieldMetaLineExtensionAmount
  public static readonly TaxInclusiveLineExtensionAmount = DebitNoteLineFieldMetaTaxInclusiveLineExtensionAmount
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
  [DebitNoteLineField.UBLExtensions, DebitNoteLineFieldMetaUBLExtensions],
  [DebitNoteLineField.ID, DebitNoteLineFieldMetaID],
  [DebitNoteLineField.UUID, DebitNoteLineFieldMetaUUID],
  [DebitNoteLineField.Note, DebitNoteLineFieldMetaNote],
  [DebitNoteLineField.DebitedQuantity, DebitNoteLineFieldMetaDebitedQuantity],
  [DebitNoteLineField.LineExtensionAmount, DebitNoteLineFieldMetaLineExtensionAmount],
  [DebitNoteLineField.TaxInclusiveLineExtensionAmount, DebitNoteLineFieldMetaTaxInclusiveLineExtensionAmount],
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

export const DebitNoteLineType: Type<DebitNoteLineField> = {
  name: 'DebitNoteLine',
  label: 'Debit Note Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in a Debit Note.',
  fields: DebitNoteLineFieldMap,
}
