import { FieldMeta } from '../../FieldMeta'

export enum TenderLineField {
  ID = 'ID',
  Note = 'Note',
  Quantity = 'Quantity',
  LineExtensionAmount = 'LineExtensionAmount',
  TotalTaxAmount = 'TotalTaxAmount',
  OrderableUnit = 'OrderableUnit',
  ContentUnitQuantity = 'ContentUnitQuantity',
  OrderQuantityIncrementNumeric = 'OrderQuantityIncrementNumeric',
  MinimumOrderQuantity = 'MinimumOrderQuantity',
  MaximumOrderQuantity = 'MaximumOrderQuantity',
  WarrantyInformation = 'WarrantyInformation',
  PackLevelCode = 'PackLevelCode',
  DocumentReference = 'DocumentReference',
  Item = 'Item',
  OfferedItemLocationQuantity = 'OfferedItemLocationQuantity',
  ReplacementRelatedItem = 'ReplacementRelatedItem',
  WarrantyParty = 'WarrantyParty',
  WarrantyValidityPeriod = 'WarrantyValidityPeriod',
  SubTenderLine = 'SubTenderLine',
  CallForTendersLineReference = 'CallForTendersLineReference',
  CallForTendersDocumentReference = 'CallForTendersDocumentReference'
}

export const TenderLineFieldMetaID = new FieldMeta<TenderLineField>(
  TenderLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this tender line.',
  '0..1',
  undefined,
  undefined
)

