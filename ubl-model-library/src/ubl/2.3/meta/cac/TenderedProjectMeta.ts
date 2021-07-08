import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { AwardingCriterionResponseType } from './AwardingCriterionResponseMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { FeeType } from './FeeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { MonetaryTotalType } from './MonetaryTotalMeta'
import { ProcurementProjectLotType } from './ProcurementProjectLotMeta'
import { TaxTotalType } from './TaxTotalMeta'
import { TenderLineType } from './TenderLineMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TenderedProjectField {
  UBLExtensions = 'UBLExtensions',
  VariantID = 'VariantID',
  FeeAmount = 'FeeAmount',
  FeeDescription = 'FeeDescription',
  TenderEnvelopeID = 'TenderEnvelopeID',
  TenderEnvelopeTypeCode = 'TenderEnvelopeTypeCode',
  ProcurementProjectLot = 'ProcurementProjectLot',
  EvidenceDocumentReference = 'EvidenceDocumentReference',
  TaxTotal = 'TaxTotal',
  LegalMonetaryTotal = 'LegalMonetaryTotal',
  TenderLine = 'TenderLine',
  AwardingCriterionResponse = 'AwardingCriterionResponse',
  AdditionalFee = 'AdditionalFee'
}

export const TenderedProjectFieldMetaUBLExtensions = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TenderedProjectFieldMetaVariantID = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.VariantID,
  'VariantID',
  'Variant',
  IdentifierType.name,
  'An identifier for this variant of a tendered project.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderedProjectFieldMetaFeeAmount = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.FeeAmount,
  'FeeAmount',
  'Fee',
  AmountType.name,
  'The fee amount for tendered projects.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderedProjectFieldMetaFeeDescription = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.FeeDescription,
  'FeeDescription',
  'Fee Description',
  TextType.name,
  'Text describing the fee amount for tendered projects.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderedProjectFieldMetaTenderEnvelopeID = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.TenderEnvelopeID,
  'TenderEnvelopeID',
  'Tender Envelope Identifier',
  IdentifierType.name,
  'An identifier for the tender envelope this tendered project belongs to.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderedProjectFieldMetaTenderEnvelopeTypeCode = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.TenderEnvelopeTypeCode,
  'TenderEnvelopeTypeCode',
  'Tender Envelope Type Code',
  CodeType.name,
  'A code signifying the type of tender envelope this tendered project belongs to.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderedProjectFieldMetaProcurementProjectLot = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  ProcurementProjectLotType.name,
  'The procurement project lot to which this Tender Line refers to. If there are no lots, this should not be defined.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderedProjectFieldMetaEvidenceDocumentReference = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.EvidenceDocumentReference,
  'EvidenceDocumentReference',
  'Evidence Document Reference',
  DocumentReferenceType.name,
  'A reference to a non-structured evidentiary document supporting this tendered project.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderedProjectFieldMetaTaxTotal = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'A total amount of taxes of a particular kind applicable to the monetary total for this tendered project.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderedProjectFieldMetaLegalMonetaryTotal = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.LegalMonetaryTotal,
  'LegalMonetaryTotal',
  'Legal Monetary Total',
  MonetaryTotalType.name,
  'The total amount for this tendered project.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderedProjectFieldMetaTenderLine = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.TenderLine,
  'TenderLine',
  'Tender Line',
  TenderLineType.name,
  'A line in the tender for this tendered project.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderedProjectFieldMetaAwardingCriterionResponse = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.AwardingCriterionResponse,
  'AwardingCriterionResponse',
  'Awarding Criterion Response',
  AwardingCriterionResponseType.name,
  'An association to an Awarding Criterion Response.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderedProjectFieldMetaAdditionalFee = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.AdditionalFee,
  'AdditionalFee',
  'Additional Fee',
  FeeType.name,
  'An additional fee for this tendered project.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TenderedProjectFieldMeta {
  public static readonly UBLExtensions = TenderedProjectFieldMetaUBLExtensions
  public static readonly VariantID = TenderedProjectFieldMetaVariantID
  public static readonly FeeAmount = TenderedProjectFieldMetaFeeAmount
  public static readonly FeeDescription = TenderedProjectFieldMetaFeeDescription
  public static readonly TenderEnvelopeID = TenderedProjectFieldMetaTenderEnvelopeID
  public static readonly TenderEnvelopeTypeCode = TenderedProjectFieldMetaTenderEnvelopeTypeCode
  public static readonly ProcurementProjectLot = TenderedProjectFieldMetaProcurementProjectLot
  public static readonly EvidenceDocumentReference = TenderedProjectFieldMetaEvidenceDocumentReference
  public static readonly TaxTotal = TenderedProjectFieldMetaTaxTotal
  public static readonly LegalMonetaryTotal = TenderedProjectFieldMetaLegalMonetaryTotal
  public static readonly TenderLine = TenderedProjectFieldMetaTenderLine
  public static readonly AwardingCriterionResponse = TenderedProjectFieldMetaAwardingCriterionResponse
  public static readonly AdditionalFee = TenderedProjectFieldMetaAdditionalFee
}

export const TenderedProjectFieldMap = new Map([
  [TenderedProjectField.UBLExtensions, TenderedProjectFieldMetaUBLExtensions],
  [TenderedProjectField.VariantID, TenderedProjectFieldMetaVariantID],
  [TenderedProjectField.FeeAmount, TenderedProjectFieldMetaFeeAmount],
  [TenderedProjectField.FeeDescription, TenderedProjectFieldMetaFeeDescription],
  [TenderedProjectField.TenderEnvelopeID, TenderedProjectFieldMetaTenderEnvelopeID],
  [TenderedProjectField.TenderEnvelopeTypeCode, TenderedProjectFieldMetaTenderEnvelopeTypeCode],
  [TenderedProjectField.ProcurementProjectLot, TenderedProjectFieldMetaProcurementProjectLot],
  [TenderedProjectField.EvidenceDocumentReference, TenderedProjectFieldMetaEvidenceDocumentReference],
  [TenderedProjectField.TaxTotal, TenderedProjectFieldMetaTaxTotal],
  [TenderedProjectField.LegalMonetaryTotal, TenderedProjectFieldMetaLegalMonetaryTotal],
  [TenderedProjectField.TenderLine, TenderedProjectFieldMetaTenderLine],
  [TenderedProjectField.AwardingCriterionResponse, TenderedProjectFieldMetaAwardingCriterionResponse],
  [TenderedProjectField.AdditionalFee, TenderedProjectFieldMetaAdditionalFee]
])

export const TenderedProjectType: Type<TenderedProjectField> = {
  name: 'TenderedProject',
  label: 'Tendered Project',
  module: TypeModule.cac,
  definition: 'A class to describe a tendered project or project lot.',
  fields: TenderedProjectFieldMap,
}
