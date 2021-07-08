import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ContractingPartyType } from '../cac/ContractingPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { EconomicOperatorPartyType } from '../cac/EconomicOperatorPartyMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { ProcurementProjectType } from '../cac/ProcurementProjectMeta'
import { ProcurementProjectLotType } from '../cac/ProcurementProjectLotMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaUBLVersionID = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const TenderStatusRequestFieldMetaCustomizationID = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const TenderStatusRequestFieldMetaProfileID = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const TenderStatusRequestFieldMetaProfileExecutionID = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const TenderStatusRequestFieldMetaID = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaCopyIndicator = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaUUID = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaContractFolderID = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  IdentifierType.name,
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaIssueDate = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaIssueTime = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaContractName = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.ContractName,
  'ContractName',
  'Contract Name',
  TextType.name,
  'Short title of a contract associated with this Tender.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaNote = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaSignature = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaContractingParty = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  ContractingPartyType.name,
  'The Contracting Party eceiving the tender status inquiry.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaEconomicOperatorParty = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.EconomicOperatorParty,
  'EconomicOperatorParty',
  'Economic Operator Party',
  EconomicOperatorPartyType.name,
  'The Economic Operator issuing the inquiry on the status of a tendering process.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaProcurementProject = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  ProcurementProjectType.name,
  'An overall definition of this procurement project.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderStatusRequestFieldMetaProcurementProjectLot = new FieldMeta<TenderStatusRequestField>(
  TenderStatusRequestField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  ProcurementProjectLotType.name,
  'One of the procurement project lots into which this contract can be split.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const TenderStatusRequestType: Type<TenderStatusRequestField> = {
  name: 'TenderStatusRequest',
  label: 'Tender Status Request',
  module: TypeModule.doc,
  definition: 'A document sent by an Economic Operator asking about the details and status of a tendering procedure.',
  fields: TenderStatusRequestFieldMap,
}
