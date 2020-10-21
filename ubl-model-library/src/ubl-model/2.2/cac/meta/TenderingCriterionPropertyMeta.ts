import { FieldMeta } from '../../FieldMeta'

export enum TenderingCriterionPropertyField {
  ID = 'ID',
  Name = 'Name',
  Description = 'Description',
  TypeCode = 'TypeCode',
  ValueDataTypeCode = 'ValueDataTypeCode',
  ValueUnitCode = 'ValueUnitCode',
  ValueCurrencyCode = 'ValueCurrencyCode',
  ExpectedAmount = 'ExpectedAmount',
  ExpectedID = 'ExpectedID',
  ExpectedCode = 'ExpectedCode',
  ExpectedValueNumeric = 'ExpectedValueNumeric',
  ExpectedDescription = 'ExpectedDescription',
  MaximumAmount = 'MaximumAmount',
  MinimumAmount = 'MinimumAmount',
  MaximumValueNumeric = 'MaximumValueNumeric',
  MinimumValueNumeric = 'MinimumValueNumeric',
  TranslationTypeCode = 'TranslationTypeCode',
  CertificationLevelDescription = 'CertificationLevelDescription',
  CopyQualityTypeCode = 'CopyQualityTypeCode',
  ApplicablePeriod = 'ApplicablePeriod',
  TemplateEvidence = 'TemplateEvidence'
}

export const TenderingCriterionPropertyFieldMetaID = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier to refer to the criterion property.',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaName = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.Name,
  'Name',
  'Name',
  'Text',
  'The name of the criterion property.',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaDescription = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.Description,
  'Description',
  'Description',
  'Text',
  'A description of the criterion property.',
  '0..n',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaTypeCode = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.TypeCode,
  'TypeCode',
  'Type Code',
  'Code',
  'A mutually agreed code signifying the type of the property.',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaValueDataTypeCode = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ValueDataTypeCode,
  'ValueDataTypeCode',
  'Value Data Type Code',
  'Code',
  'The data type of the numeric value and any constraints on the data type metadata.',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaValueUnitCode = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ValueUnitCode,
  'ValueUnitCode',
  'Value Unit Code',
  'Code',
  'The unit of measure of the numeric value as a quantity or measure.',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaValueCurrencyCode = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ValueCurrencyCode,
  'ValueCurrencyCode',
  'Value Currency Code',
  'Code',
  'The currency of the numeric value as an amount.',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaExpectedAmount = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ExpectedAmount,
  'ExpectedAmount',
  'Amount',
  'Amount',
  'The expected amount that the responder has to provide in the criterion response.',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaExpectedID = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ExpectedID,
  'ExpectedID',
  'Identifier',
  'Identifier',
  'The expected identifier that the responder has to provide in the criterion response.',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaExpectedCode = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ExpectedCode,
  'ExpectedCode',
  'Code',
  'Code',
  'The expected code that the responder has to provide in the criterion response.',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaExpectedValueNumeric = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ExpectedValueNumeric,
  'ExpectedValueNumeric',
  'Value',
  'Numeric',
  'The expected value that the responder has to provide in the criterion response.',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaExpectedDescription = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ExpectedDescription,
  'ExpectedDescription',
  'Description',
  'Text',
  'The description of the of the expected',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaMaximumAmount = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.MaximumAmount,
  'MaximumAmount',
  'Amount',
  'Amount',
  'The maximum amount the response must have.',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaMinimumAmount = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.MinimumAmount,
  'MinimumAmount',
  'Amount',
  'Amount',
  'The minimum amount the response must have.',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaMaximumValueNumeric = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.MaximumValueNumeric,
  'MaximumValueNumeric',
  'Value',
  'Numeric',
  'The maximum value the response must have.',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaMinimumValueNumeric = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.MinimumValueNumeric,
  'MinimumValueNumeric',
  'Value',
  'Numeric',
  'The minimum value the response must have.',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaTranslationTypeCode = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.TranslationTypeCode,
  'TranslationTypeCode',
  'Translation Type Code',
  'Code',
  'The type of Transation that the requirement shall be translated for example certified translation',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaCertificationLevelDescription = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.CertificationLevelDescription,
  'CertificationLevelDescription',
  'Certification Level Description',
  'Text',
  'The description of the level of the expected certification',
  '0..n',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaCopyQualityTypeCode = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.CopyQualityTypeCode,
  'CopyQualityTypeCode',
  'Copy Quality Type Code',
  'Code',
  'The type of Copy quality, expressed as a code.',
  '0..1',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaApplicablePeriod = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ApplicablePeriod,
  'ApplicablePeriod',
  'Period',
  'Period',
  'The period to which this criterion property shall apply.',
  '0..n',
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaTemplateEvidence = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.TemplateEvidence,
  'TemplateEvidence',
  'Evidence',
  'Evidence',
  'An evidence that can be used to meet this criterion property.',
  '0..n',
  undefined,
  undefined
)

