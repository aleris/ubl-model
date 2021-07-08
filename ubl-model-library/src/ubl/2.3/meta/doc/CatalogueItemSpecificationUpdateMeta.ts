import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CatalogueItemSpecificationUpdateLineType } from '../cac/CatalogueItemSpecificationUpdateLineMeta'
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

export enum CatalogueItemSpecificationUpdateField {
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
  CatalogueItemSpecificationUpdateLine = 'CatalogueItemSpecificationUpdateLine'
}

export const CatalogueItemSpecificationUpdateFieldMetaUBLExtensions = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaUBLVersionID = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const CatalogueItemSpecificationUpdateFieldMetaCustomizationID = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const CatalogueItemSpecificationUpdateFieldMetaProfileID = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the subset of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const CatalogueItemSpecificationUpdateFieldMetaProfileExecutionID = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaID = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaUUID = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaName = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.Name,
  'Name',
  'Name',
  TextType.name,
  'Text, assigned by the sender, that identifies this document to business users.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'electrical goods - new energy ratings.'
)

export const CatalogueItemSpecificationUpdateFieldMetaIssueDate = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaIssueTime = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaRevisionDate = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.RevisionDate,
  'RevisionDate',
  'Revision Date',
  DateType.name,
  'The date, assigned by the seller, on which the Catalogue was revised.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaRevisionTime = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.RevisionTime,
  'RevisionTime',
  'Revision Time',
  TimeType.name,
  'The time, assigned by the seller, at which the Catalogue was revised.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaNote = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaDescription = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.Description,
  'Description',
  'Description',
  TextType.name,
  'Textual description of the document instance.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'ratings based on new environmental standards for EU'
)

export const CatalogueItemSpecificationUpdateFieldMetaVersionID = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'Identifies the current version of the Catalogue.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.1'
)

export const CatalogueItemSpecificationUpdateFieldMetaLineCountNumeric = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  NumericType.name,
  'The number of Catalogue Item Specification Update Lines in this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaValidityPeriod = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'A period, assigned by the seller, during which the information in the Catalogue Revision is effective. This may be given as start and end dates or as a duration.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaRelatedCatalogueReference = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.RelatedCatalogueReference,
  'RelatedCatalogueReference',
  'Related Catalogue Reference',
  CatalogueReferenceType.name,
  'A reference to the Catalogue being updated.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaReferencedContract = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.ReferencedContract,
  'ReferencedContract',
  'Referenced Contract',
  ContractType.name,
  'A contract or framework agreement with which the Catalogue is associated.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaSignature = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaProviderParty = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.ProviderParty,
  'ProviderParty',
  'Provider Party',
  PartyType.name,
  'The party sending the Catalogue Item Specification Update.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaReceiverParty = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving the Catalogue Item Specification Update.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaSellerSupplierParty = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaContractorCustomerParty = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.ContractorCustomerParty,
  'ContractorCustomerParty',
  'Contractor Customer Party',
  CustomerPartyType.name,
  'The customer party responsible for the contracts with which the Catalogue is associated.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaTradingTerms = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.TradingTerms,
  'TradingTerms',
  'Trading Terms',
  TradingTermsType.name,
  'The trading terms associated with the Catalogue.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaDefaultLanguage = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.DefaultLanguage,
  'DefaultLanguage',
  'Default Language',
  LanguageType.name,
  'The default language for the item specifications.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateFieldMetaCatalogueItemSpecificationUpdateLine = new FieldMeta<CatalogueItemSpecificationUpdateField>(
  CatalogueItemSpecificationUpdateField.CatalogueItemSpecificationUpdateLine,
  'CatalogueItemSpecificationUpdateLine',
  'Catalogue Item Specification Update Line',
  CatalogueItemSpecificationUpdateLineType.name,
  'One or more lines in the Catalogue Item Specification Update, each line updating a specific catalogue item.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class CatalogueItemSpecificationUpdateFieldMeta {
  public static readonly UBLExtensions = CatalogueItemSpecificationUpdateFieldMetaUBLExtensions
  public static readonly UBLVersionID = CatalogueItemSpecificationUpdateFieldMetaUBLVersionID
  public static readonly CustomizationID = CatalogueItemSpecificationUpdateFieldMetaCustomizationID
  public static readonly ProfileID = CatalogueItemSpecificationUpdateFieldMetaProfileID
  public static readonly ProfileExecutionID = CatalogueItemSpecificationUpdateFieldMetaProfileExecutionID
  public static readonly ID = CatalogueItemSpecificationUpdateFieldMetaID
  public static readonly UUID = CatalogueItemSpecificationUpdateFieldMetaUUID
  public static readonly Name = CatalogueItemSpecificationUpdateFieldMetaName
  public static readonly IssueDate = CatalogueItemSpecificationUpdateFieldMetaIssueDate
  public static readonly IssueTime = CatalogueItemSpecificationUpdateFieldMetaIssueTime
  public static readonly RevisionDate = CatalogueItemSpecificationUpdateFieldMetaRevisionDate
  public static readonly RevisionTime = CatalogueItemSpecificationUpdateFieldMetaRevisionTime
  public static readonly Note = CatalogueItemSpecificationUpdateFieldMetaNote
  public static readonly Description = CatalogueItemSpecificationUpdateFieldMetaDescription
  public static readonly VersionID = CatalogueItemSpecificationUpdateFieldMetaVersionID
  public static readonly LineCountNumeric = CatalogueItemSpecificationUpdateFieldMetaLineCountNumeric
  public static readonly ValidityPeriod = CatalogueItemSpecificationUpdateFieldMetaValidityPeriod
  public static readonly RelatedCatalogueReference = CatalogueItemSpecificationUpdateFieldMetaRelatedCatalogueReference
  public static readonly ReferencedContract = CatalogueItemSpecificationUpdateFieldMetaReferencedContract
  public static readonly Signature = CatalogueItemSpecificationUpdateFieldMetaSignature
  public static readonly ProviderParty = CatalogueItemSpecificationUpdateFieldMetaProviderParty
  public static readonly ReceiverParty = CatalogueItemSpecificationUpdateFieldMetaReceiverParty
  public static readonly SellerSupplierParty = CatalogueItemSpecificationUpdateFieldMetaSellerSupplierParty
  public static readonly ContractorCustomerParty = CatalogueItemSpecificationUpdateFieldMetaContractorCustomerParty
  public static readonly TradingTerms = CatalogueItemSpecificationUpdateFieldMetaTradingTerms
  public static readonly DefaultLanguage = CatalogueItemSpecificationUpdateFieldMetaDefaultLanguage
  public static readonly CatalogueItemSpecificationUpdateLine = CatalogueItemSpecificationUpdateFieldMetaCatalogueItemSpecificationUpdateLine
}

