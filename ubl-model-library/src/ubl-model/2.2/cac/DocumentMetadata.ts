import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'

/**
 * A class to describe the metadata of a specific business document based on any document format (e.g. UBL, EDIFACT,
 * ...).
 */
export interface DocumentMetadata {
  /**
   * An identifier for the document.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: [Identifier] | undefined

  /**
   * An identifier for the document format (e.g. standard business vocabularies).
   * Identifier
   * Cardinality: 1
   * Examples: UBL, ISO20022, EDIFACT
   */
  FormatID: [Identifier]

  /**
   * An identifier for a precise version of a document format.
   * Identifier
   * Cardinality: 1
   * Examples: 2.2
   */
  VersionID: [Identifier]

  /**
   * The Uniform Resource Identifier (URI) of a schema definition for the business document (e.g. a namespace URI for
   * XML schemas, a message ID for non-xml legacy documents).
   * Identifier
   * Cardinality: 0..1
   * Examples: urn:oasis:names:specification:ubl:schema:xsd:Invoice-2, INVOIC
   */
  SchemaURI?: [Identifier] | undefined

  /**
   * The type of document, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  DocumentTypeCode?: [Code] | undefined
}
