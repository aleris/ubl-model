import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ContractingSystemField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  ContractingSystemTypeCode = 'ContractingSystemTypeCode',
  Description = 'Description'
}

export const ContractingSystemFieldMetaUBLExtensions = new FieldMeta<ContractingSystemField>(
  ContractingSystemField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ContractingSystemFieldMetaID = new FieldMeta<ContractingSystemField>(
  ContractingSystemField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for the contracting system.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractingSystemFieldMetaContractingSystemTypeCode = new FieldMeta<ContractingSystemField>(
  ContractingSystemField.ContractingSystemTypeCode,
  'ContractingSystemTypeCode',
  'Contracting System Type',
  CodeType.name,
  'A code signifying the type of contracting system (e.g., framework agreement, dynamic purchasing system).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractingSystemFieldMetaDescription = new FieldMeta<ContractingSystemField>(
  ContractingSystemField.Description,
  'Description',
  'Description',
  TextType.name,
  'The description of the contracting system',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class ContractingSystemFieldMeta {
  public static readonly UBLExtensions = ContractingSystemFieldMetaUBLExtensions
  public static readonly ID = ContractingSystemFieldMetaID
  public static readonly ContractingSystemTypeCode = ContractingSystemFieldMetaContractingSystemTypeCode
  public static readonly Description = ContractingSystemFieldMetaDescription
}

export const ContractingSystemFieldMap = new Map([
  [ContractingSystemField.UBLExtensions, ContractingSystemFieldMetaUBLExtensions],
  [ContractingSystemField.ID, ContractingSystemFieldMetaID],
  [ContractingSystemField.ContractingSystemTypeCode, ContractingSystemFieldMetaContractingSystemTypeCode],
  [ContractingSystemField.Description, ContractingSystemFieldMetaDescription]
])

export const ContractingSystemType: Type<ContractingSystemField> = {
  name: 'ContractingSystem',
  label: 'Contracting System',
  module: TypeModule.cac,
  definition: 'A class to describe the contracting system. If the procedure is individual (nonrepetitive), this class should not be used.',
  fields: ContractingSystemFieldMap,
}
