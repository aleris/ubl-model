import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { ExchangeRateType } from './ExchangeRateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PeriodType } from './PeriodMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PaymentTermsField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  PaymentMeansID = 'PaymentMeansID',
  PrepaidPaymentReferenceID = 'PrepaidPaymentReferenceID',
  Note = 'Note',
  ReferenceEventCode = 'ReferenceEventCode',
  SettlementDiscountPercent = 'SettlementDiscountPercent',
  PenaltySurchargePercent = 'PenaltySurchargePercent',
  PaymentPercent = 'PaymentPercent',
  Amount = 'Amount',
  SettlementDiscountAmount = 'SettlementDiscountAmount',
  PenaltyAmount = 'PenaltyAmount',
  PaymentTermsDetailsURI = 'PaymentTermsDetailsURI',
  PaymentDueDate = 'PaymentDueDate',
  InstallmentDueDate = 'InstallmentDueDate',
  InvoicingPartyReference = 'InvoicingPartyReference',
  SettlementPeriod = 'SettlementPeriod',
  PenaltyPeriod = 'PenaltyPeriod',
  ExchangeRate = 'ExchangeRate',
  ValidityPeriod = 'ValidityPeriod'
}

export const PaymentTermsFieldMetaUBLExtensions = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaID = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this set of payment terms.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaPaymentMeansID = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.PaymentMeansID,
  'PaymentMeansID',
  'Payment Means Identifier',
  IdentifierType.name,
  'An identifier for a means of payment associated with these payment terms.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaPrepaidPaymentReferenceID = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.PrepaidPaymentReferenceID,
  'PrepaidPaymentReferenceID',
  'Prepaid Payment Reference Identifier',
  IdentifierType.name,
  'An identifier for a reference to a prepaid payment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaNote = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaReferenceEventCode = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.ReferenceEventCode,
  'ReferenceEventCode',
  'Reference Event Code',
  CodeType.name,
  'A code signifying the event during which these terms are offered.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaSettlementDiscountPercent = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.SettlementDiscountPercent,
  'SettlementDiscountPercent',
  'Settlement Discount Percent',
  NumericType.name,
  'The percentage for the settlement discount that is offered for payment under these payment terms.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaPenaltySurchargePercent = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.PenaltySurchargePercent,
  'PenaltySurchargePercent',
  'Penalty Surcharge Percent',
  NumericType.name,
  'The penalty for payment after the settlement period, expressed as a percentage of the payment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaPaymentPercent = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.PaymentPercent,
  'PaymentPercent',
  'Payment Percent',
  NumericType.name,
  'The part of a payment, expressed as a percent, relevant for these payment terms.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaAmount = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.Amount,
  'Amount',
  'Amount',
  AmountType.name,
  'The monetary amount covered by these payment terms.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaSettlementDiscountAmount = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.SettlementDiscountAmount,
  'SettlementDiscountAmount',
  'Settlement Discount Amount',
  AmountType.name,
  'The amount of a settlement discount offered for payment under these payment terms.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaPenaltyAmount = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.PenaltyAmount,
  'PenaltyAmount',
  'Penalty Amount',
  AmountType.name,
  'The monetary amount of the penalty for payment after the settlement period.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaPaymentTermsDetailsURI = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.PaymentTermsDetailsURI,
  'PaymentTermsDetailsURI',
  'Payment Terms Details URI',
  IdentifierType.name,
  'The Uniform Resource Identifier (URI) of a document providing additional details regarding these payment terms.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaPaymentDueDate = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.PaymentDueDate,
  'PaymentDueDate',
  'Payment Due Date',
  DateType.name,
  'The due date for these payment terms.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaInstallmentDueDate = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.InstallmentDueDate,
  'InstallmentDueDate',
  'Installment Due Date',
  DateType.name,
  'The due date for an installment payment for these payment terms.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaInvoicingPartyReference = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.InvoicingPartyReference,
  'InvoicingPartyReference',
  'Invoicing Party Reference',
  TextType.name,
  'A reference to the payment terms used by the invoicing party. This may have been requested of the payer by the payee to accompany its remittance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaSettlementPeriod = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.SettlementPeriod,
  'SettlementPeriod',
  'Settlement Period',
  PeriodType.name,
  'The period during which settlement may occur.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaPenaltyPeriod = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.PenaltyPeriod,
  'PenaltyPeriod',
  'Penalty Period',
  PeriodType.name,
  'The period during which penalties may apply.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaExchangeRate = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.ExchangeRate,
  'ExchangeRate',
  'Exchange Rate',
  ExchangeRateType.name,
  'The currency exchange rate for purposes of these payment terms.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PaymentTermsFieldMetaValidityPeriod = new FieldMeta<PaymentTermsField>(
  PaymentTermsField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'The period during which these payment terms are valid.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class PaymentTermsFieldMeta {
  public static readonly UBLExtensions = PaymentTermsFieldMetaUBLExtensions
  public static readonly ID = PaymentTermsFieldMetaID
  public static readonly PaymentMeansID = PaymentTermsFieldMetaPaymentMeansID
  public static readonly PrepaidPaymentReferenceID = PaymentTermsFieldMetaPrepaidPaymentReferenceID
  public static readonly Note = PaymentTermsFieldMetaNote
  public static readonly ReferenceEventCode = PaymentTermsFieldMetaReferenceEventCode
  public static readonly SettlementDiscountPercent = PaymentTermsFieldMetaSettlementDiscountPercent
  public static readonly PenaltySurchargePercent = PaymentTermsFieldMetaPenaltySurchargePercent
  public static readonly PaymentPercent = PaymentTermsFieldMetaPaymentPercent
  public static readonly Amount = PaymentTermsFieldMetaAmount
  public static readonly SettlementDiscountAmount = PaymentTermsFieldMetaSettlementDiscountAmount
  public static readonly PenaltyAmount = PaymentTermsFieldMetaPenaltyAmount
  public static readonly PaymentTermsDetailsURI = PaymentTermsFieldMetaPaymentTermsDetailsURI
  public static readonly PaymentDueDate = PaymentTermsFieldMetaPaymentDueDate
  public static readonly InstallmentDueDate = PaymentTermsFieldMetaInstallmentDueDate
  public static readonly InvoicingPartyReference = PaymentTermsFieldMetaInvoicingPartyReference
  public static readonly SettlementPeriod = PaymentTermsFieldMetaSettlementPeriod
  public static readonly PenaltyPeriod = PaymentTermsFieldMetaPenaltyPeriod
  public static readonly ExchangeRate = PaymentTermsFieldMetaExchangeRate
  public static readonly ValidityPeriod = PaymentTermsFieldMetaValidityPeriod
}

