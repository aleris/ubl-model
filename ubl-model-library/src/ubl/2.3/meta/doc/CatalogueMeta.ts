import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CatalogueLineType } from '../cac/CatalogueLineMeta'
import { CatalogueReferenceType } from '../cac/CatalogueReferenceMeta'
import { CodeType } from '../cbc/CodeMeta'
import { ContractType } from '../cac/ContractMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { TradingTermsType } from '../cac/TradingTermsMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CatalogueFieldMetaUBLVersionID = new FieldMeta<CatalogueField>(
  CatalogueField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const CatalogueFieldMetaCustomizationID = new FieldMeta<CatalogueField>(
  CatalogueField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const CatalogueFieldMetaProfileID = new FieldMeta<CatalogueField>(
  CatalogueField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const CatalogueFieldMetaProfileExecutionID = new FieldMeta<CatalogueField>(
  CatalogueField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const CatalogueFieldMetaID = new FieldMeta<CatalogueField>(
  CatalogueField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueFieldMetaUUID = new FieldMeta<CatalogueField>(
  CatalogueField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueFieldMetaActionCode = new FieldMeta<CatalogueField>(
  CatalogueField.ActionCode,
  'ActionCode',
  'Action Code',
  CodeType.name,
  'A code signifying whether the transaction is a replacement or an update.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Replace , Update .'
)

export const CatalogueFieldMetaName = new FieldMeta<CatalogueField>(
  CatalogueField.Name,
  'Name',
  'Name',
  TextType.name,
  'Text, assigned by the sender, that identifies this document to business users.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'winter 2005 collection'
)

export const CatalogueFieldMetaIssueDate = new FieldMeta<CatalogueField>(
  CatalogueField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueFieldMetaIssueTime = new FieldMeta<CatalogueField>(
  CatalogueField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueFieldMetaRevisionDate = new FieldMeta<CatalogueField>(
  CatalogueField.RevisionDate,
  'RevisionDate',
  'Revision Date',
  DateType.name,
  'The date, assigned by the seller party, on which the information in the Catalogue was last revised.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueFieldMetaRevisionTime = new FieldMeta<CatalogueField>(
  CatalogueField.RevisionTime,
  'RevisionTime',
  'Revision Time',
  TimeType.name,
  'The time, assigned by the Seller party, at which the information in the Catalogue was last revised.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueFieldMetaNote = new FieldMeta<CatalogueField>(
  CatalogueField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueFieldMetaDescription = new FieldMeta<CatalogueField>(
  CatalogueField.Description,
  'Description',
  'Description',
  TextType.name,
  'Textual description of the document instance.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'computer accessories for laptops'
)

export const CatalogueFieldMetaVersionID = new FieldMeta<CatalogueField>(
  CatalogueField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'An identifier for the current version of the Catalogue.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.1'
)

export const CatalogueFieldMetaPreviousVersionID = new FieldMeta<CatalogueField>(
  CatalogueField.PreviousVersionID,
  'PreviousVersionID',
  'Previous Version',
  IdentifierType.name,
  'An identifier for the previous version of the Catalogue that is superseded by this version.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.0'
)

export const CatalogueFieldMetaLineCountNumeric = new FieldMeta<CatalogueField>(
  CatalogueField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  NumericType.name,
  'The number of Catalogue Lines in the document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueFieldMetaValidityPeriod = new FieldMeta<CatalogueField>(
  CatalogueField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'A period, assigned by the seller, during which the information in the Catalogue is effective. This may be given as start and end dates or as a duration.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueFieldMetaReferencedContract = new FieldMeta<CatalogueField>(
  CatalogueField.ReferencedContract,
  'ReferencedContract',
  'Referenced Contract',
  ContractType.name,
  'A contract or framework agreement with which this Catalogue is associated.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueFieldMetaSourceCatalogueReference = new FieldMeta<CatalogueField>(
  CatalogueField.SourceCatalogueReference,
  'SourceCatalogueReference',
  'Source Catalogue Reference',
  CatalogueReferenceType.name,
  'A reference to the source catalogue.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueFieldMetaDocumentReference = new FieldMeta<CatalogueField>(
  CatalogueField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to another document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueFieldMetaSignature = new FieldMeta<CatalogueField>(
  CatalogueField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueFieldMetaProviderParty = new FieldMeta<CatalogueField>(
  CatalogueField.ProviderParty,
  'ProviderParty',
  'Provider Party',
  PartyType.name,
  'The party providing the Catalogue.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueFieldMetaReceiverParty = new FieldMeta<CatalogueField>(
  CatalogueField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving the Catalogue.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueFieldMetaSellerSupplierParty = new FieldMeta<CatalogueField>(
  CatalogueField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueFieldMetaContractorCustomerParty = new FieldMeta<CatalogueField>(
  CatalogueField.ContractorCustomerParty,
  'ContractorCustomerParty',
  'Contractor Customer Party',
  CustomerPartyType.name,
  'The customer party responsible for the contracts with which the Catalogue is associated.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueFieldMetaTradingTerms = new FieldMeta<CatalogueField>(
  CatalogueField.TradingTerms,
  'TradingTerms',
  'Trading Terms',
  TradingTermsType.name,
  'The trading terms associated with this Catalogue.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueFieldMetaCatalogueLine = new FieldMeta<CatalogueField>(
  CatalogueField.CatalogueLine,
  'CatalogueLine',
  'Catalogue Line',
  CatalogueLineType.name,
  'A line in a Catalogue describing an item of sale.',
  FieldCardinality.Multi,
  TypeModule.cac,
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

export const CatalogueType: Type<CatalogueField> = {
  name: 'Catalogue',
  label: 'Catalogue',
  module: TypeModule.doc,
  definition: 'A document that describes items, prices, and price validity.',
  fields: CatalogueFieldMap,
}
