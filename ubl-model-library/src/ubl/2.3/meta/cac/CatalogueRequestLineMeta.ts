import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ItemType } from './ItemMeta'
import { ItemLocationQuantityType } from './ItemLocationQuantityMeta'
import { PeriodType } from './PeriodMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum CatalogueRequestLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  ContractSubdivision = 'ContractSubdivision',
  Note = 'Note',
  LineValidityPeriod = 'LineValidityPeriod',
  RequiredItemLocationQuantity = 'RequiredItemLocationQuantity',
  Item = 'Item'
}

export const CatalogueRequestLineFieldMetaUBLExtensions = new FieldMeta<CatalogueRequestLineField>(
  CatalogueRequestLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CatalogueRequestLineFieldMetaID = new FieldMeta<CatalogueRequestLineField>(
  CatalogueRequestLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for the requested catalogue line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '1'
)

export const CatalogueRequestLineFieldMetaContractSubdivision = new FieldMeta<CatalogueRequestLineField>(
  CatalogueRequestLineField.ContractSubdivision,
  'ContractSubdivision',
  'Contract Subdivision',
  TextType.name,
  'A subdivision of a contract or tender covering the line being requested.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Installation , Phase One , Support and Maintenance'
)

export const CatalogueRequestLineFieldMetaNote = new FieldMeta<CatalogueRequestLineField>(
  CatalogueRequestLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueRequestLineFieldMetaLineValidityPeriod = new FieldMeta<CatalogueRequestLineField>(
  CatalogueRequestLineField.LineValidityPeriod,
  'LineValidityPeriod',
  'Line Validity Period',
  PeriodType.name,
  'The period for which the information in the requested catalogue line is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueRequestLineFieldMetaRequiredItemLocationQuantity = new FieldMeta<CatalogueRequestLineField>(
  CatalogueRequestLineField.RequiredItemLocationQuantity,
  'RequiredItemLocationQuantity',
  'Required Item Location Quantity',
  ItemLocationQuantityType.name,
  'Properties of the item in the requested catalogue line that are dependent on location and quantity.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueRequestLineFieldMetaItem = new FieldMeta<CatalogueRequestLineField>(
  CatalogueRequestLineField.Item,
  'Item',
  'Item',
  ItemType.name,
  'The item associated with the requested catalogue line.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export class CatalogueRequestLineFieldMeta {
  public static readonly UBLExtensions = CatalogueRequestLineFieldMetaUBLExtensions
  public static readonly ID = CatalogueRequestLineFieldMetaID
  public static readonly ContractSubdivision = CatalogueRequestLineFieldMetaContractSubdivision
  public static readonly Note = CatalogueRequestLineFieldMetaNote
  public static readonly LineValidityPeriod = CatalogueRequestLineFieldMetaLineValidityPeriod
  public static readonly RequiredItemLocationQuantity = CatalogueRequestLineFieldMetaRequiredItemLocationQuantity
  public static readonly Item = CatalogueRequestLineFieldMetaItem
}

export const CatalogueRequestLineFieldMap = new Map([
  [CatalogueRequestLineField.UBLExtensions, CatalogueRequestLineFieldMetaUBLExtensions],
  [CatalogueRequestLineField.ID, CatalogueRequestLineFieldMetaID],
  [CatalogueRequestLineField.ContractSubdivision, CatalogueRequestLineFieldMetaContractSubdivision],
  [CatalogueRequestLineField.Note, CatalogueRequestLineFieldMetaNote],
  [CatalogueRequestLineField.LineValidityPeriod, CatalogueRequestLineFieldMetaLineValidityPeriod],
  [CatalogueRequestLineField.RequiredItemLocationQuantity, CatalogueRequestLineFieldMetaRequiredItemLocationQuantity],
  [CatalogueRequestLineField.Item, CatalogueRequestLineFieldMetaItem]
])

export const CatalogueRequestLineType: Type<CatalogueRequestLineField> = {
  name: 'CatalogueRequestLine',
  label: 'Catalogue Request Line',
  module: TypeModule.cac,
  definition: 'A class to define a line describing a request for a catalogue line.',
  fields: CatalogueRequestLineFieldMap,
}
