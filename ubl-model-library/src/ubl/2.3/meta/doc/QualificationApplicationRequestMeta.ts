import { FieldMeta } from '../FieldMeta'

export enum QualificationApplicationRequestField {
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
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature'
}

export const QualificationApplicationRequestFieldMetaUBLExtensions = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const QualificationApplicationRequestFieldMetaUBLVersionID = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const QualificationApplicationRequestFieldMetaCustomizationID = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const QualificationApplicationRequestFieldMetaProfileID = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const QualificationApplicationRequestFieldMetaProfileExecutionID = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const QualificationApplicationRequestFieldMetaID = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const QualificationApplicationRequestFieldMetaCopyIndicator = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const QualificationApplicationRequestFieldMetaUUID = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const QualificationApplicationRequestFieldMetaContractFolderID = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  'Identifier',
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const QualificationApplicationRequestFieldMetaContractName = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.ContractName,
  'ContractName',
  'Contract Name',
  'Text',
  'Short title of a contract associated with this Tender.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const QualificationApplicationRequestFieldMetaIssueDate = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const QualificationApplicationRequestFieldMetaIssueTime = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const QualificationApplicationRequestFieldMetaVersionID = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'Indicates the current version of the Qualification Application Request.',
  '0..1',
  'cbc',
  undefined,
  '1.1'
)

export const QualificationApplicationRequestFieldMetaPreviousVersionID = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.PreviousVersionID,
  'PreviousVersionID',
  'Previous Version',
  'Identifier',
  'Identifies the previous version of the Qualification Application Request which is superceded by this version.',
  '0..1',
  'cbc',
  undefined,
  '1.0'
)

export const QualificationApplicationRequestFieldMetaProcedureCode = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.ProcedureCode,
  'ProcedureCode',
  'Procedure Code',
  'Code',
  'A code signifying the type of this tendering procedure.',
  '0..1',
  'cbc',
  undefined,
  'Open, Restricted, Negotiated'
)

export const QualificationApplicationRequestFieldMetaQualificationApplicationTypeCode = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.QualificationApplicationTypeCode,
  'QualificationApplicationTypeCode',
  'Qualification Application Type Code',
  'Code',
  'A code specifying the type of the Qualification Application.',
  '0..1',
  'cbc',
  undefined,
  '"Regulated", "Self-contained"'
)

export const QualificationApplicationRequestFieldMetaWeightScoringMethodologyNote = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.WeightScoringMethodologyNote,
  'WeightScoringMethodologyNote',
  'Weight Scoring Methodology Note',
  'Text',
  'Free-form text to describing information about Weight Scoring Methodology.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const QualificationApplicationRequestFieldMetaWeightingTypeCode = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.WeightingTypeCode,
  'WeightingTypeCode',
  'Weighting Type Code',
  'Code',
  'A code specifying the type of the Weighting.',
  '0..1',
  'cbc',
  undefined,
  '"Regulated", "Self-contained"'
)

export const QualificationApplicationRequestFieldMetaNote = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const QualificationApplicationRequestFieldMetaContractingParty = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  'ContractingParty',
  'The contracting party.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export const QualificationApplicationRequestFieldMetaEconomicOperatorParty = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.EconomicOperatorParty,
  'EconomicOperatorParty',
  'Economic Operator Party',
  'EconomicOperatorParty',
  'The Economic Operator receiving the Qualification Application Resquest.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const QualificationApplicationRequestFieldMetaProcurementProject = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  'ProcurementProject',
  'An overall definition of this procurement project.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const QualificationApplicationRequestFieldMetaProcurementProjectLot = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  'ProcurementProjectLot',
  'One of the procurement project lots into which this contract can be split.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const QualificationApplicationRequestFieldMetaTenderingCriterion = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.TenderingCriterion,
  'TenderingCriterion',
  'Tendering Criterion',
  'TenderingCriterion',
  'A criterion supporting Tenderer qualifications.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const QualificationApplicationRequestFieldMetaAdditionalDocumentReference = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const QualificationApplicationRequestFieldMetaSignature = new FieldMeta<QualificationApplicationRequestField>(
  QualificationApplicationRequestField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class QualificationApplicationRequestFieldMeta {
  public static readonly UBLExtensions = QualificationApplicationRequestFieldMetaUBLExtensions
  public static readonly UBLVersionID = QualificationApplicationRequestFieldMetaUBLVersionID
  public static readonly CustomizationID = QualificationApplicationRequestFieldMetaCustomizationID
  public static readonly ProfileID = QualificationApplicationRequestFieldMetaProfileID
  public static readonly ProfileExecutionID = QualificationApplicationRequestFieldMetaProfileExecutionID
  public static readonly ID = QualificationApplicationRequestFieldMetaID
  public static readonly CopyIndicator = QualificationApplicationRequestFieldMetaCopyIndicator
  public static readonly UUID = QualificationApplicationRequestFieldMetaUUID
  public static readonly ContractFolderID = QualificationApplicationRequestFieldMetaContractFolderID
  public static readonly ContractName = QualificationApplicationRequestFieldMetaContractName
  public static readonly IssueDate = QualificationApplicationRequestFieldMetaIssueDate
  public static readonly IssueTime = QualificationApplicationRequestFieldMetaIssueTime
  public static readonly VersionID = QualificationApplicationRequestFieldMetaVersionID
  public static readonly PreviousVersionID = QualificationApplicationRequestFieldMetaPreviousVersionID
  public static readonly ProcedureCode = QualificationApplicationRequestFieldMetaProcedureCode
  public static readonly QualificationApplicationTypeCode = QualificationApplicationRequestFieldMetaQualificationApplicationTypeCode
  public static readonly WeightScoringMethodologyNote = QualificationApplicationRequestFieldMetaWeightScoringMethodologyNote
  public static readonly WeightingTypeCode = QualificationApplicationRequestFieldMetaWeightingTypeCode
  public static readonly Note = QualificationApplicationRequestFieldMetaNote
  public static readonly ContractingParty = QualificationApplicationRequestFieldMetaContractingParty
  public static readonly EconomicOperatorParty = QualificationApplicationRequestFieldMetaEconomicOperatorParty
  public static readonly ProcurementProject = QualificationApplicationRequestFieldMetaProcurementProject
  public static readonly ProcurementProjectLot = QualificationApplicationRequestFieldMetaProcurementProjectLot
  public static readonly TenderingCriterion = QualificationApplicationRequestFieldMetaTenderingCriterion
  public static readonly AdditionalDocumentReference = QualificationApplicationRequestFieldMetaAdditionalDocumentReference
  public static readonly Signature = QualificationApplicationRequestFieldMetaSignature
}

