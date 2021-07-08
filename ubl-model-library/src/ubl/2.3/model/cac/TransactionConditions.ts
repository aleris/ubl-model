import { Code } from '../cbc/Code'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe purchasing, sales, or payment conditions.
 */
export interface TransactionConditions {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for conditions of the transaction, typically purchase/sales conditions.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * A code signifying a type of action relating to sales or payment conditions.
   * Code
   * Cardinality: 0..1
   */
  ActionCode?: Array<Code> | undefined

  /**
   * Text describing the transaction conditions.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * A document associated with these transaction conditions.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference?: Array<DocumentReference> | undefined
}
