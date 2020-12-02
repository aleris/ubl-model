import { FieldMeta } from '../FieldMeta'

export enum TelecommunicationsSupplyLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  PhoneNumber = 'PhoneNumber',
  Description = 'Description',
  LineExtensionAmount = 'LineExtensionAmount',
  TaxInclusiveLineExtensionAmount = 'TaxInclusiveLineExtensionAmount',
  ExchangeRate = 'ExchangeRate',
  AllowanceCharge = 'AllowanceCharge',
  TaxTotal = 'TaxTotal',
  TelecommunicationsService = 'TelecommunicationsService'
}

export const TelecommunicationsSupplyLineFieldMetaUBLExtensions = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TelecommunicationsSupplyLineFieldMetaID = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this telecommunications supply line.',
  '1',
  'cbc',
  undefined,
  '1'
)

export const TelecommunicationsSupplyLineFieldMetaPhoneNumber = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.PhoneNumber,
  'PhoneNumber',
  'Phone Number',
  'Text',
  'The phone number used for this telecommunication supply line',
  '1',
  'cbc',
  undefined,
  '12345678'
)

export const TelecommunicationsSupplyLineFieldMetaDescription = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.Description,
  'Description',
  'Description',
  'Text',
  'The description of the telecommunication supply line',
  '0..n',
  'cbc',
  undefined,
  'Additional informations'
)

export const TelecommunicationsSupplyLineFieldMetaLineExtensionAmount = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.LineExtensionAmount,
  'LineExtensionAmount',
  'Line Extension Amount',
  'Amount',
  'An amount specifying the cost of this telecommunication line',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TelecommunicationsSupplyLineFieldMetaTaxInclusiveLineExtensionAmount = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.TaxInclusiveLineExtensionAmount,
  'TaxInclusiveLineExtensionAmount',
  'Tax Inclusive Line Extension Amount',
  'Amount',
  'The total amount for this telecommunications supply line, including all allowances, charges and taxes.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TelecommunicationsSupplyLineFieldMetaExchangeRate = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.ExchangeRate,
  'ExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'Exchanges rates used to calculate the amount for this line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TelecommunicationsSupplyLineFieldMetaAllowanceCharge = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'An allowance or charge that applies to this telecommunication supply line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TelecommunicationsSupplyLineFieldMetaTaxTotal = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'A total amount of taxes of a particular kind applicable to this telecommunications supply line',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TelecommunicationsSupplyLineFieldMetaTelecommunicationsService = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.TelecommunicationsService,
  'TelecommunicationsService',
  'Telecommunications Service',
  'TelecommunicationsService',
  'A telecommunications service (e.g., a telephone call).',
  '1..n',
  'cac',
  undefined,
  undefined
)

export class TelecommunicationsSupplyLineFieldMeta {
  public static readonly UBLExtensions = TelecommunicationsSupplyLineFieldMetaUBLExtensions
  public static readonly ID = TelecommunicationsSupplyLineFieldMetaID
  public static readonly PhoneNumber = TelecommunicationsSupplyLineFieldMetaPhoneNumber
  public static readonly Description = TelecommunicationsSupplyLineFieldMetaDescription
  public static readonly LineExtensionAmount = TelecommunicationsSupplyLineFieldMetaLineExtensionAmount
  public static readonly TaxInclusiveLineExtensionAmount = TelecommunicationsSupplyLineFieldMetaTaxInclusiveLineExtensionAmount
  public static readonly ExchangeRate = TelecommunicationsSupplyLineFieldMetaExchangeRate
  public static readonly AllowanceCharge = TelecommunicationsSupplyLineFieldMetaAllowanceCharge
  public static readonly TaxTotal = TelecommunicationsSupplyLineFieldMetaTaxTotal
  public static readonly TelecommunicationsService = TelecommunicationsSupplyLineFieldMetaTelecommunicationsService
}

export const TelecommunicationsSupplyLineFieldMap = new Map([
  [TelecommunicationsSupplyLineField.UBLExtensions, TelecommunicationsSupplyLineFieldMetaUBLExtensions],
  [TelecommunicationsSupplyLineField.ID, TelecommunicationsSupplyLineFieldMetaID],
  [TelecommunicationsSupplyLineField.PhoneNumber, TelecommunicationsSupplyLineFieldMetaPhoneNumber],
  [TelecommunicationsSupplyLineField.Description, TelecommunicationsSupplyLineFieldMetaDescription],
  [TelecommunicationsSupplyLineField.LineExtensionAmount, TelecommunicationsSupplyLineFieldMetaLineExtensionAmount],
  [TelecommunicationsSupplyLineField.TaxInclusiveLineExtensionAmount, TelecommunicationsSupplyLineFieldMetaTaxInclusiveLineExtensionAmount],
  [TelecommunicationsSupplyLineField.ExchangeRate, TelecommunicationsSupplyLineFieldMetaExchangeRate],
  [TelecommunicationsSupplyLineField.AllowanceCharge, TelecommunicationsSupplyLineFieldMetaAllowanceCharge],
  [TelecommunicationsSupplyLineField.TaxTotal, TelecommunicationsSupplyLineFieldMetaTaxTotal],
  [TelecommunicationsSupplyLineField.TelecommunicationsService, TelecommunicationsSupplyLineFieldMetaTelecommunicationsService]
])
