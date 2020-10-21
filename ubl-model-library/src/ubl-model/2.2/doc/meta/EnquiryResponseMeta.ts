import { FieldMeta } from '../../FieldMeta'

export enum EnquiryResponseField {
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
  Description = 'Description',
  Signature = 'Signature',
  RequestorParty = 'RequestorParty',
  ResponderParty = 'ResponderParty',
  ParentDocumentReference = 'ParentDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Attachment = 'Attachment'
}

export const EnquiryResponseFieldMetaUBLExtensions = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaUBLVersionID = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const EnquiryResponseFieldMetaCustomizationID = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const EnquiryResponseFieldMetaProfileID = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const EnquiryResponseFieldMetaProfileExecutionID = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const EnquiryResponseFieldMetaID = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the responder.',
  '0..1',
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaCopyIndicator = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaUUID = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaIssueDate = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the responder, at which this enquiry response was issued.',
  '1',
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaIssueTime = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the responder, at which this enquiry response was issued.',
  '0..1',
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaDescription = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.Description,
  'Description',
  'Description',
  'Text',
  'Free-form text-only enquiry response description pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaSignature = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaRequestorParty = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.RequestorParty,
  'RequestorParty',
  'Party',
  'Party',
  'The party issuing the enquiry.',
  '1',
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaResponderParty = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.ResponderParty,
  'ResponderParty',
  'Party',
  'Party',
  'The party that has to respond to the enquiry.',
  '1',
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaParentDocumentReference = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.ParentDocumentReference,
  'ParentDocumentReference',
  'Document Reference',
  'DocumentReference',
  'Reference to the enquiry that this response refers to.',
  '1',
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaAdditionalDocumentReference = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'References to relevant documents for the response such as the Contract folder or the lot in the eTendering.',
  '0..n',
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaAttachment = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.Attachment,
  'Attachment',
  'Attachment',
  'Attachment',
  'Attachment that includes file-based response.',
  '0..n',
  undefined,
  undefined
)

export class EnquiryResponseFieldMeta {
  public static readonly UBLExtensions = EnquiryResponseFieldMetaUBLExtensions
  public static readonly UBLVersionID = EnquiryResponseFieldMetaUBLVersionID
  public static readonly CustomizationID = EnquiryResponseFieldMetaCustomizationID
  public static readonly ProfileID = EnquiryResponseFieldMetaProfileID
  public static readonly ProfileExecutionID = EnquiryResponseFieldMetaProfileExecutionID
  public static readonly ID = EnquiryResponseFieldMetaID
  public static readonly CopyIndicator = EnquiryResponseFieldMetaCopyIndicator
  public static readonly UUID = EnquiryResponseFieldMetaUUID
  public static readonly IssueDate = EnquiryResponseFieldMetaIssueDate
  public static readonly IssueTime = EnquiryResponseFieldMetaIssueTime
  public static readonly Description = EnquiryResponseFieldMetaDescription
  public static readonly Signature = EnquiryResponseFieldMetaSignature
  public static readonly RequestorParty = EnquiryResponseFieldMetaRequestorParty
  public static readonly ResponderParty = EnquiryResponseFieldMetaResponderParty
  public static readonly ParentDocumentReference = EnquiryResponseFieldMetaParentDocumentReference
  public static readonly AdditionalDocumentReference = EnquiryResponseFieldMetaAdditionalDocumentReference
  public static readonly Attachment = EnquiryResponseFieldMetaAttachment
}

export const EnquiryResponseFieldMap = new Map([
  [EnquiryResponseField.UBLExtensions, EnquiryResponseFieldMetaUBLExtensions],
  [EnquiryResponseField.UBLVersionID, EnquiryResponseFieldMetaUBLVersionID],
  [EnquiryResponseField.CustomizationID, EnquiryResponseFieldMetaCustomizationID],
  [EnquiryResponseField.ProfileID, EnquiryResponseFieldMetaProfileID],
  [EnquiryResponseField.ProfileExecutionID, EnquiryResponseFieldMetaProfileExecutionID],
  [EnquiryResponseField.ID, EnquiryResponseFieldMetaID],
  [EnquiryResponseField.CopyIndicator, EnquiryResponseFieldMetaCopyIndicator],
  [EnquiryResponseField.UUID, EnquiryResponseFieldMetaUUID],
  [EnquiryResponseField.IssueDate, EnquiryResponseFieldMetaIssueDate],
  [EnquiryResponseField.IssueTime, EnquiryResponseFieldMetaIssueTime],
  [EnquiryResponseField.Description, EnquiryResponseFieldMetaDescription],
  [EnquiryResponseField.Signature, EnquiryResponseFieldMetaSignature],
  [EnquiryResponseField.RequestorParty, EnquiryResponseFieldMetaRequestorParty],
  [EnquiryResponseField.ResponderParty, EnquiryResponseFieldMetaResponderParty],
  [EnquiryResponseField.ParentDocumentReference, EnquiryResponseFieldMetaParentDocumentReference],
  [EnquiryResponseField.AdditionalDocumentReference, EnquiryResponseFieldMetaAdditionalDocumentReference],
  [EnquiryResponseField.Attachment, EnquiryResponseFieldMetaAttachment]
])
