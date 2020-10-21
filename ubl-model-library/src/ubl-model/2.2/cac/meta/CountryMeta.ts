import { FieldMeta } from '../../FieldMeta'

export enum CountryField {
  IdentificationCode = 'IdentificationCode',
  Name = 'Name'
}

export const CountryFieldMetaIdentificationCode = new FieldMeta<CountryField>(
  CountryField.IdentificationCode,
  'IdentificationCode',
  'Identification Code',
  'Code',
  'A code signifying this country.',
  '0..1',
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
  undefined,
  'SOUTH AFRICA'
)

export class CountryFieldMeta {
  public static readonly IdentificationCode = CountryFieldMetaIdentificationCode
  public static readonly Name = CountryFieldMetaName
}

export const CountryFieldMap = new Map([
  [CountryField.IdentificationCode, CountryFieldMetaIdentificationCode],
  [CountryField.Name, CountryFieldMetaName]
])
