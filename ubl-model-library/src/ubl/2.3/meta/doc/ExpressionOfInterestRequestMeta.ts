import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { ContractingPartyType } from '../cac/ContractingPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { EconomicOperatorPartyType } from '../cac/EconomicOperatorPartyMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { ProcurementProjectType } from '../cac/ProcurementProjectMeta'
import { ProcurementProjectLotReferenceType } from '../cac/ProcurementProjectLotReferenceMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaUBLVersionID = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'The earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaCustomizationID = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaProfileID = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaProfileExecutionID = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaID = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaCopyIndicator = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaUUID = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaContractFolderID = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  IdentifierType.name,
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaIssueDate = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaIssueTime = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaContractName = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.ContractName,
  'ContractName',
  'Contract Name',
  TextType.name,
  'Short title of a contract associated with this Expression of Interest.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaPreferredLanguageLocaleCode = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.PreferredLanguageLocaleCode,
  'PreferredLanguageLocaleCode',
  'Preferred Language Locale Code',
  CodeType.name,
  'A code signifying the locale in which the language in the required documents is preferred.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaNote = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaValidityPeriod = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'The period for which the expression of interest is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaDocumentReference = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to another document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaSignature = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaEconomicOperatorParty = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.EconomicOperatorParty,
  'EconomicOperatorParty',
  'Economic Operator Party',
  EconomicOperatorPartyType.name,
  'The Economic Operator issuing the expression of interest.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaContractingParty = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  ContractingPartyType.name,
  'The Contracting Party or the contracting parties in case of joint procurement.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaProcurementProject = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  ProcurementProjectType.name,
  'An overall definition of this procurement project.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExpressionOfInterestRequestFieldMetaProcurementProjectLotReference = new FieldMeta<ExpressionOfInterestRequestField>(
  ExpressionOfInterestRequestField.ProcurementProjectLotReference,
  'ProcurementProjectLotReference',
  'Procurement Project Lot Reference',
  ProcurementProjectLotReferenceType.name,
  'One of the procurement project lots into which this contract can be split.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const ExpressionOfInterestRequestType: Type<ExpressionOfInterestRequestField> = {
  name: 'ExpressionOfInterestRequest',
  label: 'Expression Of Interest Request',
  module: TypeModule.doc,
  definition: 'An expression of interest to a tendering process. An Economic Operator can demonstrate interest in a tendering process issuing an Expression Of Interest document to the contracting party. Upon reception, the Contracting Party registers the interest of the Economic Operator sending the relevant information for the tendering process.',
  fields: ExpressionOfInterestRequestFieldMap,
}
