import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { BillingReferenceType } from './BillingReferenceMeta'
import { CodeType } from '../cbc/CodeMeta'
import { CustomerPartyType } from './CustomerPartyMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { ExchangeRateType } from './ExchangeRateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from './PartyMeta'
import { PeriodType } from './PeriodMeta'
import { SupplierPartyType } from './SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum RemittanceAdviceLineField {
  UBLExtensions = 'UBLExtensions',
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

export const RemittanceAdviceLineFieldMetaUBLExtensions = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaID = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this remittance advice line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaNote = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaUUID = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for this remittance advice line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaDebitLineAmount = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.DebitLineAmount,
  'DebitLineAmount',
  'Debit Line Amount',
  AmountType.name,
  'The amount debited on this remittance advice line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaCreditLineAmount = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.CreditLineAmount,
  'CreditLineAmount',
  'Credit Line Amount',
  AmountType.name,
  'The amount credited on this remittance advice line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaBalanceAmount = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.BalanceAmount,
  'BalanceAmount',
  'Balance Amount',
  AmountType.name,
  'The monetary balance associated with this remittance advice line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaPaymentPurposeCode = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.PaymentPurposeCode,
  'PaymentPurposeCode',
  'Payment Purpose Code',
  CodeType.name,
  'A code signifying the business purpose for this payment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaInvoicingPartyReference = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.InvoicingPartyReference,
  'InvoicingPartyReference',
  'Invoicing Party Reference',
  TextType.name,
  'A reference to the order for payment used by the invoicing party. This may have been requested of the payer by the payee to accompany its remittance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaAccountingSupplierParty = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Accounting Supplier Party',
  SupplierPartyType.name,
  'The Accounting Supplier Party related to the remittance information reported on this Remittance Advice Line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaAccountingCustomerParty = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Accounting Customer Party',
  CustomerPartyType.name,
  'The Accounting Customer Party related to the remittance information reported on this Remittance Advice Line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaBuyerCustomerParty = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer associated with this remittance advice line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaSellerSupplierParty = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller/supplier associated with this remittance advice line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaOriginatorCustomerParty = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Originator Customer Party',
  CustomerPartyType.name,
  'The originating party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaPayeeParty = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.PayeeParty,
  'PayeeParty',
  'Payee Party',
  PartyType.name,
  'The payee.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaInvoicePeriod = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.InvoicePeriod,
  'InvoicePeriod',
  'Invoice Period',
  PeriodType.name,
  'An invoice period to which this remittance advice line applies.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaBillingReference = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.BillingReference,
  'BillingReference',
  'Billing Reference',
  BillingReferenceType.name,
  'A reference to a billing document associated with this remittance advice line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaDocumentReference = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to a document associated with this remittance advice line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RemittanceAdviceLineFieldMetaExchangeRate = new FieldMeta<RemittanceAdviceLineField>(
  RemittanceAdviceLineField.ExchangeRate,
  'ExchangeRate',
  'Exchange Rate',
  ExchangeRateType.name,
  'The rate of exchange between the currency of the Remittance Advice and the currency of the document described in the BillingReference.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class RemittanceAdviceLineFieldMeta {
  public static readonly UBLExtensions = RemittanceAdviceLineFieldMetaUBLExtensions
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
  [RemittanceAdviceLineField.UBLExtensions, RemittanceAdviceLineFieldMetaUBLExtensions],
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

export const RemittanceAdviceLineType: Type<RemittanceAdviceLineField> = {
  name: 'RemittanceAdviceLine',
  label: 'Remittance Advice Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in a Remittance Advice.',
  fields: RemittanceAdviceLineFieldMap,
}
