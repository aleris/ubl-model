import { FieldMeta } from '../../FieldMeta'

export enum TelecommunicationsSupplyField {
  TelecommunicationsSupplyType = 'TelecommunicationsSupplyType',
  TelecommunicationsSupplyTypeCode = 'TelecommunicationsSupplyTypeCode',
  PrivacyCode = 'PrivacyCode',
  Description = 'Description',
  TotalAmount = 'TotalAmount',
  TelecommunicationsSupplyLine = 'TelecommunicationsSupplyLine'
}

export const TelecommunicationsSupplyFieldMetaTelecommunicationsSupplyType = new FieldMeta<TelecommunicationsSupplyField>(
  TelecommunicationsSupplyField.TelecommunicationsSupplyType,
  'TelecommunicationsSupplyType',
  'Telecommunications Supply Type',
  'Text',
  'The type of telecommunications supply, expressed as text.',
  '0..1',
  undefined,
  'Itemized tele Statement'
)

export const TelecommunicationsSupplyFieldMetaTelecommunicationsSupplyTypeCode = new FieldMeta<TelecommunicationsSupplyField>(
  TelecommunicationsSupplyField.TelecommunicationsSupplyTypeCode,
  'TelecommunicationsSupplyTypeCode',
  'Telecommunications Supply Type Code',
  'Code',
  'The type of telecommunications supply, expressed as a code.',
  '0..1',
  undefined,
  'TeleExtended'
)

export const TelecommunicationsSupplyFieldMetaPrivacyCode = new FieldMeta<TelecommunicationsSupplyField>(
  TelecommunicationsSupplyField.PrivacyCode,
  'PrivacyCode',
  'Privacy Code',
  'Code',
  'A code signifying the level of confidentiality of this information for this telecommunication supply.',
  '1',
  undefined,
  'CompanyLevel'
)

export const TelecommunicationsSupplyFieldMetaDescription = new FieldMeta<TelecommunicationsSupplyField>(
  TelecommunicationsSupplyField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the telecommunications supply.',
  '0..n',
  undefined,
  'Extended conversation Statement January quarter 2008.'
)

export const TelecommunicationsSupplyFieldMetaTotalAmount = new FieldMeta<TelecommunicationsSupplyField>(
  TelecommunicationsSupplyField.TotalAmount,
  'TotalAmount',
  'Amount',
  'Amount',
  'The total amount associated with this telecommunications supply.',
  '0..1',
  undefined,
  undefined
)

export const TelecommunicationsSupplyFieldMetaTelecommunicationsSupplyLine = new FieldMeta<TelecommunicationsSupplyField>(
  TelecommunicationsSupplyField.TelecommunicationsSupplyLine,
  'TelecommunicationsSupplyLine',
  'Telecommunications Supply Line',
  'TelecommunicationsSupplyLine',
  'Outlines the provided telecommunication supply',
  '1..n',
  undefined,
  undefined
)

export class TelecommunicationsSupplyFieldMeta {
  public static readonly TelecommunicationsSupplyType = TelecommunicationsSupplyFieldMetaTelecommunicationsSupplyType
  public static readonly TelecommunicationsSupplyTypeCode = TelecommunicationsSupplyFieldMetaTelecommunicationsSupplyTypeCode
  public static readonly PrivacyCode = TelecommunicationsSupplyFieldMetaPrivacyCode
  public static readonly Description = TelecommunicationsSupplyFieldMetaDescription
  public static readonly TotalAmount = TelecommunicationsSupplyFieldMetaTotalAmount
  public static readonly TelecommunicationsSupplyLine = TelecommunicationsSupplyFieldMetaTelecommunicationsSupplyLine
}

export const TelecommunicationsSupplyFieldMap = new Map([
  [TelecommunicationsSupplyField.TelecommunicationsSupplyType, TelecommunicationsSupplyFieldMetaTelecommunicationsSupplyType],
  [TelecommunicationsSupplyField.TelecommunicationsSupplyTypeCode, TelecommunicationsSupplyFieldMetaTelecommunicationsSupplyTypeCode],
  [TelecommunicationsSupplyField.PrivacyCode, TelecommunicationsSupplyFieldMetaPrivacyCode],
  [TelecommunicationsSupplyField.Description, TelecommunicationsSupplyFieldMetaDescription],
  [TelecommunicationsSupplyField.TotalAmount, TelecommunicationsSupplyFieldMetaTotalAmount],
  [TelecommunicationsSupplyField.TelecommunicationsSupplyLine, TelecommunicationsSupplyFieldMetaTelecommunicationsSupplyLine]
])
