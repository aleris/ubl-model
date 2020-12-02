import { FieldMeta } from '../FieldMeta'

export enum TenderRequirementField {
  UBLExtensions = 'UBLExtensions',
  Name = 'Name',
  Description = 'Description',
  TemplateDocumentReference = 'TemplateDocumentReference'
}

export const TenderRequirementFieldMetaUBLExtensions = new FieldMeta<TenderRequirementField>(
  TenderRequirementField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TenderRequirementFieldMetaName = new FieldMeta<TenderRequirementField>(
  TenderRequirementField.Name,
  'Name',
  'Name',
  'Text',
  'A name of this tender requirement.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const TenderRequirementFieldMetaDescription = new FieldMeta<TenderRequirementField>(
  TenderRequirementField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this tender requirement.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TenderRequirementFieldMetaTemplateDocumentReference = new FieldMeta<TenderRequirementField>(
  TenderRequirementField.TemplateDocumentReference,
  'TemplateDocumentReference',
  'Template Document Reference',
  'DocumentReference',
  'A reference to the template for a required document.',
  '0..1',
  'cac',
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
