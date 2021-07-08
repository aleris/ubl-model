import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ItemType } from './ItemMeta'
import { LocationType } from './LocationMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum InventoryReportLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Note = 'Note',
  Quantity = 'Quantity',
  InventoryValueAmount = 'InventoryValueAmount',
  AvailabilityDate = 'AvailabilityDate',
  AvailabilityStatusCode = 'AvailabilityStatusCode',
  Item = 'Item',
  InventoryLocation = 'InventoryLocation'
}

export const InventoryReportLineFieldMetaUBLExtensions = new FieldMeta<InventoryReportLineField>(
  InventoryReportLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const InventoryReportLineFieldMetaID = new FieldMeta<InventoryReportLineField>(
  InventoryReportLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this inventory report line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InventoryReportLineFieldMetaNote = new FieldMeta<InventoryReportLineField>(
  InventoryReportLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InventoryReportLineFieldMetaQuantity = new FieldMeta<InventoryReportLineField>(
  InventoryReportLineField.Quantity,
  'Quantity',
  'Quantity',
  QuantityType.name,
  'The quantity of the item reported that is currently in stock.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InventoryReportLineFieldMetaInventoryValueAmount = new FieldMeta<InventoryReportLineField>(
  InventoryReportLineField.InventoryValueAmount,
  'InventoryValueAmount',
  'Inventory Value',
  AmountType.name,
  'The value of the quantity of the item reported that is currently in stock.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InventoryReportLineFieldMetaAvailabilityDate = new FieldMeta<InventoryReportLineField>(
  InventoryReportLineField.AvailabilityDate,
  'AvailabilityDate',
  'Availability Date',
  DateType.name,
  'The date from which the goods will be available. If not present, the goods are available now.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InventoryReportLineFieldMetaAvailabilityStatusCode = new FieldMeta<InventoryReportLineField>(
  InventoryReportLineField.AvailabilityStatusCode,
  'AvailabilityStatusCode',
  'Availability Status Code',
  CodeType.name,
  'A code signifying the item\'s level of availability.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InventoryReportLineFieldMetaItem = new FieldMeta<InventoryReportLineField>(
  InventoryReportLineField.Item,
  'Item',
  'Item',
  ItemType.name,
  'The item associated with this inventory report line.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const InventoryReportLineFieldMetaInventoryLocation = new FieldMeta<InventoryReportLineField>(
  InventoryReportLineField.InventoryLocation,
  'InventoryLocation',
  'Inventory Location',
  LocationType.name,
  'The location of the reported quantity of goods.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class InventoryReportLineFieldMeta {
  public static readonly UBLExtensions = InventoryReportLineFieldMetaUBLExtensions
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
  [InventoryReportLineField.UBLExtensions, InventoryReportLineFieldMetaUBLExtensions],
  [InventoryReportLineField.ID, InventoryReportLineFieldMetaID],
  [InventoryReportLineField.Note, InventoryReportLineFieldMetaNote],
  [InventoryReportLineField.Quantity, InventoryReportLineFieldMetaQuantity],
  [InventoryReportLineField.InventoryValueAmount, InventoryReportLineFieldMetaInventoryValueAmount],
  [InventoryReportLineField.AvailabilityDate, InventoryReportLineFieldMetaAvailabilityDate],
  [InventoryReportLineField.AvailabilityStatusCode, InventoryReportLineFieldMetaAvailabilityStatusCode],
  [InventoryReportLineField.Item, InventoryReportLineFieldMetaItem],
  [InventoryReportLineField.InventoryLocation, InventoryReportLineFieldMetaInventoryLocation]
])

export const InventoryReportLineType: Type<InventoryReportLineField> = {
  name: 'InventoryReportLine',
  label: 'Inventory Report Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in an Inventory Report.',
  fields: InventoryReportLineFieldMap,
}
