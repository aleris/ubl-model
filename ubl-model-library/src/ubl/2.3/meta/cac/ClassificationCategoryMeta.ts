import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ClassificationCategoryField {
  UBLExtensions = 'UBLExtensions',
  Name = 'Name',
  CodeValue = 'CodeValue',
  Description = 'Description',
  CategorizesClassificationCategory = 'CategorizesClassificationCategory'
}

export const ClassificationCategoryFieldMetaUBLExtensions = new FieldMeta<ClassificationCategoryField>(
  ClassificationCategoryField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ClassificationCategoryFieldMetaName = new FieldMeta<ClassificationCategoryField>(
  ClassificationCategoryField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this category within the classification scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Code List Name',
  'UNSPSC Class , UNSPSC Segment , UNSPSC Family'
)

export const ClassificationCategoryFieldMetaCodeValue = new FieldMeta<ClassificationCategoryField>(
  ClassificationCategoryField.CodeValue,
  'CodeValue',
  'Code Value',
  TextType.name,
  'The value of a code used to identify this category within the classification scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Code Value',
  '3420001, 3273666, HSJJD-213'
)

export const ClassificationCategoryFieldMetaDescription = new FieldMeta<ClassificationCategoryField>(
  ClassificationCategoryField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this category.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  'Code Name',
  'Electrical Goods , Wooden Toys'
)

export const ClassificationCategoryFieldMetaCategorizesClassificationCategory = new FieldMeta<ClassificationCategoryField>(
  ClassificationCategoryField.CategorizesClassificationCategory,
  'CategorizesClassificationCategory',
  'Categorizes Classification Category',
  ClassificationCategoryType.name,
  'A recursive description of a subcategory of this category.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class ClassificationCategoryFieldMeta {
  public static readonly UBLExtensions = ClassificationCategoryFieldMetaUBLExtensions
  public static readonly Name = ClassificationCategoryFieldMetaName
  public static readonly CodeValue = ClassificationCategoryFieldMetaCodeValue
  public static readonly Description = ClassificationCategoryFieldMetaDescription
  public static readonly CategorizesClassificationCategory = ClassificationCategoryFieldMetaCategorizesClassificationCategory
}

export const ClassificationCategoryFieldMap = new Map([
  [ClassificationCategoryField.UBLExtensions, ClassificationCategoryFieldMetaUBLExtensions],
  [ClassificationCategoryField.Name, ClassificationCategoryFieldMetaName],
  [ClassificationCategoryField.CodeValue, ClassificationCategoryFieldMetaCodeValue],
  [ClassificationCategoryField.Description, ClassificationCategoryFieldMetaDescription],
  [ClassificationCategoryField.CategorizesClassificationCategory, ClassificationCategoryFieldMetaCategorizesClassificationCategory]
])

export const ClassificationCategoryType: Type<ClassificationCategoryField> = {
  name: 'ClassificationCategory',
  label: 'Classification Category',
  module: TypeModule.cac,
  definition: 'A class to define a category within a classification scheme.',
  fields: ClassificationCategoryFieldMap,
}
