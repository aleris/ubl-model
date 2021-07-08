import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { LineItemType } from './LineItemMeta'
import { LineReferenceType } from './LineReferenceMeta'
import { OrderLineReferenceType } from './OrderLineReferenceMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum OrderLineField {
  UBLExtensions = 'UBLExtensions',
  SubstitutionStatusCode = 'SubstitutionStatusCode',
  Note = 'Note',
  LineItem = 'LineItem',
  SellerProposedSubstituteLineItem = 'SellerProposedSubstituteLineItem',
  SellerSubstitutedLineItem = 'SellerSubstitutedLineItem',
  BuyerProposedSubstituteLineItem = 'BuyerProposedSubstituteLineItem',
  CatalogueLineReference = 'CatalogueLineReference',
  QuotationLineReference = 'QuotationLineReference',
  OrderLineReference = 'OrderLineReference',
  DocumentReference = 'DocumentReference'
}

export const OrderLineFieldMetaUBLExtensions = new FieldMeta<OrderLineField>(
  OrderLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const OrderLineFieldMetaSubstitutionStatusCode = new FieldMeta<OrderLineField>(
  OrderLineField.SubstitutionStatusCode,
  'SubstitutionStatusCode',
  'Substitution Status Code',
  CodeType.name,
  'A code signifying the substitution status of the item on this order line. The order line may indicate that the substitute is proposed by the buyer (in Order) or by the seller (in Order Response) or that a substitution has been made by the seller (in Order Response).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderLineFieldMetaNote = new FieldMeta<OrderLineField>(
  OrderLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderLineFieldMetaLineItem = new FieldMeta<OrderLineField>(
  OrderLineField.LineItem,
  'LineItem',
  'Line Item',
  LineItemType.name,
  'The line item itself.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderLineFieldMetaSellerProposedSubstituteLineItem = new FieldMeta<OrderLineField>(
  OrderLineField.SellerProposedSubstituteLineItem,
  'SellerProposedSubstituteLineItem',
  'Seller Proposed Substitute Line Item',
  LineItemType.name,
  'In Order Response, a line item proposed by the seller describing a product that might substitute for the product described in this order line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderLineFieldMetaSellerSubstitutedLineItem = new FieldMeta<OrderLineField>(
  OrderLineField.SellerSubstitutedLineItem,
  'SellerSubstitutedLineItem',
  'Seller Substituted Line Item',
  LineItemType.name,
  'In Order Response, a line item that has replaced the original order line item. The specified quantity and pricing may differ from those in the original line item, but when a line item is substituted by the seller, it is assumed that other information, such as shipment details, will remain the same.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderLineFieldMetaBuyerProposedSubstituteLineItem = new FieldMeta<OrderLineField>(
  OrderLineField.BuyerProposedSubstituteLineItem,
  'BuyerProposedSubstituteLineItem',
  'Buyer Proposed Substitute Line Item',
  LineItemType.name,
  'A description of an item proposed by the buyer as a possible alternative to the item associated with this order line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderLineFieldMetaCatalogueLineReference = new FieldMeta<OrderLineField>(
  OrderLineField.CatalogueLineReference,
  'CatalogueLineReference',
  'Catalogue Line Reference',
  LineReferenceType.name,
  'A reference to a catalogue line associated with this order line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderLineFieldMetaQuotationLineReference = new FieldMeta<OrderLineField>(
  OrderLineField.QuotationLineReference,
  'QuotationLineReference',
  'Quotation Line Reference',
  LineReferenceType.name,
  'A reference to a quotation line associated with this order line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderLineFieldMetaOrderLineReference = new FieldMeta<OrderLineField>(
  OrderLineField.OrderLineReference,
  'OrderLineReference',
  'Order Line Reference',
  OrderLineReferenceType.name,
  'A reference to another order line, such as in a replacement order or another line on the same order that is related.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderLineFieldMetaDocumentReference = new FieldMeta<OrderLineField>(
  OrderLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to a document associated with this order line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class OrderLineFieldMeta {
  public static readonly UBLExtensions = OrderLineFieldMetaUBLExtensions
  public static readonly SubstitutionStatusCode = OrderLineFieldMetaSubstitutionStatusCode
  public static readonly Note = OrderLineFieldMetaNote
  public static readonly LineItem = OrderLineFieldMetaLineItem
  public static readonly SellerProposedSubstituteLineItem = OrderLineFieldMetaSellerProposedSubstituteLineItem
  public static readonly SellerSubstitutedLineItem = OrderLineFieldMetaSellerSubstitutedLineItem
  public static readonly BuyerProposedSubstituteLineItem = OrderLineFieldMetaBuyerProposedSubstituteLineItem
  public static readonly CatalogueLineReference = OrderLineFieldMetaCatalogueLineReference
  public static readonly QuotationLineReference = OrderLineFieldMetaQuotationLineReference
  public static readonly OrderLineReference = OrderLineFieldMetaOrderLineReference
  public static readonly DocumentReference = OrderLineFieldMetaDocumentReference
}

export const OrderLineFieldMap = new Map([
  [OrderLineField.UBLExtensions, OrderLineFieldMetaUBLExtensions],
  [OrderLineField.SubstitutionStatusCode, OrderLineFieldMetaSubstitutionStatusCode],
  [OrderLineField.Note, OrderLineFieldMetaNote],
  [OrderLineField.LineItem, OrderLineFieldMetaLineItem],
  [OrderLineField.SellerProposedSubstituteLineItem, OrderLineFieldMetaSellerProposedSubstituteLineItem],
  [OrderLineField.SellerSubstitutedLineItem, OrderLineFieldMetaSellerSubstitutedLineItem],
  [OrderLineField.BuyerProposedSubstituteLineItem, OrderLineFieldMetaBuyerProposedSubstituteLineItem],
  [OrderLineField.CatalogueLineReference, OrderLineFieldMetaCatalogueLineReference],
  [OrderLineField.QuotationLineReference, OrderLineFieldMetaQuotationLineReference],
  [OrderLineField.OrderLineReference, OrderLineFieldMetaOrderLineReference],
  [OrderLineField.DocumentReference, OrderLineFieldMetaDocumentReference]
])

export const OrderLineType: Type<OrderLineField> = {
  name: 'OrderLine',
  label: 'Order Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in an order document (e.g., Order, Order Change, or Order Response) describing an item being ordered.',
  fields: OrderLineFieldMap,
}
