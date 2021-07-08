import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TenderRequirementField {
  UBLExtensions = 'UBLExtensions',
  Name = 'Name',
  Description = 'Description',
  TemplateDocumentReference = 'TemplateDocumentReference'
}

export const TenderRequirementFieldMetaUBLExtensions = new FieldMeta<TenderRequirementField>(
  TenderRequirementField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TenderRequirementFieldMetaName = new FieldMeta<TenderRequirementField>(
  TenderRequirementField.Name,
  'Name',
  'Name',
  TextType.name,
  'A name of this tender requirement.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderRequirementFieldMetaDescription = new FieldMeta<TenderRequirementField>(
  TenderRequirementField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this tender requirement.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderRequirementFieldMetaTemplateDocumentReference = new FieldMeta<TenderRequirementField>(
  TenderRequirementField.TemplateDocumentReference,
  'TemplateDocumentReference',
  'Template Document Reference',
  DocumentReferenceType.name,
  'A reference to the template for a required document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TenderRequirementFieldMeta {
  public static readonly UBLExtensions = TenderRequirementFieldMetaUBLExtensions
  public static readonly Name = TenderRequirementFieldMetaName
  public static readonly Description = TenderRequirementFieldMetaDescription
  public static readonly TemplateDocumentReference = TenderRequirementFieldMetaTemplateDocumentReference
}

export const TenderRequirementFieldMap = new Map([
  [TenderRequirementField.UBLExtensions, TenderRequirementFieldMetaUBLExtensions],
  [TenderRequirementField.Name, TenderRequirementFieldMetaName],
  [TenderRequirementField.Description, TenderRequirementFieldMetaDescription],
  [TenderRequirementField.TemplateDocumentReference, TenderRequirementFieldMetaTemplateDocumentReference]
])

export const TenderRequirementType: Type<TenderRequirementField> = {
  name: 'TenderRequirement',
  label: 'Tender Requirement',
  module: TypeModule.cac,
  definition: 'A template for a required document in a tendering process.',
  fields: TenderRequirementFieldMap,
}
