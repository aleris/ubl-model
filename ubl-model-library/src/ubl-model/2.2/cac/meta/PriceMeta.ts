import { FieldMeta } from '../../FieldMeta'

export enum PriceField {
  PriceAmount = 'PriceAmount',
  BaseQuantity = 'BaseQuantity',
  PriceChangeReason = 'PriceChangeReason',
  PriceTypeCode = 'PriceTypeCode',
  PriceType = 'PriceType',
  OrderableUnitFactorRate = 'OrderableUnitFactorRate',
  ValidityPeriod = 'ValidityPeriod',
  PriceList = 'PriceList',
  AllowanceCharge = 'AllowanceCharge',
  PricingExchangeRate = 'PricingExchangeRate'
}

export const PriceFieldMetaPriceAmount = new FieldMeta<PriceField>(
  PriceField.PriceAmount,
  'PriceAmount',
  'Price Amount',
  'Amount',
  'The amount of the price.',
  '1',
  'unit price',
  '23.45'
)

export const PriceFieldMetaBaseQuantity = new FieldMeta<PriceField>(
  PriceField.BaseQuantity,
  'BaseQuantity',
  'Quantity',
  'Quantity',
  'The quantity at which this price applies.',
  '0..1',
  undefined,
  undefined
)

export const PriceFieldMetaPriceChangeReason = new FieldMeta<PriceField>(
  PriceField.PriceChangeReason,
  'PriceChangeReason',
  'Reason',
  'Text',
  'A reason for a price change.',
  '0..n',
  undefined,
  'Clearance of old stock , New contract applies'
)

export const PriceFieldMetaPriceTypeCode = new FieldMeta<PriceField>(
  PriceField.PriceTypeCode,
  'PriceTypeCode',
  'Price Type Code',
  'Code',
  'The type of price, expressed as a code.',
  '0..1',
  undefined,
  undefined
)

export const PriceFieldMetaPriceType = new FieldMeta<PriceField>(
  PriceField.PriceType,
  'PriceType',
  'Price Type',
  'Text',
  'The type of price, expressed as text.',
  '0..1',
  undefined,
  'retail, wholesale, discount, contract'
)

export const PriceFieldMetaOrderableUnitFactorRate = new FieldMeta<PriceField>(
  PriceField.OrderableUnitFactorRate,
  'OrderableUnitFactorRate',
  'Orderable Unit Factor',
  'Numeric',
  'The factor by which the base price unit can be converted to the orderable unit.',
  '0..1',
  undefined,
  'Nails are priced by weight but ordered by quantity. So this would say how many nails per kilo'
)

export const PriceFieldMetaValidityPeriod = new FieldMeta<PriceField>(
  PriceField.ValidityPeriod,
  'ValidityPeriod',
  'Period',
  'Period',
  'A period during which this price is valid.',
  '0..n',
  undefined,
  undefined
)

export const PriceFieldMetaPriceList = new FieldMeta<PriceField>(
  PriceField.PriceList,
  'PriceList',
  'Price List',
  'PriceList',
  'Information about a price list applicable to this price.',
  '0..1',
  undefined,
  undefined
)

export const PriceFieldMetaAllowanceCharge = new FieldMeta<PriceField>(
  PriceField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'An allowance or charge associated with this price.',
  '0..n',
  undefined,
  undefined
)

export const PriceFieldMetaPricingExchangeRate = new FieldMeta<PriceField>(
  PriceField.PricingExchangeRate,
  'PricingExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate applicable to this price, if it differs from the exchange rate applicable to the document as a whole.',
  '0..1',
  undefined,
  undefined
)

export class PriceFieldMeta {
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
}

export const PriceFieldMap = new Map([
  [PriceField.PriceAmount, PriceFieldMetaPriceAmount],
  [PriceField.BaseQuantity, PriceFieldMetaBaseQuantity],
  [PriceField.PriceChangeReason, PriceFieldMetaPriceChangeReason],
  [PriceField.PriceTypeCode, PriceFieldMetaPriceTypeCode],
  [PriceField.PriceType, PriceFieldMetaPriceType],
  [PriceField.OrderableUnitFactorRate, PriceFieldMetaOrderableUnitFactorRate],
  [PriceField.ValidityPeriod, PriceFieldMetaValidityPeriod],
  [PriceField.PriceList, PriceFieldMetaPriceList],
  [PriceField.AllowanceCharge, PriceFieldMetaAllowanceCharge],
  [PriceField.PricingExchangeRate, PriceFieldMetaPricingExchangeRate]
])
