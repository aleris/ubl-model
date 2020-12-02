import { Code } from '../cbc/Code'
import { EvidenceSupplied } from './EvidenceSupplied'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a declaration by an economic operator of certain characteristics or capabilities in fulfilment of
 * requirements specified in a call for tenders.
 */
export interface Declaration {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The name of this declaration.
   * Name
   * Cardinality: 0..n
   */
  Name?: Array<Text> | undefined

  /**
   * A code signifying the type of this declaration.
   * Code
   * Cardinality: 0..1
   */
  DeclarationTypeCode?: Array<Code> | undefined

  /**
   * Text describing this declaration.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * The evidence supporting this declaration.
   * Evidence Supplied
   * Cardinality: 0..n
   */
  EvidenceSupplied?: Array<EvidenceSupplied> | undefined
}
