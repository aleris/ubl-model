import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'

/**
 * A class to define a reference to a catalogue.
 */
export interface CatalogueReference {
  /**
   * An identifier for a specific catalogue.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

  /**
   * A universally unique identifier for a specific catalogue.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: [Identifier] | undefined

  /**
   * The date on which the catalogue was issued.
   * Date
   * Cardinality: 0..1
   */
  IssueDate?: [Date] | undefined

  /**
   * The time at which the catalogue was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: [Time] | undefined

  /**
   * The date on which the information in the catalogue was last revised.
   * Date
   * Cardinality: 0..1
   */
  RevisionDate?: [Date] | undefined

  /**
   * The time at which the information in the catalogue was last revised.
   * Time
   * Cardinality: 0..1
   */
  RevisionTime?: [Time] | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * Text describing the catalogue.
   * Text
   * Cardinality: 0..n
   * Examples: computer accessories for laptops
   */
  Description?: Array<Text> | undefined

  /**
   * An identifier for the current version of the catalogue.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1.1
   */
  VersionID?: [Identifier] | undefined

  /**
   * An identifier for the previous version of the catalogue that is superseded by this version.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1.0
   */
  PreviousVersionID?: [Identifier] | undefined
}
