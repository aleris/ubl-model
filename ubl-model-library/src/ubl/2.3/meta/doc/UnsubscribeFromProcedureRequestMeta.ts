import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ContractingPartyType } from '../cac/ContractingPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { EconomicOperatorPartyType } from '../cac/EconomicOperatorPartyMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { ProcurementProjectType } from '../cac/ProcurementProjectMeta'
import { ProcurementProjectLotReferenceType } from '../cac/ProcurementProjectLotReferenceMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaUBLVersionID = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'The earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaCustomizationID = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaProfileID = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaProfileExecutionID = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaID = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaCopyIndicator = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaUUID = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaContractFolderID = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  IdentifierType.name,
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaIssueDate = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaIssueTime = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaNote = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaSignature = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaEconomicOperatorParty = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.EconomicOperatorParty,
  'EconomicOperatorParty',
  'Economic Operator Party',
  EconomicOperatorPartyType.name,
  'The Economic Operator issuing this unsubscribe request.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaContractingParty = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  ContractingPartyType.name,
  'The Contracting Party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaProcurementProject = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  ProcurementProjectType.name,
  'An overall definition of this procurement project.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureRequestFieldMetaProcurementProjectLotReference = new FieldMeta<UnsubscribeFromProcedureRequestField>(
  UnsubscribeFromProcedureRequestField.ProcurementProjectLotReference,
  'ProcurementProjectLotReference',
  'Procurement Project Lot Reference',
  ProcurementProjectLotReferenceType.name,
  'One of the procurement project lots into which this contract can be split.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const UnsubscribeFromProcedureRequestType: Type<UnsubscribeFromProcedureRequestField> = {
  name: 'UnsubscribeFromProcedureRequest',
  label: 'Unsubscribe From Procedure Request',
  module: TypeModule.doc,
  definition: 'A request to unsubscribe from a tendering procedure. Economic Operators can subscribe to a tendering procedure using the Expression Of Interest. Upon subscription, the Economic Operator keeps receiving relevant documentation for the tendering process. The unsubscribe to procedure document allows the Economic Operator to be removed from the list of interested parties.',
  fields: UnsubscribeFromProcedureRequestFieldMap,
}
