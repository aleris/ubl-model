import { FieldMeta } from '../../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const InventoryReportFieldMetaUBLVersionID = new FieldMeta<InventoryReportField>(
  InventoryReportField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const InventoryReportFieldMetaCustomizationID = new FieldMeta<InventoryReportField>(
  InventoryReportField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const InventoryReportFieldMetaProfileID = new FieldMeta<InventoryReportField>(
  InventoryReportField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const InventoryReportFieldMetaProfileExecutionID = new FieldMeta<InventoryReportField>(
  InventoryReportField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const InventoryReportFieldMetaID = new FieldMeta<InventoryReportField>(
  InventoryReportField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the Inventory Report, assigned by the Issuer.',
  '1',
  'Document Number, Inventory Report Number',
  undefined
)

export const InventoryReportFieldMetaCopyIndicator = new FieldMeta<InventoryReportField>(
  InventoryReportField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const InventoryReportFieldMetaUUID = new FieldMeta<InventoryReportField>(
  InventoryReportField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const InventoryReportFieldMetaIssueDate = new FieldMeta<InventoryReportField>(
  InventoryReportField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const InventoryReportFieldMetaIssueTime = new FieldMeta<InventoryReportField>(
  InventoryReportField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time at which the Inventory Report was issued.',
  '0..1',
  undefined,
  undefined
)

export const InventoryReportFieldMetaNote = new FieldMeta<InventoryReportField>(
  InventoryReportField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const InventoryReportFieldMetaDocumentCurrencyCode = new FieldMeta<InventoryReportField>(
  InventoryReportField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency in which the Document is presented. This may be the same currency as the pricing or as the tax.',
  '0..1',
  undefined,
  undefined
)

export const InventoryReportFieldMetaInventoryPeriod = new FieldMeta<InventoryReportField>(
  InventoryReportField.InventoryPeriod,
  'InventoryPeriod',
  'Period',
  'Period',
  'The period covered by this report.',
  '0..1',
  undefined,
  undefined
)

export const InventoryReportFieldMetaDocumentReference = new FieldMeta<InventoryReportField>(
  InventoryReportField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to another document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const InventoryReportFieldMetaSignature = new FieldMeta<InventoryReportField>(
  InventoryReportField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const InventoryReportFieldMetaRetailerCustomerParty = new FieldMeta<InventoryReportField>(
  InventoryReportField.RetailerCustomerParty,
  'RetailerCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The retailer, who sends this message.',
  '1',
  undefined,
  undefined
)

export const InventoryReportFieldMetaInventoryReportingParty = new FieldMeta<InventoryReportField>(
  InventoryReportField.InventoryReportingParty,
  'InventoryReportingParty',
  'Party',
  'Party',
  'An association to the Party that will really use the Inventory report (normally the branch for which the stock is reported).',
  '1',
  undefined,
  undefined
)

export const InventoryReportFieldMetaSellerSupplierParty = new FieldMeta<InventoryReportField>(
  InventoryReportField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller.',
  '0..1',
  undefined,
  undefined
)

export const InventoryReportFieldMetaInventoryReportLine = new FieldMeta<InventoryReportField>(
  InventoryReportField.InventoryReportLine,
  'InventoryReportLine',
  'Inventory Report Line',
  'InventoryReportLine',
  'A line representing a particular item of sale and associated with a line in the Catalogue.',
  '1..n',
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
