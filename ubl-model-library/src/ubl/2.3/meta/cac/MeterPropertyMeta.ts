import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const MeterPropertyFieldMetaName = new FieldMeta<MeterPropertyField>(
  MeterPropertyField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this meter property, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Energy Rating , Collar Size , Fat Content'
)

export const MeterPropertyFieldMetaNameCode = new FieldMeta<MeterPropertyField>(
  MeterPropertyField.NameCode,
  'NameCode',
  'Name Code',
  CodeType.name,
  'The value of this meter property, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const MeterPropertyFieldMetaValue = new FieldMeta<MeterPropertyField>(
  MeterPropertyField.Value,
  'Value',
  'Value',
  TextType.name,
  'The value of this meter property, expressed as a quantity.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '100 watts , 15 European , 20% +/- 5%'
)

export const MeterPropertyFieldMetaValueQuantity = new FieldMeta<MeterPropertyField>(
  MeterPropertyField.ValueQuantity,
  'ValueQuantity',
  'Value Quantity',
  QuantityType.name,
  'The value of this meter property, expressed as a quantity.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const MeterPropertyFieldMetaValueQualifier = new FieldMeta<MeterPropertyField>(
  MeterPropertyField.ValueQualifier,
  'ValueQualifier',
  'Value Qualifier',
  TextType.name,
  'An additional value to qualify the value of the meter',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
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

export const MeterPropertyType: Type<MeterPropertyField> = {
  name: 'MeterProperty',
  label: 'Meter Property',
  module: TypeModule.cac,
  definition: 'The name of this meter property.',
  fields: MeterPropertyFieldMap,
}
