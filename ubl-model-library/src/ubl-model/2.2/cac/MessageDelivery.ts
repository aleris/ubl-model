import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'

/**
 * A class to describe how a message is delivered (routed).
 */
export interface MessageDelivery {
  /**
   * An identifier for the protocol to be used within this message delivery.
   * Identifier
   * Cardinality: 0..1
   * Examples: AS2, ebMS2, AS4, WS-RM
   */
  ProtocolID?: [Identifier] | undefined

  /**
   * A code signifying the type of envelope to be used within this message delivery (e.g. OASIS BDX Business Document
   * Envelope).
   * Code
   * Cardinality: 0..1
   * Examples: BDE
   */
  EnvelopeTypeCode?: [Code] | undefined

  /**
   * The Uniform Resource Identifier (URI) of the access point (e.g. an HTTP URL including the port).
   * Identifier
   * Cardinality: 0..1
   * Examples: https://services.enterprise.com/participant-id/rx
   */
  EndpointURI?: [Identifier] | undefined
}
