import { FieldMeta } from '../FieldMeta'

export enum ActivityPropertyField {
  UBLExtensions = 'UBLExtensions',
  Name = 'Name',
  Value = 'Value'
}

export const ActivityPropertyFieldMetaUBLExtensions = new FieldMeta<ActivityPropertyField>(
  ActivityPropertyField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ActivityPropertyFieldMetaName = new FieldMeta<ActivityPropertyField>(
  ActivityPropertyField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this activity property.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ActivityPropertyFieldMetaValue = new FieldMeta<ActivityPropertyField>(
  ActivityPropertyField.Value,
  'Value',
  'Value',
  'Text',
  'The value of this activity property.',
  '1',
  'cbc',
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
