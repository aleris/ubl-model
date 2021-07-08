import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from './AllowanceChargeMeta'
import { AmountType } from '../cbc/AmountMeta'
import { ExchangeRateType } from './ExchangeRateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TaxTotalType } from './TaxTotalMeta'
import { TelecommunicationsServiceType } from './TelecommunicationsServiceMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TelecommunicationsSupplyLineFieldMetaID = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this telecommunications supply line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '1'
)

export const TelecommunicationsSupplyLineFieldMetaPhoneNumber = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.PhoneNumber,
  'PhoneNumber',
  'Phone Number',
  TextType.name,
  'The phone number used for this telecommunication supply line',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '12345678'
)

export const TelecommunicationsSupplyLineFieldMetaDescription = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.Description,
  'Description',
  'Description',
  TextType.name,
  'The description of the telecommunication supply line',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'Additional informations'
)

export const TelecommunicationsSupplyLineFieldMetaLineExtensionAmount = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.LineExtensionAmount,
  'LineExtensionAmount',
  'Line Extension Amount',
  AmountType.name,
  'An amount specifying the cost of this telecommunication line',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TelecommunicationsSupplyLineFieldMetaTaxInclusiveLineExtensionAmount = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.TaxInclusiveLineExtensionAmount,
  'TaxInclusiveLineExtensionAmount',
  'Tax Inclusive Line Extension Amount',
  AmountType.name,
  'The total amount for this telecommunications supply line, including all allowances, charges and taxes.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TelecommunicationsSupplyLineFieldMetaExchangeRate = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.ExchangeRate,
  'ExchangeRate',
  'Exchange Rate',
  ExchangeRateType.name,
  'Exchanges rates used to calculate the amount for this line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TelecommunicationsSupplyLineFieldMetaAllowanceCharge = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'An allowance or charge that applies to this telecommunication supply line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TelecommunicationsSupplyLineFieldMetaTaxTotal = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'A total amount of taxes of a particular kind applicable to this telecommunications supply line',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TelecommunicationsSupplyLineFieldMetaTelecommunicationsService = new FieldMeta<TelecommunicationsSupplyLineField>(
  TelecommunicationsSupplyLineField.TelecommunicationsService,
  'TelecommunicationsService',
  'Telecommunications Service',
  TelecommunicationsServiceType.name,
  'A telecommunications service (e.g., a telephone call).',
  FieldCardinality.Multi,
  TypeModule.cac,
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

export const TelecommunicationsSupplyLineType: Type<TelecommunicationsSupplyLineField> = {
  name: 'TelecommunicationsSupplyLine',
  label: 'Telecommunications Supply Line',
  module: TypeModule.cac,
  definition: 'A class that outlines the telecommunication supply in details',
  fields: TelecommunicationsSupplyLineFieldMap,
}
