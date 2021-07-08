import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { BillingReferenceLineType } from './BillingReferenceLineMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum BillingReferenceField {
  UBLExtensions = 'UBLExtensions',
  InvoiceDocumentReference = 'InvoiceDocumentReference',
  SelfBilledInvoiceDocumentReference = 'SelfBilledInvoiceDocumentReference',
  CreditNoteDocumentReference = 'CreditNoteDocumentReference',
  SelfBilledCreditNoteDocumentReference = 'SelfBilledCreditNoteDocumentReference',
  DebitNoteDocumentReference = 'DebitNoteDocumentReference',
  ReminderDocumentReference = 'ReminderDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  BillingReferenceLine = 'BillingReferenceLine'
}

export const BillingReferenceFieldMetaUBLExtensions = new FieldMeta<BillingReferenceField>(
  BillingReferenceField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const BillingReferenceFieldMetaInvoiceDocumentReference = new FieldMeta<BillingReferenceField>(
  BillingReferenceField.InvoiceDocumentReference,
  'InvoiceDocumentReference',
  'Invoice Document Reference',
  DocumentReferenceType.name,
  'A reference to an invoice.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const BillingReferenceFieldMetaSelfBilledInvoiceDocumentReference = new FieldMeta<BillingReferenceField>(
  BillingReferenceField.SelfBilledInvoiceDocumentReference,
  'SelfBilledInvoiceDocumentReference',
  'Self Billed Invoice Document Reference',
  DocumentReferenceType.name,
  'A reference to a self billed invoice.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const BillingReferenceFieldMetaCreditNoteDocumentReference = new FieldMeta<BillingReferenceField>(
  BillingReferenceField.CreditNoteDocumentReference,
  'CreditNoteDocumentReference',
  'Credit Note Document Reference',
  DocumentReferenceType.name,
  'A reference to a credit note.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const BillingReferenceFieldMetaSelfBilledCreditNoteDocumentReference = new FieldMeta<BillingReferenceField>(
  BillingReferenceField.SelfBilledCreditNoteDocumentReference,
  'SelfBilledCreditNoteDocumentReference',
  'Self Billed Credit Note Document Reference',
  DocumentReferenceType.name,
  'A reference to a self billed credit note.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const BillingReferenceFieldMetaDebitNoteDocumentReference = new FieldMeta<BillingReferenceField>(
  BillingReferenceField.DebitNoteDocumentReference,
  'DebitNoteDocumentReference',
  'Debit Note Document Reference',
  DocumentReferenceType.name,
  'A reference to a debit note.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const BillingReferenceFieldMetaReminderDocumentReference = new FieldMeta<BillingReferenceField>(
  BillingReferenceField.ReminderDocumentReference,
  'ReminderDocumentReference',
  'Reminder Document Reference',
  DocumentReferenceType.name,
  'A reference to a billing reminder.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const BillingReferenceFieldMetaAdditionalDocumentReference = new FieldMeta<BillingReferenceField>(
  BillingReferenceField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const BillingReferenceFieldMetaBillingReferenceLine = new FieldMeta<BillingReferenceField>(
  BillingReferenceField.BillingReferenceLine,
  'BillingReferenceLine',
  'Billing Reference Line',
  BillingReferenceLineType.name,
  'A reference to a transaction line in the billing document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class BillingReferenceFieldMeta {
  public static readonly UBLExtensions = BillingReferenceFieldMetaUBLExtensions
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
  [BillingReferenceField.UBLExtensions, BillingReferenceFieldMetaUBLExtensions],
  [BillingReferenceField.InvoiceDocumentReference, BillingReferenceFieldMetaInvoiceDocumentReference],
  [BillingReferenceField.SelfBilledInvoiceDocumentReference, BillingReferenceFieldMetaSelfBilledInvoiceDocumentReference],
  [BillingReferenceField.CreditNoteDocumentReference, BillingReferenceFieldMetaCreditNoteDocumentReference],
  [BillingReferenceField.SelfBilledCreditNoteDocumentReference, BillingReferenceFieldMetaSelfBilledCreditNoteDocumentReference],
  [BillingReferenceField.DebitNoteDocumentReference, BillingReferenceFieldMetaDebitNoteDocumentReference],
  [BillingReferenceField.ReminderDocumentReference, BillingReferenceFieldMetaReminderDocumentReference],
  [BillingReferenceField.AdditionalDocumentReference, BillingReferenceFieldMetaAdditionalDocumentReference],
  [BillingReferenceField.BillingReferenceLine, BillingReferenceFieldMetaBillingReferenceLine]
])

export const BillingReferenceType: Type<BillingReferenceField> = {
  name: 'BillingReference',
  label: 'Billing Reference',
  module: TypeModule.cac,
  definition: 'A class to define a reference to a billing document.',
  fields: BillingReferenceFieldMap,
}
