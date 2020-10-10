import { Certificate } from './Certificate'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { MessageDelivery } from './MessageDelivery'

/**
 * A class to describe a delivery channel.
 */
export interface DeliveryChannel {
  /**
   * An identifier for the network where messages are delivered (e.g. a business network).
   * Identifier
   * Cardinality: 0..1
   * Examples: OpenPEPPOL
   */
  NetworkID: [Identifier] | undefined

  /**
   * An identifier for a registered participant in the network (e.g. according a precise scheme such as IT:VAT, DK:CVR,
   * GLN).
   * Identifier
   * Cardinality: 0..1
   * Examples: 5790002221134
   */
  ParticipantID: [Identifier] | undefined

  /**
   * An indicator that the channel is a test channel (true).
   * Indicator
   * Cardinality: 0..1
   */
  TestIndicator: [Indicator] | undefined

  /**
   * A digital certificate associated with this delivery channel.
   * Certificate
   * Cardinality: 0..1
   */
  DigitalCertificate: [Certificate] | undefined

  /**
   * A digital message delivery associated with this delivery channel (aka routing information).
   * Message Delivery
   * Cardinality: 0..1
   */
  DigitalMessageDelivery: [MessageDelivery] | undefined
}
