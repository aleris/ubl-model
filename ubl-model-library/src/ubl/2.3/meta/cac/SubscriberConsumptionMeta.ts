import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { ConsumptionType } from './ConsumptionMeta'
import { ConsumptionPointType } from './ConsumptionPointMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { OnAccountPaymentType } from './OnAccountPaymentMeta'
import { PartyType } from './PartyMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { SupplierConsumptionType } from './SupplierConsumptionMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const SubscriberConsumptionFieldMetaConsumptionID = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.ConsumptionID,
  'ConsumptionID',
  'Consumption Identifier',
  IdentifierType.name,
  'The identifier tor this specification.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SubscriberConsumptionFieldMetaSpecificationTypeCode = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.SpecificationTypeCode,
  'SpecificationTypeCode',
  'Specification Type Code',
  CodeType.name,
  'The code which specifies the type of this specification, e.g. an on account specification or the yearly specification.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SubscriberConsumptionFieldMetaNote = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'This is how we have calculating your yearly statement'
)

export const SubscriberConsumptionFieldMetaTotalMeteredQuantity = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.TotalMeteredQuantity,
  'TotalMeteredQuantity',
  'Total Metered Quantity',
  QuantityType.name,
  'The total quantity consumed, as calculated from meter readings.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2000.0'
)

export const SubscriberConsumptionFieldMetaSubscriberParty = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.SubscriberParty,
  'SubscriberParty',
  'Subscriber Party',
  PartyType.name,
  'The party subscribing to the utility.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SubscriberConsumptionFieldMetaUtilityConsumptionPoint = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.UtilityConsumptionPoint,
  'UtilityConsumptionPoint',
  'Utility Consumption Point',
  ConsumptionPointType.name,
  'The point at which the utility is consumed.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const SubscriberConsumptionFieldMetaOnAccountPayment = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.OnAccountPayment,
  'OnAccountPayment',
  'On Account Payment',
  OnAccountPaymentType.name,
  'The planned prepayments (on account) regarding this subscription.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SubscriberConsumptionFieldMetaConsumption = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.Consumption,
  'Consumption',
  'Consumption',
  ConsumptionType.name,
  'The consumption in case the consumption is from one and only one supplier.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SubscriberConsumptionFieldMetaSupplierConsumption = new FieldMeta<SubscriberConsumptionField>(
  SubscriberConsumptionField.SupplierConsumption,
  'SupplierConsumption',
  'Supplier Consumption',
  SupplierConsumptionType.name,
  'The consumption in case the consumption is from more than one supplier.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const SubscriberConsumptionType: Type<SubscriberConsumptionField> = {
  name: 'SubscriberConsumption',
  label: 'Subscriber Consumption',
  module: TypeModule.cac,
  definition: 'The consumption for a specific party for given consumption point provided by a numbers of suppliers. An enterprise can have one utility statement for several parties (e.g. a ministry of defence receiving a telephone bill). In this way each subscriber consumption represent a sub utility statement.',
  fields: SubscriberConsumptionFieldMap,
}
