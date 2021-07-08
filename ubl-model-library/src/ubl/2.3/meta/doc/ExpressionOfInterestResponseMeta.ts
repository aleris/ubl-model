import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaUBLVersionID = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'The earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaCustomizationID = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaProfileID = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaProfileExecutionID = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaID = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaCopyIndicator = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaUUID = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaContractFolderID = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  IdentifierType.name,
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaIssueDate = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaIssueTime = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaContractName = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.ContractName,
  'ContractName',
  'Contract Name',
  TextType.name,
  'Short title of a contract associated with this Expression of Interest.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaTenderLanguageLocaleCode = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.TenderLanguageLocaleCode,
  'TenderLanguageLocaleCode',
  'Tender Language Locale Code',
  CodeType.name,
  'A code signifying the language required for the tender.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaNote = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaExpressionOfInterestDocumentReference = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.ExpressionOfInterestDocumentReference,
  'ExpressionOfInterestDocumentReference',
  'Expression Of Interest Document Reference',
  DocumentReferenceType.name,
  'A reference to the expression of interest document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaSignature = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaEconomicOperatorParty = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.EconomicOperatorParty,
  'EconomicOperatorParty',
  'Economic Operator Party',
  EconomicOperatorPartyType.name,
  'The economic operator that issued the expression of interest and is receiving the confirmation.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaContractingParty = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  ContractingPartyType.name,
  'The contracting party or parties in case of joint procurement.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaProcurementProject = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  ProcurementProjectType.name,
  'An overall definition of this procurement project.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExpressionOfInterestResponseFieldMetaProcurementProjectLotReference = new FieldMeta<ExpressionOfInterestResponseField>(
  ExpressionOfInterestResponseField.ProcurementProjectLotReference,
  'ProcurementProjectLotReference',
  'Procurement Project Lot Reference',
  ProcurementProjectLotReferenceType.name,
  'One of the procurement project lots into which this contract can be split.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const ExpressionOfInterestResponseType: Type<ExpressionOfInterestResponseField> = {
  name: 'ExpressionOfInterestResponse',
  label: 'Expression Of Interest Response',
  module: TypeModule.doc,
  definition: 'An expression of interest confirmation issued by a Contracting Party in reply to an expression of interest. The purpose of this document is to inform the Economic Operator he has been registered as an interested party.',
  fields: ExpressionOfInterestResponseFieldMap,
}
