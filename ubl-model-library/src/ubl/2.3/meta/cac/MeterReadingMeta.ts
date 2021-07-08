import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum MeterReadingField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  MeterReadingType = 'MeterReadingType',
  MeterReadingTypeCode = 'MeterReadingTypeCode',
  PreviousMeterReadingDate = 'PreviousMeterReadingDate',
  PreviousMeterQuantity = 'PreviousMeterQuantity',
  LatestMeterReadingDate = 'LatestMeterReadingDate',
  LatestMeterQuantity = 'LatestMeterQuantity',
  PreviousMeterReadingMethod = 'PreviousMeterReadingMethod',
  PreviousMeterReadingMethodCode = 'PreviousMeterReadingMethodCode',
  LatestMeterReadingMethod = 'LatestMeterReadingMethod',
  LatestMeterReadingMethodCode = 'LatestMeterReadingMethodCode',
  MeterReadingComments = 'MeterReadingComments',
  DeliveredQuantity = 'DeliveredQuantity'
}

export const MeterReadingFieldMetaUBLExtensions = new FieldMeta<MeterReadingField>(
  MeterReadingField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const MeterReadingFieldMetaID = new FieldMeta<MeterReadingField>(
  MeterReadingField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this meter reading.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '7411013716x'
)

export const MeterReadingFieldMetaMeterReadingType = new FieldMeta<MeterReadingField>(
  MeterReadingField.MeterReadingType,
  'MeterReadingType',
  'Meter Reading Type',
  TextType.name,
  'The type of this meter reading, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Electricity'
)

export const MeterReadingFieldMetaMeterReadingTypeCode = new FieldMeta<MeterReadingField>(
  MeterReadingField.MeterReadingTypeCode,
  'MeterReadingTypeCode',
  'Meter Reading Type Code',
  CodeType.name,
  'The type of this meter reading, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Electricity'
)

export const MeterReadingFieldMetaPreviousMeterReadingDate = new FieldMeta<MeterReadingField>(
  MeterReadingField.PreviousMeterReadingDate,
  'PreviousMeterReadingDate',
  'Previous Meter Reading Date',
  DateType.name,
  'The date of the previous meter reading.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '2006-09-01'
)

export const MeterReadingFieldMetaPreviousMeterQuantity = new FieldMeta<MeterReadingField>(
  MeterReadingField.PreviousMeterQuantity,
  'PreviousMeterQuantity',
  'Previous Meter Quantity',
  QuantityType.name,
  'The quantity of the previous meter reading.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '122604.00'
)

export const MeterReadingFieldMetaLatestMeterReadingDate = new FieldMeta<MeterReadingField>(
  MeterReadingField.LatestMeterReadingDate,
  'LatestMeterReadingDate',
  'Latest Meter Reading Date',
  DateType.name,
  'The date of the latest meter reading.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '2006-09-01'
)

export const MeterReadingFieldMetaLatestMeterQuantity = new FieldMeta<MeterReadingField>(
  MeterReadingField.LatestMeterQuantity,
  'LatestMeterQuantity',
  'Latest Meter Quantity',
  QuantityType.name,
  'The quantity of the latest meter reading.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '128365.00'
)

export const MeterReadingFieldMetaPreviousMeterReadingMethod = new FieldMeta<MeterReadingField>(
  MeterReadingField.PreviousMeterReadingMethod,
  'PreviousMeterReadingMethod',
  'Previous Meter Reading Method',
  TextType.name,
  'The method used for the previous meter reading, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Manuel'
)

export const MeterReadingFieldMetaPreviousMeterReadingMethodCode = new FieldMeta<MeterReadingField>(
  MeterReadingField.PreviousMeterReadingMethodCode,
  'PreviousMeterReadingMethodCode',
  'Previous Meter Reading Method Code',
  CodeType.name,
  'The method used for the previous meter reading, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Estimated'
)

export const MeterReadingFieldMetaLatestMeterReadingMethod = new FieldMeta<MeterReadingField>(
  MeterReadingField.LatestMeterReadingMethod,
  'LatestMeterReadingMethod',
  'Latest Meter Reading Method',
  TextType.name,
  'The method used for the latest meter reading, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Manuel'
)

export const MeterReadingFieldMetaLatestMeterReadingMethodCode = new FieldMeta<MeterReadingField>(
  MeterReadingField.LatestMeterReadingMethodCode,
  'LatestMeterReadingMethodCode',
  'Latest Meter Reading Method Code',
  CodeType.name,
  'The method used for the latest meter reading, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Estimated'
)

export const MeterReadingFieldMetaMeterReadingComments = new FieldMeta<MeterReadingField>(
  MeterReadingField.MeterReadingComments,
  'MeterReadingComments',
  'Meter Reading Comments',
  TextType.name,
  'Text containing comments on this meter reading.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'The last stated meterstand is estimated'
)

export const MeterReadingFieldMetaDeliveredQuantity = new FieldMeta<MeterReadingField>(
  MeterReadingField.DeliveredQuantity,
  'DeliveredQuantity',
  'Delivered Quantity',
  QuantityType.name,
  'Consumption in the period from PreviousMeterReadingDate to LatestMeterReadingDate.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export class MeterReadingFieldMeta {
  public static readonly UBLExtensions = MeterReadingFieldMetaUBLExtensions
  public static readonly ID = MeterReadingFieldMetaID
  public static readonly MeterReadingType = MeterReadingFieldMetaMeterReadingType
  public static readonly MeterReadingTypeCode = MeterReadingFieldMetaMeterReadingTypeCode
  public static readonly PreviousMeterReadingDate = MeterReadingFieldMetaPreviousMeterReadingDate
  public static readonly PreviousMeterQuantity = MeterReadingFieldMetaPreviousMeterQuantity
  public static readonly LatestMeterReadingDate = MeterReadingFieldMetaLatestMeterReadingDate
  public static readonly LatestMeterQuantity = MeterReadingFieldMetaLatestMeterQuantity
  public static readonly PreviousMeterReadingMethod = MeterReadingFieldMetaPreviousMeterReadingMethod
  public static readonly PreviousMeterReadingMethodCode = MeterReadingFieldMetaPreviousMeterReadingMethodCode
  public static readonly LatestMeterReadingMethod = MeterReadingFieldMetaLatestMeterReadingMethod
  public static readonly LatestMeterReadingMethodCode = MeterReadingFieldMetaLatestMeterReadingMethodCode
  public static readonly MeterReadingComments = MeterReadingFieldMetaMeterReadingComments
  public static readonly DeliveredQuantity = MeterReadingFieldMetaDeliveredQuantity
}

export const MeterReadingFieldMap = new Map([
  [MeterReadingField.UBLExtensions, MeterReadingFieldMetaUBLExtensions],
  [MeterReadingField.ID, MeterReadingFieldMetaID],
  [MeterReadingField.MeterReadingType, MeterReadingFieldMetaMeterReadingType],
  [MeterReadingField.MeterReadingTypeCode, MeterReadingFieldMetaMeterReadingTypeCode],
  [MeterReadingField.PreviousMeterReadingDate, MeterReadingFieldMetaPreviousMeterReadingDate],
  [MeterReadingField.PreviousMeterQuantity, MeterReadingFieldMetaPreviousMeterQuantity],
  [MeterReadingField.LatestMeterReadingDate, MeterReadingFieldMetaLatestMeterReadingDate],
  [MeterReadingField.LatestMeterQuantity, MeterReadingFieldMetaLatestMeterQuantity],
  [MeterReadingField.PreviousMeterReadingMethod, MeterReadingFieldMetaPreviousMeterReadingMethod],
  [MeterReadingField.PreviousMeterReadingMethodCode, MeterReadingFieldMetaPreviousMeterReadingMethodCode],
  [MeterReadingField.LatestMeterReadingMethod, MeterReadingFieldMetaLatestMeterReadingMethod],
  [MeterReadingField.LatestMeterReadingMethodCode, MeterReadingFieldMetaLatestMeterReadingMethodCode],
  [MeterReadingField.MeterReadingComments, MeterReadingFieldMetaMeterReadingComments],
  [MeterReadingField.DeliveredQuantity, MeterReadingFieldMetaDeliveredQuantity]
])

export const MeterReadingType: Type<MeterReadingField> = {
  name: 'MeterReading',
  label: 'Meter Reading',
  module: TypeModule.cac,
  definition: 'A class to describe a meter reading.',
  fields: MeterReadingFieldMap,
}
