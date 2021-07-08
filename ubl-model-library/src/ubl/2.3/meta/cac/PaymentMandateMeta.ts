import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { ClauseType } from './ClauseMeta'
import { CodeType } from '../cbc/CodeMeta'
import { FinancialAccountType } from './FinancialAccountMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PartyType } from './PartyMeta'
import { PeriodType } from './PeriodMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PaymentMandateField {
  UBLExtensions = 'UBLExtensions',
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

export const PaymentMandateFieldMetaUBLExtensions = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PaymentMandateFieldMetaID = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this payment mandate.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentMandateFieldMetaMandateTypeCode = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.MandateTypeCode,
  'MandateTypeCode',
  'Mandate Type Code',
  CodeType.name,
  'A code signifying the type of this payment mandate.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentMandateFieldMetaMaximumPaymentInstructionsNumeric = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.MaximumPaymentInstructionsNumeric,
  'MaximumPaymentInstructionsNumeric',
  'Maximum Payment Instructions',
  NumericType.name,
  'The number of maximum payment instructions allowed within the validity period.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentMandateFieldMetaMaximumPaidAmount = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.MaximumPaidAmount,
  'MaximumPaidAmount',
  'Maximum Paid Amount',
  AmountType.name,
  'The maximum amount to be paid within a single instruction.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentMandateFieldMetaSignatureID = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.SignatureID,
  'SignatureID',
  'Signature Identifier',
  IdentifierType.name,
  'An identifier for a signature applied by a signatory party.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentMandateFieldMetaPayerParty = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.PayerParty,
  'PayerParty',
  'Payer Party',
  PartyType.name,
  'The payer party (if different from the debtor).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PaymentMandateFieldMetaPayerFinancialAccount = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.PayerFinancialAccount,
  'PayerFinancialAccount',
  'Payer Financial Account',
  FinancialAccountType.name,
  'The payer\'s financial account.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PaymentMandateFieldMetaValidityPeriod = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'The period during which this mandate is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PaymentMandateFieldMetaPaymentReversalPeriod = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.PaymentReversalPeriod,
  'PaymentReversalPeriod',
  'Payment Reversal Period',
  PeriodType.name,
  'The period of the reverse payment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PaymentMandateFieldMetaClause = new FieldMeta<PaymentMandateField>(
  PaymentMandateField.Clause,
  'Clause',
  'Clause',
  ClauseType.name,
  'A clause applicable to this payment mandate.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class PaymentMandateFieldMeta {
  public static readonly UBLExtensions = PaymentMandateFieldMetaUBLExtensions
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
  [PaymentMandateField.UBLExtensions, PaymentMandateFieldMetaUBLExtensions],
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

export const PaymentMandateType: Type<PaymentMandateField> = {
  name: 'PaymentMandate',
  label: 'Payment Mandate',
  module: TypeModule.cac,
  definition: 'A class to describe a payment mandate.',
  fields: PaymentMandateFieldMap,
}
