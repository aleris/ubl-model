import { FieldMeta } from '../../FieldMeta'

export enum CatalogueRequestField {
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
  Note = 'Note',
  Description = 'Description',
  PricingUpdateRequestIndicator = 'PricingUpdateRequestIndicator',
  ItemUpdateRequestIndicator = 'ItemUpdateRequestIndicator',
  LineCountNumeric = 'LineCountNumeric',
  ValidityPeriod = 'ValidityPeriod',
  Signature = 'Signature',
  ReceiverParty = 'ReceiverParty',
  ProviderParty = 'ProviderParty',
  SellerSupplierParty = 'SellerSupplierParty',
  ContractorCustomerParty = 'ContractorCustomerParty',
  RequestedCatalogueReference = 'RequestedCatalogueReference',
  ReferencedContract = 'ReferencedContract',
  TradingTerms = 'TradingTerms',
  DocumentReference = 'DocumentReference',
  ApplicableTerritoryAddress = 'ApplicableTerritoryAddress',
  RequestedLanguage = 'RequestedLanguage',
  RequestedClassificationScheme = 'RequestedClassificationScheme',
  CatalogueRequestLine = 'CatalogueRequestLine'
}

export const CatalogueRequestFieldMetaUBLExtensions = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaUBLVersionID = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const CatalogueRequestFieldMetaCustomizationID = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const CatalogueRequestFieldMetaProfileID = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const CatalogueRequestFieldMetaProfileExecutionID = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaID = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaUUID = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaName = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.Name,
  'Name',
  'Name',
  'Text',
  'Text, assigned by the sender, that identifies this document to business users.',
  '0..1',
  undefined,
  'winter 2005 collection'
)

export const CatalogueRequestFieldMetaIssueDate = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaIssueTime = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaNote = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaDescription = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.Description,
  'Description',
  'Description',
  'Text',
  'Textual description of the document instance.',
  '0..n',
  undefined,
  'latest computer accessories for laptops'
)

export const CatalogueRequestFieldMetaPricingUpdateRequestIndicator = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.PricingUpdateRequestIndicator,
  'PricingUpdateRequestIndicator',
  'Indicator',
  'Indicator',
  'Indicates a request for a pricing update.',
  '0..1',
  undefined,
  'default is true'
)

export const CatalogueRequestFieldMetaItemUpdateRequestIndicator = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ItemUpdateRequestIndicator,
  'ItemUpdateRequestIndicator',
  'Indicator',
  'Indicator',
  'Indicates a request for an update of the item specifications.',
  '0..1',
  undefined,
  'default is true'
)

export const CatalogueRequestFieldMetaLineCountNumeric = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of Catalogue Lines in this document.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaValidityPeriod = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ValidityPeriod,
  'ValidityPeriod',
  'Period',
  'Period',
  'The period, assigned by the Catalogue Managing party, during which the information in the Catalogue requested is to be effective. This may be given as start and end dates or a duration.',
  '0..n',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaSignature = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaReceiverParty = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving the Catalogue Request.',
  '1',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaProviderParty = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ProviderParty,
  'ProviderParty',
  'Party',
  'Party',
  'The party sending the Catalogue Request.',
  '1',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaSellerSupplierParty = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaContractorCustomerParty = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ContractorCustomerParty,
  'ContractorCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The customer party responsible for the contracts with which the Catalogue is associated.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaRequestedCatalogueReference = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.RequestedCatalogueReference,
  'RequestedCatalogueReference',
  'Catalogue Reference',
  'CatalogueReference',
  'A reference to a specific Catalogue; used if the Catalogue Request is for an update.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaReferencedContract = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ReferencedContract,
  'ReferencedContract',
  'Contract',
  'Contract',
  'A contract or framework agreement with which the Catalogue being requested is associated.',
  '0..n',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaTradingTerms = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.TradingTerms,
  'TradingTerms',
  'Trading Terms',
  'TradingTerms',
  'The trading terms associated with the requested Catalogue.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaDocumentReference = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to another document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaApplicableTerritoryAddress = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ApplicableTerritoryAddress,
  'ApplicableTerritoryAddress',
  'Address',
  'Address',
  'A reference to a territory (region, country, city, etc.) to which the requested Catalogue will apply, expressed as an Address.',
  '0..n',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaRequestedLanguage = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.RequestedLanguage,
  'RequestedLanguage',
  'Language',
  'Language',
  'The language in which the Catalogue is requested to be provided.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaRequestedClassificationScheme = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.RequestedClassificationScheme,
  'RequestedClassificationScheme',
  'Classification Scheme',
  'ClassificationScheme',
  'A requested classification scheme for the requested Catalogue.',
  '0..n',
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaCatalogueRequestLine = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.CatalogueRequestLine,
  'CatalogueRequestLine',
  'Catalogue Request Line',
  'CatalogueRequestLine',
  'An association to specific Catalogue Lines for the catalogue requested.',
  '0..n',
  undefined,
  undefined
)

