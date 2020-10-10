import { Code } from '../cbc/Code'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Language } from './Language'
import { Party } from './Party'
import { Text } from '../cbc/Text'

/**
 * A class to describe an item of evidentiary support for representations of capabilities or the ability to meet
 * tendering requirements, which an economic operator must provide for acceptance into a tendering process.
 */
export interface Evidence {
  /**
   * An identifier for this item of evidentiary support.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * A code signifying the type of evidence.
   * Code
   * Cardinality: 0..1
   */
  EvidenceTypeCode: [Code] | undefined

  /**
   * The textual description for this Evidence.
   * Text
   * Cardinality: 0..n
   */
  Description: Array<Text> | undefined

  /**
   * Information about a candidate statement that the contracting authority accepts as a sufficient response.
   * Text
   * Cardinality: 0..n
   */
  CandidateStatement: Array<Text> | undefined

  /**
   * A class to describe a party issuing an evidentiary document.
   * Party
   * Cardinality: 0..1
   */
  EvidenceIssuingParty: [Party] | undefined

  /**
   * A reference to the evidentiary document.
   * Document Reference
   * Cardinality: 0..1
   */
  DocumentReference: [DocumentReference] | undefined

  /**
   * Information about a required translation to be part of the response, i.e. the language.
   * Language
   * Cardinality: 0..1
   */
  Language: [Language] | undefined
}
