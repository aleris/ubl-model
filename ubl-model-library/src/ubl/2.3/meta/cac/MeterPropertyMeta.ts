import { FieldMeta } from '../FieldMeta'

export enum MeterPropertyField {
  UBLExtensions = 'UBLExtensions',
  Name = 'Name',
  NameCode = 'NameCode',
  Value = 'Value',
  ValueQuantity = 'ValueQuantity',
  ValueQualifier = 'ValueQualifier'
}

export const MeterPropertyFieldMetaUBLExtensions = new FieldMeta<MeterPropertyField>(
  MeterPropertyField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const MeterPropertyFieldMetaName = new FieldMeta<MeterPropertyField>(
  MeterPropertyField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this meter property, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  'Energy Rating , Collar Size , Fat Content'
)

export const MeterPropertyFieldMetaNameCode = new FieldMeta<MeterPropertyField>(
  MeterPropertyField.NameCode,
  'NameCode',
  'Name Code',
  'Code',
  'The value of this meter property, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const MeterPropertyFieldMetaValue = new FieldMeta<MeterPropertyField>(
  MeterPropertyField.Value,
  'Value',
  'Value',
  'Text',
  'The value of this meter property, expressed as a quantity.',
  '0..1',
  'cbc',
  undefined,
  '100 watts , 15 European , 20% +/- 5%'
)

export const MeterPropertyFieldMetaValueQuantity = new FieldMeta<MeterPropertyField>(
  MeterPropertyField.ValueQuantity,
  'ValueQuantity',
  'Value Quantity',
  'Quantity',
  'The value of this meter property, expressed as a quantity.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const MeterPropertyFieldMetaValueQualifier = new FieldMeta<MeterPropertyField>(
  MeterPropertyField.ValueQualifier,
  'ValueQualifier',
  'Value Qualifier',
  'Text',
  'An additional value to qualify the value of the meter',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export class MeterPropertyFieldMeta {
  public static readonly UBLExtensions = MeterPropertyFieldMetaUBLExtensions
  public static readonly Name = MeterPropertyFieldMetaName
  public static readonly NameCode = MeterPropertyFieldMetaNameCode
  public static readonly Value = MeterPropertyFieldMetaValue
  public static readonly ValueQuantity = MeterPropertyFieldMetaValueQuantity
  public static readonly ValueQualifier = MeterPropertyFieldMetaValueQualifier
}

export const MeterPropertyFieldMap = new Map([
  [MeterPropertyField.UBLExtensions, MeterPropertyFieldMetaUBLExtensions],
  [MeterPropertyField.Name, MeterPropertyFieldMetaName],
  [MeterPropertyField.NameCode, MeterPropertyFieldMetaNameCode],
  [MeterPropertyField.Value, MeterPropertyFieldMetaValue],
  [MeterPropertyField.ValueQuantity, MeterPropertyFieldMetaValueQuantity],
  [MeterPropertyField.ValueQualifier, MeterPropertyFieldMetaValueQualifier]
])
