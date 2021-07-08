import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from './AllowanceChargeMeta'
import { AmountType } from '../cbc/AmountMeta'
import { DeliveryType } from './DeliveryMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PeriodType } from './PeriodMeta'
import { PriceType } from './PriceMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TaxTotalType } from './TaxTotalMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'
import { UnstructuredPriceType } from './UnstructuredPriceMeta'
import { UtilityItemType } from './UtilityItemMeta'

export enum ConsumptionLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  ParentDocumentLineReferenceID = 'ParentDocumentLineReferenceID',
  InvoicedQuantity = 'InvoicedQuantity',
  LineExtensionAmount = 'LineExtensionAmount',
  TaxInclusiveLineExtensionAmount = 'TaxInclusiveLineExtensionAmount',
  Period = 'Period',
  Delivery = 'Delivery',
  AllowanceCharge = 'AllowanceCharge',
  TaxTotal = 'TaxTotal',
  UtilityItem = 'UtilityItem',
  Price = 'Price',
  UnstructuredPrice = 'UnstructuredPrice'
}

export const ConsumptionLineFieldMetaUBLExtensions = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ConsumptionLineFieldMetaID = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this consumption line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '1'
)

export const ConsumptionLineFieldMetaParentDocumentLineReferenceID = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.ParentDocumentLineReferenceID,
  'ParentDocumentLineReferenceID',
  'Parent Document Line Reference Identifier',
  IdentifierType.name,
  'An identifier for the transaction line on a related document (such as an invoice) that covers this consumption line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Consumption'
)

export const ConsumptionLineFieldMetaInvoicedQuantity = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.InvoicedQuantity,
  'InvoicedQuantity',
  'Invoiced Quantity',
  QuantityType.name,
  'The quantity invoiced.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ConsumptionLineFieldMetaLineExtensionAmount = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.LineExtensionAmount,
  'LineExtensionAmount',
  'Line Extension Amount',
  AmountType.name,
  'The monetary amount, including discount, to be charged for this consumption line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ConsumptionLineFieldMetaTaxInclusiveLineExtensionAmount = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.TaxInclusiveLineExtensionAmount,
  'TaxInclusiveLineExtensionAmount',
  'Tax Inclusive Line Extension Amount',
  AmountType.name,
  'The total amount for this consumption line, including all allowances, charges and taxes.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ConsumptionLineFieldMetaPeriod = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.Period,
  'Period',
  'Period',
  PeriodType.name,
  'The period of time covered by this consumption line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ConsumptionLineFieldMetaDelivery = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.Delivery,
  'Delivery',
  'Delivery',
  DeliveryType.name,
  'A delivery of the utility item on this consumption line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ConsumptionLineFieldMetaAllowanceCharge = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'An allowance or charge that applies to this consumption line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ConsumptionLineFieldMetaTaxTotal = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'A total amount of taxes of a particular kind applicable to this consumption line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ConsumptionLineFieldMetaUtilityItem = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.UtilityItem,
  'UtilityItem',
  'Utility Item',
  UtilityItemType.name,
  'The utility item consumed.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ConsumptionLineFieldMetaPrice = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.Price,
  'Price',
  'Price',
  PriceType.name,
  'The price associated with this consumption line, expressed in a data structure containing multiple properties.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ConsumptionLineFieldMetaUnstructuredPrice = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.UnstructuredPrice,
  'UnstructuredPrice',
  'Unstructured Price',
  UnstructuredPriceType.name,
  'The price associated with this consumption line expressed in a less structured form that includes just the amount and the time of use.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class ConsumptionLineFieldMeta {
  public static readonly UBLExtensions = ConsumptionLineFieldMetaUBLExtensions
  public static readonly ID = ConsumptionLineFieldMetaID
  public static readonly ParentDocumentLineReferenceID = ConsumptionLineFieldMetaParentDocumentLineReferenceID
  public static readonly InvoicedQuantity = ConsumptionLineFieldMetaInvoicedQuantity
  public static readonly LineExtensionAmount = ConsumptionLineFieldMetaLineExtensionAmount
  public static readonly TaxInclusiveLineExtensionAmount = ConsumptionLineFieldMetaTaxInclusiveLineExtensionAmount
  public static readonly Period = ConsumptionLineFieldMetaPeriod
  public static readonly Delivery = ConsumptionLineFieldMetaDelivery
  public static readonly AllowanceCharge = ConsumptionLineFieldMetaAllowanceCharge
  public static readonly TaxTotal = ConsumptionLineFieldMetaTaxTotal
  public static readonly UtilityItem = ConsumptionLineFieldMetaUtilityItem
  public static readonly Price = ConsumptionLineFieldMetaPrice
  public static readonly UnstructuredPrice = ConsumptionLineFieldMetaUnstructuredPrice
}

export const ConsumptionLineFieldMap = new Map([
  [ConsumptionLineField.UBLExtensions, ConsumptionLineFieldMetaUBLExtensions],
  [ConsumptionLineField.ID, ConsumptionLineFieldMetaID],
  [ConsumptionLineField.ParentDocumentLineReferenceID, ConsumptionLineFieldMetaParentDocumentLineReferenceID],
  [ConsumptionLineField.InvoicedQuantity, ConsumptionLineFieldMetaInvoicedQuantity],
  [ConsumptionLineField.LineExtensionAmount, ConsumptionLineFieldMetaLineExtensionAmount],
  [ConsumptionLineField.TaxInclusiveLineExtensionAmount, ConsumptionLineFieldMetaTaxInclusiveLineExtensionAmount],
  [ConsumptionLineField.Period, ConsumptionLineFieldMetaPeriod],
  [ConsumptionLineField.Delivery, ConsumptionLineFieldMetaDelivery],
  [ConsumptionLineField.AllowanceCharge, ConsumptionLineFieldMetaAllowanceCharge],
  [ConsumptionLineField.TaxTotal, ConsumptionLineFieldMetaTaxTotal],
  [ConsumptionLineField.UtilityItem, ConsumptionLineFieldMetaUtilityItem],
  [ConsumptionLineField.Price, ConsumptionLineFieldMetaPrice],
  [ConsumptionLineField.UnstructuredPrice, ConsumptionLineFieldMetaUnstructuredPrice]
])

export const ConsumptionLineType: Type<ConsumptionLineField> = {
  name: 'ConsumptionLine',
  label: 'Consumption Line',
  module: TypeModule.cac,
  definition: 'A class to describe a line item for utility consumption. To specify more than one utility item, use separate consumption lines.',
  fields: ConsumptionLineFieldMap,
}
