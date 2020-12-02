import { FieldMeta } from '../FieldMeta'

export enum CertificateField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  CertificateTypeCode = 'CertificateTypeCode',
  CertificateType = 'CertificateType',
  Remarks = 'Remarks',
  IssuerParty = 'IssuerParty',
  DocumentReference = 'DocumentReference',
  Signature = 'Signature'
}

export const CertificateFieldMetaUBLExtensions = new FieldMeta<CertificateField>(
  CertificateField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const CertificateFieldMetaID = new FieldMeta<CertificateField>(
  CertificateField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this certificate.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const CertificateFieldMetaCertificateTypeCode = new FieldMeta<CertificateField>(
  CertificateField.CertificateTypeCode,
  'CertificateTypeCode',
  'Certificate Type Code',
  'Code',
  'The type of this certificate, expressed as a code. The type specifies what array it belongs to, e.g.. Environmental, security, health improvement etc.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const CertificateFieldMetaCertificateType = new FieldMeta<CertificateField>(
  CertificateField.CertificateType,
  'CertificateType',
  'Certificate Type',
  'Text',
  'The type of this certificate, expressed as a code. The type specifies what array it belongs to, e.g.. Environmental, security, health improvement etc.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const CertificateFieldMetaRemarks = new FieldMeta<CertificateField>(
  CertificateField.Remarks,
  'Remarks',
  'Remarks',
  'Text',
  'Remarks by the applicant for this certificate.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const CertificateFieldMetaIssuerParty = new FieldMeta<CertificateField>(
  CertificateField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  'Party',
  'The authorized organization that issued this certificate, the provider of the certificate.',
  '1',
  'cac',
  undefined,
  undefined
)

export const CertificateFieldMetaDocumentReference = new FieldMeta<CertificateField>(
  CertificateField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a document relevant to this certificate or an application for this certificate.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const CertificateFieldMetaSignature = new FieldMeta<CertificateField>(
  CertificateField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this certificate.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class CertificateFieldMeta {
  public static readonly UBLExtensions = CertificateFieldMetaUBLExtensions
  public static readonly ID = CertificateFieldMetaID
  public static readonly CertificateTypeCode = CertificateFieldMetaCertificateTypeCode
  public static readonly CertificateType = CertificateFieldMetaCertificateType
  public static readonly Remarks = CertificateFieldMetaRemarks
  public static readonly IssuerParty = CertificateFieldMetaIssuerParty
  public static readonly DocumentReference = CertificateFieldMetaDocumentReference
  public static readonly Signature = CertificateFieldMetaSignature
}

export const CertificateFieldMap = new Map([
  [CertificateField.UBLExtensions, CertificateFieldMetaUBLExtensions],
  [CertificateField.ID, CertificateFieldMetaID],
  [CertificateField.CertificateTypeCode, CertificateFieldMetaCertificateTypeCode],
  [CertificateField.CertificateType, CertificateFieldMetaCertificateType],
  [CertificateField.Remarks, CertificateFieldMetaRemarks],
  [CertificateField.IssuerParty, CertificateFieldMetaIssuerParty],
  [CertificateField.DocumentReference, CertificateFieldMetaDocumentReference],
  [CertificateField.Signature, CertificateFieldMetaSignature]
])
