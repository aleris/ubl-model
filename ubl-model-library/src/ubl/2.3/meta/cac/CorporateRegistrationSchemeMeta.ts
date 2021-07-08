import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum CorporateRegistrationSchemeField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Name = 'Name',
  CorporateRegistrationTypeCode = 'CorporateRegistrationTypeCode',
  JurisdictionRegionAddress = 'JurisdictionRegionAddress'
}

export const CorporateRegistrationSchemeFieldMetaUBLExtensions = new FieldMeta<CorporateRegistrationSchemeField>(
  CorporateRegistrationSchemeField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CorporateRegistrationSchemeFieldMetaID = new FieldMeta<CorporateRegistrationSchemeField>(
  CorporateRegistrationSchemeField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this registration scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'ASIC in Australia'
)

export const CorporateRegistrationSchemeFieldMetaName = new FieldMeta<CorporateRegistrationSchemeField>(
  CorporateRegistrationSchemeField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this registration scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Australian Securities and Investment Commission in Australia'
)

export const CorporateRegistrationSchemeFieldMetaCorporateRegistrationTypeCode = new FieldMeta<CorporateRegistrationSchemeField>(
  CorporateRegistrationSchemeField.CorporateRegistrationTypeCode,
  'CorporateRegistrationTypeCode',
  'Corporate Registration Type Code',
  CodeType.name,
  'A code signifying the type of this registration scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'ACN'
)

export const CorporateRegistrationSchemeFieldMetaJurisdictionRegionAddress = new FieldMeta<CorporateRegistrationSchemeField>(
  CorporateRegistrationSchemeField.JurisdictionRegionAddress,
  'JurisdictionRegionAddress',
  'Jurisdiction Region Address',
  AddressType.name,
  'A geographic area in which this registration scheme applies.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  'England , Wales'
)

export class CorporateRegistrationSchemeFieldMeta {
  public static readonly UBLExtensions = CorporateRegistrationSchemeFieldMetaUBLExtensions
  public static readonly ID = CorporateRegistrationSchemeFieldMetaID
  public static readonly Name = CorporateRegistrationSchemeFieldMetaName
  public static readonly CorporateRegistrationTypeCode = CorporateRegistrationSchemeFieldMetaCorporateRegistrationTypeCode
  public static readonly JurisdictionRegionAddress = CorporateRegistrationSchemeFieldMetaJurisdictionRegionAddress
}

export const CorporateRegistrationSchemeFieldMap = new Map([
  [CorporateRegistrationSchemeField.UBLExtensions, CorporateRegistrationSchemeFieldMetaUBLExtensions],
  [CorporateRegistrationSchemeField.ID, CorporateRegistrationSchemeFieldMetaID],
  [CorporateRegistrationSchemeField.Name, CorporateRegistrationSchemeFieldMetaName],
  [CorporateRegistrationSchemeField.CorporateRegistrationTypeCode, CorporateRegistrationSchemeFieldMetaCorporateRegistrationTypeCode],
  [CorporateRegistrationSchemeField.JurisdictionRegionAddress, CorporateRegistrationSchemeFieldMetaJurisdictionRegionAddress]
])

export const CorporateRegistrationSchemeType: Type<CorporateRegistrationSchemeField> = {
  name: 'CorporateRegistrationScheme',
  label: 'Corporate Registration Scheme',
  module: TypeModule.cac,
  definition: 'A class to describe a scheme for corporate registration.',
  fields: CorporateRegistrationSchemeFieldMap,
}
