import { Contact } from './Contact'
import { Indicator } from '../cbc/Indicator'
import { Party } from './Party'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a participant party.
 */
export interface ParticipantParty {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An indicator that this party is playing the role of the initiator within a transaction (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  InitiatingPartyIndicator?: Array<Indicator> | undefined

  /**
   * An indicator that this party is a private entity (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  PrivatePartyIndicator?: Array<Indicator> | undefined

  /**
   * An indicator that this party is a public (governmental) entity (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  PublicPartyIndicator?: Array<Indicator> | undefined

  /**
   * An indicator that this party is a service provider (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  ServiceProviderPartyIndicator?: Array<Indicator> | undefined

  /**
   * The participant party itself.
   * Party
   * Cardinality: 1
   */
  Party: Array<Party>

  /**
   * A legal contact associated to this participant for sending legal notices.
   * Contact
   * Cardinality: 0..1
   */
  LegalContact?: Array<Contact> | undefined

  /**
   * A technical contact associated to this participant.
   * Contact
   * Cardinality: 0..1
   */
  TechnicalContact?: Array<Contact> | undefined

  /**
   * A support contact associated to this participant.
   * Contact
   * Cardinality: 0..1
   */
  SupportContact?: Array<Contact> | undefined

  /**
   * A commercial contact associated to this participant.
   * Contact
   * Cardinality: 0..1
   */
  CommercialContact?: Array<Contact> | undefined
}
