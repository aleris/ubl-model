import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { RequestedTenderTotal } from  '../../model/cac/RequestedTenderTotal'
import { RequestedTenderTotalField, RequestedTenderTotalFieldMeta, RequestedTenderTotalTypeName } from  '../../meta/cac/RequestedTenderTotalMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { TaxCategoryDisplay } from './TaxCategoryDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<RequestedTenderTotal, void>
  requestedTenderTotal: RequestedTenderTotal[] | undefined
  renderContext: RenderContext
}

export const RequestedTenderTotalSubElementsMap: SubElementsTemplatesMap<RequestedTenderTotalField, RequestedTenderTotal, void> = new Map([
    [
      RequestedTenderTotalField.UBLExtensions,
      { meta: RequestedTenderTotalFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={RequestedTenderTotalField.UBLExtensions}
          meta={RequestedTenderTotalFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      RequestedTenderTotalField.EstimatedOverallContractAmount,
      { meta: RequestedTenderTotalFieldMeta.EstimatedOverallContractAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={RequestedTenderTotalField.EstimatedOverallContractAmount}
          meta={RequestedTenderTotalFieldMeta.EstimatedOverallContractAmount}
          fieldConfig={fieldConfig}
          amount={value?.EstimatedOverallContractAmount}
          renderContext={renderContext}
        />}
    ],

    [
      RequestedTenderTotalField.EstimatedOverallFrameworkContractsAmount,
      { meta: RequestedTenderTotalFieldMeta.EstimatedOverallFrameworkContractsAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={RequestedTenderTotalField.EstimatedOverallFrameworkContractsAmount}
          meta={RequestedTenderTotalFieldMeta.EstimatedOverallFrameworkContractsAmount}
          fieldConfig={fieldConfig}
          amount={value?.EstimatedOverallFrameworkContractsAmount}
          renderContext={renderContext}
        />}
    ],

    [
      RequestedTenderTotalField.TotalAmount,
      { meta: RequestedTenderTotalFieldMeta.TotalAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={RequestedTenderTotalField.TotalAmount}
          meta={RequestedTenderTotalFieldMeta.TotalAmount}
          fieldConfig={fieldConfig}
          amount={value?.TotalAmount}
          renderContext={renderContext}
        />}
    ],

    [
      RequestedTenderTotalField.TaxIncludedIndicator,
      { meta: RequestedTenderTotalFieldMeta.TaxIncludedIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={RequestedTenderTotalField.TaxIncludedIndicator}
          meta={RequestedTenderTotalFieldMeta.TaxIncludedIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.TaxIncludedIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      RequestedTenderTotalField.MinimumAmount,
      { meta: RequestedTenderTotalFieldMeta.MinimumAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={RequestedTenderTotalField.MinimumAmount}
          meta={RequestedTenderTotalFieldMeta.MinimumAmount}
          fieldConfig={fieldConfig}
          amount={value?.MinimumAmount}
          renderContext={renderContext}
        />}
    ],

    [
      RequestedTenderTotalField.MaximumAmount,
      { meta: RequestedTenderTotalFieldMeta.MaximumAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={RequestedTenderTotalField.MaximumAmount}
          meta={RequestedTenderTotalFieldMeta.MaximumAmount}
          fieldConfig={fieldConfig}
          amount={value?.MaximumAmount}
          renderContext={renderContext}
        />}
    ],

    [
      RequestedTenderTotalField.MonetaryScope,
      { meta: RequestedTenderTotalFieldMeta.MonetaryScope,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={RequestedTenderTotalField.MonetaryScope}
          meta={RequestedTenderTotalFieldMeta.MonetaryScope}
          fieldConfig={fieldConfig}
          text={value?.MonetaryScope}
          renderContext={renderContext}
        />}
    ],

    [
      RequestedTenderTotalField.AverageSubsequentContractAmount,
      { meta: RequestedTenderTotalFieldMeta.AverageSubsequentContractAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={RequestedTenderTotalField.AverageSubsequentContractAmount}
          meta={RequestedTenderTotalFieldMeta.AverageSubsequentContractAmount}
          fieldConfig={fieldConfig}
          amount={value?.AverageSubsequentContractAmount}
          renderContext={renderContext}
        />}
    ],

    [
      RequestedTenderTotalField.ApplicableTaxCategory,
      { meta: RequestedTenderTotalFieldMeta.ApplicableTaxCategory,
        template: ({value, renderContext, fieldConfig}) => <TaxCategoryDisplay
          key={RequestedTenderTotalField.ApplicableTaxCategory}
          meta={RequestedTenderTotalFieldMeta.ApplicableTaxCategory}
          fieldConfig={fieldConfig}
          taxCategory={value?.ApplicableTaxCategory}
          renderContext={renderContext}
        />}
    ]
]) 

export function RequestedTenderTotalDisplay<TFieldMeta>({ meta, fieldConfig, requestedTenderTotal, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    RequestedTenderTotalTypeName,
    meta,
    fieldConfig,
    requestedTenderTotal,
    renderContext,
    RequestedTenderTotalSubElementsMap,
  )
}
