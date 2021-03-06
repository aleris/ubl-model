import { FieldMeta } from '../FieldMeta'

export enum InstructionForReturnsLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Note = 'Note',
  Quantity = 'Quantity',
  ManufacturerParty = 'ManufacturerParty',
  Item = 'Item'
}

export const InstructionForReturnsLineFieldMetaUBLExtensions = new FieldMeta<InstructionForReturnsLineField>(
  InstructionForReturnsLineField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const InstructionForReturnsLineFieldMetaID = new FieldMeta<InstructionForReturnsLineField>(
  InstructionForReturnsLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this instruction for returns line.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const InstructionForReturnsLineFieldMetaNote = new FieldMeta<InstructionForReturnsLineField>(
  InstructionForReturnsLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const InstructionForReturnsLineFieldMetaQuantity = new FieldMeta<InstructionForReturnsLineField>(
  InstructionForReturnsLineField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The quantity of goods being returned.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const InstructionForReturnsLineFieldMetaManufacturerParty = new FieldMeta<InstructionForReturnsLineField>(
  InstructionForReturnsLineField.ManufacturerParty,
  'ManufacturerParty',
  'Manufacturer Party',
  'Party',
  'The manufacturer of the goods being returned.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const InstructionForReturnsLineFieldMetaItem = new FieldMeta<InstructionForReturnsLineField>(
  InstructionForReturnsLineField.Item,
  'Item',
  'Item',
  'Item',
  'A description of the item being returned.',
  '1',
  'cac',
  undefined,
  undefined
)

export class InstructionForReturnsLineFieldMeta {
  public static readonly UBLExtensions = InstructionForReturnsLineFieldMetaUBLExtensions
  public static readonly ID = InstructionForReturnsLineFieldMetaID
  public static readonly Note = InstructionForReturnsLineFieldMetaNote
  public static readonly Quantity = InstructionForReturnsLineFieldMetaQuantity
  public static readonly ManufacturerParty = InstructionForReturnsLineFieldMetaManufacturerParty
  public static readonly Item = InstructionForReturnsLineFieldMetaItem
}

export const InstructionForReturnsLineFieldMap = new Map([
  [InstructionForReturnsLineField.UBLExtensions, InstructionForReturnsLineFieldMetaUBLExtensions],
  [InstructionForReturnsLineField.ID, InstructionForReturnsLineFieldMetaID],
  [InstructionForReturnsLineField.Note, InstructionForReturnsLineFieldMetaNote],
  [InstructionForReturnsLineField.Quantity, InstructionForReturnsLineFieldMetaQuantity],
  [InstructionForReturnsLineField.ManufacturerParty, InstructionForReturnsLineFieldMetaManufacturerParty],
  [InstructionForReturnsLineField.Item, InstructionForReturnsLineFieldMetaItem]
])
