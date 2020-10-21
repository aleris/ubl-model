import { FieldMeta } from '../../FieldMeta'

export enum ProductActivityField {
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
  ActivityPeriod = 'ActivityPeriod',
  DocumentReference = 'DocumentReference',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  SupplyChainActivityDataLine = 'SupplyChainActivityDataLine'
}

export const ProductActivityFieldMetaUBLExtensions = new FieldMeta<ProductActivityField>(
  ProductActivityField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const ProductActivityFieldMetaUBLVersionID = new FieldMeta<ProductActivityField>(
  ProductActivityField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const ProductActivityFieldMetaCustomizationID = new FieldMeta<ProductActivityField>(
  ProductActivityField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const ProductActivityFieldMetaProfileID = new FieldMeta<ProductActivityField>(
  ProductActivityField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const ProductActivityFieldMetaProfileExecutionID = new FieldMeta<ProductActivityField>(
  ProductActivityField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const ProductActivityFieldMetaID = new FieldMeta<ProductActivityField>(
  ProductActivityField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'Product Acvtivity Number',
  undefined
)

export const ProductActivityFieldMetaCopyIndicator = new FieldMeta<ProductActivityField>(
  ProductActivityField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const ProductActivityFieldMetaUUID = new FieldMeta<ProductActivityField>(
  ProductActivityField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const ProductActivityFieldMetaIssueDate = new FieldMeta<ProductActivityField>(
  ProductActivityField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'Activity Date',
  undefined
)

export const ProductActivityFieldMetaIssueTime = new FieldMeta<ProductActivityField>(
  ProductActivityField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const ProductActivityFieldMetaNote = new FieldMeta<ProductActivityField>(
  ProductActivityField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const ProductActivityFieldMetaDocumentCurrencyCode = new FieldMeta<ProductActivityField>(
  ProductActivityField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the default currency for this document.',
  '0..1',
  undefined,
  undefined
)

export const ProductActivityFieldMetaActivityPeriod = new FieldMeta<ProductActivityField>(
  ProductActivityField.ActivityPeriod,
  'ActivityPeriod',
  'Period',
  'Period',
  'The period covered by this Product Activity report.',
  '1',
  undefined,
  undefined
)

export const ProductActivityFieldMetaDocumentReference = new FieldMeta<ProductActivityField>(
  ProductActivityField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to another document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const ProductActivityFieldMetaSignature = new FieldMeta<ProductActivityField>(
  ProductActivityField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const ProductActivityFieldMetaSenderParty = new FieldMeta<ProductActivityField>(
  ProductActivityField.SenderParty,
  'SenderParty',
  'Party',
  'Party',
  'The sender of the Product Activity.',
  '1',
  undefined,
  undefined
)

export const ProductActivityFieldMetaReceiverParty = new FieldMeta<ProductActivityField>(
  ProductActivityField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The receiver of the Product Activity.',
  '1',
  undefined,
  undefined
)

export const ProductActivityFieldMetaSupplyChainActivityDataLine = new FieldMeta<ProductActivityField>(
  ProductActivityField.SupplyChainActivityDataLine,
  'SupplyChainActivityDataLine',
  'Activity Data Line',
  'ActivityDataLine',
  'A line describing the movement of goods to a specific location.',
  '1..n',
  undefined,
  undefined
)

export class ProductActivityFieldMeta {
  public static readonly UBLExtensions = ProductActivityFieldMetaUBLExtensions
  public static readonly UBLVersionID = ProductActivityFieldMetaUBLVersionID
  public static readonly CustomizationID = ProductActivityFieldMetaCustomizationID
  public static readonly ProfileID = ProductActivityFieldMetaProfileID
  public static readonly ProfileExecutionID = ProductActivityFieldMetaProfileExecutionID
  public static readonly ID = ProductActivityFieldMetaID
  public static readonly CopyIndicator = ProductActivityFieldMetaCopyIndicator
  public static readonly UUID = ProductActivityFieldMetaUUID
  public static readonly IssueDate = ProductActivityFieldMetaIssueDate
  public static readonly IssueTime = ProductActivityFieldMetaIssueTime
  public static readonly Note = ProductActivityFieldMetaNote
  public static readonly DocumentCurrencyCode = ProductActivityFieldMetaDocumentCurrencyCode
  public static readonly ActivityPeriod = ProductActivityFieldMetaActivityPeriod
  public static readonly DocumentReference = ProductActivityFieldMetaDocumentReference
  public static readonly Signature = ProductActivityFieldMetaSignature
  public static readonly SenderParty = ProductActivityFieldMetaSenderParty
  public static readonly ReceiverParty = ProductActivityFieldMetaReceiverParty
  public static readonly SupplyChainActivityDataLine = ProductActivityFieldMetaSupplyChainActivityDataLine
}

export const ProductActivityFieldMap = new Map([
  [ProductActivityField.UBLExtensions, ProductActivityFieldMetaUBLExtensions],
  [ProductActivityField.UBLVersionID, ProductActivityFieldMetaUBLVersionID],
  [ProductActivityField.CustomizationID, ProductActivityFieldMetaCustomizationID],
  [ProductActivityField.ProfileID, ProductActivityFieldMetaProfileID],
  [ProductActivityField.ProfileExecutionID, ProductActivityFieldMetaProfileExecutionID],
  [ProductActivityField.ID, ProductActivityFieldMetaID],
  [ProductActivityField.CopyIndicator, ProductActivityFieldMetaCopyIndicator],
  [ProductActivityField.UUID, ProductActivityFieldMetaUUID],
  [ProductActivityField.IssueDate, ProductActivityFieldMetaIssueDate],
  [ProductActivityField.IssueTime, ProductActivityFieldMetaIssueTime],
  [ProductActivityField.Note, ProductActivityFieldMetaNote],
  [ProductActivityField.DocumentCurrencyCode, ProductActivityFieldMetaDocumentCurrencyCode],
  [ProductActivityField.ActivityPeriod, ProductActivityFieldMetaActivityPeriod],
  [ProductActivityField.DocumentReference, ProductActivityFieldMetaDocumentReference],
  [ProductActivityField.Signature, ProductActivityFieldMetaSignature],
  [ProductActivityField.SenderParty, ProductActivityFieldMetaSenderParty],
  [ProductActivityField.ReceiverParty, ProductActivityFieldMetaReceiverParty],
  [ProductActivityField.SupplyChainActivityDataLine, ProductActivityFieldMetaSupplyChainActivityDataLine]
])
