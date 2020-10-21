import { FieldMeta } from '../../FieldMeta'

export enum ClassificationCategoryField {
  Name = 'Name',
  CodeValue = 'CodeValue',
  Description = 'Description',
  CategorizesClassificationCategory = 'CategorizesClassificationCategory'
}

export const ClassificationCategoryFieldMetaName = new FieldMeta<ClassificationCategoryField>(
  ClassificationCategoryField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this category within the classification scheme.',
  '0..1',
  'Code List Name',
  'UNSPSC Class , UNSPSC Segment , UNSPSC Family'
)

export const ClassificationCategoryFieldMetaCodeValue = new FieldMeta<ClassificationCategoryField>(
  ClassificationCategoryField.CodeValue,
  'CodeValue',
  'Code Value',
  'Text',
  'The value of a code used to identify this category within the classification scheme.',
  '0..1',
  'Code Value',
  '3420001, 3273666, HSJJD-213'
)

export const ClassificationCategoryFieldMetaDescription = new FieldMeta<ClassificationCategoryField>(
  ClassificationCategoryField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this category.',
  '0..n',
  'Code Name',
  'Electrical Goods , Wooden Toys'
)

export const ClassificationCategoryFieldMetaCategorizesClassificationCategory = new FieldMeta<ClassificationCategoryField>(
  ClassificationCategoryField.CategorizesClassificationCategory,
  'CategorizesClassificationCategory',
  'Classification Category',
  'ClassificationCategory',
  'A recursive description of a subcategory of this category.',
  '0..n',
  undefined,
  undefined
)

export class ClassificationCategoryFieldMeta {
  public static readonly Name = ClassificationCategoryFieldMetaName
  public static readonly CodeValue = ClassificationCategoryFieldMetaCodeValue
  public static readonly Description = ClassificationCategoryFieldMetaDescription
  public static readonly CategorizesClassificationCategory = ClassificationCategoryFieldMetaCategorizesClassificationCategory
}

export const ClassificationCategoryFieldMap = new Map([
  [ClassificationCategoryField.Name, ClassificationCategoryFieldMetaName],
  [ClassificationCategoryField.CodeValue, ClassificationCategoryFieldMetaCodeValue],
  [ClassificationCategoryField.Description, ClassificationCategoryFieldMetaDescription],
  [ClassificationCategoryField.CategorizesClassificationCategory, ClassificationCategoryFieldMetaCategorizesClassificationCategory]
])
