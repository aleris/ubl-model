import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemInformationRequestLine } from  '../../model/cac/ItemInformationRequestLine'
import { ItemInformationRequestLineField, ItemInformationRequestLineFieldMeta, ItemInformationRequestLineTypeName } from  '../../meta/cac/ItemInformationRequestLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { SalesItemDisplay } from './SalesItemDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ItemInformationRequestLine, void>
  itemInformationRequestLine: ItemInformationRequestLine[] | undefined
  renderContext: RenderContext
}

export const ItemInformationRequestLineSubElementsMap: SubElementsTemplatesMap<ItemInformationRequestLineField, ItemInformationRequestLine, void> = new Map([
    [
      ItemInformationRequestLineField.UBLExtensions,
      { meta: ItemInformationRequestLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ItemInformationRequestLineField.UBLExtensions}
          meta={ItemInformationRequestLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestLineField.TimeFrequencyCode,
      { meta: ItemInformationRequestLineFieldMeta.TimeFrequencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ItemInformationRequestLineField.TimeFrequencyCode}
          meta={ItemInformationRequestLineFieldMeta.TimeFrequencyCode}
          fieldConfig={fieldConfig}
          code={value?.TimeFrequencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestLineField.SupplyChainActivityTypeCode,
      { meta: ItemInformationRequestLineFieldMeta.SupplyChainActivityTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ItemInformationRequestLineField.SupplyChainActivityTypeCode}
          meta={ItemInformationRequestLineFieldMeta.SupplyChainActivityTypeCode}
          fieldConfig={fieldConfig}
          code={value?.SupplyChainActivityTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestLineField.ForecastTypeCode,
      { meta: ItemInformationRequestLineFieldMeta.ForecastTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ItemInformationRequestLineField.ForecastTypeCode}
          meta={ItemInformationRequestLineFieldMeta.ForecastTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ForecastTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestLineField.PerformanceMetricTypeCode,
      { meta: ItemInformationRequestLineFieldMeta.PerformanceMetricTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ItemInformationRequestLineField.PerformanceMetricTypeCode}
          meta={ItemInformationRequestLineFieldMeta.PerformanceMetricTypeCode}
          fieldConfig={fieldConfig}
          code={value?.PerformanceMetricTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestLineField.Period,
      { meta: ItemInformationRequestLineFieldMeta.Period,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ItemInformationRequestLineField.Period}
          meta={ItemInformationRequestLineFieldMeta.Period}
          fieldConfig={fieldConfig}
          period={value?.Period}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestLineField.SalesItem,
      { meta: ItemInformationRequestLineFieldMeta.SalesItem,
        template: ({value, renderContext, fieldConfig}) => <SalesItemDisplay
          key={ItemInformationRequestLineField.SalesItem}
          meta={ItemInformationRequestLineFieldMeta.SalesItem}
          fieldConfig={fieldConfig}
          salesItem={value?.SalesItem}
          renderContext={renderContext}
        />}
    ]
]) 

export function ItemInformationRequestLineDisplay<TFieldMeta>({ meta, fieldConfig, itemInformationRequestLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ItemInformationRequestLineTypeName,
    meta,
    fieldConfig,
    itemInformationRequestLine,
    renderContext,
    ItemInformationRequestLineSubElementsMap,
  )
}
