import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AttachmentType } from '../cac/AttachmentMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaUBLVersionID = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const EnquiryResponseFieldMetaCustomizationID = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const EnquiryResponseFieldMetaProfileID = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const EnquiryResponseFieldMetaProfileExecutionID = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const EnquiryResponseFieldMetaID = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the responder.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaCopyIndicator = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaUUID = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaIssueDate = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the responder, at which this enquiry response was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaIssueTime = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the responder, at which this enquiry response was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaDescription = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.Description,
  'Description',
  'Description',
  TextType.name,
  'Free-form text-only enquiry response description pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaSignature = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaRequestorParty = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.RequestorParty,
  'RequestorParty',
  'Requestor Party',
  PartyType.name,
  'The party issuing the enquiry.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaResponderParty = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.ResponderParty,
  'ResponderParty',
  'Responder Party',
  PartyType.name,
  'The party that has to respond to the enquiry.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaParentDocumentReference = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.ParentDocumentReference,
  'ParentDocumentReference',
  'Parent Document Reference',
  DocumentReferenceType.name,
  'Reference to the enquiry that this response refers to.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaAdditionalDocumentReference = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'References to relevant documents for the response such as the Contract folder or the lot in the eTendering.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const EnquiryResponseFieldMetaAttachment = new FieldMeta<EnquiryResponseField>(
  EnquiryResponseField.Attachment,
  'Attachment',
  'Attachment',
  AttachmentType.name,
  'Attachment that includes file-based response.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const EnquiryResponseType: Type<EnquiryResponseField> = {
  name: 'EnquiryResponse',
  label: 'Enquiry Response',
  module: TypeModule.doc,
  definition: 'A document sent by a responder to a requester answering a particular enqury.',
  fields: EnquiryResponseFieldMap,
}
