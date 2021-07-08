import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PhysicalAttributeFieldMetaAttributeID = new FieldMeta<PhysicalAttributeField>(
  PhysicalAttributeField.AttributeID,
  'AttributeID',
  'Attribute Identifier',
  IdentifierType.name,
  'An identifier for this physical attribute.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  'colour style'
)

export const PhysicalAttributeFieldMetaPositionCode = new FieldMeta<PhysicalAttributeField>(
  PhysicalAttributeField.PositionCode,
  'PositionCode',
  'Position Code',
  CodeType.name,
  'A code signifying the position of this physical attribute.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PhysicalAttributeFieldMetaDescriptionCode = new FieldMeta<PhysicalAttributeField>(
  PhysicalAttributeField.DescriptionCode,
  'DescriptionCode',
  'Description Code',
  CodeType.name,
  'A description of the physical attribute, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'XXL , Small'
)

export const PhysicalAttributeFieldMetaDescription = new FieldMeta<PhysicalAttributeField>(
  PhysicalAttributeField.Description,
  'Description',
  'Description',
  TextType.name,
  'A description of the physical attribute, expressed as text.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
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

export const PhysicalAttributeType: Type<PhysicalAttributeField> = {
  name: 'PhysicalAttribute',
  label: 'Physical Attribute',
  module: TypeModule.cac,
  definition: 'A class to describe a physical attribute.',
  fields: PhysicalAttributeFieldMap,
}
