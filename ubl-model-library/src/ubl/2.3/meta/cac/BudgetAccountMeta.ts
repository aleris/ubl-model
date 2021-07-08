import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ClassificationSchemeType } from './ClassificationSchemeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { NumericType } from '../cbc/NumericMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum BudgetAccountField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  BudgetYearNumeric = 'BudgetYearNumeric',
  RequiredClassificationScheme = 'RequiredClassificationScheme'
}

export const BudgetAccountFieldMetaUBLExtensions = new FieldMeta<BudgetAccountField>(
  BudgetAccountField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const BudgetAccountFieldMetaID = new FieldMeta<BudgetAccountField>(
  BudgetAccountField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for the budget account, typically an internal accounting reference.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BudgetAccountFieldMetaBudgetYearNumeric = new FieldMeta<BudgetAccountField>(
  BudgetAccountField.BudgetYearNumeric,
  'BudgetYearNumeric',
  'Budget Year',
  NumericType.name,
  'The number of the year for this budget account, e.g. 2012',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BudgetAccountFieldMetaRequiredClassificationScheme = new FieldMeta<BudgetAccountField>(
  BudgetAccountField.RequiredClassificationScheme,
  'RequiredClassificationScheme',
  'Required Classification Scheme',
  ClassificationSchemeType.name,
  'A classification scheme required for this budget account.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const BudgetAccountType: Type<BudgetAccountField> = {
  name: 'BudgetAccount',
  label: 'Budget Account',
  module: TypeModule.cac,
  definition: 'A class to define a budget account.',
  fields: BudgetAccountFieldMap,
}
