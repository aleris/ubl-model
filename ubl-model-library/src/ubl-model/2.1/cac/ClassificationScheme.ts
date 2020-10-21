import { ClassificationCategory } from './ClassificationCategory'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'

/**
 * A class to define a classification scheme, such as a taxonomy for classifying goods or services.
 */
export interface ClassificationScheme {
  /**
   * An identifier for this classification scheme.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

  /**
   * A universally unique identifier for this classification scheme.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: [Identifier] | undefined

  /**
   * The date on which this classification scheme was last revised.
   * Date
   * Cardinality: 0..1
   */
  LastRevisionDate?: [Date] | undefined

  /**
   * The time at which this classification scheme was last revised.
   * Time
   * Cardinality: 0..1
   */
  LastRevisionTime?: [Time] | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * The name of this classification scheme.
   * Name
   * Cardinality: 0..1
   * Examples: UNSPSC
   */
  Name?: [Text] | undefined

  /**
   * Text describing this classification scheme.
   * Text
   * Cardinality: 0..n
   * Examples: an open, global multi-sector standard for classification of products and services
   */
  Description?: Array<Text> | undefined

  /**
   * An identifier for the agency that maintains this classification scheme.
   * Identifier
   * Cardinality: 0..1
   * Examples: Defaults to the UN/EDIFACT data element 3055 code list.
   */
  AgencyID?: [Identifier] | undefined

  /**
   * The name of the agency that maintains the classification scheme.
   * Text
   * Cardinality: 0..1
   */
  AgencyName?: [Text] | undefined

  /**
   * An identifier for the version of this classification scheme.
   * Identifier
   * Cardinality: 0..1
   */
  VersionID?: [Identifier] | undefined

  /**
   * The Uniform Resource Identifier (URI) of the documentation for this classification scheme.
   * Identifier
   * Cardinality: 0..1
   */
  URI?: [Identifier] | undefined

  /**
   * The Uniform Resource Identifier (URI) of this classification scheme.
   * Identifier
   * Cardinality: 0..1
   */
  SchemeURI?: [Identifier] | undefined

  /**
   * An identifier for the language of this classification scheme.
   * Identifier
   * Cardinality: 0..1
   */
  LanguageID?: [Identifier] | undefined

  /**
   * A description of a category within this classification scheme.
   * Classification Category
   * Cardinality: 1..n
   */
  ClassificationCategory: Array<ClassificationCategory>
}
