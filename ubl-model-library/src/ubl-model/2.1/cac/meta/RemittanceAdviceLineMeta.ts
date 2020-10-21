import { FieldMeta } from '../../FieldMeta'

export enum RemittanceAdviceLineField {
  ID = 'ID',
  Note = 'Note',
  UUID = 'UUID',
  DebitLineAmount = 'DebitLineAmount',
  CreditLineAmount = 'CreditLineAmount',
  BalanceAmount = 'BalanceAmount',
  PaymentPurposeCode = 'PaymentPurposeCode',
  InvoicingPartyReference = 'InvoicingPartyReference',
  AccountingSupplierParty = 'AccountingSupplierParty',
  AccountingCustomerParty = 'AccountingCustomerParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  OriginatorCustomerParty = 'OriginatorCustomerParty',
  PayeeParty = 'PayeeParty',
  InvoicePeriod = 'InvoicePeriod',
  BillingReference = 'BillingReference',
  DocumentReference = 'DocumentReference',
  ExchangeRate = 'ExchangeRate'
}

export const RemittanceAdviceLineFieldMetaID = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this remittance advice line.',
  '1',
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaNote = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaUUID = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for this remittance advice line.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaDebitLineAmount = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.DebitLineAmount,
  'DebitLineAmount',
  'Line Amount',
  'Amount',
  'The amount debited on this remittance advice line.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaCreditLineAmount = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.CreditLineAmount,
  'CreditLineAmount',
  'Line Amount',
  'Amount',
  'The amount credited on this remittance advice line.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaBalanceAmount = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.BalanceAmount,
  'BalanceAmount',
  'Balance Amount',
  'Amount',
  'The monetary balance associated with this remittance advice line.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaPaymentPurposeCode = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.PaymentPurposeCode,
  'PaymentPurposeCode',
  'Payment Purpose Code',
  'Code',
  'A code signifying the business purpose for this payment.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaInvoicingPartyReference = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.InvoicingPartyReference,
  'InvoicingPartyReference',
  'Reference',
  'Text',
  'A reference to the order for payment used by the invoicing party. This may have been requested of the payer by the payee to accompany its remittance.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaAccountingSupplierParty = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The Accounting Supplier Party related to the remittance information reported on this Remittance Advice Line.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaAccountingCustomerParty = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The Accounting Customer Party related to the remittance information reported on this Remittance Advice Line.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaBuyerCustomerParty = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The buyer associated with this remittance advice line.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaSellerSupplierParty = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller/supplier associated with this remittance advice line.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaOriginatorCustomerParty = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The originating party.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaPayeeParty = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.PayeeParty,
  'PayeeParty',
  'Party',
  'Party',
  'The payee.',
  '0..1',
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaInvoicePeriod = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.InvoicePeriod,
  'InvoicePeriod',
  'Period',
  'Period',
  'An invoice period to which this remittance advice line applies.',
  '0..n',
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaBillingReference = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.BillingReference,
  'BillingReference',
  'Billing Reference',
  'BillingReference',
  'A reference to a billing document associated with this remittance advice line.',
  '0..n',
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaDocumentReference = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a document associated with this remittance advice line.',
  '0..n',
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaExchangeRate = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.ExchangeRate,
  'ExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The rate of exchange between the currency of the Remittance Advice and the currency of the document described in the BillingReference.',
  '0..1',
  undefined,
  undefined
)

export class RemittanceAdviceLineFieldMeta {
  public static readonly ID = RemittanceAdviceLineFieldMetaID
  public static readonly Note = RemittanceAdviceLineFieldMetaNote
  public static readonly UUID = RemittanceAdviceLineFieldMetaUUID
  public static readonly DebitLineAmount = RemittanceAdviceLineFieldMetaDebitLineAmount
  public static readonly CreditLineAmount = RemittanceAdviceLineFieldMetaCreditLineAmount
  public static readonly BalanceAmount = RemittanceAdviceLineFieldMetaBalanceAmount
  public static readonly PaymentPurposeCode = RemittanceAdviceLineFieldMetaPaymentPurposeCode
  public static readonly InvoicingPartyReference = RemittanceAdviceLineFieldMetaInvoicingPartyReference
  public static readonly AccountingSupplierParty = RemittanceAdviceLineFieldMetaAccountingSupplierParty
  public static readonly AccountingCustomerParty = RemittanceAdviceLineFieldMetaAccountingCustomerParty
  public static readonly BuyerCustomerParty = RemittanceAdviceLineFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = RemittanceAdviceLineFieldMetaSellerSupplierParty
  public static readonly OriginatorCustomerParty = RemittanceAdviceLineFieldMetaOriginatorCustomerParty
  public static readonly PayeeParty = RemittanceAdviceLineFieldMetaPayeeParty
  public static readonly InvoicePeriod = RemittanceAdviceLineFieldMetaInvoicePeriod
  public static readonly BillingReference = RemittanceAdviceLineFieldMetaBillingReference
  public static readonly DocumentReference = RemittanceAdviceLineFieldMetaDocumentReference
  public static readonly ExchangeRate = RemittanceAdviceLineFieldMetaExchangeRate
}

export const RemittanceAdviceLineFieldMap = new Map([
  [RemittanceAdviceLineField.ID, RemittanceAdviceLineFieldMetaID],
  [RemittanceAdviceLineField.Note, RemittanceAdviceLineFieldMetaNote],
  [RemittanceAdviceLineField.UUID, RemittanceAdviceLineFieldMetaUUID],
  [RemittanceAdviceLineField.DebitLineAmount, RemittanceAdviceLineFieldMetaDebitLineAmount],
  [RemittanceAdviceLineField.CreditLineAmount, RemittanceAdviceLineFieldMetaCreditLineAmount],
  [RemittanceAdviceLineField.BalanceAmount, RemittanceAdviceLineFieldMetaBalanceAmount],
  [RemittanceAdviceLineField.PaymentPurposeCode, RemittanceAdviceLineFieldMetaPaymentPurposeCode],
  [RemittanceAdviceLineField.InvoicingPartyReference, RemittanceAdviceLineFieldMetaInvoicingPartyReference],
  [RemittanceAdviceLineField.AccountingSupplierParty, RemittanceAdviceLineFieldMetaAccountingSupplierParty],
  [RemittanceAdviceLineField.AccountingCustomerParty, RemittanceAdviceLineFieldMetaAccountingCustomerParty],
  [RemittanceAdviceLineField.BuyerCustomerParty, RemittanceAdviceLineFieldMetaBuyerCustomerParty],
  [RemittanceAdviceLineField.SellerSupplierParty, RemittanceAdviceLineFieldMetaSellerSupplierParty],
  [RemittanceAdviceLineField.OriginatorCustomerParty, RemittanceAdviceLineFieldMetaOriginatorCustomerParty],
  [RemittanceAdviceLineField.PayeeParty, RemittanceAdviceLineFieldMetaPayeeParty],
  [RemittanceAdviceLineField.InvoicePeriod, RemittanceAdviceLineFieldMetaInvoicePeriod],
  [RemittanceAdviceLineField.BillingReference, RemittanceAdviceLineFieldMetaBillingReference],
  [RemittanceAdviceLineField.DocumentReference, RemittanceAdviceLineFieldMetaDocumentReference],
  [RemittanceAdviceLineField.ExchangeRate, RemittanceAdviceLineFieldMetaExchangeRate]
])
