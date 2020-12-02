import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const CorporateRegistrationSchemeFieldMetaID = new FieldMeta<CorporateRegistrationSchemeField>(
  CorporateRegistrationSchemeField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this registration scheme.',
  '0..1',
  'cbc',
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
  'cbc',
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
  'cbc',
  undefined,
  'ACN'
)

export const CorporateRegistrationSchemeFieldMetaJurisdictionRegionAddress = new FieldMeta<CorporateRegistrationSchemeField>(
  CorporateRegistrationSchemeField.JurisdictionRegionAddress,
  'JurisdictionRegionAddress',
  'Jurisdiction Region Address',
  'Address',
  'A geographic area in which this registration scheme applies.',
  '0..n',
  'cac',
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
