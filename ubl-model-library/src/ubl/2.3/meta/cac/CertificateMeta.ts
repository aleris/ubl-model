import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from './PartyMeta'
import { SignatureType } from './SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CertificateFieldMetaID = new FieldMeta<CertificateField>(
  CertificateField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this certificate.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CertificateFieldMetaCertificateTypeCode = new FieldMeta<CertificateField>(
  CertificateField.CertificateTypeCode,
  'CertificateTypeCode',
  'Certificate Type Code',
  CodeType.name,
  'The type of this certificate, expressed as a code. The type specifies what array it belongs to, e.g.. Environmental, security, health improvement etc.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CertificateFieldMetaCertificateType = new FieldMeta<CertificateField>(
  CertificateField.CertificateType,
  'CertificateType',
  'Certificate Type',
  TextType.name,
  'The type of this certificate, expressed as a code. The type specifies what array it belongs to, e.g.. Environmental, security, health improvement etc.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CertificateFieldMetaRemarks = new FieldMeta<CertificateField>(
  CertificateField.Remarks,
  'Remarks',
  'Remarks',
  TextType.name,
  'Remarks by the applicant for this certificate.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CertificateFieldMetaIssuerParty = new FieldMeta<CertificateField>(
  CertificateField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  PartyType.name,
  'The authorized organization that issued this certificate, the provider of the certificate.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const CertificateFieldMetaDocumentReference = new FieldMeta<CertificateField>(
  CertificateField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to a document relevant to this certificate or an application for this certificate.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CertificateFieldMetaSignature = new FieldMeta<CertificateField>(
  CertificateField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this certificate.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const CertificateType: Type<CertificateField> = {
  name: 'Certificate',
  label: 'Certificate',
  module: TypeModule.cac,
  definition: 'A class to define a certificate applied to the item. Certificated can be a requirement to sell goods or services in a jurisdiction.',
  fields: CertificateFieldMap,
}
