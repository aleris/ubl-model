import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const OrderReferenceFieldMetaID = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this order reference, assigned by the buyer.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  'PO-001 3333-44-123'
)

export const OrderReferenceFieldMetaSalesOrderID = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.SalesOrderID,
  'SalesOrderID',
  'Sales Order Identifier',
  IdentifierType.name,
  'An identifier for this order reference, assigned by the seller.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderReferenceFieldMetaCopyIndicator = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether the referenced Order is a copy (true) or the original (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderReferenceFieldMetaUUID = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for this order reference.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderReferenceFieldMetaIssueDate = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date on which the referenced Order was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderReferenceFieldMetaIssueTime = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time at which the referenced Order was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderReferenceFieldMetaCustomerReference = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.CustomerReference,
  'CustomerReference',
  'Customer Reference',
  TextType.name,
  'Text used for tagging purchasing card transactions.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderReferenceFieldMetaOrderTypeCode = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.OrderTypeCode,
  'OrderTypeCode',
  'Order Type Code',
  CodeType.name,
  'A code signifying the type of the referenced Order.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderReferenceFieldMetaDocumentReference = new FieldMeta<OrderReferenceField>(
  OrderReferenceField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A document associated with this reference to an Order.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const OrderReferenceType: Type<OrderReferenceField> = {
  name: 'OrderReference',
  label: 'Order Reference',
  module: TypeModule.cac,
  definition: 'A class to define a reference to an Order.',
  fields: OrderReferenceFieldMap,
}
