import { FieldMeta } from '../FieldMeta'

export enum TenderStatusRequestField {
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
  Note = 'Note',
  Signature = 'Signature',
  ContractingParty = 'ContractingParty',
  EconomicOperatorParty = 'EconomicOperatorParty',
  ProcurementProject = 'ProcurementProject',
  ProcurementProjectLot = 'ProcurementProjectLot'
}

export const TenderStatusRequestFieldMetaUBLExtensions = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaUBLVersionID = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const TenderStatusRequestFieldMetaCustomizationID = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const TenderStatusRequestFieldMetaProfileID = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const TenderStatusRequestFieldMetaProfileExecutionID = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const TenderStatusRequestFieldMetaID = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaCopyIndicator = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaUUID = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaContractFolderID = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  'Identifier',
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaIssueDate = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaIssueTime = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaContractName = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.ContractName,
  'ContractName',
  'Contract Name',
  'Text',
  'Short title of a contract associated with this Tender.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaNote = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaSignature = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaContractingParty = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  'ContractingParty',
  'The Contracting Party eceiving the tender status inquiry.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaEconomicOperatorParty = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.EconomicOperatorParty,
  'EconomicOperatorParty',
  'Economic Operator Party',
  'EconomicOperatorParty',
  'The Economic Operator issuing the inquiry on the status of a tendering process.',
  '1',
  'cac',
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaProcurementProject = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  'ProcurementProject',
  'An overall definition of this procurement project.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaProcurementProjectLot = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  'ProcurementProjectLot',
  'One of the procurement project lots into which this contract can be split.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class TenderStatusRequestFieldMeta {
  public static readonly UBLExtensions = TenderStatusRequestFieldMetaUBLExtensions
  public static readonly UBLVersionID = TenderStatusRequestFieldMetaUBLVersionID
  public static readonly CustomizationID = TenderStatusRequestFieldMetaCustomizationID
  public static readonly ProfileID = TenderStatusRequestFieldMetaProfileID
  public static readonly ProfileExecutionID = TenderStatusRequestFieldMetaProfileExecutionID
  public static readonly ID = TenderStatusRequestFieldMetaID
  public static readonly CopyIndicator = TenderStatusRequestFieldMetaCopyIndicator
  public static readonly UUID = TenderStatusRequestFieldMetaUUID
  public static readonly ContractFolderID = TenderStatusRequestFieldMetaContractFolderID
  public static readonly IssueDate = TenderStatusRequestFieldMetaIssueDate
  public static readonly IssueTime = TenderStatusRequestFieldMetaIssueTime
  public static readonly ContractName = TenderStatusRequestFieldMetaContractName
  public static readonly Note = TenderStatusRequestFieldMetaNote
  public static readonly Signature = TenderStatusRequestFieldMetaSignature
  public static readonly ContractingParty = TenderStatusRequestFieldMetaContractingParty
  public static readonly EconomicOperatorParty = TenderStatusRequestFieldMetaEconomicOperatorParty
  public static readonly ProcurementProject = TenderStatusRequestFieldMetaProcurementProject
  public static readonly ProcurementProjectLot = TenderStatusRequestFieldMetaProcurementProjectLot
}

export const TenderStatusRequestFieldMap = new Map([
  [TenderStatusRequestField.UBLExtensions, TenderStatusRequestFieldMetaUBLExtensions],
  [TenderStatusRequestField.UBLVersionID, TenderStatusRequestFieldMetaUBLVersionID],
  [TenderStatusRequestField.CustomizationID, TenderStatusRequestFieldMetaCustomizationID],
  [TenderStatusRequestField.ProfileID, TenderStatusRequestFieldMetaProfileID],
  [TenderStatusRequestField.ProfileExecutionID, TenderStatusRequestFieldMetaProfileExecutionID],
  [TenderStatusRequestField.ID, TenderStatusRequestFieldMetaID],
  [TenderStatusRequestField.CopyIndicator, TenderStatusRequestFieldMetaCopyIndicator],
  [TenderStatusRequestField.UUID, TenderStatusRequestFieldMetaUUID],
  [TenderStatusRequestField.ContractFolderID, TenderStatusRequestFieldMetaContractFolderID],
  [TenderStatusRequestField.IssueDate, TenderStatusRequestFieldMetaIssueDate],
  [TenderStatusRequestField.IssueTime, TenderStatusRequestFieldMetaIssueTime],
  [TenderStatusRequestField.ContractName, TenderStatusRequestFieldMetaContractName],
  [TenderStatusRequestField.Note, TenderStatusRequestFieldMetaNote],
  [TenderStatusRequestField.Signature, TenderStatusRequestFieldMetaSignature],
  [TenderStatusRequestField.ContractingParty, TenderStatusRequestFieldMetaContractingParty],
  [TenderStatusRequestField.EconomicOperatorParty, TenderStatusRequestFieldMetaEconomicOperatorParty],
  [TenderStatusRequestField.ProcurementProject, TenderStatusRequestFieldMetaProcurementProject],
  [TenderStatusRequestField.ProcurementProjectLot, TenderStatusRequestFieldMetaProcurementProjectLot]
])
