import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { ExceptionCriteriaLineType } from '../cac/ExceptionCriteriaLineMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ExceptionCriteriaField {
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
  VersionID = 'VersionID',
  ValidityPeriod = 'ValidityPeriod',
  DocumentReference = 'DocumentReference',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  ExceptionCriteriaLine = 'ExceptionCriteriaLine'
}

export const ExceptionCriteriaFieldMetaUBLExtensions = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ExceptionCriteriaFieldMetaUBLVersionID = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const ExceptionCriteriaFieldMetaCustomizationID = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const ExceptionCriteriaFieldMetaProfileID = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const ExceptionCriteriaFieldMetaProfileExecutionID = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const ExceptionCriteriaFieldMetaID = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Exception Criteria Number',
  undefined
)

export const ExceptionCriteriaFieldMetaCopyIndicator = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionCriteriaFieldMetaUUID = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionCriteriaFieldMetaIssueDate = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Exception Criteria Date',
  undefined
)

export const ExceptionCriteriaFieldMetaIssueTime = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionCriteriaFieldMetaNote = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionCriteriaFieldMetaVersionID = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'Identifies the current version of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionCriteriaFieldMetaValidityPeriod = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'The period of time during which the Exception Criteria is valid.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionCriteriaFieldMetaDocumentReference = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to another document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionCriteriaFieldMetaSignature = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionCriteriaFieldMetaSenderParty = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionCriteriaFieldMetaReceiverParty = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionCriteriaFieldMetaBuyerCustomerParty = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionCriteriaFieldMetaSellerSupplierParty = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionCriteriaFieldMetaExceptionCriteriaLine = new FieldMeta<ExceptionCriteriaField>(
  ExceptionCriteriaField.ExceptionCriteriaLine,
  'ExceptionCriteriaLine',
  'Exception Criteria Line',
  ExceptionCriteriaLineType.name,
  'A line expressing an exception criterion setting thresholds beyond which an exception should be triggered.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class ExceptionCriteriaFieldMeta {
  public static readonly UBLExtensions = ExceptionCriteriaFieldMetaUBLExtensions
  public static readonly UBLVersionID = ExceptionCriteriaFieldMetaUBLVersionID
  public static readonly CustomizationID = ExceptionCriteriaFieldMetaCustomizationID
  public static readonly ProfileID = ExceptionCriteriaFieldMetaProfileID
  public static readonly ProfileExecutionID = ExceptionCriteriaFieldMetaProfileExecutionID
  public static readonly ID = ExceptionCriteriaFieldMetaID
  public static readonly CopyIndicator = ExceptionCriteriaFieldMetaCopyIndicator
  public static readonly UUID = ExceptionCriteriaFieldMetaUUID
  public static readonly IssueDate = ExceptionCriteriaFieldMetaIssueDate
  public static readonly IssueTime = ExceptionCriteriaFieldMetaIssueTime
  public static readonly Note = ExceptionCriteriaFieldMetaNote
  public static readonly VersionID = ExceptionCriteriaFieldMetaVersionID
  public static readonly ValidityPeriod = ExceptionCriteriaFieldMetaValidityPeriod
  public static readonly DocumentReference = ExceptionCriteriaFieldMetaDocumentReference
  public static readonly Signature = ExceptionCriteriaFieldMetaSignature
  public static readonly SenderParty = ExceptionCriteriaFieldMetaSenderParty
  public static readonly ReceiverParty = ExceptionCriteriaFieldMetaReceiverParty
  public static readonly BuyerCustomerParty = ExceptionCriteriaFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = ExceptionCriteriaFieldMetaSellerSupplierParty
  public static readonly ExceptionCriteriaLine = ExceptionCriteriaFieldMetaExceptionCriteriaLine
}

export const ExceptionCriteriaFieldMap = new Map([
  [ExceptionCriteriaField.UBLExtensions, ExceptionCriteriaFieldMetaUBLExtensions],
  [ExceptionCriteriaField.UBLVersionID, ExceptionCriteriaFieldMetaUBLVersionID],
  [ExceptionCriteriaField.CustomizationID, ExceptionCriteriaFieldMetaCustomizationID],
  [ExceptionCriteriaField.ProfileID, ExceptionCriteriaFieldMetaProfileID],
  [ExceptionCriteriaField.ProfileExecutionID, ExceptionCriteriaFieldMetaProfileExecutionID],
  [ExceptionCriteriaField.ID, ExceptionCriteriaFieldMetaID],
  [ExceptionCriteriaField.CopyIndicator, ExceptionCriteriaFieldMetaCopyIndicator],
  [ExceptionCriteriaField.UUID, ExceptionCriteriaFieldMetaUUID],
  [ExceptionCriteriaField.IssueDate, ExceptionCriteriaFieldMetaIssueDate],
  [ExceptionCriteriaField.IssueTime, ExceptionCriteriaFieldMetaIssueTime],
  [ExceptionCriteriaField.Note, ExceptionCriteriaFieldMetaNote],
  [ExceptionCriteriaField.VersionID, ExceptionCriteriaFieldMetaVersionID],
  [ExceptionCriteriaField.ValidityPeriod, ExceptionCriteriaFieldMetaValidityPeriod],
  [ExceptionCriteriaField.DocumentReference, ExceptionCriteriaFieldMetaDocumentReference],
  [ExceptionCriteriaField.Signature, ExceptionCriteriaFieldMetaSignature],
  [ExceptionCriteriaField.SenderParty, ExceptionCriteriaFieldMetaSenderParty],
  [ExceptionCriteriaField.ReceiverParty, ExceptionCriteriaFieldMetaReceiverParty],
  [ExceptionCriteriaField.BuyerCustomerParty, ExceptionCriteriaFieldMetaBuyerCustomerParty],
  [ExceptionCriteriaField.SellerSupplierParty, ExceptionCriteriaFieldMetaSellerSupplierParty],
  [ExceptionCriteriaField.ExceptionCriteriaLine, ExceptionCriteriaFieldMetaExceptionCriteriaLine]
])

export const ExceptionCriteriaType: Type<ExceptionCriteriaField> = {
  name: 'ExceptionCriteria',
  label: 'Exception Criteria',
  module: TypeModule.doc,
  definition: 'A document used to specify the thresholds for forecast variance, product activity, and performance history beyond which exceptions should be triggered.',
  fields: ExceptionCriteriaFieldMap,
}
