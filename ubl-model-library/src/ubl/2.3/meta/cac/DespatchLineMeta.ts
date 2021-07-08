import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ItemType } from './ItemMeta'
import { OrderLineReferenceType } from './OrderLineReferenceMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { ShipmentType } from './ShipmentMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DespatchLineFieldMetaID = new FieldMeta<DespatchLineField>(
  DespatchLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this despatch line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchLineFieldMetaUUID = new FieldMeta<DespatchLineField>(
  DespatchLineField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for this despatch line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchLineFieldMetaNote = new FieldMeta<DespatchLineField>(
  DespatchLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchLineFieldMetaLineStatusCode = new FieldMeta<DespatchLineField>(
  DespatchLineField.LineStatusCode,
  'LineStatusCode',
  'Line Status Code',
  CodeType.name,
  'A code signifying the status of this despatch line with respect to its original state.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchLineFieldMetaDeliveredQuantity = new FieldMeta<DespatchLineField>(
  DespatchLineField.DeliveredQuantity,
  'DeliveredQuantity',
  'Delivered Quantity',
  QuantityType.name,
  'The quantity despatched (picked up).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchLineFieldMetaBackorderQuantity = new FieldMeta<DespatchLineField>(
  DespatchLineField.BackorderQuantity,
  'BackorderQuantity',
  'Backorder Quantity',
  QuantityType.name,
  'The quantity on back order at the supplier.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchLineFieldMetaBackorderReason = new FieldMeta<DespatchLineField>(
  DespatchLineField.BackorderReason,
  'BackorderReason',
  'Backorder Reason',
  TextType.name,
  'The reason for the back order.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchLineFieldMetaOutstandingQuantity = new FieldMeta<DespatchLineField>(
  DespatchLineField.OutstandingQuantity,
  'OutstandingQuantity',
  'Outstanding Quantity',
  QuantityType.name,
  'The quantity outstanding (which will follow in a later despatch).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchLineFieldMetaOutstandingReason = new FieldMeta<DespatchLineField>(
  DespatchLineField.OutstandingReason,
  'OutstandingReason',
  'Outstanding Reason',
  TextType.name,
  'The reason for the outstanding quantity.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchLineFieldMetaOversupplyQuantity = new FieldMeta<DespatchLineField>(
  DespatchLineField.OversupplyQuantity,
  'OversupplyQuantity',
  'Oversupply Quantity',
  QuantityType.name,
  'The quantity over-supplied, i.e., the quantity over and above that ordered.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchLineFieldMetaOrderLineReference = new FieldMeta<DespatchLineField>(
  DespatchLineField.OrderLineReference,
  'OrderLineReference',
  'Order Line Reference',
  OrderLineReferenceType.name,
  'A reference to an order line associated with this despatch line.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchLineFieldMetaDocumentReference = new FieldMeta<DespatchLineField>(
  DespatchLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to a document associated with this despatch line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchLineFieldMetaItem = new FieldMeta<DespatchLineField>(
  DespatchLineField.Item,
  'Item',
  'Item',
  ItemType.name,
  'The item associated with this despatch line.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchLineFieldMetaShipment = new FieldMeta<DespatchLineField>(
  DespatchLineField.Shipment,
  'Shipment',
  'Shipment',
  ShipmentType.name,
  'A shipment associated with this despatch line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const DespatchLineType: Type<DespatchLineField> = {
  name: 'DespatchLine',
  label: 'Despatch Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in a Despatch Advice.',
  fields: DespatchLineFieldMap,
}
