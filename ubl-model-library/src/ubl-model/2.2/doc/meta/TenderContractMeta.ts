import { FieldMeta } from '../../FieldMeta'

export enum TenderContractField {
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
  RegulatoryDomain = 'RegulatoryDomain',
  PublishAwardIndicator = 'PublishAwardIndicator',
  PreviousDocumentReference = 'PreviousDocumentReference',
  ContractDocumentReference = 'ContractDocumentReference',
  Signature = 'Signature',
  ContractingParty = 'ContractingParty',
  EconomicOperatorParty = 'EconomicOperatorParty',
  ReceiverParty = 'ReceiverParty',
  TenderingTerms = 'TenderingTerms',
  TenderingProcess = 'TenderingProcess',
  ProcurementProject = 'ProcurementProject',
  ProcurementProjectLot = 'ProcurementProjectLot',
  TenderResult = 'TenderResult'
}

export const TenderContractFieldMetaUBLExtensions = new FieldMeta<TenderContractField>(
  TenderContractField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const TenderContractFieldMetaUBLVersionID = new FieldMeta<TenderContractField>(
  TenderContractField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  undefined
)

export const TenderContractFieldMetaCustomizationID = new FieldMeta<TenderContractField>(
  TenderContractField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  undefined
)

export const TenderContractFieldMetaProfileID = new FieldMeta<TenderContractField>(
  TenderContractField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  undefined
)

export const TenderContractFieldMetaProfileExecutionID = new FieldMeta<TenderContractField>(
  TenderContractField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  undefined
)

export const TenderContractFieldMetaID = new FieldMeta<TenderContractField>(
  TenderContractField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '0..1',
  undefined,
  undefined
)

export const TenderContractFieldMetaCopyIndicator = new FieldMeta<TenderContractField>(
  TenderContractField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const TenderContractFieldMetaUUID = new FieldMeta<TenderContractField>(
  TenderContractField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const TenderContractFieldMetaContractFolderID = new FieldMeta<TenderContractField>(
  TenderContractField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  'Identifier',
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  '1',
  undefined,
  undefined
)

export const TenderContractFieldMetaIssueDate = new FieldMeta<TenderContractField>(
  TenderContractField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const TenderContractFieldMetaIssueTime = new FieldMeta<TenderContractField>(
  TenderContractField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const TenderContractFieldMetaContractName = new FieldMeta<TenderContractField>(
  TenderContractField.ContractName,
  'ContractName',
  'Contract Name',
  'Text',
  'Short title of a contract associated with this Tender.',
  '0..n',
  undefined,
  undefined
)

export const TenderContractFieldMetaNote = new FieldMeta<TenderContractField>(
  TenderContractField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const TenderContractFieldMetaRegulatoryDomain = new FieldMeta<TenderContractField>(
  TenderContractField.RegulatoryDomain,
  'RegulatoryDomain',
  'Regulatory Domain',
  'Text',
  'Information about the law that defines the regulatory domain.',
  '0..n',
  undefined,
  undefined
)

export const TenderContractFieldMetaPublishAwardIndicator = new FieldMeta<TenderContractField>(
  TenderContractField.PublishAwardIndicator,
  'PublishAwardIndicator',
  'Publish Award Indicator',
  'Indicator',
  'An indicator specifying if the notice is published for service contracts within certain service categories (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const TenderContractFieldMetaPreviousDocumentReference = new FieldMeta<TenderContractField>(
  TenderContractField.PreviousDocumentReference,
  'PreviousDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a previously sent document.',
  '0..n',
  undefined,
  undefined
)

export const TenderContractFieldMetaContractDocumentReference = new FieldMeta<TenderContractField>(
  TenderContractField.ContractDocumentReference,
  'ContractDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a set of minutes.',
  '0..n',
  undefined,
  undefined
)

export const TenderContractFieldMetaSignature = new FieldMeta<TenderContractField>(
  TenderContractField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const TenderContractFieldMetaContractingParty = new FieldMeta<TenderContractField>(
  TenderContractField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  'ContractingParty',
  'The contracting party.',
  '1..n',
  undefined,
  undefined
)

export const TenderContractFieldMetaEconomicOperatorParty = new FieldMeta<TenderContractField>(
  TenderContractField.EconomicOperatorParty,
  'EconomicOperatorParty',
  'Economic Operator Party',
  'EconomicOperatorParty',
  'The Economic Operator issuing the inquiry on the status of a tendering process.',
  '1..n',
  undefined,
  undefined
)

export const TenderContractFieldMetaReceiverParty = new FieldMeta<TenderContractField>(
  TenderContractField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving this document.',
  '0..1',
  undefined,
  undefined
)

export const TenderContractFieldMetaTenderingTerms = new FieldMeta<TenderContractField>(
  TenderContractField.TenderingTerms,
  'TenderingTerms',
  'Tendering Terms',
  'TenderingTerms',
  'The tendering terms associated with this tendering process.',
  '0..1',
  undefined,
  undefined
)

export const TenderContractFieldMetaTenderingProcess = new FieldMeta<TenderContractField>(
  TenderContractField.TenderingProcess,
  'TenderingProcess',
  'Tendering Process',
  'TenderingProcess',
  'A description of the tendering process itself.',
  '0..1',
  undefined,
  undefined
)

export const TenderContractFieldMetaProcurementProject = new FieldMeta<TenderContractField>(
  TenderContractField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  'ProcurementProject',
  'An overall definition of this procurement project.',
  '0..1',
  undefined,
  undefined
)

export const TenderContractFieldMetaProcurementProjectLot = new FieldMeta<TenderContractField>(
  TenderContractField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  'ProcurementProjectLot',
  'Lots that were awarded to the economic operator that can be grouped in the same contract.',
  '0..n',
  undefined,
  undefined
)

export const TenderContractFieldMetaTenderResult = new FieldMeta<TenderContractField>(
  TenderContractField.TenderResult,
  'TenderResult',
  'Tender Result',
  'TenderResult',
  'A result of the bid opening in the tendering process.',
  '1..n',
  undefined,
  undefined
)

export class TenderContractFieldMeta {
  public static readonly UBLExtensions = TenderContractFieldMetaUBLExtensions
  public static readonly UBLVersionID = TenderContractFieldMetaUBLVersionID
  public static readonly CustomizationID = TenderContractFieldMetaCustomizationID
  public static readonly ProfileID = TenderContractFieldMetaProfileID
  public static readonly ProfileExecutionID = TenderContractFieldMetaProfileExecutionID
  public static readonly ID = TenderContractFieldMetaID
  public static readonly CopyIndicator = TenderContractFieldMetaCopyIndicator
  public static readonly UUID = TenderContractFieldMetaUUID
  public static readonly ContractFolderID = TenderContractFieldMetaContractFolderID
  public static readonly IssueDate = TenderContractFieldMetaIssueDate
  public static readonly IssueTime = TenderContractFieldMetaIssueTime
  public static readonly ContractName = TenderContractFieldMetaContractName
  public static readonly Note = TenderContractFieldMetaNote
  public static readonly RegulatoryDomain = TenderContractFieldMetaRegulatoryDomain
  public static readonly PublishAwardIndicator = TenderContractFieldMetaPublishAwardIndicator
  public static readonly PreviousDocumentReference = TenderContractFieldMetaPreviousDocumentReference
  public static readonly ContractDocumentReference = TenderContractFieldMetaContractDocumentReference
  public static readonly Signature = TenderContractFieldMetaSignature
  public static readonly ContractingParty = TenderContractFieldMetaContractingParty
  public static readonly EconomicOperatorParty = TenderContractFieldMetaEconomicOperatorParty
  public static readonly ReceiverParty = TenderContractFieldMetaReceiverParty
  public static readonly TenderingTerms = TenderContractFieldMetaTenderingTerms
  public static readonly TenderingProcess = TenderContractFieldMetaTenderingProcess
  public static readonly ProcurementProject = TenderContractFieldMetaProcurementProject
  public static readonly ProcurementProjectLot = TenderContractFieldMetaProcurementProjectLot
  public static readonly TenderResult = TenderContractFieldMetaTenderResult
}

export const TenderContractFieldMap = new Map([
  [TenderContractField.UBLExtensions, TenderContractFieldMetaUBLExtensions],
  [TenderContractField.UBLVersionID, TenderContractFieldMetaUBLVersionID],
  [TenderContractField.CustomizationID, TenderContractFieldMetaCustomizationID],
  [TenderContractField.ProfileID, TenderContractFieldMetaProfileID],
  [TenderContractField.ProfileExecutionID, TenderContractFieldMetaProfileExecutionID],
  [TenderContractField.ID, TenderContractFieldMetaID],
  [TenderContractField.CopyIndicator, TenderContractFieldMetaCopyIndicator],
  [TenderContractField.UUID, TenderContractFieldMetaUUID],
  [TenderContractField.ContractFolderID, TenderContractFieldMetaContractFolderID],
  [TenderContractField.IssueDate, TenderContractFieldMetaIssueDate],
  [TenderContractField.IssueTime, TenderContractFieldMetaIssueTime],
  [TenderContractField.ContractName, TenderContractFieldMetaContractName],
  [TenderContractField.Note, TenderContractFieldMetaNote],
  [TenderContractField.RegulatoryDomain, TenderContractFieldMetaRegulatoryDomain],
  [TenderContractField.PublishAwardIndicator, TenderContractFieldMetaPublishAwardIndicator],
  [TenderContractField.PreviousDocumentReference, TenderContractFieldMetaPreviousDocumentReference],
  [TenderContractField.ContractDocumentReference, TenderContractFieldMetaContractDocumentReference],
  [TenderContractField.Signature, TenderContractFieldMetaSignature],
  [TenderContractField.ContractingParty, TenderContractFieldMetaContractingParty],
  [TenderContractField.EconomicOperatorParty, TenderContractFieldMetaEconomicOperatorParty],
  [TenderContractField.ReceiverParty, TenderContractFieldMetaReceiverParty],
  [TenderContractField.TenderingTerms, TenderContractFieldMetaTenderingTerms],
  [TenderContractField.TenderingProcess, TenderContractFieldMetaTenderingProcess],
  [TenderContractField.ProcurementProject, TenderContractFieldMetaProcurementProject],
  [TenderContractField.ProcurementProjectLot, TenderContractFieldMetaProcurementProjectLot],
  [TenderContractField.TenderResult, TenderContractFieldMetaTenderResult]
])