export const QualificationApplicationRequestFieldMap = new Map([
  [QualificationApplicationRequestField.UBLExtensions, QualificationApplicationRequestFieldMetaUBLExtensions],
  [QualificationApplicationRequestField.UBLVersionID, QualificationApplicationRequestFieldMetaUBLVersionID],
  [QualificationApplicationRequestField.CustomizationID, QualificationApplicationRequestFieldMetaCustomizationID],
  [QualificationApplicationRequestField.ProfileID, QualificationApplicationRequestFieldMetaProfileID],
  [QualificationApplicationRequestField.ProfileExecutionID, QualificationApplicationRequestFieldMetaProfileExecutionID],
  [QualificationApplicationRequestField.ID, QualificationApplicationRequestFieldMetaID],
  [QualificationApplicationRequestField.CopyIndicator, QualificationApplicationRequestFieldMetaCopyIndicator],
  [QualificationApplicationRequestField.UUID, QualificationApplicationRequestFieldMetaUUID],
  [QualificationApplicationRequestField.ContractFolderID, QualificationApplicationRequestFieldMetaContractFolderID],
  [QualificationApplicationRequestField.ContractName, QualificationApplicationRequestFieldMetaContractName],
  [QualificationApplicationRequestField.IssueDate, QualificationApplicationRequestFieldMetaIssueDate],
  [QualificationApplicationRequestField.IssueTime, QualificationApplicationRequestFieldMetaIssueTime],
  [QualificationApplicationRequestField.VersionID, QualificationApplicationRequestFieldMetaVersionID],
  [QualificationApplicationRequestField.PreviousVersionID, QualificationApplicationRequestFieldMetaPreviousVersionID],
  [QualificationApplicationRequestField.ProcedureCode, QualificationApplicationRequestFieldMetaProcedureCode],
  [QualificationApplicationRequestField.QualificationApplicationTypeCode, QualificationApplicationRequestFieldMetaQualificationApplicationTypeCode],
  [QualificationApplicationRequestField.WeightScoringMethodologyNote, QualificationApplicationRequestFieldMetaWeightScoringMethodologyNote],
  [QualificationApplicationRequestField.WeightingTypeCode, QualificationApplicationRequestFieldMetaWeightingTypeCode],
  [QualificationApplicationRequestField.Note, QualificationApplicationRequestFieldMetaNote],
  [QualificationApplicationRequestField.ContractingParty, QualificationApplicationRequestFieldMetaContractingParty],
  [QualificationApplicationRequestField.EconomicOperatorParty, QualificationApplicationRequestFieldMetaEconomicOperatorParty],
  [QualificationApplicationRequestField.ProcurementProject, QualificationApplicationRequestFieldMetaProcurementProject],
  [QualificationApplicationRequestField.ProcurementProjectLot, QualificationApplicationRequestFieldMetaProcurementProjectLot],
  [QualificationApplicationRequestField.TenderingCriterion, QualificationApplicationRequestFieldMetaTenderingCriterion],
  [QualificationApplicationRequestField.AdditionalDocumentReference, QualificationApplicationRequestFieldMetaAdditionalDocumentReference],
  [QualificationApplicationRequestField.Signature, QualificationApplicationRequestFieldMetaSignature]
])
