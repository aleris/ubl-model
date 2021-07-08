import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ForecastRevisionLine } from  '../../model/cac/ForecastRevisionLine'
import { ForecastRevisionLineField, ForecastRevisionLineFieldMeta, ForecastRevisionLineTypeName } from  '../../meta/cac/ForecastRevisionLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { SalesItemDisplay } from './SalesItemDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ForecastRevisionLine, void>
  forecastRevisionLine: ForecastRevisionLine[] | undefined
  renderContext: RenderContext
}

export const ForecastRevisionLineSubElementsMap: SubElementsTemplatesMap<ForecastRevisionLineField, ForecastRevisionLine, void> = new Map([
    [
      ForecastRevisionLineField.UBLExtensions,
      { meta: ForecastRevisionLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ForecastRevisionLineField.UBLExtensions}
          meta={ForecastRevisionLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionLineField.ID,
      { meta: ForecastRevisionLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForecastRevisionLineField.ID}
          meta={ForecastRevisionLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionLineField.Note,
      { meta: ForecastRevisionLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ForecastRevisionLineField.Note}
          meta={ForecastRevisionLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionLineField.Description,
      { meta: ForecastRevisionLineFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ForecastRevisionLineField.Description}
          meta={ForecastRevisionLineFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionLineField.RevisedForecastLineID,
      { meta: ForecastRevisionLineFieldMeta.RevisedForecastLineID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForecastRevisionLineField.RevisedForecastLineID}
          meta={ForecastRevisionLineFieldMeta.RevisedForecastLineID}
          fieldConfig={fieldConfig}
          identifier={value?.RevisedForecastLineID}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionLineField.SourceForecastIssueDate,
      { meta: ForecastRevisionLineFieldMeta.SourceForecastIssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ForecastRevisionLineField.SourceForecastIssueDate}
          meta={ForecastRevisionLineFieldMeta.SourceForecastIssueDate}
          fieldConfig={fieldConfig}
          date={value?.SourceForecastIssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionLineField.SourceForecastIssueTime,
      { meta: ForecastRevisionLineFieldMeta.SourceForecastIssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ForecastRevisionLineField.SourceForecastIssueTime}
          meta={ForecastRevisionLineFieldMeta.SourceForecastIssueTime}
          fieldConfig={fieldConfig}
          time={value?.SourceForecastIssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionLineField.AdjustmentReasonCode,
      { meta: ForecastRevisionLineFieldMeta.AdjustmentReasonCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ForecastRevisionLineField.AdjustmentReasonCode}
          meta={ForecastRevisionLineFieldMeta.AdjustmentReasonCode}
          fieldConfig={fieldConfig}
          code={value?.AdjustmentReasonCode}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionLineField.ForecastPeriod,
      { meta: ForecastRevisionLineFieldMeta.ForecastPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ForecastRevisionLineField.ForecastPeriod}
          meta={ForecastRevisionLineFieldMeta.ForecastPeriod}
          fieldConfig={fieldConfig}
          period={value?.ForecastPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionLineField.SalesItem,
      { meta: ForecastRevisionLineFieldMeta.SalesItem,
        template: ({value, renderContext, fieldConfig}) => <SalesItemDisplay
          key={ForecastRevisionLineField.SalesItem}
          meta={ForecastRevisionLineFieldMeta.SalesItem}
          fieldConfig={fieldConfig}
          salesItem={value?.SalesItem}
          renderContext={renderContext}
        />}
    ]
]) 

export function ForecastRevisionLineDisplay<TFieldMeta>({ meta, fieldConfig, forecastRevisionLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ForecastRevisionLineTypeName,
    meta,
    fieldConfig,
    forecastRevisionLine,
    renderContext,
    ForecastRevisionLineSubElementsMap,
  )
}
