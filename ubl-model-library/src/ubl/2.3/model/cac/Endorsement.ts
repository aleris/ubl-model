import { EndorserParty } from './EndorserParty'
import { Identifier } from '../cbc/Identifier'
import { Signature } from './Signature'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe an endorsement of a document.
 */
export interface Endorsement {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this endorsement.
   * Identifier
   * Cardinality: 1
   */
  DocumentID: Array<Identifier>

  /**
   * The status of this endorsement.
   * Text
   * Cardinality: 1
   * Alternative business terms: Authentication Code
   */
  ApprovalStatus: Array<Text>

  /**
   * Remarks provided by the endorsing party.
   * Text
   * Cardinality: 0..n
   */
  Remarks?: Array<Text> | undefined

  /**
   * The type of party providing this endorsement.
   * Endorser Party
   * Cardinality: 1
   */
  EndorserParty: Array<EndorserParty>

  /**
   * A signature applied to this endorsement.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined
}
