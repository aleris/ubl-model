import { FieldMeta } from '../../FieldMeta'

export enum RequestedTenderTotalField {
  EstimatedOverallContractAmount = 'EstimatedOverallContractAmount',
  TotalAmount = 'TotalAmount',
  TaxIncludedIndicator = 'TaxIncludedIndicator',
  MinimumAmount = 'MinimumAmount',
  MaximumAmount = 'MaximumAmount',
  MonetaryScope = 'MonetaryScope',
  AverageSubsequentContractAmount = 'AverageSubsequentContractAmount',
  ApplicableTaxCategory = 'ApplicableTaxCategory'
}

export const RequestedTenderTotalFieldMetaEstimatedOverallContractAmount = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.EstimatedOverallContractAmount,
  'EstimatedOverallContractAmount',
  'Overall Contract',
  'Amount',
  'The estimated overall monetary amount of a contract.',
  '0..1',
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaTotalAmount = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.TotalAmount,
  'TotalAmount',
  'Amount',
  'Amount',
  'The monetary amount of the total budget including net amount, taxes, and material and instalment costs.',
  '0..1',
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaTaxIncludedIndicator = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.TaxIncludedIndicator,
  'TaxIncludedIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether the amounts are taxes included (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaMinimumAmount = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.MinimumAmount,
  'MinimumAmount',
  'Amount',
  'Amount',
  'The minimum monetary amount of the budget.',
  '0..1',
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaMaximumAmount = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.MaximumAmount,
  'MaximumAmount',
  'Amount',
  'Amount',
  'The maximum monetary amount of the budget.',
  '0..1',
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
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaAverageSubsequentContractAmount = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.AverageSubsequentContractAmount,
  'AverageSubsequentContractAmount',
  'Subsequent Contract',
  'Amount',
  'The average monetary amount for the subsequent contracts following this budget amount.',
  '0..1',
  undefined,
  undefined
)

export const RequestedTenderTotalFieldMetaApplicableTaxCategory = new FieldMeta<RequestedTenderTotalField>(
  RequestedTenderTotalField.ApplicableTaxCategory,
  'ApplicableTaxCategory',
  'Tax Category',
  'TaxCategory',
  'Describes the categories of taxes that apply to the budget amount.',
  '0..n',
  undefined,
  undefined
)

export class RequestedTenderTotalFieldMeta {
  public static readonly EstimatedOverallContractAmount = RequestedTenderTotalFieldMetaEstimatedOverallContractAmount
  public static readonly TotalAmount = RequestedTenderTotalFieldMetaTotalAmount
  public static readonly TaxIncludedIndicator = RequestedTenderTotalFieldMetaTaxIncludedIndicator
  public static readonly MinimumAmount = RequestedTenderTotalFieldMetaMinimumAmount
  public static readonly MaximumAmount = RequestedTenderTotalFieldMetaMaximumAmount
  public static readonly MonetaryScope = RequestedTenderTotalFieldMetaMonetaryScope
  public static readonly AverageSubsequentContractAmount = RequestedTenderTotalFieldMetaAverageSubsequentContractAmount
  public static readonly ApplicableTaxCategory = RequestedTenderTotalFieldMetaApplicableTaxCategory
}

export const RequestedTenderTotalFieldMap = new Map([
  [RequestedTenderTotalField.EstimatedOverallContractAmount, RequestedTenderTotalFieldMetaEstimatedOverallContractAmount],
  [RequestedTenderTotalField.TotalAmount, RequestedTenderTotalFieldMetaTotalAmount],
  [RequestedTenderTotalField.TaxIncludedIndicator, RequestedTenderTotalFieldMetaTaxIncludedIndicator],
  [RequestedTenderTotalField.MinimumAmount, RequestedTenderTotalFieldMetaMinimumAmount],
  [RequestedTenderTotalField.MaximumAmount, RequestedTenderTotalFieldMetaMaximumAmount],
  [RequestedTenderTotalField.MonetaryScope, RequestedTenderTotalFieldMetaMonetaryScope],
  [RequestedTenderTotalField.AverageSubsequentContractAmount, RequestedTenderTotalFieldMetaAverageSubsequentContractAmount],
  [RequestedTenderTotalField.ApplicableTaxCategory, RequestedTenderTotalFieldMetaApplicableTaxCategory]
])
