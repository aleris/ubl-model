import { FieldMeta } from '../../FieldMeta'

export enum ItemPropertyGroupField {
  ID = 'ID',
  Name = 'Name',
  ImportanceCode = 'ImportanceCode'
}

export const ItemPropertyGroupFieldMetaID = new FieldMeta<ItemPropertyGroupField>(
  ItemPropertyGroupField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this group of item properties.',
  '1',
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
  undefined,
  undefined
)

export class ItemPropertyGroupFieldMeta {
  public static readonly ID = ItemPropertyGroupFieldMetaID
  public static readonly Name = ItemPropertyGroupFieldMetaName
  public static readonly ImportanceCode = ItemPropertyGroupFieldMetaImportanceCode
}

export const ItemPropertyGroupFieldMap = new Map([
  [ItemPropertyGroupField.ID, ItemPropertyGroupFieldMetaID],
  [ItemPropertyGroupField.Name, ItemPropertyGroupFieldMetaName],
  [ItemPropertyGroupField.ImportanceCode, ItemPropertyGroupFieldMetaImportanceCode]
])
