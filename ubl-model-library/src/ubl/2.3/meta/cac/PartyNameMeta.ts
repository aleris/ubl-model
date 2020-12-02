import { FieldMeta } from '../FieldMeta'

export enum PartyNameField {
  UBLExtensions = 'UBLExtensions',
  Name = 'Name'
}

export const PartyNameFieldMetaUBLExtensions = new FieldMeta<PartyNameField>(
  PartyNameField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const PartyNameFieldMetaName = new FieldMeta<PartyNameField>(
  PartyNameField.Name,
  'Name',
  'Name',
  'Text',
  'The name of the party.',
  '1',
  'cbc',
  undefined,
  'Microsoft'
)

export class PartyNameFieldMeta {
  public static readonly UBLExtensions = PartyNameFieldMetaUBLExtensions
  public static readonly Name = PartyNameFieldMetaName
}

export const PartyNameFieldMap = new Map([
  [PartyNameField.UBLExtensions, PartyNameFieldMetaUBLExtensions],
  [PartyNameField.Name, PartyNameFieldMetaName]
])
