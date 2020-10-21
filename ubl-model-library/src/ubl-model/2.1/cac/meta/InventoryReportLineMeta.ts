import { FieldMeta } from '../../FieldMeta'

export enum InventoryReportLineField {
  ID = 'ID',
  Note = 'Note',
  Quantity = 'Quantity',
  InventoryValueAmount = 'InventoryValueAmount',
  AvailabilityDate = 'AvailabilityDate',
  AvailabilityStatusCode = 'AvailabilityStatusCode',
  Item = 'Item',
  InventoryLocation = 'InventoryLocation'
}

export const InventoryReportLineFieldMetaID = new FieldMeta<InventoryReportLineField>(
  InventoryReportLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this inventory report line.',
  '1',
  undefined,
  undefined
)

export const InventoryReportLineFieldMetaNote = new FieldMeta<InventoryReportLineField>(
  InventoryReportLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const InventoryReportLineFieldMetaQuantity = new FieldMeta<InventoryReportLineField>(
  InventoryReportLineField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The quantity of the item reported that is currently in stock.',
  '1',
  undefined,
  undefined
)

export const InventoryReportLineFieldMetaInventoryValueAmount = new FieldMeta<InventoryReportLineField>(
  InventoryReportLineField.InventoryValueAmount,
  'InventoryValueAmount',
  'Value',
  'Amount',
  'The value of the quantity of the item reported that is currently in stock.',
  '0..1',
  undefined,
  undefined
)

export const InventoryReportLineFieldMetaAvailabilityDate = new FieldMeta<InventoryReportLineField>(
  InventoryReportLineField.AvailabilityDate,
  'AvailabilityDate',
  'Availability Date',
  'Date',
  'The date from which the goods will be available. If not present, the goods are available now.',
  '0..1',
  undefined,
  undefined
)

export const InventoryReportLineFieldMetaAvailabilityStatusCode = new FieldMeta<InventoryReportLineField>(
  InventoryReportLineField.AvailabilityStatusCode,
  'AvailabilityStatusCode',
  'Availability Status Code',
  'Code',
  'A code signifying the item\'s level of availability.',
  '0..1',
  undefined,
  undefined
)

export const InventoryReportLineFieldMetaItem = new FieldMeta<InventoryReportLineField>(
  InventoryReportLineField.Item,
  'Item',
  'Item',
  'Item',
  'The item associated with this inventory report line.',
  '1',
  undefined,
  undefined
)

export const InventoryReportLineFieldMetaInventoryLocation = new FieldMeta<InventoryReportLineField>(
  InventoryReportLineField.InventoryLocation,
  'InventoryLocation',
  'Location',
  'Location',
  'The location of the reported quantity of goods.',
  '0..1',
  undefined,
  undefined
)

export class InventoryReportLineFieldMeta {
  public static readonly ID = InventoryReportLineFieldMetaID
  public static readonly Note = InventoryReportLineFieldMetaNote
  public static readonly Quantity = InventoryReportLineFieldMetaQuantity
  public static readonly InventoryValueAmount = InventoryReportLineFieldMetaInventoryValueAmount
  public static readonly AvailabilityDate = InventoryReportLineFieldMetaAvailabilityDate
  public static readonly AvailabilityStatusCode = InventoryReportLineFieldMetaAvailabilityStatusCode
  public static readonly Item = InventoryReportLineFieldMetaItem
  public static readonly InventoryLocation = InventoryReportLineFieldMetaInventoryLocation
}

export const InventoryReportLineFieldMap = new Map([
  [InventoryReportLineField.ID, InventoryReportLineFieldMetaID],
  [InventoryReportLineField.Note, InventoryReportLineFieldMetaNote],
  [InventoryReportLineField.Quantity, InventoryReportLineFieldMetaQuantity],
  [InventoryReportLineField.InventoryValueAmount, InventoryReportLineFieldMetaInventoryValueAmount],
  [InventoryReportLineField.AvailabilityDate, InventoryReportLineFieldMetaAvailabilityDate],
  [InventoryReportLineField.AvailabilityStatusCode, InventoryReportLineFieldMetaAvailabilityStatusCode],
  [InventoryReportLineField.Item, InventoryReportLineFieldMetaItem],
  [InventoryReportLineField.InventoryLocation, InventoryReportLineFieldMetaInventoryLocation]
])
