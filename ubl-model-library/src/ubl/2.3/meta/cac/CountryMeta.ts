import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum CountryField {
  UBLExtensions = 'UBLExtensions',
  IdentificationCode = 'IdentificationCode',
  Name = 'Name'
}

export const CountryFieldMetaUBLExtensions = new FieldMeta<CountryField>(
  CountryField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CountryFieldMetaIdentificationCode = new FieldMeta<CountryField>(
  CountryField.IdentificationCode,
  'IdentificationCode',
  'Identification Code',
  CodeType.name,
  'A code signifying this country.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CountryFieldMetaName = new FieldMeta<CountryField>(
  CountryField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this country.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
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

export const CountryType: Type<CountryField> = {
  name: 'Country',
  label: 'Country',
  module: TypeModule.cac,
  definition: 'A class to describe a country.',
  fields: CountryFieldMap,
}
