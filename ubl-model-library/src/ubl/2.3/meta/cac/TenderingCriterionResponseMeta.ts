import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CommodityClassificationType } from './CommodityClassificationMeta'
import { EvidenceSuppliedType } from './EvidenceSuppliedMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PeriodType } from './PeriodMeta'
import { ProcurementProjectLotReferenceType } from './ProcurementProjectLotReferenceMeta'
import { ResponseValueType } from './ResponseValueMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TenderingCriterionResponseField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Name = 'Name',
  Description = 'Description',
  ValidatedCriterionPropertyID = 'ValidatedCriterionPropertyID',
  ConfidentialityLevelCode = 'ConfidentialityLevelCode',
  ResponseValue = 'ResponseValue',
  ApplicablePeriod = 'ApplicablePeriod',
  EvidenceSupplied = 'EvidenceSupplied',
  ProcurementProjectLotReference = 'ProcurementProjectLotReference',
  CommodityClassification = 'CommodityClassification'
}

export const TenderingCriterionResponseFieldMetaUBLExtensions = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TenderingCriterionResponseFieldMetaID = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this criterion property response.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionResponseFieldMetaName = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of the criterion property response',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionResponseFieldMetaDescription = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.Description,
  'Description',
  'Description',
  TextType.name,
  'A description of the criterion response',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionResponseFieldMetaValidatedCriterionPropertyID = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.ValidatedCriterionPropertyID,
  'ValidatedCriterionPropertyID',
  'Validated Criterion Property Identifier',
  IdentifierType.name,
  'An identifier for this item of criterion support.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionResponseFieldMetaConfidentialityLevelCode = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.ConfidentialityLevelCode,
  'ConfidentialityLevelCode',
  'Confidentiality Level Code',
  CodeType.name,
  'A code specifying the confidentiality level of the response to this criterion.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionResponseFieldMetaResponseValue = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.ResponseValue,
  'ResponseValue',
  'Response Value',
  ResponseValueType.name,
  'The criterion requirement property values.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingCriterionResponseFieldMetaApplicablePeriod = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.ApplicablePeriod,
  'ApplicablePeriod',
  'Applicable Period',
  PeriodType.name,
  'The period to which this criterion property response applies.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingCriterionResponseFieldMetaEvidenceSupplied = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.EvidenceSupplied,
  'EvidenceSupplied',
  'Evidence Supplied',
  EvidenceSuppliedType.name,
  'A reference to the evidence supporting this criterion property response.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingCriterionResponseFieldMetaProcurementProjectLotReference = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.ProcurementProjectLotReference,
  'ProcurementProjectLotReference',
  'Procurement Project Lot Reference',
  ProcurementProjectLotReferenceType.name,
  'One or more lots to which the criterion response applies',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingCriterionResponseFieldMetaCommodityClassification = new FieldMeta<TenderingCriterionResponseField>(
  TenderingCriterionResponseField.CommodityClassification,
  'CommodityClassification',
  'Commodity Classification',
  CommodityClassificationType.name,
  'One or more classification to which this criterion response applies',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TenderingCriterionResponseFieldMeta {
  public static readonly UBLExtensions = TenderingCriterionResponseFieldMetaUBLExtensions
  public static readonly ID = TenderingCriterionResponseFieldMetaID
  public static readonly Name = TenderingCriterionResponseFieldMetaName
  public static readonly Description = TenderingCriterionResponseFieldMetaDescription
  public static readonly ValidatedCriterionPropertyID = TenderingCriterionResponseFieldMetaValidatedCriterionPropertyID
  public static readonly ConfidentialityLevelCode = TenderingCriterionResponseFieldMetaConfidentialityLevelCode
  public static readonly ResponseValue = TenderingCriterionResponseFieldMetaResponseValue
  public static readonly ApplicablePeriod = TenderingCriterionResponseFieldMetaApplicablePeriod
  public static readonly EvidenceSupplied = TenderingCriterionResponseFieldMetaEvidenceSupplied
  public static readonly ProcurementProjectLotReference = TenderingCriterionResponseFieldMetaProcurementProjectLotReference
  public static readonly CommodityClassification = TenderingCriterionResponseFieldMetaCommodityClassification
}

export const TenderingCriterionResponseFieldMap = new Map([
  [TenderingCriterionResponseField.UBLExtensions, TenderingCriterionResponseFieldMetaUBLExtensions],
  [TenderingCriterionResponseField.ID, TenderingCriterionResponseFieldMetaID],
  [TenderingCriterionResponseField.Name, TenderingCriterionResponseFieldMetaName],
  [TenderingCriterionResponseField.Description, TenderingCriterionResponseFieldMetaDescription],
  [TenderingCriterionResponseField.ValidatedCriterionPropertyID, TenderingCriterionResponseFieldMetaValidatedCriterionPropertyID],
  [TenderingCriterionResponseField.ConfidentialityLevelCode, TenderingCriterionResponseFieldMetaConfidentialityLevelCode],
  [TenderingCriterionResponseField.ResponseValue, TenderingCriterionResponseFieldMetaResponseValue],
  [TenderingCriterionResponseField.ApplicablePeriod, TenderingCriterionResponseFieldMetaApplicablePeriod],
  [TenderingCriterionResponseField.EvidenceSupplied, TenderingCriterionResponseFieldMetaEvidenceSupplied],
  [TenderingCriterionResponseField.ProcurementProjectLotReference, TenderingCriterionResponseFieldMetaProcurementProjectLotReference],
  [TenderingCriterionResponseField.CommodityClassification, TenderingCriterionResponseFieldMetaCommodityClassification]
])

export const TenderingCriterionResponseType: Type<TenderingCriterionResponseField> = {
  name: 'TenderingCriterionResponse',
  label: 'Tendering Criterion Response',
  module: TypeModule.cac,
  definition: 'A class to describe a response to a criterion property.',
  fields: TenderingCriterionResponseFieldMap,
}
