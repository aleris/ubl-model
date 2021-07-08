import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { BillingReferenceType } from './BillingReferenceMeta'
import { CodeType } from '../cbc/CodeMeta'
import { ExchangeRateType } from './ExchangeRateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PeriodType } from './PeriodMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ReminderLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Note = 'Note',
  UUID = 'UUID',
  BalanceBroughtForwardIndicator = 'BalanceBroughtForwardIndicator',
  DebitLineAmount = 'DebitLineAmount',
  CreditLineAmount = 'CreditLineAmount',
  AccountingCostCode = 'AccountingCostCode',
  AccountingCost = 'AccountingCost',
  PenaltySurchargePercent = 'PenaltySurchargePercent',
  Amount = 'Amount',
  PaymentPurposeCode = 'PaymentPurposeCode',
  ReminderPeriod = 'ReminderPeriod',
  BillingReference = 'BillingReference',
  ExchangeRate = 'ExchangeRate'
}

export const ReminderLineFieldMetaUBLExtensions = new FieldMeta<ReminderLineField>(
  ReminderLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ReminderLineFieldMetaID = new FieldMeta<ReminderLineField>(
  ReminderLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this reminder line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderLineFieldMetaNote = new FieldMeta<ReminderLineField>(
  ReminderLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderLineFieldMetaUUID = new FieldMeta<ReminderLineField>(
  ReminderLineField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for this reminder line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderLineFieldMetaBalanceBroughtForwardIndicator = new FieldMeta<ReminderLineField>(
  ReminderLineField.BalanceBroughtForwardIndicator,
  'BalanceBroughtForwardIndicator',
  'Balance Brought Forward Indicator',
  IndicatorType.name,
  'An indication that this reminder line contains a balance brought forward (true) or does not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderLineFieldMetaDebitLineAmount = new FieldMeta<ReminderLineField>(
  ReminderLineField.DebitLineAmount,
  'DebitLineAmount',
  'Debit Line Amount',
  AmountType.name,
  'The amount debited on this reminder line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderLineFieldMetaCreditLineAmount = new FieldMeta<ReminderLineField>(
  ReminderLineField.CreditLineAmount,
  'CreditLineAmount',
  'Credit Line Amount',
  AmountType.name,
  'The amount credited on this reminder line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderLineFieldMetaAccountingCostCode = new FieldMeta<ReminderLineField>(
  ReminderLineField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  CodeType.name,
  'The buyer\'s accounting cost centre for this reminder line, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderLineFieldMetaAccountingCost = new FieldMeta<ReminderLineField>(
  ReminderLineField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  TextType.name,
  'The buyer\'s accounting cost centre for this reminder line, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderLineFieldMetaPenaltySurchargePercent = new FieldMeta<ReminderLineField>(
  ReminderLineField.PenaltySurchargePercent,
  'PenaltySurchargePercent',
  'Penalty Surcharge Percent',
  NumericType.name,
  'The penalty for late payment, expressed as a percentage.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderLineFieldMetaAmount = new FieldMeta<ReminderLineField>(
  ReminderLineField.Amount,
  'Amount',
  'Amount',
  AmountType.name,
  'The amount on this reminder line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderLineFieldMetaPaymentPurposeCode = new FieldMeta<ReminderLineField>(
  ReminderLineField.PaymentPurposeCode,
  'PaymentPurposeCode',
  'Payment Purpose Code',
  CodeType.name,
  'A code signifying the business purpose for this payment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderLineFieldMetaReminderPeriod = new FieldMeta<ReminderLineField>(
  ReminderLineField.ReminderPeriod,
  'ReminderPeriod',
  'Reminder Period',
  PeriodType.name,
  'A period to which this reminder line applies.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderLineFieldMetaBillingReference = new FieldMeta<ReminderLineField>(
  ReminderLineField.BillingReference,
  'BillingReference',
  'Billing Reference',
  BillingReferenceType.name,
  'A reference to a billing document associated with this reminder line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderLineFieldMetaExchangeRate = new FieldMeta<ReminderLineField>(
  ReminderLineField.ExchangeRate,
  'ExchangeRate',
  'Exchange Rate',
  ExchangeRateType.name,
  'The rate of exchange between the currency of the Reminder and the currency of the document described in the BillingReference.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class ReminderLineFieldMeta {
  public static readonly UBLExtensions = ReminderLineFieldMetaUBLExtensions
  public static readonly ID = ReminderLineFieldMetaID
  public static readonly Note = ReminderLineFieldMetaNote
  public static readonly UUID = ReminderLineFieldMetaUUID
  public static readonly BalanceBroughtForwardIndicator = ReminderLineFieldMetaBalanceBroughtForwardIndicator
  public static readonly DebitLineAmount = ReminderLineFieldMetaDebitLineAmount
  public static readonly CreditLineAmount = ReminderLineFieldMetaCreditLineAmount
  public static readonly AccountingCostCode = ReminderLineFieldMetaAccountingCostCode
  public static readonly AccountingCost = ReminderLineFieldMetaAccountingCost
  public static readonly PenaltySurchargePercent = ReminderLineFieldMetaPenaltySurchargePercent
  public static readonly Amount = ReminderLineFieldMetaAmount
  public static readonly PaymentPurposeCode = ReminderLineFieldMetaPaymentPurposeCode
  public static readonly ReminderPeriod = ReminderLineFieldMetaReminderPeriod
  public static readonly BillingReference = ReminderLineFieldMetaBillingReference
  public static readonly ExchangeRate = ReminderLineFieldMetaExchangeRate
}

export const ReminderLineFieldMap = new Map([
  [ReminderLineField.UBLExtensions, ReminderLineFieldMetaUBLExtensions],
  [ReminderLineField.ID, ReminderLineFieldMetaID],
  [ReminderLineField.Note, ReminderLineFieldMetaNote],
  [ReminderLineField.UUID, ReminderLineFieldMetaUUID],
  [ReminderLineField.BalanceBroughtForwardIndicator, ReminderLineFieldMetaBalanceBroughtForwardIndicator],
  [ReminderLineField.DebitLineAmount, ReminderLineFieldMetaDebitLineAmount],
  [ReminderLineField.CreditLineAmount, ReminderLineFieldMetaCreditLineAmount],
  [ReminderLineField.AccountingCostCode, ReminderLineFieldMetaAccountingCostCode],
  [ReminderLineField.AccountingCost, ReminderLineFieldMetaAccountingCost],
  [ReminderLineField.PenaltySurchargePercent, ReminderLineFieldMetaPenaltySurchargePercent],
  [ReminderLineField.Amount, ReminderLineFieldMetaAmount],
  [ReminderLineField.PaymentPurposeCode, ReminderLineFieldMetaPaymentPurposeCode],
  [ReminderLineField.ReminderPeriod, ReminderLineFieldMetaReminderPeriod],
  [ReminderLineField.BillingReference, ReminderLineFieldMetaBillingReference],
  [ReminderLineField.ExchangeRate, ReminderLineFieldMetaExchangeRate]
])

export const ReminderLineType: Type<ReminderLineField> = {
  name: 'ReminderLine',
  label: 'Reminder Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in a Reminder document.',
  fields: ReminderLineFieldMap,
}
