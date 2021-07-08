import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TaxSchemeField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Name = 'Name',
  TaxTypeCode = 'TaxTypeCode',
  CurrencyCode = 'CurrencyCode',
  JurisdictionRegionAddress = 'JurisdictionRegionAddress'
}

export const TaxSchemeFieldMetaUBLExtensions = new FieldMeta<TaxSchemeField>(
  TaxSchemeField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TaxSchemeFieldMetaID = new FieldMeta<TaxSchemeField>(
  TaxSchemeField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this taxation scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'http://www.unece.org/uncefact/codelist/standard/EDIFICASEU_TaxExemptionReason_D09B.xsd'
)

export const TaxSchemeFieldMetaName = new FieldMeta<TaxSchemeField>(
  TaxSchemeField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this taxation scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Value Added Tax , Wholesale Tax , Sales Tax , State Tax'
)

export const TaxSchemeFieldMetaTaxTypeCode = new FieldMeta<TaxSchemeField>(
  TaxSchemeField.TaxTypeCode,
  'TaxTypeCode',
  'Tax Type Code',
  CodeType.name,
  'A code signifying the type of tax.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Consumption , Sales'
)

export const TaxSchemeFieldMetaCurrencyCode = new FieldMeta<TaxSchemeField>(
  TaxSchemeField.CurrencyCode,
  'CurrencyCode',
  'Currency Code',
  CodeType.name,
  'A code signifying the currency in which the tax is collected and reported.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxSchemeFieldMetaJurisdictionRegionAddress = new FieldMeta<TaxSchemeField>(
  TaxSchemeField.JurisdictionRegionAddress,
  'JurisdictionRegionAddress',
  'Jurisdiction Region Address',
  AddressType.name,
  'A geographic area in which this taxation scheme applies.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TaxSchemeFieldMeta {
  public static readonly UBLExtensions = TaxSchemeFieldMetaUBLExtensions
  public static readonly ID = TaxSchemeFieldMetaID
  public static readonly Name = TaxSchemeFieldMetaName
  public static readonly TaxTypeCode = TaxSchemeFieldMetaTaxTypeCode
  public static readonly CurrencyCode = TaxSchemeFieldMetaCurrencyCode
  public static readonly JurisdictionRegionAddress = TaxSchemeFieldMetaJurisdictionRegionAddress
}

export const TaxSchemeFieldMap = new Map([
  [TaxSchemeField.UBLExtensions, TaxSchemeFieldMetaUBLExtensions],
  [TaxSchemeField.ID, TaxSchemeFieldMetaID],
  [TaxSchemeField.Name, TaxSchemeFieldMetaName],
  [TaxSchemeField.TaxTypeCode, TaxSchemeFieldMetaTaxTypeCode],
  [TaxSchemeField.CurrencyCode, TaxSchemeFieldMetaCurrencyCode],
  [TaxSchemeField.JurisdictionRegionAddress, TaxSchemeFieldMetaJurisdictionRegionAddress]
])

export const TaxSchemeType: Type<TaxSchemeField> = {
  name: 'TaxScheme',
  label: 'Tax Scheme',
  module: TypeModule.cac,
  definition: 'A class to describe a taxation scheme (e.g., VAT, State tax, County tax).',
  fields: TaxSchemeFieldMap,
}
