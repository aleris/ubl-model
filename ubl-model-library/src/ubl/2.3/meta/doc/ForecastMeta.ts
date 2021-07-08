import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { ForecastLineType } from '../cac/ForecastLineMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ForecastField {
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
  BasedOnConsensusIndicator = 'BasedOnConsensusIndicator',
  ForecastPurposeCode = 'ForecastPurposeCode',
  ForecastPeriod = 'ForecastPeriod',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  ForecastLine = 'ForecastLine'
}

export const ForecastFieldMetaUBLExtensions = new FieldMeta<ForecastField>(
  ForecastField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ForecastFieldMetaUBLVersionID = new FieldMeta<ForecastField>(
  ForecastField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const ForecastFieldMetaCustomizationID = new FieldMeta<ForecastField>(
  ForecastField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const ForecastFieldMetaProfileID = new FieldMeta<ForecastField>(
  ForecastField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const ForecastFieldMetaProfileExecutionID = new FieldMeta<ForecastField>(
  ForecastField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const ForecastFieldMetaID = new FieldMeta<ForecastField>(
  ForecastField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Forecast Number',
  undefined
)

export const ForecastFieldMetaCopyIndicator = new FieldMeta<ForecastField>(
  ForecastField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastFieldMetaUUID = new FieldMeta<ForecastField>(
  ForecastField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastFieldMetaIssueDate = new FieldMeta<ForecastField>(
  ForecastField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Forecast Date',
  undefined
)

export const ForecastFieldMetaIssueTime = new FieldMeta<ForecastField>(
  ForecastField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastFieldMetaNote = new FieldMeta<ForecastField>(
  ForecastField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastFieldMetaVersionID = new FieldMeta<ForecastField>(
  ForecastField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'Identifies the current version of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastFieldMetaBasedOnConsensusIndicator = new FieldMeta<ForecastField>(
  ForecastField.BasedOnConsensusIndicator,
  'BasedOnConsensusIndicator',
  'Based On Consensus Indicator',
  IndicatorType.name,
  'Indicates whether the Forecast is based on consensus (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastFieldMetaForecastPurposeCode = new FieldMeta<ForecastField>(
  ForecastField.ForecastPurposeCode,
  'ForecastPurposeCode',
  'Forecast Purpose Code',
  CodeType.name,
  'A code signifying the purpose of the Forecast document.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastFieldMetaForecastPeriod = new FieldMeta<ForecastField>(
  ForecastField.ForecastPeriod,
  'ForecastPeriod',
  'Forecast Period',
  PeriodType.name,
  'The period to which the Forecast applies.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForecastFieldMetaAdditionalDocumentReference = new FieldMeta<ForecastField>(
  ForecastField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForecastFieldMetaSignature = new FieldMeta<ForecastField>(
  ForecastField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForecastFieldMetaSenderParty = new FieldMeta<ForecastField>(
  ForecastField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForecastFieldMetaReceiverParty = new FieldMeta<ForecastField>(
  ForecastField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForecastFieldMetaBuyerCustomerParty = new FieldMeta<ForecastField>(
  ForecastField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForecastFieldMetaSellerSupplierParty = new FieldMeta<ForecastField>(
  ForecastField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForecastFieldMetaForecastLine = new FieldMeta<ForecastField>(
  ForecastField.ForecastLine,
  'ForecastLine',
  'Forecast Line',
  ForecastLineType.name,
  'A Forecast Line.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class ForecastFieldMeta {
  public static readonly UBLExtensions = ForecastFieldMetaUBLExtensions
  public static readonly UBLVersionID = ForecastFieldMetaUBLVersionID
  public static readonly CustomizationID = ForecastFieldMetaCustomizationID
  public static readonly ProfileID = ForecastFieldMetaProfileID
  public static readonly ProfileExecutionID = ForecastFieldMetaProfileExecutionID
  public static readonly ID = ForecastFieldMetaID
  public static readonly CopyIndicator = ForecastFieldMetaCopyIndicator
  public static readonly UUID = ForecastFieldMetaUUID
  public static readonly IssueDate = ForecastFieldMetaIssueDate
  public static readonly IssueTime = ForecastFieldMetaIssueTime
  public static readonly Note = ForecastFieldMetaNote
  public static readonly VersionID = ForecastFieldMetaVersionID
  public static readonly BasedOnConsensusIndicator = ForecastFieldMetaBasedOnConsensusIndicator
  public static readonly ForecastPurposeCode = ForecastFieldMetaForecastPurposeCode
  public static readonly ForecastPeriod = ForecastFieldMetaForecastPeriod
  public static readonly AdditionalDocumentReference = ForecastFieldMetaAdditionalDocumentReference
  public static readonly Signature = ForecastFieldMetaSignature
  public static readonly SenderParty = ForecastFieldMetaSenderParty
  public static readonly ReceiverParty = ForecastFieldMetaReceiverParty
  public static readonly BuyerCustomerParty = ForecastFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = ForecastFieldMetaSellerSupplierParty
  public static readonly ForecastLine = ForecastFieldMetaForecastLine
}

export const ForecastFieldMap = new Map([
  [ForecastField.UBLExtensions, ForecastFieldMetaUBLExtensions],
  [ForecastField.UBLVersionID, ForecastFieldMetaUBLVersionID],
  [ForecastField.CustomizationID, ForecastFieldMetaCustomizationID],
  [ForecastField.ProfileID, ForecastFieldMetaProfileID],
  [ForecastField.ProfileExecutionID, ForecastFieldMetaProfileExecutionID],
  [ForecastField.ID, ForecastFieldMetaID],
  [ForecastField.CopyIndicator, ForecastFieldMetaCopyIndicator],
  [ForecastField.UUID, ForecastFieldMetaUUID],
  [ForecastField.IssueDate, ForecastFieldMetaIssueDate],
  [ForecastField.IssueTime, ForecastFieldMetaIssueTime],
  [ForecastField.Note, ForecastFieldMetaNote],
  [ForecastField.VersionID, ForecastFieldMetaVersionID],
  [ForecastField.BasedOnConsensusIndicator, ForecastFieldMetaBasedOnConsensusIndicator],
  [ForecastField.ForecastPurposeCode, ForecastFieldMetaForecastPurposeCode],
  [ForecastField.ForecastPeriod, ForecastFieldMetaForecastPeriod],
  [ForecastField.AdditionalDocumentReference, ForecastFieldMetaAdditionalDocumentReference],
  [ForecastField.Signature, ForecastFieldMetaSignature],
  [ForecastField.SenderParty, ForecastFieldMetaSenderParty],
  [ForecastField.ReceiverParty, ForecastFieldMetaReceiverParty],
  [ForecastField.BuyerCustomerParty, ForecastFieldMetaBuyerCustomerParty],
  [ForecastField.SellerSupplierParty, ForecastFieldMetaSellerSupplierParty],
  [ForecastField.ForecastLine, ForecastFieldMetaForecastLine]
])

export const ForecastType: Type<ForecastField> = {
  name: 'Forecast',
  label: 'Forecast',
  module: TypeModule.doc,
  definition: 'A document used to forecast sales or orders.',
  fields: ForecastFieldMap,
}
