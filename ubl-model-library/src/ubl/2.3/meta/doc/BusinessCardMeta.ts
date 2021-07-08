import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CapabilityType } from '../cac/CapabilityMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const BusinessCardFieldMetaUBLVersionID = new FieldMeta<BusinessCardField>(
  BusinessCardField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.2'
)

export const BusinessCardFieldMetaCustomizationID = new FieldMeta<BusinessCardField>(
  BusinessCardField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const BusinessCardFieldMetaProfileID = new FieldMeta<BusinessCardField>(
  BusinessCardField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const BusinessCardFieldMetaProfileExecutionID = new FieldMeta<BusinessCardField>(
  BusinessCardField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const BusinessCardFieldMetaID = new FieldMeta<BusinessCardField>(
  BusinessCardField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BusinessCardFieldMetaUUID = new FieldMeta<BusinessCardField>(
  BusinessCardField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BusinessCardFieldMetaIssueDate = new FieldMeta<BusinessCardField>(
  BusinessCardField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BusinessCardFieldMetaIssueTime = new FieldMeta<BusinessCardField>(
  BusinessCardField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BusinessCardFieldMetaVersionID = new FieldMeta<BusinessCardField>(
  BusinessCardField.VersionID,
  'VersionID',
  'Version Identifier',
  IdentifierType.name,
  'Identifies the current version of this business card.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.1'
)

export const BusinessCardFieldMetaPreviousVersionID = new FieldMeta<BusinessCardField>(
  BusinessCardField.PreviousVersionID,
  'PreviousVersionID',
  'Previous Version Identifier',
  IdentifierType.name,
  'Identifies the previous version of this business card.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1'
)

export const BusinessCardFieldMetaBriefDescription = new FieldMeta<BusinessCardField>(
  BusinessCardField.BriefDescription,
  'BriefDescription',
  'Brief Description',
  TextType.name,
  'Textual description of the document instance.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BusinessCardFieldMetaSignature = new FieldMeta<BusinessCardField>(
  BusinessCardField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const BusinessCardFieldMetaSenderParty = new FieldMeta<BusinessCardField>(
  BusinessCardField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this business card. This party could be the owner of this business card or a third-party acting on behalf of the owner (e.g. business network).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const BusinessCardFieldMetaReceiverParty = new FieldMeta<BusinessCardField>(
  BusinessCardField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this business card.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const BusinessCardFieldMetaBusinessParty = new FieldMeta<BusinessCardField>(
  BusinessCardField.BusinessParty,
  'BusinessParty',
  'Business Party',
  PartyType.name,
  'The party owning this business card.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const BusinessCardFieldMetaBrochureDocumentReference = new FieldMeta<BusinessCardField>(
  BusinessCardField.BrochureDocumentReference,
  'BrochureDocumentReference',
  'Brochure Document Reference',
  DocumentReferenceType.name,
  'A reference to a company brochure document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const BusinessCardFieldMetaAdditionalDocumentReference = new FieldMeta<BusinessCardField>(
  BusinessCardField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document (e.g. presentations).',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const BusinessCardFieldMetaBusinessCapability = new FieldMeta<BusinessCardField>(
  BusinessCardField.BusinessCapability,
  'BusinessCapability',
  'Business Capability',
  CapabilityType.name,
  'The business capabilities of the party.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const BusinessCardType: Type<BusinessCardField> = {
  name: 'BusinessCard',
  label: 'Business Card',
  module: TypeModule.doc,
  definition: 'A document used to provide information about a business party and its business capabilities.',
  fields: BusinessCardFieldMap,
}
