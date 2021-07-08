import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PartyIdentificationField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID'
}

export const PartyIdentificationFieldMetaUBLExtensions = new FieldMeta<PartyIdentificationField>(
  PartyIdentificationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PartyIdentificationFieldMetaID = new FieldMeta<PartyIdentificationField>(
  PartyIdentificationField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for the party.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export class PartyIdentificationFieldMeta {
  public static readonly UBLExtensions = PartyIdentificationFieldMetaUBLExtensions
  public static readonly ID = PartyIdentificationFieldMetaID
}

export const PartyIdentificationFieldMap = new Map([
  [PartyIdentificationField.UBLExtensions, PartyIdentificationFieldMetaUBLExtensions],
  [PartyIdentificationField.ID, PartyIdentificationFieldMetaID]
])

export const PartyIdentificationType: Type<PartyIdentificationField> = {
  name: 'PartyIdentification',
  label: 'Party Identification',
  module: TypeModule.cac,
  definition: 'A class to define an identifier for a party.',
  fields: PartyIdentificationFieldMap,
}
