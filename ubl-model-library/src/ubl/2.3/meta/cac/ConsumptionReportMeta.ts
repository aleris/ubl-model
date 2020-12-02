import { FieldMeta } from '../FieldMeta'

export enum ConsumptionReportField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  ConsumptionType = 'ConsumptionType',
  ConsumptionTypeCode = 'ConsumptionTypeCode',
  Description = 'Description',
  TotalConsumedQuantity = 'TotalConsumedQuantity',
  BasicConsumedQuantity = 'BasicConsumedQuantity',
  ResidentOccupantsNumeric = 'ResidentOccupantsNumeric',
  ConsumersEnergyLevelCode = 'ConsumersEnergyLevelCode',
  ConsumersEnergyLevel = 'ConsumersEnergyLevel',
  ResidenceType = 'ResidenceType',
  ResidenceTypeCode = 'ResidenceTypeCode',
  HeatingType = 'HeatingType',
  HeatingTypeCode = 'HeatingTypeCode',
  Period = 'Period',
  GuidanceDocumentReference = 'GuidanceDocumentReference',
  DocumentReference = 'DocumentReference',
  ConsumptionReportReference = 'ConsumptionReportReference',
  ConsumptionHistory = 'ConsumptionHistory'
}

export const ConsumptionReportFieldMetaUBLExtensions = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ConsumptionReportFieldMetaID = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this consumption report.',
  '1',
  'cbc',
  undefined,
  'n/a'
)

export const ConsumptionReportFieldMetaConsumptionType = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.ConsumptionType,
  'ConsumptionType',
  'Consumption Type',
  'Text',
  'The type of consumption, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  'Consumption'
)

export const ConsumptionReportFieldMetaConsumptionTypeCode = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.ConsumptionTypeCode,
  'ConsumptionTypeCode',
  'Consumption Type Code',
  'Code',
  'The type of consumption, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  'Consumption'
)

export const ConsumptionReportFieldMetaDescription = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.Description,
  'Description',
  'Description',
  'Text',
  'Text reporting utility consumption.',
  '0..n',
  'cbc',
  undefined,
  'This report contain the latest year consumption'
)

export const ConsumptionReportFieldMetaTotalConsumedQuantity = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.TotalConsumedQuantity,
  'TotalConsumedQuantity',
  'Total Consumed Quantity',
  'Quantity',
  'The total quantity consumed.',
  '0..1',
  'cbc',
  undefined,
  '20479.00'
)

export const ConsumptionReportFieldMetaBasicConsumedQuantity = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.BasicConsumedQuantity,
  'BasicConsumedQuantity',
  'Basic Consumed Quantity',
  'Quantity',
  'The basic quantity consumed, excluding additional consumption.',
  '0..1',
  'cbc',
  undefined,
  '20000.00'
)

export const ConsumptionReportFieldMetaResidentOccupantsNumeric = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.ResidentOccupantsNumeric,
  'ResidentOccupantsNumeric',
  'Resident Occupants Numeric',
  'Numeric',
  'The number of people occupying the residence covered by this report.',
  '0..1',
  'cbc',
  undefined,
  '4.0'
)

export const ConsumptionReportFieldMetaConsumersEnergyLevelCode = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.ConsumersEnergyLevelCode,
  'ConsumersEnergyLevelCode',
  'Consumers Energy Level Code',
  'Code',
  'The level of energy consumed, compared to the average for this residence type and the number of people living in the residence, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  'B'
)

export const ConsumptionReportFieldMetaConsumersEnergyLevel = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.ConsumersEnergyLevel,
  'ConsumersEnergyLevel',
  'Consumers Energy Level',
  'Text',
  'The level of energy consumed, compared to the average for this residence type and the number of people living in the residence, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  'Middel'
)

export const ConsumptionReportFieldMetaResidenceType = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.ResidenceType,
  'ResidenceType',
  'Residence Type',
  'Text',
  'The type of residence (house, apartment, etc.) covered in this report, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  'House'
)

export const ConsumptionReportFieldMetaResidenceTypeCode = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.ResidenceTypeCode,
  'ResidenceTypeCode',
  'Residence Type Code',
  'Code',
  'The type of residence (house, apartment, etc.) covered in this report, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  'House'
)

export const ConsumptionReportFieldMetaHeatingType = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.HeatingType,
  'HeatingType',
  'Heating Type',
  'Text',
  'The type of heating in the residence covered in this report, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  'District heating'
)

export const ConsumptionReportFieldMetaHeatingTypeCode = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.HeatingTypeCode,
  'HeatingTypeCode',
  'Heating Type Code',
  'Code',
  'The type of heating in the residence covered in this report, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  'DistrictHeating'
)

