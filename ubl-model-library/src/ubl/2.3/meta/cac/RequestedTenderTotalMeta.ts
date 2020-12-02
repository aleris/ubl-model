import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaEstimatedOverallContractAmount = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.EstimatedOverallContractAmount,
  'EstimatedOverallContractAmount',
  'Estimated Overall Contract',
  'Amount',
  'The estimated overall monetary amount of a contract.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaEstimatedOverallFrameworkContractsAmount = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.EstimatedOverallFrameworkContractsAmount,
  'EstimatedOverallFrameworkContractsAmount',
  'Estimated Overall Framework Contracts',
  'Amount',
  'The estimated overall monetary amount of subsequent framework contracts.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaTotalAmount = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.TotalAmount,
  'TotalAmount',
  'Total Amount',
  'Amount',
  'The monetary amount of the total budget including net amount, taxes, and material and instalment costs.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaTaxIncludedIndicator = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.TaxIncludedIndicator,
  'TaxIncludedIndicator',
  'Tax Included Indicator',
  'Indicator',
  'Indicates whether the amounts are taxes included (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaMinimumAmount = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.MinimumAmount,
  'MinimumAmount',
  'Minimum Amount',
  'Amount',
  'The minimum monetary amount of the budget.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaMaximumAmount = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.MaximumAmount,
  'MaximumAmount',
  'Maximum Amount',
  'Amount',
  'The maximum monetary amount of the budget.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaMonetaryScope = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.MonetaryScope,
  'MonetaryScope',
  'Monetary Scope',
  'Text',
  'A description of the monetary scope of the budget.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaAverageSubsequentContractAmount = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.AverageSubsequentContractAmount,
  'AverageSubsequentContractAmount',
  'Average Subsequent Contract',
  'Amount',
  'The average monetary amount for the subsequent contracts following this budget amount.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaApplicableTaxCategory = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.ApplicableTaxCategory,
  'ApplicableTaxCategory',
  'Applicable Tax Category',
  'TaxCategory',
  'Describes the categories of taxes that apply to the budget amount.',
  '0..n',
  'cac',
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
