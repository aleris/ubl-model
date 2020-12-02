import { FieldMeta } from '../FieldMeta'

export enum ExpressionOfInterestResponseField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  CopyIndicator = 'CopyIndicator',
  UUID = 'UUID',
  ContractFolderID = 'ContractFolderID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  ContractName = 'ContractName',
  TenderLanguageLocaleCode = 'TenderLanguageLocaleCode',
  Note = 'Note',
  ExpressionOfInterestDocumentReference = 'ExpressionOfInterestDocumentReference',
  Signature = 'Signature',
  EconomicOperatorParty = 'EconomicOperatorParty',
  ContractingParty = 'ContractingParty',
  ProcurementProject = 'ProcurementProject',
  ProcurementProjectLotReference = 'ProcurementProjectLotReference'
}

export const ExpressionOfInterestResponseFieldMetaUBLExtensions = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaUBLVersionID = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'The earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaCustomizationID = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaProfileID = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaProfileExecutionID = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaID = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaCopyIndicator = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaUUID = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaContractFolderID = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  'Identifier',
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaIssueDate = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaIssueTime = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaContractName = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.ContractName,
  'ContractName',
  'Contract Name',
  'Text',
  'Short title of a contract associated with this Expression of Interest.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaTenderLanguageLocaleCode = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.TenderLanguageLocaleCode,
  'TenderLanguageLocaleCode',
  'Tender Language Locale Code',
  'Code',
  'A code signifying the language required for the tender.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaNote = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaExpressionOfInterestDocumentReference = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.ExpressionOfInterestDocumentReference,
  'ExpressionOfInterestDocumentReference',
  'Expression Of Interest Document Reference',
  'DocumentReference',
  'A reference to the expression of interest document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaSignature = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaEconomicOperatorParty = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.EconomicOperatorParty,
  'EconomicOperatorParty',
  'Economic Operator Party',
  'EconomicOperatorParty',
  'The economic operator that issued the expression of interest and is receiving the confirmation.',
  '1',
  'cac',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaContractingParty = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  'ContractingParty',
  'The contracting party or parties in case of joint procurement.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaProcurementProject = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  'ProcurementProject',
  'An overall definition of this procurement project.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaProcurementProjectLotReference = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.ProcurementProjectLotReference,
  'ProcurementProjectLotReference',
  'Procurement Project Lot Reference',
  'ProcurementProjectLotReference',
  'One of the procurement project lots into which this contract can be split.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class ExpressionOfInterestResponseFieldMeta {
  public static readonly UBLExtensions = ExpressionOfInterestResponseFieldMetaUBLExtensions
  public static readonly UBLVersionID = ExpressionOfInterestResponseFieldMetaUBLVersionID
  public static readonly CustomizationID = ExpressionOfInterestResponseFieldMetaCustomizationID
  public static readonly ProfileID = ExpressionOfInterestResponseFieldMetaProfileID
  public static readonly ProfileExecutionID = ExpressionOfInterestResponseFieldMetaProfileExecutionID
  public static readonly ID = ExpressionOfInterestResponseFieldMetaID
  public static readonly CopyIndicator = ExpressionOfInterestResponseFieldMetaCopyIndicator
  public static readonly UUID = ExpressionOfInterestResponseFieldMetaUUID
  public static readonly ContractFolderID = ExpressionOfInterestResponseFieldMetaContractFolderID
  public static readonly IssueDate = ExpressionOfInterestResponseFieldMetaIssueDate
  public static readonly IssueTime = ExpressionOfInterestResponseFieldMetaIssueTime
  public static readonly ContractName = ExpressionOfInterestResponseFieldMetaContractName
  public static readonly TenderLanguageLocaleCode = ExpressionOfInterestResponseFieldMetaTenderLanguageLocaleCode
  public static readonly Note = ExpressionOfInterestResponseFieldMetaNote
  public static readonly ExpressionOfInterestDocumentReference = ExpressionOfInterestResponseFieldMetaExpressionOfInterestDocumentReference
  public static readonly Signature = ExpressionOfInterestResponseFieldMetaSignature
  public static readonly EconomicOperatorParty = ExpressionOfInterestResponseFieldMetaEconomicOperatorParty
  public static readonly ContractingParty = ExpressionOfInterestResponseFieldMetaContractingParty
  public static readonly ProcurementProject = ExpressionOfInterestResponseFieldMetaProcurementProject
  public static readonly ProcurementProjectLotReference = ExpressionOfInterestResponseFieldMetaProcurementProjectLotReference
}

export const ExpressionOfInterestResponseFieldMap = new Map([
  [ExpressionOfInterestResponseField.UBLExtensions, ExpressionOfInterestResponseFieldMetaUBLExtensions],
  [ExpressionOfInterestResponseField.UBLVersionID, ExpressionOfInterestResponseFieldMetaUBLVersionID],
  [ExpressionOfInterestResponseField.CustomizationID, ExpressionOfInterestResponseFieldMetaCustomizationID],
  [ExpressionOfInterestResponseField.ProfileID, ExpressionOfInterestResponseFieldMetaProfileID],
  [ExpressionOfInterestResponseField.ProfileExecutionID, ExpressionOfInterestResponseFieldMetaProfileExecutionID],
  [ExpressionOfInterestResponseField.ID, ExpressionOfInterestResponseFieldMetaID],
  [ExpressionOfInterestResponseField.CopyIndicator, ExpressionOfInterestResponseFieldMetaCopyIndicator],
  [ExpressionOfInterestResponseField.UUID, ExpressionOfInterestResponseFieldMetaUUID],
  [ExpressionOfInterestResponseField.ContractFolderID, ExpressionOfInterestResponseFieldMetaContractFolderID],
  [ExpressionOfInterestResponseField.IssueDate, ExpressionOfInterestResponseFieldMetaIssueDate],
  [ExpressionOfInterestResponseField.IssueTime, ExpressionOfInterestResponseFieldMetaIssueTime],
  [ExpressionOfInterestResponseField.ContractName, ExpressionOfInterestResponseFieldMetaContractName],
  [ExpressionOfInterestResponseField.TenderLanguageLocaleCode, ExpressionOfInterestResponseFieldMetaTenderLanguageLocaleCode],
  [ExpressionOfInterestResponseField.Note, ExpressionOfInterestResponseFieldMetaNote],
  [ExpressionOfInterestResponseField.ExpressionOfInterestDocumentReference, ExpressionOfInterestResponseFieldMetaExpressionOfInterestDocumentReference],
  [ExpressionOfInterestResponseField.Signature, ExpressionOfInterestResponseFieldMetaSignature],
  [ExpressionOfInterestResponseField.EconomicOperatorParty, ExpressionOfInterestResponseFieldMetaEconomicOperatorParty],
  [ExpressionOfInterestResponseField.ContractingParty, ExpressionOfInterestResponseFieldMetaContractingParty],
  [ExpressionOfInterestResponseField.ProcurementProject, ExpressionOfInterestResponseFieldMetaProcurementProject],
  [ExpressionOfInterestResponseField.ProcurementProjectLotReference, ExpressionOfInterestResponseFieldMetaProcurementProjectLotReference]
])
