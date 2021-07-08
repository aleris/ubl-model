import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CatalogueReferenceType } from '../cac/CatalogueReferenceMeta'
import { ContractType } from '../cac/ContractMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum CatalogueDeletionField {
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
  EffectiveDate = 'EffectiveDate',
  EffectiveTime = 'EffectiveTime',
  Note = 'Note',
  VersionID = 'VersionID',
  Description = 'Description',
  ValidityPeriod = 'ValidityPeriod',
  DeletedCatalogueReference = 'DeletedCatalogueReference',
  ReferencedContract = 'ReferencedContract',
  Signature = 'Signature',
  ReceiverParty = 'ReceiverParty',
  ProviderParty = 'ProviderParty',
  SellerSupplierParty = 'SellerSupplierParty',
  ContractorCustomerParty = 'ContractorCustomerParty'
}

export const CatalogueDeletionFieldMetaUBLExtensions = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaUBLVersionID = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const CatalogueDeletionFieldMetaCustomizationID = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const CatalogueDeletionFieldMetaProfileID = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const CatalogueDeletionFieldMetaProfileExecutionID = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const CatalogueDeletionFieldMetaID = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaUUID = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaName = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.Name,
  'Name',
  'Name',
  TextType.name,
  'Text, assigned by the sender, that identifies this document to business users.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaIssueDate = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaIssueTime = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaEffectiveDate = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.EffectiveDate,
  'EffectiveDate',
  'Effective Date',
  DateType.name,
  'The effective date, assigned by the seller, on which the Catalogue expires.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaEffectiveTime = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.EffectiveTime,
  'EffectiveTime',
  'Effective Time',
  TimeType.name,
  'The effective time, assigned by the seller, at which the Catalogue expires.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaNote = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaVersionID = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'Identifies the current version of the Catalogue.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.1'
)

export const CatalogueDeletionFieldMetaDescription = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.Description,
  'Description',
  'Description',
  TextType.name,
  'Textual description of the document instance.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'stock no longer provided'
)

export const CatalogueDeletionFieldMetaValidityPeriod = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'The period during which the Deletion of the catalogue becomes effective. This may be given as start (after date) and end dates (before date).',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaDeletedCatalogueReference = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.DeletedCatalogueReference,
  'DeletedCatalogueReference',
  'Deleted Catalogue Reference',
  CatalogueReferenceType.name,
  'A reference to the Catalogue being deleted.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaReferencedContract = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.ReferencedContract,
  'ReferencedContract',
  'Referenced Contract',
  ContractType.name,
  'A contract or framework agreement with which the Catalogue was associated.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaSignature = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaReceiverParty = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving the Catalogue Deletion.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaProviderParty = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.ProviderParty,
  'ProviderParty',
  'Provider Party',
  PartyType.name,
  'The party sending the Catalogue Deletion.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaSellerSupplierParty = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaContractorCustomerParty = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.ContractorCustomerParty,
  'ContractorCustomerParty',
  'Contractor Customer Party',
  CustomerPartyType.name,
  'The customer party responsible for the contracts with which the Catalogue was associated.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class CatalogueDeletionFieldMeta {
  public static readonly UBLExtensions = CatalogueDeletionFieldMetaUBLExtensions
  public static readonly UBLVersionID = CatalogueDeletionFieldMetaUBLVersionID
  public static readonly CustomizationID = CatalogueDeletionFieldMetaCustomizationID
  public static readonly ProfileID = CatalogueDeletionFieldMetaProfileID
  public static readonly ProfileExecutionID = CatalogueDeletionFieldMetaProfileExecutionID
  public static readonly ID = CatalogueDeletionFieldMetaID
  public static readonly UUID = CatalogueDeletionFieldMetaUUID
  public static readonly Name = CatalogueDeletionFieldMetaName
  public static readonly IssueDate = CatalogueDeletionFieldMetaIssueDate
  public static readonly IssueTime = CatalogueDeletionFieldMetaIssueTime
  public static readonly EffectiveDate = CatalogueDeletionFieldMetaEffectiveDate
  public static readonly EffectiveTime = CatalogueDeletionFieldMetaEffectiveTime
  public static readonly Note = CatalogueDeletionFieldMetaNote
  public static readonly VersionID = CatalogueDeletionFieldMetaVersionID
  public static readonly Description = CatalogueDeletionFieldMetaDescription
  public static readonly ValidityPeriod = CatalogueDeletionFieldMetaValidityPeriod
  public static readonly DeletedCatalogueReference = CatalogueDeletionFieldMetaDeletedCatalogueReference
  public static readonly ReferencedContract = CatalogueDeletionFieldMetaReferencedContract
  public static readonly Signature = CatalogueDeletionFieldMetaSignature
  public static readonly ReceiverParty = CatalogueDeletionFieldMetaReceiverParty
  public static readonly ProviderParty = CatalogueDeletionFieldMetaProviderParty
  public static readonly SellerSupplierParty = CatalogueDeletionFieldMetaSellerSupplierParty
  public static readonly ContractorCustomerParty = CatalogueDeletionFieldMetaContractorCustomerParty
}

