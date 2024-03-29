import { Date } from '../cbc/Date'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a power of attorney.
 */
export interface PowerOfAttorney {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this power of attorney.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * The date on which this power of attorney was issued.
   * Date
   * Cardinality: 0..1
   */
  IssueDate?: Array<Date> | undefined

  /**
   * The time at which this power of attorney was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: Array<Time> | undefined

  /**
   * Text describing this power of attorney.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * The party notarizing this power of attorney.
   * Party
   * Cardinality: 0..1
   */
  NotaryParty?: Array<Party> | undefined

  /**
   * The party who acts as an agent or fiduciary for the principal and who holds this power of attorney on behalf of the
   * principal.
   * Party
   * Cardinality: 1
   */
  AgentParty: Array<Party>

  /**
   * An association to a WitnessParty.
   * Party
   * Cardinality: 0..n
   */
  WitnessParty?: Array<Party> | undefined

  /**
   * A reference to a mandate associated with this power of attorney.
   * Document Reference
   * Cardinality: 0..n
   */
  MandateDocumentReference?: Array<DocumentReference> | undefined
}
