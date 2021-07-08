import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { ForecastRevisionLineType } from '../cac/ForecastRevisionLineMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ForecastRevisionField {
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
  SequenceNumberID = 'SequenceNumberID',
  RevisionStatusCode = 'RevisionStatusCode',
  PurposeCode = 'PurposeCode',
  ForecastPeriod = 'ForecastPeriod',
  OriginalDocumentReference = 'OriginalDocumentReference',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  ForecastRevisionLine = 'ForecastRevisionLine'
}

export const ForecastRevisionFieldMetaUBLExtensions = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaUBLVersionID = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const ForecastRevisionFieldMetaCustomizationID = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const ForecastRevisionFieldMetaProfileID = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const ForecastRevisionFieldMetaProfileExecutionID = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const ForecastRevisionFieldMetaID = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Forecast Revision Number',
  undefined
)

export const ForecastRevisionFieldMetaCopyIndicator = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaUUID = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaIssueDate = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Forecast Date',
  undefined
)

export const ForecastRevisionFieldMetaIssueTime = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaNote = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaSequenceNumberID = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.SequenceNumberID,
  'SequenceNumberID',
  'Sequence Number',
  IdentifierType.name,
  'A sequence number, to ensure the proper sequencing of revisions.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaRevisionStatusCode = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.RevisionStatusCode,
  'RevisionStatusCode',
  'Revision Status Code',
  CodeType.name,
  'Indicates the revision status of this Forecast Revision.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaPurposeCode = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.PurposeCode,
  'PurposeCode',
  'Purpose Code',
  CodeType.name,
  'Indicates the purpose of the revision.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaForecastPeriod = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.ForecastPeriod,
  'ForecastPeriod',
  'Forecast Period',
  PeriodType.name,
  'The period to which the Forecast applies.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaOriginalDocumentReference = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.OriginalDocumentReference,
  'OriginalDocumentReference',
  'Original Document Reference',
  DocumentReferenceType.name,
  'The Forecast document being revised.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaSignature = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaSenderParty = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaReceiverParty = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaBuyerCustomerParty = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaSellerSupplierParty = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForecastRevisionFieldMetaForecastRevisionLine = new FieldMeta<ForecastRevisionField>(
  ForecastRevisionField.ForecastRevisionLine,
  'ForecastRevisionLine',
  'Forecast Revision Line',
  ForecastRevisionLineType.name,
  'A line that revises a line in the Forecast.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class ForecastRevisionFieldMeta {
  public static readonly UBLExtensions = ForecastRevisionFieldMetaUBLExtensions
  public static readonly UBLVersionID = ForecastRevisionFieldMetaUBLVersionID
  public static readonly CustomizationID = ForecastRevisionFieldMetaCustomizationID
  public static readonly ProfileID = ForecastRevisionFieldMetaProfileID
  public static readonly ProfileExecutionID = ForecastRevisionFieldMetaProfileExecutionID
  public static readonly ID = ForecastRevisionFieldMetaID
  public static readonly CopyIndicator = ForecastRevisionFieldMetaCopyIndicator
  public static readonly UUID = ForecastRevisionFieldMetaUUID
  public static readonly IssueDate = ForecastRevisionFieldMetaIssueDate
  public static readonly IssueTime = ForecastRevisionFieldMetaIssueTime
  public static readonly Note = ForecastRevisionFieldMetaNote
  public static readonly SequenceNumberID = ForecastRevisionFieldMetaSequenceNumberID
  public static readonly RevisionStatusCode = ForecastRevisionFieldMetaRevisionStatusCode
  public static readonly PurposeCode = ForecastRevisionFieldMetaPurposeCode
  public static readonly ForecastPeriod = ForecastRevisionFieldMetaForecastPeriod
  public static readonly OriginalDocumentReference = ForecastRevisionFieldMetaOriginalDocumentReference
  public static readonly Signature = ForecastRevisionFieldMetaSignature
  public static readonly SenderParty = ForecastRevisionFieldMetaSenderParty
  public static readonly ReceiverParty = ForecastRevisionFieldMetaReceiverParty
  public static readonly BuyerCustomerParty = ForecastRevisionFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = ForecastRevisionFieldMetaSellerSupplierParty
  public static readonly ForecastRevisionLine = ForecastRevisionFieldMetaForecastRevisionLine
}

export const ForecastRevisionFieldMap = new Map([
  [ForecastRevisionField.UBLExtensions, ForecastRevisionFieldMetaUBLExtensions],
  [ForecastRevisionField.UBLVersionID, ForecastRevisionFieldMetaUBLVersionID],
  [ForecastRevisionField.CustomizationID, ForecastRevisionFieldMetaCustomizationID],
  [ForecastRevisionField.ProfileID, ForecastRevisionFieldMetaProfileID],
  [ForecastRevisionField.ProfileExecutionID, ForecastRevisionFieldMetaProfileExecutionID],
  [ForecastRevisionField.ID, ForecastRevisionFieldMetaID],
  [ForecastRevisionField.CopyIndicator, ForecastRevisionFieldMetaCopyIndicator],
  [ForecastRevisionField.UUID, ForecastRevisionFieldMetaUUID],
  [ForecastRevisionField.IssueDate, ForecastRevisionFieldMetaIssueDate],
  [ForecastRevisionField.IssueTime, ForecastRevisionFieldMetaIssueTime],
  [ForecastRevisionField.Note, ForecastRevisionFieldMetaNote],
  [ForecastRevisionField.SequenceNumberID, ForecastRevisionFieldMetaSequenceNumberID],
  [ForecastRevisionField.RevisionStatusCode, ForecastRevisionFieldMetaRevisionStatusCode],
  [ForecastRevisionField.PurposeCode, ForecastRevisionFieldMetaPurposeCode],
  [ForecastRevisionField.ForecastPeriod, ForecastRevisionFieldMetaForecastPeriod],
  [ForecastRevisionField.OriginalDocumentReference, ForecastRevisionFieldMetaOriginalDocumentReference],
  [ForecastRevisionField.Signature, ForecastRevisionFieldMetaSignature],
  [ForecastRevisionField.SenderParty, ForecastRevisionFieldMetaSenderParty],
  [ForecastRevisionField.ReceiverParty, ForecastRevisionFieldMetaReceiverParty],
  [ForecastRevisionField.BuyerCustomerParty, ForecastRevisionFieldMetaBuyerCustomerParty],
  [ForecastRevisionField.SellerSupplierParty, ForecastRevisionFieldMetaSellerSupplierParty],
  [ForecastRevisionField.ForecastRevisionLine, ForecastRevisionFieldMetaForecastRevisionLine]
])

export const ForecastRevisionType: Type<ForecastRevisionField> = {
  name: 'ForecastRevision',
  label: 'Forecast Revision',
  module: TypeModule.doc,
  definition: 'A document used to revise a Forecast.',
  fields: ForecastRevisionFieldMap,
}
