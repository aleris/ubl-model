import { FieldMeta } from '../../FieldMeta'

export enum SubcontractTermsField {
  Rate = 'Rate',
  UnknownPriceIndicator = 'UnknownPriceIndicator',
  Description = 'Description',
  Amount = 'Amount',
  SubcontractingConditionsCode = 'SubcontractingConditionsCode',
  MaximumPercent = 'MaximumPercent',
  MinimumPercent = 'MinimumPercent'
}

export const SubcontractTermsFieldMetaRate = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.Rate,
  'Rate',
  'Rate',
  'Numeric',
  'The precise percentage allowed to be subcontracted.',
  '0..1',
  undefined,
  undefined
)

export const SubcontractTermsFieldMetaUnknownPriceIndicator = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.UnknownPriceIndicator,
  'UnknownPriceIndicator',
  'Price',
  'Indicator',
  'An indicator that the subcontract price is known (true) or not (false).',
  '0..1',
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
  undefined,
  undefined
)

export const SubcontractTermsFieldMetaMaximumPercent = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.MaximumPercent,
  'MaximumPercent',
  'Percent',
  'Numeric',
  'The maximum percentage allowed to be subcontracted.',
  '0..1',
  undefined,
  undefined
)

export const SubcontractTermsFieldMetaMinimumPercent = new FieldMeta<SubcontractTermsField>(
  SubcontractTermsField.MinimumPercent,
  'MinimumPercent',
  'Percent',
  'Numeric',
  'The minimum percentage allowed to be subcontracted.',
  '0..1',
  undefined,
  undefined
)

export class SubcontractTermsFieldMeta {
  public static readonly Rate = SubcontractTermsFieldMetaRate
  public static readonly UnknownPriceIndicator = SubcontractTermsFieldMetaUnknownPriceIndicator
  public static readonly Description = SubcontractTermsFieldMetaDescription
  public static readonly Amount = SubcontractTermsFieldMetaAmount
  public static readonly SubcontractingConditionsCode = SubcontractTermsFieldMetaSubcontractingConditionsCode
  public static readonly MaximumPercent = SubcontractTermsFieldMetaMaximumPercent
  public static readonly MinimumPercent = SubcontractTermsFieldMetaMinimumPercent
}

export const SubcontractTermsFieldMap = new Map([
  [SubcontractTermsField.Rate, SubcontractTermsFieldMetaRate],
  [SubcontractTermsField.UnknownPriceIndicator, SubcontractTermsFieldMetaUnknownPriceIndicator],
  [SubcontractTermsField.Description, SubcontractTermsFieldMetaDescription],
  [SubcontractTermsField.Amount, SubcontractTermsFieldMetaAmount],
  [SubcontractTermsField.SubcontractingConditionsCode, SubcontractTermsFieldMetaSubcontractingConditionsCode],
  [SubcontractTermsField.MaximumPercent, SubcontractTermsFieldMetaMaximumPercent],
  [SubcontractTermsField.MinimumPercent, SubcontractTermsFieldMetaMinimumPercent]
])
