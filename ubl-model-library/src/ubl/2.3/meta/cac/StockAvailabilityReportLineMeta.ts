import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ItemType } from './ItemMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum StockAvailabilityReportLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Note = 'Note',
  Quantity = 'Quantity',
  ValueAmount = 'ValueAmount',
  AvailabilityDate = 'AvailabilityDate',
  AvailabilityStatusCode = 'AvailabilityStatusCode',
  Item = 'Item'
}

export const StockAvailabilityReportLineFieldMetaUBLExtensions = new FieldMeta<StockAvailabilityReportLineField>(
  StockAvailabilityReportLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const StockAvailabilityReportLineFieldMetaID = new FieldMeta<StockAvailabilityReportLineField>(
  StockAvailabilityReportLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this stock availability line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StockAvailabilityReportLineFieldMetaNote = new FieldMeta<StockAvailabilityReportLineField>(
  StockAvailabilityReportLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StockAvailabilityReportLineFieldMetaQuantity = new FieldMeta<StockAvailabilityReportLineField>(
  StockAvailabilityReportLineField.Quantity,
  'Quantity',
  'Quantity',
  QuantityType.name,
  'The quantity of the item currently in stock.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StockAvailabilityReportLineFieldMetaValueAmount = new FieldMeta<StockAvailabilityReportLineField>(
  StockAvailabilityReportLineField.ValueAmount,
  'ValueAmount',
  'Value',
  AmountType.name,
  'The monetary value of the quantity of the item currently in stock.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StockAvailabilityReportLineFieldMetaAvailabilityDate = new FieldMeta<StockAvailabilityReportLineField>(
  StockAvailabilityReportLineField.AvailabilityDate,
  'AvailabilityDate',
  'Availability Date',
  DateType.name,
  'The date from which the item will be available. A date identical to or earlier than the IssueDate of the Stock Availability Report means that the item is available now',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StockAvailabilityReportLineFieldMetaAvailabilityStatusCode = new FieldMeta<StockAvailabilityReportLineField>(
  StockAvailabilityReportLineField.AvailabilityStatusCode,
  'AvailabilityStatusCode',
  'Availability Status Code',
  CodeType.name,
  'A code signifying the level of availability of the item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StockAvailabilityReportLineFieldMetaItem = new FieldMeta<StockAvailabilityReportLineField>(
  StockAvailabilityReportLineField.Item,
  'Item',
  'Item',
  ItemType.name,
  'The item associated with this stock availability report line.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export class StockAvailabilityReportLineFieldMeta {
  public static readonly UBLExtensions = StockAvailabilityReportLineFieldMetaUBLExtensions
  public static readonly ID = StockAvailabilityReportLineFieldMetaID
  public static readonly Note = StockAvailabilityReportLineFieldMetaNote
  public static readonly Quantity = StockAvailabilityReportLineFieldMetaQuantity
  public static readonly ValueAmount = StockAvailabilityReportLineFieldMetaValueAmount
  public static readonly AvailabilityDate = StockAvailabilityReportLineFieldMetaAvailabilityDate
  public static readonly AvailabilityStatusCode = StockAvailabilityReportLineFieldMetaAvailabilityStatusCode
  public static readonly Item = StockAvailabilityReportLineFieldMetaItem
}

export const StockAvailabilityReportLineFieldMap = new Map([
  [StockAvailabilityReportLineField.UBLExtensions, StockAvailabilityReportLineFieldMetaUBLExtensions],
  [StockAvailabilityReportLineField.ID, StockAvailabilityReportLineFieldMetaID],
  [StockAvailabilityReportLineField.Note, StockAvailabilityReportLineFieldMetaNote],
  [StockAvailabilityReportLineField.Quantity, StockAvailabilityReportLineFieldMetaQuantity],
  [StockAvailabilityReportLineField.ValueAmount, StockAvailabilityReportLineFieldMetaValueAmount],
  [StockAvailabilityReportLineField.AvailabilityDate, StockAvailabilityReportLineFieldMetaAvailabilityDate],
  [StockAvailabilityReportLineField.AvailabilityStatusCode, StockAvailabilityReportLineFieldMetaAvailabilityStatusCode],
  [StockAvailabilityReportLineField.Item, StockAvailabilityReportLineFieldMetaItem]
])

export const StockAvailabilityReportLineType: Type<StockAvailabilityReportLineField> = {
  name: 'StockAvailabilityReportLine',
  label: 'Stock Availability Report Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in a Stock Availability Report describing the availability of an item of sale.',
  fields: StockAvailabilityReportLineFieldMap,
}
