import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CardAccountType } from './CardAccountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { CreditAccountType } from './CreditAccountMeta'
import { DateType } from '../cbc/DateMeta'
import { FinancialAccountType } from './FinancialAccountMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PaymentMandateType } from './PaymentMandateMeta'
import { TextType } from '../cbc/TextMeta'
import { TradeFinancingType } from './TradeFinancingMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PaymentMeansField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  PaymentMeansCode = 'PaymentMeansCode',
  PaymentDueDate = 'PaymentDueDate',
  PaymentChannelCode = 'PaymentChannelCode',
  InstructionID = 'InstructionID',
  InstructionNote = 'InstructionNote',
  PaymentID = 'PaymentID',
  CardAccount = 'CardAccount',
  PayerFinancialAccount = 'PayerFinancialAccount',
  PayeeFinancialAccount = 'PayeeFinancialAccount',
  CreditAccount = 'CreditAccount',
  PaymentMandate = 'PaymentMandate',
  TradeFinancing = 'TradeFinancing'
}

export const PaymentMeansFieldMetaUBLExtensions = new FieldMeta<PaymentMeansField>(
  PaymentMeansField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PaymentMeansFieldMetaID = new FieldMeta<PaymentMeansField>(
  PaymentMeansField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this means of payment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentMeansFieldMetaPaymentMeansCode = new FieldMeta<PaymentMeansField>(
  PaymentMeansField.PaymentMeansCode,
  'PaymentMeansCode',
  'Payment Means Code',
  CodeType.name,
  'A code signifying the type of this means of payment.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentMeansFieldMetaPaymentDueDate = new FieldMeta<PaymentMeansField>(
  PaymentMeansField.PaymentDueDate,
  'PaymentDueDate',
  'Payment Due Date',
  DateType.name,
  'The date on which payment is due for this means of payment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentMeansFieldMetaPaymentChannelCode = new FieldMeta<PaymentMeansField>(
  PaymentMeansField.PaymentChannelCode,
  'PaymentChannelCode',
  'Payment Channel Code',
  CodeType.name,
  'A code signifying the payment channel for this means of payment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentMeansFieldMetaInstructionID = new FieldMeta<PaymentMeansField>(
  PaymentMeansField.InstructionID,
  'InstructionID',
  'Instruction Identifier',
  IdentifierType.name,
  'An identifier for the payment instruction.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentMeansFieldMetaInstructionNote = new FieldMeta<PaymentMeansField>(
  PaymentMeansField.InstructionNote,
  'InstructionNote',
  'Instruction Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentMeansFieldMetaPaymentID = new FieldMeta<PaymentMeansField>(
  PaymentMeansField.PaymentID,
  'PaymentID',
  'Payment Identifier',
  IdentifierType.name,
  'An identifier for a payment made using this means of payment.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentMeansFieldMetaCardAccount = new FieldMeta<PaymentMeansField>(
  PaymentMeansField.CardAccount,
  'CardAccount',
  'Card Account',
  CardAccountType.name,
  'A credit card, debit card, or charge card account that constitutes this means of payment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PaymentMeansFieldMetaPayerFinancialAccount = new FieldMeta<PaymentMeansField>(
  PaymentMeansField.PayerFinancialAccount,
  'PayerFinancialAccount',
  'Payer Financial Account',
  FinancialAccountType.name,
  'The payer\'s financial account.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PaymentMeansFieldMetaPayeeFinancialAccount = new FieldMeta<PaymentMeansField>(
  PaymentMeansField.PayeeFinancialAccount,
  'PayeeFinancialAccount',
  'Payee Financial Account',
  FinancialAccountType.name,
  'The payee\'s financial account.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PaymentMeansFieldMetaCreditAccount = new FieldMeta<PaymentMeansField>(
  PaymentMeansField.CreditAccount,
  'CreditAccount',
  'Credit Account',
  CreditAccountType.name,
  'A credit account associated with this means of payment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PaymentMeansFieldMetaPaymentMandate = new FieldMeta<PaymentMeansField>(
  PaymentMeansField.PaymentMandate,
  'PaymentMandate',
  'Payment Mandate',
  PaymentMandateType.name,
  'The payment mandate associated with this means of payment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PaymentMeansFieldMetaTradeFinancing = new FieldMeta<PaymentMeansField>(
  PaymentMeansField.TradeFinancing,
  'TradeFinancing',
  'Trade Financing',
  TradeFinancingType.name,
  'A trade finance agreement applicable to this means of payment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class PaymentMeansFieldMeta {
  public static readonly UBLExtensions = PaymentMeansFieldMetaUBLExtensions
  public static readonly ID = PaymentMeansFieldMetaID
  public static readonly PaymentMeansCode = PaymentMeansFieldMetaPaymentMeansCode
  public static readonly PaymentDueDate = PaymentMeansFieldMetaPaymentDueDate
  public static readonly PaymentChannelCode = PaymentMeansFieldMetaPaymentChannelCode
  public static readonly InstructionID = PaymentMeansFieldMetaInstructionID
  public static readonly InstructionNote = PaymentMeansFieldMetaInstructionNote
  public static readonly PaymentID = PaymentMeansFieldMetaPaymentID
  public static readonly CardAccount = PaymentMeansFieldMetaCardAccount
  public static readonly PayerFinancialAccount = PaymentMeansFieldMetaPayerFinancialAccount
  public static readonly PayeeFinancialAccount = PaymentMeansFieldMetaPayeeFinancialAccount
  public static readonly CreditAccount = PaymentMeansFieldMetaCreditAccount
  public static readonly PaymentMandate = PaymentMeansFieldMetaPaymentMandate
  public static readonly TradeFinancing = PaymentMeansFieldMetaTradeFinancing
}

export const PaymentMeansFieldMap = new Map([
  [PaymentMeansField.UBLExtensions, PaymentMeansFieldMetaUBLExtensions],
  [PaymentMeansField.ID, PaymentMeansFieldMetaID],
  [PaymentMeansField.PaymentMeansCode, PaymentMeansFieldMetaPaymentMeansCode],
  [PaymentMeansField.PaymentDueDate, PaymentMeansFieldMetaPaymentDueDate],
  [PaymentMeansField.PaymentChannelCode, PaymentMeansFieldMetaPaymentChannelCode],
  [PaymentMeansField.InstructionID, PaymentMeansFieldMetaInstructionID],
  [PaymentMeansField.InstructionNote, PaymentMeansFieldMetaInstructionNote],
  [PaymentMeansField.PaymentID, PaymentMeansFieldMetaPaymentID],
  [PaymentMeansField.CardAccount, PaymentMeansFieldMetaCardAccount],
  [PaymentMeansField.PayerFinancialAccount, PaymentMeansFieldMetaPayerFinancialAccount],
  [PaymentMeansField.PayeeFinancialAccount, PaymentMeansFieldMetaPayeeFinancialAccount],
  [PaymentMeansField.CreditAccount, PaymentMeansFieldMetaCreditAccount],
  [PaymentMeansField.PaymentMandate, PaymentMeansFieldMetaPaymentMandate],
  [PaymentMeansField.TradeFinancing, PaymentMeansFieldMetaTradeFinancing]
])

export const PaymentMeansType: Type<PaymentMeansField> = {
  name: 'PaymentMeans',
  label: 'Payment Means',
  module: TypeModule.cac,
  definition: 'A class to describe a means of payment.',
  fields: PaymentMeansFieldMap,
}
