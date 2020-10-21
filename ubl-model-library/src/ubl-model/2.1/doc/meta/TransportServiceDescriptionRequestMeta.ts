import { FieldMeta } from '../../FieldMeta'

export enum TransportServiceDescriptionRequestField {
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
  Note = 'Note',
  ServiceInformationPreferenceCode = 'ServiceInformationPreferenceCode',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  TransportServiceProviderParty = 'TransportServiceProviderParty',
  TransportationService = 'TransportationService'
}

export const TransportServiceDescriptionRequestFieldMetaUBLExtensions = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaUBLVersionID = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaCustomizationID = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaProfileID = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaProfileExecutionID = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaID = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaCopyIndicator = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaUUID = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaIssueDate = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaIssueTime = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '1',
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaNote = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaServiceInformationPreferenceCode = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.ServiceInformationPreferenceCode,
  'ServiceInformationPreferenceCode',
  'Service Information Preference Code',
  'Code',
  'A code signifying the category of service information requested to be provided in the Transport Service Description.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaSignature = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaSenderParty = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.SenderParty,
  'SenderParty',
  'Party',
  'Party',
  'The party sending the Transport Service Description Request.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaReceiverParty = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving the Transport Service Description Request.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaTransportServiceProviderParty = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.TransportServiceProviderParty,
  'TransportServiceProviderParty',
  'Party',
  'Party',
  'The transport service provider.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionRequestFieldMetaTransportationService = new FieldMeta<TransportServiceDescriptionRequestField>(
  TransportServiceDescriptionRequestField.TransportationService,
  'TransportationService',
  'Transportation Service',
  'TransportationService',
  'A transportation service about which information is requested.',
  '1..n',
  undefined,
  undefined
)

export class TransportServiceDescriptionRequestFieldMeta {
  public static readonly UBLExtensions = TransportServiceDescriptionRequestFieldMetaUBLExtensions
  public static readonly UBLVersionID = TransportServiceDescriptionRequestFieldMetaUBLVersionID
  public static readonly CustomizationID = TransportServiceDescriptionRequestFieldMetaCustomizationID
  public static readonly ProfileID = TransportServiceDescriptionRequestFieldMetaProfileID
  public static readonly ProfileExecutionID = TransportServiceDescriptionRequestFieldMetaProfileExecutionID
  public static readonly ID = TransportServiceDescriptionRequestFieldMetaID
  public static readonly CopyIndicator = TransportServiceDescriptionRequestFieldMetaCopyIndicator
  public static readonly UUID = TransportServiceDescriptionRequestFieldMetaUUID
  public static readonly IssueDate = TransportServiceDescriptionRequestFieldMetaIssueDate
  public static readonly IssueTime = TransportServiceDescriptionRequestFieldMetaIssueTime
  public static readonly Note = TransportServiceDescriptionRequestFieldMetaNote
  public static readonly ServiceInformationPreferenceCode = TransportServiceDescriptionRequestFieldMetaServiceInformationPreferenceCode
  public static readonly Signature = TransportServiceDescriptionRequestFieldMetaSignature
  public static readonly SenderParty = TransportServiceDescriptionRequestFieldMetaSenderParty
  public static readonly ReceiverParty = TransportServiceDescriptionRequestFieldMetaReceiverParty
  public static readonly TransportServiceProviderParty = TransportServiceDescriptionRequestFieldMetaTransportServiceProviderParty
  public static readonly TransportationService = TransportServiceDescriptionRequestFieldMetaTransportationService
}

export const TransportServiceDescriptionRequestFieldMap = new Map([
  [TransportServiceDescriptionRequestField.UBLExtensions, TransportServiceDescriptionRequestFieldMetaUBLExtensions],
  [TransportServiceDescriptionRequestField.UBLVersionID, TransportServiceDescriptionRequestFieldMetaUBLVersionID],
  [TransportServiceDescriptionRequestField.CustomizationID, TransportServiceDescriptionRequestFieldMetaCustomizationID],
  [TransportServiceDescriptionRequestField.ProfileID, TransportServiceDescriptionRequestFieldMetaProfileID],
  [TransportServiceDescriptionRequestField.ProfileExecutionID, TransportServiceDescriptionRequestFieldMetaProfileExecutionID],
  [TransportServiceDescriptionRequestField.ID, TransportServiceDescriptionRequestFieldMetaID],
  [TransportServiceDescriptionRequestField.CopyIndicator, TransportServiceDescriptionRequestFieldMetaCopyIndicator],
  [TransportServiceDescriptionRequestField.UUID, TransportServiceDescriptionRequestFieldMetaUUID],
  [TransportServiceDescriptionRequestField.IssueDate, TransportServiceDescriptionRequestFieldMetaIssueDate],
  [TransportServiceDescriptionRequestField.IssueTime, TransportServiceDescriptionRequestFieldMetaIssueTime],
  [TransportServiceDescriptionRequestField.Note, TransportServiceDescriptionRequestFieldMetaNote],
  [TransportServiceDescriptionRequestField.ServiceInformationPreferenceCode, TransportServiceDescriptionRequestFieldMetaServiceInformationPreferenceCode],
  [TransportServiceDescriptionRequestField.Signature, TransportServiceDescriptionRequestFieldMetaSignature],
  [TransportServiceDescriptionRequestField.SenderParty, TransportServiceDescriptionRequestFieldMetaSenderParty],
  [TransportServiceDescriptionRequestField.ReceiverParty, TransportServiceDescriptionRequestFieldMetaReceiverParty],
  [TransportServiceDescriptionRequestField.TransportServiceProviderParty, TransportServiceDescriptionRequestFieldMetaTransportServiceProviderParty],
  [TransportServiceDescriptionRequestField.TransportationService, TransportServiceDescriptionRequestFieldMetaTransportationService]
])
