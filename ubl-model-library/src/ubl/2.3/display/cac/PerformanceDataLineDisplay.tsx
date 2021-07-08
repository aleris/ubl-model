import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PerformanceDataLine } from  '../../model/cac/PerformanceDataLine'
import { PerformanceDataLineField, PerformanceDataLineFieldMeta, PerformanceDataLineTypeName } from  '../../meta/cac/PerformanceDataLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ItemDisplay } from './ItemDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PerformanceDataLine, void>
  performanceDataLine: PerformanceDataLine[] | undefined
  renderContext: RenderContext
}

export const PerformanceDataLineSubElementsMap: SubElementsTemplatesMap<PerformanceDataLineField, PerformanceDataLine, void> = new Map([
    [
      PerformanceDataLineField.UBLExtensions,
      { meta: PerformanceDataLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PerformanceDataLineField.UBLExtensions}
          meta={PerformanceDataLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PerformanceDataLineField.ID,
      { meta: PerformanceDataLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PerformanceDataLineField.ID}
          meta={PerformanceDataLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      PerformanceDataLineField.Note,
      { meta: PerformanceDataLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PerformanceDataLineField.Note}
          meta={PerformanceDataLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      PerformanceDataLineField.PerformanceValueQuantity,
      { meta: PerformanceDataLineFieldMeta.PerformanceValueQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={PerformanceDataLineField.PerformanceValueQuantity}
          meta={PerformanceDataLineFieldMeta.PerformanceValueQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.PerformanceValueQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      PerformanceDataLineField.PerformanceMetricTypeCode,
      { meta: PerformanceDataLineFieldMeta.PerformanceMetricTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PerformanceDataLineField.PerformanceMetricTypeCode}
          meta={PerformanceDataLineFieldMeta.PerformanceMetricTypeCode}
          fieldConfig={fieldConfig}
          code={value?.PerformanceMetricTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      PerformanceDataLineField.Period,
      { meta: PerformanceDataLineFieldMeta.Period,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={PerformanceDataLineField.Period}
          meta={PerformanceDataLineFieldMeta.Period}
          fieldConfig={fieldConfig}
          period={value?.Period}
          renderContext={renderContext}
        />}
    ],

    [
      PerformanceDataLineField.Item,
      { meta: PerformanceDataLineFieldMeta.Item,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={PerformanceDataLineField.Item}
          meta={PerformanceDataLineFieldMeta.Item}
          fieldConfig={fieldConfig}
          item={value?.Item}
          renderContext={renderContext}
        />}
    ]
]) 

export function PerformanceDataLineDisplay<TFieldMeta>({ meta, fieldConfig, performanceDataLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PerformanceDataLineTypeName,
    meta,
    fieldConfig,
    performanceDataLine,
    renderContext,
    PerformanceDataLineSubElementsMap,
  )
}
