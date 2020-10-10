import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'

/**
 * A class to describe an external object, such as a document stored at a remote location.
 */
export interface ExternalReference {
  /**
   * The Uniform Resource Identifier (URI) that identifies the external object as an Internet resource.
   * Identifier
   * Cardinality: 0..1
   */
  URI: [Identifier] | undefined

  /**
   * A hash value for the externally stored object.
   * Text
   * Cardinality: 0..1
   */
  DocumentHash: [Text] | undefined

  /**
   * A hash algorithm used to calculate the hash value of the externally stored object.
   * Text
   * Cardinality: 0..1
   */
  HashAlgorithmMethod: [Text] | undefined

  /**
   * The date on which availability of the resource can no longer be relied upon.
   * Date
   * Cardinality: 0..1
   */
  ExpiryDate: [Date] | undefined

  /**
   * The time after which availability of the resource can no longer be relied upon.
   * Time
   * Cardinality: 0..1
   */
  ExpiryTime: [Time] | undefined

  /**
   * A code signifying the mime type of the external object.
   * Code
   * Cardinality: 0..1
   */
  MimeCode: [Code] | undefined

  /**
   * A code signifying the format of the external object.
   * Code
   * Cardinality: 0..1
   */
  FormatCode: [Code] | undefined

  /**
   * A code signifying the encoding/decoding algorithm used with the external object.
   * Code
   * Cardinality: 0..1
   */
  EncodingCode: [Code] | undefined

  /**
   * A code signifying the character set of an external document.
   * Code
   * Cardinality: 0..1
   */
  CharacterSetCode: [Code] | undefined

  /**
   * The file name of the external object.
   * Name
   * Cardinality: 0..1
   */
  FileName: [Text] | undefined

  /**
   * Text describing the external object.
   * Text
   * Cardinality: 0..n
   * Examples: computer accessories for laptops 
   */
  Description: Array<Text> | undefined
}
