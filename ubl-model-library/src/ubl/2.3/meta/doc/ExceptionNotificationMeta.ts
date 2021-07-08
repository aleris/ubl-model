import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { ExceptionNotificationLineType } from '../cac/ExceptionNotificationLineMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ExceptionNotificationField {
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
  ExceptionObservationPeriod = 'ExceptionObservationPeriod',
  DocumentReference = 'DocumentReference',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  ExceptionNotificationLine = 'ExceptionNotificationLine'
}

export const ExceptionNotificationFieldMetaUBLExtensions = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaUBLVersionID = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const ExceptionNotificationFieldMetaCustomizationID = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const ExceptionNotificationFieldMetaProfileID = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const ExceptionNotificationFieldMetaProfileExecutionID = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const ExceptionNotificationFieldMetaID = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Exception Notification Number',
  undefined
)

export const ExceptionNotificationFieldMetaCopyIndicator = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaUUID = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaIssueDate = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Exception Notification Date',
  undefined
)

export const ExceptionNotificationFieldMetaIssueTime = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaNote = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaExceptionObservationPeriod = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.ExceptionObservationPeriod,
  'ExceptionObservationPeriod',
  'Exception Observation Period',
  PeriodType.name,
  'The period of time during which the exceptions are observed.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaDocumentReference = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to another document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaSignature = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaSenderParty = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaReceiverParty = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaBuyerCustomerParty = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaSellerSupplierParty = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionNotificationFieldMetaExceptionNotificationLine = new FieldMeta<ExceptionNotificationField>(
  ExceptionNotificationField.ExceptionNotificationLine,
  'ExceptionNotificationLine',
  'Exception Notification Line',
  ExceptionNotificationLineType.name,
  'A line in the Exception Notification.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class ExceptionNotificationFieldMeta {
  public static readonly UBLExtensions = ExceptionNotificationFieldMetaUBLExtensions
  public static readonly UBLVersionID = ExceptionNotificationFieldMetaUBLVersionID
  public static readonly CustomizationID = ExceptionNotificationFieldMetaCustomizationID
  public static readonly ProfileID = ExceptionNotificationFieldMetaProfileID
  public static readonly ProfileExecutionID = ExceptionNotificationFieldMetaProfileExecutionID
  public static readonly ID = ExceptionNotificationFieldMetaID
  public static readonly CopyIndicator = ExceptionNotificationFieldMetaCopyIndicator
  public static readonly UUID = ExceptionNotificationFieldMetaUUID
  public static readonly IssueDate = ExceptionNotificationFieldMetaIssueDate
  public static readonly IssueTime = ExceptionNotificationFieldMetaIssueTime
  public static readonly Note = ExceptionNotificationFieldMetaNote
  public static readonly ExceptionObservationPeriod = ExceptionNotificationFieldMetaExceptionObservationPeriod
  public static readonly DocumentReference = ExceptionNotificationFieldMetaDocumentReference
  public static readonly Signature = ExceptionNotificationFieldMetaSignature
  public static readonly SenderParty = ExceptionNotificationFieldMetaSenderParty
  public static readonly ReceiverParty = ExceptionNotificationFieldMetaReceiverParty
  public static readonly BuyerCustomerParty = ExceptionNotificationFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = ExceptionNotificationFieldMetaSellerSupplierParty
  public static readonly ExceptionNotificationLine = ExceptionNotificationFieldMetaExceptionNotificationLine
}

export const ExceptionNotificationFieldMap = new Map([
  [ExceptionNotificationField.UBLExtensions, ExceptionNotificationFieldMetaUBLExtensions],
  [ExceptionNotificationField.UBLVersionID, ExceptionNotificationFieldMetaUBLVersionID],
  [ExceptionNotificationField.CustomizationID, ExceptionNotificationFieldMetaCustomizationID],
  [ExceptionNotificationField.ProfileID, ExceptionNotificationFieldMetaProfileID],
  [ExceptionNotificationField.ProfileExecutionID, ExceptionNotificationFieldMetaProfileExecutionID],
  [ExceptionNotificationField.ID, ExceptionNotificationFieldMetaID],
  [ExceptionNotificationField.CopyIndicator, ExceptionNotificationFieldMetaCopyIndicator],
  [ExceptionNotificationField.UUID, ExceptionNotificationFieldMetaUUID],
  [ExceptionNotificationField.IssueDate, ExceptionNotificationFieldMetaIssueDate],
  [ExceptionNotificationField.IssueTime, ExceptionNotificationFieldMetaIssueTime],
  [ExceptionNotificationField.Note, ExceptionNotificationFieldMetaNote],
  [ExceptionNotificationField.ExceptionObservationPeriod, ExceptionNotificationFieldMetaExceptionObservationPeriod],
  [ExceptionNotificationField.DocumentReference, ExceptionNotificationFieldMetaDocumentReference],
  [ExceptionNotificationField.Signature, ExceptionNotificationFieldMetaSignature],
  [ExceptionNotificationField.SenderParty, ExceptionNotificationFieldMetaSenderParty],
  [ExceptionNotificationField.ReceiverParty, ExceptionNotificationFieldMetaReceiverParty],
  [ExceptionNotificationField.BuyerCustomerParty, ExceptionNotificationFieldMetaBuyerCustomerParty],
  [ExceptionNotificationField.SellerSupplierParty, ExceptionNotificationFieldMetaSellerSupplierParty],
  [ExceptionNotificationField.ExceptionNotificationLine, ExceptionNotificationFieldMetaExceptionNotificationLine]
])

export const ExceptionNotificationType: Type<ExceptionNotificationField> = {
  name: 'ExceptionNotification',
  label: 'Exception Notification',
  module: TypeModule.doc,
  definition: 'A document used to notify an exception in forecast variance, product activity, or performance history.',
  fields: ExceptionNotificationFieldMap,
}
