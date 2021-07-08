import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DateType } from '../cbc/DateMeta'
import { DocumentResponseType } from '../cac/DocumentResponseMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaUBLVersionID = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const ApplicationResponseFieldMetaCustomizationID = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const ApplicationResponseFieldMetaProfileID = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const ApplicationResponseFieldMetaProfileExecutionID = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const ApplicationResponseFieldMetaID = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaUUID = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaIssueDate = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaIssueTime = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaResponseDate = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.ResponseDate,
  'ResponseDate',
  'Response Date',
  DateType.name,
  'The date on which the information in the response was created.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaResponseTime = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.ResponseTime,
  'ResponseTime',
  'Response Time',
  TimeType.name,
  'The time at which the information in the response was created.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaNote = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaVersionID = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'Identifies the current version of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaSignature = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaSenderParty = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaReceiverParty = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ApplicationResponseFieldMetaDocumentResponse = new FieldMeta<ApplicationResponseField>(
  ApplicationResponseField.DocumentResponse,
  'DocumentResponse',
  'Document Response',
  DocumentResponseType.name,
  'A response to a document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const ApplicationResponseType: Type<ApplicationResponseField> = {
  name: 'ApplicationResponse',
  label: 'Application Response',
  module: TypeModule.doc,
  definition: 'A document to indicate the application\'s response to a transaction. This may be a business response initiated by a user or a technical response sent automatically by an application.',
  fields: ApplicationResponseFieldMap,
}
