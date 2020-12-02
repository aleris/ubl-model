import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaUBLVersionID = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.3'
)

export const GoodsItemPassportFieldMetaCustomizationID = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaProfileID = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaProfileExecutionID = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const GoodsItemPassportFieldMetaID = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaUUID = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaIssueDate = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaIssueTime = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaNote = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaVersionID = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'Identifies the current version of this request for proof',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaExportReasonCode = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ExportReasonCode,
  'ExportReasonCode',
  'Export Reason',
  'Code',
  'The reason for importing the goods, expressed as a code',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaExportReason = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ExportReason,
  'ExportReason',
  'Export Reason',
  'Text',
  'The reason for importing the goods, expressed as text in one or more languages',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaValidityPeriod = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  'Period',
  'The period within which this Goods Item Passport is valid',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaIssuerParty = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  'Party',
  'The party issuing this Goods Item Passport',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaHolderParty = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.HolderParty,
  'HolderParty',
  'Holder Party',
  'Party',
  'The holder of the Goods Item Passport, often the temporary exporter of the goods',
  '1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaRepresentativeParty = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.RepresentativeParty,
  'RepresentativeParty',
  'Representative Party',
  'Party',
  'The party accompanying the goods while temporarily exported',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaExportingCustomsParty = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ExportingCustomsParty,
  'ExportingCustomsParty',
  'Exporting Customs Party',
  'Party',
  'The competent Customs party of the exporting country',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaImportingCustomsParty = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ImportingCustomsParty,
  'ImportingCustomsParty',
  'Importing Customs Party',
  'Party',
  'The competent Customs party of the importing country',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaImportingGuarantorParty = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ImportingGuarantorParty,
  'ImportingGuarantorParty',
  'Importing Guarantor Party',
  'Party',
  'A party (often a chamber of commerce) which provides a guarantee goods while temporarily imported',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaExportingGuarantorParty = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.ExportingGuarantorParty,
  'ExportingGuarantorParty',
  'Exporting Guarantor Party',
  'Party',
  'A party (often a chamber of commerce) which provides a guarantee goods while temporarily exported',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaShipment = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.Shipment,
  'Shipment',
  'Shipment',
  'Shipment',
  'The reference to the shipment of the goods included under this Goods Item Passport',
  '1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaGoodsItemPassportCounterfoil = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.GoodsItemPassportCounterfoil,
  'GoodsItemPassportCounterfoil',
  'Goods Item Passport Counterfoil',
  'GoodsItemPassportCounterfoil',
  'One or more counterfoils associated with this Goods Item Passport',
  '1..n',
  'cac',
  'ATA Carnet counterfoil',
  undefined
)

export const GoodsItemPassportFieldMetaIssuerEndorsement = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.IssuerEndorsement,
  'IssuerEndorsement',
  'Issuer Endorsement',
  'Endorsement',
  'A reference to the issuer\'s endorsement of this Goods Item Passport',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaAdditionalDocumentReference = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  'DocumentReference',
  'One or more references to additional documents related to this Goods Item Passport',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaDocumentDistribution = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.DocumentDistribution,
  'DocumentDistribution',
  'Document Distribution',
  'DocumentDistribution',
  'One or more parties to whom this document is distributed',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsItemPassportFieldMetaSignature = new FieldMeta<GoodsItemPassportField>(
  GoodsItemPassportField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
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
