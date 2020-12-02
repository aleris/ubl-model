import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a name/value pair for a property of an inventory planning activity.
 */
export interface ActivityProperty {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The name of this activity property.
   * Name
   * Cardinality: 1
   */
  Name: Array<Text>

  /**
   * The value of this activity property.
   * Text
   * Cardinality: 1
   */
  Value: Array<Text>
}
