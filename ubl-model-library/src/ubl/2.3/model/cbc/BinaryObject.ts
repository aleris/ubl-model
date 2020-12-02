/**
 * A set of finite-length sequences of binary octets.
 */
export interface BinaryObject {
  /**
   * Binary Object
   */
  _: string

  /**
   * The format of the binary content.
   * Text
   */
  format?: string | undefined

  /**
   * The mime type of the binary object.
   * Code
   */
  mimeCode?: string | undefined

  /**
   * Specifies the decoding algorithm of the binary object.
   * Code
   */
  encodingCode?: string | undefined

  /**
   * The character set of the binary object if the mime type is text.
   * Code
   */
  characterSetCode?: string | undefined

  /**
   * The Uniform Resource Identifier that identifies where the binary object is located.
   * Identifier
   */
  uri?: string | undefined

  /**
   * The filename of the binary object.
   * Text
   */
  filename?: string | undefined
}
