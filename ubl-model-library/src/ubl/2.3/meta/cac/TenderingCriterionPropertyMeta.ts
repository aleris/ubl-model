import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { EvidenceType } from './EvidenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PeriodType } from './PeriodMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TenderingCriterionPropertyField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Name = 'Name',
  Description = 'Description',
  TypeCode = 'TypeCode',
  ValueDataTypeCode = 'ValueDataTypeCode',
  ValueUnitCode = 'ValueUnitCode',
  ValueCurrencyCode = 'ValueCurrencyCode',
  ExpectedAmount = 'ExpectedAmount',
  ExpectedID = 'ExpectedID',
  ExpectedIndicator = 'ExpectedIndicator',
  ExpectedCode = 'ExpectedCode',
  ExpectedValueNumeric = 'ExpectedValueNumeric',
  ExpectedDescription = 'ExpectedDescription',
  ExpectedURI = 'ExpectedURI',
  MaximumAmount = 'MaximumAmount',
  MinimumAmount = 'MinimumAmount',
  MaximumValueNumeric = 'MaximumValueNumeric',
  MinimumValueNumeric = 'MinimumValueNumeric',
  MaximumQuantity = 'MaximumQuantity',
  MinimumQuantity = 'MinimumQuantity',
  TranslationTypeCode = 'TranslationTypeCode',
  CertificationLevelDescription = 'CertificationLevelDescription',
  CopyQualityTypeCode = 'CopyQualityTypeCode',
  ApplicablePeriod = 'ApplicablePeriod',
  TemplateEvidence = 'TemplateEvidence'
}

