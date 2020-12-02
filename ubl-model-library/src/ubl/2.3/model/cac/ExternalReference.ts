import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe an external object, such as a document stored at a remote location.
 */
export interface ExternalReference {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The Uniform Resource Identifier (URI) that identifies the external object as an Internet resource.
   * Identifier
   * Cardinality: 0..1
   */
  URI?: Array<Identifier> | undefined

  /**
   * A hash value for the externally stored object.
   * Text
   * Cardinality: 0..1
   */
  DocumentHash?: Array<Text> | undefined

  /**
   * A hash algorithm used to calculate the hash value of the externally stored object.
   * Text
   * Cardinality: 0..1
   */
  HashAlgorithmMethod?: Array<Text> | undefined

  /**
   * The date on which availability of the resource can no longer be relied upon.
   * Date
   * Cardinality: 0..1
   */
  ExpiryDate?: Array<Date> | undefined

  /**
   * The time after which availability of the resource can no longer be relied upon.
   * Time
   * Cardinality: 0..1
   */
  ExpiryTime?: Array<Time> | undefined

  /**
   * A code signifying the mime type of the external object.
   * Code
   * Cardinality: 0..1
   */
  MimeCode?: Array<Code> | undefined

  /**
   * A code signifying the format of the external object.
   * Code
   * Cardinality: 0..1
   */
  FormatCode?: Array<Code> | undefined

  /**
   * A code signifying the encoding/decoding algorithm used with the external object.
   * Code
   * Cardinality: 0..1
   */
  EncodingCode?: Array<Code> | undefined

  /**
   * A code signifying the character set of an external document.
   * Code
   * Cardinality: 0..1
   */
  CharacterSetCode?: Array<Code> | undefined

  /**
   * The file name of the external object.
   * Name
   * Cardinality: 0..1
   */
  FileName?: Array<Text> | undefined

  /**
   * Text describing the external object.
   * Text
   * Cardinality: 0..n
   * Examples: computer accessories for laptops
   */
  Description?: Array<Text> | undefined
}
