import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ConsumptionAverage } from  '../../model/cac/ConsumptionAverage'
import { ConsumptionAverageField, ConsumptionAverageFieldMeta, ConsumptionAverageTypeName } from  '../../meta/cac/ConsumptionAverageMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ConsumptionAverage, void>
  consumptionAverage: ConsumptionAverage[] | undefined
  renderContext: RenderContext
}

export const ConsumptionAverageSubElementsMap: SubElementsTemplatesMap<ConsumptionAverageField, ConsumptionAverage, void> = new Map([
    [
      ConsumptionAverageField.UBLExtensions,
      { meta: ConsumptionAverageFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ConsumptionAverageField.UBLExtensions}
          meta={ConsumptionAverageFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionAverageField.AverageAmount,
      { meta: ConsumptionAverageFieldMeta.AverageAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ConsumptionAverageField.AverageAmount}
          meta={ConsumptionAverageFieldMeta.AverageAmount}
          fieldConfig={fieldConfig}
          amount={value?.AverageAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionAverageField.Description,
      { meta: ConsumptionAverageFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsumptionAverageField.Description}
          meta={ConsumptionAverageFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ]
]) 

export function ConsumptionAverageDisplay<TFieldMeta>({ meta, fieldConfig, consumptionAverage, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ConsumptionAverageTypeName,
    meta,
    fieldConfig,
    consumptionAverage,
    renderContext,
    ConsumptionAverageSubElementsMap,
  )
}
