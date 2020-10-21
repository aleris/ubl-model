import { BillingReferenceLine } from './BillingReferenceLine'
import { DocumentReference } from './DocumentReference'

/**
 * A class to define a reference to a billing document.
 */
export interface BillingReference {
  /**
   * A reference to an invoice.
   * Document Reference
   * Cardinality: 0..1
   */
  InvoiceDocumentReference?: [DocumentReference] | undefined

  /**
   * A reference to a self billed invoice.
   * Document Reference
   * Cardinality: 0..1
   */
  SelfBilledInvoiceDocumentReference?: [DocumentReference] | undefined

  /**
   * A reference to a credit note.
   * Document Reference
   * Cardinality: 0..1
   */
  CreditNoteDocumentReference?: [DocumentReference] | undefined

  /**
   * A reference to a self billed credit note.
   * Document Reference
   * Cardinality: 0..1
   */
  SelfBilledCreditNoteDocumentReference?: [DocumentReference] | undefined

  /**
   * A reference to a debit note.
   * Document Reference
   * Cardinality: 0..1
   */
  DebitNoteDocumentReference?: [DocumentReference] | undefined

  /**
   * A reference to a billing reminder.
   * Document Reference
   * Cardinality: 0..1
   */
  ReminderDocumentReference?: [DocumentReference] | undefined

  /**
   * A reference to an additional document.
   * Document Reference
   * Cardinality: 0..1
   */
  AdditionalDocumentReference?: [DocumentReference] | undefined

  /**
   * A reference to a transaction line in the billing document.
   * Billing Reference Line
   * Cardinality: 0..n
   */
  BillingReferenceLine?: Array<BillingReferenceLine> | undefined
}
