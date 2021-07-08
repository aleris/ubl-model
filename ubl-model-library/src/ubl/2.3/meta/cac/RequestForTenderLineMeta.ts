import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { ItemType } from './ItemMeta'
import { ItemLocationQuantityType } from './ItemLocationQuantityMeta'
import { PeriodType } from './PeriodMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum RequestForTenderLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  UUID = 'UUID',
  Note = 'Note',
  Quantity = 'Quantity',
  MinimumQuantity = 'MinimumQuantity',
  MaximumQuantity = 'MaximumQuantity',
  TaxIncludedIndicator = 'TaxIncludedIndicator',
  MinimumAmount = 'MinimumAmount',
  MaximumAmount = 'MaximumAmount',
  EstimatedAmount = 'EstimatedAmount',
  DocumentReference = 'DocumentReference',
  DeliveryPeriod = 'DeliveryPeriod',
  RequiredItemLocationQuantity = 'RequiredItemLocationQuantity',
  WarrantyValidityPeriod = 'WarrantyValidityPeriod',
  Item = 'Item',
  SubRequestForTenderLine = 'SubRequestForTenderLine'
}

export const RequestForTenderLineFieldMetaUBLExtensions = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaID = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this request for tender line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaUUID = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for this request for tender line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaNote = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaQuantity = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.Quantity,
  'Quantity',
  'Quantity',
  QuantityType.name,
  'The quantity of the item for which a tender is requested in this line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaMinimumQuantity = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.MinimumQuantity,
  'MinimumQuantity',
  'Minimum Quantity',
  QuantityType.name,
  'The minimum quantity of the item associated with this request for tender line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaMaximumQuantity = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.MaximumQuantity,
  'MaximumQuantity',
  'Maximum Quantity',
  QuantityType.name,
  'The maximum quantity of the item associated with this request for tender line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaTaxIncludedIndicator = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.TaxIncludedIndicator,
  'TaxIncludedIndicator',
  'Tax Included Indicator',
  IndicatorType.name,
  'Indicates whether the amounts are taxes included (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaMinimumAmount = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.MinimumAmount,
  'MinimumAmount',
  'Minimum Amount',
  AmountType.name,
  'The minimum amount allowed for this deliverable.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaMaximumAmount = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.MaximumAmount,
  'MaximumAmount',
  'Maximum Amount',
  AmountType.name,
  'The maximum amount allowed for this deliverable.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaEstimatedAmount = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.EstimatedAmount,
  'EstimatedAmount',
  'Estimated Amount',
  AmountType.name,
  'The estimated total amount of the deliverable.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaDocumentReference = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to a document associated with this request for tender line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaDeliveryPeriod = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.DeliveryPeriod,
  'DeliveryPeriod',
  'Delivery Period',
  PeriodType.name,
  'An applicable period for the deliverable or set of deliverables in this tendering process.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaRequiredItemLocationQuantity = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.RequiredItemLocationQuantity,
  'RequiredItemLocationQuantity',
  'Required Item Location Quantity',
  ItemLocationQuantityType.name,
  'Properties of the item specified in this request for tender line that are dependent on location and quantity.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaWarrantyValidityPeriod = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.WarrantyValidityPeriod,
  'WarrantyValidityPeriod',
  'Warranty Validity Period',
  PeriodType.name,
  'The period during which a warranty to be associated with this request for tender line must apply.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaItem = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.Item,
  'Item',
  'Item',
  ItemType.name,
  'An item for which a tender is requested.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaSubRequestForTenderLine = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.SubRequestForTenderLine,
  'SubRequestForTenderLine',
  'Sub Request For Tender Line',
  RequestForTenderLineType.name,
  'A subsidiary request for tender line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class RequestForTenderLineFieldMeta {
  public static readonly UBLExtensions = RequestForTenderLineFieldMetaUBLExtensions
  public static readonly ID = RequestForTenderLineFieldMetaID
  public static readonly UUID = RequestForTenderLineFieldMetaUUID
  public static readonly Note = RequestForTenderLineFieldMetaNote
  public static readonly Quantity = RequestForTenderLineFieldMetaQuantity
  public static readonly MinimumQuantity = RequestForTenderLineFieldMetaMinimumQuantity
  public static readonly MaximumQuantity = RequestForTenderLineFieldMetaMaximumQuantity
  public static readonly TaxIncludedIndicator = RequestForTenderLineFieldMetaTaxIncludedIndicator
  public static readonly MinimumAmount = RequestForTenderLineFieldMetaMinimumAmount
  public static readonly MaximumAmount = RequestForTenderLineFieldMetaMaximumAmount
  public static readonly EstimatedAmount = RequestForTenderLineFieldMetaEstimatedAmount
  public static readonly DocumentReference = RequestForTenderLineFieldMetaDocumentReference
  public static readonly DeliveryPeriod = RequestForTenderLineFieldMetaDeliveryPeriod
  public static readonly RequiredItemLocationQuantity = RequestForTenderLineFieldMetaRequiredItemLocationQuantity
  public static readonly WarrantyValidityPeriod = RequestForTenderLineFieldMetaWarrantyValidityPeriod
  public static readonly Item = RequestForTenderLineFieldMetaItem
  public static readonly SubRequestForTenderLine = RequestForTenderLineFieldMetaSubRequestForTenderLine
}

export const RequestForTenderLineFieldMap = new Map([
  [RequestForTenderLineField.UBLExtensions, RequestForTenderLineFieldMetaUBLExtensions],
  [RequestForTenderLineField.ID, RequestForTenderLineFieldMetaID],
  [RequestForTenderLineField.UUID, RequestForTenderLineFieldMetaUUID],
  [RequestForTenderLineField.Note, RequestForTenderLineFieldMetaNote],
  [RequestForTenderLineField.Quantity, RequestForTenderLineFieldMetaQuantity],
  [RequestForTenderLineField.MinimumQuantity, RequestForTenderLineFieldMetaMinimumQuantity],
  [RequestForTenderLineField.MaximumQuantity, RequestForTenderLineFieldMetaMaximumQuantity],
  [RequestForTenderLineField.TaxIncludedIndicator, RequestForTenderLineFieldMetaTaxIncludedIndicator],
  [RequestForTenderLineField.MinimumAmount, RequestForTenderLineFieldMetaMinimumAmount],
  [RequestForTenderLineField.MaximumAmount, RequestForTenderLineFieldMetaMaximumAmount],
  [RequestForTenderLineField.EstimatedAmount, RequestForTenderLineFieldMetaEstimatedAmount],
  [RequestForTenderLineField.DocumentReference, RequestForTenderLineFieldMetaDocumentReference],
  [RequestForTenderLineField.DeliveryPeriod, RequestForTenderLineFieldMetaDeliveryPeriod],
  [RequestForTenderLineField.RequiredItemLocationQuantity, RequestForTenderLineFieldMetaRequiredItemLocationQuantity],
  [RequestForTenderLineField.WarrantyValidityPeriod, RequestForTenderLineFieldMetaWarrantyValidityPeriod],
  [RequestForTenderLineField.Item, RequestForTenderLineFieldMetaItem],
  [RequestForTenderLineField.SubRequestForTenderLine, RequestForTenderLineFieldMetaSubRequestForTenderLine]
])

export const RequestForTenderLineType: Type<RequestForTenderLineField> = {
  name: 'RequestForTenderLine',
  label: 'Request For Tender Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in a Request for Tender describing an item of goods or a service solicited in the Request for Tender.',
  fields: RequestForTenderLineFieldMap,
}
