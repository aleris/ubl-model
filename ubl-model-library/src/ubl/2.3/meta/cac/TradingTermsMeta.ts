import { FieldMeta } from '../FieldMeta'

export enum TradingTermsField {
  UBLExtensions = 'UBLExtensions',
  Information = 'Information',
  Reference = 'Reference',
  ApplicableAddress = 'ApplicableAddress'
}

export const TradingTermsFieldMetaUBLExtensions = new FieldMeta<TradingTermsField>(
  TradingTermsField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TradingTermsFieldMetaInformation = new FieldMeta<TradingTermsField>(
  TradingTermsField.Information,
  'Information',
  'Information',
  'Text',
  'Text describing the terms of a trade agreement.',
  '0..n',
  'cbc',
  undefined,
  'Unless credit terms have been expressly agreed by Dell, payment for the products or services shall be made in full before physical delivery of products or services. Customer shall pay for all shipping and handling charges.'
)

export const TradingTermsFieldMetaReference = new FieldMeta<TradingTermsField>(
  TradingTermsField.Reference,
  'Reference',
  'Reference',
  'Text',
  'A reference quoting the basis of the terms',
  '0..1',
  'cbc',
  undefined,
  'http://www1.ap.dell.com/content/topics/topic.aspx/ap/policy/en/au/sales_terms_au'
)

export const TradingTermsFieldMetaApplicableAddress = new FieldMeta<TradingTermsField>(
  TradingTermsField.ApplicableAddress,
  'ApplicableAddress',
  'Applicable Address',
  'Address',
  'The address at which these trading terms apply.',
  '0..1',
  'cac',
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
