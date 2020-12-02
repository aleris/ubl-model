import { Certificate } from './Certificate'
import { Code } from '../cbc/Code'
import { Period } from './Period'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define an authorization that as been issued
 */
export interface Authorization {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code defining the business purpose or scope of this authorization
   * Code
   * Cardinality: 0..1
   */
  PurposeCode?: Array<Code> | undefined

  /**
   * The purpose or scope of this authorization expressed as a text
   * Text
   * Cardinality: 0..n
   */
  Purpose?: Array<Text> | undefined

  /**
   * The period during which this authorization is valid
   * Period
   * Cardinality: 0..1
   */
  ValidityPeriod?: Array<Period> | undefined

  /**
   * One or more certificates related to this authorization
   * Certificate
   * Cardinality: 0..n
   */
  Certificate?: Array<Certificate> | undefined
}
