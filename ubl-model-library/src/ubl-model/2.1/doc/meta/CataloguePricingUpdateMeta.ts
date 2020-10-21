import { FieldMeta } from '../../FieldMeta'

export enum CataloguePricingUpdateField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  UUID = 'UUID',
  Name = 'Name',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  RevisionDate = 'RevisionDate',
  RevisionTime = 'RevisionTime',
  Note = 'Note',
  Description = 'Description',
  VersionID = 'VersionID',
  LineCountNumeric = 'LineCountNumeric',
  ValidityPeriod = 'ValidityPeriod',
  RelatedCatalogueReference = 'RelatedCatalogueReference',
  ReferencedContract = 'ReferencedContract',
  Signature = 'Signature',
  ProviderParty = 'ProviderParty',
  ReceiverParty = 'ReceiverParty',
  SellerSupplierParty = 'SellerSupplierParty',
  ContractorCustomerParty = 'ContractorCustomerParty',
  TradingTerms = 'TradingTerms',
  DefaultLanguage = 'DefaultLanguage',
  CataloguePricingUpdateLine = 'CataloguePricingUpdateLine'
}

export const CataloguePricingUpdateFieldMetaUBLExtensions = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaUBLVersionID = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const CataloguePricingUpdateFieldMetaCustomizationID = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const CataloguePricingUpdateFieldMetaProfileID = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the subset of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const CataloguePricingUpdateFieldMetaProfileExecutionID = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaID = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaUUID = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaName = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.Name,
  'Name',
  'Name',
  'Text',
  'Text, assigned by the sender, that identifies this document to business users.',
  '0..1',
  undefined,
  'Seasonal Promotion'
)

export const CataloguePricingUpdateFieldMetaIssueDate = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaIssueTime = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaRevisionDate = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.RevisionDate,
  'RevisionDate',
  'Revision Date',
  'Date',
  'The date, assigned by the seller, on which the Catalogue was revised.',
  '0..1',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaRevisionTime = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.RevisionTime,
  'RevisionTime',
  'Revision Time',
  'Time',
  'The time, assigned by the seller, at which the Catalogue was revised.',
  '0..1',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaNote = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaDescription = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.Description,
  'Description',
  'Description',
  'Text',
  'Describes the Catalogue Revision.',
  '0..n',
  undefined,
  'adjustment of prices for Christmas trading period'
)

export const CataloguePricingUpdateFieldMetaVersionID = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'Indicates the current version of the catalogue.',
  '0..1',
  undefined,
  '1.1'
)

export const CataloguePricingUpdateFieldMetaLineCountNumeric = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of lines in the document.',
  '0..1',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaValidityPeriod = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.ValidityPeriod,
  'ValidityPeriod',
  'Period',
  'Period',
  'A period, assigned by the seller, during which the information in the Catalogue Revision is effective. This may be given as start and end dates or as a duration.',
  '0..n',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaRelatedCatalogueReference = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.RelatedCatalogueReference,
  'RelatedCatalogueReference',
  'Catalogue Reference',
  'CatalogueReference',
  'A reference to the Catalogue being updated.',
  '1',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaReferencedContract = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.ReferencedContract,
  'ReferencedContract',
  'Contract',
  'Contract',
  'A contract or framework agreement with which the Catalogue is associated.',
  '0..n',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaSignature = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaProviderParty = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.ProviderParty,
  'ProviderParty',
  'Party',
  'Party',
  'The party sending the Catalogue Pricing Update.',
  '1',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaReceiverParty = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving the Catalogue Pricing Update.',
  '1',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaSellerSupplierParty = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller.',
  '0..1',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaContractorCustomerParty = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.ContractorCustomerParty,
  'ContractorCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The customer party responsible for the contracts with which the Catalogue is associated.',
  '0..1',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaTradingTerms = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.TradingTerms,
  'TradingTerms',
  'Trading Terms',
  'TradingTerms',
  'The trading terms associated with the Catalogue.',
  '0..1',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaDefaultLanguage = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.DefaultLanguage,
  'DefaultLanguage',
  'Language',
  'Language',
  'The default language for the catalogue pricing update.',
  '0..1',
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaCataloguePricingUpdateLine = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.CataloguePricingUpdateLine,
  'CataloguePricingUpdateLine',
  'Catalogue Pricing Update Line',
  'CataloguePricingUpdateLine',
  'One or more lines in the Catalogue Pricing Update, each line updating a specific catalogue item.',
  '1..n',
  undefined,
  undefined
)

