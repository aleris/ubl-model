import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { MeterPropertyType } from './MeterPropertyMeta'
import { MeterReadingType } from './MeterReadingMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum MeterField {
  UBLExtensions = 'UBLExtensions',
  MeterNumber = 'MeterNumber',
  MeterName = 'MeterName',
  MeterConstant = 'MeterConstant',
  MeterConstantCode = 'MeterConstantCode',
  TotalDeliveredQuantity = 'TotalDeliveredQuantity',
  MeterReading = 'MeterReading',
  MeterProperty = 'MeterProperty'
}

export const MeterFieldMetaUBLExtensions = new FieldMeta<MeterField>(
  MeterField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const MeterFieldMetaMeterNumber = new FieldMeta<MeterField>(
  MeterField.MeterNumber,
  'MeterNumber',
  'Meter Number',
  TextType.name,
  'The meter number, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '61722x'
)

export const MeterFieldMetaMeterName = new FieldMeta<MeterField>(
  MeterField.MeterName,
  'MeterName',
  'Meter Name',
  TextType.name,
  'The name of this meter, which serves as an identifier to distinguish a main meter from a submeter.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const MeterFieldMetaMeterConstant = new FieldMeta<MeterField>(
  MeterField.MeterConstant,
  'MeterConstant',
  'Meter Constant',
  TextType.name,
  'The factor by which readings of this meter must be multiplied to calculate consumption, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.000'
)

export const MeterFieldMetaMeterConstantCode = new FieldMeta<MeterField>(
  MeterField.MeterConstantCode,
  'MeterConstantCode',
  'Meter Constant Code',
  CodeType.name,
  'A code signifying the formula to be used in applying the meter constant.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Factor'
)

export const MeterFieldMetaTotalDeliveredQuantity = new FieldMeta<MeterField>(
  MeterField.TotalDeliveredQuantity,
  'TotalDeliveredQuantity',
  'Total Delivered Quantity',
  QuantityType.name,
  'The quantity delivered; the total quantity consumed as calculated from the meter readings.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '5761.00'
)

export const MeterFieldMetaMeterReading = new FieldMeta<MeterField>(
  MeterField.MeterReading,
  'MeterReading',
  'Meter Reading',
  MeterReadingType.name,
  'A reading of this meter.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const MeterFieldMetaMeterProperty = new FieldMeta<MeterField>(
  MeterField.MeterProperty,
  'MeterProperty',
  'Meter Property',
  MeterPropertyType.name,
  'A property of this meter.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class MeterFieldMeta {
  public static readonly UBLExtensions = MeterFieldMetaUBLExtensions
  public static readonly MeterNumber = MeterFieldMetaMeterNumber
  public static readonly MeterName = MeterFieldMetaMeterName
  public static readonly MeterConstant = MeterFieldMetaMeterConstant
  public static readonly MeterConstantCode = MeterFieldMetaMeterConstantCode
  public static readonly TotalDeliveredQuantity = MeterFieldMetaTotalDeliveredQuantity
  public static readonly MeterReading = MeterFieldMetaMeterReading
  public static readonly MeterProperty = MeterFieldMetaMeterProperty
}

export const MeterFieldMap = new Map([
  [MeterField.UBLExtensions, MeterFieldMetaUBLExtensions],
  [MeterField.MeterNumber, MeterFieldMetaMeterNumber],
  [MeterField.MeterName, MeterFieldMetaMeterName],
  [MeterField.MeterConstant, MeterFieldMetaMeterConstant],
  [MeterField.MeterConstantCode, MeterFieldMetaMeterConstantCode],
  [MeterField.TotalDeliveredQuantity, MeterFieldMetaTotalDeliveredQuantity],
  [MeterField.MeterReading, MeterFieldMetaMeterReading],
  [MeterField.MeterProperty, MeterFieldMetaMeterProperty]
])

export const MeterType: Type<MeterField> = {
  name: 'Meter',
  label: 'Meter',
  module: TypeModule.cac,
  definition: 'A class to describe a meter and its readings.',
  fields: MeterFieldMap,
}
