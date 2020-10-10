import { Code } from '../cbc/Code'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { LineItem } from './LineItem'
import { Text } from '../cbc/Text'

/**
 * A class to define a line in a Request for Quotation.
 */
export interface RequestForQuotationLine {
  /**
   * An identifier for this line in the request for quotation.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * A universally unique identifier for this line in the request for quotation.
   * Identifier
   * Cardinality: 0..1
   */
  UUID: [Identifier] | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note: Array<Text> | undefined

  /**
   * An indication whether this line is optional (true) or not (false) for purposes of this request for quotation.
   * Indicator
   * Cardinality: 0..1
   */
  OptionalLineItemIndicator: [Indicator] | undefined

  /**
   * A code signifying the level of confidentiality of this request for quotation line.
   * Code
   * Cardinality: 0..1
   */
  PrivacyCode: [Code] | undefined

  /**
   * A code signifying the security classification of this request for quotation line.
   * Code
   * Cardinality: 0..1
   */
  SecurityClassificationCode: [Code] | undefined

  /**
   * A document associated with this request for quotation line.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference: Array<DocumentReference> | undefined

  /**
   * A description of the item for which a quotation is requested.
   * Line Item
   * Cardinality: 1
   */
  LineItem: [LineItem]
}
