import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from './AllowanceChargeMeta'
import { AmountType } from '../cbc/AmountMeta'
import { BillingReferenceType } from './BillingReferenceMeta'
import { CodeType } from '../cbc/CodeMeta'
import { CustomerPartyType } from './CustomerPartyMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { ExchangeRateType } from './ExchangeRateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from './PartyMeta'
import { PaymentType } from './PaymentMeta'
import { PaymentMeansType } from './PaymentMeansMeta'
import { PaymentTermsType } from './PaymentTermsMeta'
import { PeriodType } from './PeriodMeta'
import { SupplierPartyType } from './SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum StatementLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Note = 'Note',
  UUID = 'UUID',
  BalanceBroughtForwardIndicator = 'BalanceBroughtForwardIndicator',
  DebitLineAmount = 'DebitLineAmount',
  CreditLineAmount = 'CreditLineAmount',
  BalanceAmount = 'BalanceAmount',
  PaymentPurposeCode = 'PaymentPurposeCode',
  PaymentMeans = 'PaymentMeans',
  PaymentTerms = 'PaymentTerms',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  OriginatorCustomerParty = 'OriginatorCustomerParty',
  AccountingCustomerParty = 'AccountingCustomerParty',
  AccountingSupplierParty = 'AccountingSupplierParty',
  PayeeParty = 'PayeeParty',
  InvoicePeriod = 'InvoicePeriod',
  BillingReference = 'BillingReference',
  DocumentReference = 'DocumentReference',
  ExchangeRate = 'ExchangeRate',
  AllowanceCharge = 'AllowanceCharge',
  CollectedPayment = 'CollectedPayment'
}