export const TenderingCriterionPropertyFieldMetaUBLExtensions = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaID = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier to refer to the criterion property.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaName = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of the criterion property.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaDescription = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.Description,
  'Description',
  'Description',
  TextType.name,
  'A description of the criterion property.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaTypeCode = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.TypeCode,
  'TypeCode',
  'Type Code',
  CodeType.name,
  'A mutually agreed code signifying the type of the property.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaValueDataTypeCode = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ValueDataTypeCode,
  'ValueDataTypeCode',
  'Value Data Type Code',
  CodeType.name,
  'The data type of the numeric value and any constraints on the data type metadata.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaValueUnitCode = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ValueUnitCode,
  'ValueUnitCode',
  'Value Unit Code',
  CodeType.name,
  'The unit of measure of the numeric value as a quantity or measure.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaValueCurrencyCode = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ValueCurrencyCode,
  'ValueCurrencyCode',
  'Value Currency Code',
  CodeType.name,
  'The currency of the numeric value as an amount.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaExpectedAmount = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ExpectedAmount,
  'ExpectedAmount',
  'Expected Amount',
  AmountType.name,
  'The expected amount that the responder has to provide in the criterion response.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaExpectedID = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ExpectedID,
  'ExpectedID',
  'Expected Identifier',
  IdentifierType.name,
  'The expected identifier that the responder has to provide in the criterion response.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaExpectedIndicator = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ExpectedIndicator,
  'ExpectedIndicator',
  'Expected Indicator',
  IndicatorType.name,
  'The expected indicator (true or false) that the responder has to provide in the criterion response.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaExpectedCode = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ExpectedCode,
  'ExpectedCode',
  'Expected Code',
  CodeType.name,
  'The expected code that the responder has to provide in the criterion response.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaExpectedValueNumeric = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ExpectedValueNumeric,
  'ExpectedValueNumeric',
  'Expected Value',
  NumericType.name,
  'The expected value that the responder has to provide in the criterion response.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaExpectedDescription = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ExpectedDescription,
  'ExpectedDescription',
  'Expected Description',
  TextType.name,
  'The description of the of the expected',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaExpectedURI = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ExpectedURI,
  'ExpectedURI',
  'Expected URI',
  IdentifierType.name,
  'The expected URL that the responder has to provide in the criterion response.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaMaximumAmount = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.MaximumAmount,
  'MaximumAmount',
  'Maximum Amount',
  AmountType.name,
  'The maximum amount the response must have.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaMinimumAmount = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.MinimumAmount,
  'MinimumAmount',
  'Minimum Amount',
  AmountType.name,
  'The minimum amount the response must have.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaMaximumValueNumeric = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.MaximumValueNumeric,
  'MaximumValueNumeric',
  'Maximum Value',
  NumericType.name,
  'The maximum value the response must have.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaMinimumValueNumeric = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.MinimumValueNumeric,
  'MinimumValueNumeric',
  'Minimum Value',
  NumericType.name,
  'The minimum value the response must have.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaMaximumQuantity = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.MaximumQuantity,
  'MaximumQuantity',
  'Maximum Quantity',
  QuantityType.name,
  'The maximum quantity value the response must have.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaMinimumQuantity = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.MinimumQuantity,
  'MinimumQuantity',
  'Minimum Quantity',
  QuantityType.name,
  'The minimum quantity value the response must have.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaTranslationTypeCode = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.TranslationTypeCode,
  'TranslationTypeCode',
  'Translation Type Code',
  CodeType.name,
  'The type of Transation that the requirement shall be translated for example certified translation',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaCertificationLevelDescription = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.CertificationLevelDescription,
  'CertificationLevelDescription',
  'Certification Level Description',
  TextType.name,
  'The description of the level of the expected certification',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaCopyQualityTypeCode = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.CopyQualityTypeCode,
  'CopyQualityTypeCode',
  'Copy Quality Type Code',
  CodeType.name,
  'The type of Copy quality, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaApplicablePeriod = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.ApplicablePeriod,
  'ApplicablePeriod',
  'Applicable Period',
  PeriodType.name,
  'The period to which this criterion property shall apply.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingCriterionPropertyFieldMetaTemplateEvidence = new FieldMeta<TenderingCriterionPropertyField>(
  TenderingCriterionPropertyField.TemplateEvidence,
  'TemplateEvidence',
  'Template Evidence',
  EvidenceType.name,
  'An evidence that can be used to meet this criterion property.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TenderingCriterionPropertyFieldMeta {
  public static readonly UBLExtensions = TenderingCriterionPropertyFieldMetaUBLExtensions
  public static readonly ID = TenderingCriterionPropertyFieldMetaID
  public static readonly Name = TenderingCriterionPropertyFieldMetaName
  public static readonly Description = TenderingCriterionPropertyFieldMetaDescription
  public static readonly TypeCode = TenderingCriterionPropertyFieldMetaTypeCode
  public static readonly ValueDataTypeCode = TenderingCriterionPropertyFieldMetaValueDataTypeCode
  public static readonly ValueUnitCode = TenderingCriterionPropertyFieldMetaValueUnitCode
  public static readonly ValueCurrencyCode = TenderingCriterionPropertyFieldMetaValueCurrencyCode
  public static readonly ExpectedAmount = TenderingCriterionPropertyFieldMetaExpectedAmount
  public static readonly ExpectedID = TenderingCriterionPropertyFieldMetaExpectedID
  public static readonly ExpectedIndicator = TenderingCriterionPropertyFieldMetaExpectedIndicator
  public static readonly ExpectedCode = TenderingCriterionPropertyFieldMetaExpectedCode
  public static readonly ExpectedValueNumeric = TenderingCriterionPropertyFieldMetaExpectedValueNumeric
  public static readonly ExpectedDescription = TenderingCriterionPropertyFieldMetaExpectedDescription
  public static readonly ExpectedURI = TenderingCriterionPropertyFieldMetaExpectedURI
  public static readonly MaximumAmount = TenderingCriterionPropertyFieldMetaMaximumAmount
  public static readonly MinimumAmount = TenderingCriterionPropertyFieldMetaMinimumAmount
  public static readonly MaximumValueNumeric = TenderingCriterionPropertyFieldMetaMaximumValueNumeric
  public static readonly MinimumValueNumeric = TenderingCriterionPropertyFieldMetaMinimumValueNumeric
  public static readonly MaximumQuantity = TenderingCriterionPropertyFieldMetaMaximumQuantity
  public static readonly MinimumQuantity = TenderingCriterionPropertyFieldMetaMinimumQuantity
  public static readonly TranslationTypeCode = TenderingCriterionPropertyFieldMetaTranslationTypeCode
  public static readonly CertificationLevelDescription = TenderingCriterionPropertyFieldMetaCertificationLevelDescription
  public static readonly CopyQualityTypeCode = TenderingCriterionPropertyFieldMetaCopyQualityTypeCode
  public static readonly ApplicablePeriod = TenderingCriterionPropertyFieldMetaApplicablePeriod
  public static readonly TemplateEvidence = TenderingCriterionPropertyFieldMetaTemplateEvidence
}