export class CataloguePricingUpdateFieldMeta {
  public static readonly UBLExtensions = CataloguePricingUpdateFieldMetaUBLExtensions
  public static readonly UBLVersionID = CataloguePricingUpdateFieldMetaUBLVersionID
  public static readonly CustomizationID = CataloguePricingUpdateFieldMetaCustomizationID
  public static readonly ProfileID = CataloguePricingUpdateFieldMetaProfileID
  public static readonly ProfileExecutionID = CataloguePricingUpdateFieldMetaProfileExecutionID
  public static readonly ID = CataloguePricingUpdateFieldMetaID
  public static readonly UUID = CataloguePricingUpdateFieldMetaUUID
  public static readonly Name = CataloguePricingUpdateFieldMetaName
  public static readonly IssueDate = CataloguePricingUpdateFieldMetaIssueDate
  public static readonly IssueTime = CataloguePricingUpdateFieldMetaIssueTime
  public static readonly RevisionDate = CataloguePricingUpdateFieldMetaRevisionDate
  public static readonly RevisionTime = CataloguePricingUpdateFieldMetaRevisionTime
  public static readonly Note = CataloguePricingUpdateFieldMetaNote
  public static readonly Description = CataloguePricingUpdateFieldMetaDescription
  public static readonly VersionID = CataloguePricingUpdateFieldMetaVersionID
  public static readonly LineCountNumeric = CataloguePricingUpdateFieldMetaLineCountNumeric
  public static readonly ValidityPeriod = CataloguePricingUpdateFieldMetaValidityPeriod
  public static readonly RelatedCatalogueReference = CataloguePricingUpdateFieldMetaRelatedCatalogueReference
  public static readonly ReferencedContract = CataloguePricingUpdateFieldMetaReferencedContract
  public static readonly Signature = CataloguePricingUpdateFieldMetaSignature
  public static readonly ProviderParty = CataloguePricingUpdateFieldMetaProviderParty
  public static readonly ReceiverParty = CataloguePricingUpdateFieldMetaReceiverParty
  public static readonly SellerSupplierParty = CataloguePricingUpdateFieldMetaSellerSupplierParty
  public static readonly ContractorCustomerParty = CataloguePricingUpdateFieldMetaContractorCustomerParty
  public static readonly TradingTerms = CataloguePricingUpdateFieldMetaTradingTerms
  public static readonly DefaultLanguage = CataloguePricingUpdateFieldMetaDefaultLanguage
  public static readonly CataloguePricingUpdateLine = CataloguePricingUpdateFieldMetaCataloguePricingUpdateLine
}

export const CataloguePricingUpdateFieldMap = new Map([
  [CataloguePricingUpdateField.UBLExtensions, CataloguePricingUpdateFieldMetaUBLExtensions],
  [CataloguePricingUpdateField.UBLVersionID, CataloguePricingUpdateFieldMetaUBLVersionID],
  [CataloguePricingUpdateField.CustomizationID, CataloguePricingUpdateFieldMetaCustomizationID],
  [CataloguePricingUpdateField.ProfileID, CataloguePricingUpdateFieldMetaProfileID],
  [CataloguePricingUpdateField.ProfileExecutionID, CataloguePricingUpdateFieldMetaProfileExecutionID],
  [CataloguePricingUpdateField.ID, CataloguePricingUpdateFieldMetaID],
  [CataloguePricingUpdateField.UUID, CataloguePricingUpdateFieldMetaUUID],
  [CataloguePricingUpdateField.Name, CataloguePricingUpdateFieldMetaName],
  [CataloguePricingUpdateField.IssueDate, CataloguePricingUpdateFieldMetaIssueDate],
  [CataloguePricingUpdateField.IssueTime, CataloguePricingUpdateFieldMetaIssueTime],
  [CataloguePricingUpdateField.RevisionDate, CataloguePricingUpdateFieldMetaRevisionDate],
  [CataloguePricingUpdateField.RevisionTime, CataloguePricingUpdateFieldMetaRevisionTime],
  [CataloguePricingUpdateField.Note, CataloguePricingUpdateFieldMetaNote],
  [CataloguePricingUpdateField.Description, CataloguePricingUpdateFieldMetaDescription],
  [CataloguePricingUpdateField.VersionID, CataloguePricingUpdateFieldMetaVersionID],
  [CataloguePricingUpdateField.LineCountNumeric, CataloguePricingUpdateFieldMetaLineCountNumeric],
  [CataloguePricingUpdateField.ValidityPeriod, CataloguePricingUpdateFieldMetaValidityPeriod],
  [CataloguePricingUpdateField.RelatedCatalogueReference, CataloguePricingUpdateFieldMetaRelatedCatalogueReference],
  [CataloguePricingUpdateField.ReferencedContract, CataloguePricingUpdateFieldMetaReferencedContract],
  [CataloguePricingUpdateField.Signature, CataloguePricingUpdateFieldMetaSignature],
  [CataloguePricingUpdateField.ProviderParty, CataloguePricingUpdateFieldMetaProviderParty],
  [CataloguePricingUpdateField.ReceiverParty, CataloguePricingUpdateFieldMetaReceiverParty],
  [CataloguePricingUpdateField.SellerSupplierParty, CataloguePricingUpdateFieldMetaSellerSupplierParty],
  [CataloguePricingUpdateField.ContractorCustomerParty, CataloguePricingUpdateFieldMetaContractorCustomerParty],
  [CataloguePricingUpdateField.TradingTerms, CataloguePricingUpdateFieldMetaTradingTerms],
  [CataloguePricingUpdateField.DefaultLanguage, CataloguePricingUpdateFieldMetaDefaultLanguage],
  [CataloguePricingUpdateField.CataloguePricingUpdateLine, CataloguePricingUpdateFieldMetaCataloguePricingUpdateLine]
])
