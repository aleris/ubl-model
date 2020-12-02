import { UBLExtension } from './UBLExtension'

/**
 * A container for all extensions present in the document.
 */
export interface UBLExtensions {
  /**
   * A single extension for private use.
   * Cardinality: 1..n
   */
  UBLExtension: Array<UBLExtension>
}
