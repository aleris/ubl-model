import { FieldMeta } from '../../FieldMeta'

export enum BusinessCardField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  VersionID = 'VersionID',
  PreviousVersionID = 'PreviousVersionID',
  BriefDescription = 'BriefDescription',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  BusinessParty = 'BusinessParty',
  BrochureDocumentReference = 'BrochureDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  BusinessCapability = 'BusinessCapability'
}

export const BusinessCardFieldMetaUBLExtensions = new FieldMeta<BusinessCardField>(
  BusinessCardField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const BusinessCardFieldMetaUBLVersionID = new FieldMeta<BusinessCardField>(
  BusinessCardField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.2'
)

export const BusinessCardFieldMetaCustomizationID = new FieldMeta<BusinessCardField>(
  BusinessCardField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const BusinessCardFieldMetaProfileID = new FieldMeta<BusinessCardField>(
  BusinessCardField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const BusinessCardFieldMetaProfileExecutionID = new FieldMeta<BusinessCardField>(
  BusinessCardField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const BusinessCardFieldMetaID = new FieldMeta<BusinessCardField>(
  BusinessCardField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const BusinessCardFieldMetaUUID = new FieldMeta<BusinessCardField>(
  BusinessCardField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const BusinessCardFieldMetaIssueDate = new FieldMeta<BusinessCardField>(
  BusinessCardField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const BusinessCardFieldMetaIssueTime = new FieldMeta<BusinessCardField>(
  BusinessCardField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const BusinessCardFieldMetaVersionID = new FieldMeta<BusinessCardField>(
  BusinessCardField.VersionID,
  'VersionID',
  'Version Identifier',
  'Identifier',
  'Identifies the current version of this business card.',
  '0..1',
  undefined,
  '1.1'
)

export const BusinessCardFieldMetaPreviousVersionID = new FieldMeta<BusinessCardField>(
  BusinessCardField.PreviousVersionID,
  'PreviousVersionID',
  'Previous Version Identifier',
  'Identifier',
  'Identifies the previous version of this business card.',
  '0..1',
  undefined,
  '1'
)

export const BusinessCardFieldMetaBriefDescription = new FieldMeta<BusinessCardField>(
  BusinessCardField.BriefDescription,
  'BriefDescription',
  'Description',
  'Text',
  'Textual description of the document instance.',
  '0..n',
  undefined,
  undefined
)

export const BusinessCardFieldMetaSignature = new FieldMeta<BusinessCardField>(
  BusinessCardField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const BusinessCardFieldMetaSenderParty = new FieldMeta<BusinessCardField>(
  BusinessCardField.SenderParty,
  'SenderParty',
  'Party',
  'Party',
  'The party sending this business card. This party could be the owner of this business card or a third-party acting on behalf of the owner (e.g. business network).',
  '0..1',
  undefined,
  undefined
)

export const BusinessCardFieldMetaReceiverParty = new FieldMeta<BusinessCardField>(
  BusinessCardField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving this business card.',
  '0..1',
  undefined,
  undefined
)

export const BusinessCardFieldMetaBusinessParty = new FieldMeta<BusinessCardField>(
  BusinessCardField.BusinessParty,
  'BusinessParty',
  'Party',
  'Party',
  'The party owning this business card.',
  '1',
  undefined,
  undefined
)

export const BusinessCardFieldMetaBrochureDocumentReference = new FieldMeta<BusinessCardField>(
  BusinessCardField.BrochureDocumentReference,
  'BrochureDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a company brochure document.',
  '0..n',
  undefined,
  undefined
)

export const BusinessCardFieldMetaAdditionalDocumentReference = new FieldMeta<BusinessCardField>(
  BusinessCardField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an additional document (e.g. presentations).',
  '0..n',
  undefined,
  undefined
)

export const BusinessCardFieldMetaBusinessCapability = new FieldMeta<BusinessCardField>(
  BusinessCardField.BusinessCapability,
  'BusinessCapability',
  'Capability',
  'Capability',
  'The business capabilities of the party.',
  '0..n',
  undefined,
  undefined
)

export class BusinessCardFieldMeta {
  public static readonly UBLExtensions = BusinessCardFieldMetaUBLExtensions
  public static readonly UBLVersionID = BusinessCardFieldMetaUBLVersionID
  public static readonly CustomizationID = BusinessCardFieldMetaCustomizationID
  public static readonly ProfileID = BusinessCardFieldMetaProfileID
  public static readonly ProfileExecutionID = BusinessCardFieldMetaProfileExecutionID
  public static readonly ID = BusinessCardFieldMetaID
  public static readonly UUID = BusinessCardFieldMetaUUID
  public static readonly IssueDate = BusinessCardFieldMetaIssueDate
  public static readonly IssueTime = BusinessCardFieldMetaIssueTime
  public static readonly VersionID = BusinessCardFieldMetaVersionID
  public static readonly PreviousVersionID = BusinessCardFieldMetaPreviousVersionID
  public static readonly BriefDescription = BusinessCardFieldMetaBriefDescription
  public static readonly Signature = BusinessCardFieldMetaSignature
  public static readonly SenderParty = BusinessCardFieldMetaSenderParty
  public static readonly ReceiverParty = BusinessCardFieldMetaReceiverParty
  public static readonly BusinessParty = BusinessCardFieldMetaBusinessParty
  public static readonly BrochureDocumentReference = BusinessCardFieldMetaBrochureDocumentReference
  public static readonly AdditionalDocumentReference = BusinessCardFieldMetaAdditionalDocumentReference
  public static readonly BusinessCapability = BusinessCardFieldMetaBusinessCapability
}

export const BusinessCardFieldMap = new Map([
  [BusinessCardField.UBLExtensions, BusinessCardFieldMetaUBLExtensions],
  [BusinessCardField.UBLVersionID, BusinessCardFieldMetaUBLVersionID],
  [BusinessCardField.CustomizationID, BusinessCardFieldMetaCustomizationID],
  [BusinessCardField.ProfileID, BusinessCardFieldMetaProfileID],
  [BusinessCardField.ProfileExecutionID, BusinessCardFieldMetaProfileExecutionID],
  [BusinessCardField.ID, BusinessCardFieldMetaID],
  [BusinessCardField.UUID, BusinessCardFieldMetaUUID],
  [BusinessCardField.IssueDate, BusinessCardFieldMetaIssueDate],
  [BusinessCardField.IssueTime, BusinessCardFieldMetaIssueTime],
  [BusinessCardField.VersionID, BusinessCardFieldMetaVersionID],
  [BusinessCardField.PreviousVersionID, BusinessCardFieldMetaPreviousVersionID],
  [BusinessCardField.BriefDescription, BusinessCardFieldMetaBriefDescription],
  [BusinessCardField.Signature, BusinessCardFieldMetaSignature],
  [BusinessCardField.SenderParty, BusinessCardFieldMetaSenderParty],
  [BusinessCardField.ReceiverParty, BusinessCardFieldMetaReceiverParty],
  [BusinessCardField.BusinessParty, BusinessCardFieldMetaBusinessParty],
  [BusinessCardField.BrochureDocumentReference, BusinessCardFieldMetaBrochureDocumentReference],
  [BusinessCardField.AdditionalDocumentReference, BusinessCardFieldMetaAdditionalDocumentReference],
  [BusinessCardField.BusinessCapability, BusinessCardFieldMetaBusinessCapability]
])
