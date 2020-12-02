import { FieldMeta } from '../FieldMeta'

export enum GoodsCertificateField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  TypeCode = 'TypeCode',
  Description = 'Description',
  Note = 'Note',
  VersionID = 'VersionID',
  ValidityPeriod = 'ValidityPeriod',
  ApplicableTerritoryAddress = 'ApplicableTerritoryAddress',
  ExporterParty = 'ExporterParty',
  ImporterParty = 'ImporterParty',
  WarehouseParty = 'WarehouseParty',
  ConsignorParty = 'ConsignorParty',
  ConsigneeParty = 'ConsigneeParty',
  FreightForwarderParty = 'FreightForwarderParty',
  IssuerParty = 'IssuerParty',
  LegalAuthorityParty = 'LegalAuthorityParty',
  Shipment = 'Shipment',
  Attestation = 'Attestation',
  GoodsProcessing = 'GoodsProcessing',
  OriginalDocumentReference = 'OriginalDocumentReference',
  PreviousDocumentReference = 'PreviousDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature'
}

export const GoodsCertificateFieldMetaUBLExtensions = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaUBLVersionID = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.3'
)

export const GoodsCertificateFieldMetaCustomizationID = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaProfileID = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaProfileExecutionID = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const GoodsCertificateFieldMetaID = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaUUID = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaIssueDate = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaIssueTime = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaTypeCode = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.TypeCode,
  'TypeCode',
  'Type Code',
  'Code',
  'A code specifying the type of goods certificate',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaDescription = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.Description,
  'Description',
  'Description',
  'Text',
  'Textual description of this goods certificate',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaNote = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaVersionID = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'Identifies the current version of this goods certificate',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaValidityPeriod = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  'Period',
  'The period of time for which this goods certificate is considered valid',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaApplicableTerritoryAddress = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.ApplicableTerritoryAddress,
  'ApplicableTerritoryAddress',
  'Applicable Territory Address',
  'Address',
  'A geographic area where this goods certificate is valid',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaExporterParty = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.ExporterParty,
  'ExporterParty',
  'Exporter Party',
  'Party',
  'The party who exports the goods or has similar right of disposal over them at the time of export',
  '0..1',
  'cac',
  'Exporter (WCO ID 41 and 42)',
  undefined
)

export const GoodsCertificateFieldMetaImporterParty = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.ImporterParty,
  'ImporterParty',
  'Importer Party',
  'Party',
  'The party who imports the goods, or on whose behalf the goods are being import',
  '0..1',
  'cac',
  'Importer (WCO ID 39 and 40)',
  undefined
)

export const GoodsCertificateFieldMetaWarehouseParty = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.WarehouseParty,
  'WarehouseParty',
  'Warehouse Party',
  'Party',
  'The party who is responsible for storing the goods',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaConsignorParty = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.ConsignorParty,
  'ConsignorParty',
  'Consignor Party',
  'Party',
  'The party, usually the seller, who is responsible for the consignment',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaConsigneeParty = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.ConsigneeParty,
  'ConsigneeParty',
  'Consignee Party',
  'Party',
  'The party, usually the buyer, who will receive the goods',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaFreightForwarderParty = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.FreightForwarderParty,
  'FreightForwarderParty',
  'Freight Forwarder Party',
  'Party',
  'The freight forwarder or the forwarding agent responsible for the transportation of the goods',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaIssuerParty = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  'Party',
  'The party issuing this goods certificate',
  '1',
  'cac',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaLegalAuthorityParty = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.LegalAuthorityParty,
  'LegalAuthorityParty',
  'Legal Authority Party',
  'Party',
  'The legal authority, when different from the issuer, who sanctions this goods certificate',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaShipment = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.Shipment,
  'Shipment',
  'Shipment',
  'Shipment',
  'The shipment for which this goods certificate is issued',
  '1',
  'cac',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaAttestation = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.Attestation,
  'Attestation',
  'Attestation',
  'Attestation',
  'Any attestations made for the goods related to this goods certificate',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaGoodsProcessing = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.GoodsProcessing,
  'GoodsProcessing',
  'Goods Processing',
  'GoodsProcessing',
  'Any processing that the goods have been undergoing',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaOriginalDocumentReference = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.OriginalDocumentReference,
  'OriginalDocumentReference',
  'Original Document Reference',
  'DocumentReference',
  'A reference to the original version of the goods certificate',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaPreviousDocumentReference = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.PreviousDocumentReference,
  'PreviousDocumentReference',
  'Previous Document Reference',
  'DocumentReference',
  'A reference to the previous version of the goods certificate',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaAdditionalDocumentReference = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this goods certificate',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaSignature = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class GoodsCertificateFieldMeta {
  public static readonly UBLExtensions = GoodsCertificateFieldMetaUBLExtensions
  public static readonly UBLVersionID = GoodsCertificateFieldMetaUBLVersionID
  public static readonly CustomizationID = GoodsCertificateFieldMetaCustomizationID
  public static readonly ProfileID = GoodsCertificateFieldMetaProfileID
  public static readonly ProfileExecutionID = GoodsCertificateFieldMetaProfileExecutionID
  public static readonly ID = GoodsCertificateFieldMetaID
  public static readonly UUID = GoodsCertificateFieldMetaUUID
  public static readonly IssueDate = GoodsCertificateFieldMetaIssueDate
  public static readonly IssueTime = GoodsCertificateFieldMetaIssueTime
  public static readonly TypeCode = GoodsCertificateFieldMetaTypeCode
  public static readonly Description = GoodsCertificateFieldMetaDescription
  public static readonly Note = GoodsCertificateFieldMetaNote
  public static readonly VersionID = GoodsCertificateFieldMetaVersionID
  public static readonly ValidityPeriod = GoodsCertificateFieldMetaValidityPeriod
  public static readonly ApplicableTerritoryAddress = GoodsCertificateFieldMetaApplicableTerritoryAddress
  public static readonly ExporterParty = GoodsCertificateFieldMetaExporterParty
  public static readonly ImporterParty = GoodsCertificateFieldMetaImporterParty
  public static readonly WarehouseParty = GoodsCertificateFieldMetaWarehouseParty
  public static readonly ConsignorParty = GoodsCertificateFieldMetaConsignorParty
  public static readonly ConsigneeParty = GoodsCertificateFieldMetaConsigneeParty
  public static readonly FreightForwarderParty = GoodsCertificateFieldMetaFreightForwarderParty
  public static readonly IssuerParty = GoodsCertificateFieldMetaIssuerParty
  public static readonly LegalAuthorityParty = GoodsCertificateFieldMetaLegalAuthorityParty
  public static readonly Shipment = GoodsCertificateFieldMetaShipment
  public static readonly Attestation = GoodsCertificateFieldMetaAttestation
  public static readonly GoodsProcessing = GoodsCertificateFieldMetaGoodsProcessing
  public static readonly OriginalDocumentReference = GoodsCertificateFieldMetaOriginalDocumentReference
  public static readonly PreviousDocumentReference = GoodsCertificateFieldMetaPreviousDocumentReference
  public static readonly AdditionalDocumentReference = GoodsCertificateFieldMetaAdditionalDocumentReference
  public static readonly Signature = GoodsCertificateFieldMetaSignature
}

