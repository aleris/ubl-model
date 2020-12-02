import { AllowanceCharge } from './AllowanceCharge'
import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Country } from './Country'
import { Date } from '../cbc/Date'
import { Duty } from './Duty'
import { ExchangeRate } from './ExchangeRate'
import { Identifier } from '../cbc/Identifier'
import { Price } from './Price'
import { Quantity } from '../cbc/Quantity'
import { TaxTotal } from './TaxTotal'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a telecommunications service (e.g., a telephone call or a video on demand service).
 */
export interface TelecommunicationsService {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this telecommunications service.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * In the case of a telephone call, the date of the call.
   * Date
   * Cardinality: 1
   * Examples: 2008-01-01
   */
  CallDate: Array<Date>

  /**
   * In the case of a telephone call, the time of the call.
   * Time
   * Cardinality: 1
   * Examples: 00:01:00
   */
  CallTime: Array<Time>

  /**
   * In the case of a telephone call, the phone number called.
   * Text
   * Cardinality: 1
   * Examples: 12345679
   */
  ServiceNumberCalled: Array<Text>

  /**
   * The telecommunications category, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: Subscription
   */
  TelecommunicationsServiceCategory?: Array<Text> | undefined

  /**
   * The telecommunications category, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: Subscription
   */
  TelecommunicationsServiceCategoryCode?: Array<Code> | undefined

  /**
   * The title of a movie delivered via this telecommunications service.
   * Text
   * Cardinality: 0..1
   * Examples: The Matrix
   */
  MovieTitle?: Array<Text> | undefined

  /**
   * Statement of the roaming partner name.
   * Name
   * Cardinality: 0..1
   */
  RoamingPartnerName?: Array<Text> | undefined

  /**
   * A pay-per-view delivered via this telecommunications service.
   * Text
   * Cardinality: 0..1
   */
  PayPerView?: Array<Text> | undefined

  /**
   * The number of calls.
   * Quantity
   * Cardinality: 0..1
   * Examples: 5761
   */
  Quantity?: Array<Quantity> | undefined

  /**
   * The telecommunications call described as a text
   * Text
   * Cardinality: 0..1
   * Examples: CallAttempt
   */
  TelecommunicationsServiceCall?: Array<Text> | undefined

  /**
   * The telecommunications call described as a code
   * Code
   * Cardinality: 0..1
   * Examples: CallAttempt
   */
  TelecommunicationsServiceCallCode?: Array<Code> | undefined

  /**
   * The amount to be payed as the base for one call
   * Amount
   * Cardinality: 0..1
   */
  CallBaseAmount?: Array<Amount> | undefined

  /**
   * The amount to be payed for the call
   * Amount
   * Cardinality: 0..1
   * Examples: 542.44
   */
  CallExtensionAmount?: Array<Amount> | undefined

  /**
   * The price for using the telecommunication service
   * Price
   * Cardinality: 0..1
   */
  Price?: Array<Price> | undefined

  /**
   * The country to which the service is provided. In case of a telephone call it is the country where the receiver is
   * located.
   * Country
   * Cardinality: 0..1
   */
  Country?: Array<Country> | undefined

  /**
   * A exchanges rates used in the pricing e.g.. when phone calls has crossed border lines.
   * Exchange Rate
   * Cardinality: 0..n
   */
  ExchangeRate?: Array<ExchangeRate> | undefined

  /**
   * An allowance or charge that applies to the UtilityStatement as a whole.
   * Allowance Charge
   * Cardinality: 0..n
   */
  AllowanceCharge?: Array<AllowanceCharge> | undefined

  /**
   * A total amount of taxes of a particular kind applicable to this telecommunications service.
   * Tax Total
   * Cardinality: 0..n
   */
  TaxTotal?: Array<TaxTotal> | undefined

  /**
   * In the case of a telephone call, a duty on this call.
   * Duty
   * Cardinality: 0..n
   */
  CallDuty?: Array<Duty> | undefined

  /**
   * A duty on a consumption of time.
   * Duty
   * Cardinality: 0..n
   */
  TimeDuty?: Array<Duty> | undefined
}
