import { FieldMeta } from '../../FieldMeta'

export enum TenderPreparationField {
  TenderEnvelopeID = 'TenderEnvelopeID',
  TenderEnvelopeTypeCode = 'TenderEnvelopeTypeCode',
  Description = 'Description',
  OpenTenderID = 'OpenTenderID',
  ProcurementProjectLot = 'ProcurementProjectLot',
  DocumentTenderRequirement = 'DocumentTenderRequirement'
}

export const TenderPreparationFieldMetaTenderEnvelopeID = new FieldMeta<TenderPreparationField>(
  TenderPreparationField.TenderEnvelopeID,
  'TenderEnvelopeID',
  'Tender Envelope Identifier',
  'Identifier',
  'An identifier for the tender envelope to be used with the tender.',
  '1',
  undefined,
  undefined
)

export const TenderPreparationFieldMetaTenderEnvelopeTypeCode = new FieldMeta<TenderPreparationField>(
  TenderPreparationField.TenderEnvelopeTypeCode,
  'TenderEnvelopeTypeCode',
  'Tender Envelope Type Code',
  'Code',
  'A code signifying the type of tender envelope (economical or objective criteria versus technical or subjective criteria).',
  '0..1',
  undefined,
  undefined
)

export const TenderPreparationFieldMetaDescription = new FieldMeta<TenderPreparationField>(
  TenderPreparationField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the tender envelope.',
  '0..n',
  undefined,
  undefined
)

export const TenderPreparationFieldMetaOpenTenderID = new FieldMeta<TenderPreparationField>(
  TenderPreparationField.OpenTenderID,
  'OpenTenderID',
  'Open Tender Identifier',
  'Identifier',
  'An identifier for the open tender associated with this tender preparation.',
  '0..1',
  undefined,
  undefined
)

export const TenderPreparationFieldMetaProcurementProjectLot = new FieldMeta<TenderPreparationField>(
  TenderPreparationField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  'ProcurementProjectLot',
  'The procurement project lot associated with a particular tenderer.',
  '0..n',
  undefined,
  undefined
)

export const TenderPreparationFieldMetaDocumentTenderRequirement = new FieldMeta<TenderPreparationField>(
  TenderPreparationField.DocumentTenderRequirement,
  'DocumentTenderRequirement',
  'Tender Requirement',
  'TenderRequirement',
  'A reference to the template for a required document in a tendering process.',
  '0..n',
  undefined,
  'Curricula required, Experience required, ....'
)

export class TenderPreparationFieldMeta {
  public static readonly TenderEnvelopeID = TenderPreparationFieldMetaTenderEnvelopeID
  public static readonly TenderEnvelopeTypeCode = TenderPreparationFieldMetaTenderEnvelopeTypeCode
  public static readonly Description = TenderPreparationFieldMetaDescription
  public static readonly OpenTenderID = TenderPreparationFieldMetaOpenTenderID
  public static readonly ProcurementProjectLot = TenderPreparationFieldMetaProcurementProjectLot
  public static readonly DocumentTenderRequirement = TenderPreparationFieldMetaDocumentTenderRequirement
}

export const TenderPreparationFieldMap = new Map([
  [TenderPreparationField.TenderEnvelopeID, TenderPreparationFieldMetaTenderEnvelopeID],
  [TenderPreparationField.TenderEnvelopeTypeCode, TenderPreparationFieldMetaTenderEnvelopeTypeCode],
  [TenderPreparationField.Description, TenderPreparationFieldMetaDescription],
  [TenderPreparationField.OpenTenderID, TenderPreparationFieldMetaOpenTenderID],
  [TenderPreparationField.ProcurementProjectLot, TenderPreparationFieldMetaProcurementProjectLot],
  [TenderPreparationField.DocumentTenderRequirement, TenderPreparationFieldMetaDocumentTenderRequirement]
])
