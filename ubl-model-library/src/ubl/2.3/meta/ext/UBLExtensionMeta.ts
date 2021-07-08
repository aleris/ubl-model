import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { ExtensionContentType } from './ExtensionContentMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'

export enum UBLExtensionField {
  ID = 'ID',
  Name = 'Name',
  ExtensionAgencyID = 'ExtensionAgencyID',
  ExtensionAgencyName = 'ExtensionAgencyName',
  ExtensionVersionID = 'ExtensionVersionID',
  ExtensionAgencyURI = 'ExtensionAgencyURI',
  ExtensionURI = 'ExtensionURI',
  ExtensionReasonCode = 'ExtensionReasonCode',
  ExtensionReason = 'ExtensionReason',
  ExtensionContent = 'ExtensionContent'
}

export const UBLExtensionFieldMetaID = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.ID,
  'ID',
  'ID',
  IdentifierType.name,
  'An identifier for the Extension assigned by the creator of the extension.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UBLExtensionFieldMetaName = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.Name,
  'Name',
  'Name',
  TextType.name,
  'A name for the Extension assigned by the creator of the extension.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UBLExtensionFieldMetaExtensionAgencyID = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.ExtensionAgencyID,
  'ExtensionAgencyID',
  'ExtensionAgencyID',
  IdentifierType.name,
  'An agency that maintains one or more Extensions.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UBLExtensionFieldMetaExtensionAgencyName = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.ExtensionAgencyName,
  'ExtensionAgencyName',
  'ExtensionAgencyName',
  TextType.name,
  'The name of the agency that maintains the Extension.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UBLExtensionFieldMetaExtensionVersionID = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.ExtensionVersionID,
  'ExtensionVersionID',
  'ExtensionVersionID',
  IdentifierType.name,
  'The version of the Extension.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UBLExtensionFieldMetaExtensionAgencyURI = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.ExtensionAgencyURI,
  'ExtensionAgencyURI',
  'ExtensionAgencyURI',
  IdentifierType.name,
  'A URI for the Agency that maintains the Extension.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UBLExtensionFieldMetaExtensionURI = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.ExtensionURI,
  'ExtensionURI',
  'ExtensionURI',
  IdentifierType.name,
  'A URI for the Extension.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UBLExtensionFieldMetaExtensionReasonCode = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.ExtensionReasonCode,
  'ExtensionReasonCode',
  'ExtensionReasonCode',
  CodeType.name,
  'A code for reason the Extension is being included.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UBLExtensionFieldMetaExtensionReason = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.ExtensionReason,
  'ExtensionReason',
  'ExtensionReason',
  TextType.name,
  'A description of the reason for the Extension.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UBLExtensionFieldMetaExtensionContent = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.ExtensionContent,
  'ExtensionContent',
  'ExtensionContent',
  ExtensionContentType.name,
  'The definition of the extension content.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export class UBLExtensionFieldMeta {
  public static readonly ID = UBLExtensionFieldMetaID
  public static readonly Name = UBLExtensionFieldMetaName
  public static readonly ExtensionAgencyID = UBLExtensionFieldMetaExtensionAgencyID
  public static readonly ExtensionAgencyName = UBLExtensionFieldMetaExtensionAgencyName
  public static readonly ExtensionVersionID = UBLExtensionFieldMetaExtensionVersionID
  public static readonly ExtensionAgencyURI = UBLExtensionFieldMetaExtensionAgencyURI
  public static readonly ExtensionURI = UBLExtensionFieldMetaExtensionURI
  public static readonly ExtensionReasonCode = UBLExtensionFieldMetaExtensionReasonCode
  public static readonly ExtensionReason = UBLExtensionFieldMetaExtensionReason
  public static readonly ExtensionContent = UBLExtensionFieldMetaExtensionContent
}

export const UBLExtensionFieldMap = new Map([
  [UBLExtensionField.ID, UBLExtensionFieldMetaID],
  [UBLExtensionField.Name, UBLExtensionFieldMetaName],
  [UBLExtensionField.ExtensionAgencyID, UBLExtensionFieldMetaExtensionAgencyID],
  [UBLExtensionField.ExtensionAgencyName, UBLExtensionFieldMetaExtensionAgencyName],
  [UBLExtensionField.ExtensionVersionID, UBLExtensionFieldMetaExtensionVersionID],
  [UBLExtensionField.ExtensionAgencyURI, UBLExtensionFieldMetaExtensionAgencyURI],
  [UBLExtensionField.ExtensionURI, UBLExtensionFieldMetaExtensionURI],
  [UBLExtensionField.ExtensionReasonCode, UBLExtensionFieldMetaExtensionReasonCode],
  [UBLExtensionField.ExtensionReason, UBLExtensionFieldMetaExtensionReason],
  [UBLExtensionField.ExtensionContent, UBLExtensionFieldMetaExtensionContent]
])

export const UBLExtensionType: Type<UBLExtensionField> = {
  name: 'UBLExtension',
  label: 'undefined',
  module: TypeModule.ext,
  definition: 'A single extension for private use.',
  fields: UBLExtensionFieldMap,
}
