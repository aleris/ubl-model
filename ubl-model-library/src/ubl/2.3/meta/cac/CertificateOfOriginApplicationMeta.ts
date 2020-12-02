import { FieldMeta } from '../FieldMeta'

export enum CertificateOfOriginApplicationField {
  UBLExtensions = 'UBLExtensions',
  ReferenceID = 'ReferenceID',
  CertificateType = 'CertificateType',
  ApplicationStatusCode = 'ApplicationStatusCode',
  OriginalJobID = 'OriginalJobID',
  PreviousJobID = 'PreviousJobID',
  Remarks = 'Remarks',
  Shipment = 'Shipment',
  EndorserParty = 'EndorserParty',
  PreparationParty = 'PreparationParty',
  IssuerParty = 'IssuerParty',
  ExporterParty = 'ExporterParty',
  ImporterParty = 'ImporterParty',
  IssuingCountry = 'IssuingCountry',
  DocumentDistribution = 'DocumentDistribution',
  SupportingDocumentReference = 'SupportingDocumentReference',
  Signature = 'Signature'
}

export const CertificateOfOriginApplicationFieldMetaUBLExtensions = new FieldMeta<CertificateOfOriginApplicationField>(
  CertificateOfOriginApplicationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const CertificateOfOriginApplicationFieldMetaReferenceID = new FieldMeta<CertificateOfOriginApplicationField>(
  CertificateOfOriginApplicationField.ReferenceID,
  'ReferenceID',
  'Reference',
  'Identifier',
  'An identifier for a reference as part of the CoO application.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const CertificateOfOriginApplicationFieldMetaCertificateType = new FieldMeta<CertificateOfOriginApplicationField>(
  CertificateOfOriginApplicationField.CertificateType,
  'CertificateType',
  'Certificate Type',
  'Text',
  'The type of CoO being applied for (Ordinary, Re-export, Commonwealth Preferential, etc.).',
  '1',
  'cbc',
  undefined,
  undefined
)

export const CertificateOfOriginApplicationFieldMetaApplicationStatusCode = new FieldMeta<CertificateOfOriginApplicationField>(
  CertificateOfOriginApplicationField.ApplicationStatusCode,
  'ApplicationStatusCode',
  'Application Status Code',
  'Code',
  'A code signifying the status of the application (revision, replacement, etc.).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CertificateOfOriginApplicationFieldMetaOriginalJobID = new FieldMeta<CertificateOfOriginApplicationField>(
  CertificateOfOriginApplicationField.OriginalJobID,
  'OriginalJobID',
  'Original Job Identifier',
  'Identifier',
  'The latest job number given to the CoO application. This is used by the system to keep track of amendments to or cancellation of any earlier applications.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const CertificateOfOriginApplicationFieldMetaPreviousJobID = new FieldMeta<CertificateOfOriginApplicationField>(
  CertificateOfOriginApplicationField.PreviousJobID,
  'PreviousJobID',
  'Previous Job Identifier',
  'Identifier',
  'An identifier for the previous job used in case the application requires query or change.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CertificateOfOriginApplicationFieldMetaRemarks = new FieldMeta<CertificateOfOriginApplicationField>(
  CertificateOfOriginApplicationField.Remarks,
  'Remarks',
  'Remarks',
  'Text',
  'Remarks by the applicant for the CoO.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const CertificateOfOriginApplicationFieldMetaShipment = new FieldMeta<CertificateOfOriginApplicationField>(
  CertificateOfOriginApplicationField.Shipment,
  'Shipment',
  'Shipment',
  'Shipment',
  'The shipment of goods covered by the CoO.',
  '1',
  'cac',
  undefined,
  undefined
)

export const CertificateOfOriginApplicationFieldMetaEndorserParty = new FieldMeta<CertificateOfOriginApplicationField>(
  CertificateOfOriginApplicationField.EndorserParty,
  'EndorserParty',
  'Endorser Party',
  'EndorserParty',
  'A party providing an endorsement to the CoO.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export const CertificateOfOriginApplicationFieldMetaPreparationParty = new FieldMeta<CertificateOfOriginApplicationField>(
  CertificateOfOriginApplicationField.PreparationParty,
  'PreparationParty',
  'Preparation Party',
  'Party',
  'The party (individual, group, or body) that prepared this CoO application.',
  '1',
  'cac',
  undefined,
  undefined
)

export const CertificateOfOriginApplicationFieldMetaIssuerParty = new FieldMeta<CertificateOfOriginApplicationField>(
  CertificateOfOriginApplicationField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  'Party',
  'The organization authorized to issue the CoO requested by this application.',
  '1',
  'cac',
  undefined,
  undefined
)

export const CertificateOfOriginApplicationFieldMetaExporterParty = new FieldMeta<CertificateOfOriginApplicationField>(
  CertificateOfOriginApplicationField.ExporterParty,
  'ExporterParty',
  'Exporter Party',
  'Party',
  'The party making an export declaration, or on behalf of which the export declaration is made, and that is the owner of the goods or has similar right of disposal over them at the time when the declaration is accepted.',
  '0..1',
  'cac',
  'Exporter (WCO ID 41 and 42)',
  undefined
)

export const CertificateOfOriginApplicationFieldMetaImporterParty = new FieldMeta<CertificateOfOriginApplicationField>(
  CertificateOfOriginApplicationField.ImporterParty,
  'ImporterParty',
  'Importer Party',
  'Party',
  'The party making an import declaration, or on behalf of which a customs clearing agent or other authorized person makes an import declaration. This may include a person who has possession of the goods or to whom the goods are consigned.',
  '0..1',
  'cac',
  'Importer (WCO ID 39 and 40)',
  undefined
)

export const CertificateOfOriginApplicationFieldMetaIssuingCountry = new FieldMeta<CertificateOfOriginApplicationField>(
  CertificateOfOriginApplicationField.IssuingCountry,
  'IssuingCountry',
  'Issuing Country',
  'Country',
  'The country where the requested CoO will be issued.',
  '1',
  'cac',
  undefined,
  undefined
)

export const CertificateOfOriginApplicationFieldMetaDocumentDistribution = new FieldMeta<CertificateOfOriginApplicationField>(
  CertificateOfOriginApplicationField.DocumentDistribution,
  'DocumentDistribution',
  'Document Distribution',
  'DocumentDistribution',
  'An interested party to which the CoO is to be distributed.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const CertificateOfOriginApplicationFieldMetaSupportingDocumentReference = new FieldMeta<CertificateOfOriginApplicationField>(
  CertificateOfOriginApplicationField.SupportingDocumentReference,
  'SupportingDocumentReference',
  'Supporting Document Reference',
  'DocumentReference',
  'A reference to a document supporting this application.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const CertificateOfOriginApplicationFieldMetaSignature = new FieldMeta<CertificateOfOriginApplicationField>(
  CertificateOfOriginApplicationField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this application.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class CertificateOfOriginApplicationFieldMeta {
  public static readonly UBLExtensions = CertificateOfOriginApplicationFieldMetaUBLExtensions
  public static readonly ReferenceID = CertificateOfOriginApplicationFieldMetaReferenceID
  public static readonly CertificateType = CertificateOfOriginApplicationFieldMetaCertificateType
  public static readonly ApplicationStatusCode = CertificateOfOriginApplicationFieldMetaApplicationStatusCode
  public static readonly OriginalJobID = CertificateOfOriginApplicationFieldMetaOriginalJobID
  public static readonly PreviousJobID = CertificateOfOriginApplicationFieldMetaPreviousJobID
  public static readonly Remarks = CertificateOfOriginApplicationFieldMetaRemarks
  public static readonly Shipment = CertificateOfOriginApplicationFieldMetaShipment
  public static readonly EndorserParty = CertificateOfOriginApplicationFieldMetaEndorserParty
  public static readonly PreparationParty = CertificateOfOriginApplicationFieldMetaPreparationParty
  public static readonly IssuerParty = CertificateOfOriginApplicationFieldMetaIssuerParty
  public static readonly ExporterParty = CertificateOfOriginApplicationFieldMetaExporterParty
  public static readonly ImporterParty = CertificateOfOriginApplicationFieldMetaImporterParty
  public static readonly IssuingCountry = CertificateOfOriginApplicationFieldMetaIssuingCountry
  public static readonly DocumentDistribution = CertificateOfOriginApplicationFieldMetaDocumentDistribution
  public static readonly SupportingDocumentReference = CertificateOfOriginApplicationFieldMetaSupportingDocumentReference
  public static readonly Signature = CertificateOfOriginApplicationFieldMetaSignature
}

export const CertificateOfOriginApplicationFieldMap = new Map([
  [CertificateOfOriginApplicationField.UBLExtensions, CertificateOfOriginApplicationFieldMetaUBLExtensions],
  [CertificateOfOriginApplicationField.ReferenceID, CertificateOfOriginApplicationFieldMetaReferenceID],
  [CertificateOfOriginApplicationField.CertificateType, CertificateOfOriginApplicationFieldMetaCertificateType],
  [CertificateOfOriginApplicationField.ApplicationStatusCode, CertificateOfOriginApplicationFieldMetaApplicationStatusCode],
  [CertificateOfOriginApplicationField.OriginalJobID, CertificateOfOriginApplicationFieldMetaOriginalJobID],
  [CertificateOfOriginApplicationField.PreviousJobID, CertificateOfOriginApplicationFieldMetaPreviousJobID],
  [CertificateOfOriginApplicationField.Remarks, CertificateOfOriginApplicationFieldMetaRemarks],
  [CertificateOfOriginApplicationField.Shipment, CertificateOfOriginApplicationFieldMetaShipment],
  [CertificateOfOriginApplicationField.EndorserParty, CertificateOfOriginApplicationFieldMetaEndorserParty],
  [CertificateOfOriginApplicationField.PreparationParty, CertificateOfOriginApplicationFieldMetaPreparationParty],
  [CertificateOfOriginApplicationField.IssuerParty, CertificateOfOriginApplicationFieldMetaIssuerParty],
  [CertificateOfOriginApplicationField.ExporterParty, CertificateOfOriginApplicationFieldMetaExporterParty],
  [CertificateOfOriginApplicationField.ImporterParty, CertificateOfOriginApplicationFieldMetaImporterParty],
  [CertificateOfOriginApplicationField.IssuingCountry, CertificateOfOriginApplicationFieldMetaIssuingCountry],
  [CertificateOfOriginApplicationField.DocumentDistribution, CertificateOfOriginApplicationFieldMetaDocumentDistribution],
  [CertificateOfOriginApplicationField.SupportingDocumentReference, CertificateOfOriginApplicationFieldMetaSupportingDocumentReference],
  [CertificateOfOriginApplicationField.Signature, CertificateOfOriginApplicationFieldMetaSignature]
])
