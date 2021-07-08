import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { TaxCategoryType } from './TaxCategoryMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum RequestedTenderTotalField {
  UBLExtensions = 'UBLExtensions',
  EstimatedOverallContractAmount = 'EstimatedOverallContractAmount',
  EstimatedOverallFrameworkContractsAmount = 'EstimatedOverallFrameworkContractsAmount',
  TotalAmount = 'TotalAmount',
  TaxIncludedIndicator = 'TaxIncludedIndicator',
  MinimumAmount = 'MinimumAmount',
  MaximumAmount = 'MaximumAmount',
  MonetaryScope = 'MonetaryScope',
  AverageSubsequentContractAmount = 'AverageSubsequentContractAmount',
  ApplicableTaxCategory = 'ApplicableTaxCategory'
}

export const RequestedTenderTotalFieldMetaUBLExtensions = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaEstimatedOverallContractAmount = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.EstimatedOverallContractAmount,
  'EstimatedOverallContractAmount',
  'Estimated Overall Contract',
  AmountType.name,
  'The estimated overall monetary amount of a contract.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaEstimatedOverallFrameworkContractsAmount = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.EstimatedOverallFrameworkContractsAmount,
  'EstimatedOverallFrameworkContractsAmount',
  'Estimated Overall Framework Contracts',
  AmountType.name,
  'The estimated overall monetary amount of subsequent framework contracts.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaTotalAmount = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.TotalAmount,
  'TotalAmount',
  'Total Amount',
  AmountType.name,
  'The monetary amount of the total budget including net amount, taxes, and material and instalment costs.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaTaxIncludedIndicator = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.TaxIncludedIndicator,
  'TaxIncludedIndicator',
  'Tax Included Indicator',
  IndicatorType.name,
  'Indicates whether the amounts are taxes included (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaMinimumAmount = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.MinimumAmount,
  'MinimumAmount',
  'Minimum Amount',
  AmountType.name,
  'The minimum monetary amount of the budget.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaMaximumAmount = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.MaximumAmount,
  'MaximumAmount',
  'Maximum Amount',
  AmountType.name,
  'The maximum monetary amount of the budget.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaMonetaryScope = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.MonetaryScope,
  'MonetaryScope',
  'Monetary Scope',
  TextType.name,
  'A description of the monetary scope of the budget.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaAverageSubsequentContractAmount = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.AverageSubsequentContractAmount,
  'AverageSubsequentContractAmount',
  'Average Subsequent Contract',
  AmountType.name,
  'The average monetary amount for the subsequent contracts following this budget amount.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaApplicableTaxCategory = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.ApplicableTaxCategory,
  'ApplicableTaxCategory',
  'Applicable Tax Category',
  TaxCategoryType.name,
  'Describes the categories of taxes that apply to the budget amount.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class RequestedTenderTotalFieldMeta {
  public static readonly UBLExtensions = RequestedTenderTotalFieldMetaUBLExtensions
  public static readonly EstimatedOverallContractAmount = RequestedTenderTotalFieldMetaEstimatedOverallContractAmount
  public static readonly EstimatedOverallFrameworkContractsAmount = RequestedTenderTotalFieldMetaEstimatedOverallFrameworkContractsAmount
  public static readonly TotalAmount = RequestedTenderTotalFieldMetaTotalAmount
  public static readonly TaxIncludedIndicator = RequestedTenderTotalFieldMetaTaxIncludedIndicator
  public static readonly MinimumAmount = RequestedTenderTotalFieldMetaMinimumAmount
  public static readonly MaximumAmount = RequestedTenderTotalFieldMetaMaximumAmount
  public static readonly MonetaryScope = RequestedTenderTotalFieldMetaMonetaryScope
  public static readonly AverageSubsequentContractAmount = RequestedTenderTotalFieldMetaAverageSubsequentContractAmount
  public static readonly ApplicableTaxCategory = RequestedTenderTotalFieldMetaApplicableTaxCategory
}

export const RequestedTenderTotalFieldMap = new Map([
  [RequestedTenderTotalField.UBLExtensions, RequestedTenderTotalFieldMetaUBLExtensions],
  [RequestedTenderTotalField.EstimatedOverallContractAmount, RequestedTenderTotalFieldMetaEstimatedOverallContractAmount],
  [RequestedTenderTotalField.EstimatedOverallFrameworkContractsAmount, RequestedTenderTotalFieldMetaEstimatedOverallFrameworkContractsAmount],
  [RequestedTenderTotalField.TotalAmount, RequestedTenderTotalFieldMetaTotalAmount],
  [RequestedTenderTotalField.TaxIncludedIndicator, RequestedTenderTotalFieldMetaTaxIncludedIndicator],
  [RequestedTenderTotalField.MinimumAmount, RequestedTenderTotalFieldMetaMinimumAmount],
  [RequestedTenderTotalField.MaximumAmount, RequestedTenderTotalFieldMetaMaximumAmount],
  [RequestedTenderTotalField.MonetaryScope, RequestedTenderTotalFieldMetaMonetaryScope],
  [RequestedTenderTotalField.AverageSubsequentContractAmount, RequestedTenderTotalFieldMetaAverageSubsequentContractAmount],
  [RequestedTenderTotalField.ApplicableTaxCategory, RequestedTenderTotalFieldMetaApplicableTaxCategory]
])

export const RequestedTenderTotalType: Type<RequestedTenderTotalField> = {
  name: 'RequestedTenderTotal',
  label: 'Requested Tender Total',
  module: TypeModule.cac,
  definition: 'A class defining budgeted monetary amounts.',
  fields: RequestedTenderTotalFieldMap,
}
