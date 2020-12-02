import { Code } from '../cbc/Code'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a means of communication.
 */
export interface Communication {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The method of communication, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: Phone Fax Email
   */
  ChannelCode?: Array<Code> | undefined

  /**
   * The method of communication, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: Skype
   */
  Channel?: Array<Text> | undefined

  /**
   * An identifying value (phone number, email address, etc.) for this channel of communication
   * Text
   * Cardinality: 0..1
   * Examples: +44 1 2345 6789 president@whitehouse.com
   */
  Value?: Array<Text> | undefined
}