export class CatalogueRequestFieldMeta {
  public static readonly UBLExtensions = CatalogueRequestFieldMetaUBLExtensions
  public static readonly UBLVersionID = CatalogueRequestFieldMetaUBLVersionID
  public static readonly CustomizationID = CatalogueRequestFieldMetaCustomizationID
  public static readonly ProfileID = CatalogueRequestFieldMetaProfileID
  public static readonly ProfileExecutionID = CatalogueRequestFieldMetaProfileExecutionID
  public static readonly ID = CatalogueRequestFieldMetaID
  public static readonly UUID = CatalogueRequestFieldMetaUUID
  public static readonly Name = CatalogueRequestFieldMetaName
  public static readonly IssueDate = CatalogueRequestFieldMetaIssueDate
  public static readonly IssueTime = CatalogueRequestFieldMetaIssueTime
  public static readonly Note = CatalogueRequestFieldMetaNote
  public static readonly Description = CatalogueRequestFieldMetaDescription
  public static readonly PricingUpdateRequestIndicator = CatalogueRequestFieldMetaPricingUpdateRequestIndicator
  public static readonly ItemUpdateRequestIndicator = CatalogueRequestFieldMetaItemUpdateRequestIndicator
  public static readonly LineCountNumeric = CatalogueRequestFieldMetaLineCountNumeric
  public static readonly ValidityPeriod = CatalogueRequestFieldMetaValidityPeriod
  public static readonly Signature = CatalogueRequestFieldMetaSignature
  public static readonly ReceiverParty = CatalogueRequestFieldMetaReceiverParty
  public static readonly ProviderParty = CatalogueRequestFieldMetaProviderParty
  public static readonly SellerSupplierParty = CatalogueRequestFieldMetaSellerSupplierParty
  public static readonly ContractorCustomerParty = CatalogueRequestFieldMetaContractorCustomerParty
  public static readonly RequestedCatalogueReference = CatalogueRequestFieldMetaRequestedCatalogueReference
  public static readonly ReferencedContract = CatalogueRequestFieldMetaReferencedContract
  public static readonly TradingTerms = CatalogueRequestFieldMetaTradingTerms
  public static readonly DocumentReference = CatalogueRequestFieldMetaDocumentReference
  public static readonly ApplicableTerritoryAddress = CatalogueRequestFieldMetaApplicableTerritoryAddress
  public static readonly RequestedLanguage = CatalogueRequestFieldMetaRequestedLanguage
  public static readonly RequestedClassificationScheme = CatalogueRequestFieldMetaRequestedClassificationScheme
  public static readonly CatalogueRequestLine = CatalogueRequestFieldMetaCatalogueRequestLine
}

export const CatalogueRequestFieldMap = new Map([
  [CatalogueRequestField.UBLExtensions, CatalogueRequestFieldMetaUBLExtensions],
  [CatalogueRequestField.UBLVersionID, CatalogueRequestFieldMetaUBLVersionID],
  [CatalogueRequestField.CustomizationID, CatalogueRequestFieldMetaCustomizationID],
  [CatalogueRequestField.ProfileID, CatalogueRequestFieldMetaProfileID],
  [CatalogueRequestField.ProfileExecutionID, CatalogueRequestFieldMetaProfileExecutionID],
  [CatalogueRequestField.ID, CatalogueRequestFieldMetaID],
  [CatalogueRequestField.UUID, CatalogueRequestFieldMetaUUID],
  [CatalogueRequestField.Name, CatalogueRequestFieldMetaName],
  [CatalogueRequestField.IssueDate, CatalogueRequestFieldMetaIssueDate],
  [CatalogueRequestField.IssueTime, CatalogueRequestFieldMetaIssueTime],
  [CatalogueRequestField.Note, CatalogueRequestFieldMetaNote],
  [CatalogueRequestField.Description, CatalogueRequestFieldMetaDescription],
  [CatalogueRequestField.PricingUpdateRequestIndicator, CatalogueRequestFieldMetaPricingUpdateRequestIndicator],
  [CatalogueRequestField.ItemUpdateRequestIndicator, CatalogueRequestFieldMetaItemUpdateRequestIndicator],
  [CatalogueRequestField.LineCountNumeric, CatalogueRequestFieldMetaLineCountNumeric],
  [CatalogueRequestField.ValidityPeriod, CatalogueRequestFieldMetaValidityPeriod],
  [CatalogueRequestField.Signature, CatalogueRequestFieldMetaSignature],
  [CatalogueRequestField.ReceiverParty, CatalogueRequestFieldMetaReceiverParty],
  [CatalogueRequestField.ProviderParty, CatalogueRequestFieldMetaProviderParty],
  [CatalogueRequestField.SellerSupplierParty, CatalogueRequestFieldMetaSellerSupplierParty],
  [CatalogueRequestField.ContractorCustomerParty, CatalogueRequestFieldMetaContractorCustomerParty],
  [CatalogueRequestField.RequestedCatalogueReference, CatalogueRequestFieldMetaRequestedCatalogueReference],
  [CatalogueRequestField.ReferencedContract, CatalogueRequestFieldMetaReferencedContract],
  [CatalogueRequestField.TradingTerms, CatalogueRequestFieldMetaTradingTerms],
  [CatalogueRequestField.DocumentReference, CatalogueRequestFieldMetaDocumentReference],
  [CatalogueRequestField.ApplicableTerritoryAddress, CatalogueRequestFieldMetaApplicableTerritoryAddress],
  [CatalogueRequestField.RequestedLanguage, CatalogueRequestFieldMetaRequestedLanguage],
  [CatalogueRequestField.RequestedClassificationScheme, CatalogueRequestFieldMetaRequestedClassificationScheme],
  [CatalogueRequestField.CatalogueRequestLine, CatalogueRequestFieldMetaCatalogueRequestLine]
])
