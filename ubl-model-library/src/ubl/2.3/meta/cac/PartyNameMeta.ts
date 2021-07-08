import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PartyNameField {
  UBLExtensions = 'UBLExtensions',
  Name = 'Name'
}

export const PartyNameFieldMetaUBLExtensions = new FieldMeta<PartyNameField>(
  PartyNameField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PartyNameFieldMetaName = new FieldMeta<PartyNameField>(
  PartyNameField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of the party.',
  FieldCardinality.Uni,
  TypeModule.cbc,
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

export const PartyNameType: Type<PartyNameField> = {
  name: 'PartyName',
  label: 'Party Name',
  module: TypeModule.cac,
  definition: 'A class for defining the name of a party.',
  fields: PartyNameFieldMap,
}
