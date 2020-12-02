import { FieldMeta } from '../FieldMeta'

export enum EnquiryField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  CopyIndicator = 'CopyIndicator',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  LatestReplyDate = 'LatestReplyDate',
  LatestReplyTime = 'LatestReplyTime',
  Description = 'Description',
  Signature = 'Signature',
  RequestorParty = 'RequestorParty',
  ResponderParty = 'ResponderParty',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Attachment = 'Attachment'
}

export const EnquiryFieldMetaUBLExtensions = new FieldMeta<EnquiryField>(
  EnquiryField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const EnquiryFieldMetaUBLVersionID = new FieldMeta<EnquiryField>(
  EnquiryField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const EnquiryFieldMetaCustomizationID = new FieldMeta<EnquiryField>(
  EnquiryField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const EnquiryFieldMetaProfileID = new FieldMeta<EnquiryField>(
  EnquiryField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const EnquiryFieldMetaProfileExecutionID = new FieldMeta<EnquiryField>(
  EnquiryField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const EnquiryFieldMetaID = new FieldMeta<EnquiryField>(
  EnquiryField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the requestor.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EnquiryFieldMetaCopyIndicator = new FieldMeta<EnquiryField>(
  EnquiryField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EnquiryFieldMetaUUID = new FieldMeta<EnquiryField>(
  EnquiryField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EnquiryFieldMetaIssueDate = new FieldMeta<EnquiryField>(
  EnquiryField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the requestor, at which this enquiry was issued.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const EnquiryFieldMetaIssueTime = new FieldMeta<EnquiryField>(
  EnquiryField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the requestor, at which this enquiry was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EnquiryFieldMetaLatestReplyDate = new FieldMeta<EnquiryField>(
  EnquiryField.LatestReplyDate,
  'LatestReplyDate',
  'Latest Reply Date',
  'Date',
  'The date, assigned by the requestor, by which this enquiry shall be replied.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EnquiryFieldMetaLatestReplyTime = new FieldMeta<EnquiryField>(
  EnquiryField.LatestReplyTime,
  'LatestReplyTime',
  'Latest Reply Time',
  'Time',
  'The time, assigned by the requestor, by which this enquiry shall be replied.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EnquiryFieldMetaDescription = new FieldMeta<EnquiryField>(
  EnquiryField.Description,
  'Description',
  'Description',
  'Text',
  'Free-form text-only description pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const EnquiryFieldMetaSignature = new FieldMeta<EnquiryField>(
  EnquiryField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const EnquiryFieldMetaRequestorParty = new FieldMeta<EnquiryField>(
  EnquiryField.RequestorParty,
  'RequestorParty',
  'Requestor Party',
  'Party',
  'The party issuing the enquiry.',
  '1',
  'cac',
  undefined,
  undefined
)

export const EnquiryFieldMetaResponderParty = new FieldMeta<EnquiryField>(
  EnquiryField.ResponderParty,
  'ResponderParty',
  'Responder Party',
  'Party',
  'The party that has to respond to the enquiry.',
  '1',
  'cac',
  undefined,
  undefined
)

export const EnquiryFieldMetaAdditionalDocumentReference = new FieldMeta<EnquiryField>(
  EnquiryField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  'DocumentReference',
  'References to relevant documents for the enquiry such as the Contract folder or the lot in the eTendering.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const EnquiryFieldMetaAttachment = new FieldMeta<EnquiryField>(
  EnquiryField.Attachment,
  'Attachment',
  'Attachment',
  'Attachment',
  'Attachment that includes file-based enquiry.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class EnquiryFieldMeta {
  public static readonly UBLExtensions = EnquiryFieldMetaUBLExtensions
  public static readonly UBLVersionID = EnquiryFieldMetaUBLVersionID
  public static readonly CustomizationID = EnquiryFieldMetaCustomizationID
  public static readonly ProfileID = EnquiryFieldMetaProfileID
  public static readonly ProfileExecutionID = EnquiryFieldMetaProfileExecutionID
  public static readonly ID = EnquiryFieldMetaID
  public static readonly CopyIndicator = EnquiryFieldMetaCopyIndicator
  public static readonly UUID = EnquiryFieldMetaUUID
  public static readonly IssueDate = EnquiryFieldMetaIssueDate
  public static readonly IssueTime = EnquiryFieldMetaIssueTime
  public static readonly LatestReplyDate = EnquiryFieldMetaLatestReplyDate
  public static readonly LatestReplyTime = EnquiryFieldMetaLatestReplyTime
  public static readonly Description = EnquiryFieldMetaDescription
  public static readonly Signature = EnquiryFieldMetaSignature
  public static readonly RequestorParty = EnquiryFieldMetaRequestorParty
  public static readonly ResponderParty = EnquiryFieldMetaResponderParty
  public static readonly AdditionalDocumentReference = EnquiryFieldMetaAdditionalDocumentReference
  public static readonly Attachment = EnquiryFieldMetaAttachment
}

export const EnquiryFieldMap = new Map([
  [EnquiryField.UBLExtensions, EnquiryFieldMetaUBLExtensions],
  [EnquiryField.UBLVersionID, EnquiryFieldMetaUBLVersionID],
  [EnquiryField.CustomizationID, EnquiryFieldMetaCustomizationID],
  [EnquiryField.ProfileID, EnquiryFieldMetaProfileID],
  [EnquiryField.ProfileExecutionID, EnquiryFieldMetaProfileExecutionID],
  [EnquiryField.ID, EnquiryFieldMetaID],
  [EnquiryField.CopyIndicator, EnquiryFieldMetaCopyIndicator],
  [EnquiryField.UUID, EnquiryFieldMetaUUID],
  [EnquiryField.IssueDate, EnquiryFieldMetaIssueDate],
  [EnquiryField.IssueTime, EnquiryFieldMetaIssueTime],
  [EnquiryField.LatestReplyDate, EnquiryFieldMetaLatestReplyDate],
  [EnquiryField.LatestReplyTime, EnquiryFieldMetaLatestReplyTime],
  [EnquiryField.Description, EnquiryFieldMetaDescription],
  [EnquiryField.Signature, EnquiryFieldMetaSignature],
  [EnquiryField.RequestorParty, EnquiryFieldMetaRequestorParty],
  [EnquiryField.ResponderParty, EnquiryFieldMetaResponderParty],
  [EnquiryField.AdditionalDocumentReference, EnquiryFieldMetaAdditionalDocumentReference],
  [EnquiryField.Attachment, EnquiryFieldMetaAttachment]
])
