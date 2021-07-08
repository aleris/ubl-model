import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from './AllowanceChargeMeta'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { ExchangeRateType } from './ExchangeRateMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PeriodType } from './PeriodMeta'
import { PriceListType } from './PriceListMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PriceField {
  UBLExtensions = 'UBLExtensions',
  PriceAmount = 'PriceAmount',
  BaseQuantity = 'BaseQuantity',
  PriceChangeReason = 'PriceChangeReason',
  PriceTypeCode = 'PriceTypeCode',
  PriceType = 'PriceType',
  OrderableUnitFactorRate = 'OrderableUnitFactorRate',
  ValidityPeriod = 'ValidityPeriod',
  PriceList = 'PriceList',
  AllowanceCharge = 'AllowanceCharge',
  PricingExchangeRate = 'PricingExchangeRate',
  AlternativeCurrencyPrice = 'AlternativeCurrencyPrice'
}

export const PriceFieldMetaUBLExtensions = new FieldMeta<PriceField>(
  PriceField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PriceFieldMetaPriceAmount = new FieldMeta<PriceField>(
  PriceField.PriceAmount,
  'PriceAmount',
  'Price Amount',
  AmountType.name,
  'The amount of the price.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'unit price',
  '23.45'
)

export const PriceFieldMetaBaseQuantity = new FieldMeta<PriceField>(
  PriceField.BaseQuantity,
  'BaseQuantity',
  'Base Quantity',
  QuantityType.name,
  'The quantity at which this price applies.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PriceFieldMetaPriceChangeReason = new FieldMeta<PriceField>(
  PriceField.PriceChangeReason,
  'PriceChangeReason',
  'Price Change Reason',
  TextType.name,
  'A reason for a price change.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'Clearance of old stock , New contract applies'
)

export const PriceFieldMetaPriceTypeCode = new FieldMeta<PriceField>(
  PriceField.PriceTypeCode,
  'PriceTypeCode',
  'Price Type Code',
  CodeType.name,
  'The type of price, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PriceFieldMetaPriceType = new FieldMeta<PriceField>(
  PriceField.PriceType,
  'PriceType',
  'Price Type',
  TextType.name,
  'The type of price, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'retail, wholesale, discount, contract'
)

export const PriceFieldMetaOrderableUnitFactorRate = new FieldMeta<PriceField>(
  PriceField.OrderableUnitFactorRate,
  'OrderableUnitFactorRate',
  'Orderable Unit Factor',
  NumericType.name,
  'The factor by which the base price unit can be converted to the orderable unit.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Nails are priced by weight but ordered by quantity. So this would say how many nails per kilo'
)

export const PriceFieldMetaValidityPeriod = new FieldMeta<PriceField>(
  PriceField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'A period during which this price is valid.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PriceFieldMetaPriceList = new FieldMeta<PriceField>(
  PriceField.PriceList,
  'PriceList',
  'Price List',
  PriceListType.name,
  'Information about a price list applicable to this price.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PriceFieldMetaAllowanceCharge = new FieldMeta<PriceField>(
  PriceField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'An allowance or charge associated with this price.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PriceFieldMetaPricingExchangeRate = new FieldMeta<PriceField>(
  PriceField.PricingExchangeRate,
  'PricingExchangeRate',
  'Pricing Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate applicable to this price, if it differs from the exchange rate applicable to the document as a whole.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PriceFieldMetaAlternativeCurrencyPrice = new FieldMeta<PriceField>(
  PriceField.AlternativeCurrencyPrice,
  'AlternativeCurrencyPrice',
  'Alternative Currency Price',
  PriceType.name,
  'The price expressed in an alternative currency',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class PriceFieldMeta {
  public static readonly UBLExtensions = PriceFieldMetaUBLExtensions
  public static readonly PriceAmount = PriceFieldMetaPriceAmount
  public static readonly BaseQuantity = PriceFieldMetaBaseQuantity
  public static readonly PriceChangeReason = PriceFieldMetaPriceChangeReason
  public static readonly PriceTypeCode = PriceFieldMetaPriceTypeCode
  public static readonly PriceType = PriceFieldMetaPriceType
  public static readonly OrderableUnitFactorRate = PriceFieldMetaOrderableUnitFactorRate
  public static readonly ValidityPeriod = PriceFieldMetaValidityPeriod
  public static readonly PriceList = PriceFieldMetaPriceList
  public static readonly AllowanceCharge = PriceFieldMetaAllowanceCharge
  public static readonly PricingExchangeRate = PriceFieldMetaPricingExchangeRate
  public static readonly AlternativeCurrencyPrice = PriceFieldMetaAlternativeCurrencyPrice
}

export const PriceFieldMap = new Map([
  [PriceField.UBLExtensions, PriceFieldMetaUBLExtensions],
  [PriceField.PriceAmount, PriceFieldMetaPriceAmount],
  [PriceField.BaseQuantity, PriceFieldMetaBaseQuantity],
  [PriceField.PriceChangeReason, PriceFieldMetaPriceChangeReason],
  [PriceField.PriceTypeCode, PriceFieldMetaPriceTypeCode],
  [PriceField.PriceType, PriceFieldMetaPriceType],
  [PriceField.OrderableUnitFactorRate, PriceFieldMetaOrderableUnitFactorRate],
  [PriceField.ValidityPeriod, PriceFieldMetaValidityPeriod],
  [PriceField.PriceList, PriceFieldMetaPriceList],
  [PriceField.AllowanceCharge, PriceFieldMetaAllowanceCharge],
  [PriceField.PricingExchangeRate, PriceFieldMetaPricingExchangeRate],
  [PriceField.AlternativeCurrencyPrice, PriceFieldMetaAlternativeCurrencyPrice]
])

export const PriceType: Type<PriceField> = {
  name: 'Price',
  label: 'Price',
  module: TypeModule.cac,
  definition: 'A class to describe a price, expressed in a data structure containing multiple properties (compare with UnstructuredPrice).',
  fields: PriceFieldMap,
}
