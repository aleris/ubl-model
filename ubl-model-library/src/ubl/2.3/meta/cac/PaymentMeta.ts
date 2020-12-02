import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const PaymentFieldMetaID = new FieldMeta<PaymentField>(
  PaymentField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this payment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PaymentFieldMetaPaidAmount = new FieldMeta<PaymentField>(
  PaymentField.PaidAmount,
  'PaidAmount',
  'Paid Amount',
  'Amount',
  'The amount of this payment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PaymentFieldMetaReceivedDate = new FieldMeta<PaymentField>(
  PaymentField.ReceivedDate,
  'ReceivedDate',
  'Received Date',
  'Date',
  'The date on which this payment was received.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PaymentFieldMetaPaidDate = new FieldMeta<PaymentField>(
  PaymentField.PaidDate,
  'PaidDate',
  'Paid Date',
  'Date',
  'The date on which this payment was made.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PaymentFieldMetaPaidTime = new FieldMeta<PaymentField>(
  PaymentField.PaidTime,
  'PaidTime',
  'Paid Time',
  'Time',
  'The time at which this payment was made.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PaymentFieldMetaInstructionID = new FieldMeta<PaymentField>(
  PaymentField.InstructionID,
  'InstructionID',
  'Instruction Identifier',
  'Identifier',
  'An identifier for the payment instruction.',
  '0..1',
  'cbc',
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
