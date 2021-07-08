import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { ContractingPartyType } from '../cac/ContractingPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { EconomicOperatorPartyType } from '../cac/EconomicOperatorPartyMeta'
import { EvidenceType } from '../cac/EvidenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { ProcurementProjectType } from '../cac/ProcurementProjectMeta'
import { ProcurementProjectLotType } from '../cac/ProcurementProjectLotMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TenderingCriterionType } from '../cac/TenderingCriterionMeta'
import { TenderingCriterionResponseType } from '../cac/TenderingCriterionResponseMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum QualificationApplicationResponseField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  CopyIndicator = 'CopyIndicator',
  UUID = 'UUID',
  ContractFolderID = 'ContractFolderID',
  ContractName = 'ContractName',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  EconomicOperatorGroupName = 'EconomicOperatorGroupName',
  VersionID = 'VersionID',
  PreviousVersionID = 'PreviousVersionID',
  ProcedureCode = 'ProcedureCode',
  QualificationApplicationTypeCode = 'QualificationApplicationTypeCode',
  WeightScoringMethodologyNote = 'WeightScoringMethodologyNote',
  WeightingTypeCode = 'WeightingTypeCode',
  Note = 'Note',
  ContractingParty = 'ContractingParty',
  EconomicOperatorParty = 'EconomicOperatorParty',
  ProcurementProject = 'ProcurementProject',
  ProcurementProjectLot = 'ProcurementProjectLot',
  TenderingCriterion = 'TenderingCriterion',
  TenderingCriterionResponse = 'TenderingCriterionResponse',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Evidence = 'Evidence',
  Signature = 'Signature'
}

export const QualificationApplicationResponseFieldMetaUBLExtensions = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaUBLVersionID = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const QualificationApplicationResponseFieldMetaCustomizationID = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const QualificationApplicationResponseFieldMetaProfileID = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const QualificationApplicationResponseFieldMetaProfileExecutionID = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const QualificationApplicationResponseFieldMetaID = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaCopyIndicator = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaUUID = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaContractFolderID = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  IdentifierType.name,
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaContractName = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.ContractName,
  'ContractName',
  'Contract Name',
  TextType.name,
  'Short title of a contract associated with this Tender.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaIssueDate = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaIssueTime = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaEconomicOperatorGroupName = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.EconomicOperatorGroupName,
  'EconomicOperatorGroupName',
  'Economic Operator Group Name',
  TextType.name,
  'Economic Operator Group Name associated with this Qualification.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaVersionID = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'Indicates the current version of the Qualification Application Response.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.1'
)

export const QualificationApplicationResponseFieldMetaPreviousVersionID = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.PreviousVersionID,
  'PreviousVersionID',
  'Previous Version',
  IdentifierType.name,
  'Identifies the previous version of the Qualification Application Response which is superceded by this version.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.0'
)

export const QualificationApplicationResponseFieldMetaProcedureCode = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.ProcedureCode,
  'ProcedureCode',
  'Procedure Code',
  CodeType.name,
  'A code signifying the type of this tendering procedure.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Open, Restricted, Negotiated'
)

export const QualificationApplicationResponseFieldMetaQualificationApplicationTypeCode = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.QualificationApplicationTypeCode,
  'QualificationApplicationTypeCode',
  'Qualification Application Type Code',
  CodeType.name,
  'A code specifying the type of the Qualification Application.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '"Regulated", "Self-contained"'
)

export const QualificationApplicationResponseFieldMetaWeightScoringMethodologyNote = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.WeightScoringMethodologyNote,
  'WeightScoringMethodologyNote',
  'Weight Scoring Methodology Note',
  TextType.name,
  'Free-form text to describe Weight Scoring Methodology.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaWeightingTypeCode = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.WeightingTypeCode,
  'WeightingTypeCode',
  'Weighting Type Code',
  CodeType.name,
  'A code specifying the Weighting type',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '"Regulated", "Self-contained"'
)

