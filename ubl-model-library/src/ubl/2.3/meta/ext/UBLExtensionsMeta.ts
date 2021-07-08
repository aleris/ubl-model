import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { UBLExtensionType } from './UBLExtensionMeta'

export enum UBLExtensionsField {
  UBLExtension = 'UBLExtension'
}

export const UBLExtensionsFieldMetaUBLExtension = new FieldMeta<UBLExtensionsField>(
  UBLExtensionsField.UBLExtension,
  'UBLExtension',
  'UBLExtension',
  UBLExtensionType.name,
  'A single extension for private use.',
  FieldCardinality.Multi,
  TypeModule.ext,
  undefined,
  undefined
)

export class UBLExtensionsFieldMeta {
  public static readonly UBLExtension = UBLExtensionsFieldMetaUBLExtension
}

export const UBLExtensionsFieldMap = new Map([
  [UBLExtensionsField.UBLExtension, UBLExtensionsFieldMetaUBLExtension]
])

export const UBLExtensionsType: Type<UBLExtensionsField> = {
  name: 'UBLExtensions',
  label: 'undefined',
  module: TypeModule.ext,
  definition: 'A container for all extensions present in the document.',
  fields: UBLExtensionsFieldMap,
}
