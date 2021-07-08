import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ContractingPartyType } from '../cac/ContractingPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { EconomicOperatorPartyType } from '../cac/EconomicOperatorPartyMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { ProcurementProjectType } from '../cac/ProcurementProjectMeta'
import { ProcurementProjectLotReferenceType } from '../cac/ProcurementProjectLotReferenceMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaUBLVersionID = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'The earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaCustomizationID = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaProfileID = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaProfileExecutionID = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaID = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaCopyIndicator = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaUUID = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaContractFolderID = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  IdentifierType.name,
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaIssueDate = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaIssueTime = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaNote = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaUnsubscribeToProcedureDocumentReference = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.UnsubscribeToProcedureDocumentReference,
  'UnsubscribeToProcedureDocumentReference',
  'Unsubscribe To Procedure Document Reference',
  DocumentReferenceType.name,
  'A reference to the unsubscribe to procedure document associated with this confirmation.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaSignature = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaEconomicOperatorParty = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.EconomicOperatorParty,
  'EconomicOperatorParty',
  'Economic Operator Party',
  EconomicOperatorPartyType.name,
  'The Economic Operator receiving this unsubscribe to procedure confirmation.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaContractingParty = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  ContractingPartyType.name,
  'The Contracting Party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaProcurementProject = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  ProcurementProjectType.name,
  'An overall definition of this procurement project.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const UnsubscribeFromProcedureResponseFieldMetaProcurementProjectLotReference = new FieldMeta<UnsubscribeFromProcedureResponseField>(
  UnsubscribeFromProcedureResponseField.ProcurementProjectLotReference,
  'ProcurementProjectLotReference',
  'Procurement Project Lot Reference',
  ProcurementProjectLotReferenceType.name,
  'One of the procurement project lots into which this contract can be split.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const UnsubscribeFromProcedureResponseType: Type<UnsubscribeFromProcedureResponseField> = {
  name: 'UnsubscribeFromProcedureResponse',
  label: 'Unsubscribe From Procedure Response',
  module: TypeModule.doc,
  definition: 'A document sent from a Contracting Party to the Economic Operator confirming that the latter has been unsubscribed from a tendering procedure.',
  fields: UnsubscribeFromProcedureResponseFieldMap,
}
