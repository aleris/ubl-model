import { FieldMeta } from '../../FieldMeta'

export enum BranchField {
  ID = 'ID',
  Name = 'Name',
  FinancialInstitution = 'FinancialInstitution',
  Address = 'Address'
}

export const BranchFieldMetaID = new FieldMeta<BranchField>(
  BranchField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this branch or division of an organization.',
  '0..1',
  undefined,
  undefined
)

export const BranchFieldMetaName = new FieldMeta<BranchField>(
  BranchField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this branch or division of an organization.',
  '0..1',
  undefined,
  undefined
)

export const BranchFieldMetaFinancialInstitution = new FieldMeta<BranchField>(
  BranchField.FinancialInstitution,
  'FinancialInstitution',
  'Financial Institution',
  'FinancialInstitution',
  'The financial institution that this branch belongs to (if applicable).',
  '0..1',
  undefined,
  undefined
)

export const BranchFieldMetaAddress = new FieldMeta<BranchField>(
  BranchField.Address,
  'Address',
  'Address',
  'Address',
  'The address of this branch or division.',
  '0..1',
  undefined,
  undefined
)

export class BranchFieldMeta {
  public static readonly ID = BranchFieldMetaID
  public static readonly Name = BranchFieldMetaName
  public static readonly FinancialInstitution = BranchFieldMetaFinancialInstitution
  public static readonly Address = BranchFieldMetaAddress
}

export const BranchFieldMap = new Map([
  [BranchField.ID, BranchFieldMetaID],
  [BranchField.Name, BranchFieldMetaName],
  [BranchField.FinancialInstitution, BranchFieldMetaFinancialInstitution],
  [BranchField.Address, BranchFieldMetaAddress]
])
