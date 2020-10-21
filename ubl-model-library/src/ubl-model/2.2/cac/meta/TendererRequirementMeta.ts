import { FieldMeta } from '../../FieldMeta'

export enum TendererRequirementField {
  Name = 'Name',
  TendererRequirementTypeCode = 'TendererRequirementTypeCode',
  Description = 'Description',
  LegalReference = 'LegalReference',
  SuggestedEvidence = 'SuggestedEvidence'
}

export const TendererRequirementFieldMetaName = new FieldMeta<TendererRequirementField>(
  TendererRequirementField.Name,
  'Name',
  'Name',
  'Text',
  'A name of this tenderer requirement.',
  '0..n',
  undefined,
  undefined
)

export const TendererRequirementFieldMetaTendererRequirementTypeCode = new FieldMeta<TendererRequirementField>(
  TendererRequirementField.TendererRequirementTypeCode,
  'TendererRequirementTypeCode',
  'Type Code',
  'Code',
  'A code signifying this requirement.',
  '0..1',
  undefined,
  undefined
)

export const TendererRequirementFieldMetaDescription = new FieldMeta<TendererRequirementField>(
  TendererRequirementField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this requirement.',
  '0..n',
  undefined,
  undefined
)

export const TendererRequirementFieldMetaLegalReference = new FieldMeta<TendererRequirementField>(
  TendererRequirementField.LegalReference,
  'LegalReference',
  'Legal Reference',
  'Text',
  'The legal reference of the exclusion criterion.',
  '0..1',
  undefined,
  'Art. 45 2 b'
)

export const TendererRequirementFieldMetaSuggestedEvidence = new FieldMeta<TendererRequirementField>(
  TendererRequirementField.SuggestedEvidence,
  'SuggestedEvidence',
  'Evidence',
  'Evidence',
  'An item of evidence that should be submitted to satisfy this requirement.',
  '0..n',
  undefined,
  undefined
)

export class TendererRequirementFieldMeta {
  public static readonly Name = TendererRequirementFieldMetaName
  public static readonly TendererRequirementTypeCode = TendererRequirementFieldMetaTendererRequirementTypeCode
  public static readonly Description = TendererRequirementFieldMetaDescription
  public static readonly LegalReference = TendererRequirementFieldMetaLegalReference
  public static readonly SuggestedEvidence = TendererRequirementFieldMetaSuggestedEvidence
}

export const TendererRequirementFieldMap = new Map([
  [TendererRequirementField.Name, TendererRequirementFieldMetaName],
  [TendererRequirementField.TendererRequirementTypeCode, TendererRequirementFieldMetaTendererRequirementTypeCode],
  [TendererRequirementField.Description, TendererRequirementFieldMetaDescription],
  [TendererRequirementField.LegalReference, TendererRequirementFieldMetaLegalReference],
  [TendererRequirementField.SuggestedEvidence, TendererRequirementFieldMetaSuggestedEvidence]
])
