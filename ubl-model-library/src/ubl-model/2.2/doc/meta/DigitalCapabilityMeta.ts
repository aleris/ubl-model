import { FieldMeta } from '../../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const DigitalCapabilityFieldMetaUBLVersionID = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.2'
)

export const DigitalCapabilityFieldMetaCustomizationID = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const DigitalCapabilityFieldMetaProfileID = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const DigitalCapabilityFieldMetaProfileExecutionID = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const DigitalCapabilityFieldMetaID = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const DigitalCapabilityFieldMetaUUID = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const DigitalCapabilityFieldMetaIssueDate = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const DigitalCapabilityFieldMetaIssueTime = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const DigitalCapabilityFieldMetaVersionID = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.VersionID,
  'VersionID',
  'Version Identifier',
  'Identifier',
  'Identifies the current version of party\'s digital capabilities.',
  '0..1',
  undefined,
  '1.1'
)

export const DigitalCapabilityFieldMetaPreviousVersionID = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.PreviousVersionID,
  'PreviousVersionID',
  'Previous Version Identifier',
  'Identifier',
  'Identifies the previous version of party\'s digital capabilities.',
  '0..1',
  undefined,
  '1'
)

export const DigitalCapabilityFieldMetaSignature = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const DigitalCapabilityFieldMetaSenderParty = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.SenderParty,
  'SenderParty',
  'Party',
  'Party',
  'The party sending these digital capabilities. This party could be the owner of these digital capabilities or a third-party acting on behalf of the owner (e.g. service provider).',
  '0..1',
  undefined,
  undefined
)

export const DigitalCapabilityFieldMetaReceiverParty = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving these digital capabilities.',
  '0..1',
  undefined,
  undefined
)

export const DigitalCapabilityFieldMetaBusinessParty = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.BusinessParty,
  'BusinessParty',
  'Party',
  'Party',
  'The party owning these digital capabilities.',
  '1',
  undefined,
  undefined
)

export const DigitalCapabilityFieldMetaDigitalProcess = new FieldMeta<DigitalCapabilityField>(
  DigitalCapabilityField.DigitalProcess,
  'DigitalProcess',
  'Digital Process',
  'DigitalProcess',
  'The digital trade processes supported by the party.',
  '1..n',
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
