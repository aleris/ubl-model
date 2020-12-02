import { FieldMeta } from '../FieldMeta'

export enum ProcurementProjectLotField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  LegalDocumentReference = 'LegalDocumentReference',
  TechnicalDocumentReference = 'TechnicalDocumentReference',
  RequiredDocumentReference = 'RequiredDocumentReference',
  ProvidedDocumentReference = 'ProvidedDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  TenderingTerms = 'TenderingTerms',
  TenderingProcess = 'TenderingProcess',
  ProcurementProject = 'ProcurementProject'
}

export const ProcurementProjectLotFieldMetaUBLExtensions = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaID = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this procurement project lot.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaLegalDocumentReference = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.LegalDocumentReference,
  'LegalDocumentReference',
  'Legal Document Reference',
  'DocumentReference',
  'A reference to a legal document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaTechnicalDocumentReference = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.TechnicalDocumentReference,
  'TechnicalDocumentReference',
  'Technical Document Reference',
  'DocumentReference',
  'A reference to a technical document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaRequiredDocumentReference = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.RequiredDocumentReference,
  'RequiredDocumentReference',
  'Required Document Reference',
  'DocumentReference',
  'A reference to a required document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaProvidedDocumentReference = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.ProvidedDocumentReference,
  'ProvidedDocumentReference',
  'Provided Document Reference',
  'DocumentReference',
  'A reference to a provided document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaAdditionalDocumentReference = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaTenderingTerms = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.TenderingTerms,
  'TenderingTerms',
  'Tendering Terms',
  'TenderingTerms',
  'Tendering terms for this procurement project lot.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaTenderingProcess = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.TenderingProcess,
  'TenderingProcess',
  'Tendering Process',
  'TenderingProcess',
  'Tendering process for this procurement project lot.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaProcurementProject = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  'ProcurementProject',
  'A description of the procurement project to be divided.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class ProcurementProjectLotFieldMeta {
  public static readonly UBLExtensions = ProcurementProjectLotFieldMetaUBLExtensions
  public static readonly ID = ProcurementProjectLotFieldMetaID
  public static readonly LegalDocumentReference = ProcurementProjectLotFieldMetaLegalDocumentReference
  public static readonly TechnicalDocumentReference = ProcurementProjectLotFieldMetaTechnicalDocumentReference
  public static readonly RequiredDocumentReference = ProcurementProjectLotFieldMetaRequiredDocumentReference
  public static readonly ProvidedDocumentReference = ProcurementProjectLotFieldMetaProvidedDocumentReference
  public static readonly AdditionalDocumentReference = ProcurementProjectLotFieldMetaAdditionalDocumentReference
  public static readonly TenderingTerms = ProcurementProjectLotFieldMetaTenderingTerms
  public static readonly TenderingProcess = ProcurementProjectLotFieldMetaTenderingProcess
  public static readonly ProcurementProject = ProcurementProjectLotFieldMetaProcurementProject
}

export const ProcurementProjectLotFieldMap = new Map([
  [ProcurementProjectLotField.UBLExtensions, ProcurementProjectLotFieldMetaUBLExtensions],
  [ProcurementProjectLotField.ID, ProcurementProjectLotFieldMetaID],
  [ProcurementProjectLotField.LegalDocumentReference, ProcurementProjectLotFieldMetaLegalDocumentReference],
  [ProcurementProjectLotField.TechnicalDocumentReference, ProcurementProjectLotFieldMetaTechnicalDocumentReference],
  [ProcurementProjectLotField.RequiredDocumentReference, ProcurementProjectLotFieldMetaRequiredDocumentReference],
  [ProcurementProjectLotField.ProvidedDocumentReference, ProcurementProjectLotFieldMetaProvidedDocumentReference],
  [ProcurementProjectLotField.AdditionalDocumentReference, ProcurementProjectLotFieldMetaAdditionalDocumentReference],
  [ProcurementProjectLotField.TenderingTerms, ProcurementProjectLotFieldMetaTenderingTerms],
  [ProcurementProjectLotField.TenderingProcess, ProcurementProjectLotFieldMetaTenderingProcess],
  [ProcurementProjectLotField.ProcurementProject, ProcurementProjectLotFieldMetaProcurementProject]
])
