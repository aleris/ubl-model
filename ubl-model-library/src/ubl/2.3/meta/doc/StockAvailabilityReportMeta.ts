import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { StockAvailabilityReportLineType } from '../cac/StockAvailabilityReportLineMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum StockAvailabilityReportField {
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
  SellerSupplierParty = 'SellerSupplierParty',
  RetailerCustomerParty = 'RetailerCustomerParty',
  InventoryReportingParty = 'InventoryReportingParty',
  StockAvailabilityReportLine = 'StockAvailabilityReportLine'
}

export const StockAvailabilityReportFieldMetaUBLExtensions = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaUBLVersionID = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const StockAvailabilityReportFieldMetaCustomizationID = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const StockAvailabilityReportFieldMetaProfileID = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const StockAvailabilityReportFieldMetaProfileExecutionID = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const StockAvailabilityReportFieldMetaID = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Document Number, Inventory Report Number',
  undefined
)

export const StockAvailabilityReportFieldMetaCopyIndicator = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaUUID = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaIssueDate = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaIssueTime = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaNote = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaDocumentCurrencyCode = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Document Currency Code',
  CodeType.name,
  'A code signifying the default currency for this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaInventoryPeriod = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.InventoryPeriod,
  'InventoryPeriod',
  'Inventory Period',
  PeriodType.name,
  'The inventory period covered by the Report.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaDocumentReference = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to another document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaSignature = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaSellerSupplierParty = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaRetailerCustomerParty = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.RetailerCustomerParty,
  'RetailerCustomerParty',
  'Retailer Customer Party',
  CustomerPartyType.name,
  'The retailer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaInventoryReportingParty = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.InventoryReportingParty,
  'InventoryReportingParty',
  'Inventory Reporting Party',
  PartyType.name,
  'The party that will receive and use the Stock Availability Report (normally the branch for which the stock is reported).',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaStockAvailabilityReportLine = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.StockAvailabilityReportLine,
  'StockAvailabilityReportLine',
  'Stock Availability Report Line',
  StockAvailabilityReportLineType.name,
  'A line representing a particular item of sale and associated with a line in the Catalogue.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class StockAvailabilityReportFieldMeta {
  public static readonly UBLExtensions = StockAvailabilityReportFieldMetaUBLExtensions
  public static readonly UBLVersionID = StockAvailabilityReportFieldMetaUBLVersionID
  public static readonly CustomizationID = StockAvailabilityReportFieldMetaCustomizationID
  public static readonly ProfileID = StockAvailabilityReportFieldMetaProfileID
  public static readonly ProfileExecutionID = StockAvailabilityReportFieldMetaProfileExecutionID
  public static readonly ID = StockAvailabilityReportFieldMetaID
  public static readonly CopyIndicator = StockAvailabilityReportFieldMetaCopyIndicator
  public static readonly UUID = StockAvailabilityReportFieldMetaUUID
  public static readonly IssueDate = StockAvailabilityReportFieldMetaIssueDate
  public static readonly IssueTime = StockAvailabilityReportFieldMetaIssueTime
  public static readonly Note = StockAvailabilityReportFieldMetaNote
  public static readonly DocumentCurrencyCode = StockAvailabilityReportFieldMetaDocumentCurrencyCode
  public static readonly InventoryPeriod = StockAvailabilityReportFieldMetaInventoryPeriod
  public static readonly DocumentReference = StockAvailabilityReportFieldMetaDocumentReference
  public static readonly Signature = StockAvailabilityReportFieldMetaSignature
  public static readonly SellerSupplierParty = StockAvailabilityReportFieldMetaSellerSupplierParty
  public static readonly RetailerCustomerParty = StockAvailabilityReportFieldMetaRetailerCustomerParty
  public static readonly InventoryReportingParty = StockAvailabilityReportFieldMetaInventoryReportingParty
  public static readonly StockAvailabilityReportLine = StockAvailabilityReportFieldMetaStockAvailabilityReportLine
}

export const StockAvailabilityReportFieldMap = new Map([
  [StockAvailabilityReportField.UBLExtensions, StockAvailabilityReportFieldMetaUBLExtensions],
  [StockAvailabilityReportField.UBLVersionID, StockAvailabilityReportFieldMetaUBLVersionID],
  [StockAvailabilityReportField.CustomizationID, StockAvailabilityReportFieldMetaCustomizationID],
  [StockAvailabilityReportField.ProfileID, StockAvailabilityReportFieldMetaProfileID],
  [StockAvailabilityReportField.ProfileExecutionID, StockAvailabilityReportFieldMetaProfileExecutionID],
  [StockAvailabilityReportField.ID, StockAvailabilityReportFieldMetaID],
  [StockAvailabilityReportField.CopyIndicator, StockAvailabilityReportFieldMetaCopyIndicator],
  [StockAvailabilityReportField.UUID, StockAvailabilityReportFieldMetaUUID],
  [StockAvailabilityReportField.IssueDate, StockAvailabilityReportFieldMetaIssueDate],
  [StockAvailabilityReportField.IssueTime, StockAvailabilityReportFieldMetaIssueTime],
  [StockAvailabilityReportField.Note, StockAvailabilityReportFieldMetaNote],
  [StockAvailabilityReportField.DocumentCurrencyCode, StockAvailabilityReportFieldMetaDocumentCurrencyCode],
  [StockAvailabilityReportField.InventoryPeriod, StockAvailabilityReportFieldMetaInventoryPeriod],
  [StockAvailabilityReportField.DocumentReference, StockAvailabilityReportFieldMetaDocumentReference],
  [StockAvailabilityReportField.Signature, StockAvailabilityReportFieldMetaSignature],
  [StockAvailabilityReportField.SellerSupplierParty, StockAvailabilityReportFieldMetaSellerSupplierParty],
  [StockAvailabilityReportField.RetailerCustomerParty, StockAvailabilityReportFieldMetaRetailerCustomerParty],
  [StockAvailabilityReportField.InventoryReportingParty, StockAvailabilityReportFieldMetaInventoryReportingParty],
  [StockAvailabilityReportField.StockAvailabilityReportLine, StockAvailabilityReportFieldMetaStockAvailabilityReportLine]
])

export const StockAvailabilityReportType: Type<StockAvailabilityReportField> = {
  name: 'StockAvailabilityReport',
  label: 'Stock Availability Report',
  module: TypeModule.doc,
  definition: 'A report on the quantities of each item that are, or will be, in stock. This document is sent by a Seller (for example a producer) to a Buyer (for example a retailer).',
  fields: StockAvailabilityReportFieldMap,
}
