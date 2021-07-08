import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from './AllowanceChargeMeta'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { CountryType } from './CountryMeta'
import { DateType } from '../cbc/DateMeta'
import { DutyType } from './DutyMeta'
import { ExchangeRateType } from './ExchangeRateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PriceType } from './PriceMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TaxTotalType } from './TaxTotalMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TelecommunicationsServiceField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  CallDate = 'CallDate',
  CallTime = 'CallTime',
  ServiceNumberCalled = 'ServiceNumberCalled',
  TelecommunicationsServiceCategory = 'TelecommunicationsServiceCategory',
  TelecommunicationsServiceCategoryCode = 'TelecommunicationsServiceCategoryCode',
  MovieTitle = 'MovieTitle',
  RoamingPartnerName = 'RoamingPartnerName',
  PayPerView = 'PayPerView',
  Quantity = 'Quantity',
  TelecommunicationsServiceCall = 'TelecommunicationsServiceCall',
  TelecommunicationsServiceCallCode = 'TelecommunicationsServiceCallCode',
  CallBaseAmount = 'CallBaseAmount',
  CallExtensionAmount = 'CallExtensionAmount',
  Price = 'Price',
  Country = 'Country',
  ExchangeRate = 'ExchangeRate',
  AllowanceCharge = 'AllowanceCharge',
  TaxTotal = 'TaxTotal',
  CallDuty = 'CallDuty',
  TimeDuty = 'TimeDuty'
}

export const TelecommunicationsServiceFieldMetaUBLExtensions = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaID = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this telecommunications service.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaCallDate = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.CallDate,
  'CallDate',
  'Call Date',
  DateType.name,
  'In the case of a telephone call, the date of the call.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '2008-01-01'
)

export const TelecommunicationsServiceFieldMetaCallTime = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.CallTime,
  'CallTime',
  'Call Time',
  TimeType.name,
  'In the case of a telephone call, the time of the call.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '00:01:00'
)

export const TelecommunicationsServiceFieldMetaServiceNumberCalled = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.ServiceNumberCalled,
  'ServiceNumberCalled',
  'Service Number Called',
  TextType.name,
  'In the case of a telephone call, the phone number called.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '12345679'
)

export const TelecommunicationsServiceFieldMetaTelecommunicationsServiceCategory = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.TelecommunicationsServiceCategory,
  'TelecommunicationsServiceCategory',
  'Telecommunications Service Category',
  TextType.name,
  'The telecommunications category, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Subscription'
)

export const TelecommunicationsServiceFieldMetaTelecommunicationsServiceCategoryCode = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.TelecommunicationsServiceCategoryCode,
  'TelecommunicationsServiceCategoryCode',
  'Telecommunications Service Category Code',
  CodeType.name,
  'The telecommunications category, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Subscription'
)

export const TelecommunicationsServiceFieldMetaMovieTitle = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.MovieTitle,
  'MovieTitle',
  'Movie Title',
  TextType.name,
  'The title of a movie delivered via this telecommunications service.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'The Matrix'
)

export const TelecommunicationsServiceFieldMetaRoamingPartnerName = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.RoamingPartnerName,
  'RoamingPartnerName',
  'Roaming Partner Name',
  TextType.name,
  'Statement of the roaming partner name.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaPayPerView = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.PayPerView,
  'PayPerView',
  'Pay Per View',
  TextType.name,
  'A pay-per-view delivered via this telecommunications service.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaQuantity = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.Quantity,
  'Quantity',
  'Quantity',
  QuantityType.name,
  'The number of calls.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '5761'
)

export const TelecommunicationsServiceFieldMetaTelecommunicationsServiceCall = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.TelecommunicationsServiceCall,
  'TelecommunicationsServiceCall',
  'Telecommunications Service Call',
  TextType.name,
  'The telecommunications call described as a text',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'CallAttempt'
)

export const TelecommunicationsServiceFieldMetaTelecommunicationsServiceCallCode = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.TelecommunicationsServiceCallCode,
  'TelecommunicationsServiceCallCode',
  'Telecommunications Service Call Code',
  CodeType.name,
  'The telecommunications call described as a code',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'CallAttempt'
)

export const TelecommunicationsServiceFieldMetaCallBaseAmount = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.CallBaseAmount,
  'CallBaseAmount',
  'Call Base Amount',
  AmountType.name,
  'The amount to be payed as the base for one call',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaCallExtensionAmount = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.CallExtensionAmount,
  'CallExtensionAmount',
  'Call Extension Amount',
  AmountType.name,
  'The amount to be payed for the call',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '542.44'
)

