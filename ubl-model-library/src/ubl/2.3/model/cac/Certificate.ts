import { Code } from '../cbc/Code'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'
import { Signature } from './Signature'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a certificate applied to the item. Certificated can be a requirement to sell goods or services in a
 * jurisdiction.
 */
export interface Certificate {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this certificate.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * The type of this certificate, expressed as a code. The type specifies what array it belongs to, e.g..
   * Environmental, security, health improvement etc.
   * Code
   * Cardinality: 1
   */
  CertificateTypeCode: Array<Code>

  /**
   * The type of this certificate, expressed as a code. The type specifies what array it belongs to, e.g..
   * Environmental, security, health improvement etc.
   * Text
   * Cardinality: 1
   */
  CertificateType: Array<Text>

  /**
   * Remarks by the applicant for this certificate.
   * Text
   * Cardinality: 0..n
   */
  Remarks?: Array<Text> | undefined

  /**
   * The authorized organization that issued this certificate, the provider of the certificate.
   * Party
   * Cardinality: 1
   */
  IssuerParty: Array<Party>

  /**
   * A reference to a document relevant to this certificate or an application for this certificate.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference?: Array<DocumentReference> | undefined

  /**
   * A signature applied to this certificate.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined
}