export const GoodsCertificateFieldMap = new Map([
  [GoodsCertificateField.UBLExtensions, GoodsCertificateFieldMetaUBLExtensions],
  [GoodsCertificateField.UBLVersionID, GoodsCertificateFieldMetaUBLVersionID],
  [GoodsCertificateField.CustomizationID, GoodsCertificateFieldMetaCustomizationID],
  [GoodsCertificateField.ProfileID, GoodsCertificateFieldMetaProfileID],
  [GoodsCertificateField.ProfileExecutionID, GoodsCertificateFieldMetaProfileExecutionID],
  [GoodsCertificateField.ID, GoodsCertificateFieldMetaID],
  [GoodsCertificateField.UUID, GoodsCertificateFieldMetaUUID],
  [GoodsCertificateField.IssueDate, GoodsCertificateFieldMetaIssueDate],
  [GoodsCertificateField.IssueTime, GoodsCertificateFieldMetaIssueTime],
  [GoodsCertificateField.TypeCode, GoodsCertificateFieldMetaTypeCode],
  [GoodsCertificateField.Description, GoodsCertificateFieldMetaDescription],
  [GoodsCertificateField.Note, GoodsCertificateFieldMetaNote],
  [GoodsCertificateField.VersionID, GoodsCertificateFieldMetaVersionID],
  [GoodsCertificateField.ValidityPeriod, GoodsCertificateFieldMetaValidityPeriod],
  [GoodsCertificateField.ApplicableTerritoryAddress, GoodsCertificateFieldMetaApplicableTerritoryAddress],
  [GoodsCertificateField.ExporterParty, GoodsCertificateFieldMetaExporterParty],
  [GoodsCertificateField.ImporterParty, GoodsCertificateFieldMetaImporterParty],
  [GoodsCertificateField.WarehouseParty, GoodsCertificateFieldMetaWarehouseParty],
  [GoodsCertificateField.ConsignorParty, GoodsCertificateFieldMetaConsignorParty],
  [GoodsCertificateField.ConsigneeParty, GoodsCertificateFieldMetaConsigneeParty],
  [GoodsCertificateField.FreightForwarderParty, GoodsCertificateFieldMetaFreightForwarderParty],
  [GoodsCertificateField.IssuerParty, GoodsCertificateFieldMetaIssuerParty],
  [GoodsCertificateField.LegalAuthorityParty, GoodsCertificateFieldMetaLegalAuthorityParty],
  [GoodsCertificateField.Shipment, GoodsCertificateFieldMetaShipment],
  [GoodsCertificateField.Attestation, GoodsCertificateFieldMetaAttestation],
  [GoodsCertificateField.GoodsProcessing, GoodsCertificateFieldMetaGoodsProcessing],
  [GoodsCertificateField.OriginalDocumentReference, GoodsCertificateFieldMetaOriginalDocumentReference],
  [GoodsCertificateField.PreviousDocumentReference, GoodsCertificateFieldMetaPreviousDocumentReference],
  [GoodsCertificateField.AdditionalDocumentReference, GoodsCertificateFieldMetaAdditionalDocumentReference],
  [GoodsCertificateField.Signature, GoodsCertificateFieldMetaSignature]
])
