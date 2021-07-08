import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { FinancialInstitutionType } from './FinancialInstitutionMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum BranchField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Name = 'Name',
  FinancialInstitution = 'FinancialInstitution',
  Address = 'Address'
}

export const BranchFieldMetaUBLExtensions = new FieldMeta<BranchField>(
  BranchField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const BranchFieldMetaID = new FieldMeta<BranchField>(
  BranchField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this branch or division of an organization.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BranchFieldMetaName = new FieldMeta<BranchField>(
  BranchField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this branch or division of an organization.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BranchFieldMetaFinancialInstitution = new FieldMeta<BranchField>(
  BranchField.FinancialInstitution,
  'FinancialInstitution',
  'Financial Institution',
  FinancialInstitutionType.name,
  'The financial institution that this branch belongs to (if applicable).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const BranchFieldMetaAddress = new FieldMeta<BranchField>(
  BranchField.Address,
  'Address',
  'Address',
  AddressType.name,
  'The address of this branch or division.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class BranchFieldMeta {
  public static readonly UBLExtensions = BranchFieldMetaUBLExtensions
  public static readonly ID = BranchFieldMetaID
  public static readonly Name = BranchFieldMetaName
  public static readonly FinancialInstitution = BranchFieldMetaFinancialInstitution
  public static readonly Address = BranchFieldMetaAddress
}

export const BranchFieldMap = new Map([
  [BranchField.UBLExtensions, BranchFieldMetaUBLExtensions],
  [BranchField.ID, BranchFieldMetaID],
  [BranchField.Name, BranchFieldMetaName],
  [BranchField.FinancialInstitution, BranchFieldMetaFinancialInstitution],
  [BranchField.Address, BranchFieldMetaAddress]
])

export const BranchType: Type<BranchField> = {
  name: 'Branch',
  label: 'Branch',
  module: TypeModule.cac,
  definition: 'A class to describe a branch or a division of an organization.',
  fields: BranchFieldMap,
}
