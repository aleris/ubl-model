import { FieldMeta } from '../FieldMeta'

export enum PhysicalAttributeField {
  UBLExtensions = 'UBLExtensions',
  AttributeID = 'AttributeID',
  PositionCode = 'PositionCode',
  DescriptionCode = 'DescriptionCode',
  Description = 'Description'
}

export const PhysicalAttributeFieldMetaUBLExtensions = new FieldMeta<PhysicalAttributeField>(
  PhysicalAttributeField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const PhysicalAttributeFieldMetaAttributeID = new FieldMeta<PhysicalAttributeField>(
  PhysicalAttributeField.AttributeID,
  'AttributeID',
  'Attribute Identifier',
  'Identifier',
  'An identifier for this physical attribute.',
  '1',
  'cbc',
  undefined,
  'colour style'
)

export const PhysicalAttributeFieldMetaPositionCode = new FieldMeta<PhysicalAttributeField>(
  PhysicalAttributeField.PositionCode,
  'PositionCode',
  'Position Code',
  'Code',
  'A code signifying the position of this physical attribute.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PhysicalAttributeFieldMetaDescriptionCode = new FieldMeta<PhysicalAttributeField>(
  PhysicalAttributeField.DescriptionCode,
  'DescriptionCode',
  'Description Code',
  'Code',
  'A description of the physical attribute, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  'XXL , Small'
)

export const PhysicalAttributeFieldMetaDescription = new FieldMeta<PhysicalAttributeField>(
  PhysicalAttributeField.Description,
  'Description',
  'Description',
  'Text',
  'A description of the physical attribute, expressed as text.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export class PhysicalAttributeFieldMeta {
  public static readonly UBLExtensions = PhysicalAttributeFieldMetaUBLExtensions
  public static readonly AttributeID = PhysicalAttributeFieldMetaAttributeID
  public static readonly PositionCode = PhysicalAttributeFieldMetaPositionCode
  public static readonly DescriptionCode = PhysicalAttributeFieldMetaDescriptionCode
  public static readonly Description = PhysicalAttributeFieldMetaDescription
}

export const PhysicalAttributeFieldMap = new Map([
  [PhysicalAttributeField.UBLExtensions, PhysicalAttributeFieldMetaUBLExtensions],
  [PhysicalAttributeField.AttributeID, PhysicalAttributeFieldMetaAttributeID],
  [PhysicalAttributeField.PositionCode, PhysicalAttributeFieldMetaPositionCode],
  [PhysicalAttributeField.DescriptionCode, PhysicalAttributeFieldMetaDescriptionCode],
  [PhysicalAttributeField.Description, PhysicalAttributeFieldMetaDescription]
])
