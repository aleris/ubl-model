import { FieldMeta } from '../../FieldMeta'

export enum CatalogueRequestLineField {
  ID = 'ID',
  ContractSubdivision = 'ContractSubdivision',
  Note = 'Note',
  LineValidityPeriod = 'LineValidityPeriod',
  RequiredItemLocationQuantity = 'RequiredItemLocationQuantity',
  Item = 'Item'
}

export const CatalogueRequestLineFieldMetaID = new FieldMeta<CatalogueRequestLineField>(
  CatalogueRequestLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the requested catalogue line.',
  '1',
  undefined,
  '1'
)

export const CatalogueRequestLineFieldMetaContractSubdivision = new FieldMeta<CatalogueRequestLineField>(
  CatalogueRequestLineField.ContractSubdivision,
  'ContractSubdivision',
  'Contract Subdivision',
  'Text',
  'A subdivision of a contract or tender covering the line being requested.',
  '0..1',
  undefined,
  'Installation , Phase One , Support and Maintenance'
)

export const CatalogueRequestLineFieldMetaNote = new FieldMeta<CatalogueRequestLineField>(
  CatalogueRequestLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const CatalogueRequestLineFieldMetaLineValidityPeriod = new FieldMeta<CatalogueRequestLineField>(
  CatalogueRequestLineField.LineValidityPeriod,
  'LineValidityPeriod',
  'Period',
  'Period',
  'The period for which the information in the requested catalogue line is valid.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueRequestLineFieldMetaRequiredItemLocationQuantity = new FieldMeta<CatalogueRequestLineField>(
  CatalogueRequestLineField.RequiredItemLocationQuantity,
  'RequiredItemLocationQuantity',
  'Item Location Quantity',
  'ItemLocationQuantity',
  'Properties of the item in the requested catalogue line that are dependent on location and quantity.',
  '0..n',
  undefined,
  undefined
)

export const CatalogueRequestLineFieldMetaItem = new FieldMeta<CatalogueRequestLineField>(
  CatalogueRequestLineField.Item,
  'Item',
  'Item',
  'Item',
  'The item associated with the requested catalogue line.',
  '1',
  undefined,
  undefined
)

export class CatalogueRequestLineFieldMeta {
  public static readonly ID = CatalogueRequestLineFieldMetaID
  public static readonly ContractSubdivision = CatalogueRequestLineFieldMetaContractSubdivision
  public static readonly Note = CatalogueRequestLineFieldMetaNote
  public static readonly LineValidityPeriod = CatalogueRequestLineFieldMetaLineValidityPeriod
  public static readonly RequiredItemLocationQuantity = CatalogueRequestLineFieldMetaRequiredItemLocationQuantity
  public static readonly Item = CatalogueRequestLineFieldMetaItem
}

export const CatalogueRequestLineFieldMap = new Map([
  [CatalogueRequestLineField.ID, CatalogueRequestLineFieldMetaID],
  [CatalogueRequestLineField.ContractSubdivision, CatalogueRequestLineFieldMetaContractSubdivision],
  [CatalogueRequestLineField.Note, CatalogueRequestLineFieldMetaNote],
  [CatalogueRequestLineField.LineValidityPeriod, CatalogueRequestLineFieldMetaLineValidityPeriod],
  [CatalogueRequestLineField.RequiredItemLocationQuantity, CatalogueRequestLineFieldMetaRequiredItemLocationQuantity],
  [CatalogueRequestLineField.Item, CatalogueRequestLineFieldMetaItem]
])
