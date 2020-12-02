import { FieldMeta } from '../FieldMeta'

export enum AttestationLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  TypeCode = 'TypeCode',
  Description = 'Description',
  CriterionItem = 'CriterionItem',
  SubAttestationLine = 'SubAttestationLine'
}

export const AttestationLineFieldMetaUBLExtensions = new FieldMeta<AttestationLineField>(
  AttestationLineField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const AttestationLineFieldMetaID = new FieldMeta<AttestationLineField>(
  AttestationLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this attestation line',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AttestationLineFieldMetaTypeCode = new FieldMeta<AttestationLineField>(
  AttestationLineField.TypeCode,
  'TypeCode',
  'Type Code',
  'Code',
  'A code describing the type of attestation line or statement',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AttestationLineFieldMetaDescription = new FieldMeta<AttestationLineField>(
  AttestationLineField.Description,
  'Description',
  'Description',
  'Text',
  'A textual description of this attestation line',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const AttestationLineFieldMetaCriterionItem = new FieldMeta<AttestationLineField>(
  AttestationLineField.CriterionItem,
  'CriterionItem',
  'Criterion Item',
  'CriterionItem',
  'Criterion items associated with this attestation line',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const AttestationLineFieldMetaSubAttestationLine = new FieldMeta<AttestationLineField>(
  AttestationLineField.SubAttestationLine,
  'SubAttestationLine',
  'Sub Attestation Line',
  'AttestationLine',
  'An attestation line subsidiary to this attestation line',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class AttestationLineFieldMeta {
  public static readonly UBLExtensions = AttestationLineFieldMetaUBLExtensions
  public static readonly ID = AttestationLineFieldMetaID
  public static readonly TypeCode = AttestationLineFieldMetaTypeCode
  public static readonly Description = AttestationLineFieldMetaDescription
  public static readonly CriterionItem = AttestationLineFieldMetaCriterionItem
  public static readonly SubAttestationLine = AttestationLineFieldMetaSubAttestationLine
}

export const AttestationLineFieldMap = new Map([
  [AttestationLineField.UBLExtensions, AttestationLineFieldMetaUBLExtensions],
  [AttestationLineField.ID, AttestationLineFieldMetaID],
  [AttestationLineField.TypeCode, AttestationLineFieldMetaTypeCode],
  [AttestationLineField.Description, AttestationLineFieldMetaDescription],
  [AttestationLineField.CriterionItem, AttestationLineFieldMetaCriterionItem],
  [AttestationLineField.SubAttestationLine, AttestationLineFieldMetaSubAttestationLine]
])
