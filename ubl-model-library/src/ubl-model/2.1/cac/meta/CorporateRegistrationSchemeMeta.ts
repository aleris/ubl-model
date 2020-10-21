import { FieldMeta } from '../../FieldMeta'

export enum CorporateRegistrationSchemeField {
  ID = 'ID',
  Name = 'Name',
  CorporateRegistrationTypeCode = 'CorporateRegistrationTypeCode',
  JurisdictionRegionAddress = 'JurisdictionRegionAddress'
}

export const CorporateRegistrationSchemeFieldMetaID = new FieldMeta<CorporateRegistrationSchemeField>(
  CorporateRegistrationSchemeField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this registration scheme.',
  '0..1',
  undefined,
  'ASIC in Australia'
)

export const CorporateRegistrationSchemeFieldMetaName = new FieldMeta<CorporateRegistrationSchemeField>(
  CorporateRegistrationSchemeField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this registration scheme.',
  '0..1',
  undefined,
  'Australian Securities and Investment Commission in Australia'
)

export const CorporateRegistrationSchemeFieldMetaCorporateRegistrationTypeCode = new FieldMeta<CorporateRegistrationSchemeField>(
  CorporateRegistrationSchemeField.CorporateRegistrationTypeCode,
  'CorporateRegistrationTypeCode',
  'Corporate Registration Type Code',
  'Code',
  'A code signifying the type of this registration scheme.',
  '0..1',
  undefined,
  'ACN'
)

export const CorporateRegistrationSchemeFieldMetaJurisdictionRegionAddress = new FieldMeta<CorporateRegistrationSchemeField>(
  CorporateRegistrationSchemeField.JurisdictionRegionAddress,
  'JurisdictionRegionAddress',
  'Address',
  'Address',
  'A geographic area in which this registration scheme applies.',
  '0..n',
  undefined,
  'England , Wales'
)

export class CorporateRegistrationSchemeFieldMeta {
  public static readonly ID = CorporateRegistrationSchemeFieldMetaID
  public static readonly Name = CorporateRegistrationSchemeFieldMetaName
  public static readonly CorporateRegistrationTypeCode = CorporateRegistrationSchemeFieldMetaCorporateRegistrationTypeCode
  public static readonly JurisdictionRegionAddress = CorporateRegistrationSchemeFieldMetaJurisdictionRegionAddress
}

export const CorporateRegistrationSchemeFieldMap = new Map([
  [CorporateRegistrationSchemeField.ID, CorporateRegistrationSchemeFieldMetaID],
  [CorporateRegistrationSchemeField.Name, CorporateRegistrationSchemeFieldMetaName],
  [CorporateRegistrationSchemeField.CorporateRegistrationTypeCode, CorporateRegistrationSchemeFieldMetaCorporateRegistrationTypeCode],
  [CorporateRegistrationSchemeField.JurisdictionRegionAddress, CorporateRegistrationSchemeFieldMetaJurisdictionRegionAddress]
])
