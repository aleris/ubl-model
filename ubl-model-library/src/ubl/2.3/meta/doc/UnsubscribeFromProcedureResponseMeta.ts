import { FieldMeta } from '../FieldMeta'

export enum UnsubscribeFromProcedureResponseField {
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
  Note = 'Note',
  UnsubscribeToProcedureDocumentReference = 'UnsubscribeToProcedureDocumentReference',
  Signature = 'Signature',
  EconomicOperatorParty = 'EconomicOperatorParty',
  ContractingParty = 'ContractingParty',
  ProcurementProject = 'ProcurementProject',
  ProcurementProjectLotReference = 'ProcurementProjectLotReference'
}

export const UnsubscribeFromProcedureResponseFieldMetaUBLExtensions = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaUBLVersionID = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'The earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaCustomizationID = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaProfileID = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaProfileExecutionID = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaID = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaCopyIndicator = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaUUID = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaContractFolderID = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  'Identifier',
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaIssueDate = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaIssueTime = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaNote = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaUnsubscribeToProcedureDocumentReference = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.UnsubscribeToProcedureDocumentReference,
  'UnsubscribeToProcedureDocumentReference',
  'Unsubscribe To Procedure Document Reference',
  'DocumentReference',
  'A reference to the unsubscribe to procedure document associated with this confirmation.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaSignature = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaEconomicOperatorParty = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.EconomicOperatorParty,
  'EconomicOperatorParty',
  'Economic Operator Party',
  'EconomicOperatorParty',
  'The Economic Operator receiving this unsubscribe to procedure confirmation.',
  '1',
  'cac',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaContractingParty = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  'ContractingParty',
  'The Contracting Party.',
  '1',
  'cac',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaProcurementProject = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  'ProcurementProject',
  'An overall definition of this procurement project.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaProcurementProjectLotReference = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.ProcurementProjectLotReference,
  'ProcurementProjectLotReference',
  'Procurement Project Lot Reference',
  'ProcurementProjectLotReference',
  'One of the procurement project lots into which this contract can be split.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class UnsubscribeFromProcedureResponseFieldMeta {
  public static readonly UBLExtensions = UnsubscribeFromProcedureResponseFieldMetaUBLExtensions
  public static readonly UBLVersionID = UnsubscribeFromProcedureResponseFieldMetaUBLVersionID
  public static readonly CustomizationID = UnsubscribeFromProcedureResponseFieldMetaCustomizationID
  public static readonly ProfileID = UnsubscribeFromProcedureResponseFieldMetaProfileID
  public static readonly ProfileExecutionID = UnsubscribeFromProcedureResponseFieldMetaProfileExecutionID
  public static readonly ID = UnsubscribeFromProcedureResponseFieldMetaID
  public static readonly CopyIndicator = UnsubscribeFromProcedureResponseFieldMetaCopyIndicator
  public static readonly UUID = UnsubscribeFromProcedureResponseFieldMetaUUID
  public static readonly ContractFolderID = UnsubscribeFromProcedureResponseFieldMetaContractFolderID
  public static readonly IssueDate = UnsubscribeFromProcedureResponseFieldMetaIssueDate
  public static readonly IssueTime = UnsubscribeFromProcedureResponseFieldMetaIssueTime
  public static readonly Note = UnsubscribeFromProcedureResponseFieldMetaNote
  public static readonly UnsubscribeToProcedureDocumentReference = UnsubscribeFromProcedureResponseFieldMetaUnsubscribeToProcedureDocumentReference
  public static readonly Signature = UnsubscribeFromProcedureResponseFieldMetaSignature
  public static readonly EconomicOperatorParty = UnsubscribeFromProcedureResponseFieldMetaEconomicOperatorParty
  public static readonly ContractingParty = UnsubscribeFromProcedureResponseFieldMetaContractingParty
  public static readonly ProcurementProject = UnsubscribeFromProcedureResponseFieldMetaProcurementProject
  public static readonly ProcurementProjectLotReference = UnsubscribeFromProcedureResponseFieldMetaProcurementProjectLotReference
}

export const UnsubscribeFromProcedureResponseFieldMap = new Map([
  [UnsubscribeFromProcedureResponseField.UBLExtensions, UnsubscribeFromProcedureResponseFieldMetaUBLExtensions],
  [UnsubscribeFromProcedureResponseField.UBLVersionID, UnsubscribeFromProcedureResponseFieldMetaUBLVersionID],
  [UnsubscribeFromProcedureResponseField.CustomizationID, UnsubscribeFromProcedureResponseFieldMetaCustomizationID],
  [UnsubscribeFromProcedureResponseField.ProfileID, UnsubscribeFromProcedureResponseFieldMetaProfileID],
  [UnsubscribeFromProcedureResponseField.ProfileExecutionID, UnsubscribeFromProcedureResponseFieldMetaProfileExecutionID],
  [UnsubscribeFromProcedureResponseField.ID, UnsubscribeFromProcedureResponseFieldMetaID],
  [UnsubscribeFromProcedureResponseField.CopyIndicator, UnsubscribeFromProcedureResponseFieldMetaCopyIndicator],
  [UnsubscribeFromProcedureResponseField.UUID, UnsubscribeFromProcedureResponseFieldMetaUUID],
  [UnsubscribeFromProcedureResponseField.ContractFolderID, UnsubscribeFromProcedureResponseFieldMetaContractFolderID],
  [UnsubscribeFromProcedureResponseField.IssueDate, UnsubscribeFromProcedureResponseFieldMetaIssueDate],
  [UnsubscribeFromProcedureResponseField.IssueTime, UnsubscribeFromProcedureResponseFieldMetaIssueTime],
  [UnsubscribeFromProcedureResponseField.Note, UnsubscribeFromProcedureResponseFieldMetaNote],
  [UnsubscribeFromProcedureResponseField.UnsubscribeToProcedureDocumentReference, UnsubscribeFromProcedureResponseFieldMetaUnsubscribeToProcedureDocumentReference],
  [UnsubscribeFromProcedureResponseField.Signature, UnsubscribeFromProcedureResponseFieldMetaSignature],
  [UnsubscribeFromProcedureResponseField.EconomicOperatorParty, UnsubscribeFromProcedureResponseFieldMetaEconomicOperatorParty],
  [UnsubscribeFromProcedureResponseField.ContractingParty, UnsubscribeFromProcedureResponseFieldMetaContractingParty],
  [UnsubscribeFromProcedureResponseField.ProcurementProject, UnsubscribeFromProcedureResponseFieldMetaProcurementProject],
  [UnsubscribeFromProcedureResponseField.ProcurementProjectLotReference, UnsubscribeFromProcedureResponseFieldMetaProcurementProjectLotReference]
])
