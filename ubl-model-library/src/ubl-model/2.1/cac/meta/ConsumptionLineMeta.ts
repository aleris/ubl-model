import { FieldMeta } from '../../FieldMeta'

export enum ConsumptionLineField {
  ID = 'ID',
  ParentDocumentLineReferenceID = 'ParentDocumentLineReferenceID',
  InvoicedQuantity = 'InvoicedQuantity',
  LineExtensionAmount = 'LineExtensionAmount',
  Period = 'Period',
  Delivery = 'Delivery',
  AllowanceCharge = 'AllowanceCharge',
  TaxTotal = 'TaxTotal',
  UtilityItem = 'UtilityItem',
  Price = 'Price',
  UnstructuredPrice = 'UnstructuredPrice'
}

export const ConsumptionLineFieldMetaID = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this consumption line.',
  '1',
  undefined,
  '1'
)

export const ConsumptionLineFieldMetaParentDocumentLineReferenceID = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.ParentDocumentLineReferenceID,
  'ParentDocumentLineReferenceID',
  'Document Line Reference Identifier',
  'Identifier',
  'An identifier for the transaction line on a related document (such as an invoice) that covers this consumption line.',
  '0..1',
  undefined,
  'Consumption'
)

export const ConsumptionLineFieldMetaInvoicedQuantity = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.InvoicedQuantity,
  'InvoicedQuantity',
  'Quantity',
  'Quantity',
  'The quantity invoiced.',
  '1',
  undefined,
  undefined
)

export const ConsumptionLineFieldMetaLineExtensionAmount = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.LineExtensionAmount,
  'LineExtensionAmount',
  'Line Extension Amount',
  'Amount',
  'The monetary amount, including discount, to be charged for this consumption line.',
  '1',
  undefined,
  undefined
)

export const ConsumptionLineFieldMetaPeriod = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.Period,
  'Period',
  'Period',
  'Period',
  'The period of time covered by this consumption line.',
  '0..1',
  undefined,
  undefined
)

export const ConsumptionLineFieldMetaDelivery = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.Delivery,
  'Delivery',
  'Delivery',
  'Delivery',
  'A delivery of the utility item on this consumption line.',
  '0..n',
  undefined,
  undefined
)

export const ConsumptionLineFieldMetaAllowanceCharge = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'An allowance or charge that applies to this consumption line.',
  '0..n',
  undefined,
  undefined
)

export const ConsumptionLineFieldMetaTaxTotal = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'A total amount of taxes of a particular kind applicable to this consumption line.',
  '0..n',
  undefined,
  undefined
)

export const ConsumptionLineFieldMetaUtilityItem = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.UtilityItem,
  'UtilityItem',
  'Utility Item',
  'UtilityItem',
  'The utility item consumed.',
  '1',
  undefined,
  undefined
)

export const ConsumptionLineFieldMetaPrice = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.Price,
  'Price',
  'Price',
  'Price',
  'The price associated with this consumption line, expressed in a data structure containing multiple properties.',
  '0..1',
  undefined,
  undefined
)

export const ConsumptionLineFieldMetaUnstructuredPrice = new FieldMeta<ConsumptionLineField>(
  ConsumptionLineField.UnstructuredPrice,
  'UnstructuredPrice',
  'Unstructured Price',
  'UnstructuredPrice',
  'The price associated with this consumption line expressed in a less structured form that includes just the amount and the time of use.',
  '0..1',
  undefined,
  undefined
)

export class ConsumptionLineFieldMeta {
  public static readonly ID = ConsumptionLineFieldMetaID
  public static readonly ParentDocumentLineReferenceID = ConsumptionLineFieldMetaParentDocumentLineReferenceID
  public static readonly InvoicedQuantity = ConsumptionLineFieldMetaInvoicedQuantity
  public static readonly LineExtensionAmount = ConsumptionLineFieldMetaLineExtensionAmount
  public static readonly Period = ConsumptionLineFieldMetaPeriod
  public static readonly Delivery = ConsumptionLineFieldMetaDelivery
  public static readonly AllowanceCharge = ConsumptionLineFieldMetaAllowanceCharge
  public static readonly TaxTotal = ConsumptionLineFieldMetaTaxTotal
  public static readonly UtilityItem = ConsumptionLineFieldMetaUtilityItem
  public static readonly Price = ConsumptionLineFieldMetaPrice
  public static readonly UnstructuredPrice = ConsumptionLineFieldMetaUnstructuredPrice
}

export const ConsumptionLineFieldMap = new Map([
  [ConsumptionLineField.ID, ConsumptionLineFieldMetaID],
  [ConsumptionLineField.ParentDocumentLineReferenceID, ConsumptionLineFieldMetaParentDocumentLineReferenceID],
  [ConsumptionLineField.InvoicedQuantity, ConsumptionLineFieldMetaInvoicedQuantity],
  [ConsumptionLineField.LineExtensionAmount, ConsumptionLineFieldMetaLineExtensionAmount],
  [ConsumptionLineField.Period, ConsumptionLineFieldMetaPeriod],
  [ConsumptionLineField.Delivery, ConsumptionLineFieldMetaDelivery],
  [ConsumptionLineField.AllowanceCharge, ConsumptionLineFieldMetaAllowanceCharge],
  [ConsumptionLineField.TaxTotal, ConsumptionLineFieldMetaTaxTotal],
  [ConsumptionLineField.UtilityItem, ConsumptionLineFieldMetaUtilityItem],
  [ConsumptionLineField.Price, ConsumptionLineFieldMetaPrice],
  [ConsumptionLineField.UnstructuredPrice, ConsumptionLineFieldMetaUnstructuredPrice]
])
