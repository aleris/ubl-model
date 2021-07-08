import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CataloguePricingUpdateLineType } from '../cac/CataloguePricingUpdateLineMeta'
import { CatalogueReferenceType } from '../cac/CatalogueReferenceMeta'
import { ContractType } from '../cac/ContractMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaUBLVersionID = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const CataloguePricingUpdateFieldMetaCustomizationID = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const CataloguePricingUpdateFieldMetaProfileID = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the subset of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const CataloguePricingUpdateFieldMetaProfileExecutionID = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaID = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaUUID = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaName = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.Name,
  'Name',
  'Name',
  TextType.name,
  'Text, assigned by the sender, that identifies this document to business users.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Seasonal Promotion'
)

export const CataloguePricingUpdateFieldMetaIssueDate = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaIssueTime = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaRevisionDate = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.RevisionDate,
  'RevisionDate',
  'Revision Date',
  DateType.name,
  'The date, assigned by the seller, on which the Catalogue was revised.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaRevisionTime = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.RevisionTime,
  'RevisionTime',
  'Revision Time',
  TimeType.name,
  'The time, assigned by the seller, at which the Catalogue was revised.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaNote = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaDescription = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.Description,
  'Description',
  'Description',
  TextType.name,
  'Describes the Catalogue Revision.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'adjustment of prices for Christmas trading period'
)

export const CataloguePricingUpdateFieldMetaVersionID = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'Indicates the current version of the catalogue.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.1'
)

export const CataloguePricingUpdateFieldMetaLineCountNumeric = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  NumericType.name,
  'The number of lines in the document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaValidityPeriod = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'A period, assigned by the seller, during which the information in the Catalogue Revision is effective. This may be given as start and end dates or as a duration.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaRelatedCatalogueReference = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.RelatedCatalogueReference,
  'RelatedCatalogueReference',
  'Related Catalogue Reference',
  CatalogueReferenceType.name,
  'A reference to the Catalogue being updated.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaReferencedContract = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.ReferencedContract,
  'ReferencedContract',
  'Referenced Contract',
  ContractType.name,
  'A contract or framework agreement with which the Catalogue is associated.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaSignature = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaProviderParty = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.ProviderParty,
  'ProviderParty',
  'Provider Party',
  PartyType.name,
  'The party sending the Catalogue Pricing Update.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaReceiverParty = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving the Catalogue Pricing Update.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaSellerSupplierParty = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaContractorCustomerParty = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.ContractorCustomerParty,
  'ContractorCustomerParty',
  'Contractor Customer Party',
  CustomerPartyType.name,
  'The customer party responsible for the contracts with which the Catalogue is associated.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaTradingTerms = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.TradingTerms,
  'TradingTerms',
  'Trading Terms',
  TradingTermsType.name,
  'The trading terms associated with the Catalogue.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaDefaultLanguage = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.DefaultLanguage,
  'DefaultLanguage',
  'Default Language',
  LanguageType.name,
  'The default language for the catalogue pricing update.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CataloguePricingUpdateFieldMetaCataloguePricingUpdateLine = new FieldMeta<CataloguePricingUpdateField>(
  CataloguePricingUpdateField.CataloguePricingUpdateLine,
  'CataloguePricingUpdateLine',
  'Catalogue Pricing Update Line',
  CataloguePricingUpdateLineType.name,
  'One or more lines in the Catalogue Pricing Update, each line updating a specific catalogue item.',
  FieldCardinality.Multi,
  TypeModule.cac,
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

export const CataloguePricingUpdateType: Type<CataloguePricingUpdateField> = {
  name: 'CataloguePricingUpdate',
  label: 'Catalogue Pricing Update',
  module: TypeModule.doc,
  definition: 'A document used to update information about prices in an existing Catalogue.',
  fields: CataloguePricingUpdateFieldMap,
}
