import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DimensionType } from './DimensionMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ItemPropertyGroupType } from './ItemPropertyGroupMeta'
import { ItemPropertyRangeType } from './ItemPropertyRangeMeta'
import { PeriodType } from './PeriodMeta'
import { PropertyIdentificationType } from './PropertyIdentificationMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ItemPropertyFieldMetaID = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this property of an item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemPropertyFieldMetaName = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this item property.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  'Energy Rating , Collar Size , Fat Content'
)

export const ItemPropertyFieldMetaNameCode = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.NameCode,
  'NameCode',
  'Name Code',
  CodeType.name,
  'The name of this item property, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemPropertyFieldMetaTestMethod = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.TestMethod,
  'TestMethod',
  'Test Method',
  TextType.name,
  'The method of testing the value of this item property.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '100 watts , 15 European , 20% +/- 5%'
)

export const ItemPropertyFieldMetaValue = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.Value,
  'Value',
  'Value',
  TextType.name,
  'The value of this item property, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '100 watts , 15 European , 20% +/- 5%'
)

export const ItemPropertyFieldMetaValueQuantity = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.ValueQuantity,
  'ValueQuantity',
  'Value Quantity',
  QuantityType.name,
  'The value of this item property, expressed as a quantity.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemPropertyFieldMetaValueQualifier = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.ValueQualifier,
  'ValueQualifier',
  'Value Qualifier',
  TextType.name,
  'Text qualifying the value of the property.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemPropertyFieldMetaImportanceCode = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.ImportanceCode,
  'ImportanceCode',
  'Importance Code',
  CodeType.name,
  'A code signifying the importance of this property in using it to describe a related Item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemPropertyFieldMetaListValue = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.ListValue,
  'ListValue',
  'List Value',
  TextType.name,
  'The value expressed as a text in case the property is a value in a list. For example, a colour.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemPropertyFieldMetaUsabilityPeriod = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.UsabilityPeriod,
  'UsabilityPeriod',
  'Usability Period',
  PeriodType.name,
  'The period during which this item property is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemPropertyFieldMetaItemPropertyGroup = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.ItemPropertyGroup,
  'ItemPropertyGroup',
  'Item Property Group',
  ItemPropertyGroupType.name,
  'A description of the property group to which this item property belongs.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemPropertyFieldMetaRangeDimension = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.RangeDimension,
  'RangeDimension',
  'Range Dimension',
  DimensionType.name,
  'The range of values for the dimensions of this property.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemPropertyFieldMetaItemPropertyRange = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.ItemPropertyRange,
  'ItemPropertyRange',
  'Item Property Range',
  ItemPropertyRangeType.name,
  'A range of values for this item property.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemPropertyFieldMetaStandardPropertyIdentification = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.StandardPropertyIdentification,
  'StandardPropertyIdentification',
  'Standard Property Identification',
  PropertyIdentificationType.name,
  'Identifying information for this property, assigned according to a standard system.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemPropertyFieldMetaSubItemProperty = new FieldMeta<ItemPropertyField>(
  ItemPropertyField.SubItemProperty,
  'SubItemProperty',
  'Sub Item Property',
  ItemPropertyType.name,
  'A property subsidiary to this property.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const ItemPropertyType: Type<ItemPropertyField> = {
  name: 'ItemProperty',
  label: 'Item Property',
  module: TypeModule.cac,
  definition: 'A class to describe a specific property of an item.',
  fields: ItemPropertyFieldMap,
}
