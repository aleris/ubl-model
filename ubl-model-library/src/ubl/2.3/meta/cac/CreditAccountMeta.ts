import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum CreditAccountField {
  UBLExtensions = 'UBLExtensions',
  AccountID = 'AccountID'
}

export const CreditAccountFieldMetaUBLExtensions = new FieldMeta<CreditAccountField>(
  CreditAccountField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CreditAccountFieldMetaAccountID = new FieldMeta<CreditAccountField>(
  CreditAccountField.AccountID,
  'AccountID',
  'Account Identifier',
  IdentifierType.name,
  'An identifier for this credit account.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  'Customer Code 29'
)

export class CreditAccountFieldMeta {
  public static readonly UBLExtensions = CreditAccountFieldMetaUBLExtensions
  public static readonly AccountID = CreditAccountFieldMetaAccountID
}

export const CreditAccountFieldMap = new Map([
  [CreditAccountField.UBLExtensions, CreditAccountFieldMetaUBLExtensions],
  [CreditAccountField.AccountID, CreditAccountFieldMetaAccountID]
])

export const CreditAccountType: Type<CreditAccountField> = {
  name: 'CreditAccount',
  label: 'Credit Account',
  module: TypeModule.cac,
  definition: 'A class to identify a credit account for sales on account.',
  fields: CreditAccountFieldMap,
}
