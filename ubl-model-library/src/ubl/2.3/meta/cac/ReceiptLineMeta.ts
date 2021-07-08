import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ItemType } from './ItemMeta'
import { LineReferenceType } from './LineReferenceMeta'
import { OrderLineReferenceType } from './OrderLineReferenceMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { ShipmentType } from './ShipmentMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ReceiptLineField {
  UBLExtensions = 'UBLExtensions',
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

export const ReceiptLineFieldMetaUBLExtensions = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaID = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this receipt line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaUUID = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for this receipt line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaNote = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaReceivedQuantity = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.ReceivedQuantity,
  'ReceivedQuantity',
  'Received Quantity',
  QuantityType.name,
  'The quantity received.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaShortQuantity = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.ShortQuantity,
  'ShortQuantity',
  'Short Quantity',
  QuantityType.name,
  'The quantity received short; the difference between the quantity reported despatched and the quantity actually received.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaShortageActionCode = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.ShortageActionCode,
  'ShortageActionCode',
  'Shortage Action Code',
  CodeType.name,
  'A code signifying the action that the delivery party wishes the despatch party to take as the result of a shortage.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaRejectedQuantity = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.RejectedQuantity,
  'RejectedQuantity',
  'Rejected Quantity',
  QuantityType.name,
  'The quantity rejected.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaRejectReasonCode = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.RejectReasonCode,
  'RejectReasonCode',
  'Reject Reason Code',
  CodeType.name,
  'The reason for a rejection, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaRejectReason = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.RejectReason,
  'RejectReason',
  'Reject Reason',
  TextType.name,
  'The reason for a rejection, expressed as text.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaRejectActionCode = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.RejectActionCode,
  'RejectActionCode',
  'Reject Action Code',
  CodeType.name,
  'A code signifying the action that the delivery party wishes the despatch party to take as the result of a rejection.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaQuantityDiscrepancyCode = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.QuantityDiscrepancyCode,
  'QuantityDiscrepancyCode',
  'Quantity Discrepancy Code',
  CodeType.name,
  'A code signifying the type of a discrepancy in quantity.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaOversupplyQuantity = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.OversupplyQuantity,
  'OversupplyQuantity',
  'Oversupply Quantity',
  QuantityType.name,
  'The quantity over-supplied, i.e., the quantity over and above the quantity ordered.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaReceivedDate = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.ReceivedDate,
  'ReceivedDate',
  'Received Date',
  DateType.name,
  'The date on which the goods or services were received.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaTimingComplaintCode = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.TimingComplaintCode,
  'TimingComplaintCode',
  'Timing Complaint Code',
  CodeType.name,
  'A complaint about the timing of delivery, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaTimingComplaint = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.TimingComplaint,
  'TimingComplaint',
  'Timing Complaint',
  TextType.name,
  'A complaint about the timing of delivery, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaOrderLineReference = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.OrderLineReference,
  'OrderLineReference',
  'Order Line Reference',
  OrderLineReferenceType.name,
  'A reference to the order line associated with this receipt line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaDespatchLineReference = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.DespatchLineReference,
  'DespatchLineReference',
  'Despatch Line Reference',
  LineReferenceType.name,
  'A reference to a despatch line associated with this receipt line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaDocumentReference = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to a document associated with this receipt line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaItem = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.Item,
  'Item',
  'Item',
  ItemType.name,
  'An item associated with this receipt line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReceiptLineFieldMetaShipment = new FieldMeta<ReceiptLineField>(
  ReceiptLineField.Shipment,
  'Shipment',
  'Shipment',
  ShipmentType.name,
  'A shipment associated with this receipt line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class ReceiptLineFieldMeta {
  public static readonly UBLExtensions = ReceiptLineFieldMetaUBLExtensions
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
  [ReceiptLineField.UBLExtensions, ReceiptLineFieldMetaUBLExtensions],
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

export const ReceiptLineType: Type<ReceiptLineField> = {
  name: 'ReceiptLine',
  label: 'Receipt Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in a Receipt Advice.',
  fields: ReceiptLineFieldMap,
}
