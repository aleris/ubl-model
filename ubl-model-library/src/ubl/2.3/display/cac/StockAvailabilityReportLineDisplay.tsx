import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { StockAvailabilityReportLine } from  '../../model/cac/StockAvailabilityReportLine'
import { StockAvailabilityReportLineField, StockAvailabilityReportLineFieldMeta, StockAvailabilityReportLineTypeName } from  '../../meta/cac/StockAvailabilityReportLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ItemDisplay } from './ItemDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<StockAvailabilityReportLine, void>
  stockAvailabilityReportLine: StockAvailabilityReportLine[] | undefined
  renderContext: RenderContext
}

export const StockAvailabilityReportLineSubElementsMap: SubElementsTemplatesMap<StockAvailabilityReportLineField, StockAvailabilityReportLine, void> = new Map([
    [
      StockAvailabilityReportLineField.UBLExtensions,
      { meta: StockAvailabilityReportLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={StockAvailabilityReportLineField.UBLExtensions}
          meta={StockAvailabilityReportLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportLineField.ID,
      { meta: StockAvailabilityReportLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={StockAvailabilityReportLineField.ID}
          meta={StockAvailabilityReportLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportLineField.Note,
      { meta: StockAvailabilityReportLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={StockAvailabilityReportLineField.Note}
          meta={StockAvailabilityReportLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportLineField.Quantity,
      { meta: StockAvailabilityReportLineFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={StockAvailabilityReportLineField.Quantity}
          meta={StockAvailabilityReportLineFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportLineField.ValueAmount,
      { meta: StockAvailabilityReportLineFieldMeta.ValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={StockAvailabilityReportLineField.ValueAmount}
          meta={StockAvailabilityReportLineFieldMeta.ValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.ValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportLineField.AvailabilityDate,
      { meta: StockAvailabilityReportLineFieldMeta.AvailabilityDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={StockAvailabilityReportLineField.AvailabilityDate}
          meta={StockAvailabilityReportLineFieldMeta.AvailabilityDate}
          fieldConfig={fieldConfig}
          date={value?.AvailabilityDate}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportLineField.AvailabilityStatusCode,
      { meta: StockAvailabilityReportLineFieldMeta.AvailabilityStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={StockAvailabilityReportLineField.AvailabilityStatusCode}
          meta={StockAvailabilityReportLineFieldMeta.AvailabilityStatusCode}
          fieldConfig={fieldConfig}
          code={value?.AvailabilityStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportLineField.Item,
      { meta: StockAvailabilityReportLineFieldMeta.Item,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={StockAvailabilityReportLineField.Item}
          meta={StockAvailabilityReportLineFieldMeta.Item}
          fieldConfig={fieldConfig}
          item={value?.Item}
          renderContext={renderContext}
        />}
    ]
]) 

export function StockAvailabilityReportLineDisplay<TFieldMeta>({ meta, fieldConfig, stockAvailabilityReportLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    StockAvailabilityReportLineTypeName,
    meta,
    fieldConfig,
    stockAvailabilityReportLine,
    renderContext,
    StockAvailabilityReportLineSubElementsMap,
  )
}