export const QualificationApplicationResponseFieldMetaNote = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaContractingParty = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  ContractingPartyType.name,
  'The contracting party.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaEconomicOperatorParty = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.EconomicOperatorParty,
  'EconomicOperatorParty',
  'Economic Operator Party',
  EconomicOperatorPartyType.name,
  'The Economic Operator issuing the Qualification Application Response.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaProcurementProject = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  ProcurementProjectType.name,
  'An overall definition of this procurement project.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaProcurementProjectLot = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  ProcurementProjectLotType.name,
  'One of the procurement project lots into which this contract can be split.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaTenderingCriterion = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.TenderingCriterion,
  'TenderingCriterion',
  'Tendering Criterion',
  TenderingCriterionType.name,
  'The criterion as described in the Qualification Application Request.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaTenderingCriterionResponse = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.TenderingCriterionResponse,
  'TenderingCriterionResponse',
  'Tendering Criterion Response',
  TenderingCriterionResponseType.name,
  'Each criterion requirement response.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaAdditionalDocumentReference = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaEvidence = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.Evidence,
  'Evidence',
  'Evidence',
  EvidenceType.name,
  'The evidence supporting this criterion requirement response.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QualificationApplicationResponseFieldMetaSignature = new FieldMeta<QualificationApplicationResponseField>(
  QualificationApplicationResponseField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class QualificationApplicationResponseFieldMeta {
  public static readonly UBLExtensions = QualificationApplicationResponseFieldMetaUBLExtensions
  public static readonly UBLVersionID = QualificationApplicationResponseFieldMetaUBLVersionID
  public static readonly CustomizationID = QualificationApplicationResponseFieldMetaCustomizationID
  public static readonly ProfileID = QualificationApplicationResponseFieldMetaProfileID
  public static readonly ProfileExecutionID = QualificationApplicationResponseFieldMetaProfileExecutionID
  public static readonly ID = QualificationApplicationResponseFieldMetaID
  public static readonly CopyIndicator = QualificationApplicationResponseFieldMetaCopyIndicator
  public static readonly UUID = QualificationApplicationResponseFieldMetaUUID
  public static readonly ContractFolderID = QualificationApplicationResponseFieldMetaContractFolderID
  public static readonly ContractName = QualificationApplicationResponseFieldMetaContractName
  public static readonly IssueDate = QualificationApplicationResponseFieldMetaIssueDate
  public static readonly IssueTime = QualificationApplicationResponseFieldMetaIssueTime
  public static readonly EconomicOperatorGroupName = QualificationApplicationResponseFieldMetaEconomicOperatorGroupName
  public static readonly VersionID = QualificationApplicationResponseFieldMetaVersionID
  public static readonly PreviousVersionID = QualificationApplicationResponseFieldMetaPreviousVersionID
  public static readonly ProcedureCode = QualificationApplicationResponseFieldMetaProcedureCode
  public static readonly QualificationApplicationTypeCode = QualificationApplicationResponseFieldMetaQualificationApplicationTypeCode
  public static readonly WeightScoringMethodologyNote = QualificationApplicationResponseFieldMetaWeightScoringMethodologyNote
  public static readonly WeightingTypeCode = QualificationApplicationResponseFieldMetaWeightingTypeCode
  public static readonly Note = QualificationApplicationResponseFieldMetaNote
  public static readonly ContractingParty = QualificationApplicationResponseFieldMetaContractingParty
  public static readonly EconomicOperatorParty = QualificationApplicationResponseFieldMetaEconomicOperatorParty
  public static readonly ProcurementProject = QualificationApplicationResponseFieldMetaProcurementProject
  public static readonly ProcurementProjectLot = QualificationApplicationResponseFieldMetaProcurementProjectLot
  public static readonly TenderingCriterion = QualificationApplicationResponseFieldMetaTenderingCriterion
  public static readonly TenderingCriterionResponse = QualificationApplicationResponseFieldMetaTenderingCriterionResponse
  public static readonly AdditionalDocumentReference = QualificationApplicationResponseFieldMetaAdditionalDocumentReference
  public static readonly Evidence = QualificationApplicationResponseFieldMetaEvidence
  public static readonly Signature = QualificationApplicationResponseFieldMetaSignature
}

