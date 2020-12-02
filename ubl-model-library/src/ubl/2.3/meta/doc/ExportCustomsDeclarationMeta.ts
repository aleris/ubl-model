import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaUBLVersionID = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.3'
)

export const ExportCustomsDeclarationFieldMetaCustomizationID = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaProfileID = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaProfileExecutionID = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const ExportCustomsDeclarationFieldMetaID = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaUUID = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaIssueDate = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaIssueTime = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaExportTypeCode = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.ExportTypeCode,
  'ExportTypeCode',
  'Export Type Code',
  'Code',
  'A code specifying the type of export',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaExportReasonCode = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.ExportReasonCode,
  'ExportReasonCode',
  'Export Reason Code',
  'Code',
  'A code specifying the reason for the goods being exported',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaNote = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaVersionID = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'Identifies the current version of this export customs declaration',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaExporterParty = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.ExporterParty,
  'ExporterParty',
  'Exporter Party',
  'Party',
  'The party who exports the goods or has similar right of disposal over them at the time of export',
  '1',
  'cac',
  'Exporter (WCO ID 41 and 42)',
  undefined
)

export const ExportCustomsDeclarationFieldMetaCustomsDeclaration = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.CustomsDeclaration,
  'CustomsDeclaration',
  'Customs Declaration',
  'CustomsDeclaration',
  'The reference to the customs declaration of the goods being exported',
  '1',
  'cac',
  undefined,
  undefined
)

export const ExportCustomsDeclarationFieldMetaSignature = new FieldMeta<ExportCustomsDeclarationField>(
  ExportCustomsDeclarationField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
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
