import { FieldMeta } from '../FieldMeta'

export enum ContractingSystemField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  ContractingSystemTypeCode = 'ContractingSystemTypeCode',
  Description = 'Description'
}

export const ContractingSystemFieldMetaUBLExtensions = new FieldMeta<ContractingSystemField>(
  ContractingSystemField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ContractingSystemFieldMetaID = new FieldMeta<ContractingSystemField>(
  ContractingSystemField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the contracting system.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractingSystemFieldMetaContractingSystemTypeCode = new FieldMeta<ContractingSystemField>(
  ContractingSystemField.ContractingSystemTypeCode,
  'ContractingSystemTypeCode',
  'Contracting System Type',
  'Code',
  'A code signifying the type of contracting system (e.g., framework agreement, dynamic purchasing system).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractingSystemFieldMetaDescription = new FieldMeta<ContractingSystemField>(
  ContractingSystemField.Description,
  'Description',
  'Description',
  'Text',
  'The description of the contracting system',
  '0..n',
  'cbc',
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
