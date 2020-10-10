import { Text } from '../cbc/Text'

/**
 * A class to define a name/value pair for a property of an inventory planning activity.
 */
export interface ActivityProperty {
  /**
   * The name of this activity property.
   * Name
   * Cardinality: 1
   */
  Name: [Text]

  /**
   * The value of this activity property.
   * Text
   * Cardinality: 1
   */
  Value: [Text]
}
