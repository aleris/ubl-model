import { FieldMeta } from '../FieldMeta'

export enum OrderLineReferenceField {
  UBLExtensions = 'UBLExtensions',
  LineID = 'LineID',
  SalesOrderLineID = 'SalesOrderLineID',
  UUID = 'UUID',
  LineStatusCode = 'LineStatusCode',
  OrderReference = 'OrderReference'
}

export const OrderLineReferenceFieldMetaUBLExtensions = new FieldMeta<OrderLineReferenceField>(
  OrderLineReferenceField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const OrderLineReferenceFieldMetaLineID = new FieldMeta<OrderLineReferenceField>(
  OrderLineReferenceField.LineID,
  'LineID',
  'Line Identifier',
  'Identifier',
  'An identifier for the referenced order line, assigned by the buyer.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const OrderLineReferenceFieldMetaSalesOrderLineID = new FieldMeta<OrderLineReferenceField>(
  OrderLineReferenceField.SalesOrderLineID,
  'SalesOrderLineID',
  'Sales Order Line Identifier',
  'Identifier',
  'An identifier for the referenced order line, assigned by the seller.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const OrderLineReferenceFieldMetaUUID = new FieldMeta<OrderLineReferenceField>(
  OrderLineReferenceField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for this order line reference.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const OrderLineReferenceFieldMetaLineStatusCode = new FieldMeta<OrderLineReferenceField>(
  OrderLineReferenceField.LineStatusCode,
  'LineStatusCode',
  'Line Status Code',
  'Code',
  'A code signifying the status of the referenced order line with respect to its original state.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const OrderLineReferenceFieldMetaOrderReference = new FieldMeta<OrderLineReferenceField>(
  OrderLineReferenceField.OrderReference,
  'OrderReference',
  'Order Reference',
  'OrderReference',
  'A reference to the Order containing the referenced order line.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class OrderLineReferenceFieldMeta {
  public static readonly UBLExtensions = OrderLineReferenceFieldMetaUBLExtensions
  public static readonly LineID = OrderLineReferenceFieldMetaLineID
  public static readonly SalesOrderLineID = OrderLineReferenceFieldMetaSalesOrderLineID
  public static readonly UUID = OrderLineReferenceFieldMetaUUID
  public static readonly LineStatusCode = OrderLineReferenceFieldMetaLineStatusCode
  public static readonly OrderReference = OrderLineReferenceFieldMetaOrderReference
}

export const OrderLineReferenceFieldMap = new Map([
  [OrderLineReferenceField.UBLExtensions, OrderLineReferenceFieldMetaUBLExtensions],
  [OrderLineReferenceField.LineID, OrderLineReferenceFieldMetaLineID],
  [OrderLineReferenceField.SalesOrderLineID, OrderLineReferenceFieldMetaSalesOrderLineID],
  [OrderLineReferenceField.UUID, OrderLineReferenceFieldMetaUUID],
  [OrderLineReferenceField.LineStatusCode, OrderLineReferenceFieldMetaLineStatusCode],
  [OrderLineReferenceField.OrderReference, OrderLineReferenceFieldMetaOrderReference]
])
