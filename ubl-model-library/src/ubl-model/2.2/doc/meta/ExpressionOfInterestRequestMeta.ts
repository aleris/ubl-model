import { FieldMeta } from '../../FieldMeta'

export enum ExpressionOfInterestRequestField {
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
  PreferredLanguageLocaleCode = 'PreferredLanguageLocaleCode',
  Note = 'Note',
  ValidityPeriod = 'ValidityPeriod',
  DocumentReference = 'DocumentReference',
  Signature = 'Signature',
  EconomicOperatorParty = 'EconomicOperatorParty',
  ContractingParty = 'ContractingParty',
  ProcurementProject = 'ProcurementProject',
  ProcurementProjectLotReference = 'ProcurementProjectLotReference'
}

export const ExpressionOfInterestRequestFieldMetaUBLExtensions = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaUBLVersionID = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'The earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaCustomizationID = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaProfileID = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaProfileExecutionID = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaID = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaCopyIndicator = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaUUID = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaContractFolderID = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  'Identifier',
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  '0..1',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaIssueDate = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaIssueTime = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaContractName = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.ContractName,
  'ContractName',
  'Contract Name',
  'Text',
  'Short title of a contract associated with this Expression of Interest.',
  '0..n',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaPreferredLanguageLocaleCode = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.PreferredLanguageLocaleCode,
  'PreferredLanguageLocaleCode',
  'Locale Code',
  'Code',
  'A code signifying the locale in which the language in the required documents is preferred.',
  '0..1',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaNote = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaValidityPeriod = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.ValidityPeriod,
  'ValidityPeriod',
  'Period',
  'Period',
  'The period for which the expression of interest is valid.',
  '0..1',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaDocumentReference = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to another document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaSignature = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaEconomicOperatorParty = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.EconomicOperatorParty,
  'EconomicOperatorParty',
  'Economic Operator Party',
  'EconomicOperatorParty',
  'The Economic Operator issuing the expression of interest.',
  '1',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaContractingParty = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  'ContractingParty',
  'The Contracting Party or the contracting parties in case of joint procurement.',
  '1..n',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaProcurementProject = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  'ProcurementProject',
  'An overall definition of this procurement project.',
  '0..1',
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaProcurementProjectLotReference = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.ProcurementProjectLotReference,
  'ProcurementProjectLotReference',
  'Procurement Project Lot Reference',
  'ProcurementProjectLotReference',
  'One of the procurement project lots into which this contract can be split.',
  '0..n',
  undefined,
  undefined
)

export class ExpressionOfInterestRequestFieldMeta {
  public static readonly UBLExtensions = ExpressionOfInterestRequestFieldMetaUBLExtensions
  public static readonly UBLVersionID = ExpressionOfInterestRequestFieldMetaUBLVersionID
  public static readonly CustomizationID = ExpressionOfInterestRequestFieldMetaCustomizationID
  public static readonly ProfileID = ExpressionOfInterestRequestFieldMetaProfileID
  public static readonly ProfileExecutionID = ExpressionOfInterestRequestFieldMetaProfileExecutionID
  public static readonly ID = ExpressionOfInterestRequestFieldMetaID
  public static readonly CopyIndicator = ExpressionOfInterestRequestFieldMetaCopyIndicator
  public static readonly UUID = ExpressionOfInterestRequestFieldMetaUUID
  public static readonly ContractFolderID = ExpressionOfInterestRequestFieldMetaContractFolderID
  public static readonly IssueDate = ExpressionOfInterestRequestFieldMetaIssueDate
  public static readonly IssueTime = ExpressionOfInterestRequestFieldMetaIssueTime
  public static readonly ContractName = ExpressionOfInterestRequestFieldMetaContractName
  public static readonly PreferredLanguageLocaleCode = ExpressionOfInterestRequestFieldMetaPreferredLanguageLocaleCode
  public static readonly Note = ExpressionOfInterestRequestFieldMetaNote
  public static readonly ValidityPeriod = ExpressionOfInterestRequestFieldMetaValidityPeriod
  public static readonly DocumentReference = ExpressionOfInterestRequestFieldMetaDocumentReference
  public static readonly Signature = ExpressionOfInterestRequestFieldMetaSignature
  public static readonly EconomicOperatorParty = ExpressionOfInterestRequestFieldMetaEconomicOperatorParty
  public static readonly ContractingParty = ExpressionOfInterestRequestFieldMetaContractingParty
  public static readonly ProcurementProject = ExpressionOfInterestRequestFieldMetaProcurementProject
  public static readonly ProcurementProjectLotReference = ExpressionOfInterestRequestFieldMetaProcurementProjectLotReference
}

export const ExpressionOfInterestRequestFieldMap = new Map([
  [ExpressionOfInterestRequestField.UBLExtensions, ExpressionOfInterestRequestFieldMetaUBLExtensions],
  [ExpressionOfInterestRequestField.UBLVersionID, ExpressionOfInterestRequestFieldMetaUBLVersionID],
  [ExpressionOfInterestRequestField.CustomizationID, ExpressionOfInterestRequestFieldMetaCustomizationID],
  [ExpressionOfInterestRequestField.ProfileID, ExpressionOfInterestRequestFieldMetaProfileID],
  [ExpressionOfInterestRequestField.ProfileExecutionID, ExpressionOfInterestRequestFieldMetaProfileExecutionID],
  [ExpressionOfInterestRequestField.ID, ExpressionOfInterestRequestFieldMetaID],
  [ExpressionOfInterestRequestField.CopyIndicator, ExpressionOfInterestRequestFieldMetaCopyIndicator],
  [ExpressionOfInterestRequestField.UUID, ExpressionOfInterestRequestFieldMetaUUID],
  [ExpressionOfInterestRequestField.ContractFolderID, ExpressionOfInterestRequestFieldMetaContractFolderID],
  [ExpressionOfInterestRequestField.IssueDate, ExpressionOfInterestRequestFieldMetaIssueDate],
  [ExpressionOfInterestRequestField.IssueTime, ExpressionOfInterestRequestFieldMetaIssueTime],
  [ExpressionOfInterestRequestField.ContractName, ExpressionOfInterestRequestFieldMetaContractName],
  [ExpressionOfInterestRequestField.PreferredLanguageLocaleCode, ExpressionOfInterestRequestFieldMetaPreferredLanguageLocaleCode],
  [ExpressionOfInterestRequestField.Note, ExpressionOfInterestRequestFieldMetaNote],
  [ExpressionOfInterestRequestField.ValidityPeriod, ExpressionOfInterestRequestFieldMetaValidityPeriod],
  [ExpressionOfInterestRequestField.DocumentReference, ExpressionOfInterestRequestFieldMetaDocumentReference],
  [ExpressionOfInterestRequestField.Signature, ExpressionOfInterestRequestFieldMetaSignature],
  [ExpressionOfInterestRequestField.EconomicOperatorParty, ExpressionOfInterestRequestFieldMetaEconomicOperatorParty],
  [ExpressionOfInterestRequestField.ContractingParty, ExpressionOfInterestRequestFieldMetaContractingParty],
  [ExpressionOfInterestRequestField.ProcurementProject, ExpressionOfInterestRequestFieldMetaProcurementProject],
  [ExpressionOfInterestRequestField.ProcurementProjectLotReference, ExpressionOfInterestRequestFieldMetaProcurementProjectLotReference]
])
