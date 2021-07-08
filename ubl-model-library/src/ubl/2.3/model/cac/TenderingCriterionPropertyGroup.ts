import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { TenderingCriterionProperty } from './TenderingCriterionProperty'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a group of tendering criteria
 */
export interface TenderingCriterionPropertyGroup {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the group of criteria.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * The name of the group.
   * Name
   * Cardinality: 0..1
   */
  Name?: Array<Text> | undefined

  /**
   * The textual description for this group.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * A code signifying the type of the property group
   * Code
   * Cardinality: 0..1
   */
  PropertyGroupTypeCode?: Array<Code> | undefined

  /**
   * An indication that this group of criteria have been fulfilled.
   * Indicator
   * Cardinality: 0..1
   */
  FulfilmentIndicator?: Array<Indicator> | undefined

  /**
   * A code signifying how this group of criteria have been fulfilled.
   * Code
   * Cardinality: 0..1
   */
  FulfilmentIndicatorTypeCode?: Array<Code> | undefined

  /**
   * All the criteria properties comprising the tendering criterion.
   * Tendering Criterion Property
   * Cardinality: 1..n
   */
  TenderingCriterionProperty: Array<TenderingCriterionProperty>

  /**
   * Subsidiary tendering criteria groups comprising this tendering criterion.
   * Tendering Criterion Property Group
   * Cardinality: 0..n
   */
  SubsidiaryTenderingCriterionPropertyGroup?: Array<TenderingCriterionPropertyGroup> | undefined
}
