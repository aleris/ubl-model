import { FieldMeta } from '../FieldMeta'

export enum DespatchLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  UUID = 'UUID',
  Note = 'Note',
  LineStatusCode = 'LineStatusCode',
  DeliveredQuantity = 'DeliveredQuantity',
  BackorderQuantity = 'BackorderQuantity',
  BackorderReason = 'BackorderReason',
  OutstandingQuantity = 'OutstandingQuantity',
  OutstandingReason = 'OutstandingReason',
  OversupplyQuantity = 'OversupplyQuantity',
  OrderLineReference = 'OrderLineReference',
  DocumentReference = 'DocumentReference',
  Item = 'Item',
  Shipment = 'Shipment'
}

export const DespatchLineFieldMetaUBLExtensions = new FieldMeta<DespatchLineField>(
  DespatchLineField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const DespatchLineFieldMetaID = new FieldMeta<DespatchLineField>(
  DespatchLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this despatch line.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const DespatchLineFieldMetaUUID = new FieldMeta<DespatchLineField>(
  DespatchLineField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for this despatch line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DespatchLineFieldMetaNote = new FieldMeta<DespatchLineField>(
  DespatchLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const DespatchLineFieldMetaLineStatusCode = new FieldMeta<DespatchLineField>(
  DespatchLineField.LineStatusCode,
  'LineStatusCode',
  'Line Status Code',
  'Code',
  'A code signifying the status of this despatch line with respect to its original state.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DespatchLineFieldMetaDeliveredQuantity = new FieldMeta<DespatchLineField>(
  DespatchLineField.DeliveredQuantity,
  'DeliveredQuantity',
  'Delivered Quantity',
  'Quantity',
  'The quantity despatched (picked up).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DespatchLineFieldMetaBackorderQuantity = new FieldMeta<DespatchLineField>(
  DespatchLineField.BackorderQuantity,
  'BackorderQuantity',
  'Backorder Quantity',
  'Quantity',
  'The quantity on back order at the supplier.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DespatchLineFieldMetaBackorderReason = new FieldMeta<DespatchLineField>(
  DespatchLineField.BackorderReason,
  'BackorderReason',
  'Backorder Reason',
  'Text',
  'The reason for the back order.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const DespatchLineFieldMetaOutstandingQuantity = new FieldMeta<DespatchLineField>(
  DespatchLineField.OutstandingQuantity,
  'OutstandingQuantity',
  'Outstanding Quantity',
  'Quantity',
  'The quantity outstanding (which will follow in a later despatch).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DespatchLineFieldMetaOutstandingReason = new FieldMeta<DespatchLineField>(
  DespatchLineField.OutstandingReason,
  'OutstandingReason',
  'Outstanding Reason',
  'Text',
  'The reason for the outstanding quantity.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const DespatchLineFieldMetaOversupplyQuantity = new FieldMeta<DespatchLineField>(
  DespatchLineField.OversupplyQuantity,
  'OversupplyQuantity',
  'Oversupply Quantity',
  'Quantity',
  'The quantity over-supplied, i.e., the quantity over and above that ordered.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DespatchLineFieldMetaOrderLineReference = new FieldMeta<DespatchLineField>(
  DespatchLineField.OrderLineReference,
  'OrderLineReference',
  'Order Line Reference',
  'OrderLineReference',
  'A reference to an order line associated with this despatch line.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export const DespatchLineFieldMetaDocumentReference = new FieldMeta<DespatchLineField>(
  DespatchLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a document associated with this despatch line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const DespatchLineFieldMetaItem = new FieldMeta<DespatchLineField>(
  DespatchLineField.Item,
  'Item',
  'Item',
  'Item',
  'The item associated with this despatch line.',
  '1',
  'cac',
  undefined,
  undefined
)

export const DespatchLineFieldMetaShipment = new FieldMeta<DespatchLineField>(
  DespatchLineField.Shipment,
  'Shipment',
  'Shipment',
  'Shipment',
  'A shipment associated with this despatch line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class DespatchLineFieldMeta {
  public static readonly UBLExtensions = DespatchLineFieldMetaUBLExtensions
  public static readonly ID = DespatchLineFieldMetaID
  public static readonly UUID = DespatchLineFieldMetaUUID
  public static readonly Note = DespatchLineFieldMetaNote
  public static readonly LineStatusCode = DespatchLineFieldMetaLineStatusCode
  public static readonly DeliveredQuantity = DespatchLineFieldMetaDeliveredQuantity
  public static readonly BackorderQuantity = DespatchLineFieldMetaBackorderQuantity
  public static readonly BackorderReason = DespatchLineFieldMetaBackorderReason
  public static readonly OutstandingQuantity = DespatchLineFieldMetaOutstandingQuantity
  public static readonly OutstandingReason = DespatchLineFieldMetaOutstandingReason
  public static readonly OversupplyQuantity = DespatchLineFieldMetaOversupplyQuantity
  public static readonly OrderLineReference = DespatchLineFieldMetaOrderLineReference
  public static readonly DocumentReference = DespatchLineFieldMetaDocumentReference
  public static readonly Item = DespatchLineFieldMetaItem
  public static readonly Shipment = DespatchLineFieldMetaShipment
}

export const DespatchLineFieldMap = new Map([
  [DespatchLineField.UBLExtensions, DespatchLineFieldMetaUBLExtensions],
  [DespatchLineField.ID, DespatchLineFieldMetaID],
  [DespatchLineField.UUID, DespatchLineFieldMetaUUID],
  [DespatchLineField.Note, DespatchLineFieldMetaNote],
  [DespatchLineField.LineStatusCode, DespatchLineFieldMetaLineStatusCode],
  [DespatchLineField.DeliveredQuantity, DespatchLineFieldMetaDeliveredQuantity],
  [DespatchLineField.BackorderQuantity, DespatchLineFieldMetaBackorderQuantity],
  [DespatchLineField.BackorderReason, DespatchLineFieldMetaBackorderReason],
  [DespatchLineField.OutstandingQuantity, DespatchLineFieldMetaOutstandingQuantity],
  [DespatchLineField.OutstandingReason, DespatchLineFieldMetaOutstandingReason],
  [DespatchLineField.OversupplyQuantity, DespatchLineFieldMetaOversupplyQuantity],
  [DespatchLineField.OrderLineReference, DespatchLineFieldMetaOrderLineReference],
  [DespatchLineField.DocumentReference, DespatchLineFieldMetaDocumentReference],
  [DespatchLineField.Item, DespatchLineFieldMetaItem],
  [DespatchLineField.Shipment, DespatchLineFieldMetaShipment]
])
