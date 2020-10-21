import { FieldMeta } from '../../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaUBLVersionID = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const StockAvailabilityReportFieldMetaCustomizationID = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const StockAvailabilityReportFieldMetaProfileID = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const StockAvailabilityReportFieldMetaProfileExecutionID = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const StockAvailabilityReportFieldMetaID = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'Document Number, Inventory Report Number',
  undefined
)

export const StockAvailabilityReportFieldMetaCopyIndicator = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaUUID = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaIssueDate = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaIssueTime = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaNote = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaDocumentCurrencyCode = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the default currency for this document.',
  '0..1',
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaInventoryPeriod = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.InventoryPeriod,
  'InventoryPeriod',
  'Period',
  'Period',
  'The inventory period covered by the Report.',
  '0..1',
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaDocumentReference = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to another document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaSignature = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaSellerSupplierParty = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller.',
  '1',
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaRetailerCustomerParty = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.RetailerCustomerParty,
  'RetailerCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The retailer.',
  '0..1',
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaInventoryReportingParty = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.InventoryReportingParty,
  'InventoryReportingParty',
  'Party',
  'Party',
  'The party that will receive and use the Stock Availability Report (normally the branch for which the stock is reported).',
  '1',
  undefined,
  undefined
)

export const StockAvailabilityReportFieldMetaStockAvailabilityReportLine = new FieldMeta<StockAvailabilityReportField>(
  StockAvailabilityReportField.StockAvailabilityReportLine,
  'StockAvailabilityReportLine',
  'Stock Availability Report Line',
  'StockAvailabilityReportLine',
  'A line representing a particular item of sale and associated with a line in the Catalogue.',
  '1..n',
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
