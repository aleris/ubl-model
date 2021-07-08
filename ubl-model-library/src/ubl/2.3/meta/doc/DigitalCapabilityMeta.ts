import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DateType } from '../cbc/DateMeta'
import { DigitalProcessType } from '../cac/DigitalProcessMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DigitalCapabilityField {
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
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  BusinessParty = 'BusinessParty',
  DigitalProcess = 'DigitalProcess'
}

export const DigitalCapabilityFieldMetaUBLExtensions = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DigitalCapabilityFieldMetaUBLVersionID = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.2'
)

export const DigitalCapabilityFieldMetaCustomizationID = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const DigitalCapabilityFieldMetaProfileID = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const DigitalCapabilityFieldMetaProfileExecutionID = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const DigitalCapabilityFieldMetaID = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DigitalCapabilityFieldMetaUUID = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DigitalCapabilityFieldMetaIssueDate = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DigitalCapabilityFieldMetaIssueTime = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DigitalCapabilityFieldMetaVersionID = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.VersionID,
  'VersionID',
  'Version Identifier',
  IdentifierType.name,
  'Identifies the current version of party\'s digital capabilities.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.1'
)

export const DigitalCapabilityFieldMetaPreviousVersionID = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.PreviousVersionID,
  'PreviousVersionID',
  'Previous Version Identifier',
  IdentifierType.name,
  'Identifies the previous version of party\'s digital capabilities.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1'
)

export const DigitalCapabilityFieldMetaSignature = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DigitalCapabilityFieldMetaSenderParty = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending these digital capabilities. This party could be the owner of these digital capabilities or a third-party acting on behalf of the owner (e.g. service provider).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DigitalCapabilityFieldMetaReceiverParty = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving these digital capabilities.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DigitalCapabilityFieldMetaBusinessParty = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.BusinessParty,
  'BusinessParty',
  'Business Party',
  PartyType.name,
  'The party owning these digital capabilities.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const DigitalCapabilityFieldMetaDigitalProcess = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.DigitalProcess,
  'DigitalProcess',
  'Digital Process',
  DigitalProcessType.name,
  'The digital trade processes supported by the party.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class DigitalCapabilityFieldMeta {
  public static readonly UBLExtensions = DigitalCapabilityFieldMetaUBLExtensions
  public static readonly UBLVersionID = DigitalCapabilityFieldMetaUBLVersionID
  public static readonly CustomizationID = DigitalCapabilityFieldMetaCustomizationID
  public static readonly ProfileID = DigitalCapabilityFieldMetaProfileID
  public static readonly ProfileExecutionID = DigitalCapabilityFieldMetaProfileExecutionID
  public static readonly ID = DigitalCapabilityFieldMetaID
  public static readonly UUID = DigitalCapabilityFieldMetaUUID
  public static readonly IssueDate = DigitalCapabilityFieldMetaIssueDate
  public static readonly IssueTime = DigitalCapabilityFieldMetaIssueTime
  public static readonly VersionID = DigitalCapabilityFieldMetaVersionID
  public static readonly PreviousVersionID = DigitalCapabilityFieldMetaPreviousVersionID
  public static readonly Signature = DigitalCapabilityFieldMetaSignature
  public static readonly SenderParty = DigitalCapabilityFieldMetaSenderParty
  public static readonly ReceiverParty = DigitalCapabilityFieldMetaReceiverParty
  public static readonly BusinessParty = DigitalCapabilityFieldMetaBusinessParty
  public static readonly DigitalProcess = DigitalCapabilityFieldMetaDigitalProcess
}

export const DigitalCapabilityFieldMap = new Map([
  [DigitalCapabilityField.UBLExtensions, DigitalCapabilityFieldMetaUBLExtensions],
  [DigitalCapabilityField.UBLVersionID, DigitalCapabilityFieldMetaUBLVersionID],
  [DigitalCapabilityField.CustomizationID, DigitalCapabilityFieldMetaCustomizationID],
  [DigitalCapabilityField.ProfileID, DigitalCapabilityFieldMetaProfileID],
  [DigitalCapabilityField.ProfileExecutionID, DigitalCapabilityFieldMetaProfileExecutionID],
  [DigitalCapabilityField.ID, DigitalCapabilityFieldMetaID],
  [DigitalCapabilityField.UUID, DigitalCapabilityFieldMetaUUID],
  [DigitalCapabilityField.IssueDate, DigitalCapabilityFieldMetaIssueDate],
  [DigitalCapabilityField.IssueTime, DigitalCapabilityFieldMetaIssueTime],
  [DigitalCapabilityField.VersionID, DigitalCapabilityFieldMetaVersionID],
  [DigitalCapabilityField.PreviousVersionID, DigitalCapabilityFieldMetaPreviousVersionID],
  [DigitalCapabilityField.Signature, DigitalCapabilityFieldMetaSignature],
  [DigitalCapabilityField.SenderParty, DigitalCapabilityFieldMetaSenderParty],
  [DigitalCapabilityField.ReceiverParty, DigitalCapabilityFieldMetaReceiverParty],
  [DigitalCapabilityField.BusinessParty, DigitalCapabilityFieldMetaBusinessParty],
  [DigitalCapabilityField.DigitalProcess, DigitalCapabilityFieldMetaDigitalProcess]
])

export const DigitalCapabilityType: Type<DigitalCapabilityField> = {
  name: 'DigitalCapability',
  label: 'Digital Capability',
  module: TypeModule.doc,
  definition: 'A document used to provide information about a business party and its digital trade capabilities.',
  fields: DigitalCapabilityFieldMap,
}
