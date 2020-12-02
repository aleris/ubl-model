import { FieldMeta } from '../FieldMeta'

export enum LotIdentificationField {
  UBLExtensions = 'UBLExtensions',
  LotNumberID = 'LotNumberID',
  ExpiryDate = 'ExpiryDate',
  AdditionalItemProperty = 'AdditionalItemProperty'
}

export const LotIdentificationFieldMetaUBLExtensions = new FieldMeta<LotIdentificationField>(
  LotIdentificationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const LotIdentificationFieldMetaLotNumberID = new FieldMeta<LotIdentificationField>(
  LotIdentificationField.LotNumberID,
  'LotNumberID',
  'Lot Number',
  'Identifier',
  'An identifier for the lot.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LotIdentificationFieldMetaExpiryDate = new FieldMeta<LotIdentificationField>(
  LotIdentificationField.ExpiryDate,
  'ExpiryDate',
  'Expiry Date',
  'Date',
  'The expiry date of the lot.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LotIdentificationFieldMetaAdditionalItemProperty = new FieldMeta<LotIdentificationField>(
  LotIdentificationField.AdditionalItemProperty,
  'AdditionalItemProperty',
  'Additional Item Property',
  'ItemProperty',
  'An additional property of the lot.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class LotIdentificationFieldMeta {
  public static readonly UBLExtensions = LotIdentificationFieldMetaUBLExtensions
  public static readonly LotNumberID = LotIdentificationFieldMetaLotNumberID
  public static readonly ExpiryDate = LotIdentificationFieldMetaExpiryDate
  public static readonly AdditionalItemProperty = LotIdentificationFieldMetaAdditionalItemProperty
}

export const LotIdentificationFieldMap = new Map([
  [LotIdentificationField.UBLExtensions, LotIdentificationFieldMetaUBLExtensions],
  [LotIdentificationField.LotNumberID, LotIdentificationFieldMetaLotNumberID],
  [LotIdentificationField.ExpiryDate, LotIdentificationFieldMetaExpiryDate],
  [LotIdentificationField.AdditionalItemProperty, LotIdentificationFieldMetaAdditionalItemProperty]
])
