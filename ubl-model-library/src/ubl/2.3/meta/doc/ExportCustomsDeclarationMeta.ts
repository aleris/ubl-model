import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CustomsDeclarationType } from '../cac/CustomsDeclarationMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ExportCustomsDeclarationField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  ExportTypeCode = 'ExportTypeCode',
  ExportReasonCode = 'ExportReasonCode',
  Note = 'Note',
  VersionID = 'VersionID',
  ExporterParty = 'ExporterParty',
  CustomsDeclaration = 'CustomsDeclaration',
  Signature = 'Signature'
}

export const ExportCustomsDeclarationFieldMetaUBLExtensions = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaUBLVersionID = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.3'
)

export const ExportCustomsDeclarationFieldMetaCustomizationID = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaProfileID = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaProfileExecutionID = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const ExportCustomsDeclarationFieldMetaID = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaUUID = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaIssueDate = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaIssueTime = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaExportTypeCode = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.ExportTypeCode,
  'ExportTypeCode',
  'Export Type Code',
  CodeType.name,
  'A code specifying the type of export',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaExportReasonCode = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.ExportReasonCode,
  'ExportReasonCode',
  'Export Reason Code',
  CodeType.name,
  'A code specifying the reason for the goods being exported',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaNote = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaVersionID = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'Identifies the current version of this export customs declaration',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaExporterParty = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.ExporterParty,
  'ExporterParty',
  'Exporter Party',
  PartyType.name,
  'The party who exports the goods or has similar right of disposal over them at the time of export',
  FieldCardinality.Uni,
  TypeModule.cac,
  'Exporter (WCO ID 41 and 42)',
  undefined
)

export const ExportCustomsDeclarationFieldMetaCustomsDeclaration = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.CustomsDeclaration,
  'CustomsDeclaration',
  'Customs Declaration',
  CustomsDeclarationType.name,
  'The reference to the customs declaration of the goods being exported',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaSignature = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class ExportCustomsDeclarationFieldMeta {
  public static readonly UBLExtensions = ExportCustomsDeclarationFieldMetaUBLExtensions
  public static readonly UBLVersionID = ExportCustomsDeclarationFieldMetaUBLVersionID
  public static readonly CustomizationID = ExportCustomsDeclarationFieldMetaCustomizationID
  public static readonly ProfileID = ExportCustomsDeclarationFieldMetaProfileID
  public static readonly ProfileExecutionID = ExportCustomsDeclarationFieldMetaProfileExecutionID
  public static readonly ID = ExportCustomsDeclarationFieldMetaID
  public static readonly UUID = ExportCustomsDeclarationFieldMetaUUID
  public static readonly IssueDate = ExportCustomsDeclarationFieldMetaIssueDate
  public static readonly IssueTime = ExportCustomsDeclarationFieldMetaIssueTime
  public static readonly ExportTypeCode = ExportCustomsDeclarationFieldMetaExportTypeCode
  public static readonly ExportReasonCode = ExportCustomsDeclarationFieldMetaExportReasonCode
  public static readonly Note = ExportCustomsDeclarationFieldMetaNote
  public static readonly VersionID = ExportCustomsDeclarationFieldMetaVersionID
  public static readonly ExporterParty = ExportCustomsDeclarationFieldMetaExporterParty
  public static readonly CustomsDeclaration = ExportCustomsDeclarationFieldMetaCustomsDeclaration
  public static readonly Signature = ExportCustomsDeclarationFieldMetaSignature
}

export const ExportCustomsDeclarationFieldMap = new Map([
  [ExportCustomsDeclarationField.UBLExtensions, ExportCustomsDeclarationFieldMetaUBLExtensions],
  [ExportCustomsDeclarationField.UBLVersionID, ExportCustomsDeclarationFieldMetaUBLVersionID],
  [ExportCustomsDeclarationField.CustomizationID, ExportCustomsDeclarationFieldMetaCustomizationID],
  [ExportCustomsDeclarationField.ProfileID, ExportCustomsDeclarationFieldMetaProfileID],
  [ExportCustomsDeclarationField.ProfileExecutionID, ExportCustomsDeclarationFieldMetaProfileExecutionID],
  [ExportCustomsDeclarationField.ID, ExportCustomsDeclarationFieldMetaID],
  [ExportCustomsDeclarationField.UUID, ExportCustomsDeclarationFieldMetaUUID],
  [ExportCustomsDeclarationField.IssueDate, ExportCustomsDeclarationFieldMetaIssueDate],
  [ExportCustomsDeclarationField.IssueTime, ExportCustomsDeclarationFieldMetaIssueTime],
  [ExportCustomsDeclarationField.ExportTypeCode, ExportCustomsDeclarationFieldMetaExportTypeCode],
  [ExportCustomsDeclarationField.ExportReasonCode, ExportCustomsDeclarationFieldMetaExportReasonCode],
  [ExportCustomsDeclarationField.Note, ExportCustomsDeclarationFieldMetaNote],
  [ExportCustomsDeclarationField.VersionID, ExportCustomsDeclarationFieldMetaVersionID],
  [ExportCustomsDeclarationField.ExporterParty, ExportCustomsDeclarationFieldMetaExporterParty],
  [ExportCustomsDeclarationField.CustomsDeclaration, ExportCustomsDeclarationFieldMetaCustomsDeclaration],
  [ExportCustomsDeclarationField.Signature, ExportCustomsDeclarationFieldMetaSignature]
])

export const ExportCustomsDeclarationType: Type<ExportCustomsDeclarationField> = {
  name: 'ExportCustomsDeclaration',
  label: 'Export Customs Declaration',
  module: TypeModule.doc,
  definition: 'A customs declaration document for exporting goods',
  fields: ExportCustomsDeclarationFieldMap,
}
