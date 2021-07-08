import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { PaymentTermsType } from '../cac/PaymentTermsMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { TransportationServiceType } from '../cac/TransportationServiceMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaUBLVersionID = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaCustomizationID = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaProfileID = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaProfileExecutionID = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaID = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaCopyIndicator = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaUUID = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaIssueDate = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaIssueTime = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaNote = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaServiceName = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.ServiceName,
  'ServiceName',
  'Service Name',
  TextType.name,
  'A name, assigned by the Transport Service Provider, for the service being announced.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaResponseCode = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.ResponseCode,
  'ResponseCode',
  'Response Code',
  CodeType.name,
  'A code signifying a response related to the Transport Service Description.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaSignature = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaSenderParty = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending the Transport Service Description.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaReceiverParty = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving the Transport Service Description.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaTransportServiceDescriptionRequestDocumentReference = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.TransportServiceDescriptionRequestDocumentReference,
  'TransportServiceDescriptionRequestDocumentReference',
  'Transport Service Description Request Document Reference',
  DocumentReferenceType.name,
  'A Transport Service Description Request to which this Transport Service Description is a response.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaTransportServiceProviderParty = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.TransportServiceProviderParty,
  'TransportServiceProviderParty',
  'Transport Service Provider Party',
  PartyType.name,
  'The transport service provider.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaServiceChargePaymentTerms = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.ServiceChargePaymentTerms,
  'ServiceChargePaymentTerms',
  'Service Charge Payment Terms',
  PaymentTermsType.name,
  'The terms of payment under which the transport service would be provided.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaValidityPeriod = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'A period during which this Transport Service Description is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportServiceDescriptionFieldMetaTransportationService = new FieldMeta<TransportServiceDescriptionField>(
  TransportServiceDescriptionField.TransportationService,
  'TransportationService',
  'Transportation Service',
  TransportationServiceType.name,
  'A transportation service announced in this Transport Service Description.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const TransportServiceDescriptionType: Type<TransportServiceDescriptionField> = {
  name: 'TransportServiceDescription',
  label: 'Transport Service Description',
  module: TypeModule.doc,
  definition: 'A document sent by a transport service provider to announce the availability of a transport service.',
  fields: TransportServiceDescriptionFieldMap,
}
