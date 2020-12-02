import { FieldMeta } from '../FieldMeta'

export enum BudgetAccountField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  BudgetYearNumeric = 'BudgetYearNumeric',
  RequiredClassificationScheme = 'RequiredClassificationScheme'
}

export const BudgetAccountFieldMetaUBLExtensions = new FieldMeta<BudgetAccountField>(
  BudgetAccountField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const BudgetAccountFieldMetaID = new FieldMeta<BudgetAccountField>(
  BudgetAccountField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the budget account, typically an internal accounting reference.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const BudgetAccountFieldMetaBudgetYearNumeric = new FieldMeta<BudgetAccountField>(
  BudgetAccountField.BudgetYearNumeric,
  'BudgetYearNumeric',
  'Budget Year',
  'Numeric',
  'The number of the year for this budget account, e.g. 2012',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const BudgetAccountFieldMetaRequiredClassificationScheme = new FieldMeta<BudgetAccountField>(
  BudgetAccountField.RequiredClassificationScheme,
  'RequiredClassificationScheme',
  'Required Classification Scheme',
  'ClassificationScheme',
  'A classification scheme required for this budget account.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class BudgetAccountFieldMeta {
  public static readonly UBLExtensions = BudgetAccountFieldMetaUBLExtensions
  public static readonly ID = BudgetAccountFieldMetaID
  public static readonly BudgetYearNumeric = BudgetAccountFieldMetaBudgetYearNumeric
  public static readonly RequiredClassificationScheme = BudgetAccountFieldMetaRequiredClassificationScheme
}

export const BudgetAccountFieldMap = new Map([
  [BudgetAccountField.UBLExtensions, BudgetAccountFieldMetaUBLExtensions],
  [BudgetAccountField.ID, BudgetAccountFieldMetaID],
  [BudgetAccountField.BudgetYearNumeric, BudgetAccountFieldMetaBudgetYearNumeric],
  [BudgetAccountField.RequiredClassificationScheme, BudgetAccountFieldMetaRequiredClassificationScheme]
])
