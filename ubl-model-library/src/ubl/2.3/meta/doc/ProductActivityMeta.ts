import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ActivityDataLineType } from '../cac/ActivityDataLineMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ProductActivityFieldMetaUBLVersionID = new FieldMeta<ProductActivityField>(
  ProductActivityField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const ProductActivityFieldMetaCustomizationID = new FieldMeta<ProductActivityField>(
  ProductActivityField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const ProductActivityFieldMetaProfileID = new FieldMeta<ProductActivityField>(
  ProductActivityField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const ProductActivityFieldMetaProfileExecutionID = new FieldMeta<ProductActivityField>(
  ProductActivityField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const ProductActivityFieldMetaID = new FieldMeta<ProductActivityField>(
  ProductActivityField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Product Acvtivity Number',
  undefined
)

export const ProductActivityFieldMetaCopyIndicator = new FieldMeta<ProductActivityField>(
  ProductActivityField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProductActivityFieldMetaUUID = new FieldMeta<ProductActivityField>(
  ProductActivityField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProductActivityFieldMetaIssueDate = new FieldMeta<ProductActivityField>(
  ProductActivityField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Activity Date',
  undefined
)

export const ProductActivityFieldMetaIssueTime = new FieldMeta<ProductActivityField>(
  ProductActivityField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProductActivityFieldMetaNote = new FieldMeta<ProductActivityField>(
  ProductActivityField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProductActivityFieldMetaDocumentCurrencyCode = new FieldMeta<ProductActivityField>(
  ProductActivityField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Document Currency Code',
  CodeType.name,
  'A code signifying the default currency for this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProductActivityFieldMetaActivityPeriod = new FieldMeta<ProductActivityField>(
  ProductActivityField.ActivityPeriod,
  'ActivityPeriod',
  'Activity Period',
  PeriodType.name,
  'The period covered by this Product Activity report.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ProductActivityFieldMetaDocumentReference = new FieldMeta<ProductActivityField>(
  ProductActivityField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to another document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ProductActivityFieldMetaSignature = new FieldMeta<ProductActivityField>(
  ProductActivityField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ProductActivityFieldMetaSenderParty = new FieldMeta<ProductActivityField>(
  ProductActivityField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The sender of the Product Activity.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ProductActivityFieldMetaReceiverParty = new FieldMeta<ProductActivityField>(
  ProductActivityField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The receiver of the Product Activity.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ProductActivityFieldMetaSupplyChainActivityDataLine = new FieldMeta<ProductActivityField>(
  ProductActivityField.SupplyChainActivityDataLine,
  'SupplyChainActivityDataLine',
  'Supply Chain Activity Data Line',
  ActivityDataLineType.name,
  'A line describing the movement of goods to a specific location.',
  FieldCardinality.Multi,
  TypeModule.cac,
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

export const ProductActivityType: Type<ProductActivityField> = {
  name: 'ProductActivity',
  label: 'Product Activity',
  module: TypeModule.doc,
  definition: 'A document reporting the movement of goods at specified retail locations for inventory tracking purposes.',
  fields: ProductActivityFieldMap,
}
