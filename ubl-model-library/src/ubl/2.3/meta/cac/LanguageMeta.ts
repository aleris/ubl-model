import { FieldMeta } from '../FieldMeta'

export enum LanguageField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Name = 'Name',
  LocaleCode = 'LocaleCode'
}

export const LanguageFieldMetaUBLExtensions = new FieldMeta<LanguageField>(
  LanguageField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const LanguageFieldMetaID = new FieldMeta<LanguageField>(
  LanguageField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this language.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LanguageFieldMetaName = new FieldMeta<LanguageField>(
  LanguageField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this language.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LanguageFieldMetaLocaleCode = new FieldMeta<LanguageField>(
  LanguageField.LocaleCode,
  'LocaleCode',
  'Locale Code',
  'Code',
  'A code signifying the locale in which this language is used.',
  '0..1',
  'cbc',
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
