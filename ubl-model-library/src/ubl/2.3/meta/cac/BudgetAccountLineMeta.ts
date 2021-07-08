import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { BudgetAccountType } from './BudgetAccountMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum BudgetAccountLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  TotalAmount = 'TotalAmount',
  BudgetAccount = 'BudgetAccount'
}

export const BudgetAccountLineFieldMetaUBLExtensions = new FieldMeta<BudgetAccountLineField>(
  BudgetAccountLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const BudgetAccountLineFieldMetaID = new FieldMeta<BudgetAccountLineField>(
  BudgetAccountLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this budget account line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BudgetAccountLineFieldMetaTotalAmount = new FieldMeta<BudgetAccountLineField>(
  BudgetAccountLineField.TotalAmount,
  'TotalAmount',
  'Total Amount',
  AmountType.name,
  'The total monetary amount for this budget account line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BudgetAccountLineFieldMetaBudgetAccount = new FieldMeta<BudgetAccountLineField>(
  BudgetAccountLineField.BudgetAccount,
  'BudgetAccount',
  'Budget Account',
  BudgetAccountType.name,
  'An account covering this budget account line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class BudgetAccountLineFieldMeta {
  public static readonly UBLExtensions = BudgetAccountLineFieldMetaUBLExtensions
  public static readonly ID = BudgetAccountLineFieldMetaID
  public static readonly TotalAmount = BudgetAccountLineFieldMetaTotalAmount
  public static readonly BudgetAccount = BudgetAccountLineFieldMetaBudgetAccount
}

export const BudgetAccountLineFieldMap = new Map([
  [BudgetAccountLineField.UBLExtensions, BudgetAccountLineFieldMetaUBLExtensions],
  [BudgetAccountLineField.ID, BudgetAccountLineFieldMetaID],
  [BudgetAccountLineField.TotalAmount, BudgetAccountLineFieldMetaTotalAmount],
  [BudgetAccountLineField.BudgetAccount, BudgetAccountLineFieldMetaBudgetAccount]
])

export const BudgetAccountLineType: Type<BudgetAccountLineField> = {
  name: 'BudgetAccountLine',
  label: 'Budget Account Line',
  module: TypeModule.cac,
  definition: 'A class to define a budget account line.',
  fields: BudgetAccountLineFieldMap,
}
