import { FieldMeta } from '../FieldMeta'

export enum CountryField {
  UBLExtensions = 'UBLExtensions',
  IdentificationCode = 'IdentificationCode',
  Name = 'Name'
}

export const CountryFieldMetaUBLExtensions = new FieldMeta<CountryField>(
  CountryField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const CountryFieldMetaIdentificationCode = new FieldMeta<CountryField>(
  CountryField.IdentificationCode,
  'IdentificationCode',
  'Identification Code',
  'Code',
  'A code signifying this country.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CountryFieldMetaName = new FieldMeta<CountryField>(
  CountryField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this country.',
  '0..1',
  'cbc',
  undefined,
  'SOUTH AFRICA'
)

export class CountryFieldMeta {
  public static readonly UBLExtensions = CountryFieldMetaUBLExtensions
  public static readonly IdentificationCode = CountryFieldMetaIdentificationCode
  public static readonly Name = CountryFieldMetaName
}

export const CountryFieldMap = new Map([
  [CountryField.UBLExtensions, CountryFieldMetaUBLExtensions],
  [CountryField.IdentificationCode, CountryFieldMetaIdentificationCode],
  [CountryField.Name, CountryFieldMetaName]
])
