import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const MeterFieldMetaMeterNumber = new FieldMeta<MeterField>(
  MeterField.MeterNumber,
  'MeterNumber',
  'Meter Number',
  'Text',
  'The meter number, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  '61722x'
)

export const MeterFieldMetaMeterName = new FieldMeta<MeterField>(
  MeterField.MeterName,
  'MeterName',
  'Meter Name',
  'Text',
  'The name of this meter, which serves as an identifier to distinguish a main meter from a submeter.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const MeterFieldMetaMeterConstant = new FieldMeta<MeterField>(
  MeterField.MeterConstant,
  'MeterConstant',
  'Meter Constant',
  'Text',
  'The factor by which readings of this meter must be multiplied to calculate consumption, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  '1.000'
)

export const MeterFieldMetaMeterConstantCode = new FieldMeta<MeterField>(
  MeterField.MeterConstantCode,
  'MeterConstantCode',
  'Meter Constant Code',
  'Code',
  'A code signifying the formula to be used in applying the meter constant.',
  '0..1',
  'cbc',
  undefined,
  'Factor'
)

export const MeterFieldMetaTotalDeliveredQuantity = new FieldMeta<MeterField>(
  MeterField.TotalDeliveredQuantity,
  'TotalDeliveredQuantity',
  'Total Delivered Quantity',
  'Quantity',
  'The quantity delivered; the total quantity consumed as calculated from the meter readings.',
  '0..1',
  'cbc',
  undefined,
  '5761.00'
)

export const MeterFieldMetaMeterReading = new FieldMeta<MeterField>(
  MeterField.MeterReading,
  'MeterReading',
  'Meter Reading',
  'MeterReading',
  'A reading of this meter.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const MeterFieldMetaMeterProperty = new FieldMeta<MeterField>(
  MeterField.MeterProperty,
  'MeterProperty',
  'Meter Property',
  'MeterProperty',
  'A property of this meter.',
  '0..n',
  'cac',
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
