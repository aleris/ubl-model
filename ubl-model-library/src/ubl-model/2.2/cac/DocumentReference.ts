import { Attachment } from './Attachment'
import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Party } from './Party'
import { Period } from './Period'
import { ResultOfVerification } from './ResultOfVerification'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'

/**
 * A class to define a reference to a document.
 */
export interface DocumentReference {
  /**
   * An identifier for the referenced document.
   * Identifier
   * Cardinality: 1
   * Examples: PO-001 3333-44-123 
   */
  ID: [Identifier]

  /**
   * An indicator that the referenced document is a copy (true) or the original (false).
   * Indicator
   * Cardinality: 0..1
   */
  CopyIndicator: [Indicator] | undefined

  /**
   * A universally unique identifier for this document reference.
   * Identifier
   * Cardinality: 0..1
   */
  UUID: [Identifier] | undefined

  /**
   * The date, assigned by the sender of the referenced document, on which the document was issued.
   * Date
   * Cardinality: 0..1
   */
  IssueDate: [Date] | undefined

  /**
   * The time, assigned by the sender of the referenced document, at which the document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime: [Time] | undefined

  /**
   * The type of document being referenced, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  DocumentTypeCode: [Code] | undefined

  /**
   * The type of document being referenced, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  DocumentType: [Text] | undefined

  /**
   * A reference to another place in the same XML document instance in which DocumentReference appears.
   * Text
   * Cardinality: 0..n
   */
  XPath: Array<Text> | undefined

  /**
   * An identifier for the language used in the referenced document.
   * Identifier
   * Cardinality: 0..1
   */
  LanguageID: [Identifier] | undefined

  /**
   * A code signifying the locale in which the language in the referenced document is used.
   * Code
   * Cardinality: 0..1
   */
  LocaleCode: [Code] | undefined

  /**
   * An identifier for the current version of the referenced document.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1.1 
   */
  VersionID: [Identifier] | undefined

  /**
   * A code signifying the status of the reference document with respect to its original state.
   * Code
   * Cardinality: 0..1
   */
  DocumentStatusCode: [Code] | undefined

  /**
   * Text describing the referenced document.
   * Text
   * Cardinality: 0..n
   * Examples: stock no longer provided 
   */
  DocumentDescription: Array<Text> | undefined

  /**
   * The referenced document as an attachment to the document from which it is referenced.
   * Attachment
   * Cardinality: 0..1
   */
  Attachment: [Attachment] | undefined

  /**
   * The period for which this document reference is valid.
   * Period
   * Cardinality: 0..1
   */
  ValidityPeriod: [Period] | undefined

  /**
   * The party who issued the referenced document.
   * Party
   * Cardinality: 0..1
   */
  IssuerParty: [Party] | undefined

  /**
   * The result of an attempt to verify a signature associated with the referenced document.
   * Result Of Verification
   * Cardinality: 0..1
   */
  ResultOfVerification: [ResultOfVerification] | undefined
}