export const TenderLineFieldMetaNote = new FieldMeta<TenderLineField>(
  TenderLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const TenderLineFieldMetaQuantity = new FieldMeta<TenderLineField>(
  TenderLineField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The quantity of the item quoted in this tender line.',
  '0..1',
  undefined,
  undefined
)

export const TenderLineFieldMetaLineExtensionAmount = new FieldMeta<TenderLineField>(
  TenderLineField.LineExtensionAmount,
  'LineExtensionAmount',
  'Line Extension Amount',
  'Amount',
  'The total amount for this tender line, including allowance charges but net of taxes.',
  '0..1',
  undefined,
  undefined
)

export const TenderLineFieldMetaTotalTaxAmount = new FieldMeta<TenderLineField>(
  TenderLineField.TotalTaxAmount,
  'TotalTaxAmount',
  'Tax Amount',
  'Amount',
  'The total tax amount for this tender line.',
  '0..1',
  undefined,
  undefined
)

export const TenderLineFieldMetaOrderableUnit = new FieldMeta<TenderLineField>(
  TenderLineField.OrderableUnit,
  'OrderableUnit',
  'Unit',
  'Text',
  'Text describing a unit in which the item described in this tender line can be ordered.',
  '0..1',
  undefined,
  undefined
)

export const TenderLineFieldMetaContentUnitQuantity = new FieldMeta<TenderLineField>(
  TenderLineField.ContentUnitQuantity,
  'ContentUnitQuantity',
  'Content Unit',
  'Quantity',
  'The unit of measure and quantity of the orderable unit.',
  '0..1',
  undefined,
  'If order unit measure identifier is each , then content unit quantity is 1 .'
)

export const TenderLineFieldMetaOrderQuantityIncrementNumeric = new FieldMeta<TenderLineField>(
  TenderLineField.OrderQuantityIncrementNumeric,
  'OrderQuantityIncrementNumeric',
  'Order Quantity Increment',
  'Numeric',
  'The number of items that can set the order quantity increments.',
  '0..1',
  undefined,
  undefined
)

export const TenderLineFieldMetaMinimumOrderQuantity = new FieldMeta<TenderLineField>(
  TenderLineField.MinimumOrderQuantity,
  'MinimumOrderQuantity',
  'Order Quantity',
  'Quantity',
  'The minimum number of items described in this tender line that can be ordered.',
  '0..1',
  undefined,
  '10 boxes'
)

export const TenderLineFieldMetaMaximumOrderQuantity = new FieldMeta<TenderLineField>(
  TenderLineField.MaximumOrderQuantity,
  'MaximumOrderQuantity',
  'Order Quantity',
  'Quantity',
  'The maximum number of items described in this tender line that can be ordered.',
  '0..1',
  undefined,
  '1 tonne'
)

export const TenderLineFieldMetaWarrantyInformation = new FieldMeta<TenderLineField>(
  TenderLineField.WarrantyInformation,
  'WarrantyInformation',
  'Information',
  'Text',
  'Text about a warranty (provided by WarrantyParty) for the good or service described in this tender line.',
  '0..n',
  undefined,
  'Unless specified otherwise and in addition to any rights the Customer may have under statute, Dell warrants to the Customer that Dell branded Products (excluding third party products and software), will be free from defects in materials and workmanship affecting normal use for a period of one year from invoice date ( Standard Warranty ).'
)

export const TenderLineFieldMetaPackLevelCode = new FieldMeta<TenderLineField>(
  TenderLineField.PackLevelCode,
  'PackLevelCode',
  'Pack Level Code',
  'Code',
  'A mutually agreed code signifying the level of packaging associated with the item described in this tender line.',
  '0..1',
  'Consumer Unit, Trading Unit',
  'level 2 , Group 4'
)

export const TenderLineFieldMetaDocumentReference = new FieldMeta<TenderLineField>(
  TenderLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a document associated with this tender line.',
  '0..n',
  undefined,
  undefined
)

export const TenderLineFieldMetaItem = new FieldMeta<TenderLineField>(
  TenderLineField.Item,
  'Item',
  'Item',
  'Item',
  'The item associated with this tender line.',
  '0..1',
  undefined,
  undefined
)

export const TenderLineFieldMetaOfferedItemLocationQuantity = new FieldMeta<TenderLineField>(
  TenderLineField.OfferedItemLocationQuantity,
  'OfferedItemLocationQuantity',
  'Item Location Quantity',
  'ItemLocationQuantity',
  'A set of location-specific properties (e.g., price, quantity, lead time) associated with the item described in this tender line.',
  '0..n',
  undefined,
  undefined
)

export const TenderLineFieldMetaReplacementRelatedItem = new FieldMeta<TenderLineField>(
  TenderLineField.ReplacementRelatedItem,
  'ReplacementRelatedItem',
  'Related Item',
  'RelatedItem',
  'A catalogue item that may be a replacement for the item described in this tender line.',
  '0..n',
  undefined,
  undefined
)

export const TenderLineFieldMetaWarrantyParty = new FieldMeta<TenderLineField>(
  TenderLineField.WarrantyParty,
  'WarrantyParty',
  'Party',
  'Party',
  'The party responsible for any warranty described in this tender line.',
  '0..1',
  undefined,
  undefined
)

export const TenderLineFieldMetaWarrantyValidityPeriod = new FieldMeta<TenderLineField>(
  TenderLineField.WarrantyValidityPeriod,
  'WarrantyValidityPeriod',
  'Period',
  'Period',
  'The period for which a warranty associated with the item described in this tender line is valid.',
  '0..1',
  undefined,
  undefined
)

export const TenderLineFieldMetaSubTenderLine = new FieldMeta<TenderLineField>(
  TenderLineField.SubTenderLine,
  'SubTenderLine',
  'Tender Line',
  'TenderLine',
  'An association to a Sub Tender Line',
  '0..n',
  undefined,
  undefined
)

export const TenderLineFieldMetaCallForTendersLineReference = new FieldMeta<TenderLineField>(
  TenderLineField.CallForTendersLineReference,
  'CallForTendersLineReference',
  'Line Reference',
  'LineReference',
  'Reference to a Line on a Call For Tenders document.',
  '0..1',
  undefined,
  undefined
)

export const TenderLineFieldMetaCallForTendersDocumentReference = new FieldMeta<TenderLineField>(
  TenderLineField.CallForTendersDocumentReference,
  'CallForTendersDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A class defining references to a Call For Tenders document.',
  '0..1',
  undefined,
  undefined
)

export class TenderLineFieldMeta {
  public static readonly ID = TenderLineFieldMetaID
  public static readonly Note = TenderLineFieldMetaNote
  public static readonly Quantity = TenderLineFieldMetaQuantity
  public static readonly LineExtensionAmount = TenderLineFieldMetaLineExtensionAmount
  public static readonly TotalTaxAmount = TenderLineFieldMetaTotalTaxAmount
  public static readonly OrderableUnit = TenderLineFieldMetaOrderableUnit
  public static readonly ContentUnitQuantity = TenderLineFieldMetaContentUnitQuantity
  public static readonly OrderQuantityIncrementNumeric = TenderLineFieldMetaOrderQuantityIncrementNumeric
  public static readonly MinimumOrderQuantity = TenderLineFieldMetaMinimumOrderQuantity
  public static readonly MaximumOrderQuantity = TenderLineFieldMetaMaximumOrderQuantity
  public static readonly WarrantyInformation = TenderLineFieldMetaWarrantyInformation
  public static readonly PackLevelCode = TenderLineFieldMetaPackLevelCode
  public static readonly DocumentReference = TenderLineFieldMetaDocumentReference
  public static readonly Item = TenderLineFieldMetaItem
  public static readonly OfferedItemLocationQuantity = TenderLineFieldMetaOfferedItemLocationQuantity
  public static readonly ReplacementRelatedItem = TenderLineFieldMetaReplacementRelatedItem
  public static readonly WarrantyParty = TenderLineFieldMetaWarrantyParty
  public static readonly WarrantyValidityPeriod = TenderLineFieldMetaWarrantyValidityPeriod
  public static readonly SubTenderLine = TenderLineFieldMetaSubTenderLine
  public static readonly CallForTendersLineReference = TenderLineFieldMetaCallForTendersLineReference
  public static readonly CallForTendersDocumentReference = TenderLineFieldMetaCallForTendersDocumentReference
}

export const TenderLineFieldMap = new Map([
  [TenderLineField.ID, TenderLineFieldMetaID],
  [TenderLineField.Note, TenderLineFieldMetaNote],
  [TenderLineField.Quantity, TenderLineFieldMetaQuantity],
  [TenderLineField.LineExtensionAmount, TenderLineFieldMetaLineExtensionAmount],
  [TenderLineField.TotalTaxAmount, TenderLineFieldMetaTotalTaxAmount],
  [TenderLineField.OrderableUnit, TenderLineFieldMetaOrderableUnit],
  [TenderLineField.ContentUnitQuantity, TenderLineFieldMetaContentUnitQuantity],
  [TenderLineField.OrderQuantityIncrementNumeric, TenderLineFieldMetaOrderQuantityIncrementNumeric],
  [TenderLineField.MinimumOrderQuantity, TenderLineFieldMetaMinimumOrderQuantity],
  [TenderLineField.MaximumOrderQuantity, TenderLineFieldMetaMaximumOrderQuantity],
  [TenderLineField.WarrantyInformation, TenderLineFieldMetaWarrantyInformation],
  [TenderLineField.PackLevelCode, TenderLineFieldMetaPackLevelCode],
  [TenderLineField.DocumentReference, TenderLineFieldMetaDocumentReference],
  [TenderLineField.Item, TenderLineFieldMetaItem],
  [TenderLineField.OfferedItemLocationQuantity, TenderLineFieldMetaOfferedItemLocationQuantity],
  [TenderLineField.ReplacementRelatedItem, TenderLineFieldMetaReplacementRelatedItem],
  [TenderLineField.WarrantyParty, TenderLineFieldMetaWarrantyParty],
  [TenderLineField.WarrantyValidityPeriod, TenderLineFieldMetaWarrantyValidityPeriod],
  [TenderLineField.SubTenderLine, TenderLineFieldMetaSubTenderLine],
  [TenderLineField.CallForTendersLineReference, TenderLineFieldMetaCallForTendersLineReference],
  [TenderLineField.CallForTendersDocumentReference, TenderLineFieldMetaCallForTendersDocumentReference]
])
