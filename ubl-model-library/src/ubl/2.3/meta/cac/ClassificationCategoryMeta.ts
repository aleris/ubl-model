import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ClassificationCategoryFieldMetaName = new FieldMeta<ClassificationCategoryField>(
  ClassificationCategoryField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this category within the classification scheme.',
  '0..1',
  'cbc',
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
  'cbc',
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
  'cbc',
  'Code Name',
  'Electrical Goods , Wooden Toys'
)

export const ClassificationCategoryFieldMetaCategorizesClassificationCategory = new FieldMeta<ClassificationCategoryField>(
  ClassificationCategoryField.CategorizesClassificationCategory,
  'CategorizesClassificationCategory',
  'Categorizes Classification Category',
  'ClassificationCategory',
  'A recursive description of a subcategory of this category.',
  '0..n',
  'cac',
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
