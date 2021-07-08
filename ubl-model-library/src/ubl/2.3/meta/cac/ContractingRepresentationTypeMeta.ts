import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ContractingRepresentationTypeField {
  UBLExtensions = 'UBLExtensions',
  RepresentationTypeCode = 'RepresentationTypeCode',
  RepresentationType = 'RepresentationType'
}

export const ContractingRepresentationTypeFieldMetaUBLExtensions = new FieldMeta<ContractingRepresentationTypeField>(
  ContractingRepresentationTypeField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ContractingRepresentationTypeFieldMetaRepresentationTypeCode = new FieldMeta<ContractingRepresentationTypeField>(
  ContractingRepresentationTypeField.RepresentationTypeCode,
  'RepresentationTypeCode',
  'Representation Type Code',
  CodeType.name,
  'A code specifying the type of representation empowering the party to act on behalf of a third party',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'CPB, SP, ..'
)

export const ContractingRepresentationTypeFieldMetaRepresentationType = new FieldMeta<ContractingRepresentationTypeField>(
  ContractingRepresentationTypeField.RepresentationType,
  'RepresentationType',
  'Representation Type',
  TextType.name,
  'The type of representation empowering the party to act on behalf of a third party, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
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

export const ContractingRepresentationTypeType: Type<ContractingRepresentationTypeField> = {
  name: 'ContractingRepresentationType',
  label: 'Contracting Representation Type',
  module: TypeModule.cac,
  definition: 'The type of representation the party has acting for the Contracting party',
  fields: ContractingRepresentationTypeFieldMap,
}
