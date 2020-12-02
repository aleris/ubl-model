import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaUBLVersionID = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const CatalogueDeletionFieldMetaCustomizationID = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const CatalogueDeletionFieldMetaProfileID = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const CatalogueDeletionFieldMetaProfileExecutionID = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const CatalogueDeletionFieldMetaID = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaUUID = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaName = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.Name,
  'Name',
  'Name',
  'Text',
  'Text, assigned by the sender, that identifies this document to business users.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaIssueDate = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaIssueTime = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaEffectiveDate = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.EffectiveDate,
  'EffectiveDate',
  'Effective Date',
  'Date',
  'The effective date, assigned by the seller, on which the Catalogue expires.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaEffectiveTime = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.EffectiveTime,
  'EffectiveTime',
  'Effective Time',
  'Time',
  'The effective time, assigned by the seller, at which the Catalogue expires.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaNote = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaVersionID = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'Identifies the current version of the Catalogue.',
  '0..1',
  'cbc',
  undefined,
  '1.1'
)

export const CatalogueDeletionFieldMetaDescription = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.Description,
  'Description',
  'Description',
  'Text',
  'Textual description of the document instance.',
  '0..n',
  'cbc',
  undefined,
  'stock no longer provided'
)

export const CatalogueDeletionFieldMetaValidityPeriod = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  'Period',
  'The period during which the Deletion of the catalogue becomes effective. This may be given as start (after date) and end dates (before date).',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaDeletedCatalogueReference = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.DeletedCatalogueReference,
  'DeletedCatalogueReference',
  'Deleted Catalogue Reference',
  'CatalogueReference',
  'A reference to the Catalogue being deleted.',
  '1',
  'cac',
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaReferencedContract = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.ReferencedContract,
  'ReferencedContract',
  'Referenced Contract',
  'Contract',
  'A contract or framework agreement with which the Catalogue was associated.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaSignature = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaReceiverParty = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  'Party',
  'The party receiving the Catalogue Deletion.',
  '1',
  'cac',
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaProviderParty = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.ProviderParty,
  'ProviderParty',
  'Provider Party',
  'Party',
  'The party sending the Catalogue Deletion.',
  '1',
  'cac',
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaSellerSupplierParty = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  'SupplierParty',
  'The seller.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CatalogueDeletionFieldMetaContractorCustomerParty = new FieldMeta<CatalogueDeletionField>(
  CatalogueDeletionField.ContractorCustomerParty,
  'ContractorCustomerParty',
  'Contractor Customer Party',
  'CustomerParty',
  'The customer party responsible for the contracts with which the Catalogue was associated.',
  '0..1',
  'cac',
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
