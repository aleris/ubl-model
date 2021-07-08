import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ItemType } from './ItemMeta'
import { PartyType } from './PartyMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const InstructionForReturnsLineFieldMetaID = new FieldMeta<InstructionForReturnsLineField>(
  InstructionForReturnsLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this instruction for returns line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InstructionForReturnsLineFieldMetaNote = new FieldMeta<InstructionForReturnsLineField>(
  InstructionForReturnsLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InstructionForReturnsLineFieldMetaQuantity = new FieldMeta<InstructionForReturnsLineField>(
  InstructionForReturnsLineField.Quantity,
  'Quantity',
  'Quantity',
  QuantityType.name,
  'The quantity of goods being returned.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const InstructionForReturnsLineFieldMetaManufacturerParty = new FieldMeta<InstructionForReturnsLineField>(
  InstructionForReturnsLineField.ManufacturerParty,
  'ManufacturerParty',
  'Manufacturer Party',
  PartyType.name,
  'The manufacturer of the goods being returned.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const InstructionForReturnsLineFieldMetaItem = new FieldMeta<InstructionForReturnsLineField>(
  InstructionForReturnsLineField.Item,
  'Item',
  'Item',
  ItemType.name,
  'A description of the item being returned.',
  FieldCardinality.Uni,
  TypeModule.cac,
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

export const InstructionForReturnsLineType: Type<InstructionForReturnsLineField> = {
  name: 'InstructionForReturnsLine',
  label: 'Instruction For Returns Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in an Instruction for Returns.',
  fields: InstructionForReturnsLineFieldMap,
}
