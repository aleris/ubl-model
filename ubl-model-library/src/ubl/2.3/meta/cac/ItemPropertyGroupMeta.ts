import { FieldMeta } from '../FieldMeta'

export enum ItemPropertyGroupField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Name = 'Name',
  ImportanceCode = 'ImportanceCode'
}

export const ItemPropertyGroupFieldMetaUBLExtensions = new FieldMeta<ItemPropertyGroupField>(
  ItemPropertyGroupField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ItemPropertyGroupFieldMetaID = new FieldMeta<ItemPropertyGroupField>(
  ItemPropertyGroupField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this group of item properties.',
  '1',
  'cbc',
  undefined,
  '233-004'
)

export const ItemPropertyGroupFieldMetaName = new FieldMeta<ItemPropertyGroupField>(
  ItemPropertyGroupField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this item property group.',
  '0..1',
  'cbc',
  undefined,
  'Electrical Specifications , Dietary Content'
)

export const ItemPropertyGroupFieldMetaImportanceCode = new FieldMeta<ItemPropertyGroupField>(
  ItemPropertyGroupField.ImportanceCode,
  'ImportanceCode',
  'Importance Code',
  'Code',
  'A code signifying the importance of this property group in using it to describe a required Item.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export class ItemPropertyGroupFieldMeta {
  public static readonly UBLExtensions = ItemPropertyGroupFieldMetaUBLExtensions
  public static readonly ID = ItemPropertyGroupFieldMetaID
  public static readonly Name = ItemPropertyGroupFieldMetaName
  public static readonly ImportanceCode = ItemPropertyGroupFieldMetaImportanceCode
}

export const ItemPropertyGroupFieldMap = new Map([
  [ItemPropertyGroupField.UBLExtensions, ItemPropertyGroupFieldMetaUBLExtensions],
  [ItemPropertyGroupField.ID, ItemPropertyGroupFieldMetaID],
  [ItemPropertyGroupField.Name, ItemPropertyGroupFieldMetaName],
  [ItemPropertyGroupField.ImportanceCode, ItemPropertyGroupFieldMetaImportanceCode]
])
