import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ItemPropertyGroupField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Name = 'Name',
  ImportanceCode = 'ImportanceCode'
}

export const ItemPropertyGroupFieldMetaUBLExtensions = new FieldMeta<ItemPropertyGroupField>(
  ItemPropertyGroupField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ItemPropertyGroupFieldMetaID = new FieldMeta<ItemPropertyGroupField>(
  ItemPropertyGroupField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this group of item properties.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '233-004'
)

export const ItemPropertyGroupFieldMetaName = new FieldMeta<ItemPropertyGroupField>(
  ItemPropertyGroupField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this item property group.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Electrical Specifications , Dietary Content'
)

export const ItemPropertyGroupFieldMetaImportanceCode = new FieldMeta<ItemPropertyGroupField>(
  ItemPropertyGroupField.ImportanceCode,
  'ImportanceCode',
  'Importance Code',
  CodeType.name,
  'A code signifying the importance of this property group in using it to describe a required Item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
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

export const ItemPropertyGroupType: Type<ItemPropertyGroupField> = {
  name: 'ItemPropertyGroup',
  label: 'Item Property Group',
  module: TypeModule.cac,
  definition: 'A class to describe a property group or classification.',
  fields: ItemPropertyGroupFieldMap,
}
