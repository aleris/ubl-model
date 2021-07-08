import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ActivityPropertyField {
  UBLExtensions = 'UBLExtensions',
  Name = 'Name',
  Value = 'Value'
}

export const ActivityPropertyFieldMetaUBLExtensions = new FieldMeta<ActivityPropertyField>(
  ActivityPropertyField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ActivityPropertyFieldMetaName = new FieldMeta<ActivityPropertyField>(
  ActivityPropertyField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this activity property.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ActivityPropertyFieldMetaValue = new FieldMeta<ActivityPropertyField>(
  ActivityPropertyField.Value,
  'Value',
  'Value',
  TextType.name,
  'The value of this activity property.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export class ActivityPropertyFieldMeta {
  public static readonly UBLExtensions = ActivityPropertyFieldMetaUBLExtensions
  public static readonly Name = ActivityPropertyFieldMetaName
  public static readonly Value = ActivityPropertyFieldMetaValue
}

export const ActivityPropertyFieldMap = new Map([
  [ActivityPropertyField.UBLExtensions, ActivityPropertyFieldMetaUBLExtensions],
  [ActivityPropertyField.Name, ActivityPropertyFieldMetaName],
  [ActivityPropertyField.Value, ActivityPropertyFieldMetaValue]
])

export const ActivityPropertyType: Type<ActivityPropertyField> = {
  name: 'ActivityProperty',
  label: 'Activity Property',
  module: TypeModule.cac,
  definition: 'A class to define a name/value pair for a property of an inventory planning activity.',
  fields: ActivityPropertyFieldMap,
}
