import { FieldMeta } from '../../FieldMeta'

export enum TransportServiceDescriptionField {
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
  ServiceName = 'ServiceName',
  ResponseCode = 'ResponseCode',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  TransportServiceDescriptionRequestDocumentReference = 'TransportServiceDescriptionRequestDocumentReference',
  TransportServiceProviderParty = 'TransportServiceProviderParty',
  ServiceChargePaymentTerms = 'ServiceChargePaymentTerms',
  ValidityPeriod = 'ValidityPeriod',
  TransportationService = 'TransportationService'
}

export const TransportServiceDescriptionFieldMetaUBLExtensions = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaUBLVersionID = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaCustomizationID = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaProfileID = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaProfileExecutionID = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaID = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaCopyIndicator = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaUUID = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaIssueDate = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaIssueTime = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaNote = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaServiceName = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.ServiceName,
  'ServiceName',
  'Service Name',
  'Text',
  'A name, assigned by the Transport Service Provider, for the service being announced.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaResponseCode = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.ResponseCode,
  'ResponseCode',
  'Response Code',
  'Code',
  'A code signifying a response related to the Transport Service Description.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaSignature = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaSenderParty = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.SenderParty,
  'SenderParty',
  'Party',
  'Party',
  'The party sending the Transport Service Description.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaReceiverParty = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving the Transport Service Description.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaTransportServiceDescriptionRequestDocumentReference = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.TransportServiceDescriptionRequestDocumentReference,
  'TransportServiceDescriptionRequestDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A Transport Service Description Request to which this Transport Service Description is a response.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaTransportServiceProviderParty = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.TransportServiceProviderParty,
  'TransportServiceProviderParty',
  'Party',
  'Party',
  'The transport service provider.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaServiceChargePaymentTerms = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.ServiceChargePaymentTerms,
  'ServiceChargePaymentTerms',
  'Payment Terms',
  'PaymentTerms',
  'The terms of payment under which the transport service would be provided.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaValidityPeriod = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.ValidityPeriod,
  'ValidityPeriod',
  'Period',
  'Period',
  'A period during which this Transport Service Description is valid.',
  '0..1',
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaTransportationService = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.TransportationService,
  'TransportationService',
  'Transportation Service',
  'TransportationService',
  'A transportation service announced in this Transport Service Description.',
  '0..n',
  undefined,
  undefined
)

export class TransportServiceDescriptionFieldMeta {
  public static readonly UBLExtensions = TransportServiceDescriptionFieldMetaUBLExtensions
  public static readonly UBLVersionID = TransportServiceDescriptionFieldMetaUBLVersionID
  public static readonly CustomizationID = TransportServiceDescriptionFieldMetaCustomizationID
  public static readonly ProfileID = TransportServiceDescriptionFieldMetaProfileID
  public static readonly ProfileExecutionID = TransportServiceDescriptionFieldMetaProfileExecutionID
  public static readonly ID = TransportServiceDescriptionFieldMetaID
  public static readonly CopyIndicator = TransportServiceDescriptionFieldMetaCopyIndicator
  public static readonly UUID = TransportServiceDescriptionFieldMetaUUID
  public static readonly IssueDate = TransportServiceDescriptionFieldMetaIssueDate
  public static readonly IssueTime = TransportServiceDescriptionFieldMetaIssueTime
  public static readonly Note = TransportServiceDescriptionFieldMetaNote
  public static readonly ServiceName = TransportServiceDescriptionFieldMetaServiceName
  public static readonly ResponseCode = TransportServiceDescriptionFieldMetaResponseCode
  public static readonly Signature = TransportServiceDescriptionFieldMetaSignature
  public static readonly SenderParty = TransportServiceDescriptionFieldMetaSenderParty
  public static readonly ReceiverParty = TransportServiceDescriptionFieldMetaReceiverParty
  public static readonly TransportServiceDescriptionRequestDocumentReference = TransportServiceDescriptionFieldMetaTransportServiceDescriptionRequestDocumentReference
  public static readonly TransportServiceProviderParty = TransportServiceDescriptionFieldMetaTransportServiceProviderParty
  public static readonly ServiceChargePaymentTerms = TransportServiceDescriptionFieldMetaServiceChargePaymentTerms
  public static readonly ValidityPeriod = TransportServiceDescriptionFieldMetaValidityPeriod
  public static readonly TransportationService = TransportServiceDescriptionFieldMetaTransportationService
}

export const TransportServiceDescriptionFieldMap = new Map([
  [TransportServiceDescriptionField.UBLExtensions, TransportServiceDescriptionFieldMetaUBLExtensions],
  [TransportServiceDescriptionField.UBLVersionID, TransportServiceDescriptionFieldMetaUBLVersionID],
  [TransportServiceDescriptionField.CustomizationID, TransportServiceDescriptionFieldMetaCustomizationID],
  [TransportServiceDescriptionField.ProfileID, TransportServiceDescriptionFieldMetaProfileID],
  [TransportServiceDescriptionField.ProfileExecutionID, TransportServiceDescriptionFieldMetaProfileExecutionID],
  [TransportServiceDescriptionField.ID, TransportServiceDescriptionFieldMetaID],
  [TransportServiceDescriptionField.CopyIndicator, TransportServiceDescriptionFieldMetaCopyIndicator],
  [TransportServiceDescriptionField.UUID, TransportServiceDescriptionFieldMetaUUID],
  [TransportServiceDescriptionField.IssueDate, TransportServiceDescriptionFieldMetaIssueDate],
  [TransportServiceDescriptionField.IssueTime, TransportServiceDescriptionFieldMetaIssueTime],
  [TransportServiceDescriptionField.Note, TransportServiceDescriptionFieldMetaNote],
  [TransportServiceDescriptionField.ServiceName, TransportServiceDescriptionFieldMetaServiceName],
  [TransportServiceDescriptionField.ResponseCode, TransportServiceDescriptionFieldMetaResponseCode],
  [TransportServiceDescriptionField.Signature, TransportServiceDescriptionFieldMetaSignature],
  [TransportServiceDescriptionField.SenderParty, TransportServiceDescriptionFieldMetaSenderParty],
  [TransportServiceDescriptionField.ReceiverParty, TransportServiceDescriptionFieldMetaReceiverParty],
  [TransportServiceDescriptionField.TransportServiceDescriptionRequestDocumentReference, TransportServiceDescriptionFieldMetaTransportServiceDescriptionRequestDocumentReference],
  [TransportServiceDescriptionField.TransportServiceProviderParty, TransportServiceDescriptionFieldMetaTransportServiceProviderParty],
  [TransportServiceDescriptionField.ServiceChargePaymentTerms, TransportServiceDescriptionFieldMetaServiceChargePaymentTerms],
  [TransportServiceDescriptionField.ValidityPeriod, TransportServiceDescriptionFieldMetaValidityPeriod],
  [TransportServiceDescriptionField.TransportationService, TransportServiceDescriptionFieldMetaTransportationService]
])
