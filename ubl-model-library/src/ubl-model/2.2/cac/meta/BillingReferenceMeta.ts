import { FieldMeta } from '../../FieldMeta'

export enum BillingReferenceField {
  InvoiceDocumentReference = 'InvoiceDocumentReference',
  SelfBilledInvoiceDocumentReference = 'SelfBilledInvoiceDocumentReference',
  CreditNoteDocumentReference = 'CreditNoteDocumentReference',
  SelfBilledCreditNoteDocumentReference = 'SelfBilledCreditNoteDocumentReference',
  DebitNoteDocumentReference = 'DebitNoteDocumentReference',
  ReminderDocumentReference = 'ReminderDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  BillingReferenceLine = 'BillingReferenceLine'
}

export const BillingReferenceFieldMetaInvoiceDocumentReference = new FieldMeta<BillingReferenceField>(
  BillingReferenceField.InvoiceDocumentReference,
  'InvoiceDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an invoice.',
  '0..1',
  undefined,
  undefined
)

export const BillingReferenceFieldMetaSelfBilledInvoiceDocumentReference = new FieldMeta<BillingReferenceField>(
  BillingReferenceField.SelfBilledInvoiceDocumentReference,
  'SelfBilledInvoiceDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a self billed invoice.',
  '0..1',
  undefined,
  undefined
)

export const BillingReferenceFieldMetaCreditNoteDocumentReference = new FieldMeta<BillingReferenceField>(
  BillingReferenceField.CreditNoteDocumentReference,
  'CreditNoteDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a credit note.',
  '0..1',
  undefined,
  undefined
)

export const BillingReferenceFieldMetaSelfBilledCreditNoteDocumentReference = new FieldMeta<BillingReferenceField>(
  BillingReferenceField.SelfBilledCreditNoteDocumentReference,
  'SelfBilledCreditNoteDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a self billed credit note.',
  '0..1',
  undefined,
  undefined
)

export const BillingReferenceFieldMetaDebitNoteDocumentReference = new FieldMeta<BillingReferenceField>(
  BillingReferenceField.DebitNoteDocumentReference,
  'DebitNoteDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a debit note.',
  '0..1',
  undefined,
  undefined
)

export const BillingReferenceFieldMetaReminderDocumentReference = new FieldMeta<BillingReferenceField>(
  BillingReferenceField.ReminderDocumentReference,
  'ReminderDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a billing reminder.',
  '0..1',
  undefined,
  undefined
)

export const BillingReferenceFieldMetaAdditionalDocumentReference = new FieldMeta<BillingReferenceField>(
  BillingReferenceField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an additional document.',
  '0..1',
  undefined,
  undefined
)

export const BillingReferenceFieldMetaBillingReferenceLine = new FieldMeta<BillingReferenceField>(
  BillingReferenceField.BillingReferenceLine,
  'BillingReferenceLine',
  'Billing Reference Line',
  'BillingReferenceLine',
  'A reference to a transaction line in the billing document.',
  '0..n',
  undefined,
  undefined
)

export class BillingReferenceFieldMeta {
  public static readonly InvoiceDocumentReference = BillingReferenceFieldMetaInvoiceDocumentReference
  public static readonly SelfBilledInvoiceDocumentReference = BillingReferenceFieldMetaSelfBilledInvoiceDocumentReference
  public static readonly CreditNoteDocumentReference = BillingReferenceFieldMetaCreditNoteDocumentReference
  public static readonly SelfBilledCreditNoteDocumentReference = BillingReferenceFieldMetaSelfBilledCreditNoteDocumentReference
  public static readonly DebitNoteDocumentReference = BillingReferenceFieldMetaDebitNoteDocumentReference
  public static readonly ReminderDocumentReference = BillingReferenceFieldMetaReminderDocumentReference
  public static readonly AdditionalDocumentReference = BillingReferenceFieldMetaAdditionalDocumentReference
  public static readonly BillingReferenceLine = BillingReferenceFieldMetaBillingReferenceLine
}

export const BillingReferenceFieldMap = new Map([
  [BillingReferenceField.InvoiceDocumentReference, BillingReferenceFieldMetaInvoiceDocumentReference],
  [BillingReferenceField.SelfBilledInvoiceDocumentReference, BillingReferenceFieldMetaSelfBilledInvoiceDocumentReference],
  [BillingReferenceField.CreditNoteDocumentReference, BillingReferenceFieldMetaCreditNoteDocumentReference],
  [BillingReferenceField.SelfBilledCreditNoteDocumentReference, BillingReferenceFieldMetaSelfBilledCreditNoteDocumentReference],
  [BillingReferenceField.DebitNoteDocumentReference, BillingReferenceFieldMetaDebitNoteDocumentReference],
  [BillingReferenceField.ReminderDocumentReference, BillingReferenceFieldMetaReminderDocumentReference],
  [BillingReferenceField.AdditionalDocumentReference, BillingReferenceFieldMetaAdditionalDocumentReference],
  [BillingReferenceField.BillingReferenceLine, BillingReferenceFieldMetaBillingReferenceLine]
])
