import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExceptionCriteriaLine } from  '../../model/cac/ExceptionCriteriaLine'
import { ExceptionCriteriaLineField, ExceptionCriteriaLineFieldMeta, ExceptionCriteriaLineTypeName } from  '../../meta/cac/ExceptionCriteriaLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ForecastExceptionCriterionLineDisplay } from './ForecastExceptionCriterionLineDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ItemDisplay } from './ItemDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ExceptionCriteriaLine, void>
  exceptionCriteriaLine: ExceptionCriteriaLine[] | undefined
  renderContext: RenderContext
}

export const ExceptionCriteriaLineSubElementsMap: SubElementsTemplatesMap<ExceptionCriteriaLineField, ExceptionCriteriaLine, void> = new Map([
    [
      ExceptionCriteriaLineField.UBLExtensions,
      { meta: ExceptionCriteriaLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ExceptionCriteriaLineField.UBLExtensions}
          meta={ExceptionCriteriaLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaLineField.ID,
      { meta: ExceptionCriteriaLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExceptionCriteriaLineField.ID}
          meta={ExceptionCriteriaLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaLineField.Note,
      { meta: ExceptionCriteriaLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ExceptionCriteriaLineField.Note}
          meta={ExceptionCriteriaLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaLineField.ThresholdValueComparisonCode,
      { meta: ExceptionCriteriaLineFieldMeta.ThresholdValueComparisonCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExceptionCriteriaLineField.ThresholdValueComparisonCode}
          meta={ExceptionCriteriaLineFieldMeta.ThresholdValueComparisonCode}
          fieldConfig={fieldConfig}
          code={value?.ThresholdValueComparisonCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaLineField.ThresholdQuantity,
      { meta: ExceptionCriteriaLineFieldMeta.ThresholdQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ExceptionCriteriaLineField.ThresholdQuantity}
          meta={ExceptionCriteriaLineFieldMeta.ThresholdQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ThresholdQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaLineField.ExceptionStatusCode,
      { meta: ExceptionCriteriaLineFieldMeta.ExceptionStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExceptionCriteriaLineField.ExceptionStatusCode}
          meta={ExceptionCriteriaLineFieldMeta.ExceptionStatusCode}
          fieldConfig={fieldConfig}
          code={value?.ExceptionStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaLineField.CollaborationPriorityCode,
      { meta: ExceptionCriteriaLineFieldMeta.CollaborationPriorityCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExceptionCriteriaLineField.CollaborationPriorityCode}
          meta={ExceptionCriteriaLineFieldMeta.CollaborationPriorityCode}
          fieldConfig={fieldConfig}
          code={value?.CollaborationPriorityCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaLineField.ExceptionResolutionCode,
      { meta: ExceptionCriteriaLineFieldMeta.ExceptionResolutionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExceptionCriteriaLineField.ExceptionResolutionCode}
          meta={ExceptionCriteriaLineFieldMeta.ExceptionResolutionCode}
          fieldConfig={fieldConfig}
          code={value?.ExceptionResolutionCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaLineField.SupplyChainActivityTypeCode,
      { meta: ExceptionCriteriaLineFieldMeta.SupplyChainActivityTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExceptionCriteriaLineField.SupplyChainActivityTypeCode}
          meta={ExceptionCriteriaLineFieldMeta.SupplyChainActivityTypeCode}
          fieldConfig={fieldConfig}
          code={value?.SupplyChainActivityTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaLineField.PerformanceMetricTypeCode,
      { meta: ExceptionCriteriaLineFieldMeta.PerformanceMetricTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExceptionCriteriaLineField.PerformanceMetricTypeCode}
          meta={ExceptionCriteriaLineFieldMeta.PerformanceMetricTypeCode}
          fieldConfig={fieldConfig}
          code={value?.PerformanceMetricTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaLineField.EffectivePeriod,
      { meta: ExceptionCriteriaLineFieldMeta.EffectivePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ExceptionCriteriaLineField.EffectivePeriod}
          meta={ExceptionCriteriaLineFieldMeta.EffectivePeriod}
          fieldConfig={fieldConfig}
          period={value?.EffectivePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaLineField.SupplyItem,
      { meta: ExceptionCriteriaLineFieldMeta.SupplyItem,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={ExceptionCriteriaLineField.SupplyItem}
          meta={ExceptionCriteriaLineFieldMeta.SupplyItem}
          fieldConfig={fieldConfig}
          item={value?.SupplyItem}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaLineField.ForecastExceptionCriterionLine,
      { meta: ExceptionCriteriaLineFieldMeta.ForecastExceptionCriterionLine,
        template: ({value, renderContext, fieldConfig}) => <ForecastExceptionCriterionLineDisplay
          key={ExceptionCriteriaLineField.ForecastExceptionCriterionLine}
          meta={ExceptionCriteriaLineFieldMeta.ForecastExceptionCriterionLine}
          fieldConfig={fieldConfig}
          forecastExceptionCriterionLine={value?.ForecastExceptionCriterionLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function ExceptionCriteriaLineDisplay<TFieldMeta>({ meta, fieldConfig, exceptionCriteriaLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ExceptionCriteriaLineTypeName,
    meta,
    fieldConfig,
    exceptionCriteriaLine,
    renderContext,
    ExceptionCriteriaLineSubElementsMap,
  )
}
