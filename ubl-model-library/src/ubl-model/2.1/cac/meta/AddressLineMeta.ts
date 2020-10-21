import { FieldMeta } from '../../FieldMeta'

export enum AddressLineField {
  Line = 'Line'
}

export const AddressLineFieldMetaLine = new FieldMeta<AddressLineField>(
  AddressLineField.Line,
  'Line',
  'Line',
  'Text',
  'An address line expressed as unstructured text.',
  '1',
  undefined,
  '123 Standard Chartered Tower'
)

export class AddressLineFieldMeta {
  public static readonly Line = AddressLineFieldMetaLine
}

export const AddressLineFieldMap = new Map([
  [AddressLineField.Line, AddressLineFieldMetaLine]
])