export const ConsumptionReportFieldMetaPeriod = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.Period,
  'Period',
  'Period',
  'Period',
  'The period of consumption covered in this report.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsumptionReportFieldMetaGuidanceDocumentReference = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.GuidanceDocumentReference,
  'GuidanceDocumentReference',
  'Guidance Document Reference',
  'DocumentReference',
  'A reference to a document providing an explanation of this kind of report.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsumptionReportFieldMetaDocumentReference = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to some other document (for example, this report in another format).',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsumptionReportFieldMetaConsumptionReportReference = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.ConsumptionReportReference,
  'ConsumptionReportReference',
  'Consumption Report Reference',
  'ConsumptionReportReference',
  'A reference to a previous consumption report.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ConsumptionReportFieldMetaConsumptionHistory = new FieldMeta<ConsumptionReportField>(
  ConsumptionReportField.ConsumptionHistory,
  'ConsumptionHistory',
  'Consumption History',
  'ConsumptionHistory',
  'A report describing historical parameters relating to a specific instance of consumption.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class ConsumptionReportFieldMeta {
  public static readonly UBLExtensions = ConsumptionReportFieldMetaUBLExtensions
  public static readonly ID = ConsumptionReportFieldMetaID
  public static readonly ConsumptionType = ConsumptionReportFieldMetaConsumptionType
  public static readonly ConsumptionTypeCode = ConsumptionReportFieldMetaConsumptionTypeCode
  public static readonly Description = ConsumptionReportFieldMetaDescription
  public static readonly TotalConsumedQuantity = ConsumptionReportFieldMetaTotalConsumedQuantity
  public static readonly BasicConsumedQuantity = ConsumptionReportFieldMetaBasicConsumedQuantity
  public static readonly ResidentOccupantsNumeric = ConsumptionReportFieldMetaResidentOccupantsNumeric
  public static readonly ConsumersEnergyLevelCode = ConsumptionReportFieldMetaConsumersEnergyLevelCode
  public static readonly ConsumersEnergyLevel = ConsumptionReportFieldMetaConsumersEnergyLevel
  public static readonly ResidenceType = ConsumptionReportFieldMetaResidenceType
  public static readonly ResidenceTypeCode = ConsumptionReportFieldMetaResidenceTypeCode
  public static readonly HeatingType = ConsumptionReportFieldMetaHeatingType
  public static readonly HeatingTypeCode = ConsumptionReportFieldMetaHeatingTypeCode
  public static readonly Period = ConsumptionReportFieldMetaPeriod
  public static readonly GuidanceDocumentReference = ConsumptionReportFieldMetaGuidanceDocumentReference
  public static readonly DocumentReference = ConsumptionReportFieldMetaDocumentReference
  public static readonly ConsumptionReportReference = ConsumptionReportFieldMetaConsumptionReportReference
  public static readonly ConsumptionHistory = ConsumptionReportFieldMetaConsumptionHistory
}

export const ConsumptionReportFieldMap = new Map([
  [ConsumptionReportField.UBLExtensions, ConsumptionReportFieldMetaUBLExtensions],
  [ConsumptionReportField.ID, ConsumptionReportFieldMetaID],
  [ConsumptionReportField.ConsumptionType, ConsumptionReportFieldMetaConsumptionType],
  [ConsumptionReportField.ConsumptionTypeCode, ConsumptionReportFieldMetaConsumptionTypeCode],
  [ConsumptionReportField.Description, ConsumptionReportFieldMetaDescription],
  [ConsumptionReportField.TotalConsumedQuantity, ConsumptionReportFieldMetaTotalConsumedQuantity],
  [ConsumptionReportField.BasicConsumedQuantity, ConsumptionReportFieldMetaBasicConsumedQuantity],
  [ConsumptionReportField.ResidentOccupantsNumeric, ConsumptionReportFieldMetaResidentOccupantsNumeric],
  [ConsumptionReportField.ConsumersEnergyLevelCode, ConsumptionReportFieldMetaConsumersEnergyLevelCode],
  [ConsumptionReportField.ConsumersEnergyLevel, ConsumptionReportFieldMetaConsumersEnergyLevel],
  [ConsumptionReportField.ResidenceType, ConsumptionReportFieldMetaResidenceType],
  [ConsumptionReportField.ResidenceTypeCode, ConsumptionReportFieldMetaResidenceTypeCode],
  [ConsumptionReportField.HeatingType, ConsumptionReportFieldMetaHeatingType],
  [ConsumptionReportField.HeatingTypeCode, ConsumptionReportFieldMetaHeatingTypeCode],
  [ConsumptionReportField.Period, ConsumptionReportFieldMetaPeriod],
  [ConsumptionReportField.GuidanceDocumentReference, ConsumptionReportFieldMetaGuidanceDocumentReference],
  [ConsumptionReportField.DocumentReference, ConsumptionReportFieldMetaDocumentReference],
  [ConsumptionReportField.ConsumptionReportReference, ConsumptionReportFieldMetaConsumptionReportReference],
  [ConsumptionReportField.ConsumptionHistory, ConsumptionReportFieldMetaConsumptionHistory]
])
