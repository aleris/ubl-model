import { FieldMeta } from '../../FieldMeta'

export enum LotIdentificationField {
  LotNumberID = 'LotNumberID',
  ExpiryDate = 'ExpiryDate',
  AdditionalItemProperty = 'AdditionalItemProperty'
}

export const LotIdentificationFieldMetaLotNumberID = new FieldMeta<LotIdentificationField>(
  LotIdentificationField.LotNumberID,
  'LotNumberID',
  'Lot Number',
  'Identifier',
  'An identifier for the lot.',
  '0..1',
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
  undefined,
  undefined
)

export const LotIdentificationFieldMetaAdditionalItemProperty = new FieldMeta<LotIdentificationField>(
  LotIdentificationField.AdditionalItemProperty,
  'AdditionalItemProperty',
  'Item Property',
  'ItemProperty',
  'An additional property of the lot.',
  '0..n',
  undefined,
  undefined
)

export class LotIdentificationFieldMeta {
  public static readonly LotNumberID = LotIdentificationFieldMetaLotNumberID
  public static readonly ExpiryDate = LotIdentificationFieldMetaExpiryDate
  public static readonly AdditionalItemProperty = LotIdentificationFieldMetaAdditionalItemProperty
}

export const LotIdentificationFieldMap = new Map([
  [LotIdentificationField.LotNumberID, LotIdentificationFieldMetaLotNumberID],
  [LotIdentificationField.ExpiryDate, LotIdentificationFieldMetaExpiryDate],
  [LotIdentificationField.AdditionalItemProperty, LotIdentificationFieldMetaAdditionalItemProperty]
])
