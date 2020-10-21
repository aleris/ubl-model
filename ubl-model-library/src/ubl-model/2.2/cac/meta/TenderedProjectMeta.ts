import { FieldMeta } from '../../FieldMeta'

export enum TenderedProjectField {
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
  AwardingCriterionResponse = 'AwardingCriterionResponse'
}

export const TenderedProjectFieldMetaVariantID = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.VariantID,
  'VariantID',
  'Variant',
  'Identifier',
  'An identifier for this variant of a tendered project.',
  '0..1',
  undefined,
  undefined
)

export const TenderedProjectFieldMetaFeeAmount = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.FeeAmount,
  'FeeAmount',
  'Fee',
  'Amount',
  'The fee amount for tendered projects.',
  '0..1',
  undefined,
  undefined
)

export const TenderedProjectFieldMetaFeeDescription = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.FeeDescription,
  'FeeDescription',
  'Description',
  'Text',
  'Text describing the fee amount for tendered projects.',
  '0..n',
  undefined,
  undefined
)

export const TenderedProjectFieldMetaTenderEnvelopeID = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.TenderEnvelopeID,
  'TenderEnvelopeID',
  'Tender Envelope Identifier',
  'Identifier',
  'An identifier for the tender envelope this tendered project belongs to.',
  '0..1',
  undefined,
  undefined
)

export const TenderedProjectFieldMetaTenderEnvelopeTypeCode = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.TenderEnvelopeTypeCode,
  'TenderEnvelopeTypeCode',
  'Tender Envelope Type Code',
  'Code',
  'A code signifying the type of tender envelope this tendered project belongs to.',
  '0..1',
  undefined,
  undefined
)

export const TenderedProjectFieldMetaProcurementProjectLot = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  'ProcurementProjectLot',
  'The procurement project lot to which this Tender Line refers to. If there are no lots, this should not be defined.',
  '0..1',
  undefined,
  undefined
)

export const TenderedProjectFieldMetaEvidenceDocumentReference = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.EvidenceDocumentReference,
  'EvidenceDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a non-structured evidentiary document supporting this tendered project.',
  '0..n',
  undefined,
  undefined
)

export const TenderedProjectFieldMetaTaxTotal = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'A total amount of taxes of a particular kind applicable to the monetary total for this tendered project.',
  '0..n',
  undefined,
  undefined
)

export const TenderedProjectFieldMetaLegalMonetaryTotal = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.LegalMonetaryTotal,
  'LegalMonetaryTotal',
  'Monetary Total',
  'MonetaryTotal',
  'The total amount for this tendered project.',
  '0..1',
  undefined,
  undefined
)

export const TenderedProjectFieldMetaTenderLine = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.TenderLine,
  'TenderLine',
  'Tender Line',
  'TenderLine',
  'A line in the tender for this tendered project.',
  '0..n',
  undefined,
  undefined
)

export const TenderedProjectFieldMetaAwardingCriterionResponse = new FieldMeta<TenderedProjectField>(
  TenderedProjectField.AwardingCriterionResponse,
  'AwardingCriterionResponse',
  'Awarding Criterion Response',
  'AwardingCriterionResponse',
  'An association to an Awarding Criterion Response.',
  '0..n',
  undefined,
  undefined
)

export class TenderedProjectFieldMeta {
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
}

export const TenderedProjectFieldMap = new Map([
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
  [TenderedProjectField.AwardingCriterionResponse, TenderedProjectFieldMetaAwardingCriterionResponse]
])