export const QualificationApplicationResponseFieldMap = new Map([
  [QualificationApplicationResponseField.UBLExtensions, QualificationApplicationResponseFieldMetaUBLExtensions],
  [QualificationApplicationResponseField.UBLVersionID, QualificationApplicationResponseFieldMetaUBLVersionID],
  [QualificationApplicationResponseField.CustomizationID, QualificationApplicationResponseFieldMetaCustomizationID],
  [QualificationApplicationResponseField.ProfileID, QualificationApplicationResponseFieldMetaProfileID],
  [QualificationApplicationResponseField.ProfileExecutionID, QualificationApplicationResponseFieldMetaProfileExecutionID],
  [QualificationApplicationResponseField.ID, QualificationApplicationResponseFieldMetaID],
  [QualificationApplicationResponseField.CopyIndicator, QualificationApplicationResponseFieldMetaCopyIndicator],
  [QualificationApplicationResponseField.UUID, QualificationApplicationResponseFieldMetaUUID],
  [QualificationApplicationResponseField.ContractFolderID, QualificationApplicationResponseFieldMetaContractFolderID],
  [QualificationApplicationResponseField.ContractName, QualificationApplicationResponseFieldMetaContractName],
  [QualificationApplicationResponseField.IssueDate, QualificationApplicationResponseFieldMetaIssueDate],
  [QualificationApplicationResponseField.IssueTime, QualificationApplicationResponseFieldMetaIssueTime],
  [QualificationApplicationResponseField.EconomicOperatorGroupName, QualificationApplicationResponseFieldMetaEconomicOperatorGroupName],
  [QualificationApplicationResponseField.VersionID, QualificationApplicationResponseFieldMetaVersionID],
  [QualificationApplicationResponseField.PreviousVersionID, QualificationApplicationResponseFieldMetaPreviousVersionID],
  [QualificationApplicationResponseField.ProcedureCode, QualificationApplicationResponseFieldMetaProcedureCode],
  [QualificationApplicationResponseField.QualificationApplicationTypeCode, QualificationApplicationResponseFieldMetaQualificationApplicationTypeCode],
  [QualificationApplicationResponseField.WeightScoringMethodologyNote, QualificationApplicationResponseFieldMetaWeightScoringMethodologyNote],
  [QualificationApplicationResponseField.WeightingTypeCode, QualificationApplicationResponseFieldMetaWeightingTypeCode],
  [QualificationApplicationResponseField.Note, QualificationApplicationResponseFieldMetaNote],
  [QualificationApplicationResponseField.ContractingParty, QualificationApplicationResponseFieldMetaContractingParty],
  [QualificationApplicationResponseField.EconomicOperatorParty, QualificationApplicationResponseFieldMetaEconomicOperatorParty],
  [QualificationApplicationResponseField.ProcurementProject, QualificationApplicationResponseFieldMetaProcurementProject],
  [QualificationApplicationResponseField.ProcurementProjectLot, QualificationApplicationResponseFieldMetaProcurementProjectLot],
  [QualificationApplicationResponseField.TenderingCriterion, QualificationApplicationResponseFieldMetaTenderingCriterion],
  [QualificationApplicationResponseField.TenderingCriterionResponse, QualificationApplicationResponseFieldMetaTenderingCriterionResponse],
  [QualificationApplicationResponseField.AdditionalDocumentReference, QualificationApplicationResponseFieldMetaAdditionalDocumentReference],
  [QualificationApplicationResponseField.Evidence, QualificationApplicationResponseFieldMetaEvidence],
  [QualificationApplicationResponseField.Signature, QualificationApplicationResponseFieldMetaSignature]
])

export const QualificationApplicationResponseType: Type<QualificationApplicationResponseField> = {
  name: 'QualificationApplicationResponse',
  label: 'Qualification Application Response',
  module: TypeModule.doc,
  definition: 'A document issued by a procurement organization to notify an economic operator whether it has been admitted to or excluded from the tendering process.',
  fields: QualificationApplicationResponseFieldMap,
}
