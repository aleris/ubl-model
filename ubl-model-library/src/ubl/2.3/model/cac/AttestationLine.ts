import { Code } from '../cbc/Code'
import { CriterionItem } from './CriterionItem'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class describing an attestation line
 */
export interface AttestationLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this attestation line
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * A code describing the type of attestation line or statement
   * Code
   * Cardinality: 0..1
   */
  TypeCode?: Array<Code> | undefined

  /**
   * A textual description of this attestation line
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * Criterion items associated with this attestation line
   * Criterion Item
   * Cardinality: 0..n
   */
  CriterionItem?: Array<CriterionItem> | undefined

  /**
   * An attestation line subsidiary to this attestation line
   * Attestation Line
   * Cardinality: 0..n
   */
  SubAttestationLine?: Array<AttestationLine> | undefined
}
