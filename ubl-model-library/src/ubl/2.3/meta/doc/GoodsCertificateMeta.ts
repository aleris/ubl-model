import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from '../cac/AddressMeta'
import { AttestationType } from '../cac/AttestationMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { GoodsProcessingType } from '../cac/GoodsProcessingMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { ShipmentType } from '../cac/ShipmentMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaUBLVersionID = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.3'
)

export const GoodsCertificateFieldMetaCustomizationID = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaProfileID = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaProfileExecutionID = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const GoodsCertificateFieldMetaID = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaUUID = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaIssueDate = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaIssueTime = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaTypeCode = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.TypeCode,
  'TypeCode',
  'Type Code',
  CodeType.name,
  'A code specifying the type of goods certificate',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaDescription = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.Description,
  'Description',
  'Description',
  TextType.name,
  'Textual description of this goods certificate',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaNote = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaVersionID = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'Identifies the current version of this goods certificate',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaValidityPeriod = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'The period of time for which this goods certificate is considered valid',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaApplicableTerritoryAddress = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.ApplicableTerritoryAddress,
  'ApplicableTerritoryAddress',
  'Applicable Territory Address',
  AddressType.name,
  'A geographic area where this goods certificate is valid',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaExporterParty = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.ExporterParty,
  'ExporterParty',
  'Exporter Party',
  PartyType.name,
  'The party who exports the goods or has similar right of disposal over them at the time of export',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Exporter (WCO ID 41 and 42)',
  undefined
)

export const GoodsCertificateFieldMetaImporterParty = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.ImporterParty,
  'ImporterParty',
  'Importer Party',
  PartyType.name,
  'The party who imports the goods, or on whose behalf the goods are being import',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Importer (WCO ID 39 and 40)',
  undefined
)

export const GoodsCertificateFieldMetaWarehouseParty = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.WarehouseParty,
  'WarehouseParty',
  'Warehouse Party',
  PartyType.name,
  'The party who is responsible for storing the goods',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaConsignorParty = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.ConsignorParty,
  'ConsignorParty',
  'Consignor Party',
  PartyType.name,
  'The party, usually the seller, who is responsible for the consignment',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaConsigneeParty = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.ConsigneeParty,
  'ConsigneeParty',
  'Consignee Party',
  PartyType.name,
  'The party, usually the buyer, who will receive the goods',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaFreightForwarderParty = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.FreightForwarderParty,
  'FreightForwarderParty',
  'Freight Forwarder Party',
  PartyType.name,
  'The freight forwarder or the forwarding agent responsible for the transportation of the goods',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaIssuerParty = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  PartyType.name,
  'The party issuing this goods certificate',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaLegalAuthorityParty = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.LegalAuthorityParty,
  'LegalAuthorityParty',
  'Legal Authority Party',
  PartyType.name,
  'The legal authority, when different from the issuer, who sanctions this goods certificate',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaShipment = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.Shipment,
  'Shipment',
  'Shipment',
  ShipmentType.name,
  'The shipment for which this goods certificate is issued',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaAttestation = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.Attestation,
  'Attestation',
  'Attestation',
  AttestationType.name,
  'Any attestations made for the goods related to this goods certificate',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaGoodsProcessing = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.GoodsProcessing,
  'GoodsProcessing',
  'Goods Processing',
  GoodsProcessingType.name,
  'Any processing that the goods have been undergoing',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaOriginalDocumentReference = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.OriginalDocumentReference,
  'OriginalDocumentReference',
  'Original Document Reference',
  DocumentReferenceType.name,
  'A reference to the original version of the goods certificate',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaPreviousDocumentReference = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.PreviousDocumentReference,
  'PreviousDocumentReference',
  'Previous Document Reference',
  DocumentReferenceType.name,
  'A reference to the previous version of the goods certificate',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaAdditionalDocumentReference = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this goods certificate',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsCertificateFieldMetaSignature = new FieldMeta<GoodsCertificateField>(
  GoodsCertificateField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const GoodsCertificateType: Type<GoodsCertificateField> = {
  name: 'GoodsCertificate',
  label: 'Goods Certificate',
  module: TypeModule.doc,
  definition: 'A document that describes a certificate of goods for importation and exportation',
  fields: GoodsCertificateFieldMap,
}
