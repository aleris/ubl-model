import { FieldMeta } from '../../FieldMeta'

export enum PaymentMandateField {
  ID = 'ID',
  MandateTypeCode = 'MandateTypeCode',
  MaximumPaymentInstructionsNumeric = 'MaximumPaymentInstructionsNumeric',
  MaximumPaidAmount = 'MaximumPaidAmount',
  SignatureID = 'SignatureID',
  PayerParty = 'PayerParty',
  PayerFinancialAccount = 'PayerFinancialAccount',
  ValidityPeriod = 'ValidityPeriod',
  PaymentReversalPeriod = 'PaymentReversalPeriod',
  Clause = 'Clause'
}

export const PaymentMandateFieldMetaID = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this payment mandate.',
  '0..1',
  undefined,
  undefined
)

export const PaymentMandateFieldMetaMandateTypeCode = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.MandateTypeCode,
  'MandateTypeCode',
  'Mandate Type Code',
  'Code',
  'A code signifying the type of this payment mandate.',
  '0..1',
  undefined,
  undefined
)

export const PaymentMandateFieldMetaMaximumPaymentInstructionsNumeric = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.MaximumPaymentInstructionsNumeric,
  'MaximumPaymentInstructionsNumeric',
  'Maximum Payment Instructions',
  'Numeric',
  'The number of maximum payment instructions allowed within the validity period.',
  '0..1',
  undefined,
  undefined
)

export const PaymentMandateFieldMetaMaximumPaidAmount = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.MaximumPaidAmount,
  'MaximumPaidAmount',
  'Paid Amount',
  'Amount',
  'The maximum amount to be paid within a single instruction.',
  '0..1',
  undefined,
  undefined
)

export const PaymentMandateFieldMetaSignatureID = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.SignatureID,
  'SignatureID',
  'Signature Identifier',
  'Identifier',
  'An identifier for a signature applied by a signatory party.',
  '0..1',
  undefined,
  undefined
)

export const PaymentMandateFieldMetaPayerParty = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.PayerParty,
  'PayerParty',
  'Party',
  'Party',
  'The payer party (if different from the debtor).',
  '0..1',
  undefined,
  undefined
)

export const PaymentMandateFieldMetaPayerFinancialAccount = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.PayerFinancialAccount,
  'PayerFinancialAccount',
  'Financial Account',
  'FinancialAccount',
  'The payer\'s financial account.',
  '0..1',
  undefined,
  undefined
)

export const PaymentMandateFieldMetaValidityPeriod = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.ValidityPeriod,
  'ValidityPeriod',
  'Period',
  'Period',
  'The period during which this mandate is valid.',
  '0..1',
  undefined,
  undefined
)

export const PaymentMandateFieldMetaPaymentReversalPeriod = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.PaymentReversalPeriod,
  'PaymentReversalPeriod',
  'Period',
  'Period',
  'The period of the reverse payment.',
  '0..1',
  undefined,
  undefined
)

export const PaymentMandateFieldMetaClause = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.Clause,
  'Clause',
  'Clause',
  'Clause',
  'A clause applicable to this payment mandate.',
  '0..n',
  undefined,
  undefined
)

export class PaymentMandateFieldMeta {
  public static readonly ID = PaymentMandateFieldMetaID
  public static readonly MandateTypeCode = PaymentMandateFieldMetaMandateTypeCode
  public static readonly MaximumPaymentInstructionsNumeric = PaymentMandateFieldMetaMaximumPaymentInstructionsNumeric
  public static readonly MaximumPaidAmount = PaymentMandateFieldMetaMaximumPaidAmount
  public static readonly SignatureID = PaymentMandateFieldMetaSignatureID
  public static readonly PayerParty = PaymentMandateFieldMetaPayerParty
  public static readonly PayerFinancialAccount = PaymentMandateFieldMetaPayerFinancialAccount
  public static readonly ValidityPeriod = PaymentMandateFieldMetaValidityPeriod
  public static readonly PaymentReversalPeriod = PaymentMandateFieldMetaPaymentReversalPeriod
  public static readonly Clause = PaymentMandateFieldMetaClause
}

export const PaymentMandateFieldMap = new Map([
  [PaymentMandateField.ID, PaymentMandateFieldMetaID],
  [PaymentMandateField.MandateTypeCode, PaymentMandateFieldMetaMandateTypeCode],
  [PaymentMandateField.MaximumPaymentInstructionsNumeric, PaymentMandateFieldMetaMaximumPaymentInstructionsNumeric],
  [PaymentMandateField.MaximumPaidAmount, PaymentMandateFieldMetaMaximumPaidAmount],
  [PaymentMandateField.SignatureID, PaymentMandateFieldMetaSignatureID],
  [PaymentMandateField.PayerParty, PaymentMandateFieldMetaPayerParty],
  [PaymentMandateField.PayerFinancialAccount, PaymentMandateFieldMetaPayerFinancialAccount],
  [PaymentMandateField.ValidityPeriod, PaymentMandateFieldMetaValidityPeriod],
  [PaymentMandateField.PaymentReversalPeriod, PaymentMandateFieldMetaPaymentReversalPeriod],
  [PaymentMandateField.Clause, PaymentMandateFieldMetaClause]
])
