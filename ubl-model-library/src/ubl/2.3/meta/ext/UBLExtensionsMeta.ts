import { FieldMeta } from '../FieldMeta'

export enum UBLExtensionsField {
  UBLExtension = 'UBLExtension'
}

export const UBLExtensionsFieldMetaUBLExtension = new FieldMeta<UBLExtensionsField>(
  UBLExtensionsField.UBLExtension,
  'UBLExtension',
  'undefined',
  'UBLExtension',
  'A single extension for private use.',
  '1..n',
  'ext',
  undefined,
  undefined
)

export class UBLExtensionsFieldMeta {
  public static readonly UBLExtension = UBLExtensionsFieldMetaUBLExtension
}

export const UBLExtensionsFieldMap = new Map([
  [UBLExtensionsField.UBLExtension, UBLExtensionsFieldMetaUBLExtension]
])
