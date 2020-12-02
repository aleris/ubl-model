import { FieldMeta } from '../FieldMeta'

export enum PropertyIdentificationField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  IssuerScopeID = 'IssuerScopeID',
  IssuerParty = 'IssuerParty'
}

export const PropertyIdentificationFieldMetaUBLExtensions = new FieldMeta<PropertyIdentificationField>(
  PropertyIdentificationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const PropertyIdentificationFieldMetaID = new FieldMeta<PropertyIdentificationField>(
  PropertyIdentificationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An Identifier for the property.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const PropertyIdentificationFieldMetaIssuerScopeID = new FieldMeta<PropertyIdentificationField>(
  PropertyIdentificationField.IssuerScopeID,
  'IssuerScopeID',
  'Issuer Scope Identifier',
  'Identifier',
  'A scope within which the issuer has assigned this identifier.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PropertyIdentificationFieldMetaIssuerParty = new FieldMeta<PropertyIdentificationField>(
  PropertyIdentificationField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  'Party',
  'The party that issued this property identifier.',
  '0..1',
  'cac',
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
