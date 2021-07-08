import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { EvidenceSuppliedType } from './EvidenceSuppliedMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DeclarationField {
  UBLExtensions = 'UBLExtensions',
  Name = 'Name',
  DeclarationTypeCode = 'DeclarationTypeCode',
  Description = 'Description',
  EvidenceSupplied = 'EvidenceSupplied'
}

export const DeclarationFieldMetaUBLExtensions = new FieldMeta<DeclarationField>(
  DeclarationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DeclarationFieldMetaName = new FieldMeta<DeclarationField>(
  DeclarationField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this declaration.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DeclarationFieldMetaDeclarationTypeCode = new FieldMeta<DeclarationField>(
  DeclarationField.DeclarationTypeCode,
  'DeclarationTypeCode',
  'Declaration Type Code',
  CodeType.name,
  'A code signifying the type of this declaration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DeclarationFieldMetaDescription = new FieldMeta<DeclarationField>(
  DeclarationField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this declaration.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DeclarationFieldMetaEvidenceSupplied = new FieldMeta<DeclarationField>(
  DeclarationField.EvidenceSupplied,
  'EvidenceSupplied',
  'Evidence Supplied',
  EvidenceSuppliedType.name,
  'The evidence supporting this declaration.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class DeclarationFieldMeta {
  public static readonly UBLExtensions = DeclarationFieldMetaUBLExtensions
  public static readonly Name = DeclarationFieldMetaName
  public static readonly DeclarationTypeCode = DeclarationFieldMetaDeclarationTypeCode
  public static readonly Description = DeclarationFieldMetaDescription
  public static readonly EvidenceSupplied = DeclarationFieldMetaEvidenceSupplied
}

export const DeclarationFieldMap = new Map([
  [DeclarationField.UBLExtensions, DeclarationFieldMetaUBLExtensions],
  [DeclarationField.Name, DeclarationFieldMetaName],
  [DeclarationField.DeclarationTypeCode, DeclarationFieldMetaDeclarationTypeCode],
  [DeclarationField.Description, DeclarationFieldMetaDescription],
  [DeclarationField.EvidenceSupplied, DeclarationFieldMetaEvidenceSupplied]
])

export const DeclarationType: Type<DeclarationField> = {
  name: 'Declaration',
  label: 'Declaration',
  module: TypeModule.cac,
  definition: 'A class to describe a declaration by an economic operator of certain characteristics or capabilities in fulfilment of requirements specified in a call for tenders.',
  fields: DeclarationFieldMap,
}
