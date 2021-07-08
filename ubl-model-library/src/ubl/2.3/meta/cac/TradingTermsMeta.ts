import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TradingTermsField {
  UBLExtensions = 'UBLExtensions',
  Information = 'Information',
  Reference = 'Reference',
  ApplicableAddress = 'ApplicableAddress'
}

export const TradingTermsFieldMetaUBLExtensions = new FieldMeta<TradingTermsField>(
  TradingTermsField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TradingTermsFieldMetaInformation = new FieldMeta<TradingTermsField>(
  TradingTermsField.Information,
  'Information',
  'Information',
  TextType.name,
  'Text describing the terms of a trade agreement.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'Unless credit terms have been expressly agreed by Dell, payment for the products or services shall be made in full before physical delivery of products or services. Customer shall pay for all shipping and handling charges.'
)

export const TradingTermsFieldMetaReference = new FieldMeta<TradingTermsField>(
  TradingTermsField.Reference,
  'Reference',
  'Reference',
  TextType.name,
  'A reference quoting the basis of the terms',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'http://www1.ap.dell.com/content/topics/topic.aspx/ap/policy/en/au/sales_terms_au'
)

export const TradingTermsFieldMetaApplicableAddress = new FieldMeta<TradingTermsField>(
  TradingTermsField.ApplicableAddress,
  'ApplicableAddress',
  'Applicable Address',
  AddressType.name,
  'The address at which these trading terms apply.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TradingTermsFieldMeta {
  public static readonly UBLExtensions = TradingTermsFieldMetaUBLExtensions
  public static readonly Information = TradingTermsFieldMetaInformation
  public static readonly Reference = TradingTermsFieldMetaReference
  public static readonly ApplicableAddress = TradingTermsFieldMetaApplicableAddress
}

export const TradingTermsFieldMap = new Map([
  [TradingTermsField.UBLExtensions, TradingTermsFieldMetaUBLExtensions],
  [TradingTermsField.Information, TradingTermsFieldMetaInformation],
  [TradingTermsField.Reference, TradingTermsFieldMetaReference],
  [TradingTermsField.ApplicableAddress, TradingTermsFieldMetaApplicableAddress]
])

export const TradingTermsType: Type<TradingTermsField> = {
  name: 'TradingTerms',
  label: 'Trading Terms',
  module: TypeModule.cac,
  definition: 'A class for describing the terms of a trade agreement.',
  fields: TradingTermsFieldMap,
}
