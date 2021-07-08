import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { OrderReferenceType } from './OrderReferenceMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const OrderLineReferenceFieldMetaLineID = new FieldMeta<OrderLineReferenceField>(
  OrderLineReferenceField.LineID,
  'LineID',
  'Line Identifier',
  IdentifierType.name,
  'An identifier for the referenced order line, assigned by the buyer.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderLineReferenceFieldMetaSalesOrderLineID = new FieldMeta<OrderLineReferenceField>(
  OrderLineReferenceField.SalesOrderLineID,
  'SalesOrderLineID',
  'Sales Order Line Identifier',
  IdentifierType.name,
  'An identifier for the referenced order line, assigned by the seller.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderLineReferenceFieldMetaUUID = new FieldMeta<OrderLineReferenceField>(
  OrderLineReferenceField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for this order line reference.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderLineReferenceFieldMetaLineStatusCode = new FieldMeta<OrderLineReferenceField>(
  OrderLineReferenceField.LineStatusCode,
  'LineStatusCode',
  'Line Status Code',
  CodeType.name,
  'A code signifying the status of the referenced order line with respect to its original state.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderLineReferenceFieldMetaOrderReference = new FieldMeta<OrderLineReferenceField>(
  OrderLineReferenceField.OrderReference,
  'OrderReference',
  'Order Reference',
  OrderReferenceType.name,
  'A reference to the Order containing the referenced order line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const OrderLineReferenceType: Type<OrderLineReferenceField> = {
  name: 'OrderLineReference',
  label: 'Order Line Reference',
  module: TypeModule.cac,
  definition: 'A class to define a reference to an order line.',
  fields: OrderLineReferenceFieldMap,
}
