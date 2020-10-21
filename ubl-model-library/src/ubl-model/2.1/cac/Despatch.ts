import { Address } from './Address'
import { Contact } from './Contact'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Location } from './Location'
import { Party } from './Party'
import { Period } from './Period'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'

/**
 * A class to describe the despatching of goods (their pickup for delivery).
 */
export interface Despatch {
  /**
   * An identifier for this despatch event.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: [Identifier] | undefined

  /**
   * The despatch (pickup) date requested, normally by the buyer.
   * Date
   * Cardinality: 0..1
   */
  RequestedDespatchDate?: [Date] | undefined

  /**
   * The despatch (pickup) time requested, normally by the buyer.
   * Time
   * Cardinality: 0..1
   */
  RequestedDespatchTime?: [Time] | undefined

  /**
   * The estimated despatch (pickup) date.
   * Date
   * Cardinality: 0..1
   */
  EstimatedDespatchDate?: [Date] | undefined

  /**
   * The estimated despatch (pickup) time.
   * Time
   * Cardinality: 0..1
   */
  EstimatedDespatchTime?: [Time] | undefined

  /**
   * The actual despatch (pickup) date.
   * Date
   * Cardinality: 0..1
   */
  ActualDespatchDate?: [Date] | undefined

  /**
   * The actual despatch (pickup) time.
   * Time
   * Cardinality: 0..1
   */
  ActualDespatchTime?: [Time] | undefined

  /**
   * The date guaranteed for the despatch (pickup).
   * Date
   * Cardinality: 0..1
   */
  GuaranteedDespatchDate?: [Date] | undefined

  /**
   * The time guaranteed for the despatch (pickup).
   * Time
   * Cardinality: 0..1
   */
  GuaranteedDespatchTime?: [Time] | undefined

  /**
   * An identifier for the release of the despatch used as security control or cargo control (pick-up).
   * Identifier
   * Cardinality: 0..1
   */
  ReleaseID?: [Identifier] | undefined

  /**
   * Text describing any special instructions applying to the despatch (pickup).
   * Text
   * Cardinality: 0..n
   */
  Instructions?: Array<Text> | undefined

  /**
   * The address of the despatch (pickup).
   * Address
   * Cardinality: 0..1
   */
  DespatchAddress?: [Address] | undefined

  /**
   * The location of the despatch (pickup).
   * Location
   * Cardinality: 0..1
   */
  DespatchLocation?: [Location] | undefined

  /**
   * The party despatching the goods.
   * Party
   * Cardinality: 0..1
   */
  DespatchParty?: [Party] | undefined

  /**
   * The party carrying the goods.
   * Party
   * Cardinality: 0..1
   */
  CarrierParty?: [Party] | undefined

  /**
   * A party to be notified of this despatch (pickup).
   * Party
   * Cardinality: 0..n
   */
  NotifyParty?: Array<Party> | undefined

  /**
   * The primary contact for this despatch (pickup).
   * Contact
   * Cardinality: 0..1
   */
  Contact?: [Contact] | undefined

  /**
   * The period estimated for the despatch (pickup) of goods.
   * Period
   * Cardinality: 0..1
   */
  EstimatedDespatchPeriod?: [Period] | undefined

  /**
   * The period requested for the despatch (pickup) of goods.
   * Period
   * Cardinality: 0..1
   */
  RequestedDespatchPeriod?: [Period] | undefined
}
