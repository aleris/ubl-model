import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ContractingPartyType } from '../cac/ContractingPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { EconomicOperatorPartyType } from '../cac/EconomicOperatorPartyMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { ProcurementProjectType } from '../cac/ProcurementProjectMeta'
import { ProcurementProjectLotType } from '../cac/ProcurementProjectLotMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TenderingProcessType } from '../cac/TenderingProcessMeta'
import { TenderingTermsType } from '../cac/TenderingTermsMeta'
import { TenderResultType } from '../cac/TenderResultMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TenderContractFieldMetaUBLVersionID = new FieldMeta<TenderContractField>(
  TenderContractField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderContractFieldMetaCustomizationID = new FieldMeta<TenderContractField>(
  TenderContractField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderContractFieldMetaProfileID = new FieldMeta<TenderContractField>(
  TenderContractField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderContractFieldMetaProfileExecutionID = new FieldMeta<TenderContractField>(
  TenderContractField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderContractFieldMetaID = new FieldMeta<TenderContractField>(
  TenderContractField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderContractFieldMetaCopyIndicator = new FieldMeta<TenderContractField>(
  TenderContractField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderContractFieldMetaUUID = new FieldMeta<TenderContractField>(
  TenderContractField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderContractFieldMetaContractFolderID = new FieldMeta<TenderContractField>(
  TenderContractField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  IdentifierType.name,
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderContractFieldMetaIssueDate = new FieldMeta<TenderContractField>(
  TenderContractField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderContractFieldMetaIssueTime = new FieldMeta<TenderContractField>(
  TenderContractField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderContractFieldMetaContractName = new FieldMeta<TenderContractField>(
  TenderContractField.ContractName,
  'ContractName',
  'Contract Name',
  TextType.name,
  'Short title of a contract associated with this Tender.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderContractFieldMetaNote = new FieldMeta<TenderContractField>(
  TenderContractField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderContractFieldMetaRegulatoryDomain = new FieldMeta<TenderContractField>(
  TenderContractField.RegulatoryDomain,
  'RegulatoryDomain',
  'Regulatory Domain',
  TextType.name,
  'Information about the law that defines the regulatory domain.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderContractFieldMetaPublishAwardIndicator = new FieldMeta<TenderContractField>(
  TenderContractField.PublishAwardIndicator,
  'PublishAwardIndicator',
  'Publish Award Indicator',
  IndicatorType.name,
  'An indicator specifying if the notice is published for service contracts within certain service categories (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderContractFieldMetaPreviousDocumentReference = new FieldMeta<TenderContractField>(
  TenderContractField.PreviousDocumentReference,
  'PreviousDocumentReference',
  'Previous Document Reference',
  DocumentReferenceType.name,
  'A reference to a previously sent document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderContractFieldMetaContractDocumentReference = new FieldMeta<TenderContractField>(
  TenderContractField.ContractDocumentReference,
  'ContractDocumentReference',
  'Contract Document Reference',
  DocumentReferenceType.name,
  'A reference to a set of minutes.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderContractFieldMetaSignature = new FieldMeta<TenderContractField>(
  TenderContractField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderContractFieldMetaContractingParty = new FieldMeta<TenderContractField>(
  TenderContractField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  ContractingPartyType.name,
  'The contracting party.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderContractFieldMetaEconomicOperatorParty = new FieldMeta<TenderContractField>(
  TenderContractField.EconomicOperatorParty,
  'EconomicOperatorParty',
  'Economic Operator Party',
  EconomicOperatorPartyType.name,
  'The Economic Operator issuing the inquiry on the status of a tendering process.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderContractFieldMetaReceiverParty = new FieldMeta<TenderContractField>(
  TenderContractField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderContractFieldMetaTenderingTerms = new FieldMeta<TenderContractField>(
  TenderContractField.TenderingTerms,
  'TenderingTerms',
  'Tendering Terms',
  TenderingTermsType.name,
  'The tendering terms associated with this tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderContractFieldMetaTenderingProcess = new FieldMeta<TenderContractField>(
  TenderContractField.TenderingProcess,
  'TenderingProcess',
  'Tendering Process',
  TenderingProcessType.name,
  'A description of the tendering process itself.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderContractFieldMetaProcurementProject = new FieldMeta<TenderContractField>(
  TenderContractField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  ProcurementProjectType.name,
  'An overall definition of this procurement project.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderContractFieldMetaProcurementProjectLot = new FieldMeta<TenderContractField>(
  TenderContractField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  ProcurementProjectLotType.name,
  'Lots that were awarded to the economic operator that can be grouped in the same contract.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderContractFieldMetaTenderResult = new FieldMeta<TenderContractField>(
  TenderContractField.TenderResult,
  'TenderResult',
  'Tender Result',
  TenderResultType.name,
  'A result of the bid opening in the tendering process.',
  FieldCardinality.Multi,
  TypeModule.cac,
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

export const TenderContractType: Type<TenderContractField> = {
  name: 'TenderContract',
  label: 'Tender Contract',
  module: TypeModule.doc,
  definition: 'A document published by a Contracting Party to announce the awarding of a procurement project.',
  fields: TenderContractFieldMap,
}
