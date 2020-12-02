import { FieldMeta } from '../FieldMeta'

export enum EconomicOperatorRoleField {
  UBLExtensions = 'UBLExtensions',
  RoleCode = 'RoleCode',
  RoleDescription = 'RoleDescription'
}

export const EconomicOperatorRoleFieldMetaUBLExtensions = new FieldMeta<EconomicOperatorRoleField>(
  EconomicOperatorRoleField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const EconomicOperatorRoleFieldMetaRoleCode = new FieldMeta<EconomicOperatorRoleField>(
  EconomicOperatorRoleField.RoleCode,
  'RoleCode',
  'Role Code',
  'Code',
  'A code specifying the role of the party.',
  '0..1',
  'cbc',
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
  'cbc',
  undefined,
  undefined
)

export class EconomicOperatorRoleFieldMeta {
  public static readonly UBLExtensions = EconomicOperatorRoleFieldMetaUBLExtensions
  public static readonly RoleCode = EconomicOperatorRoleFieldMetaRoleCode
  public static readonly RoleDescription = EconomicOperatorRoleFieldMetaRoleDescription
}

export const EconomicOperatorRoleFieldMap = new Map([
  [EconomicOperatorRoleField.UBLExtensions, EconomicOperatorRoleFieldMetaUBLExtensions],
  [EconomicOperatorRoleField.RoleCode, EconomicOperatorRoleFieldMetaRoleCode],
  [EconomicOperatorRoleField.RoleDescription, EconomicOperatorRoleFieldMetaRoleDescription]
])
