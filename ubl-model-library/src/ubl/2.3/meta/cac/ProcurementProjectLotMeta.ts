import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ProcurementProjectType } from './ProcurementProjectMeta'
import { TenderingProcessType } from './TenderingProcessMeta'
import { TenderingTermsType } from './TenderingTermsMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaID = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this procurement project lot.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaLegalDocumentReference = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.LegalDocumentReference,
  'LegalDocumentReference',
  'Legal Document Reference',
  DocumentReferenceType.name,
  'A reference to a legal document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaTechnicalDocumentReference = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.TechnicalDocumentReference,
  'TechnicalDocumentReference',
  'Technical Document Reference',
  DocumentReferenceType.name,
  'A reference to a technical document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaRequiredDocumentReference = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.RequiredDocumentReference,
  'RequiredDocumentReference',
  'Required Document Reference',
  DocumentReferenceType.name,
  'A reference to a required document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaProvidedDocumentReference = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.ProvidedDocumentReference,
  'ProvidedDocumentReference',
  'Provided Document Reference',
  DocumentReferenceType.name,
  'A reference to a provided document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaAdditionalDocumentReference = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaTenderingTerms = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.TenderingTerms,
  'TenderingTerms',
  'Tendering Terms',
  TenderingTermsType.name,
  'Tendering terms for this procurement project lot.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaTenderingProcess = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.TenderingProcess,
  'TenderingProcess',
  'Tendering Process',
  TenderingProcessType.name,
  'Tendering process for this procurement project lot.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaProcurementProject = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  ProcurementProjectType.name,
  'A description of the procurement project to be divided.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const ProcurementProjectLotType: Type<ProcurementProjectLotField> = {
  name: 'ProcurementProjectLot',
  label: 'Procurement Project Lot',
  module: TypeModule.cac,
  definition: 'A class to describe one of the parts of a procurement project that is being subdivided to allow the contracting party to award different lots to different economic operators under different contracts.',
  fields: ProcurementProjectLotFieldMap,
}
