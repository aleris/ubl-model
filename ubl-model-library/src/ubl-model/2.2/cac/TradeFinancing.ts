import { Clause } from './Clause'
import { Code } from '../cbc/Code'
import { DocumentReference } from './DocumentReference'
import { FinancialAccount } from './FinancialAccount'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'

/**
 * A class to describe a trade financing instrument.
 */
export interface TradeFinancing {
  /**
   * An identifier for this trade financing instrument.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: [Identifier] | undefined

  /**
   * A code signifying the type of this financing instrument.
   * Code
   * Cardinality: 0..1
   * Examples: Factoring , Invoice Financing , Pre-shipment Financing , Letter of Credit , Irrevocable Letter of Credit
   * Examples: .
   */
  FinancingInstrumentCode?: [Code] | undefined

  /**
   * A reference to a contract document.
   * Document Reference
   * Cardinality: 0..1
   */
  ContractDocumentReference?: [DocumentReference] | undefined

  /**
   * A reference to a document associated with this trade financing instrument.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference?: Array<DocumentReference> | undefined

  /**
   * The financing party (bank or other enabled party).
   * Party
   * Cardinality: 1
   */
  FinancingParty: [Party]

  /**
   * An internal bank account used by the bank or its first agent to manage the line of credit granted to the financing
   * requester.
   * Financial Account
   * Cardinality: 0..1
   */
  FinancingFinancialAccount?: [FinancialAccount] | undefined

  /**
   * A clause applicable to this trade financing instrument.
   * Clause
   * Cardinality: 0..n
   */
  Clause?: Array<Clause> | undefined
}
