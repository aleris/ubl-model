import { EndorserParty } from './EndorserParty'
import { Identifier } from '../cbc/Identifier'
import { Signature } from './Signature'
import { Text } from '../cbc/Text'

/**
 * A class to describe an endorsement of a document.
 */
export interface Endorsement {
  /**
   * An identifier for this endorsement.
   * Identifier
   * Cardinality: 1
   */
  DocumentID: [Identifier]

  /**
   * The status of this endorsement.
   * Text
   * Cardinality: 1
   * Alternative business terms: Authentication Code
   */
  ApprovalStatus: [Text]

  /**
   * Remarks provided by the endorsing party.
   * Text
   * Cardinality: 0..n
   */
  Remarks: Array<Text> | undefined

  /**
   * The type of party providing this endorsement.
   * Endorser Party
   * Cardinality: 1
   */
  EndorserParty: [EndorserParty]

  /**
   * A signature applied to this endorsement.
   * Signature
   * Cardinality: 0..n
   */
  Signature: Array<Signature> | undefined
}
