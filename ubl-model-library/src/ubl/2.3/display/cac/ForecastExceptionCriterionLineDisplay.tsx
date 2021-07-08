import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ForecastExceptionCriterionLine } from  '../../model/cac/ForecastExceptionCriterionLine'
import { ForecastExceptionCriterionLineField, ForecastExceptionCriterionLineFieldMeta, ForecastExceptionCriterionLineTypeName } from  '../../meta/cac/ForecastExceptionCriterionLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ForecastExceptionCriterionLine, void>
  forecastExceptionCriterionLine: ForecastExceptionCriterionLine[] | undefined
  renderContext: RenderContext
}

export const ForecastExceptionCriterionLineSubElementsMap: SubElementsTemplatesMap<ForecastExceptionCriterionLineField, ForecastExceptionCriterionLine, void> = new Map([
    [
      ForecastExceptionCriterionLineField.UBLExtensions,
      { meta: ForecastExceptionCriterionLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ForecastExceptionCriterionLineField.UBLExtensions}
          meta={ForecastExceptionCriterionLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastExceptionCriterionLineField.ForecastPurposeCode,
      { meta: ForecastExceptionCriterionLineFieldMeta.ForecastPurposeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ForecastExceptionCriterionLineField.ForecastPurposeCode}
          meta={ForecastExceptionCriterionLineFieldMeta.ForecastPurposeCode}
          fieldConfig={fieldConfig}
          code={value?.ForecastPurposeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastExceptionCriterionLineField.ForecastTypeCode,
      { meta: ForecastExceptionCriterionLineFieldMeta.ForecastTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ForecastExceptionCriterionLineField.ForecastTypeCode}
          meta={ForecastExceptionCriterionLineFieldMeta.ForecastTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ForecastTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastExceptionCriterionLineField.ComparisonDataSourceCode,
      { meta: ForecastExceptionCriterionLineFieldMeta.ComparisonDataSourceCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ForecastExceptionCriterionLineField.ComparisonDataSourceCode}
          meta={ForecastExceptionCriterionLineFieldMeta.ComparisonDataSourceCode}
          fieldConfig={fieldConfig}
          code={value?.ComparisonDataSourceCode}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastExceptionCriterionLineField.DataSourceCode,
      { meta: ForecastExceptionCriterionLineFieldMeta.DataSourceCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ForecastExceptionCriterionLineField.DataSourceCode}
          meta={ForecastExceptionCriterionLineFieldMeta.DataSourceCode}
          fieldConfig={fieldConfig}
          code={value?.DataSourceCode}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastExceptionCriterionLineField.TimeDeltaDaysQuantity,
      { meta: ForecastExceptionCriterionLineFieldMeta.TimeDeltaDaysQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ForecastExceptionCriterionLineField.TimeDeltaDaysQuantity}
          meta={ForecastExceptionCriterionLineFieldMeta.TimeDeltaDaysQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.TimeDeltaDaysQuantity}
          renderContext={renderContext}
        />}
    ]
]) 

export function ForecastExceptionCriterionLineDisplay<TFieldMeta>({ meta, fieldConfig, forecastExceptionCriterionLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ForecastExceptionCriterionLineTypeName,
    meta,
    fieldConfig,
    forecastExceptionCriterionLine,
    renderContext,
    ForecastExceptionCriterionLineSubElementsMap,
  )
}
