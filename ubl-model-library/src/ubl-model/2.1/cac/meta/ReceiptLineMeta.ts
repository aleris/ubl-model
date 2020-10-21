import { FieldMeta } from '../../FieldMeta'

export enum ReceiptLineField {
  ID = 'ID',
  UUID = 'UUID',
  Note = 'Note',
  ReceivedQuantity = 'ReceivedQuantity',
  ShortQuantity = 'ShortQuantity',
  ShortageActionCode = 'ShortageActionCode',
  RejectedQuantity = 'RejectedQuantity',
  RejectReasonCode = 'RejectReasonCode',
  RejectReason = 'RejectReason',
  RejectActionCode = 'RejectActionCode',
  QuantityDiscrepancyCode = 'QuantityDiscrepancyCode',
  OversupplyQuantity = 'OversupplyQuantity',
  ReceivedDate = 'ReceivedDate',
  TimingComplaintCode = 'TimingComplaintCode',
  TimingComplaint = 'TimingComplaint',
  OrderLineReference = 'OrderLineReference',
  DespatchLineReference = 'DespatchLineReference',
  DocumentReference = 'DocumentReference',
  Item = 'Item',
  Shipment = 'Shipment'
}

export const ReceiptLineFieldMetaID = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this receipt line.',
  '1',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaUUID = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for this receipt line.',
  '0..1',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaNote = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaReceivedQuantity = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.ReceivedQuantity,
  'ReceivedQuantity',
  'Quantity',
  'Quantity',
  'The quantity received.',
  '0..1',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaShortQuantity = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.ShortQuantity,
  'ShortQuantity',
  'Quantity',
  'Quantity',
  'The quantity received short; the difference between the quantity reported despatched and the quantity actually received.',
  '0..1',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaShortageActionCode = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.ShortageActionCode,
  'ShortageActionCode',
  'Shortage Action Code',
  'Code',
  'A code signifying the action that the delivery party wishes the despatch party to take as the result of a shortage.',
  '0..1',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaRejectedQuantity = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.RejectedQuantity,
  'RejectedQuantity',
  'Quantity',
  'Quantity',
  'The quantity rejected.',
  '0..1',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaRejectReasonCode = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.RejectReasonCode,
  'RejectReasonCode',
  'Reject Reason Code',
  'Code',
  'The reason for a rejection, expressed as a code.',
  '0..1',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaRejectReason = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.RejectReason,
  'RejectReason',
  'Reason',
  'Text',
  'The reason for a rejection, expressed as text.',
  '0..n',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaRejectActionCode = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.RejectActionCode,
  'RejectActionCode',
  'Reject Action Code',
  'Code',
  'A code signifying the action that the delivery party wishes the despatch party to take as the result of a rejection.',
  '0..1',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaQuantityDiscrepancyCode = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.QuantityDiscrepancyCode,
  'QuantityDiscrepancyCode',
  'Quantity Discrepancy Code',
  'Code',
  'A code signifying the type of a discrepancy in quantity.',
  '0..1',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaOversupplyQuantity = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.OversupplyQuantity,
  'OversupplyQuantity',
  'Quantity',
  'Quantity',
  'The quantity over-supplied, i.e., the quantity over and above the quantity ordered.',
  '0..1',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaReceivedDate = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.ReceivedDate,
  'ReceivedDate',
  'Date',
  'Date',
  'The date on which the goods or services were received.',
  '0..1',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaTimingComplaintCode = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.TimingComplaintCode,
  'TimingComplaintCode',
  'Timing Complaint Code',
  'Code',
  'A complaint about the timing of delivery, expressed as a code.',
  '0..1',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaTimingComplaint = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.TimingComplaint,
  'TimingComplaint',
  'Timing Complaint',
  'Text',
  'A complaint about the timing of delivery, expressed as text.',
  '0..1',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaOrderLineReference = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.OrderLineReference,
  'OrderLineReference',
  'Order Line Reference',
  'OrderLineReference',
  'A reference to the order line associated with this receipt line.',
  '0..1',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaDespatchLineReference = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.DespatchLineReference,
  'DespatchLineReference',
  'Line Reference',
  'LineReference',
  'A reference to a despatch line associated with this receipt line.',
  '0..n',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaDocumentReference = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a document associated with this receipt line.',
  '0..n',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaItem = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.Item,
  'Item',
  'Item',
  'Item',
  'An item associated with this receipt line.',
  '0..n',
  undefined,
  undefined
)

