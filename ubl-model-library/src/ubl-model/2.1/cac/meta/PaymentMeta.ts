import { FieldMeta } from '../../FieldMeta'

export enum PaymentField {
  ID = 'ID',
  PaidAmount = 'PaidAmount',
  ReceivedDate = 'ReceivedDate',
  PaidDate = 'PaidDate',
  PaidTime = 'PaidTime',
  InstructionID = 'InstructionID'
}

export const PaymentFieldMetaID = new FieldMeta<PaymentField>(
  PaymentField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this payment.',
  '0..1',
  undefined,
  undefined
)

export const PaymentFieldMetaPaidAmount = new FieldMeta<PaymentField>(
  PaymentField.PaidAmount,
  'PaidAmount',
  'Amount',
  'Amount',
  'The amount of this payment.',
  '0..1',
  undefined,
  undefined
)

export const PaymentFieldMetaReceivedDate = new FieldMeta<PaymentField>(
  PaymentField.ReceivedDate,
  'ReceivedDate',
  'Date',
  'Date',
  'The date on which this payment was received.',
  '0..1',
  undefined,
  undefined
)

export const PaymentFieldMetaPaidDate = new FieldMeta<PaymentField>(
  PaymentField.PaidDate,
  'PaidDate',
  'Date',
  'Date',
  'The date on which this payment was made.',
  '0..1',
  undefined,
  undefined
)

export const PaymentFieldMetaPaidTime = new FieldMeta<PaymentField>(
  PaymentField.PaidTime,
  'PaidTime',
  'Time',
  'Time',
  'The time at which this payment was made.',
  '0..1',
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
  undefined,
  undefined
)

export class PaymentFieldMeta {
  public static readonly ID = PaymentFieldMetaID
  public static readonly PaidAmount = PaymentFieldMetaPaidAmount
  public static readonly ReceivedDate = PaymentFieldMetaReceivedDate
  public static readonly PaidDate = PaymentFieldMetaPaidDate
  public static readonly PaidTime = PaymentFieldMetaPaidTime
  public static readonly InstructionID = PaymentFieldMetaInstructionID
}

export const PaymentFieldMap = new Map([
  [PaymentField.ID, PaymentFieldMetaID],
  [PaymentField.PaidAmount, PaymentFieldMetaPaidAmount],
  [PaymentField.ReceivedDate, PaymentFieldMetaReceivedDate],
  [PaymentField.PaidDate, PaymentFieldMetaPaidDate],
  [PaymentField.PaidTime, PaymentFieldMetaPaidTime],
  [PaymentField.InstructionID, PaymentFieldMetaInstructionID]
])