export const StatementLineFieldMetaUBLExtensions = new FieldMeta<StatementLineField>(
  StatementLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const StatementLineFieldMetaID = new FieldMeta<StatementLineField>(
  StatementLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this statement line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementLineFieldMetaNote = new FieldMeta<StatementLineField>(
  StatementLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementLineFieldMetaUUID = new FieldMeta<StatementLineField>(
  StatementLineField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for this statement line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementLineFieldMetaBalanceBroughtForwardIndicator = new FieldMeta<StatementLineField>(
  StatementLineField.BalanceBroughtForwardIndicator,
  'BalanceBroughtForwardIndicator',
  'Balance Brought Forward Indicator',
  IndicatorType.name,
  'An indication that this statement line contains an outstanding balance from the previous bill(s) (true) or does not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementLineFieldMetaDebitLineAmount = new FieldMeta<StatementLineField>(
  StatementLineField.DebitLineAmount,
  'DebitLineAmount',
  'Debit Line Amount',
  AmountType.name,
  'The amount debited on this statement line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementLineFieldMetaCreditLineAmount = new FieldMeta<StatementLineField>(
  StatementLineField.CreditLineAmount,
  'CreditLineAmount',
  'Credit Line Amount',
  AmountType.name,
  'The amount credited on this statement line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementLineFieldMetaBalanceAmount = new FieldMeta<StatementLineField>(
  StatementLineField.BalanceAmount,
  'BalanceAmount',
  'Balance Amount',
  AmountType.name,
  'The balance amount on this statement line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementLineFieldMetaPaymentPurposeCode = new FieldMeta<StatementLineField>(
  StatementLineField.PaymentPurposeCode,
  'PaymentPurposeCode',
  'Payment Purpose Code',
  CodeType.name,
  'A code signifying the business purpose for this payment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementLineFieldMetaPaymentMeans = new FieldMeta<StatementLineField>(
  StatementLineField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  PaymentMeansType.name,
  'A means of payment associated with this statement line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementLineFieldMetaPaymentTerms = new FieldMeta<StatementLineField>(
  StatementLineField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  PaymentTermsType.name,
  'A specification of payment terms associated with this statement line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementLineFieldMetaBuyerCustomerParty = new FieldMeta<StatementLineField>(
  StatementLineField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer associated with this statement line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementLineFieldMetaSellerSupplierParty = new FieldMeta<StatementLineField>(
  StatementLineField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller/supplier associated with this statement line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementLineFieldMetaOriginatorCustomerParty = new FieldMeta<StatementLineField>(
  StatementLineField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Originator Customer Party',
  CustomerPartyType.name,
  'The originating party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementLineFieldMetaAccountingCustomerParty = new FieldMeta<StatementLineField>(
  StatementLineField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Accounting Customer Party',
  CustomerPartyType.name,
  'The Accounting Customer Party related to the statement information reported on this Statement Line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementLineFieldMetaAccountingSupplierParty = new FieldMeta<StatementLineField>(
  StatementLineField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Accounting Supplier Party',
  SupplierPartyType.name,
  'The Accounting Supplier Party related to the statement information reported on this Statement Line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementLineFieldMetaPayeeParty = new FieldMeta<StatementLineField>(
  StatementLineField.PayeeParty,
  'PayeeParty',
  'Payee Party',
  PartyType.name,
  'The payee.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementLineFieldMetaInvoicePeriod = new FieldMeta<StatementLineField>(
  StatementLineField.InvoicePeriod,
  'InvoicePeriod',
  'Invoice Period',
  PeriodType.name,
  'An invoice period to which this statement line applies.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementLineFieldMetaBillingReference = new FieldMeta<StatementLineField>(
  StatementLineField.BillingReference,
  'BillingReference',
  'Billing Reference',
  BillingReferenceType.name,
  'A reference to a billing document associated with this statement line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementLineFieldMetaDocumentReference = new FieldMeta<StatementLineField>(
  StatementLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to a document associated with this statement line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementLineFieldMetaExchangeRate = new FieldMeta<StatementLineField>(
  StatementLineField.ExchangeRate,
  'ExchangeRate',
  'Exchange Rate',
  ExchangeRateType.name,
  'The rate of exchange between the currency of the Statement and the currency of the document described in the BillingReference.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementLineFieldMetaAllowanceCharge = new FieldMeta<StatementLineField>(
  StatementLineField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'A charge or discount price component associated with this statement line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementLineFieldMetaCollectedPayment = new FieldMeta<StatementLineField>(
  StatementLineField.CollectedPayment,
  'CollectedPayment',
  'Collected Payment',
  PaymentType.name,
  'A collected payment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class StatementLineFieldMeta {
  public static readonly UBLExtensions = StatementLineFieldMetaUBLExtensions
  public static readonly ID = StatementLineFieldMetaID
  public static readonly Note = StatementLineFieldMetaNote
  public static readonly UUID = StatementLineFieldMetaUUID
  public static readonly BalanceBroughtForwardIndicator = StatementLineFieldMetaBalanceBroughtForwardIndicator
  public static readonly DebitLineAmount = StatementLineFieldMetaDebitLineAmount
  public static readonly CreditLineAmount = StatementLineFieldMetaCreditLineAmount
  public static readonly BalanceAmount = StatementLineFieldMetaBalanceAmount
  public static readonly PaymentPurposeCode = StatementLineFieldMetaPaymentPurposeCode
  public static readonly PaymentMeans = StatementLineFieldMetaPaymentMeans
  public static readonly PaymentTerms = StatementLineFieldMetaPaymentTerms
  public static readonly BuyerCustomerParty = StatementLineFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = StatementLineFieldMetaSellerSupplierParty
  public static readonly OriginatorCustomerParty = StatementLineFieldMetaOriginatorCustomerParty
  public static readonly AccountingCustomerParty = StatementLineFieldMetaAccountingCustomerParty
  public static readonly AccountingSupplierParty = StatementLineFieldMetaAccountingSupplierParty
  public static readonly PayeeParty = StatementLineFieldMetaPayeeParty
  public static readonly InvoicePeriod = StatementLineFieldMetaInvoicePeriod
  public static readonly BillingReference = StatementLineFieldMetaBillingReference
  public static readonly DocumentReference = StatementLineFieldMetaDocumentReference
  public static readonly ExchangeRate = StatementLineFieldMetaExchangeRate
  public static readonly AllowanceCharge = StatementLineFieldMetaAllowanceCharge
  public static readonly CollectedPayment = StatementLineFieldMetaCollectedPayment
}

export const StatementLineFieldMap = new Map([
  [StatementLineField.UBLExtensions, StatementLineFieldMetaUBLExtensions],
  [StatementLineField.ID, StatementLineFieldMetaID],
  [StatementLineField.Note, StatementLineFieldMetaNote],
  [StatementLineField.UUID, StatementLineFieldMetaUUID],
  [StatementLineField.BalanceBroughtForwardIndicator, StatementLineFieldMetaBalanceBroughtForwardIndicator],
  [StatementLineField.DebitLineAmount, StatementLineFieldMetaDebitLineAmount],
  [StatementLineField.CreditLineAmount, StatementLineFieldMetaCreditLineAmount],
  [StatementLineField.BalanceAmount, StatementLineFieldMetaBalanceAmount],
  [StatementLineField.PaymentPurposeCode, StatementLineFieldMetaPaymentPurposeCode],
  [StatementLineField.PaymentMeans, StatementLineFieldMetaPaymentMeans],
  [StatementLineField.PaymentTerms, StatementLineFieldMetaPaymentTerms],
  [StatementLineField.BuyerCustomerParty, StatementLineFieldMetaBuyerCustomerParty],
  [StatementLineField.SellerSupplierParty, StatementLineFieldMetaSellerSupplierParty],
  [StatementLineField.OriginatorCustomerParty, StatementLineFieldMetaOriginatorCustomerParty],
  [StatementLineField.AccountingCustomerParty, StatementLineFieldMetaAccountingCustomerParty],
  [StatementLineField.AccountingSupplierParty, StatementLineFieldMetaAccountingSupplierParty],
  [StatementLineField.PayeeParty, StatementLineFieldMetaPayeeParty],
  [StatementLineField.InvoicePeriod, StatementLineFieldMetaInvoicePeriod],
  [StatementLineField.BillingReference, StatementLineFieldMetaBillingReference],
  [StatementLineField.DocumentReference, StatementLineFieldMetaDocumentReference],
  [StatementLineField.ExchangeRate, StatementLineFieldMetaExchangeRate],
  [StatementLineField.AllowanceCharge, StatementLineFieldMetaAllowanceCharge],
  [StatementLineField.CollectedPayment, StatementLineFieldMetaCollectedPayment]
])

export const StatementLineType: Type<StatementLineField> = {
  name: 'StatementLine',
  label: 'Statement Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in a Statement of account.',
  fields: StatementLineFieldMap,
}
