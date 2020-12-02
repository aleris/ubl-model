import { FieldMeta } from '../FieldMeta'

export enum AddressLineField {
  UBLExtensions = 'UBLExtensions',
  Line = 'Line'
}

export const AddressLineFieldMetaUBLExtensions = new FieldMeta<AddressLineField>(
  AddressLineField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const AddressLineFieldMetaLine = new FieldMeta<AddressLineField>(
  AddressLineField.Line,
  'Line',
  'Line',
  'Text',
  'An address line expressed as unstructured text.',
  '1',
  'cbc',
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
