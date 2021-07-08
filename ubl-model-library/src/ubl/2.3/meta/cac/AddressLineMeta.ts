import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum AddressLineField {
  UBLExtensions = 'UBLExtensions',
  Line = 'Line'
}

export const AddressLineFieldMetaUBLExtensions = new FieldMeta<AddressLineField>(
  AddressLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const AddressLineFieldMetaLine = new FieldMeta<AddressLineField>(
  AddressLineField.Line,
  'Line',
  'Line',
  TextType.name,
  'An address line expressed as unstructured text.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '123 Standard Chartered Tower'
)

export class AddressLineFieldMeta {
  public static readonly UBLExtensions = AddressLineFieldMetaUBLExtensions
  public static readonly Line = AddressLineFieldMetaLine
}

export const AddressLineFieldMap = new Map([
  [AddressLineField.UBLExtensions, AddressLineFieldMetaUBLExtensions],
  [AddressLineField.Line, AddressLineFieldMetaLine]
])

export const AddressLineType: Type<AddressLineField> = {
  name: 'AddressLine',
  label: 'Address Line',
  module: TypeModule.cac,
  definition: 'A class to define an unstructured address line.',
  fields: AddressLineFieldMap,
}