export const TelecommunicationsServiceFieldMetaPrice = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.Price,
  'Price',
  'Price',
  PriceType.name,
  'The price for using the telecommunication service',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaCountry = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.Country,
  'Country',
  'Country',
  CountryType.name,
  'The country to which the service is provided. In case of a telephone call it is the country where the receiver is located.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaExchangeRate = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.ExchangeRate,
  'ExchangeRate',
  'Exchange Rate',
  ExchangeRateType.name,
  'A exchanges rates used in the pricing e.g.. when phone calls has crossed border lines.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaAllowanceCharge = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'An allowance or charge that applies to the UtilityStatement as a whole.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaTaxTotal = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'A total amount of taxes of a particular kind applicable to this telecommunications service.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaCallDuty = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.CallDuty,
  'CallDuty',
  'Call Duty',
  DutyType.name,
  'In the case of a telephone call, a duty on this call.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaTimeDuty = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.TimeDuty,
  'TimeDuty',
  'Time Duty',
  DutyType.name,
  'A duty on a consumption of time.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TelecommunicationsServiceFieldMeta {
  public static readonly UBLExtensions = TelecommunicationsServiceFieldMetaUBLExtensions
  public static readonly ID = TelecommunicationsServiceFieldMetaID
  public static readonly CallDate = TelecommunicationsServiceFieldMetaCallDate
  public static readonly CallTime = TelecommunicationsServiceFieldMetaCallTime
  public static readonly ServiceNumberCalled = TelecommunicationsServiceFieldMetaServiceNumberCalled
  public static readonly TelecommunicationsServiceCategory = TelecommunicationsServiceFieldMetaTelecommunicationsServiceCategory
  public static readonly TelecommunicationsServiceCategoryCode = TelecommunicationsServiceFieldMetaTelecommunicationsServiceCategoryCode
  public static readonly MovieTitle = TelecommunicationsServiceFieldMetaMovieTitle
  public static readonly RoamingPartnerName = TelecommunicationsServiceFieldMetaRoamingPartnerName
  public static readonly PayPerView = TelecommunicationsServiceFieldMetaPayPerView
  public static readonly Quantity = TelecommunicationsServiceFieldMetaQuantity
  public static readonly TelecommunicationsServiceCall = TelecommunicationsServiceFieldMetaTelecommunicationsServiceCall
  public static readonly TelecommunicationsServiceCallCode = TelecommunicationsServiceFieldMetaTelecommunicationsServiceCallCode
  public static readonly CallBaseAmount = TelecommunicationsServiceFieldMetaCallBaseAmount
  public static readonly CallExtensionAmount = TelecommunicationsServiceFieldMetaCallExtensionAmount
  public static readonly Price = TelecommunicationsServiceFieldMetaPrice
  public static readonly Country = TelecommunicationsServiceFieldMetaCountry
  public static readonly ExchangeRate = TelecommunicationsServiceFieldMetaExchangeRate
  public static readonly AllowanceCharge = TelecommunicationsServiceFieldMetaAllowanceCharge
  public static readonly TaxTotal = TelecommunicationsServiceFieldMetaTaxTotal
  public static readonly CallDuty = TelecommunicationsServiceFieldMetaCallDuty
  public static readonly TimeDuty = TelecommunicationsServiceFieldMetaTimeDuty
}

export const TelecommunicationsServiceFieldMap = new Map([
  [TelecommunicationsServiceField.UBLExtensions, TelecommunicationsServiceFieldMetaUBLExtensions],
  [TelecommunicationsServiceField.ID, TelecommunicationsServiceFieldMetaID],
  [TelecommunicationsServiceField.CallDate, TelecommunicationsServiceFieldMetaCallDate],
  [TelecommunicationsServiceField.CallTime, TelecommunicationsServiceFieldMetaCallTime],
  [TelecommunicationsServiceField.ServiceNumberCalled, TelecommunicationsServiceFieldMetaServiceNumberCalled],
  [TelecommunicationsServiceField.TelecommunicationsServiceCategory, TelecommunicationsServiceFieldMetaTelecommunicationsServiceCategory],
  [TelecommunicationsServiceField.TelecommunicationsServiceCategoryCode, TelecommunicationsServiceFieldMetaTelecommunicationsServiceCategoryCode],
  [TelecommunicationsServiceField.MovieTitle, TelecommunicationsServiceFieldMetaMovieTitle],
  [TelecommunicationsServiceField.RoamingPartnerName, TelecommunicationsServiceFieldMetaRoamingPartnerName],
  [TelecommunicationsServiceField.PayPerView, TelecommunicationsServiceFieldMetaPayPerView],
  [TelecommunicationsServiceField.Quantity, TelecommunicationsServiceFieldMetaQuantity],
  [TelecommunicationsServiceField.TelecommunicationsServiceCall, TelecommunicationsServiceFieldMetaTelecommunicationsServiceCall],
  [TelecommunicationsServiceField.TelecommunicationsServiceCallCode, TelecommunicationsServiceFieldMetaTelecommunicationsServiceCallCode],
  [TelecommunicationsServiceField.CallBaseAmount, TelecommunicationsServiceFieldMetaCallBaseAmount],
  [TelecommunicationsServiceField.CallExtensionAmount, TelecommunicationsServiceFieldMetaCallExtensionAmount],
  [TelecommunicationsServiceField.Price, TelecommunicationsServiceFieldMetaPrice],
  [TelecommunicationsServiceField.Country, TelecommunicationsServiceFieldMetaCountry],
  [TelecommunicationsServiceField.ExchangeRate, TelecommunicationsServiceFieldMetaExchangeRate],
  [TelecommunicationsServiceField.AllowanceCharge, TelecommunicationsServiceFieldMetaAllowanceCharge],
  [TelecommunicationsServiceField.TaxTotal, TelecommunicationsServiceFieldMetaTaxTotal],
  [TelecommunicationsServiceField.CallDuty, TelecommunicationsServiceFieldMetaCallDuty],
  [TelecommunicationsServiceField.TimeDuty, TelecommunicationsServiceFieldMetaTimeDuty]
])

export const TelecommunicationsServiceType: Type<TelecommunicationsServiceField> = {
  name: 'TelecommunicationsService',
  label: 'Telecommunications Service',
  module: TypeModule.cac,
  definition: 'A class to describe a telecommunications service (e.g., a telephone call or a video on demand service).',
  fields: TelecommunicationsServiceFieldMap,
}
