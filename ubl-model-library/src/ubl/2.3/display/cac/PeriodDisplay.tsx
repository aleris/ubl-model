import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Period } from  '../../model/cac/Period'
import { PeriodField, PeriodFieldMeta, PeriodTypeName } from  '../../meta/cac/PeriodMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Period, void>
  period: Period[] | undefined
  renderContext: RenderContext
}

export const PeriodSubElementsMap: SubElementsTemplatesMap<PeriodField, Period, void> = new Map([
    [
      PeriodField.UBLExtensions,
      { meta: PeriodFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PeriodField.UBLExtensions}
          meta={PeriodFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PeriodField.StartDate,
      { meta: PeriodFieldMeta.StartDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PeriodField.StartDate}
          meta={PeriodFieldMeta.StartDate}
          fieldConfig={fieldConfig}
          date={value?.StartDate}
          renderContext={renderContext}
        />}
    ],

    [
      PeriodField.StartTime,
      { meta: PeriodFieldMeta.StartTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={PeriodField.StartTime}
          meta={PeriodFieldMeta.StartTime}
          fieldConfig={fieldConfig}
          time={value?.StartTime}
          renderContext={renderContext}
        />}
    ],

    [
      PeriodField.EndDate,
      { meta: PeriodFieldMeta.EndDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PeriodField.EndDate}
          meta={PeriodFieldMeta.EndDate}
          fieldConfig={fieldConfig}
          date={value?.EndDate}
          renderContext={renderContext}
        />}
    ],

    [
      PeriodField.EndTime,
      { meta: PeriodFieldMeta.EndTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={PeriodField.EndTime}
          meta={PeriodFieldMeta.EndTime}
          fieldConfig={fieldConfig}
          time={value?.EndTime}
          renderContext={renderContext}
        />}
    ],

    [
      PeriodField.DurationMeasure,
      { meta: PeriodFieldMeta.DurationMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={PeriodField.DurationMeasure}
          meta={PeriodFieldMeta.DurationMeasure}
          fieldConfig={fieldConfig}
          measure={value?.DurationMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      PeriodField.DescriptionCode,
      { meta: PeriodFieldMeta.DescriptionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PeriodField.DescriptionCode}
          meta={PeriodFieldMeta.DescriptionCode}
          fieldConfig={fieldConfig}
          code={value?.DescriptionCode}
          renderContext={renderContext}
        />}
    ],

    [
      PeriodField.Description,
      { meta: PeriodFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PeriodField.Description}
          meta={PeriodFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ]
]) 

export function PeriodDisplay<TFieldMeta>({ meta, fieldConfig, period, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PeriodTypeName,
    meta,
    fieldConfig,
    period,
    renderContext,
    PeriodSubElementsMap,
  )
}
