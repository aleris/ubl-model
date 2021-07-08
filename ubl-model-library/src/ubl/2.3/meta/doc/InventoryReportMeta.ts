import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { InventoryReportLineType } from '../cac/InventoryReportLineMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum InventoryReportField {
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
  DocumentCurrencyCode = 'DocumentCurrencyCode',
  InventoryPeriod = 'InventoryPeriod',
  DocumentReference = 'DocumentReference',
  Signature = 'Signature',
  RetailerCustomerParty = 'RetailerCustomerParty',
  InventoryReportingParty = 'InventoryReportingParty',
  SellerSupplierParty = 'SellerSupplierParty',
  InventoryReportLine = 'InventoryReportLine'
}

export const InventoryReportFieldMetaUBLExtensions = new FieldMeta<InventoryReportField>(
  InventoryReportField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const InventoryReportFieldMetaUBLVersionID = new FieldMeta<InventoryReportField>(
  InventoryReportField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const InventoryReportFieldMetaCustomizationID = new FieldMeta<InventoryReportField>(
  InventoryReportField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const InventoryReportFieldMetaProfileID = new FieldMeta<InventoryReportField>(
  InventoryReportField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const InventoryReportFieldMetaProfileExecutionID = new FieldMeta<InventoryReportField>(
  InventoryReportField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const InventoryReportFieldMetaID = new FieldMeta<InventoryReportField>(
  InventoryReportField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for the Inventory Report, assigned by the Issuer.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Document Number, Inventory Report Number',
  undefined
)

export const InventoryReportFieldMetaCopyIndicator = new FieldMeta<InventoryReportField>(
  InventoryReportField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InventoryReportFieldMetaUUID = new FieldMeta<InventoryReportField>(
  InventoryReportField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InventoryReportFieldMetaIssueDate = new FieldMeta<InventoryReportField>(
  InventoryReportField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InventoryReportFieldMetaIssueTime = new FieldMeta<InventoryReportField>(
  InventoryReportField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time at which the Inventory Report was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InventoryReportFieldMetaNote = new FieldMeta<InventoryReportField>(
  InventoryReportField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InventoryReportFieldMetaDocumentCurrencyCode = new FieldMeta<InventoryReportField>(
  InventoryReportField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Document Currency Code',
  CodeType.name,
  'A code signifying the currency in which the Document is presented. This may be the same currency as the pricing or as the tax.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InventoryReportFieldMetaInventoryPeriod = new FieldMeta<InventoryReportField>(
  InventoryReportField.InventoryPeriod,
  'InventoryPeriod',
  'Inventory Period',
  PeriodType.name,
  'The period covered by this report.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const InventoryReportFieldMetaDocumentReference = new FieldMeta<InventoryReportField>(
  InventoryReportField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to another document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const InventoryReportFieldMetaSignature = new FieldMeta<InventoryReportField>(
  InventoryReportField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const InventoryReportFieldMetaRetailerCustomerParty = new FieldMeta<InventoryReportField>(
  InventoryReportField.RetailerCustomerParty,
  'RetailerCustomerParty',
  'Retailer Customer Party',
  CustomerPartyType.name,
  'The retailer, who sends this message.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const InventoryReportFieldMetaInventoryReportingParty = new FieldMeta<InventoryReportField>(
  InventoryReportField.InventoryReportingParty,
  'InventoryReportingParty',
  'Inventory Reporting Party',
  PartyType.name,
  'An association to the Party that will really use the Inventory report (normally the branch for which the stock is reported).',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const InventoryReportFieldMetaSellerSupplierParty = new FieldMeta<InventoryReportField>(
  InventoryReportField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const InventoryReportFieldMetaInventoryReportLine = new FieldMeta<InventoryReportField>(
  InventoryReportField.InventoryReportLine,
  'InventoryReportLine',
  'Inventory Report Line',
  InventoryReportLineType.name,
  'A line representing a particular item of sale and associated with a line in the Catalogue.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class InventoryReportFieldMeta {
  public static readonly UBLExtensions = InventoryReportFieldMetaUBLExtensions
  public static readonly UBLVersionID = InventoryReportFieldMetaUBLVersionID
  public static readonly CustomizationID = InventoryReportFieldMetaCustomizationID
  public static readonly ProfileID = InventoryReportFieldMetaProfileID
  public static readonly ProfileExecutionID = InventoryReportFieldMetaProfileExecutionID
  public static readonly ID = InventoryReportFieldMetaID
  public static readonly CopyIndicator = InventoryReportFieldMetaCopyIndicator
  public static readonly UUID = InventoryReportFieldMetaUUID
  public static readonly IssueDate = InventoryReportFieldMetaIssueDate
  public static readonly IssueTime = InventoryReportFieldMetaIssueTime
  public static readonly Note = InventoryReportFieldMetaNote
  public static readonly DocumentCurrencyCode = InventoryReportFieldMetaDocumentCurrencyCode
  public static readonly InventoryPeriod = InventoryReportFieldMetaInventoryPeriod
  public static readonly DocumentReference = InventoryReportFieldMetaDocumentReference
  public static readonly Signature = InventoryReportFieldMetaSignature
  public static readonly RetailerCustomerParty = InventoryReportFieldMetaRetailerCustomerParty
  public static readonly InventoryReportingParty = InventoryReportFieldMetaInventoryReportingParty
  public static readonly SellerSupplierParty = InventoryReportFieldMetaSellerSupplierParty
  public static readonly InventoryReportLine = InventoryReportFieldMetaInventoryReportLine
}

export const InventoryReportFieldMap = new Map([
  [InventoryReportField.UBLExtensions, InventoryReportFieldMetaUBLExtensions],
  [InventoryReportField.UBLVersionID, InventoryReportFieldMetaUBLVersionID],
  [InventoryReportField.CustomizationID, InventoryReportFieldMetaCustomizationID],
  [InventoryReportField.ProfileID, InventoryReportFieldMetaProfileID],
  [InventoryReportField.ProfileExecutionID, InventoryReportFieldMetaProfileExecutionID],
  [InventoryReportField.ID, InventoryReportFieldMetaID],
  [InventoryReportField.CopyIndicator, InventoryReportFieldMetaCopyIndicator],
  [InventoryReportField.UUID, InventoryReportFieldMetaUUID],
  [InventoryReportField.IssueDate, InventoryReportFieldMetaIssueDate],
  [InventoryReportField.IssueTime, InventoryReportFieldMetaIssueTime],
  [InventoryReportField.Note, InventoryReportFieldMetaNote],
  [InventoryReportField.DocumentCurrencyCode, InventoryReportFieldMetaDocumentCurrencyCode],
  [InventoryReportField.InventoryPeriod, InventoryReportFieldMetaInventoryPeriod],
  [InventoryReportField.DocumentReference, InventoryReportFieldMetaDocumentReference],
  [InventoryReportField.Signature, InventoryReportFieldMetaSignature],
  [InventoryReportField.RetailerCustomerParty, InventoryReportFieldMetaRetailerCustomerParty],
  [InventoryReportField.InventoryReportingParty, InventoryReportFieldMetaInventoryReportingParty],
  [InventoryReportField.SellerSupplierParty, InventoryReportFieldMetaSellerSupplierParty],
  [InventoryReportField.InventoryReportLine, InventoryReportFieldMetaInventoryReportLine]
])

export const InventoryReportType: Type<InventoryReportField> = {
  name: 'InventoryReport',
  label: 'Inventory Report',
  module: TypeModule.doc,
  definition: 'A report on the quantities of each item that are, or will be, in stock. This document is sent by a Buyer (for example a retailer) to a Seller (for example a producer).',
  fields: InventoryReportFieldMap,
}
