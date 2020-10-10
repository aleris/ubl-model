import { Code } from '../cbc/Code'
import { Text } from '../cbc/Text'

/**
 * A class to describe a means of communication.
 */
export interface Communication {
  /**
   * The method of communication, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: Phone Fax Email
   */
  ChannelCode: [Code] | undefined

  /**
   * The method of communication, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: Skype
   */
  Channel: [Text] | undefined

  /**
   * An identifying value (phone number, email address, etc.) for this channel of communication
   * Text
   * Cardinality: 0..1
   * Examples: +44 1 2345 6789 president@whitehouse.com 
   */
  Value: [Text] | undefined
}
