import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { TaxCategoryType } from './TaxCategoryMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DutyField {
  UBLExtensions = 'UBLExtensions',
  Amount = 'Amount',
  Duty = 'Duty',
  DutyCode = 'DutyCode',
  TaxCategory = 'TaxCategory'
}

export const DutyFieldMetaUBLExtensions = new FieldMeta<DutyField>(
  DutyField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DutyFieldMetaAmount = new FieldMeta<DutyField>(
  DutyField.Amount,
  'Amount',
  'Amount',
  AmountType.name,
  'The amount of this duty.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '88.23'
)

export const DutyFieldMetaDuty = new FieldMeta<DutyField>(
  DutyField.Duty,
  'Duty',
  'Duty',
  TextType.name,
  'Text describing this duty.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'ConnectionFee'
)

export const DutyFieldMetaDutyCode = new FieldMeta<DutyField>(
  DutyField.DutyCode,
  'DutyCode',
  'Duty Code',
  CodeType.name,
  'The type of this charge rate, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'ConnectionFee'
)

export const DutyFieldMetaTaxCategory = new FieldMeta<DutyField>(
  DutyField.TaxCategory,
  'TaxCategory',
  'Tax Category',
  TaxCategoryType.name,
  'The tax category applicable to this duty.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class DutyFieldMeta {
  public static readonly UBLExtensions = DutyFieldMetaUBLExtensions
  public static readonly Amount = DutyFieldMetaAmount
  public static readonly Duty = DutyFieldMetaDuty
  public static readonly DutyCode = DutyFieldMetaDutyCode
  public static readonly TaxCategory = DutyFieldMetaTaxCategory
}

export const DutyFieldMap = new Map([
  [DutyField.UBLExtensions, DutyFieldMetaUBLExtensions],
  [DutyField.Amount, DutyFieldMetaAmount],
  [DutyField.Duty, DutyFieldMetaDuty],
  [DutyField.DutyCode, DutyFieldMetaDutyCode],
  [DutyField.TaxCategory, DutyFieldMetaTaxCategory]
])

export const DutyType: Type<DutyField> = {
  name: 'Duty',
  label: 'Duty',
  module: TypeModule.cac,
  definition: 'The charging rate used for both call charging and time dependent charging',
  fields: DutyFieldMap,
}