export const CatalogueDeletionFieldMap = new Map([
  [CatalogueDeletionField.UBLExtensions, CatalogueDeletionFieldMetaUBLExtensions],
  [CatalogueDeletionField.UBLVersionID, CatalogueDeletionFieldMetaUBLVersionID],
  [CatalogueDeletionField.CustomizationID, CatalogueDeletionFieldMetaCustomizationID],
  [CatalogueDeletionField.ProfileID, CatalogueDeletionFieldMetaProfileID],
  [CatalogueDeletionField.ProfileExecutionID, CatalogueDeletionFieldMetaProfileExecutionID],
  [CatalogueDeletionField.ID, CatalogueDeletionFieldMetaID],
  [CatalogueDeletionField.UUID, CatalogueDeletionFieldMetaUUID],
  [CatalogueDeletionField.Name, CatalogueDeletionFieldMetaName],
  [CatalogueDeletionField.IssueDate, CatalogueDeletionFieldMetaIssueDate],
  [CatalogueDeletionField.IssueTime, CatalogueDeletionFieldMetaIssueTime],
  [CatalogueDeletionField.EffectiveDate, CatalogueDeletionFieldMetaEffectiveDate],
  [CatalogueDeletionField.EffectiveTime, CatalogueDeletionFieldMetaEffectiveTime],
  [CatalogueDeletionField.Note, CatalogueDeletionFieldMetaNote],
  [CatalogueDeletionField.VersionID, CatalogueDeletionFieldMetaVersionID],
  [CatalogueDeletionField.Description, CatalogueDeletionFieldMetaDescription],
  [CatalogueDeletionField.ValidityPeriod, CatalogueDeletionFieldMetaValidityPeriod],
  [CatalogueDeletionField.DeletedCatalogueReference, CatalogueDeletionFieldMetaDeletedCatalogueReference],
  [CatalogueDeletionField.ReferencedContract, CatalogueDeletionFieldMetaReferencedContract],
  [CatalogueDeletionField.Signature, CatalogueDeletionFieldMetaSignature],
  [CatalogueDeletionField.ReceiverParty, CatalogueDeletionFieldMetaReceiverParty],
  [CatalogueDeletionField.ProviderParty, CatalogueDeletionFieldMetaProviderParty],
  [CatalogueDeletionField.SellerSupplierParty, CatalogueDeletionFieldMetaSellerSupplierParty],
  [CatalogueDeletionField.ContractorCustomerParty, CatalogueDeletionFieldMetaContractorCustomerParty]
])

export const CatalogueDeletionType: Type<CatalogueDeletionField> = {
  name: 'CatalogueDeletion',
  label: 'Catalogue Deletion',
  module: TypeModule.doc,
  definition: 'A document used to cancel an entire Catalogue.',
  fields: CatalogueDeletionFieldMap,
}
