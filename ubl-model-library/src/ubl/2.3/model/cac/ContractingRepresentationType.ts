import { Code } from '../cbc/Code'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * The type of representation the party has acting for the Contracting party
 */
export interface ContractingRepresentationType {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code specifying the type of representation empowering the party to act on behalf of a third party
   * Code
   * Cardinality: 0..1
   * Examples: CPB, SP, ..
   */
  RepresentationTypeCode?: Array<Code> | undefined

  /**
   * The type of representation empowering the party to act on behalf of a third party, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: Central Purchasing Body, Service Provider, ...
   */
  RepresentationType?: Array<Text> | undefined
}
