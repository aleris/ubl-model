import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CommodityClassificationFieldMetaNatureCode = new FieldMeta<CommodityClassificationField>(
  CommodityClassificationField.NatureCode,
  'NatureCode',
  'Nature Code',
  CodeType.name,
  'A code defined by a specific maintenance agency signifying the high-level nature of the commodity.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'wooden products'
)

export const CommodityClassificationFieldMetaCargoTypeCode = new FieldMeta<CommodityClassificationField>(
  CommodityClassificationField.CargoTypeCode,
  'CargoTypeCode',
  'Cargo Type Code',
  CodeType.name,
  'A mutually agreed code signifying the type of cargo for purposes of commodity classification.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Refrigerated'
)

export const CommodityClassificationFieldMetaCommodityCode = new FieldMeta<CommodityClassificationField>(
  CommodityClassificationField.CommodityCode,
  'CommodityCode',
  'Commodity Code',
  CodeType.name,
  'The harmonized international commodity code for cross border and regulatory (customs and trade statistics) purposes.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Harmonized Code',
  '1102222883'
)

export const CommodityClassificationFieldMetaItemClassificationCode = new FieldMeta<CommodityClassificationField>(
  CommodityClassificationField.ItemClassificationCode,
  'ItemClassificationCode',
  'Item Classification Code',
  CodeType.name,
  'A code signifying the trade classification of the commodity.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
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

export const CommodityClassificationType: Type<CommodityClassificationField> = {
  name: 'CommodityClassification',
  label: 'Commodity Classification',
  module: TypeModule.cac,
  definition: 'A class to describe the classification of a commodity.',
  fields: CommodityClassificationFieldMap,
}
