import { BillingReferenceLine } from './BillingReferenceLine'
import { DocumentReference } from './DocumentReference'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a reference to a billing document.
 */
export interface BillingReference {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A reference to an invoice.
   * Document Reference
   * Cardinality: 0..1
   */
  InvoiceDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a self billed invoice.
   * Document Reference
   * Cardinality: 0..1
   */
  SelfBilledInvoiceDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a credit note.
   * Document Reference
   * Cardinality: 0..1
   */
  CreditNoteDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a self billed credit note.
   * Document Reference
   * Cardinality: 0..1
   */
  SelfBilledCreditNoteDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a debit note.
   * Document Reference
   * Cardinality: 0..1
   */
  DebitNoteDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a billing reminder.
   * Document Reference
   * Cardinality: 0..1
   */
  ReminderDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to an additional document.
   * Document Reference
   * Cardinality: 0..1
   */
  AdditionalDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a transaction line in the billing document.
   * Billing Reference Line
   * Cardinality: 0..n
   */
  BillingReferenceLine?: Array<BillingReferenceLine> | undefined
}
