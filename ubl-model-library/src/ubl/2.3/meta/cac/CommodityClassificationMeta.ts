import { FieldMeta } from '../FieldMeta'

export enum CommodityClassificationField {
  UBLExtensions = 'UBLExtensions',
  NatureCode = 'NatureCode',
  CargoTypeCode = 'CargoTypeCode',
  CommodityCode = 'CommodityCode',
  ItemClassificationCode = 'ItemClassificationCode'
}

export const CommodityClassificationFieldMetaUBLExtensions = new FieldMeta<CommodityClassificationField>(
  CommodityClassificationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const CommodityClassificationFieldMetaNatureCode = new FieldMeta<CommodityClassificationField>(
  CommodityClassificationField.NatureCode,
  'NatureCode',
  'Nature Code',
  'Code',
  'A code defined by a specific maintenance agency signifying the high-level nature of the commodity.',
  '0..1',
  'cbc',
  undefined,
  'wooden products'
)

export const CommodityClassificationFieldMetaCargoTypeCode = new FieldMeta<CommodityClassificationField>(
  CommodityClassificationField.CargoTypeCode,
  'CargoTypeCode',
  'Cargo Type Code',
  'Code',
  'A mutually agreed code signifying the type of cargo for purposes of commodity classification.',
  '0..1',
  'cbc',
  undefined,
  'Refrigerated'
)

export const CommodityClassificationFieldMetaCommodityCode = new FieldMeta<CommodityClassificationField>(
  CommodityClassificationField.CommodityCode,
  'CommodityCode',
  'Commodity Code',
  'Code',
  'The harmonized international commodity code for cross border and regulatory (customs and trade statistics) purposes.',
  '0..1',
  'cbc',
  'Harmonized Code',
  '1102222883'
)

export const CommodityClassificationFieldMetaItemClassificationCode = new FieldMeta<CommodityClassificationField>(
  CommodityClassificationField.ItemClassificationCode,
  'ItemClassificationCode',
  'Item Classification Code',
  'Code',
  'A code signifying the trade classification of the commodity.',
  '0..1',
  'cbc',
  'UN/SPSC Code',
  '3440234'
)

export class CommodityClassificationFieldMeta {
  public static readonly UBLExtensions = CommodityClassificationFieldMetaUBLExtensions
  public static readonly NatureCode = CommodityClassificationFieldMetaNatureCode
  public static readonly CargoTypeCode = CommodityClassificationFieldMetaCargoTypeCode
  public static readonly CommodityCode = CommodityClassificationFieldMetaCommodityCode
  public static readonly ItemClassificationCode = CommodityClassificationFieldMetaItemClassificationCode
}

export const CommodityClassificationFieldMap = new Map([
  [CommodityClassificationField.UBLExtensions, CommodityClassificationFieldMetaUBLExtensions],
  [CommodityClassificationField.NatureCode, CommodityClassificationFieldMetaNatureCode],
  [CommodityClassificationField.CargoTypeCode, CommodityClassificationFieldMetaCargoTypeCode],
  [CommodityClassificationField.CommodityCode, CommodityClassificationFieldMetaCommodityCode],
  [CommodityClassificationField.ItemClassificationCode, CommodityClassificationFieldMetaItemClassificationCode]
])
