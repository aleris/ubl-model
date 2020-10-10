import { Address } from './Address'
import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { LocationCoordinate } from './LocationCoordinate'
import { Period } from './Period'
import { Text } from '../cbc/Text'

/**
 * A class to describe a location.
 */
export interface Location {
  /**
   * An identifier for this location, e.g., the EAN Location Number, GLN.
   * Identifier
   * Cardinality: 0..1
   * Examples: 5790002221134
   */
  ID: [Identifier] | undefined

  /**
   * Text describing this location.
   * Text
   * Cardinality: 0..n
   */
  Description: Array<Text> | undefined

  /**
   * Free-form text describing the physical conditions of the location.
   * Text
   * Cardinality: 0..n
   */
  Conditions: Array<Text> | undefined

  /**
   * A territorial division of a country, such as a county or state, expressed as text.
   * Text
   * Cardinality: 0..1
   * Alternative business terms: AdministrativeArea, State, Country, Shire, Canton
   * Examples: Florida , Tamilnadu 
   */
  CountrySubentity: [Text] | undefined

  /**
   * A territorial division of a country, such as a county or state, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: AdministrativeAreaCode, State Code
   */
  CountrySubentityCode: [Code] | undefined

  /**
   * A code signifying the type of location.
   * Code
   * Cardinality: 0..1
   */
  LocationTypeCode: [Code] | undefined

  /**
   * The Uniform Resource Identifier (URI) of a document providing information about this location.
   * Identifier
   * Cardinality: 0..1
   */
  InformationURI: [Identifier] | undefined

  /**
   * The name of this location.
   * Name
   * Cardinality: 0..1
   * Examples: winter 2005 collection 
   */
  Name: [Text] | undefined

  /**
   * A period during which this location can be used (e.g., for delivery).
   * Period
   * Cardinality: 0..n
   */
  ValidityPeriod: Array<Period> | undefined

  /**
   * The address of this location.
   * Address
   * Cardinality: 0..1
   */
  Address: [Address] | undefined

  /**
   * A location subsidiary to this location.
   * Location
   * Cardinality: 0..n
   */
  SubsidiaryLocation: Array<Location> | undefined

  /**
   * The geographical coordinates of this location.
   * Location Coordinate
   * Cardinality: 0..n
   */
  LocationCoordinate: Array<LocationCoordinate> | undefined
}
