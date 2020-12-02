import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ReminderLineFieldMetaID = new FieldMeta<ReminderLineField>(
  ReminderLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this reminder line.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ReminderLineFieldMetaNote = new FieldMeta<ReminderLineField>(
  ReminderLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ReminderLineFieldMetaUUID = new FieldMeta<ReminderLineField>(
  ReminderLineField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for this reminder line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderLineFieldMetaBalanceBroughtForwardIndicator = new FieldMeta<ReminderLineField>(
  ReminderLineField.BalanceBroughtForwardIndicator,
  'BalanceBroughtForwardIndicator',
  'Balance Brought Forward Indicator',
  'Indicator',
  'An indication that this reminder line contains a balance brought forward (true) or does not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderLineFieldMetaDebitLineAmount = new FieldMeta<ReminderLineField>(
  ReminderLineField.DebitLineAmount,
  'DebitLineAmount',
  'Debit Line Amount',
  'Amount',
  'The amount debited on this reminder line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderLineFieldMetaCreditLineAmount = new FieldMeta<ReminderLineField>(
  ReminderLineField.CreditLineAmount,
  'CreditLineAmount',
  'Credit Line Amount',
  'Amount',
  'The amount credited on this reminder line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderLineFieldMetaAccountingCostCode = new FieldMeta<ReminderLineField>(
  ReminderLineField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  'Code',
  'The buyer\'s accounting cost centre for this reminder line, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderLineFieldMetaAccountingCost = new FieldMeta<ReminderLineField>(
  ReminderLineField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  'Text',
  'The buyer\'s accounting cost centre for this reminder line, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderLineFieldMetaPenaltySurchargePercent = new FieldMeta<ReminderLineField>(
  ReminderLineField.PenaltySurchargePercent,
  'PenaltySurchargePercent',
  'Penalty Surcharge Percent',
  'Numeric',
  'The penalty for late payment, expressed as a percentage.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderLineFieldMetaAmount = new FieldMeta<ReminderLineField>(
  ReminderLineField.Amount,
  'Amount',
  'Amount',
  'Amount',
  'The amount on this reminder line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderLineFieldMetaPaymentPurposeCode = new FieldMeta<ReminderLineField>(
  ReminderLineField.PaymentPurposeCode,
  'PaymentPurposeCode',
  'Payment Purpose Code',
  'Code',
  'A code signifying the business purpose for this payment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReminderLineFieldMetaReminderPeriod = new FieldMeta<ReminderLineField>(
  ReminderLineField.ReminderPeriod,
  'ReminderPeriod',
  'Reminder Period',
  'Period',
  'A period to which this reminder line applies.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ReminderLineFieldMetaBillingReference = new FieldMeta<ReminderLineField>(
  ReminderLineField.BillingReference,
  'BillingReference',
  'Billing Reference',
  'BillingReference',
  'A reference to a billing document associated with this reminder line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ReminderLineFieldMetaExchangeRate = new FieldMeta<ReminderLineField>(
  ReminderLineField.ExchangeRate,
  'ExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The rate of exchange between the currency of the Reminder and the currency of the document described in the BillingReference.',
  '0..1',
  'cac',
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
