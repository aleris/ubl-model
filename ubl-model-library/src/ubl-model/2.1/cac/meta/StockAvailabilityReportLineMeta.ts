import { FieldMeta } from '../../FieldMeta'

export enum StockAvailabilityReportLineField {
  ID = 'ID',
  Note = 'Note',
  Quantity = 'Quantity',
  ValueAmount = 'ValueAmount',
  AvailabilityDate = 'AvailabilityDate',
  AvailabilityStatusCode = 'AvailabilityStatusCode',
  Item = 'Item'
}

export const StockAvailabilityReportLineFieldMetaID = new FieldMeta<StockAvailabilityReportLineField>(
  StockAvailabilityReportLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this stock availability line.',
  '1',
  undefined,
  undefined
)

export const StockAvailabilityReportLineFieldMetaNote = new FieldMeta<StockAvailabilityReportLineField>(
  StockAvailabilityReportLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const StockAvailabilityReportLineFieldMetaQuantity = new FieldMeta<StockAvailabilityReportLineField>(
  StockAvailabilityReportLineField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The quantity of the item currently in stock.',
  '1',
  undefined,
  undefined
)

export const StockAvailabilityReportLineFieldMetaValueAmount = new FieldMeta<StockAvailabilityReportLineField>(
  StockAvailabilityReportLineField.ValueAmount,
  'ValueAmount',
  'Value',
  'Amount',
  'The monetary value of the quantity of the item currently in stock.',
  '0..1',
  undefined,
  undefined
)

export const StockAvailabilityReportLineFieldMetaAvailabilityDate = new FieldMeta<StockAvailabilityReportLineField>(
  StockAvailabilityReportLineField.AvailabilityDate,
  'AvailabilityDate',
  'Availability Date',
  'Date',
  'The date from which the item will be available. A date identical to or earlier than the IssueDate of the Stock Availability Report means that the item is available now',
  '0..1',
  undefined,
  undefined
)

export const StockAvailabilityReportLineFieldMetaAvailabilityStatusCode = new FieldMeta<StockAvailabilityReportLineField>(
  StockAvailabilityReportLineField.AvailabilityStatusCode,
  'AvailabilityStatusCode',
  'Availability Status Code',
  'Code',
  'A code signifying the level of availability of the item.',
  '0..1',
  undefined,
  undefined
)

export const StockAvailabilityReportLineFieldMetaItem = new FieldMeta<StockAvailabilityReportLineField>(
  StockAvailabilityReportLineField.Item,
  'Item',
  'Item',
  'Item',
  'The item associated with this stock availability report line.',
  '1',
  undefined,
  undefined
)

export class StockAvailabilityReportLineFieldMeta {
  public static readonly ID = StockAvailabilityReportLineFieldMetaID
  public static readonly Note = StockAvailabilityReportLineFieldMetaNote
  public static readonly Quantity = StockAvailabilityReportLineFieldMetaQuantity
  public static readonly ValueAmount = StockAvailabilityReportLineFieldMetaValueAmount
  public static readonly AvailabilityDate = StockAvailabilityReportLineFieldMetaAvailabilityDate
  public static readonly AvailabilityStatusCode = StockAvailabilityReportLineFieldMetaAvailabilityStatusCode
  public static readonly Item = StockAvailabilityReportLineFieldMetaItem
}

export const StockAvailabilityReportLineFieldMap = new Map([
  [StockAvailabilityReportLineField.ID, StockAvailabilityReportLineFieldMetaID],
  [StockAvailabilityReportLineField.Note, StockAvailabilityReportLineFieldMetaNote],
  [StockAvailabilityReportLineField.Quantity, StockAvailabilityReportLineFieldMetaQuantity],
  [StockAvailabilityReportLineField.ValueAmount, StockAvailabilityReportLineFieldMetaValueAmount],
  [StockAvailabilityReportLineField.AvailabilityDate, StockAvailabilityReportLineFieldMetaAvailabilityDate],
  [StockAvailabilityReportLineField.AvailabilityStatusCode, StockAvailabilityReportLineFieldMetaAvailabilityStatusCode],
  [StockAvailabilityReportLineField.Item, StockAvailabilityReportLineFieldMetaItem]
])
