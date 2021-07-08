import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from './AllowanceChargeMeta'
import { AmountType } from '../cbc/AmountMeta'
import { BillingReferenceType } from './BillingReferenceMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { DeliveryType } from './DeliveryMeta'
import { DeliveryTermsType } from './DeliveryTermsMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { ItemType } from './ItemMeta'
import { LineReferenceType } from './LineReferenceMeta'
import { OrderLineReferenceType } from './OrderLineReferenceMeta'
import { PartyType } from './PartyMeta'
import { PaymentTermsType } from './PaymentTermsMeta'
import { PeriodType } from './PeriodMeta'
import { PriceType } from './PriceMeta'
import { PriceExtensionType } from './PriceExtensionMeta'
import { PricingReferenceType } from './PricingReferenceMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { ResponseType } from './ResponseMeta'
import { TaxTotalType } from './TaxTotalMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum CreditNoteLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  UUID = 'UUID',
  Note = 'Note',
  CreditedQuantity = 'CreditedQuantity',
  LineExtensionAmount = 'LineExtensionAmount',
  TaxInclusiveLineExtensionAmount = 'TaxInclusiveLineExtensionAmount',
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

export const CreditNoteLineFieldMetaUBLExtensions = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaID = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this credit note line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaUUID = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for this credit note line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaNote = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaCreditedQuantity = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.CreditedQuantity,
  'CreditedQuantity',
  'Credited Quantity',
  QuantityType.name,
  'The quantity of items credited in this credit note line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaLineExtensionAmount = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.LineExtensionAmount,
  'LineExtensionAmount',
  'Line Extension Amount',
  AmountType.name,
  'The total amount for this credit note line, including allowance charges but exclusive of taxes.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaTaxInclusiveLineExtensionAmount = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.TaxInclusiveLineExtensionAmount,
  'TaxInclusiveLineExtensionAmount',
  'Tax Inclusive Line Extension Amount',
  AmountType.name,
  'The total amount for this credit note line, including all allowances, charges and taxes.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaTaxPointDate = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.TaxPointDate,
  'TaxPointDate',
  'Tax Point Date',
  DateType.name,
  'The date of this credit note line, used to indicate the point at which tax becomes applicable.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaAccountingCostCode = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  CodeType.name,
  'The buyer\'s accounting cost centre for this credit note line, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaAccountingCost = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  TextType.name,
  'The buyer\'s accounting cost centre for this credit note line, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaPaymentPurposeCode = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.PaymentPurposeCode,
  'PaymentPurposeCode',
  'Payment Purpose Code',
  CodeType.name,
  'A code signifying the business purpose for this payment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaFreeOfChargeIndicator = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.FreeOfChargeIndicator,
  'FreeOfChargeIndicator',
  'Free Of Charge Indicator',
  IndicatorType.name,
  'An indicator that this credit note line is free of charge (true) or not (false). The default is false.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaInvoicePeriod = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.InvoicePeriod,
  'InvoicePeriod',
  'Invoice Period',
  PeriodType.name,
  'An invoice period to which this credit note line applies.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaOrderLineReference = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.OrderLineReference,
  'OrderLineReference',
  'Order Line Reference',
  OrderLineReferenceType.name,
  'A reference to an order line associated with this credit note line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaDiscrepancyResponse = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.DiscrepancyResponse,
  'DiscrepancyResponse',
  'Discrepancy Response',
  ResponseType.name,
  'A reason for the credit.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaDespatchLineReference = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.DespatchLineReference,
  'DespatchLineReference',
  'Despatch Line Reference',
  LineReferenceType.name,
  'A reference to a despatch line associated with this credit note line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaReceiptLineReference = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.ReceiptLineReference,
  'ReceiptLineReference',
  'Receipt Line Reference',
  LineReferenceType.name,
  'A reference to a receipt line associated with this credit note line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaBillingReference = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.BillingReference,
  'BillingReference',
  'Billing Reference',
  BillingReferenceType.name,
  'A reference to a billing document associated with this credit note line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaDocumentReference = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to a document associated with this credit note line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaPricingReference = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.PricingReference,
  'PricingReference',
  'Pricing Reference',
  PricingReferenceType.name,
  'A reference to pricing and item location information associated with this credit note line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaOriginatorParty = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.OriginatorParty,
  'OriginatorParty',
  'Originator Party',
  PartyType.name,
  'The party who originated the Order to which the Credit Note is related.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaDelivery = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.Delivery,
  'Delivery',
  'Delivery',
  DeliveryType.name,
  'A delivery associated with this credit note line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaPaymentTerms = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  PaymentTermsType.name,
  'A specification of payment terms associated with this credit note line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaTaxTotal = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'A total amount of taxes of a particular kind applicable to this credit note line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaAllowanceCharge = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'An allowance or charge associated with this credit note.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaItem = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.Item,
  'Item',
  'Item',
  ItemType.name,
  'The item associated with this credit note line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaPrice = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.Price,
  'Price',
  'Price',
  PriceType.name,
  'The price of the item associated with this credit note line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Unit Price, Base Price',
  undefined
)

export const CreditNoteLineFieldMetaDeliveryTerms = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  DeliveryTermsType.name,
  'Terms and conditions of a delivery associated with this credit note line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaSubCreditNoteLine = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.SubCreditNoteLine,
  'SubCreditNoteLine',
  'Sub Credit Note Line',
  CreditNoteLineType.name,
  'A class defining one or more Credit Note Lines detailing the credit note line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CreditNoteLineFieldMetaItemPriceExtension = new FieldMeta<CreditNoteLineField>(
  CreditNoteLineField.ItemPriceExtension,
  'ItemPriceExtension',
  'Item Price Extension',
  PriceExtensionType.name,
  'The price extension, calculated by multiplying the price per unit by the quantity of items on this credit note line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class CreditNoteLineFieldMeta {
  public static readonly UBLExtensions = CreditNoteLineFieldMetaUBLExtensions
  public static readonly ID = CreditNoteLineFieldMetaID
  public static readonly UUID = CreditNoteLineFieldMetaUUID
  public static readonly Note = CreditNoteLineFieldMetaNote
  public static readonly CreditedQuantity = CreditNoteLineFieldMetaCreditedQuantity
  public static readonly LineExtensionAmount = CreditNoteLineFieldMetaLineExtensionAmount
  public static readonly TaxInclusiveLineExtensionAmount = CreditNoteLineFieldMetaTaxInclusiveLineExtensionAmount
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
  [CreditNoteLineField.UBLExtensions, CreditNoteLineFieldMetaUBLExtensions],
  [CreditNoteLineField.ID, CreditNoteLineFieldMetaID],
  [CreditNoteLineField.UUID, CreditNoteLineFieldMetaUUID],
  [CreditNoteLineField.Note, CreditNoteLineFieldMetaNote],
  [CreditNoteLineField.CreditedQuantity, CreditNoteLineFieldMetaCreditedQuantity],
  [CreditNoteLineField.LineExtensionAmount, CreditNoteLineFieldMetaLineExtensionAmount],
  [CreditNoteLineField.TaxInclusiveLineExtensionAmount, CreditNoteLineFieldMetaTaxInclusiveLineExtensionAmount],
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

export const CreditNoteLineType: Type<CreditNoteLineField> = {
  name: 'CreditNoteLine',
  label: 'Credit Note Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in a Credit Note or Self Billed Credit Note.',
  fields: CreditNoteLineFieldMap,
}
