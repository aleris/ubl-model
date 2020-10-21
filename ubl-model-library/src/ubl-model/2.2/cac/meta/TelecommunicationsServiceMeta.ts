import { FieldMeta } from '../../FieldMeta'

export enum TelecommunicationsServiceField {
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

export const TelecommunicationsServiceFieldMetaID = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this telecommunications service.',
  '0..1',
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaCallDate = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.CallDate,
  'CallDate',
  'Date',
  'Date',
  'In the case of a telephone call, the date of the call.',
  '1',
  undefined,
  '2008-01-01'
)

export const TelecommunicationsServiceFieldMetaCallTime = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.CallTime,
  'CallTime',
  'Time',
  'Time',
  'In the case of a telephone call, the time of the call.',
  '1',
  undefined,
  '00:01:00'
)

export const TelecommunicationsServiceFieldMetaServiceNumberCalled = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.ServiceNumberCalled,
  'ServiceNumberCalled',
  'Service Number Called',
  'Text',
  'In the case of a telephone call, the phone number called.',
  '1',
  undefined,
  '12345679'
)

export const TelecommunicationsServiceFieldMetaTelecommunicationsServiceCategory = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.TelecommunicationsServiceCategory,
  'TelecommunicationsServiceCategory',
  'Telecommunications Service Category',
  'Text',
  'The telecommunications category, expressed as text.',
  '0..1',
  undefined,
  'Subscription'
)

export const TelecommunicationsServiceFieldMetaTelecommunicationsServiceCategoryCode = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.TelecommunicationsServiceCategoryCode,
  'TelecommunicationsServiceCategoryCode',
  'Telecommunications Service Category Code',
  'Code',
  'The telecommunications category, expressed as a code.',
  '0..1',
  undefined,
  'Subscription'
)

export const TelecommunicationsServiceFieldMetaMovieTitle = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.MovieTitle,
  'MovieTitle',
  'Movie Title',
  'Text',
  'The title of a movie delivered via this telecommunications service.',
  '0..1',
  undefined,
  'The Matrix'
)

export const TelecommunicationsServiceFieldMetaRoamingPartnerName = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.RoamingPartnerName,
  'RoamingPartnerName',
  'Roaming Partner Name',
  'Text',
  'Statement of the roaming partner name.',
  '0..1',
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaPayPerView = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.PayPerView,
  'PayPerView',
  'Pay Per View',
  'Text',
  'A pay-per-view delivered via this telecommunications service.',
  '0..1',
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaQuantity = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The number of calls.',
  '0..1',
  undefined,
  '5761'
)

export const TelecommunicationsServiceFieldMetaTelecommunicationsServiceCall = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.TelecommunicationsServiceCall,
  'TelecommunicationsServiceCall',
  'Telecommunications Service Call',
  'Text',
  'The telecommunications call described as a text',
  '0..1',
  undefined,
  'CallAttempt'
)

export const TelecommunicationsServiceFieldMetaTelecommunicationsServiceCallCode = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.TelecommunicationsServiceCallCode,
  'TelecommunicationsServiceCallCode',
  'Telecommunications Service Call Code',
  'Code',
  'The telecommunications call described as a code',
  '0..1',
  undefined,
  'CallAttempt'
)

export const TelecommunicationsServiceFieldMetaCallBaseAmount = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.CallBaseAmount,
  'CallBaseAmount',
  'Amount',
  'Amount',
  'The amount to be payed as the base for one call',
  '0..1',
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaCallExtensionAmount = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.CallExtensionAmount,
  'CallExtensionAmount',
  'Amount',
  'Amount',
  'The amount to be payed for the call',
  '0..1',
  undefined,
  '542.44'
)

export const TelecommunicationsServiceFieldMetaPrice = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.Price,
  'Price',
  'Price',
  'Price',
  'The price for using the telecommunication service',
  '0..1',
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaCountry = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.Country,
  'Country',
  'Country',
  'Country',
  'The country to which the service is provided. In case of a telephone call it is the country where the receiver is located.',
  '0..1',
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaExchangeRate = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.ExchangeRate,
  'ExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'A exchanges rates used in the pricing e.g.. when phone calls has crossed border lines.',
  '0..n',
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaAllowanceCharge = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'An allowance or charge that applies to the UtilityStatement as a whole.',
  '0..n',
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaTaxTotal = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'A total amount of taxes of a particular kind applicable to this telecommunications service.',
  '0..n',
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaCallDuty = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.CallDuty,
  'CallDuty',
  'Duty',
  'Duty',
  'In the case of a telephone call, a duty on this call.',
  '0..n',
  undefined,
  undefined
)

export const TelecommunicationsServiceFieldMetaTimeDuty = new FieldMeta<TelecommunicationsServiceField>(
  TelecommunicationsServiceField.TimeDuty,
  'TimeDuty',
  'Duty',
  'Duty',
  'A duty on a consumption of time.',
  '0..n',
  undefined,
  undefined
)

export class TelecommunicationsServiceFieldMeta {
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
