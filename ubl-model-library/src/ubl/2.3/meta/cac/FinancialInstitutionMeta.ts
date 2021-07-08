import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum FinancialInstitutionField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Name = 'Name',
  Address = 'Address'
}

export const FinancialInstitutionFieldMetaUBLExtensions = new FieldMeta<FinancialInstitutionField>(
  FinancialInstitutionField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const FinancialInstitutionFieldMetaID = new FieldMeta<FinancialInstitutionField>(
  FinancialInstitutionField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this financial institution. It is recommended that the ISO 9362 Bank Identification Code (BIC) be used as the ID.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FinancialInstitutionFieldMetaName = new FieldMeta<FinancialInstitutionField>(
  FinancialInstitutionField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this financial institution.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FinancialInstitutionFieldMetaAddress = new FieldMeta<FinancialInstitutionField>(
  FinancialInstitutionField.Address,
  'Address',
  'Address',
  AddressType.name,
  'The address of this financial institution.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class FinancialInstitutionFieldMeta {
  public static readonly UBLExtensions = FinancialInstitutionFieldMetaUBLExtensions
  public static readonly ID = FinancialInstitutionFieldMetaID
  public static readonly Name = FinancialInstitutionFieldMetaName
  public static readonly Address = FinancialInstitutionFieldMetaAddress
}

export const FinancialInstitutionFieldMap = new Map([
  [FinancialInstitutionField.UBLExtensions, FinancialInstitutionFieldMetaUBLExtensions],
  [FinancialInstitutionField.ID, FinancialInstitutionFieldMetaID],
  [FinancialInstitutionField.Name, FinancialInstitutionFieldMetaName],
  [FinancialInstitutionField.Address, FinancialInstitutionFieldMetaAddress]
])

export const FinancialInstitutionType: Type<FinancialInstitutionField> = {
  name: 'FinancialInstitution',
  label: 'Financial Institution',
  module: TypeModule.cac,
  definition: 'A class to describe a financial institution.',
  fields: FinancialInstitutionFieldMap,
}
