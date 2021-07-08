import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ForecastLine } from  '../../model/cac/ForecastLine'
import { ForecastLineField, ForecastLineFieldMeta, ForecastLineTypeName } from  '../../meta/cac/ForecastLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { SalesItemDisplay } from './SalesItemDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ForecastLine, void>
  forecastLine: ForecastLine[] | undefined
  renderContext: RenderContext
}

export const ForecastLineSubElementsMap: SubElementsTemplatesMap<ForecastLineField, ForecastLine, void> = new Map([
    [
      ForecastLineField.UBLExtensions,
      { meta: ForecastLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ForecastLineField.UBLExtensions}
          meta={ForecastLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastLineField.ID,
      { meta: ForecastLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForecastLineField.ID}
          meta={ForecastLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastLineField.Note,
      { meta: ForecastLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ForecastLineField.Note}
          meta={ForecastLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastLineField.FrozenDocumentIndicator,
      { meta: ForecastLineFieldMeta.FrozenDocumentIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ForecastLineField.FrozenDocumentIndicator}
          meta={ForecastLineFieldMeta.FrozenDocumentIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.FrozenDocumentIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastLineField.ForecastTypeCode,
      { meta: ForecastLineFieldMeta.ForecastTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ForecastLineField.ForecastTypeCode}
          meta={ForecastLineFieldMeta.ForecastTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ForecastTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastLineField.ForecastPeriod,
      { meta: ForecastLineFieldMeta.ForecastPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ForecastLineField.ForecastPeriod}
          meta={ForecastLineFieldMeta.ForecastPeriod}
          fieldConfig={fieldConfig}
          period={value?.ForecastPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastLineField.SalesItem,
      { meta: ForecastLineFieldMeta.SalesItem,
        template: ({value, renderContext, fieldConfig}) => <SalesItemDisplay
          key={ForecastLineField.SalesItem}
          meta={ForecastLineFieldMeta.SalesItem}
          fieldConfig={fieldConfig}
          salesItem={value?.SalesItem}
          renderContext={renderContext}
        />}
    ]
]) 

export function ForecastLineDisplay<TFieldMeta>({ meta, fieldConfig, forecastLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ForecastLineTypeName,
    meta,
    fieldConfig,
    forecastLine,
    renderContext,
    ForecastLineSubElementsMap,
  )
}
