import { FieldMeta } from '../../FieldMeta'

export enum UnsubscribeFromProcedureRequestField {
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
  Signature = 'Signature',
  EconomicOperatorParty = 'EconomicOperatorParty',
  ContractingParty = 'ContractingParty',
  ProcurementProject = 'ProcurementProject',
  ProcurementProjectLotReference = 'ProcurementProjectLotReference'
}

export const UnsubscribeFromProcedureRequestFieldMetaUBLExtensions = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaUBLVersionID = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'The earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaCustomizationID = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaProfileID = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaProfileExecutionID = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaID = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaCopyIndicator = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaUUID = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaContractFolderID = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  'Identifier',
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  '0..1',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaIssueDate = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaIssueTime = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaNote = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaSignature = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaEconomicOperatorParty = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.EconomicOperatorParty,
  'EconomicOperatorParty',
  'Economic Operator Party',
  'EconomicOperatorParty',
  'The Economic Operator issuing this unsubscribe request.',
  '1',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaContractingParty = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  'ContractingParty',
  'The Contracting Party.',
  '1',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaProcurementProject = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  'ProcurementProject',
  'An overall definition of this procurement project.',
  '0..1',
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaProcurementProjectLotReference = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.ProcurementProjectLotReference,
  'ProcurementProjectLotReference',
  'Procurement Project Lot Reference',
  'ProcurementProjectLotReference',
  'One of the procurement project lots into which this contract can be split.',
  '0..n',
  undefined,
  undefined
)

export class UnsubscribeFromProcedureRequestFieldMeta {
  public static readonly UBLExtensions = UnsubscribeFromProcedureRequestFieldMetaUBLExtensions
  public static readonly UBLVersionID = UnsubscribeFromProcedureRequestFieldMetaUBLVersionID
  public static readonly CustomizationID = UnsubscribeFromProcedureRequestFieldMetaCustomizationID
  public static readonly ProfileID = UnsubscribeFromProcedureRequestFieldMetaProfileID
  public static readonly ProfileExecutionID = UnsubscribeFromProcedureRequestFieldMetaProfileExecutionID
  public static readonly ID = UnsubscribeFromProcedureRequestFieldMetaID
  public static readonly CopyIndicator = UnsubscribeFromProcedureRequestFieldMetaCopyIndicator
  public static readonly UUID = UnsubscribeFromProcedureRequestFieldMetaUUID
  public static readonly ContractFolderID = UnsubscribeFromProcedureRequestFieldMetaContractFolderID
  public static readonly IssueDate = UnsubscribeFromProcedureRequestFieldMetaIssueDate
  public static readonly IssueTime = UnsubscribeFromProcedureRequestFieldMetaIssueTime
  public static readonly Note = UnsubscribeFromProcedureRequestFieldMetaNote
  public static readonly Signature = UnsubscribeFromProcedureRequestFieldMetaSignature
  public static readonly EconomicOperatorParty = UnsubscribeFromProcedureRequestFieldMetaEconomicOperatorParty
  public static readonly ContractingParty = UnsubscribeFromProcedureRequestFieldMetaContractingParty
  public static readonly ProcurementProject = UnsubscribeFromProcedureRequestFieldMetaProcurementProject
  public static readonly ProcurementProjectLotReference = UnsubscribeFromProcedureRequestFieldMetaProcurementProjectLotReference
}

export const UnsubscribeFromProcedureRequestFieldMap = new Map([
  [UnsubscribeFromProcedureRequestField.UBLExtensions, UnsubscribeFromProcedureRequestFieldMetaUBLExtensions],
  [UnsubscribeFromProcedureRequestField.UBLVersionID, UnsubscribeFromProcedureRequestFieldMetaUBLVersionID],
  [UnsubscribeFromProcedureRequestField.CustomizationID, UnsubscribeFromProcedureRequestFieldMetaCustomizationID],
  [UnsubscribeFromProcedureRequestField.ProfileID, UnsubscribeFromProcedureRequestFieldMetaProfileID],
  [UnsubscribeFromProcedureRequestField.ProfileExecutionID, UnsubscribeFromProcedureRequestFieldMetaProfileExecutionID],
  [UnsubscribeFromProcedureRequestField.ID, UnsubscribeFromProcedureRequestFieldMetaID],
  [UnsubscribeFromProcedureRequestField.CopyIndicator, UnsubscribeFromProcedureRequestFieldMetaCopyIndicator],
  [UnsubscribeFromProcedureRequestField.UUID, UnsubscribeFromProcedureRequestFieldMetaUUID],
  [UnsubscribeFromProcedureRequestField.ContractFolderID, UnsubscribeFromProcedureRequestFieldMetaContractFolderID],
  [UnsubscribeFromProcedureRequestField.IssueDate, UnsubscribeFromProcedureRequestFieldMetaIssueDate],
  [UnsubscribeFromProcedureRequestField.IssueTime, UnsubscribeFromProcedureRequestFieldMetaIssueTime],
  [UnsubscribeFromProcedureRequestField.Note, UnsubscribeFromProcedureRequestFieldMetaNote],
  [UnsubscribeFromProcedureRequestField.Signature, UnsubscribeFromProcedureRequestFieldMetaSignature],
  [UnsubscribeFromProcedureRequestField.EconomicOperatorParty, UnsubscribeFromProcedureRequestFieldMetaEconomicOperatorParty],
  [UnsubscribeFromProcedureRequestField.ContractingParty, UnsubscribeFromProcedureRequestFieldMetaContractingParty],
  [UnsubscribeFromProcedureRequestField.ProcurementProject, UnsubscribeFromProcedureRequestFieldMetaProcurementProject],
  [UnsubscribeFromProcedureRequestField.ProcurementProjectLotReference, UnsubscribeFromProcedureRequestFieldMetaProcurementProjectLotReference]
])
