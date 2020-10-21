import { FieldMeta } from '../../FieldMeta'

export enum CatalogueField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  UUID = 'UUID',
  ActionCode = 'ActionCode',
  Name = 'Name',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  RevisionDate = 'RevisionDate',
  RevisionTime = 'RevisionTime',
  Note = 'Note',
  Description = 'Description',
  VersionID = 'VersionID',
  PreviousVersionID = 'PreviousVersionID',
  LineCountNumeric = 'LineCountNumeric',
  ValidityPeriod = 'ValidityPeriod',
  ReferencedContract = 'ReferencedContract',
  SourceCatalogueReference = 'SourceCatalogueReference',
  DocumentReference = 'DocumentReference',
  Signature = 'Signature',
  ProviderParty = 'ProviderParty',
  ReceiverParty = 'ReceiverParty',
  SellerSupplierParty = 'SellerSupplierParty',
  ContractorCustomerParty = 'ContractorCustomerParty',
  TradingTerms = 'TradingTerms',
  CatalogueLine = 'CatalogueLine'
}

export const CatalogueFieldMetaUBLExtensions = new FieldMeta<CatalogueField>(
  CatalogueField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueFieldMetaUBLVersionID = new FieldMeta<CatalogueField>(
  CatalogueField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const CatalogueFieldMetaCustomizationID = new FieldMeta<CatalogueField>(
  CatalogueField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const CatalogueFieldMetaProfileID = new FieldMeta<CatalogueField>(
  CatalogueField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const CatalogueFieldMetaProfileExecutionID = new FieldMeta<CatalogueField>(
  CatalogueField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const CatalogueFieldMetaID = new FieldMeta<CatalogueField>(
  CatalogueField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const CatalogueFieldMetaUUID = new FieldMeta<CatalogueField>(
  CatalogueField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueFieldMetaActionCode = new FieldMeta<CatalogueField>(
  CatalogueField.ActionCode,
  'ActionCode',
  'Action Code',
  'Code',
  'A code signifying whether the transaction is a replacement or an update.',
  '0..1',
  undefined,
  'Replace , Update .'
)

export const CatalogueFieldMetaName = new FieldMeta<CatalogueField>(
  CatalogueField.Name,
  'Name',
  'Name',
  'Text',
  'Text, assigned by the sender, that identifies this document to business users.',
  '0..1',
  undefined,
  'winter 2005 collection'
)

export const CatalogueFieldMetaIssueDate = new FieldMeta<CatalogueField>(
  CatalogueField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const CatalogueFieldMetaIssueTime = new FieldMeta<CatalogueField>(
  CatalogueField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueFieldMetaRevisionDate = new FieldMeta<CatalogueField>(
  CatalogueField.RevisionDate,
  'RevisionDate',
  'Revision Date',
  'Date',
  'The date, assigned by the seller party, on which the information in the Catalogue was last revised.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueFieldMetaRevisionTime = new FieldMeta<CatalogueField>(
  CatalogueField.RevisionTime,
  'RevisionTime',
  'Revision Time',
  'Time',
  'The time, assigned by the Seller party, at which the information in the Catalogue was last revised.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueFieldMetaNote = new FieldMeta<CatalogueField>(
  CatalogueField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const CatalogueFieldMetaDescription = new FieldMeta<CatalogueField>(
  CatalogueField.Description,
  'Description',
  'Description',
  'Text',
  'Textual description of the document instance.',
  '0..n',
  undefined,
  'computer accessories for laptops'
)

export const CatalogueFieldMetaVersionID = new FieldMeta<CatalogueField>(
  CatalogueField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'An identifier for the current version of the Catalogue.',
  '0..1',
  undefined,
  '1.1'
)

export const CatalogueFieldMetaPreviousVersionID = new FieldMeta<CatalogueField>(
  CatalogueField.PreviousVersionID,
  'PreviousVersionID',
  'Version',
  'Identifier',
  'An identifier for the previous version of the Catalogue that is superseded by this version.',
  '0..1',
  undefined,
  '1.0'
)

export const CatalogueFieldMetaLineCountNumeric = new FieldMeta<CatalogueField>(
  CatalogueField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of Catalogue Lines in the document.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueFieldMetaValidityPeriod = new FieldMeta<CatalogueField>(
  CatalogueField.ValidityPeriod,
  'ValidityPeriod',
  'Period',
  'Period',
  'A period, assigned by the seller, during which the information in the Catalogue is effective. This may be given as start and end dates or as a duration.',
  '0..n',
  undefined,
  undefined
)

export const CatalogueFieldMetaReferencedContract = new FieldMeta<CatalogueField>(
  CatalogueField.ReferencedContract,
  'ReferencedContract',
  'Contract',
  'Contract',
  'A contract or framework agreement with which this Catalogue is associated.',
  '0..n',
  undefined,
  undefined
)

export const CatalogueFieldMetaSourceCatalogueReference = new FieldMeta<CatalogueField>(
  CatalogueField.SourceCatalogueReference,
  'SourceCatalogueReference',
  'Catalogue Reference',
  'CatalogueReference',
  'A reference to the source catalogue.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueFieldMetaDocumentReference = new FieldMeta<CatalogueField>(
  CatalogueField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to another document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const CatalogueFieldMetaSignature = new FieldMeta<CatalogueField>(
  CatalogueField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const CatalogueFieldMetaProviderParty = new FieldMeta<CatalogueField>(
  CatalogueField.ProviderParty,
  'ProviderParty',
  'Party',
  'Party',
  'The party providing the Catalogue.',
  '1',
  undefined,
  undefined
)

export const CatalogueFieldMetaReceiverParty = new FieldMeta<CatalogueField>(
  CatalogueField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving the Catalogue.',
  '1',
  undefined,
  undefined
)

export const CatalogueFieldMetaSellerSupplierParty = new FieldMeta<CatalogueField>(
  CatalogueField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueFieldMetaContractorCustomerParty = new FieldMeta<CatalogueField>(
  CatalogueField.ContractorCustomerParty,
  'ContractorCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The customer party responsible for the contracts with which the Catalogue is associated.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueFieldMetaTradingTerms = new FieldMeta<CatalogueField>(
  CatalogueField.TradingTerms,
  'TradingTerms',
  'Trading Terms',
  'TradingTerms',
  'The trading terms associated with this Catalogue.',
  '0..n',
  undefined,
  undefined
)

export const CatalogueFieldMetaCatalogueLine = new FieldMeta<CatalogueField>(
  CatalogueField.CatalogueLine,
  'CatalogueLine',
  'Catalogue Line',
  'CatalogueLine',
  'A line in a Catalogue describing an item of sale.',
  '1..n',
  undefined,
  undefined
)

export class CatalogueFieldMeta {
  public static readonly UBLExtensions = CatalogueFieldMetaUBLExtensions
  public static readonly UBLVersionID = CatalogueFieldMetaUBLVersionID
  public static readonly CustomizationID = CatalogueFieldMetaCustomizationID
  public static readonly ProfileID = CatalogueFieldMetaProfileID
  public static readonly ProfileExecutionID = CatalogueFieldMetaProfileExecutionID
  public static readonly ID = CatalogueFieldMetaID
  public static readonly UUID = CatalogueFieldMetaUUID
  public static readonly ActionCode = CatalogueFieldMetaActionCode
  public static readonly Name = CatalogueFieldMetaName
  public static readonly IssueDate = CatalogueFieldMetaIssueDate
  public static readonly IssueTime = CatalogueFieldMetaIssueTime
  public static readonly RevisionDate = CatalogueFieldMetaRevisionDate
  public static readonly RevisionTime = CatalogueFieldMetaRevisionTime
  public static readonly Note = CatalogueFieldMetaNote
  public static readonly Description = CatalogueFieldMetaDescription
  public static readonly VersionID = CatalogueFieldMetaVersionID
  public static readonly PreviousVersionID = CatalogueFieldMetaPreviousVersionID
  public static readonly LineCountNumeric = CatalogueFieldMetaLineCountNumeric
  public static readonly ValidityPeriod = CatalogueFieldMetaValidityPeriod
  public static readonly ReferencedContract = CatalogueFieldMetaReferencedContract
  public static readonly SourceCatalogueReference = CatalogueFieldMetaSourceCatalogueReference
  public static readonly DocumentReference = CatalogueFieldMetaDocumentReference
  public static readonly Signature = CatalogueFieldMetaSignature
  public static readonly ProviderParty = CatalogueFieldMetaProviderParty
  public static readonly ReceiverParty = CatalogueFieldMetaReceiverParty
  public static readonly SellerSupplierParty = CatalogueFieldMetaSellerSupplierParty
  public static readonly ContractorCustomerParty = CatalogueFieldMetaContractorCustomerParty
  public static readonly TradingTerms = CatalogueFieldMetaTradingTerms
  public static readonly CatalogueLine = CatalogueFieldMetaCatalogueLine
}

export const CatalogueFieldMap = new Map([
  [CatalogueField.UBLExtensions, CatalogueFieldMetaUBLExtensions],
  [CatalogueField.UBLVersionID, CatalogueFieldMetaUBLVersionID],
  [CatalogueField.CustomizationID, CatalogueFieldMetaCustomizationID],
  [CatalogueField.ProfileID, CatalogueFieldMetaProfileID],
  [CatalogueField.ProfileExecutionID, CatalogueFieldMetaProfileExecutionID],
  [CatalogueField.ID, CatalogueFieldMetaID],
  [CatalogueField.UUID, CatalogueFieldMetaUUID],
  [CatalogueField.ActionCode, CatalogueFieldMetaActionCode],
  [CatalogueField.Name, CatalogueFieldMetaName],
  [CatalogueField.IssueDate, CatalogueFieldMetaIssueDate],
  [CatalogueField.IssueTime, CatalogueFieldMetaIssueTime],
  [CatalogueField.RevisionDate, CatalogueFieldMetaRevisionDate],
  [CatalogueField.RevisionTime, CatalogueFieldMetaRevisionTime],
  [CatalogueField.Note, CatalogueFieldMetaNote],
  [CatalogueField.Description, CatalogueFieldMetaDescription],
  [CatalogueField.VersionID, CatalogueFieldMetaVersionID],
  [CatalogueField.PreviousVersionID, CatalogueFieldMetaPreviousVersionID],
  [CatalogueField.LineCountNumeric, CatalogueFieldMetaLineCountNumeric],
  [CatalogueField.ValidityPeriod, CatalogueFieldMetaValidityPeriod],
  [CatalogueField.ReferencedContract, CatalogueFieldMetaReferencedContract],
  [CatalogueField.SourceCatalogueReference, CatalogueFieldMetaSourceCatalogueReference],
  [CatalogueField.DocumentReference, CatalogueFieldMetaDocumentReference],
  [CatalogueField.Signature, CatalogueFieldMetaSignature],
  [CatalogueField.ProviderParty, CatalogueFieldMetaProviderParty],
  [CatalogueField.ReceiverParty, CatalogueFieldMetaReceiverParty],
  [CatalogueField.SellerSupplierParty, CatalogueFieldMetaSellerSupplierParty],
  [CatalogueField.ContractorCustomerParty, CatalogueFieldMetaContractorCustomerParty],
  [CatalogueField.TradingTerms, CatalogueFieldMetaTradingTerms],
  [CatalogueField.CatalogueLine, CatalogueFieldMetaCatalogueLine]
])
