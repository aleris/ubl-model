import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { TelecommunicationsSupplyLineType } from './TelecommunicationsSupplyLineMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TelecommunicationsSupplyField {
  UBLExtensions = 'UBLExtensions',
  TelecommunicationsSupplyType = 'TelecommunicationsSupplyType',
  TelecommunicationsSupplyTypeCode = 'TelecommunicationsSupplyTypeCode',
  PrivacyCode = 'PrivacyCode',
  Description = 'Description',
  TotalAmount = 'TotalAmount',
  TelecommunicationsSupplyLine = 'TelecommunicationsSupplyLine'
}

export const TelecommunicationsSupplyFieldMetaUBLExtensions = new FieldMeta<TelecommunicationsSupplyField>(
  TelecommunicationsSupplyField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TelecommunicationsSupplyFieldMetaTelecommunicationsSupplyType = new FieldMeta<TelecommunicationsSupplyField>(
  TelecommunicationsSupplyField.TelecommunicationsSupplyType,
  'TelecommunicationsSupplyType',
  'Telecommunications Supply Type',
  TextType.name,
  'The type of telecommunications supply, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Itemized tele Statement'
)

export const TelecommunicationsSupplyFieldMetaTelecommunicationsSupplyTypeCode = new FieldMeta<TelecommunicationsSupplyField>(
  TelecommunicationsSupplyField.TelecommunicationsSupplyTypeCode,
  'TelecommunicationsSupplyTypeCode',
  'Telecommunications Supply Type Code',
  CodeType.name,
  'The type of telecommunications supply, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'TeleExtended'
)

export const TelecommunicationsSupplyFieldMetaPrivacyCode = new FieldMeta<TelecommunicationsSupplyField>(
  TelecommunicationsSupplyField.PrivacyCode,
  'PrivacyCode',
  'Privacy Code',
  CodeType.name,
  'A code signifying the level of confidentiality of this information for this telecommunication supply.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  'CompanyLevel'
)

export const TelecommunicationsSupplyFieldMetaDescription = new FieldMeta<TelecommunicationsSupplyField>(
  TelecommunicationsSupplyField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the telecommunications supply.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'Extended conversation Statement January quarter 2008.'
)

export const TelecommunicationsSupplyFieldMetaTotalAmount = new FieldMeta<TelecommunicationsSupplyField>(
  TelecommunicationsSupplyField.TotalAmount,
  'TotalAmount',
  'Total Amount',
  AmountType.name,
  'The total amount associated with this telecommunications supply.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TelecommunicationsSupplyFieldMetaTelecommunicationsSupplyLine = new FieldMeta<TelecommunicationsSupplyField>(
  TelecommunicationsSupplyField.TelecommunicationsSupplyLine,
  'TelecommunicationsSupplyLine',
  'Telecommunications Supply Line',
  TelecommunicationsSupplyLineType.name,
  'Outlines the provided telecommunication supply',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class TelecommunicationsSupplyFieldMeta {
  public static readonly UBLExtensions = TelecommunicationsSupplyFieldMetaUBLExtensions
  public static readonly TelecommunicationsSupplyType = TelecommunicationsSupplyFieldMetaTelecommunicationsSupplyType
  public static readonly TelecommunicationsSupplyTypeCode = TelecommunicationsSupplyFieldMetaTelecommunicationsSupplyTypeCode
  public static readonly PrivacyCode = TelecommunicationsSupplyFieldMetaPrivacyCode
  public static readonly Description = TelecommunicationsSupplyFieldMetaDescription
  public static readonly TotalAmount = TelecommunicationsSupplyFieldMetaTotalAmount
  public static readonly TelecommunicationsSupplyLine = TelecommunicationsSupplyFieldMetaTelecommunicationsSupplyLine
}

export const TelecommunicationsSupplyFieldMap = new Map([
  [TelecommunicationsSupplyField.UBLExtensions, TelecommunicationsSupplyFieldMetaUBLExtensions],
  [TelecommunicationsSupplyField.TelecommunicationsSupplyType, TelecommunicationsSupplyFieldMetaTelecommunicationsSupplyType],
  [TelecommunicationsSupplyField.TelecommunicationsSupplyTypeCode, TelecommunicationsSupplyFieldMetaTelecommunicationsSupplyTypeCode],
  [TelecommunicationsSupplyField.PrivacyCode, TelecommunicationsSupplyFieldMetaPrivacyCode],
  [TelecommunicationsSupplyField.Description, TelecommunicationsSupplyFieldMetaDescription],
  [TelecommunicationsSupplyField.TotalAmount, TelecommunicationsSupplyFieldMetaTotalAmount],
  [TelecommunicationsSupplyField.TelecommunicationsSupplyLine, TelecommunicationsSupplyFieldMetaTelecommunicationsSupplyLine]
])

export const TelecommunicationsSupplyType: Type<TelecommunicationsSupplyField> = {
  name: 'TelecommunicationsSupply',
  label: 'Telecommunications Supply',
  module: TypeModule.cac,
  definition: 'A class describing the supply of a telecommunication service, e.g., providing telephone calls.',
  fields: TelecommunicationsSupplyFieldMap,
}
