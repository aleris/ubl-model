import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PeriodType } from './PeriodMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ConsumptionReportReferenceField {
  UBLExtensions = 'UBLExtensions',
  ConsumptionReportID = 'ConsumptionReportID',
  ConsumptionType = 'ConsumptionType',
  ConsumptionTypeCode = 'ConsumptionTypeCode',
  TotalConsumedQuantity = 'TotalConsumedQuantity',
  Period = 'Period'
}

export const ConsumptionReportReferenceFieldMetaUBLExtensions = new FieldMeta<ConsumptionReportReferenceField>(
  ConsumptionReportReferenceField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ConsumptionReportReferenceFieldMetaConsumptionReportID = new FieldMeta<ConsumptionReportReferenceField>(
  ConsumptionReportReferenceField.ConsumptionReportID,
  'ConsumptionReportID',
  'Consumption Report Identifier',
  IdentifierType.name,
  'An identifier for the referenced consumption report.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  'n/a'
)

export const ConsumptionReportReferenceFieldMetaConsumptionType = new FieldMeta<ConsumptionReportReferenceField>(
  ConsumptionReportReferenceField.ConsumptionType,
  'ConsumptionType',
  'Consumption Type',
  TextType.name,
  'The reported consumption type, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Consumption'
)

export const ConsumptionReportReferenceFieldMetaConsumptionTypeCode = new FieldMeta<ConsumptionReportReferenceField>(
  ConsumptionReportReferenceField.ConsumptionTypeCode,
  'ConsumptionTypeCode',
  'Consumption Type Code',
  CodeType.name,
  'The reported consumption type, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Consumption'
)

export const ConsumptionReportReferenceFieldMetaTotalConsumedQuantity = new FieldMeta<ConsumptionReportReferenceField>(
  ConsumptionReportReferenceField.TotalConsumedQuantity,
  'TotalConsumedQuantity',
  'Total Consumed Quantity',
  QuantityType.name,
  'The total quantity consumed during the period of the referenced report.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '20479.00'
)

export const ConsumptionReportReferenceFieldMetaPeriod = new FieldMeta<ConsumptionReportReferenceField>(
  ConsumptionReportReferenceField.Period,
  'Period',
  'Period',
  PeriodType.name,
  'The period of consumption covered by the referenced report.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export class ConsumptionReportReferenceFieldMeta {
  public static readonly UBLExtensions = ConsumptionReportReferenceFieldMetaUBLExtensions
  public static readonly ConsumptionReportID = ConsumptionReportReferenceFieldMetaConsumptionReportID
  public static readonly ConsumptionType = ConsumptionReportReferenceFieldMetaConsumptionType
  public static readonly ConsumptionTypeCode = ConsumptionReportReferenceFieldMetaConsumptionTypeCode
  public static readonly TotalConsumedQuantity = ConsumptionReportReferenceFieldMetaTotalConsumedQuantity
  public static readonly Period = ConsumptionReportReferenceFieldMetaPeriod
}

export const ConsumptionReportReferenceFieldMap = new Map([
  [ConsumptionReportReferenceField.UBLExtensions, ConsumptionReportReferenceFieldMetaUBLExtensions],
  [ConsumptionReportReferenceField.ConsumptionReportID, ConsumptionReportReferenceFieldMetaConsumptionReportID],
  [ConsumptionReportReferenceField.ConsumptionType, ConsumptionReportReferenceFieldMetaConsumptionType],
  [ConsumptionReportReferenceField.ConsumptionTypeCode, ConsumptionReportReferenceFieldMetaConsumptionTypeCode],
  [ConsumptionReportReferenceField.TotalConsumedQuantity, ConsumptionReportReferenceFieldMetaTotalConsumedQuantity],
  [ConsumptionReportReferenceField.Period, ConsumptionReportReferenceFieldMetaPeriod]
])

export const ConsumptionReportReferenceType: Type<ConsumptionReportReferenceField> = {
  name: 'ConsumptionReportReference',
  label: 'Consumption Report Reference',
  module: TypeModule.cac,
  definition: 'A class to define a reference to an earlier consumption report (e.g., last year\'s consumption).',
  fields: ConsumptionReportReferenceFieldMap,
}