export const PaymentTermsFieldMap = new Map([
  [PaymentTermsField.UBLExtensions, PaymentTermsFieldMetaUBLExtensions],
  [PaymentTermsField.ID, PaymentTermsFieldMetaID],
  [PaymentTermsField.PaymentMeansID, PaymentTermsFieldMetaPaymentMeansID],
  [PaymentTermsField.PrepaidPaymentReferenceID, PaymentTermsFieldMetaPrepaidPaymentReferenceID],
  [PaymentTermsField.Note, PaymentTermsFieldMetaNote],
  [PaymentTermsField.ReferenceEventCode, PaymentTermsFieldMetaReferenceEventCode],
  [PaymentTermsField.SettlementDiscountPercent, PaymentTermsFieldMetaSettlementDiscountPercent],
  [PaymentTermsField.PenaltySurchargePercent, PaymentTermsFieldMetaPenaltySurchargePercent],
  [PaymentTermsField.PaymentPercent, PaymentTermsFieldMetaPaymentPercent],
  [PaymentTermsField.Amount, PaymentTermsFieldMetaAmount],
  [PaymentTermsField.SettlementDiscountAmount, PaymentTermsFieldMetaSettlementDiscountAmount],
  [PaymentTermsField.PenaltyAmount, PaymentTermsFieldMetaPenaltyAmount],
  [PaymentTermsField.PaymentTermsDetailsURI, PaymentTermsFieldMetaPaymentTermsDetailsURI],
  [PaymentTermsField.PaymentDueDate, PaymentTermsFieldMetaPaymentDueDate],
  [PaymentTermsField.InstallmentDueDate, PaymentTermsFieldMetaInstallmentDueDate],
  [PaymentTermsField.InvoicingPartyReference, PaymentTermsFieldMetaInvoicingPartyReference],
  [PaymentTermsField.SettlementPeriod, PaymentTermsFieldMetaSettlementPeriod],
  [PaymentTermsField.PenaltyPeriod, PaymentTermsFieldMetaPenaltyPeriod],
  [PaymentTermsField.ExchangeRate, PaymentTermsFieldMetaExchangeRate],
  [PaymentTermsField.ValidityPeriod, PaymentTermsFieldMetaValidityPeriod]
])

export const PaymentTermsType: Type<PaymentTermsField> = {
  name: 'PaymentTerms',
  label: 'Payment Terms',
  module: TypeModule.cac,
  definition: 'A class to describe a set of payment terms.',
  fields: PaymentTermsFieldMap,
}
