import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from './PartyMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PropertyIdentificationField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  IssuerScopeID = 'IssuerScopeID',
  IssuerParty = 'IssuerParty'
}

export const PropertyIdentificationFieldMetaUBLExtensions = new FieldMeta<PropertyIdentificationField>(
  PropertyIdentificationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PropertyIdentificationFieldMetaID = new FieldMeta<PropertyIdentificationField>(
  PropertyIdentificationField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An Identifier for the property.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PropertyIdentificationFieldMetaIssuerScopeID = new FieldMeta<PropertyIdentificationField>(
  PropertyIdentificationField.IssuerScopeID,
  'IssuerScopeID',
  'Issuer Scope Identifier',
  IdentifierType.name,
  'A scope within which the issuer has assigned this identifier.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PropertyIdentificationFieldMetaIssuerParty = new FieldMeta<PropertyIdentificationField>(
  PropertyIdentificationField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  PartyType.name,
  'The party that issued this property identifier.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class PropertyIdentificationFieldMeta {
  public static readonly UBLExtensions = PropertyIdentificationFieldMetaUBLExtensions
  public static readonly ID = PropertyIdentificationFieldMetaID
  public static readonly IssuerScopeID = PropertyIdentificationFieldMetaIssuerScopeID
  public static readonly IssuerParty = PropertyIdentificationFieldMetaIssuerParty
}

export const PropertyIdentificationFieldMap = new Map([
  [PropertyIdentificationField.UBLExtensions, PropertyIdentificationFieldMetaUBLExtensions],
  [PropertyIdentificationField.ID, PropertyIdentificationFieldMetaID],
  [PropertyIdentificationField.IssuerScopeID, PropertyIdentificationFieldMetaIssuerScopeID],
  [PropertyIdentificationField.IssuerParty, PropertyIdentificationFieldMetaIssuerParty]
])

export const PropertyIdentificationType: Type<PropertyIdentificationField> = {
  name: 'PropertyIdentification',
  label: 'Property Identification',
  module: TypeModule.cac,
  definition: 'A class for assigning identifying information for a property',
  fields: PropertyIdentificationFieldMap,
}
