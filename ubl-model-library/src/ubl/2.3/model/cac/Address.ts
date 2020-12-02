import { AddressLine } from './AddressLine'
import { Code } from '../cbc/Code'
import { Country } from './Country'
import { Identifier } from '../cbc/Identifier'
import { LocationCoordinate } from './LocationCoordinate'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define common information related to an address.
 */
export interface Address {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this address within an agreed scheme of address identifiers.
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: DetailsKey
   */
  ID?: Array<Identifier> | undefined

  /**
   * A mutually agreed code signifying the type of this address.
   * Code
   * Cardinality: 0..1
   */
  AddressTypeCode?: Array<Code> | undefined

  /**
   * A mutually agreed code signifying the format of this address.
   * Code
   * Cardinality: 0..1
   */
  AddressFormatCode?: Array<Code> | undefined

  /**
   * A post office box number registered for postal delivery by a postal service provider.
   * Text
   * Cardinality: 0..1
   * Alternative business terms: PostBox, PO Box
   * Examples: 123
   */
  Postbox?: Array<Text> | undefined

  /**
   * An identifiable floor of a building.
   * Text
   * Cardinality: 0..1
   * Alternative business terms: SubPremiseNumber
   * Examples: 30
   */
  Floor?: Array<Text> | undefined

  /**
   * An identifiable room, suite, or apartment of a building.
   * Text
   * Cardinality: 0..1
   * Alternative business terms: SubPremiseNumber
   * Examples: Reception
   */
  Room?: Array<Text> | undefined

  /**
   * The name of the street, road, avenue, way, etc. to which the number of the building is attached.
   * Name
   * Cardinality: 0..1
   * Alternative business terms: Thoroughfare
   * Examples: Kwun Tong Road
   */
  StreetName?: Array<Text> | undefined

  /**
   * An additional street name used to further clarify the address.
   * Name
   * Cardinality: 0..1
   * Alternative business terms: Thoroughfare
   * Examples: Cnr Aberdeen Road
   */
  AdditionalStreetName?: Array<Text> | undefined

  /**
   * The name of the block (an area surrounded by streets and usually containing several buildings) in which this
   * address is located.
   * Name
   * Cardinality: 0..1
   * Examples: Seabird
   */
  BlockName?: Array<Text> | undefined

  /**
   * The name of a building.
   * Name
   * Cardinality: 0..1
   * Alternative business terms: BuildingName
   * Examples: Plot 421
   */
  BuildingName?: Array<Text> | undefined

  /**
   * The number of a building within the street.
   * Text
   * Cardinality: 0..1
   * Alternative business terms: PremiseNumber
   * Examples: 388
   */
  BuildingNumber?: Array<Text> | undefined

  /**
   * Text describing this address for clarification or specificity
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * The specific identifable location within a building where mail is delivered.
   * Text
   * Cardinality: 0..1
   * Alternative business terms: MailStop
   */
  InhouseMail?: Array<Text> | undefined

  /**
   * The department of the addressee.
   * Text
   * Cardinality: 0..1
   * Alternative business terms: Department
   * Examples: Accounts Payable
   */
  Department?: Array<Text> | undefined

  /**
   * The name, expressed as text, of a person or department in an organization to whose attention incoming mail is
   * directed; corresponds to the printed forms "for the attention of", "FAO", and ATTN:".
   * Text
   * Cardinality: 0..1
   */
  MarkAttention?: Array<Text> | undefined

  /**
   * The name, expressed as text, of a person or organization at this address into whose care incoming mail is
   * entrusted; corresponds to the printed forms "care of" and "c/o".
   * Text
   * Cardinality: 0..1
   */
  MarkCare?: Array<Text> | undefined

  /**
   * An identifier (e.g., a parcel number) for the piece of land associated with this address.
   * Text
   * Cardinality: 0..1
   */
  PlotIdentification?: Array<Text> | undefined

  /**
   * The name of the subdivision of a city, town, or village in which this address is located, such as the name of its
   * district or borough.
   * Name
   * Cardinality: 0..1
   */
  CitySubdivisionName?: Array<Text> | undefined

  /**
   * The name of a city, town, or village.
   * Name
   * Cardinality: 0..1
   * Alternative business terms: LocalityName
   * Examples: Hong Kong
   */
  CityName?: Array<Text> | undefined

  /**
   * The postal identifier for this address according to the relevant national postal service, such as a ZIP code or
   * Post Code.
   * Text
   * Cardinality: 0..1
   * Alternative business terms: PostalCodeNumber
   * Examples: SW11 4EW 2500 GG
   */
  PostalZone?: Array<Text> | undefined

  /**
   * The political or administrative division of a country in which this address is located, such as the name of its
   * county, province, or state, expressed as text.
   * Text
   * Cardinality: 0..1
   * Alternative business terms: AdministrativeArea, State, Country, Shire, Canton
   * Examples: Florida , Tamilnadu
   */
  CountrySubentity?: Array<Text> | undefined

  /**
   * The political or administrative division of a country in which this address is located, such as a county, province,
   * or state, expressed as a code (typically nationally agreed).
   * Code
   * Cardinality: 0..1
   * Alternative business terms: AdministrativeAreaCode, State Code
   */
  CountrySubentityCode?: Array<Code> | undefined

  /**
   * The recognized geographic or economic region or group of countries in which this address is located.
   * Text
   * Cardinality: 0..1
   * Alternative business terms: LocalityName, Economic Zone
   * Examples: European Union
   */
  Region?: Array<Text> | undefined

  /**
   * The district or geographical division of a country or region in which this address is located.
   * Text
   * Cardinality: 0..1
   * Alternative business terms: LocalityName, Area
   * Examples: East Coast
   */
  District?: Array<Text> | undefined

  /**
   * The time zone in which this address is located (as an offset from Universal Coordinated Time (UTC)) at the time of
   * exchange.
   * Text
   * Cardinality: 0..1
   * Examples: +8:00 -3:00
   */
  TimezoneOffset?: Array<Text> | undefined

  /**
   * An unstructured address line.
   * Address Line
   * Cardinality: 0..n
   */
  AddressLine?: Array<AddressLine> | undefined

  /**
   * The country in which this address is situated.
   * Country
   * Cardinality: 0..1
   */
  Country?: Array<Country> | undefined

  /**
   * The geographical coordinates of this address.
   * Location Coordinate
   * Cardinality: 0..n
   */
  LocationCoordinate?: Array<LocationCoordinate> | undefined
}
