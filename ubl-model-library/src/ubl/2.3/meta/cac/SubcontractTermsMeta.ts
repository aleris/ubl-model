import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { NumericType } from '../cbc/NumericMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum SubcontractTermsField {
  UBLExtensions = 'UBLExtensions',
  Rate = 'Rate',
  UnknownPriceIndicator = 'UnknownPriceIndicator',
  Description = 'Description',
  Amount = 'Amount',
  SubcontractingConditionsCode = 'SubcontractingConditionsCode',
  MaximumPercent = 'MaximumPercent',
  MinimumPercent = 'MinimumPercent'
}

export const SubcontractTermsFieldMetaUBLExtensions = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const SubcontractTermsFieldMetaRate = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.Rate,
  'Rate',
  'Rate',
  NumericType.name,
  'The precise percentage allowed to be subcontracted.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SubcontractTermsFieldMetaUnknownPriceIndicator = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.UnknownPriceIndicator,
  'UnknownPriceIndicator',
  'Unknown Price',
  IndicatorType.name,
  'An indicator that the subcontract price is known (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SubcontractTermsFieldMetaDescription = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the subcontract terms.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SubcontractTermsFieldMetaAmount = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.Amount,
  'Amount',
  'Amount',
  AmountType.name,
  'The monetary amount assigned to the subcontracted task.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SubcontractTermsFieldMetaSubcontractingConditionsCode = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.SubcontractingConditionsCode,
  'SubcontractingConditionsCode',
  'Subcontracting Conditions Code',
  CodeType.name,
  'A code specifying the conditions for subcontracting.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SubcontractTermsFieldMetaMaximumPercent = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.MaximumPercent,
  'MaximumPercent',
  'Maximum Percent',
  NumericType.name,
  'The maximum percentage allowed to be subcontracted.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SubcontractTermsFieldMetaMinimumPercent = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.MinimumPercent,
  'MinimumPercent',
  'Minimum Percent',
  NumericType.name,
  'The minimum percentage allowed to be subcontracted.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class SubcontractTermsFieldMeta {
  public static readonly UBLExtensions = SubcontractTermsFieldMetaUBLExtensions
  public static readonly Rate = SubcontractTermsFieldMetaRate
  public static readonly UnknownPriceIndicator = SubcontractTermsFieldMetaUnknownPriceIndicator
  public static readonly Description = SubcontractTermsFieldMetaDescription
  public static readonly Amount = SubcontractTermsFieldMetaAmount
  public static readonly SubcontractingConditionsCode = SubcontractTermsFieldMetaSubcontractingConditionsCode
  public static readonly MaximumPercent = SubcontractTermsFieldMetaMaximumPercent
  public static readonly MinimumPercent = SubcontractTermsFieldMetaMinimumPercent
}

export const SubcontractTermsFieldMap = new Map([
  [SubcontractTermsField.UBLExtensions, SubcontractTermsFieldMetaUBLExtensions],
  [SubcontractTermsField.Rate, SubcontractTermsFieldMetaRate],
  [SubcontractTermsField.UnknownPriceIndicator, SubcontractTermsFieldMetaUnknownPriceIndicator],
  [SubcontractTermsField.Description, SubcontractTermsFieldMetaDescription],
  [SubcontractTermsField.Amount, SubcontractTermsFieldMetaAmount],
  [SubcontractTermsField.SubcontractingConditionsCode, SubcontractTermsFieldMetaSubcontractingConditionsCode],
  [SubcontractTermsField.MaximumPercent, SubcontractTermsFieldMetaMaximumPercent],
  [SubcontractTermsField.MinimumPercent, SubcontractTermsFieldMetaMinimumPercent]
])

export const SubcontractTermsType: Type<SubcontractTermsField> = {
  name: 'SubcontractTerms',
  label: 'Subcontract Terms',
  module: TypeModule.cac,
  definition: 'A class to describe subcontract terms for a tendering process.',
  fields: SubcontractTermsFieldMap,
}
