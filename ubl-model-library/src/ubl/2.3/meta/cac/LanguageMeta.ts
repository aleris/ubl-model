import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum LanguageField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Name = 'Name',
  LocaleCode = 'LocaleCode'
}

export const LanguageFieldMetaUBLExtensions = new FieldMeta<LanguageField>(
  LanguageField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const LanguageFieldMetaID = new FieldMeta<LanguageField>(
  LanguageField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this language.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LanguageFieldMetaName = new FieldMeta<LanguageField>(
  LanguageField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this language.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LanguageFieldMetaLocaleCode = new FieldMeta<LanguageField>(
  LanguageField.LocaleCode,
  'LocaleCode',
  'Locale Code',
  CodeType.name,
  'A code signifying the locale in which this language is used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class LanguageFieldMeta {
  public static readonly UBLExtensions = LanguageFieldMetaUBLExtensions
  public static readonly ID = LanguageFieldMetaID
  public static readonly Name = LanguageFieldMetaName
  public static readonly LocaleCode = LanguageFieldMetaLocaleCode
}

export const LanguageFieldMap = new Map([
  [LanguageField.UBLExtensions, LanguageFieldMetaUBLExtensions],
  [LanguageField.ID, LanguageFieldMetaID],
  [LanguageField.Name, LanguageFieldMetaName],
  [LanguageField.LocaleCode, LanguageFieldMetaLocaleCode]
])

export const LanguageType: Type<LanguageField> = {
  name: 'Language',
  label: 'Language',
  module: TypeModule.cac,
  definition: 'A class to describe a language.',
  fields: LanguageFieldMap,
}
