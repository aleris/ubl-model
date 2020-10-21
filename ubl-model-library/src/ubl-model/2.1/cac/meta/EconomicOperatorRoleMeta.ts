import { FieldMeta } from '../../FieldMeta'

export enum EconomicOperatorRoleField {
  RoleCode = 'RoleCode',
  RoleDescription = 'RoleDescription'
}

export const EconomicOperatorRoleFieldMetaRoleCode = new FieldMeta<EconomicOperatorRoleField>(
  EconomicOperatorRoleField.RoleCode,
  'RoleCode',
  'Role Code',
  'Code',
  'A code specifying the role of the party.',
  '0..1',
  undefined,
  undefined
)

export const EconomicOperatorRoleFieldMetaRoleDescription = new FieldMeta<EconomicOperatorRoleField>(
  EconomicOperatorRoleField.RoleDescription,
  'RoleDescription',
  'Role Description',
  'Text',
  'A textual description of the party role.',
  '0..n',
  undefined,
  undefined
)

export class EconomicOperatorRoleFieldMeta {
  public static readonly RoleCode = EconomicOperatorRoleFieldMetaRoleCode
  public static readonly RoleDescription = EconomicOperatorRoleFieldMetaRoleDescription
}

export const EconomicOperatorRoleFieldMap = new Map([
  [EconomicOperatorRoleField.RoleCode, EconomicOperatorRoleFieldMetaRoleCode],
  [EconomicOperatorRoleField.RoleDescription, EconomicOperatorRoleFieldMetaRoleDescription]
])