export const ReceiptLineFieldMetaShipment = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.Shipment,
  'Shipment',
  'Shipment',
  'Shipment',
  'A shipment associated with this receipt line.',
  '0..n',
  undefined,
  undefined
)

export class ReceiptLineFieldMeta {
  public static readonly ID = ReceiptLineFieldMetaID
  public static readonly UUID = ReceiptLineFieldMetaUUID
  public static readonly Note = ReceiptLineFieldMetaNote
  public static readonly ReceivedQuantity = ReceiptLineFieldMetaReceivedQuantity
  public static readonly ShortQuantity = ReceiptLineFieldMetaShortQuantity
  public static readonly ShortageActionCode = ReceiptLineFieldMetaShortageActionCode
  public static readonly RejectedQuantity = ReceiptLineFieldMetaRejectedQuantity
  public static readonly RejectReasonCode = ReceiptLineFieldMetaRejectReasonCode
  public static readonly RejectReason = ReceiptLineFieldMetaRejectReason
  public static readonly RejectActionCode = ReceiptLineFieldMetaRejectActionCode
  public static readonly QuantityDiscrepancyCode = ReceiptLineFieldMetaQuantityDiscrepancyCode
  public static readonly OversupplyQuantity = ReceiptLineFieldMetaOversupplyQuantity
  public static readonly ReceivedDate = ReceiptLineFieldMetaReceivedDate
  public static readonly TimingComplaintCode = ReceiptLineFieldMetaTimingComplaintCode
  public static readonly TimingComplaint = ReceiptLineFieldMetaTimingComplaint
  public static readonly OrderLineReference = ReceiptLineFieldMetaOrderLineReference
  public static readonly DespatchLineReference = ReceiptLineFieldMetaDespatchLineReference
  public static readonly DocumentReference = ReceiptLineFieldMetaDocumentReference
  public static readonly Item = ReceiptLineFieldMetaItem
  public static readonly Shipment = ReceiptLineFieldMetaShipment
}

export const ReceiptLineFieldMap = new Map([
  [ReceiptLineField.ID, ReceiptLineFieldMetaID],
  [ReceiptLineField.UUID, ReceiptLineFieldMetaUUID],
  [ReceiptLineField.Note, ReceiptLineFieldMetaNote],
  [ReceiptLineField.ReceivedQuantity, ReceiptLineFieldMetaReceivedQuantity],
  [ReceiptLineField.ShortQuantity, ReceiptLineFieldMetaShortQuantity],
  [ReceiptLineField.ShortageActionCode, ReceiptLineFieldMetaShortageActionCode],
  [ReceiptLineField.RejectedQuantity, ReceiptLineFieldMetaRejectedQuantity],
  [ReceiptLineField.RejectReasonCode, ReceiptLineFieldMetaRejectReasonCode],
  [ReceiptLineField.RejectReason, ReceiptLineFieldMetaRejectReason],
  [ReceiptLineField.RejectActionCode, ReceiptLineFieldMetaRejectActionCode],
  [ReceiptLineField.QuantityDiscrepancyCode, ReceiptLineFieldMetaQuantityDiscrepancyCode],
  [ReceiptLineField.OversupplyQuantity, ReceiptLineFieldMetaOversupplyQuantity],
  [ReceiptLineField.ReceivedDate, ReceiptLineFieldMetaReceivedDate],
  [ReceiptLineField.TimingComplaintCode, ReceiptLineFieldMetaTimingComplaintCode],
  [ReceiptLineField.TimingComplaint, ReceiptLineFieldMetaTimingComplaint],
  [ReceiptLineField.OrderLineReference, ReceiptLineFieldMetaOrderLineReference],
  [ReceiptLineField.DespatchLineReference, ReceiptLineFieldMetaDespatchLineReference],
  [ReceiptLineField.DocumentReference, ReceiptLineFieldMetaDocumentReference],
  [ReceiptLineField.Item, ReceiptLineFieldMetaItem],
  [ReceiptLineField.Shipment, ReceiptLineFieldMetaShipment]
])
