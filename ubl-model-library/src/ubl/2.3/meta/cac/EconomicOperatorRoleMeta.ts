import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum EconomicOperatorRoleField {
  UBLExtensions = 'UBLExtensions',
  RoleCode = 'RoleCode',
  RoleDescription = 'RoleDescription'
}

export const EconomicOperatorRoleFieldMetaUBLExtensions = new FieldMeta<EconomicOperatorRoleField>(
  EconomicOperatorRoleField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EconomicOperatorRoleFieldMetaRoleCode = new FieldMeta<EconomicOperatorRoleField>(
  EconomicOperatorRoleField.RoleCode,
  'RoleCode',
  'Role Code',
  CodeType.name,
  'A code specifying the role of the party.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EconomicOperatorRoleFieldMetaRoleDescription = new FieldMeta<EconomicOperatorRoleField>(
  EconomicOperatorRoleField.RoleDescription,
  'RoleDescription',
  'Role Description',
  TextType.name,
  'A textual description of the party role.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
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

export const EconomicOperatorRoleType: Type<EconomicOperatorRoleField> = {
  name: 'EconomicOperatorRole',
  label: 'Economic Operator Role',
  module: TypeModule.cac,
  definition: 'A class to describe the tenderer contracting role.',
  fields: EconomicOperatorRoleFieldMap,
}
