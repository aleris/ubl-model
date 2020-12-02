import { FieldMeta } from '../FieldMeta'

export enum OrderReferenceField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  SalesOrderID = 'SalesOrderID',
  CopyIndicator = 'CopyIndicator',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  CustomerReference = 'CustomerReference',
  OrderTypeCode = 'OrderTypeCode',
  DocumentReference = 'DocumentReference'
}

export const OrderReferenceFieldMetaUBLExtensions = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const OrderReferenceFieldMetaID = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this order reference, assigned by the buyer.',
  '1',
  'cbc',
  undefined,
  'PO-001 3333-44-123'
)

export const OrderReferenceFieldMetaSalesOrderID = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.SalesOrderID,
  'SalesOrderID',
  'Sales Order Identifier',
  'Identifier',
  'An identifier for this order reference, assigned by the seller.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const OrderReferenceFieldMetaCopyIndicator = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether the referenced Order is a copy (true) or the original (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const OrderReferenceFieldMetaUUID = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for this order reference.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const OrderReferenceFieldMetaIssueDate = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date on which the referenced Order was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const OrderReferenceFieldMetaIssueTime = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time at which the referenced Order was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const OrderReferenceFieldMetaCustomerReference = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.CustomerReference,
  'CustomerReference',
  'Customer Reference',
  'Text',
  'Text used for tagging purchasing card transactions.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const OrderReferenceFieldMetaOrderTypeCode = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.OrderTypeCode,
  'OrderTypeCode',
  'Order Type Code',
  'Code',
  'A code signifying the type of the referenced Order.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const OrderReferenceFieldMetaDocumentReference = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A document associated with this reference to an Order.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class OrderReferenceFieldMeta {
  public static readonly UBLExtensions = OrderReferenceFieldMetaUBLExtensions
  public static readonly ID = OrderReferenceFieldMetaID
  public static readonly SalesOrderID = OrderReferenceFieldMetaSalesOrderID
  public static readonly CopyIndicator = OrderReferenceFieldMetaCopyIndicator
  public static readonly UUID = OrderReferenceFieldMetaUUID
  public static readonly IssueDate = OrderReferenceFieldMetaIssueDate
  public static readonly IssueTime = OrderReferenceFieldMetaIssueTime
  public static readonly CustomerReference = OrderReferenceFieldMetaCustomerReference
  public static readonly OrderTypeCode = OrderReferenceFieldMetaOrderTypeCode
  public static readonly DocumentReference = OrderReferenceFieldMetaDocumentReference
}

export const OrderReferenceFieldMap = new Map([
  [OrderReferenceField.UBLExtensions, OrderReferenceFieldMetaUBLExtensions],
  [OrderReferenceField.ID, OrderReferenceFieldMetaID],
  [OrderReferenceField.SalesOrderID, OrderReferenceFieldMetaSalesOrderID],
  [OrderReferenceField.CopyIndicator, OrderReferenceFieldMetaCopyIndicator],
  [OrderReferenceField.UUID, OrderReferenceFieldMetaUUID],
  [OrderReferenceField.IssueDate, OrderReferenceFieldMetaIssueDate],
  [OrderReferenceField.IssueTime, OrderReferenceFieldMetaIssueTime],
  [OrderReferenceField.CustomerReference, OrderReferenceFieldMetaCustomerReference],
  [OrderReferenceField.OrderTypeCode, OrderReferenceFieldMetaOrderTypeCode],
  [OrderReferenceField.DocumentReference, OrderReferenceFieldMetaDocumentReference]
])
