import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentDistributionType } from '../cac/DocumentDistributionMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { EndorsementType } from '../cac/EndorsementMeta'
import { GoodsItemPassportCounterfoilType } from '../cac/GoodsItemPassportCounterfoilMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { ShipmentType } from '../cac/ShipmentMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum GoodsItemPassportField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  Note = 'Note',
  VersionID = 'VersionID',
  ExportReasonCode = 'ExportReasonCode',
  ExportReason = 'ExportReason',
  ValidityPeriod = 'ValidityPeriod',
  IssuerParty = 'IssuerParty',
  HolderParty = 'HolderParty',
  RepresentativeParty = 'RepresentativeParty',
  ExportingCustomsParty = 'ExportingCustomsParty',
  ImportingCustomsParty = 'ImportingCustomsParty',
  ImportingGuarantorParty = 'ImportingGuarantorParty',
  ExportingGuarantorParty = 'ExportingGuarantorParty',
  Shipment = 'Shipment',
  GoodsItemPassportCounterfoil = 'GoodsItemPassportCounterfoil',
  IssuerEndorsement = 'IssuerEndorsement',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  DocumentDistribution = 'DocumentDistribution',
  Signature = 'Signature'
}

export const GoodsItemPassportFieldMetaUBLExtensions = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaUBLVersionID = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.3'
)

export const GoodsItemPassportFieldMetaCustomizationID = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaProfileID = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaProfileExecutionID = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const GoodsItemPassportFieldMetaID = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaUUID = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaIssueDate = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaIssueTime = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaNote = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaVersionID = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'Identifies the current version of this request for proof',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaExportReasonCode = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ExportReasonCode,
  'ExportReasonCode',
  'Export Reason',
  CodeType.name,
  'The reason for importing the goods, expressed as a code',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaExportReason = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ExportReason,
  'ExportReason',
  'Export Reason',
  TextType.name,
  'The reason for importing the goods, expressed as text in one or more languages',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaValidityPeriod = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'The period within which this Goods Item Passport is valid',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaIssuerParty = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  PartyType.name,
  'The party issuing this Goods Item Passport',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaHolderParty = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.HolderParty,
  'HolderParty',
  'Holder Party',
  PartyType.name,
  'The holder of the Goods Item Passport, often the temporary exporter of the goods',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaRepresentativeParty = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.RepresentativeParty,
  'RepresentativeParty',
  'Representative Party',
  PartyType.name,
  'The party accompanying the goods while temporarily exported',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaExportingCustomsParty = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ExportingCustomsParty,
  'ExportingCustomsParty',
  'Exporting Customs Party',
  PartyType.name,
  'The competent Customs party of the exporting country',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaImportingCustomsParty = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ImportingCustomsParty,
  'ImportingCustomsParty',
  'Importing Customs Party',
  PartyType.name,
  'The competent Customs party of the importing country',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaImportingGuarantorParty = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ImportingGuarantorParty,
  'ImportingGuarantorParty',
  'Importing Guarantor Party',
  PartyType.name,
  'A party (often a chamber of commerce) which provides a guarantee goods while temporarily imported',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaExportingGuarantorParty = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ExportingGuarantorParty,
  'ExportingGuarantorParty',
  'Exporting Guarantor Party',
  PartyType.name,
  'A party (often a chamber of commerce) which provides a guarantee goods while temporarily exported',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaShipment = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.Shipment,
  'Shipment',
  'Shipment',
  ShipmentType.name,
  'The reference to the shipment of the goods included under this Goods Item Passport',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaGoodsItemPassportCounterfoil = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.GoodsItemPassportCounterfoil,
  'GoodsItemPassportCounterfoil',
  'Goods Item Passport Counterfoil',
  GoodsItemPassportCounterfoilType.name,
  'One or more counterfoils associated with this Goods Item Passport',
  FieldCardinality.Multi,
  TypeModule.cac,
  'ATA Carnet counterfoil',
  undefined
)

