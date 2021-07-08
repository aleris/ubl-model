import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ConsumptionHistory } from  '../../model/cac/ConsumptionHistory'
import { ConsumptionHistoryField, ConsumptionHistoryFieldMeta, ConsumptionHistoryTypeName } from  '../../meta/cac/ConsumptionHistoryMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ConsumptionHistory, void>
  consumptionHistory: ConsumptionHistory[] | undefined
  renderContext: RenderContext
}

export const ConsumptionHistorySubElementsMap: SubElementsTemplatesMap<ConsumptionHistoryField, ConsumptionHistory, void> = new Map([
    [
      ConsumptionHistoryField.UBLExtensions,
      { meta: ConsumptionHistoryFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ConsumptionHistoryField.UBLExtensions}
          meta={ConsumptionHistoryFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionHistoryField.MeterNumber,
      { meta: ConsumptionHistoryFieldMeta.MeterNumber,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsumptionHistoryField.MeterNumber}
          meta={ConsumptionHistoryFieldMeta.MeterNumber}
          fieldConfig={fieldConfig}
          text={value?.MeterNumber}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionHistoryField.Quantity,
      { meta: ConsumptionHistoryFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ConsumptionHistoryField.Quantity}
          meta={ConsumptionHistoryFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionHistoryField.Amount,
      { meta: ConsumptionHistoryFieldMeta.Amount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ConsumptionHistoryField.Amount}
          meta={ConsumptionHistoryFieldMeta.Amount}
          fieldConfig={fieldConfig}
          amount={value?.Amount}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionHistoryField.ConsumptionLevelCode,
      { meta: ConsumptionHistoryFieldMeta.ConsumptionLevelCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ConsumptionHistoryField.ConsumptionLevelCode}
          meta={ConsumptionHistoryFieldMeta.ConsumptionLevelCode}
          fieldConfig={fieldConfig}
          code={value?.ConsumptionLevelCode}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionHistoryField.ConsumptionLevel,
      { meta: ConsumptionHistoryFieldMeta.ConsumptionLevel,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsumptionHistoryField.ConsumptionLevel}
          meta={ConsumptionHistoryFieldMeta.ConsumptionLevel}
          fieldConfig={fieldConfig}
          text={value?.ConsumptionLevel}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionHistoryField.Description,
      { meta: ConsumptionHistoryFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsumptionHistoryField.Description}
          meta={ConsumptionHistoryFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionHistoryField.Period,
      { meta: ConsumptionHistoryFieldMeta.Period,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ConsumptionHistoryField.Period}
          meta={ConsumptionHistoryFieldMeta.Period}
          fieldConfig={fieldConfig}
          period={value?.Period}
          renderContext={renderContext}
        />}
    ]
]) 

export function ConsumptionHistoryDisplay<TFieldMeta>({ meta, fieldConfig, consumptionHistory, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ConsumptionHistoryTypeName,
    meta,
    fieldConfig,
    consumptionHistory,
    renderContext,
    ConsumptionHistorySubElementsMap,
  )
}
