/**
 * A set of finite-length sequences of binary octets.
 */
export interface BinaryObject {
  /**
   * Binary Object
   */
  BinaryObjectContent: string

  /**
   * The format of the binary content.
   * Text
   */
  BinaryObjectFormat: string | undefined

  /**
   * The mime type of the binary object.
   * Code
   */
  BinaryObjectMimeCode: string | undefined

  /**
   * Specifies the decoding algorithm of the binary object.
   * Code
   */
  BinaryObjectEncodingCode: string | undefined

  /**
   * The character set of the binary object if the mime type is text.
   * Code
   */
  BinaryObjectCharacterSetCode: string | undefined

  /**
   * The Uniform Resource Identifier that identifies where the binary object is located.
   * Identifier
   */
  BinaryObjectUri: string | undefined

  /**
   * The filename of the binary object.
   * Text
   */
  BinaryObjectFilename: string | undefined
}
