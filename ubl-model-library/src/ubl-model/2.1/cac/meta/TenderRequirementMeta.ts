import { FieldMeta } from '../../FieldMeta'

export enum TenderRequirementField {
  Name = 'Name',
  Description = 'Description',
  TemplateDocumentReference = 'TemplateDocumentReference'
}

export const TenderRequirementFieldMetaName = new FieldMeta<TenderRequirementField>(
  TenderRequirementField.Name,
  'Name',
  'Name',
  'Text',
  'A name of this tender requirement.',
  '1',
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
  undefined,
  undefined
)

export const TenderRequirementFieldMetaTemplateDocumentReference = new FieldMeta<TenderRequirementField>(
  TenderRequirementField.TemplateDocumentReference,
  'TemplateDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to the template for a required document.',
  '0..1',
  undefined,
  undefined
)

export class TenderRequirementFieldMeta {
  public static readonly Name = TenderRequirementFieldMetaName
  public static readonly Description = TenderRequirementFieldMetaDescription
  public static readonly TemplateDocumentReference = TenderRequirementFieldMetaTemplateDocumentReference
}

export const TenderRequirementFieldMap = new Map([
  [TenderRequirementField.Name, TenderRequirementFieldMetaName],
  [TenderRequirementField.Description, TenderRequirementFieldMetaDescription],
  [TenderRequirementField.TemplateDocumentReference, TenderRequirementFieldMetaTemplateDocumentReference]
])
