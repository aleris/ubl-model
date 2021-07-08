import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PaymentField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  PaidAmount = 'PaidAmount',
  ReceivedDate = 'ReceivedDate',
  PaidDate = 'PaidDate',
  PaidTime = 'PaidTime',
  InstructionID = 'InstructionID'
}

export const PaymentFieldMetaUBLExtensions = new FieldMeta<PaymentField>(
  PaymentField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PaymentFieldMetaID = new FieldMeta<PaymentField>(
  PaymentField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this payment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentFieldMetaPaidAmount = new FieldMeta<PaymentField>(
  PaymentField.PaidAmount,
  'PaidAmount',
  'Paid Amount',
  AmountType.name,
  'The amount of this payment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentFieldMetaReceivedDate = new FieldMeta<PaymentField>(
  PaymentField.ReceivedDate,
  'ReceivedDate',
  'Received Date',
  DateType.name,
  'The date on which this payment was received.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentFieldMetaPaidDate = new FieldMeta<PaymentField>(
  PaymentField.PaidDate,
  'PaidDate',
  'Paid Date',
  DateType.name,
  'The date on which this payment was made.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentFieldMetaPaidTime = new FieldMeta<PaymentField>(
  PaymentField.PaidTime,
  'PaidTime',
  'Paid Time',
  TimeType.name,
  'The time at which this payment was made.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PaymentFieldMetaInstructionID = new FieldMeta<PaymentField>(
  PaymentField.InstructionID,
  'InstructionID',
  'Instruction Identifier',
  IdentifierType.name,
  'An identifier for the payment instruction.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class PaymentFieldMeta {
  public static readonly UBLExtensions = PaymentFieldMetaUBLExtensions
  public static readonly ID = PaymentFieldMetaID
  public static readonly PaidAmount = PaymentFieldMetaPaidAmount
  public static readonly ReceivedDate = PaymentFieldMetaReceivedDate
  public static readonly PaidDate = PaymentFieldMetaPaidDate
  public static readonly PaidTime = PaymentFieldMetaPaidTime
  public static readonly InstructionID = PaymentFieldMetaInstructionID
}

export const PaymentFieldMap = new Map([
  [PaymentField.UBLExtensions, PaymentFieldMetaUBLExtensions],
  [PaymentField.ID, PaymentFieldMetaID],
  [PaymentField.PaidAmount, PaymentFieldMetaPaidAmount],
  [PaymentField.ReceivedDate, PaymentFieldMetaReceivedDate],
  [PaymentField.PaidDate, PaymentFieldMetaPaidDate],
  [PaymentField.PaidTime, PaymentFieldMetaPaidTime],
  [PaymentField.InstructionID, PaymentFieldMetaInstructionID]
])

export const PaymentType: Type<PaymentField> = {
  name: 'Payment',
  label: 'Payment',
  module: TypeModule.cac,
  definition: 'A class to describe a payment.',
  fields: PaymentFieldMap,
}
