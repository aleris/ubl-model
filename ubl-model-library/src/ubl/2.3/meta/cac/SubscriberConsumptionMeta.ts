import { FieldMeta } from '../FieldMeta'

export enum SubscriberConsumptionField {
  UBLExtensions = 'UBLExtensions',
  ConsumptionID = 'ConsumptionID',
  SpecificationTypeCode = 'SpecificationTypeCode',
  Note = 'Note',
  TotalMeteredQuantity = 'TotalMeteredQuantity',
  SubscriberParty = 'SubscriberParty',
  UtilityConsumptionPoint = 'UtilityConsumptionPoint',
  OnAccountPayment = 'OnAccountPayment',
  Consumption = 'Consumption',
  SupplierConsumption = 'SupplierConsumption'
}

export const SubscriberConsumptionFieldMetaUBLExtensions = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const SubscriberConsumptionFieldMetaConsumptionID = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.ConsumptionID,
  'ConsumptionID',
  'Consumption Identifier',
  'Identifier',
  'The identifier tor this specification.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SubscriberConsumptionFieldMetaSpecificationTypeCode = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.SpecificationTypeCode,
  'SpecificationTypeCode',
  'Specification Type Code',
  'Code',
  'The code which specifies the type of this specification, e.g. an on account specification or the yearly specification.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SubscriberConsumptionFieldMetaNote = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  'This is how we have calculating your yearly statement'
)

export const SubscriberConsumptionFieldMetaTotalMeteredQuantity = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.TotalMeteredQuantity,
  'TotalMeteredQuantity',
  'Total Metered Quantity',
  'Quantity',
  'The total quantity consumed, as calculated from meter readings.',
  '0..1',
  'cbc',
  undefined,
  '2000.0'
)

export const SubscriberConsumptionFieldMetaSubscriberParty = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.SubscriberParty,
  'SubscriberParty',
  'Subscriber Party',
  'Party',
  'The party subscribing to the utility.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SubscriberConsumptionFieldMetaUtilityConsumptionPoint = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.UtilityConsumptionPoint,
  'UtilityConsumptionPoint',
  'Utility Consumption Point',
  'ConsumptionPoint',
  'The point at which the utility is consumed.',
  '1',
  'cac',
  undefined,
  undefined
)

export const SubscriberConsumptionFieldMetaOnAccountPayment = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.OnAccountPayment,
  'OnAccountPayment',
  'On Account Payment',
  'OnAccountPayment',
  'The planned prepayments (on account) regarding this subscription.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SubscriberConsumptionFieldMetaConsumption = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.Consumption,
  'Consumption',
  'Consumption',
  'Consumption',
  'The consumption in case the consumption is from one and only one supplier.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const SubscriberConsumptionFieldMetaSupplierConsumption = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.SupplierConsumption,
  'SupplierConsumption',
  'Supplier Consumption',
  'SupplierConsumption',
  'The consumption in case the consumption is from more than one supplier.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class SubscriberConsumptionFieldMeta {
  public static readonly UBLExtensions = SubscriberConsumptionFieldMetaUBLExtensions
  public static readonly ConsumptionID = SubscriberConsumptionFieldMetaConsumptionID
  public static readonly SpecificationTypeCode = SubscriberConsumptionFieldMetaSpecificationTypeCode
  public static readonly Note = SubscriberConsumptionFieldMetaNote
  public static readonly TotalMeteredQuantity = SubscriberConsumptionFieldMetaTotalMeteredQuantity
  public static readonly SubscriberParty = SubscriberConsumptionFieldMetaSubscriberParty
  public static readonly UtilityConsumptionPoint = SubscriberConsumptionFieldMetaUtilityConsumptionPoint
  public static readonly OnAccountPayment = SubscriberConsumptionFieldMetaOnAccountPayment
  public static readonly Consumption = SubscriberConsumptionFieldMetaConsumption
  public static readonly SupplierConsumption = SubscriberConsumptionFieldMetaSupplierConsumption
}

export const SubscriberConsumptionFieldMap = new Map([
  [SubscriberConsumptionField.UBLExtensions, SubscriberConsumptionFieldMetaUBLExtensions],
  [SubscriberConsumptionField.ConsumptionID, SubscriberConsumptionFieldMetaConsumptionID],
  [SubscriberConsumptionField.SpecificationTypeCode, SubscriberConsumptionFieldMetaSpecificationTypeCode],
  [SubscriberConsumptionField.Note, SubscriberConsumptionFieldMetaNote],
  [SubscriberConsumptionField.TotalMeteredQuantity, SubscriberConsumptionFieldMetaTotalMeteredQuantity],
  [SubscriberConsumptionField.SubscriberParty, SubscriberConsumptionFieldMetaSubscriberParty],
  [SubscriberConsumptionField.UtilityConsumptionPoint, SubscriberConsumptionFieldMetaUtilityConsumptionPoint],
  [SubscriberConsumptionField.OnAccountPayment, SubscriberConsumptionFieldMetaOnAccountPayment],
  [SubscriberConsumptionField.Consumption, SubscriberConsumptionFieldMetaConsumption],
  [SubscriberConsumptionField.SupplierConsumption, SubscriberConsumptionFieldMetaSupplierConsumption]
])