export const CatalogueItemSpecificationUpdateFieldMap = new Map([
  [CatalogueItemSpecificationUpdateField.UBLExtensions, CatalogueItemSpecificationUpdateFieldMetaUBLExtensions],
  [CatalogueItemSpecificationUpdateField.UBLVersionID, CatalogueItemSpecificationUpdateFieldMetaUBLVersionID],
  [CatalogueItemSpecificationUpdateField.CustomizationID, CatalogueItemSpecificationUpdateFieldMetaCustomizationID],
  [CatalogueItemSpecificationUpdateField.ProfileID, CatalogueItemSpecificationUpdateFieldMetaProfileID],
  [CatalogueItemSpecificationUpdateField.ProfileExecutionID, CatalogueItemSpecificationUpdateFieldMetaProfileExecutionID],
  [CatalogueItemSpecificationUpdateField.ID, CatalogueItemSpecificationUpdateFieldMetaID],
  [CatalogueItemSpecificationUpdateField.UUID, CatalogueItemSpecificationUpdateFieldMetaUUID],
  [CatalogueItemSpecificationUpdateField.Name, CatalogueItemSpecificationUpdateFieldMetaName],
  [CatalogueItemSpecificationUpdateField.IssueDate, CatalogueItemSpecificationUpdateFieldMetaIssueDate],
  [CatalogueItemSpecificationUpdateField.IssueTime, CatalogueItemSpecificationUpdateFieldMetaIssueTime],
  [CatalogueItemSpecificationUpdateField.RevisionDate, CatalogueItemSpecificationUpdateFieldMetaRevisionDate],
  [CatalogueItemSpecificationUpdateField.RevisionTime, CatalogueItemSpecificationUpdateFieldMetaRevisionTime],
  [CatalogueItemSpecificationUpdateField.Note, CatalogueItemSpecificationUpdateFieldMetaNote],
  [CatalogueItemSpecificationUpdateField.Description, CatalogueItemSpecificationUpdateFieldMetaDescription],
  [CatalogueItemSpecificationUpdateField.VersionID, CatalogueItemSpecificationUpdateFieldMetaVersionID],
  [CatalogueItemSpecificationUpdateField.LineCountNumeric, CatalogueItemSpecificationUpdateFieldMetaLineCountNumeric],
  [CatalogueItemSpecificationUpdateField.ValidityPeriod, CatalogueItemSpecificationUpdateFieldMetaValidityPeriod],
  [CatalogueItemSpecificationUpdateField.RelatedCatalogueReference, CatalogueItemSpecificationUpdateFieldMetaRelatedCatalogueReference],
  [CatalogueItemSpecificationUpdateField.ReferencedContract, CatalogueItemSpecificationUpdateFieldMetaReferencedContract],
  [CatalogueItemSpecificationUpdateField.Signature, CatalogueItemSpecificationUpdateFieldMetaSignature],
  [CatalogueItemSpecificationUpdateField.ProviderParty, CatalogueItemSpecificationUpdateFieldMetaProviderParty],
  [CatalogueItemSpecificationUpdateField.ReceiverParty, CatalogueItemSpecificationUpdateFieldMetaReceiverParty],
  [CatalogueItemSpecificationUpdateField.SellerSupplierParty, CatalogueItemSpecificationUpdateFieldMetaSellerSupplierParty],
  [CatalogueItemSpecificationUpdateField.ContractorCustomerParty, CatalogueItemSpecificationUpdateFieldMetaContractorCustomerParty],
  [CatalogueItemSpecificationUpdateField.TradingTerms, CatalogueItemSpecificationUpdateFieldMetaTradingTerms],
  [CatalogueItemSpecificationUpdateField.DefaultLanguage, CatalogueItemSpecificationUpdateFieldMetaDefaultLanguage],
  [CatalogueItemSpecificationUpdateField.CatalogueItemSpecificationUpdateLine, CatalogueItemSpecificationUpdateFieldMetaCatalogueItemSpecificationUpdateLine]
])

export const CatalogueItemSpecificationUpdateType: Type<CatalogueItemSpecificationUpdateField> = {
  name: 'CatalogueItemSpecificationUpdate',
  label: 'Catalogue Item Specification Update',
  module: TypeModule.doc,
  definition: 'A document used to update information (e.g., technical descriptions and properties) about Items in an existing Catalogue.',
  fields: CatalogueItemSpecificationUpdateFieldMap,
}
