import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { EvidenceType } from './EvidenceMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TendererRequirementField {
  UBLExtensions = 'UBLExtensions',
  Name = 'Name',
  TendererRequirementTypeCode = 'TendererRequirementTypeCode',
  Description = 'Description',
  LegalReference = 'LegalReference',
  SuggestedEvidence = 'SuggestedEvidence'
}

export const TendererRequirementFieldMetaUBLExtensions = new FieldMeta<TendererRequirementField>(
  TendererRequirementField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TendererRequirementFieldMetaName = new FieldMeta<TendererRequirementField>(
  TendererRequirementField.Name,
  'Name',
  'Name',
  TextType.name,
  'A name of this tenderer requirement.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererRequirementFieldMetaTendererRequirementTypeCode = new FieldMeta<TendererRequirementField>(
  TendererRequirementField.TendererRequirementTypeCode,
  'TendererRequirementTypeCode',
  'Tenderer Requirement Type Code',
  CodeType.name,
  'A code signifying this requirement.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererRequirementFieldMetaDescription = new FieldMeta<TendererRequirementField>(
  TendererRequirementField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this requirement.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererRequirementFieldMetaLegalReference = new FieldMeta<TendererRequirementField>(
  TendererRequirementField.LegalReference,
  'LegalReference',
  'Legal Reference',
  TextType.name,
  'The legal reference of the exclusion criterion.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Art. 45 2 b'
)

export const TendererRequirementFieldMetaSuggestedEvidence = new FieldMeta<TendererRequirementField>(
  TendererRequirementField.SuggestedEvidence,
  'SuggestedEvidence',
  'Suggested Evidence',
  EvidenceType.name,
  'An item of evidence that should be submitted to satisfy this requirement.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TendererRequirementFieldMeta {
  public static readonly UBLExtensions = TendererRequirementFieldMetaUBLExtensions
  public static readonly Name = TendererRequirementFieldMetaName
  public static readonly TendererRequirementTypeCode = TendererRequirementFieldMetaTendererRequirementTypeCode
  public static readonly Description = TendererRequirementFieldMetaDescription
  public static readonly LegalReference = TendererRequirementFieldMetaLegalReference
  public static readonly SuggestedEvidence = TendererRequirementFieldMetaSuggestedEvidence
}

export const TendererRequirementFieldMap = new Map([
  [TendererRequirementField.UBLExtensions, TendererRequirementFieldMetaUBLExtensions],
  [TendererRequirementField.Name, TendererRequirementFieldMetaName],
  [TendererRequirementField.TendererRequirementTypeCode, TendererRequirementFieldMetaTendererRequirementTypeCode],
  [TendererRequirementField.Description, TendererRequirementFieldMetaDescription],
  [TendererRequirementField.LegalReference, TendererRequirementFieldMetaLegalReference],
  [TendererRequirementField.SuggestedEvidence, TendererRequirementFieldMetaSuggestedEvidence]
])

export const TendererRequirementType: Type<TendererRequirementField> = {
  name: 'TendererRequirement',
  label: 'Tenderer Requirement',
  module: TypeModule.cac,
  definition: 'A class to describe an action or statement required of an economic operator participating in a tendering process.',
  fields: TendererRequirementFieldMap,
}
