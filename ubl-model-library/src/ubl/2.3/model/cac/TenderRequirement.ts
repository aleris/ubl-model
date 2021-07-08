import { DocumentReference } from './DocumentReference'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A template for a required document in a tendering process.
 */
export interface TenderRequirement {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A name of this tender requirement.
   * Name
   * Cardinality: 1
   */
  Name: Array<Text>

  /**
   * Text describing this tender requirement.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * A reference to the template for a required document.
   * Document Reference
   * Cardinality: 0..1
   */
  TemplateDocumentReference?: Array<DocumentReference> | undefined
}
