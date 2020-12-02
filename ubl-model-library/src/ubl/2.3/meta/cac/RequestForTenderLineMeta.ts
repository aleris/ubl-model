import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaID = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this request for tender line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaUUID = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for this request for tender line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaNote = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaQuantity = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The quantity of the item for which a tender is requested in this line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaMinimumQuantity = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.MinimumQuantity,
  'MinimumQuantity',
  'Minimum Quantity',
  'Quantity',
  'The minimum quantity of the item associated with this request for tender line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaMaximumQuantity = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.MaximumQuantity,
  'MaximumQuantity',
  'Maximum Quantity',
  'Quantity',
  'The maximum quantity of the item associated with this request for tender line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaTaxIncludedIndicator = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.TaxIncludedIndicator,
  'TaxIncludedIndicator',
  'Tax Included Indicator',
  'Indicator',
  'Indicates whether the amounts are taxes included (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaMinimumAmount = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.MinimumAmount,
  'MinimumAmount',
  'Minimum Amount',
  'Amount',
  'The minimum amount allowed for this deliverable.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaMaximumAmount = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.MaximumAmount,
  'MaximumAmount',
  'Maximum Amount',
  'Amount',
  'The maximum amount allowed for this deliverable.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaEstimatedAmount = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.EstimatedAmount,
  'EstimatedAmount',
  'Estimated Amount',
  'Amount',
  'The estimated total amount of the deliverable.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaDocumentReference = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a document associated with this request for tender line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaDeliveryPeriod = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.DeliveryPeriod,
  'DeliveryPeriod',
  'Delivery Period',
  'Period',
  'An applicable period for the deliverable or set of deliverables in this tendering process.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaRequiredItemLocationQuantity = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.RequiredItemLocationQuantity,
  'RequiredItemLocationQuantity',
  'Required Item Location Quantity',
  'ItemLocationQuantity',
  'Properties of the item specified in this request for tender line that are dependent on location and quantity.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaWarrantyValidityPeriod = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.WarrantyValidityPeriod,
  'WarrantyValidityPeriod',
  'Warranty Validity Period',
  'Period',
  'The period during which a warranty to be associated with this request for tender line must apply.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaItem = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.Item,
  'Item',
  'Item',
  'Item',
  'An item for which a tender is requested.',
  '1',
  'cac',
  undefined,
  undefined
)

export const RequestForTenderLineFieldMetaSubRequestForTenderLine = new FieldMeta<RequestForTenderLineField>(
  RequestForTenderLineField.SubRequestForTenderLine,
  'SubRequestForTenderLine',
  'Sub Request For Tender Line',
  'RequestForTenderLine',
  'A subsidiary request for tender line.',
  '0..n',
  'cac',
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
