import { FieldMeta } from '../../FieldMeta'

export enum ApplicationResponseField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  ResponseDate = 'ResponseDate',
  ResponseTime = 'ResponseTime',
  Note = 'Note',
  VersionID = 'VersionID',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  DocumentResponse = 'DocumentResponse'
}

export const ApplicationResponseFieldMetaUBLExtensions = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaUBLVersionID = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const ApplicationResponseFieldMetaCustomizationID = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const ApplicationResponseFieldMetaProfileID = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const ApplicationResponseFieldMetaProfileExecutionID = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const ApplicationResponseFieldMetaID = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaUUID = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaIssueDate = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaIssueTime = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaResponseDate = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.ResponseDate,
  'ResponseDate',
  'Response Date',
  'Date',
  'The date on which the information in the response was created.',
  '0..1',
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaResponseTime = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.ResponseTime,
  'ResponseTime',
  'Response Time',
  'Time',
  'The time at which the information in the response was created.',
  '0..1',
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaNote = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaVersionID = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'Identifies the current version of this document.',
  '0..1',
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaSignature = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaSenderParty = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.SenderParty,
  'SenderParty',
  'Party',
  'Party',
  'The party sending this document.',
  '1',
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaReceiverParty = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving this document.',
  '1',
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaDocumentResponse = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.DocumentResponse,
  'DocumentResponse',
  'Document Response',
  'DocumentResponse',
  'A response to a document.',
  '0..n',
  undefined,
  undefined
)

export class ApplicationResponseFieldMeta {
  public static readonly UBLExtensions = ApplicationResponseFieldMetaUBLExtensions
  public static readonly UBLVersionID = ApplicationResponseFieldMetaUBLVersionID
  public static readonly CustomizationID = ApplicationResponseFieldMetaCustomizationID
  public static readonly ProfileID = ApplicationResponseFieldMetaProfileID
  public static readonly ProfileExecutionID = ApplicationResponseFieldMetaProfileExecutionID
  public static readonly ID = ApplicationResponseFieldMetaID
  public static readonly UUID = ApplicationResponseFieldMetaUUID
  public static readonly IssueDate = ApplicationResponseFieldMetaIssueDate
  public static readonly IssueTime = ApplicationResponseFieldMetaIssueTime
  public static readonly ResponseDate = ApplicationResponseFieldMetaResponseDate
  public static readonly ResponseTime = ApplicationResponseFieldMetaResponseTime
  public static readonly Note = ApplicationResponseFieldMetaNote
  public static readonly VersionID = ApplicationResponseFieldMetaVersionID
  public static readonly Signature = ApplicationResponseFieldMetaSignature
  public static readonly SenderParty = ApplicationResponseFieldMetaSenderParty
  public static readonly ReceiverParty = ApplicationResponseFieldMetaReceiverParty
  public static readonly DocumentResponse = ApplicationResponseFieldMetaDocumentResponse
}

export const ApplicationResponseFieldMap = new Map([
  [ApplicationResponseField.UBLExtensions, ApplicationResponseFieldMetaUBLExtensions],
  [ApplicationResponseField.UBLVersionID, ApplicationResponseFieldMetaUBLVersionID],
  [ApplicationResponseField.CustomizationID, ApplicationResponseFieldMetaCustomizationID],
  [ApplicationResponseField.ProfileID, ApplicationResponseFieldMetaProfileID],
  [ApplicationResponseField.ProfileExecutionID, ApplicationResponseFieldMetaProfileExecutionID],
  [ApplicationResponseField.ID, ApplicationResponseFieldMetaID],
  [ApplicationResponseField.UUID, ApplicationResponseFieldMetaUUID],
  [ApplicationResponseField.IssueDate, ApplicationResponseFieldMetaIssueDate],
  [ApplicationResponseField.IssueTime, ApplicationResponseFieldMetaIssueTime],
  [ApplicationResponseField.ResponseDate, ApplicationResponseFieldMetaResponseDate],
  [ApplicationResponseField.ResponseTime, ApplicationResponseFieldMetaResponseTime],
  [ApplicationResponseField.Note, ApplicationResponseFieldMetaNote],
  [ApplicationResponseField.VersionID, ApplicationResponseFieldMetaVersionID],
  [ApplicationResponseField.Signature, ApplicationResponseFieldMetaSignature],
  [ApplicationResponseField.SenderParty, ApplicationResponseFieldMetaSenderParty],
  [ApplicationResponseField.ReceiverParty, ApplicationResponseFieldMetaReceiverParty],
  [ApplicationResponseField.DocumentResponse, ApplicationResponseFieldMetaDocumentResponse]
])