export const GoodsItemPassportFieldMetaIssuerEndorsement = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.IssuerEndorsement,
  'IssuerEndorsement',
  'Issuer Endorsement',
  EndorsementType.name,
  'A reference to the issuer\'s endorsement of this Goods Item Passport',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaAdditionalDocumentReference = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'One or more references to additional documents related to this Goods Item Passport',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaDocumentDistribution = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.DocumentDistribution,
  'DocumentDistribution',
  'Document Distribution',
  DocumentDistributionType.name,
  'One or more parties to whom this document is distributed',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaSignature = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class GoodsItemPassportFieldMeta {
  public static readonly UBLExtensions = GoodsItemPassportFieldMetaUBLExtensions
  public static readonly UBLVersionID = GoodsItemPassportFieldMetaUBLVersionID
  public static readonly CustomizationID = GoodsItemPassportFieldMetaCustomizationID
  public static readonly ProfileID = GoodsItemPassportFieldMetaProfileID
  public static readonly ProfileExecutionID = GoodsItemPassportFieldMetaProfileExecutionID
  public static readonly ID = GoodsItemPassportFieldMetaID
  public static readonly UUID = GoodsItemPassportFieldMetaUUID
  public static readonly IssueDate = GoodsItemPassportFieldMetaIssueDate
  public static readonly IssueTime = GoodsItemPassportFieldMetaIssueTime
  public static readonly Note = GoodsItemPassportFieldMetaNote
  public static readonly VersionID = GoodsItemPassportFieldMetaVersionID
  public static readonly ExportReasonCode = GoodsItemPassportFieldMetaExportReasonCode
  public static readonly ExportReason = GoodsItemPassportFieldMetaExportReason
  public static readonly ValidityPeriod = GoodsItemPassportFieldMetaValidityPeriod
  public static readonly IssuerParty = GoodsItemPassportFieldMetaIssuerParty
  public static readonly HolderParty = GoodsItemPassportFieldMetaHolderParty
  public static readonly RepresentativeParty = GoodsItemPassportFieldMetaRepresentativeParty
  public static readonly ExportingCustomsParty = GoodsItemPassportFieldMetaExportingCustomsParty
  public static readonly ImportingCustomsParty = GoodsItemPassportFieldMetaImportingCustomsParty
  public static readonly ImportingGuarantorParty = GoodsItemPassportFieldMetaImportingGuarantorParty
  public static readonly ExportingGuarantorParty = GoodsItemPassportFieldMetaExportingGuarantorParty
  public static readonly Shipment = GoodsItemPassportFieldMetaShipment
  public static readonly GoodsItemPassportCounterfoil = GoodsItemPassportFieldMetaGoodsItemPassportCounterfoil
  public static readonly IssuerEndorsement = GoodsItemPassportFieldMetaIssuerEndorsement
  public static readonly AdditionalDocumentReference = GoodsItemPassportFieldMetaAdditionalDocumentReference
  public static readonly DocumentDistribution = GoodsItemPassportFieldMetaDocumentDistribution
  public static readonly Signature = GoodsItemPassportFieldMetaSignature
}

export const GoodsItemPassportFieldMap = new Map([
  [GoodsItemPassportField.UBLExtensions, GoodsItemPassportFieldMetaUBLExtensions],
  [GoodsItemPassportField.UBLVersionID, GoodsItemPassportFieldMetaUBLVersionID],
  [GoodsItemPassportField.CustomizationID, GoodsItemPassportFieldMetaCustomizationID],
  [GoodsItemPassportField.ProfileID, GoodsItemPassportFieldMetaProfileID],
  [GoodsItemPassportField.ProfileExecutionID, GoodsItemPassportFieldMetaProfileExecutionID],
  [GoodsItemPassportField.ID, GoodsItemPassportFieldMetaID],
  [GoodsItemPassportField.UUID, GoodsItemPassportFieldMetaUUID],
  [GoodsItemPassportField.IssueDate, GoodsItemPassportFieldMetaIssueDate],
  [GoodsItemPassportField.IssueTime, GoodsItemPassportFieldMetaIssueTime],
  [GoodsItemPassportField.Note, GoodsItemPassportFieldMetaNote],
  [GoodsItemPassportField.VersionID, GoodsItemPassportFieldMetaVersionID],
  [GoodsItemPassportField.ExportReasonCode, GoodsItemPassportFieldMetaExportReasonCode],
  [GoodsItemPassportField.ExportReason, GoodsItemPassportFieldMetaExportReason],
  [GoodsItemPassportField.ValidityPeriod, GoodsItemPassportFieldMetaValidityPeriod],
  [GoodsItemPassportField.IssuerParty, GoodsItemPassportFieldMetaIssuerParty],
  [GoodsItemPassportField.HolderParty, GoodsItemPassportFieldMetaHolderParty],
  [GoodsItemPassportField.RepresentativeParty, GoodsItemPassportFieldMetaRepresentativeParty],
  [GoodsItemPassportField.ExportingCustomsParty, GoodsItemPassportFieldMetaExportingCustomsParty],
  [GoodsItemPassportField.ImportingCustomsParty, GoodsItemPassportFieldMetaImportingCustomsParty],
  [GoodsItemPassportField.ImportingGuarantorParty, GoodsItemPassportFieldMetaImportingGuarantorParty],
  [GoodsItemPassportField.ExportingGuarantorParty, GoodsItemPassportFieldMetaExportingGuarantorParty],
  [GoodsItemPassportField.Shipment, GoodsItemPassportFieldMetaShipment],
  [GoodsItemPassportField.GoodsItemPassportCounterfoil, GoodsItemPassportFieldMetaGoodsItemPassportCounterfoil],
  [GoodsItemPassportField.IssuerEndorsement, GoodsItemPassportFieldMetaIssuerEndorsement],
  [GoodsItemPassportField.AdditionalDocumentReference, GoodsItemPassportFieldMetaAdditionalDocumentReference],
  [GoodsItemPassportField.DocumentDistribution, GoodsItemPassportFieldMetaDocumentDistribution],
  [GoodsItemPassportField.Signature, GoodsItemPassportFieldMetaSignature]
])

export const GoodsItemPassportType: Type<GoodsItemPassportField> = {
  name: 'GoodsItemPassport',
  label: 'Goods Item Passport',
  module: TypeModule.doc,
  definition: 'A document providing a temporary export license, also knowned as an ATA Carnet',
  fields: GoodsItemPassportFieldMap,
}
