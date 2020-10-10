import { Contact } from './Contact'
import { Indicator } from '../cbc/Indicator'
import { Party } from './Party'

/**
 * A class to describe a participant party.
 */
export interface ParticipantParty {
  /**
   * An indicator that this party is playing the role of the initiator within a transaction (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  InitiatingPartyIndicator: [Indicator] | undefined

  /**
   * An indicator that this party is a private entity (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  PrivatePartyIndicator: [Indicator] | undefined

  /**
   * An indicator that this party is a public (governmental) entity (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  PublicPartyIndicator: [Indicator] | undefined

  /**
   * An indicator that this party is a service provider (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  ServiceProviderPartyIndicator: [Indicator] | undefined

  /**
   * The participant party itself.
   * Party
   * Cardinality: 1
   */
  Party: [Party]

  /**
   * A legal contact associated to this participant for sending legal notices.
   * Contact
   * Cardinality: 0..1
   */
  LegalContact: [Contact] | undefined

  /**
   * A technical contact associated to this participant.
   * Contact
   * Cardinality: 0..1
   */
  TechnicalContact: [Contact] | undefined

  /**
   * A support contact associated to this participant.
   * Contact
   * Cardinality: 0..1
   */
  SupportContact: [Contact] | undefined

  /**
   * A commercial contact associated to this participant.
   * Contact
   * Cardinality: 0..1
   */
  CommercialContact: [Contact] | undefined
}
