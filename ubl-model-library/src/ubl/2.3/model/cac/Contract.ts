import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Delivery } from './Delivery'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Period } from './Period'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a contract.
 */
export interface Contract {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this contract.
   * Identifier
   * Cardinality: 0..1
   * Examples: CC23
   */
  ID?: Array<Identifier> | undefined

  /**
   * The date on which this contract was issued.
   * Date
   * Cardinality: 0..1
   */
  IssueDate?: Array<Date> | undefined

  /**
   * The time at which this contract was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: Array<Time> | undefined

  /**
   * In a transportation contract, the deadline date by which the services referred to in the transport execution plan
   * have to be booked. For example, if this service is a carrier service scheduled for Wednesday 16 February 2011 at 10
   * a.m. CET, the nomination date might be Tuesday15 February 2011.
   * Date
   * Cardinality: 0..1
   */
  NominationDate?: Array<Date> | undefined

  /**
   * In a transportation contract, the deadline time by which the services referred to in the transport execution plan
   * have to be booked. For example, if this service is a carrier service scheduled for Wednesday 16 February 2011 at 10
   * a.m. CET, the nomination date might be Tuesday15 February 2011 and the nomination time 4 p.m. at the latest.
   * Time
   * Cardinality: 0..1
   */
  NominationTime?: Array<Time> | undefined

  /**
   * The type of this contract, expressed as a code, such as "Cost plus award fee" and "Cost plus fixed fee" from
   * UNCEFACT Contract Type code list.
   * Code
   * Cardinality: 0..1
   */
  ContractTypeCode?: Array<Code> | undefined

  /**
   * The type of this contract, expressed as text, such as "Cost plus award fee" and "Cost plus fixed fee" from UNCEFACT
   * Contract Type code list.
   * Text
   * Cardinality: 0..1
   */
  ContractType?: Array<Text> | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   * Alternative business terms: Remarks
   */
  Note?: Array<Text> | undefined

  /**
   * An identifier for the current version of this contract.
   * Identifier
   * Cardinality: 0..1
   */
  VersionID?: Array<Identifier> | undefined

  /**
   * The main reason for modifying the contract expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  ModificationReasonCode?: Array<Code> | undefined

  /**
   * Text describing the main reason for modifying the contract
   * Text
   * Cardinality: 0..n
   */
  ModificationReasonDescription?: Array<Text> | undefined

  /**
   * Text describing this contract.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * The period during which this contract is valid.
   * Period
   * Cardinality: 0..1
   */
  ValidityPeriod?: Array<Period> | undefined

  /**
   * A reference to a contract document.
   * Document Reference
   * Cardinality: 0..n
   */
  ContractDocumentReference?: Array<DocumentReference> | undefined

  /**
   * In a transportation contract, the period required to book the services specified in the contract before the
   * services can begin.
   * Period
   * Cardinality: 0..1
   */
  NominationPeriod?: Array<Period> | undefined

  /**
   * In a transportation contract, the delivery of the services required to book the services specified in the contract.
   * Delivery
   * Cardinality: 0..1
   */
  ContractualDelivery?: Array<Delivery> | undefined
}
