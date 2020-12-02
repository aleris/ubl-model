import { Code } from '../cbc/Code'
import { Dimension } from './Dimension'
import { Identifier } from '../cbc/Identifier'
import { ItemPropertyGroup } from './ItemPropertyGroup'
import { ItemPropertyRange } from './ItemPropertyRange'
import { Period } from './Period'
import { PropertyIdentification } from './PropertyIdentification'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a specific property of an item.
 */
export interface ItemProperty {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this property of an item.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * The name of this item property.
   * Name
   * Cardinality: 1
   * Examples: Energy Rating , Collar Size , Fat Content
   */
  Name: Array<Text>

  /**
   * The name of this item property, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  NameCode?: Array<Code> | undefined

  /**
   * The method of testing the value of this item property.
   * Text
   * Cardinality: 0..1
   * Examples: 100 watts , 15 European , 20% +/- 5%
   */
  TestMethod?: Array<Text> | undefined

  /**
   * The value of this item property, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: 100 watts , 15 European , 20% +/- 5%
   */
  Value?: Array<Text> | undefined

  /**
   * The value of this item property, expressed as a quantity.
   * Quantity
   * Cardinality: 0..1
   */
  ValueQuantity?: Array<Quantity> | undefined

  /**
   * Text qualifying the value of the property.
   * Text
   * Cardinality: 0..n
   */
  ValueQualifier?: Array<Text> | undefined

  /**
   * A code signifying the importance of this property in using it to describe a related Item.
   * Code
   * Cardinality: 0..1
   */
  ImportanceCode?: Array<Code> | undefined

  /**
   * The value expressed as a text in case the property is a value in a list. For example, a colour.
   * Text
   * Cardinality: 0..n
   */
  ListValue?: Array<Text> | undefined

  /**
   * The period during which this item property is valid.
   * Period
   * Cardinality: 0..1
   */
  UsabilityPeriod?: Array<Period> | undefined

  /**
   * A description of the property group to which this item property belongs.
   * Item Property Group
   * Cardinality: 0..n
   */
  ItemPropertyGroup?: Array<ItemPropertyGroup> | undefined

  /**
   * The range of values for the dimensions of this property.
   * Dimension
   * Cardinality: 0..1
   */
  RangeDimension?: Array<Dimension> | undefined

  /**
   * A range of values for this item property.
   * Item Property Range
   * Cardinality: 0..1
   */
  ItemPropertyRange?: Array<ItemPropertyRange> | undefined

  /**
   * Identifying information for this property, assigned according to a standard system.
   * Property Identification
   * Cardinality: 0..1
   */
  StandardPropertyIdentification?: Array<PropertyIdentification> | undefined

  /**
   * A property subsidiary to this property.
   * Item Property
   * Cardinality: 0..n
   */
  SubItemProperty?: Array<ItemProperty> | undefined
}
