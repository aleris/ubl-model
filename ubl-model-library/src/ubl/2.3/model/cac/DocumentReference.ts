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
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define a reference to a document.
 */
export interface DocumentReference {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the referenced document.
   * Identifier
   * Cardinality: 1
   * Examples: PO-001 3333-44-123
   */
  ID: Array<Identifier>

  /**
   * An indicator that the referenced document is a copy (true) or the original (false).
   * Indicator
   * Cardinality: 0..1
   */
  CopyIndicator?: Array<Indicator> | undefined

  /**
   * A universally unique identifier for this document reference.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: Array<Identifier> | undefined

  /**
   * The date, assigned by the sender of the referenced document, on which the document was issued.
   * Date
   * Cardinality: 0..1
   */
  IssueDate?: Array<Date> | undefined

  /**
   * The time, assigned by the sender of the referenced document, at which the document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: Array<Time> | undefined

  /**
   * The type of document being referenced, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  DocumentTypeCode?: Array<Code> | undefined

  /**
   * The type of document being referenced, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  DocumentType?: Array<Text> | undefined

  /**
   * An unambiguous location within the bounding document or the document referenced by the parent DocumentReference,
   * expressed as an XPath
   * Text
   * Cardinality: 0..n
   */
  XPath?: Array<Text> | undefined

  /**
   * A pointer to a location within the document being referenced
   * Text
   * Cardinality: 0..1
   */
  ReferencedDocumentInternalAddress?: Array<Text> | undefined

  /**
   * An identifier for the language used in the referenced document.
   * Identifier
   * Cardinality: 0..1
   */
  LanguageID?: Array<Identifier> | undefined

  /**
   * A code signifying the locale in which the language in the referenced document is used.
   * Code
   * Cardinality: 0..1
   */
  LocaleCode?: Array<Code> | undefined

  /**
   * An identifier for the current version of the referenced document.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1.1
   */
  VersionID?: Array<Identifier> | undefined

  /**
   * A code signifying the status of the reference document with respect to its original state.
   * Code
   * Cardinality: 0..1
   */
  DocumentStatusCode?: Array<Code> | undefined

  /**
   * Text describing the referenced document.
   * Text
   * Cardinality: 0..n
   * Examples: stock no longer provided
   */
  DocumentDescription?: Array<Text> | undefined

  /**
   * The referenced document as an attachment to the document from which it is referenced.
   * Attachment
   * Cardinality: 0..1
   */
  Attachment?: Array<Attachment> | undefined

  /**
   * The period for which this document reference is valid.
   * Period
   * Cardinality: 0..1
   */
  ValidityPeriod?: Array<Period> | undefined

  /**
   * The party who issued the referenced document.
   * Party
   * Cardinality: 0..1
   */
  IssuerParty?: Array<Party> | undefined

  /**
   * The result of an attempt to verify a signature associated with the referenced document.
   * Result Of Verification
   * Cardinality: 0..1
   */
  ResultOfVerification?: Array<ResultOfVerification> | undefined
}
