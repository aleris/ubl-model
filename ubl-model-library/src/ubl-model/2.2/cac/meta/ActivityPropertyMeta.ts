import { FieldMeta } from '../../FieldMeta'

export enum ActivityPropertyField {
  Name = 'Name',
  Value = 'Value'
}

export const ActivityPropertyFieldMetaName = new FieldMeta<ActivityPropertyField>(
  ActivityPropertyField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this activity property.',
  '1',
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
  undefined,
  undefined
)

export class ActivityPropertyFieldMeta {
  public static readonly Name = ActivityPropertyFieldMetaName
  public static readonly Value = ActivityPropertyFieldMetaValue
}

export const ActivityPropertyFieldMap = new Map([
  [ActivityPropertyField.Name, ActivityPropertyFieldMetaName],
  [ActivityPropertyField.Value, ActivityPropertyFieldMetaValue]
])
