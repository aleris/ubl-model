import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ForecastException } from  '../../model/cac/ForecastException'
import { ForecastExceptionField, ForecastExceptionFieldMeta, ForecastExceptionTypeName } from  '../../meta/cac/ForecastExceptionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ForecastException, void>
  forecastException: ForecastException[] | undefined
  renderContext: RenderContext
}

export const ForecastExceptionSubElementsMap: SubElementsTemplatesMap<ForecastExceptionField, ForecastException, void> = new Map([
    [
      ForecastExceptionField.UBLExtensions,
      { meta: ForecastExceptionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ForecastExceptionField.UBLExtensions}
          meta={ForecastExceptionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastExceptionField.ForecastPurposeCode,
      { meta: ForecastExceptionFieldMeta.ForecastPurposeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ForecastExceptionField.ForecastPurposeCode}
          meta={ForecastExceptionFieldMeta.ForecastPurposeCode}
          fieldConfig={fieldConfig}
          code={value?.ForecastPurposeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastExceptionField.ForecastTypeCode,
      { meta: ForecastExceptionFieldMeta.ForecastTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ForecastExceptionField.ForecastTypeCode}
          meta={ForecastExceptionFieldMeta.ForecastTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ForecastTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastExceptionField.IssueDate,
      { meta: ForecastExceptionFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ForecastExceptionField.IssueDate}
          meta={ForecastExceptionFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastExceptionField.IssueTime,
      { meta: ForecastExceptionFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ForecastExceptionField.IssueTime}
          meta={ForecastExceptionFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastExceptionField.DataSourceCode,
      { meta: ForecastExceptionFieldMeta.DataSourceCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ForecastExceptionField.DataSourceCode}
          meta={ForecastExceptionFieldMeta.DataSourceCode}
          fieldConfig={fieldConfig}
          code={value?.DataSourceCode}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastExceptionField.ComparisonDataCode,
      { meta: ForecastExceptionFieldMeta.ComparisonDataCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ForecastExceptionField.ComparisonDataCode}
          meta={ForecastExceptionFieldMeta.ComparisonDataCode}
          fieldConfig={fieldConfig}
          code={value?.ComparisonDataCode}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastExceptionField.ComparisonForecastIssueTime,
      { meta: ForecastExceptionFieldMeta.ComparisonForecastIssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ForecastExceptionField.ComparisonForecastIssueTime}
          meta={ForecastExceptionFieldMeta.ComparisonForecastIssueTime}
          fieldConfig={fieldConfig}
          time={value?.ComparisonForecastIssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastExceptionField.ComparisonForecastIssueDate,
      { meta: ForecastExceptionFieldMeta.ComparisonForecastIssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ForecastExceptionField.ComparisonForecastIssueDate}
          meta={ForecastExceptionFieldMeta.ComparisonForecastIssueDate}
          fieldConfig={fieldConfig}
          date={value?.ComparisonForecastIssueDate}
          renderContext={renderContext}
        />}
    ]
]) 

export function ForecastExceptionDisplay<TFieldMeta>({ meta, fieldConfig, forecastException, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ForecastExceptionTypeName,
    meta,
    fieldConfig,
    forecastException,
    renderContext,
    ForecastExceptionSubElementsMap,
  )
}
