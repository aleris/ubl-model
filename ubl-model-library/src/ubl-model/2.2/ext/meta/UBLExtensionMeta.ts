import { FieldMeta } from '../../FieldMeta'

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
  'undefined',
  'Identifier',
  'An identifier for the Extension assigned by the creator of the extension.',
  '0..1',
  undefined,
  undefined
)

export const UBLExtensionFieldMetaName = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.Name,
  'Name',
  'undefined',
  'Text',
  'A name for the Extension assigned by the creator of the extension.',
  '0..1',
  undefined,
  undefined
)

export const UBLExtensionFieldMetaExtensionAgencyID = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.ExtensionAgencyID,
  'ExtensionAgencyID',
  'undefined',
  'Identifier',
  'An agency that maintains one or more Extensions.',
  '0..1',
  undefined,
  undefined
)

export const UBLExtensionFieldMetaExtensionAgencyName = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.ExtensionAgencyName,
  'ExtensionAgencyName',
  'undefined',
  'Text',
  'The name of the agency that maintains the Extension.',
  '0..1',
  undefined,
  undefined
)

export const UBLExtensionFieldMetaExtensionVersionID = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.ExtensionVersionID,
  'ExtensionVersionID',
  'undefined',
  'Identifier',
  'The version of the Extension.',
  '0..1',
  undefined,
  undefined
)

export const UBLExtensionFieldMetaExtensionAgencyURI = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.ExtensionAgencyURI,
  'ExtensionAgencyURI',
  'undefined',
  'Identifier',
  'A URI for the Agency that maintains the Extension.',
  '0..1',
  undefined,
  undefined
)

export const UBLExtensionFieldMetaExtensionURI = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.ExtensionURI,
  'ExtensionURI',
  'undefined',
  'Identifier',
  'A URI for the Extension.',
  '0..1',
  undefined,
  undefined
)

export const UBLExtensionFieldMetaExtensionReasonCode = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.ExtensionReasonCode,
  'ExtensionReasonCode',
  'undefined',
  'Code',
  'A code for reason the Extension is being included.',
  '0..1',
  undefined,
  undefined
)

export const UBLExtensionFieldMetaExtensionReason = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.ExtensionReason,
  'ExtensionReason',
  'undefined',
  'Text',
  'A description of the reason for the Extension.',
  '0..1',
  undefined,
  undefined
)

export const UBLExtensionFieldMetaExtensionContent = new FieldMeta<UBLExtensionField>(
  UBLExtensionField.ExtensionContent,
  'ExtensionContent',
  'undefined',
  'ExtensionContent',
  'The definition of the extension content.',
  '1..1',
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
