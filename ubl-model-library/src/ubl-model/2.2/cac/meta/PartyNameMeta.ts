import { FieldMeta } from '../../FieldMeta'

export enum PartyNameField {
  Name = 'Name'
}

export const PartyNameFieldMetaName = new FieldMeta<PartyNameField>(
  PartyNameField.Name,
  'Name',
  'Name',
  'Text',
  'The name of the party.',
  '1',
  undefined,
  'Microsoft'
)

export class PartyNameFieldMeta {
  public static readonly Name = PartyNameFieldMetaName
}

export const PartyNameFieldMap = new Map([
  [PartyNameField.Name, PartyNameFieldMetaName]
])
