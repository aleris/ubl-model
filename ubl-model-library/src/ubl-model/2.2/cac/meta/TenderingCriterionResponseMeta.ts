import { FieldMeta } from '../../FieldMeta'

export enum TenderingCriterionResponseField {
  ID = 'ID',
  Name = 'Name',
  Description = 'Description',
  ValidatedCriterionPropertyID = 'ValidatedCriterionPropertyID',
  ConfidentialityLevelCode = 'ConfidentialityLevelCode',
  ResponseValue = 'ResponseValue',
  ApplicablePeriod = 'ApplicablePeriod',
  EvidenceSupplied = 'EvidenceSupplied'
}

export const TenderingCriterionResponseFieldMetaID = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this criterion property response.',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionResponseFieldMetaName = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.Name,
  'Name',
  'Name',
  'Text',
  'The name of the criterion property response',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionResponseFieldMetaDescription = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.Description,
  'Description',
  'Description',
  'Text',
  'A description of the criterion response',
  '0..n',
  undefined,
  undefined
)

export const TenderingCriterionResponseFieldMetaValidatedCriterionPropertyID = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.ValidatedCriterionPropertyID,
  'ValidatedCriterionPropertyID',
  'Validated Criterion Property Identifier',
  'Identifier',
  'An identifier for this item of criterion support.',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionResponseFieldMetaConfidentialityLevelCode = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.ConfidentialityLevelCode,
  'ConfidentialityLevelCode',
  'Confidentiality Level Code',
  'Code',
  'A code specifying the confidentiality level of the response to this criterion.',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionResponseFieldMetaResponseValue = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.ResponseValue,
  'ResponseValue',
  'Response Value',
  'ResponseValue',
  'The criterion requirement property values.',
  '0..n',
  undefined,
  undefined
)

export const TenderingCriterionResponseFieldMetaApplicablePeriod = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.ApplicablePeriod,
  'ApplicablePeriod',
  'Period',
  'Period',
  'The period to which this criterion property response applies.',
  '0..n',
  undefined,
  undefined
)

export const TenderingCriterionResponseFieldMetaEvidenceSupplied = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.EvidenceSupplied,
  'EvidenceSupplied',
  'Evidence Supplied',
  'EvidenceSupplied',
  'A reference to the evidence supporting this criterion property response.',
  '0..n',
  undefined,
  undefined
)

export class TenderingCriterionResponseFieldMeta {
  public static readonly ID = TenderingCriterionResponseFieldMetaID
  public static readonly Name = TenderingCriterionResponseFieldMetaName
  public static readonly Description = TenderingCriterionResponseFieldMetaDescription
  public static readonly ValidatedCriterionPropertyID = TenderingCriterionResponseFieldMetaValidatedCriterionPropertyID
  public static readonly ConfidentialityLevelCode = TenderingCriterionResponseFieldMetaConfidentialityLevelCode
  public static readonly ResponseValue = TenderingCriterionResponseFieldMetaResponseValue
  public static readonly ApplicablePeriod = TenderingCriterionResponseFieldMetaApplicablePeriod
  public static readonly EvidenceSupplied = TenderingCriterionResponseFieldMetaEvidenceSupplied
}

export const TenderingCriterionResponseFieldMap = new Map([
  [TenderingCriterionResponseField.ID, TenderingCriterionResponseFieldMetaID],
  [TenderingCriterionResponseField.Name, TenderingCriterionResponseFieldMetaName],
  [TenderingCriterionResponseField.Description, TenderingCriterionResponseFieldMetaDescription],
  [TenderingCriterionResponseField.ValidatedCriterionPropertyID, TenderingCriterionResponseFieldMetaValidatedCriterionPropertyID],
  [TenderingCriterionResponseField.ConfidentialityLevelCode, TenderingCriterionResponseFieldMetaConfidentialityLevelCode],
  [TenderingCriterionResponseField.ResponseValue, TenderingCriterionResponseFieldMetaResponseValue],
  [TenderingCriterionResponseField.ApplicablePeriod, TenderingCriterionResponseFieldMetaApplicablePeriod],
  [TenderingCriterionResponseField.EvidenceSupplied, TenderingCriterionResponseFieldMetaEvidenceSupplied]
])
