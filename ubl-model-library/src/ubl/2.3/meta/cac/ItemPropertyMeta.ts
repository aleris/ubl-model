import { FieldMeta } from '../FieldMeta'

export enum ItemPropertyField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Name = 'Name',
  NameCode = 'NameCode',
  TestMethod = 'TestMethod',
  Value = 'Value',
  ValueQuantity = 'ValueQuantity',
  ValueQualifier = 'ValueQualifier',
  ImportanceCode = 'ImportanceCode',
  ListValue = 'ListValue',
  UsabilityPeriod = 'UsabilityPeriod',
  ItemPropertyGroup = 'ItemPropertyGroup',
  RangeDimension = 'RangeDimension',
  ItemPropertyRange = 'ItemPropertyRange',
  StandardPropertyIdentification = 'StandardPropertyIdentification',
  SubItemProperty = 'SubItemProperty'
}

export const ItemPropertyFieldMetaUBLExtensions = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ItemPropertyFieldMetaID = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this property of an item.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemPropertyFieldMetaName = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this item property.',
  '1',
  'cbc',
  undefined,
  'Energy Rating , Collar Size , Fat Content'
)

export const ItemPropertyFieldMetaNameCode = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.NameCode,
  'NameCode',
  'Name Code',
  'Code',
  'The name of this item property, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemPropertyFieldMetaTestMethod = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.TestMethod,
  'TestMethod',
  'Test Method',
  'Text',
  'The method of testing the value of this item property.',
  '0..1',
  'cbc',
  undefined,
  '100 watts , 15 European , 20% +/- 5%'
)

export const ItemPropertyFieldMetaValue = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.Value,
  'Value',
  'Value',
  'Text',
  'The value of this item property, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  '100 watts , 15 European , 20% +/- 5%'
)

export const ItemPropertyFieldMetaValueQuantity = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.ValueQuantity,
  'ValueQuantity',
  'Value Quantity',
  'Quantity',
  'The value of this item property, expressed as a quantity.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemPropertyFieldMetaValueQualifier = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.ValueQualifier,
  'ValueQualifier',
  'Value Qualifier',
  'Text',
  'Text qualifying the value of the property.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ItemPropertyFieldMetaImportanceCode = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.ImportanceCode,
  'ImportanceCode',
  'Importance Code',
  'Code',
  'A code signifying the importance of this property in using it to describe a related Item.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemPropertyFieldMetaListValue = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.ListValue,
  'ListValue',
  'List Value',
  'Text',
  'The value expressed as a text in case the property is a value in a list. For example, a colour.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ItemPropertyFieldMetaUsabilityPeriod = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.UsabilityPeriod,
  'UsabilityPeriod',
  'Usability Period',
  'Period',
  'The period during which this item property is valid.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ItemPropertyFieldMetaItemPropertyGroup = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.ItemPropertyGroup,
  'ItemPropertyGroup',
  'Item Property Group',
  'ItemPropertyGroup',
  'A description of the property group to which this item property belongs.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ItemPropertyFieldMetaRangeDimension = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.RangeDimension,
  'RangeDimension',
  'Range Dimension',
  'Dimension',
  'The range of values for the dimensions of this property.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ItemPropertyFieldMetaItemPropertyRange = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.ItemPropertyRange,
  'ItemPropertyRange',
  'Item Property Range',
  'ItemPropertyRange',
  'A range of values for this item property.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ItemPropertyFieldMetaStandardPropertyIdentification = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.StandardPropertyIdentification,
  'StandardPropertyIdentification',
  'Standard Property Identification',
  'PropertyIdentification',
  'Identifying information for this property, assigned according to a standard system.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ItemPropertyFieldMetaSubItemProperty = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.SubItemProperty,
  'SubItemProperty',
  'Sub Item Property',
  'ItemProperty',
  'A property subsidiary to this property.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class ItemPropertyFieldMeta {
  public static readonly UBLExtensions = ItemPropertyFieldMetaUBLExtensions
  public static readonly ID = ItemPropertyFieldMetaID
  public static readonly Name = ItemPropertyFieldMetaName
  public static readonly NameCode = ItemPropertyFieldMetaNameCode
  public static readonly TestMethod = ItemPropertyFieldMetaTestMethod
  public static readonly Value = ItemPropertyFieldMetaValue
  public static readonly ValueQuantity = ItemPropertyFieldMetaValueQuantity
  public static readonly ValueQualifier = ItemPropertyFieldMetaValueQualifier
  public static readonly ImportanceCode = ItemPropertyFieldMetaImportanceCode
  public static readonly ListValue = ItemPropertyFieldMetaListValue
  public static readonly UsabilityPeriod = ItemPropertyFieldMetaUsabilityPeriod
  public static readonly ItemPropertyGroup = ItemPropertyFieldMetaItemPropertyGroup
  public static readonly RangeDimension = ItemPropertyFieldMetaRangeDimension
  public static readonly ItemPropertyRange = ItemPropertyFieldMetaItemPropertyRange
  public static readonly StandardPropertyIdentification = ItemPropertyFieldMetaStandardPropertyIdentification
  public static readonly SubItemProperty = ItemPropertyFieldMetaSubItemProperty
}

export const ItemPropertyFieldMap = new Map([
  [ItemPropertyField.UBLExtensions, ItemPropertyFieldMetaUBLExtensions],
  [ItemPropertyField.ID, ItemPropertyFieldMetaID],
  [ItemPropertyField.Name, ItemPropertyFieldMetaName],
  [ItemPropertyField.NameCode, ItemPropertyFieldMetaNameCode],
  [ItemPropertyField.TestMethod, ItemPropertyFieldMetaTestMethod],
  [ItemPropertyField.Value, ItemPropertyFieldMetaValue],
  [ItemPropertyField.ValueQuantity, ItemPropertyFieldMetaValueQuantity],
  [ItemPropertyField.ValueQualifier, ItemPropertyFieldMetaValueQualifier],
  [ItemPropertyField.ImportanceCode, ItemPropertyFieldMetaImportanceCode],
  [ItemPropertyField.ListValue, ItemPropertyFieldMetaListValue],
  [ItemPropertyField.UsabilityPeriod, ItemPropertyFieldMetaUsabilityPeriod],
  [ItemPropertyField.ItemPropertyGroup, ItemPropertyFieldMetaItemPropertyGroup],
  [ItemPropertyField.RangeDimension, ItemPropertyFieldMetaRangeDimension],
  [ItemPropertyField.ItemPropertyRange, ItemPropertyFieldMetaItemPropertyRange],
  [ItemPropertyField.StandardPropertyIdentification, ItemPropertyFieldMetaStandardPropertyIdentification],
  [ItemPropertyField.SubItemProperty, ItemPropertyFieldMetaSubItemProperty]
])