export class TenderingCriterionPropertyFieldMeta {
  public static readonly ID = TenderingCriterionPropertyFieldMetaID
  public static readonly Name = TenderingCriterionPropertyFieldMetaName
  public static readonly Description = TenderingCriterionPropertyFieldMetaDescription
  public static readonly TypeCode = TenderingCriterionPropertyFieldMetaTypeCode
  public static readonly ValueDataTypeCode = TenderingCriterionPropertyFieldMetaValueDataTypeCode
  public static readonly ValueUnitCode = TenderingCriterionPropertyFieldMetaValueUnitCode
  public static readonly ValueCurrencyCode = TenderingCriterionPropertyFieldMetaValueCurrencyCode
  public static readonly ExpectedAmount = TenderingCriterionPropertyFieldMetaExpectedAmount
  public static readonly ExpectedID = TenderingCriterionPropertyFieldMetaExpectedID
  public static readonly ExpectedCode = TenderingCriterionPropertyFieldMetaExpectedCode
  public static readonly ExpectedValueNumeric = TenderingCriterionPropertyFieldMetaExpectedValueNumeric
  public static readonly ExpectedDescription = TenderingCriterionPropertyFieldMetaExpectedDescription
  public static readonly MaximumAmount = TenderingCriterionPropertyFieldMetaMaximumAmount
  public static readonly MinimumAmount = TenderingCriterionPropertyFieldMetaMinimumAmount
  public static readonly MaximumValueNumeric = TenderingCriterionPropertyFieldMetaMaximumValueNumeric
  public static readonly MinimumValueNumeric = TenderingCriterionPropertyFieldMetaMinimumValueNumeric
  public static readonly TranslationTypeCode = TenderingCriterionPropertyFieldMetaTranslationTypeCode
  public static readonly CertificationLevelDescription = TenderingCriterionPropertyFieldMetaCertificationLevelDescription
  public static readonly CopyQualityTypeCode = TenderingCriterionPropertyFieldMetaCopyQualityTypeCode
  public static readonly ApplicablePeriod = TenderingCriterionPropertyFieldMetaApplicablePeriod
  public static readonly TemplateEvidence = TenderingCriterionPropertyFieldMetaTemplateEvidence
}

export const TenderingCriterionPropertyFieldMap = new Map([
  [TenderingCriterionPropertyField.ID, TenderingCriterionPropertyFieldMetaID],
  [TenderingCriterionPropertyField.Name, TenderingCriterionPropertyFieldMetaName],
  [TenderingCriterionPropertyField.Description, TenderingCriterionPropertyFieldMetaDescription],
  [TenderingCriterionPropertyField.TypeCode, TenderingCriterionPropertyFieldMetaTypeCode],
  [TenderingCriterionPropertyField.ValueDataTypeCode, TenderingCriterionPropertyFieldMetaValueDataTypeCode],
  [TenderingCriterionPropertyField.ValueUnitCode, TenderingCriterionPropertyFieldMetaValueUnitCode],
  [TenderingCriterionPropertyField.ValueCurrencyCode, TenderingCriterionPropertyFieldMetaValueCurrencyCode],
  [TenderingCriterionPropertyField.ExpectedAmount, TenderingCriterionPropertyFieldMetaExpectedAmount],
  [TenderingCriterionPropertyField.ExpectedID, TenderingCriterionPropertyFieldMetaExpectedID],
  [TenderingCriterionPropertyField.ExpectedCode, TenderingCriterionPropertyFieldMetaExpectedCode],
  [TenderingCriterionPropertyField.ExpectedValueNumeric, TenderingCriterionPropertyFieldMetaExpectedValueNumeric],
  [TenderingCriterionPropertyField.ExpectedDescription, TenderingCriterionPropertyFieldMetaExpectedDescription],
  [TenderingCriterionPropertyField.MaximumAmount, TenderingCriterionPropertyFieldMetaMaximumAmount],
  [TenderingCriterionPropertyField.MinimumAmount, TenderingCriterionPropertyFieldMetaMinimumAmount],
  [TenderingCriterionPropertyField.MaximumValueNumeric, TenderingCriterionPropertyFieldMetaMaximumValueNumeric],
  [TenderingCriterionPropertyField.MinimumValueNumeric, TenderingCriterionPropertyFieldMetaMinimumValueNumeric],
  [TenderingCriterionPropertyField.TranslationTypeCode, TenderingCriterionPropertyFieldMetaTranslationTypeCode],
  [TenderingCriterionPropertyField.CertificationLevelDescription, TenderingCriterionPropertyFieldMetaCertificationLevelDescription],
  [TenderingCriterionPropertyField.CopyQualityTypeCode, TenderingCriterionPropertyFieldMetaCopyQualityTypeCode],
  [TenderingCriterionPropertyField.ApplicablePeriod, TenderingCriterionPropertyFieldMetaApplicablePeriod],
  [TenderingCriterionPropertyField.TemplateEvidence, TenderingCriterionPropertyFieldMetaTemplateEvidence]
])
