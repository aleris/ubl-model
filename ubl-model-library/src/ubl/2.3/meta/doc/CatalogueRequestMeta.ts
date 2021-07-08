import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from '../cac/AddressMeta'
import { CatalogueReferenceType } from '../cac/CatalogueReferenceMeta'
import { CatalogueRequestLineType } from '../cac/CatalogueRequestLineMeta'
import { ClassificationSchemeType } from '../cac/ClassificationSchemeMeta'
import { ContractType } from '../cac/ContractMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { LanguageType } from '../cac/LanguageMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { TradingTermsType } from '../cac/TradingTermsMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaUBLVersionID = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const CatalogueRequestFieldMetaCustomizationID = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const CatalogueRequestFieldMetaProfileID = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const CatalogueRequestFieldMetaProfileExecutionID = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaID = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaUUID = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaName = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.Name,
  'Name',
  'Name',
  TextType.name,
  'Text, assigned by the sender, that identifies this document to business users.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'winter 2005 collection'
)

export const CatalogueRequestFieldMetaIssueDate = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaIssueTime = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaNote = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaDescription = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.Description,
  'Description',
  'Description',
  TextType.name,
  'Textual description of the document instance.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'latest computer accessories for laptops'
)

export const CatalogueRequestFieldMetaPricingUpdateRequestIndicator = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.PricingUpdateRequestIndicator,
  'PricingUpdateRequestIndicator',
  'Pricing Update Request Indicator',
  IndicatorType.name,
  'Indicates a request for a pricing update.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'default is true'
)

export const CatalogueRequestFieldMetaItemUpdateRequestIndicator = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ItemUpdateRequestIndicator,
  'ItemUpdateRequestIndicator',
  'Item Update Request Indicator',
  IndicatorType.name,
  'Indicates a request for an update of the item specifications.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'default is true'
)

export const CatalogueRequestFieldMetaLineCountNumeric = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  NumericType.name,
  'The number of Catalogue Lines in this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaValidityPeriod = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'The period, assigned by the Catalogue Managing party, during which the information in the Catalogue requested is to be effective. This may be given as start and end dates or a duration.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaSignature = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaReceiverParty = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving the Catalogue Request.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaProviderParty = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ProviderParty,
  'ProviderParty',
  'Provider Party',
  PartyType.name,
  'The party sending the Catalogue Request.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaSellerSupplierParty = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaContractorCustomerParty = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ContractorCustomerParty,
  'ContractorCustomerParty',
  'Contractor Customer Party',
  CustomerPartyType.name,
  'The customer party responsible for the contracts with which the Catalogue is associated.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaRequestedCatalogueReference = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.RequestedCatalogueReference,
  'RequestedCatalogueReference',
  'Requested Catalogue Reference',
  CatalogueReferenceType.name,
  'A reference to a specific Catalogue; used if the Catalogue Request is for an update.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaReferencedContract = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ReferencedContract,
  'ReferencedContract',
  'Referenced Contract',
  ContractType.name,
  'A contract or framework agreement with which the Catalogue being requested is associated.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaTradingTerms = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.TradingTerms,
  'TradingTerms',
  'Trading Terms',
  TradingTermsType.name,
  'The trading terms associated with the requested Catalogue.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaDocumentReference = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to another document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaApplicableTerritoryAddress = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.ApplicableTerritoryAddress,
  'ApplicableTerritoryAddress',
  'Applicable Territory Address',
  AddressType.name,
  'A reference to a territory (region, country, city, etc.) to which the requested Catalogue will apply, expressed as an Address.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaRequestedLanguage = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.RequestedLanguage,
  'RequestedLanguage',
  'Requested Language',
  LanguageType.name,
  'The language in which the Catalogue is requested to be provided.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaRequestedClassificationScheme = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.RequestedClassificationScheme,
  'RequestedClassificationScheme',
  'Requested Classification Scheme',
  ClassificationSchemeType.name,
  'A requested classification scheme for the requested Catalogue.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueRequestFieldMetaCatalogueRequestLine = new FieldMeta<CatalogueRequestField>(
  CatalogueRequestField.CatalogueRequestLine,
  'CatalogueRequestLine',
  'Catalogue Request Line',
  CatalogueRequestLineType.name,
  'An association to specific Catalogue Lines for the catalogue requested.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const CatalogueRequestType: Type<CatalogueRequestField> = {
  name: 'CatalogueRequest',
  label: 'Catalogue Request',
  module: TypeModule.doc,
  definition: 'A document used to request a Catalogue.',
  fields: CatalogueRequestFieldMap,
}
