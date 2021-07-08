import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CriterionItemType } from './CriterionItemMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const AttestationLineFieldMetaID = new FieldMeta<AttestationLineField>(
  AttestationLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this attestation line',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AttestationLineFieldMetaTypeCode = new FieldMeta<AttestationLineField>(
  AttestationLineField.TypeCode,
  'TypeCode',
  'Type Code',
  CodeType.name,
  'A code describing the type of attestation line or statement',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AttestationLineFieldMetaDescription = new FieldMeta<AttestationLineField>(
  AttestationLineField.Description,
  'Description',
  'Description',
  TextType.name,
  'A textual description of this attestation line',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AttestationLineFieldMetaCriterionItem = new FieldMeta<AttestationLineField>(
  AttestationLineField.CriterionItem,
  'CriterionItem',
  'Criterion Item',
  CriterionItemType.name,
  'Criterion items associated with this attestation line',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const AttestationLineFieldMetaSubAttestationLine = new FieldMeta<AttestationLineField>(
  AttestationLineField.SubAttestationLine,
  'SubAttestationLine',
  'Sub Attestation Line',
  AttestationLineType.name,
  'An attestation line subsidiary to this attestation line',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const AttestationLineType: Type<AttestationLineField> = {
  name: 'AttestationLine',
  label: 'Attestation Line',
  module: TypeModule.cac,
  definition: 'A class describing an attestation line',
  fields: AttestationLineFieldMap,
}