export const TenderingCriterionPropertyFieldMap = new Map([
  [TenderingCriterionPropertyField.UBLExtensions, TenderingCriterionPropertyFieldMetaUBLExtensions],
  [TenderingCriterionPropertyField.ID, TenderingCriterionPropertyFieldMetaID],
  [TenderingCriterionPropertyField.Name, TenderingCriterionPropertyFieldMetaName],
  [TenderingCriterionPropertyField.Description, TenderingCriterionPropertyFieldMetaDescription],
  [TenderingCriterionPropertyField.TypeCode, TenderingCriterionPropertyFieldMetaTypeCode],
  [TenderingCriterionPropertyField.ValueDataTypeCode, TenderingCriterionPropertyFieldMetaValueDataTypeCode],
  [TenderingCriterionPropertyField.ValueUnitCode, TenderingCriterionPropertyFieldMetaValueUnitCode],
  [TenderingCriterionPropertyField.ValueCurrencyCode, TenderingCriterionPropertyFieldMetaValueCurrencyCode],
  [TenderingCriterionPropertyField.ExpectedAmount, TenderingCriterionPropertyFieldMetaExpectedAmount],
  [TenderingCriterionPropertyField.ExpectedID, TenderingCriterionPropertyFieldMetaExpectedID],
  [TenderingCriterionPropertyField.ExpectedIndicator, TenderingCriterionPropertyFieldMetaExpectedIndicator],
  [TenderingCriterionPropertyField.ExpectedCode, TenderingCriterionPropertyFieldMetaExpectedCode],
  [TenderingCriterionPropertyField.ExpectedValueNumeric, TenderingCriterionPropertyFieldMetaExpectedValueNumeric],
  [TenderingCriterionPropertyField.ExpectedDescription, TenderingCriterionPropertyFieldMetaExpectedDescription],
  [TenderingCriterionPropertyField.ExpectedURI, TenderingCriterionPropertyFieldMetaExpectedURI],
  [TenderingCriterionPropertyField.MaximumAmount, TenderingCriterionPropertyFieldMetaMaximumAmount],
  [TenderingCriterionPropertyField.MinimumAmount, TenderingCriterionPropertyFieldMetaMinimumAmount],
  [TenderingCriterionPropertyField.MaximumValueNumeric, TenderingCriterionPropertyFieldMetaMaximumValueNumeric],
  [TenderingCriterionPropertyField.MinimumValueNumeric, TenderingCriterionPropertyFieldMetaMinimumValueNumeric],
  [TenderingCriterionPropertyField.MaximumQuantity, TenderingCriterionPropertyFieldMetaMaximumQuantity],
  [TenderingCriterionPropertyField.MinimumQuantity, TenderingCriterionPropertyFieldMetaMinimumQuantity],
  [TenderingCriterionPropertyField.TranslationTypeCode, TenderingCriterionPropertyFieldMetaTranslationTypeCode],
  [TenderingCriterionPropertyField.CertificationLevelDescription, TenderingCriterionPropertyFieldMetaCertificationLevelDescription],
  [TenderingCriterionPropertyField.CopyQualityTypeCode, TenderingCriterionPropertyFieldMetaCopyQualityTypeCode],
  [TenderingCriterionPropertyField.ApplicablePeriod, TenderingCriterionPropertyFieldMetaApplicablePeriod],
  [TenderingCriterionPropertyField.TemplateEvidence, TenderingCriterionPropertyFieldMetaTemplateEvidence]
])

export const TenderingCriterionPropertyType: Type<TenderingCriterionPropertyField> = {
  name: 'TenderingCriterionProperty',
  label: 'Tendering Criterion Property',
  module: TypeModule.cac,
  definition: 'A class to describe the criterion properties.',
  fields: TenderingCriterionPropertyFieldMap,
}
