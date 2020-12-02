import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const SubcontractTermsFieldMetaRate = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.Rate,
  'Rate',
  'Rate',
  'Numeric',
  'The precise percentage allowed to be subcontracted.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SubcontractTermsFieldMetaUnknownPriceIndicator = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.UnknownPriceIndicator,
  'UnknownPriceIndicator',
  'Unknown Price',
  'Indicator',
  'An indicator that the subcontract price is known (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SubcontractTermsFieldMetaDescription = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the subcontract terms.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const SubcontractTermsFieldMetaAmount = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.Amount,
  'Amount',
  'Amount',
  'Amount',
  'The monetary amount assigned to the subcontracted task.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SubcontractTermsFieldMetaSubcontractingConditionsCode = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.SubcontractingConditionsCode,
  'SubcontractingConditionsCode',
  'Subcontracting Conditions Code',
  'Code',
  'A code specifying the conditions for subcontracting.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SubcontractTermsFieldMetaMaximumPercent = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.MaximumPercent,
  'MaximumPercent',
  'Maximum Percent',
  'Numeric',
  'The maximum percentage allowed to be subcontracted.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SubcontractTermsFieldMetaMinimumPercent = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.MinimumPercent,
  'MinimumPercent',
  'Minimum Percent',
  'Numeric',
  'The minimum percentage allowed to be subcontracted.',
  '0..1',
  'cbc',
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
