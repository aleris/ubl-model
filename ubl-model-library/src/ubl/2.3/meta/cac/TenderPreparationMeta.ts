import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { EncryptionDataType } from './EncryptionDataMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ProcurementProjectLotType } from './ProcurementProjectLotMeta'
import { TenderRequirementType } from './TenderRequirementMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TenderPreparationField {
  UBLExtensions = 'UBLExtensions',
  TenderEnvelopeID = 'TenderEnvelopeID',
  TenderEnvelopeTypeCode = 'TenderEnvelopeTypeCode',
  Description = 'Description',
  OpenTenderID = 'OpenTenderID',
  ProcurementProjectLot = 'ProcurementProjectLot',
  DocumentTenderRequirement = 'DocumentTenderRequirement',
  TenderEncryptionData = 'TenderEncryptionData'
}

export const TenderPreparationFieldMetaUBLExtensions = new FieldMeta<TenderPreparationField>(
  TenderPreparationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TenderPreparationFieldMetaTenderEnvelopeID = new FieldMeta<TenderPreparationField>(
  TenderPreparationField.TenderEnvelopeID,
  'TenderEnvelopeID',
  'Tender Envelope Identifier',
  IdentifierType.name,
  'An identifier for the tender envelope to be used with the tender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderPreparationFieldMetaTenderEnvelopeTypeCode = new FieldMeta<TenderPreparationField>(
  TenderPreparationField.TenderEnvelopeTypeCode,
  'TenderEnvelopeTypeCode',
  'Tender Envelope Type Code',
  CodeType.name,
  'A code signifying the type of tender envelope (economical or objective criteria versus technical or subjective criteria).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderPreparationFieldMetaDescription = new FieldMeta<TenderPreparationField>(
  TenderPreparationField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the tender envelope.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderPreparationFieldMetaOpenTenderID = new FieldMeta<TenderPreparationField>(
  TenderPreparationField.OpenTenderID,
  'OpenTenderID',
  'Open Tender Identifier',
  IdentifierType.name,
  'An identifier for the open tender associated with this tender preparation.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderPreparationFieldMetaProcurementProjectLot = new FieldMeta<TenderPreparationField>(
  TenderPreparationField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  ProcurementProjectLotType.name,
  'The procurement project lot associated with a particular tenderer.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderPreparationFieldMetaDocumentTenderRequirement = new FieldMeta<TenderPreparationField>(
  TenderPreparationField.DocumentTenderRequirement,
  'DocumentTenderRequirement',
  'Document Tender Requirement',
  TenderRequirementType.name,
  'A reference to the template for a required document in a tendering process.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  'Curricula required, Experience required, ....'
)

export const TenderPreparationFieldMetaTenderEncryptionData = new FieldMeta<TenderPreparationField>(
  TenderPreparationField.TenderEncryptionData,
  'TenderEncryptionData',
  'Tender Encryption Data',
  EncryptionDataType.name,
  'A reference to the details of the encryption process used for the tender.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TenderPreparationFieldMeta {
  public static readonly UBLExtensions = TenderPreparationFieldMetaUBLExtensions
  public static readonly TenderEnvelopeID = TenderPreparationFieldMetaTenderEnvelopeID
  public static readonly TenderEnvelopeTypeCode = TenderPreparationFieldMetaTenderEnvelopeTypeCode
  public static readonly Description = TenderPreparationFieldMetaDescription
  public static readonly OpenTenderID = TenderPreparationFieldMetaOpenTenderID
  public static readonly ProcurementProjectLot = TenderPreparationFieldMetaProcurementProjectLot
  public static readonly DocumentTenderRequirement = TenderPreparationFieldMetaDocumentTenderRequirement
  public static readonly TenderEncryptionData = TenderPreparationFieldMetaTenderEncryptionData
}

export const TenderPreparationFieldMap = new Map([
  [TenderPreparationField.UBLExtensions, TenderPreparationFieldMetaUBLExtensions],
  [TenderPreparationField.TenderEnvelopeID, TenderPreparationFieldMetaTenderEnvelopeID],
  [TenderPreparationField.TenderEnvelopeTypeCode, TenderPreparationFieldMetaTenderEnvelopeTypeCode],
  [TenderPreparationField.Description, TenderPreparationFieldMetaDescription],
  [TenderPreparationField.OpenTenderID, TenderPreparationFieldMetaOpenTenderID],
  [TenderPreparationField.ProcurementProjectLot, TenderPreparationFieldMetaProcurementProjectLot],
  [TenderPreparationField.DocumentTenderRequirement, TenderPreparationFieldMetaDocumentTenderRequirement],
  [TenderPreparationField.TenderEncryptionData, TenderPreparationFieldMetaTenderEncryptionData]
])

export const TenderPreparationType: Type<TenderPreparationField> = {
  name: 'TenderPreparation',
  label: 'Tender Preparation',
  module: TypeModule.cac,
  definition: 'A class to describe directions for preparing a tender.',
  fields: TenderPreparationFieldMap,
}
