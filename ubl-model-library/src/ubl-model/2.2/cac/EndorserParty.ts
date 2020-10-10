import { Code } from '../cbc/Code'
import { Contact } from './Contact'
import { Numeric } from '../cbc/Numeric'
import { Party } from './Party'

/**
 * A class to describe the party endorsing a document.
 */
export interface EndorserParty {
  /**
   * A code specifying the role of the party providing the endorsement (e.g., issuer, embassy, insurance, etc.).
   * Code
   * Cardinality: 1
   */
  RoleCode: [Code]

  /**
   * A number indicating the order of the endorsement provided by this party in the sequence in which endorsements are
   * to be applied.
   * Numeric
   * Cardinality: 1
   */
  SequenceNumeric: [Numeric]

  /**
   * The party endorsing the application.
   * Party
   * Cardinality: 1
   */
  Party: [Party]

  /**
   * The individual representing the exporter who signs the Certificate of Origin application before submitting it to
   * the issuer party.
   * Contact
   * Cardinality: 1
   */
  SignatoryContact: [Contact]
}
