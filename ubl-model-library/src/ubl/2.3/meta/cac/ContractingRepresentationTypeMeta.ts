import { FieldMeta } from '../FieldMeta'

export enum ContractingRepresentationTypeField {
  UBLExtensions = 'UBLExtensions',
  RepresentationTypeCode = 'RepresentationTypeCode',
  RepresentationType = 'RepresentationType'
}

export const ContractingRepresentationTypeFieldMetaUBLExtensions = new FieldMeta<ContractingRepresentationTypeField>(
  ContractingRepresentationTypeField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ContractingRepresentationTypeFieldMetaRepresentationTypeCode = new FieldMeta<ContractingRepresentationTypeField>(
  ContractingRepresentationTypeField.RepresentationTypeCode,
  'RepresentationTypeCode',
  'Representation Type Code',
  'Code',
  'A code specifying the type of representation empowering the party to act on behalf of a third party',
  '0..1',
  'cbc',
  undefined,
  'CPB, SP, ..'
)

export const ContractingRepresentationTypeFieldMetaRepresentationType = new FieldMeta<ContractingRepresentationTypeField>(
  ContractingRepresentationTypeField.RepresentationType,
  'RepresentationType',
  'Representation Type',
  'Text',
  'The type of representation empowering the party to act on behalf of a third party, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  'Central Purchasing Body, Service Provider, ...'
)

export class ContractingRepresentationTypeFieldMeta {
  public static readonly UBLExtensions = ContractingRepresentationTypeFieldMetaUBLExtensions
  public static readonly RepresentationTypeCode = ContractingRepresentationTypeFieldMetaRepresentationTypeCode
  public static readonly RepresentationType = ContractingRepresentationTypeFieldMetaRepresentationType
}

export const ContractingRepresentationTypeFieldMap = new Map([
  [ContractingRepresentationTypeField.UBLExtensions, ContractingRepresentationTypeFieldMetaUBLExtensions],
  [ContractingRepresentationTypeField.RepresentationTypeCode, ContractingRepresentationTypeFieldMetaRepresentationTypeCode],
  [ContractingRepresentationTypeField.RepresentationType, ContractingRepresentationTypeFieldMetaRepresentationType]
])
