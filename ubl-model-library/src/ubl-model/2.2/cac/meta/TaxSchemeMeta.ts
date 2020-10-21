import { FieldMeta } from '../../FieldMeta'

export enum TaxSchemeField {
  ID = 'ID',
  Name = 'Name',
  TaxTypeCode = 'TaxTypeCode',
  CurrencyCode = 'CurrencyCode',
  JurisdictionRegionAddress = 'JurisdictionRegionAddress'
}

export const TaxSchemeFieldMetaID = new FieldMeta<TaxSchemeField>(
  TaxSchemeField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this taxation scheme.',
  '0..1',
  undefined,
  'http://www.unece.org/uncefact/codelist/standard/EDIFICASEU_TaxExemptionReason_D09B.xsd'
)

export const TaxSchemeFieldMetaName = new FieldMeta<TaxSchemeField>(
  TaxSchemeField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this taxation scheme.',
  '0..1',
  undefined,
  'Value Added Tax , Wholesale Tax , Sales Tax , State Tax'
)

export const TaxSchemeFieldMetaTaxTypeCode = new FieldMeta<TaxSchemeField>(
  TaxSchemeField.TaxTypeCode,
  'TaxTypeCode',
  'Tax Type Code',
  'Code',
  'A code signifying the type of tax.',
  '0..1',
  undefined,
  'Consumption , Sales'
)

export const TaxSchemeFieldMetaCurrencyCode = new FieldMeta<TaxSchemeField>(
  TaxSchemeField.CurrencyCode,
  'CurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency in which the tax is collected and reported.',
  '0..1',
  undefined,
  undefined
)

export const TaxSchemeFieldMetaJurisdictionRegionAddress = new FieldMeta<TaxSchemeField>(
  TaxSchemeField.JurisdictionRegionAddress,
  'JurisdictionRegionAddress',
  'Address',
  'Address',
  'A geographic area in which this taxation scheme applies.',
  '0..n',
  undefined,
  undefined
)

export class TaxSchemeFieldMeta {
  public static readonly ID = TaxSchemeFieldMetaID
  public static readonly Name = TaxSchemeFieldMetaName
  public static readonly TaxTypeCode = TaxSchemeFieldMetaTaxTypeCode
  public static readonly CurrencyCode = TaxSchemeFieldMetaCurrencyCode
  public static readonly JurisdictionRegionAddress = TaxSchemeFieldMetaJurisdictionRegionAddress
}

export const TaxSchemeFieldMap = new Map([
  [TaxSchemeField.ID, TaxSchemeFieldMetaID],
  [TaxSchemeField.Name, TaxSchemeFieldMetaName],
  [TaxSchemeField.TaxTypeCode, TaxSchemeFieldMetaTaxTypeCode],
  [TaxSchemeField.CurrencyCode, TaxSchemeFieldMetaCurrencyCode],
  [TaxSchemeField.JurisdictionRegionAddress, TaxSchemeFieldMetaJurisdictionRegionAddress]
])
