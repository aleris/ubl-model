import { FieldMeta } from '../../FieldMeta'

export enum FinancialInstitutionField {
  ID = 'ID',
  Name = 'Name',
  Address = 'Address'
}

export const FinancialInstitutionFieldMetaID = new FieldMeta<FinancialInstitutionField>(
  FinancialInstitutionField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this financial institution. It is recommended that the ISO 9362 Bank Identification Code (BIC) be used as the ID.',
  '0..1',
  undefined,
  undefined
)

export const FinancialInstitutionFieldMetaName = new FieldMeta<FinancialInstitutionField>(
  FinancialInstitutionField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this financial institution.',
  '0..1',
  undefined,
  undefined
)

export const FinancialInstitutionFieldMetaAddress = new FieldMeta<FinancialInstitutionField>(
  FinancialInstitutionField.Address,
  'Address',
  'Address',
  'Address',
  'The address of this financial institution.',
  '0..1',
  undefined,
  undefined
)

export class FinancialInstitutionFieldMeta {
  public static readonly ID = FinancialInstitutionFieldMetaID
  public static readonly Name = FinancialInstitutionFieldMetaName
  public static readonly Address = FinancialInstitutionFieldMetaAddress
}

export const FinancialInstitutionFieldMap = new Map([
  [FinancialInstitutionField.ID, FinancialInstitutionFieldMetaID],
  [FinancialInstitutionField.Name, FinancialInstitutionFieldMetaName],
  [FinancialInstitutionField.Address, FinancialInstitutionFieldMetaAddress]
])
