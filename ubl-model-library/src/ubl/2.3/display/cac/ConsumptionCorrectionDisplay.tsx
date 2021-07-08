import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ConsumptionCorrection } from  '../../model/cac/ConsumptionCorrection'
import { ConsumptionCorrectionField, ConsumptionCorrectionFieldMeta, ConsumptionCorrectionTypeName } from  '../../meta/cac/ConsumptionCorrectionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ConsumptionCorrection, void>
  consumptionCorrection: ConsumptionCorrection[] | undefined
  renderContext: RenderContext
}

export const ConsumptionCorrectionSubElementsMap: SubElementsTemplatesMap<ConsumptionCorrectionField, ConsumptionCorrection, void> = new Map([
    [
      ConsumptionCorrectionField.UBLExtensions,
      { meta: ConsumptionCorrectionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ConsumptionCorrectionField.UBLExtensions}
          meta={ConsumptionCorrectionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionCorrectionField.CorrectionType,
      { meta: ConsumptionCorrectionFieldMeta.CorrectionType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsumptionCorrectionField.CorrectionType}
          meta={ConsumptionCorrectionFieldMeta.CorrectionType}
          fieldConfig={fieldConfig}
          text={value?.CorrectionType}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionCorrectionField.CorrectionTypeCode,
      { meta: ConsumptionCorrectionFieldMeta.CorrectionTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ConsumptionCorrectionField.CorrectionTypeCode}
          meta={ConsumptionCorrectionFieldMeta.CorrectionTypeCode}
          fieldConfig={fieldConfig}
          code={value?.CorrectionTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionCorrectionField.MeterNumber,
      { meta: ConsumptionCorrectionFieldMeta.MeterNumber,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsumptionCorrectionField.MeterNumber}
          meta={ConsumptionCorrectionFieldMeta.MeterNumber}
          fieldConfig={fieldConfig}
          text={value?.MeterNumber}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionCorrectionField.GasPressureQuantity,
      { meta: ConsumptionCorrectionFieldMeta.GasPressureQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ConsumptionCorrectionField.GasPressureQuantity}
          meta={ConsumptionCorrectionFieldMeta.GasPressureQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.GasPressureQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionCorrectionField.ActualTemperatureReductionQuantity,
      { meta: ConsumptionCorrectionFieldMeta.ActualTemperatureReductionQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ConsumptionCorrectionField.ActualTemperatureReductionQuantity}
          meta={ConsumptionCorrectionFieldMeta.ActualTemperatureReductionQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ActualTemperatureReductionQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionCorrectionField.NormalTemperatureReductionQuantity,
      { meta: ConsumptionCorrectionFieldMeta.NormalTemperatureReductionQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ConsumptionCorrectionField.NormalTemperatureReductionQuantity}
          meta={ConsumptionCorrectionFieldMeta.NormalTemperatureReductionQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.NormalTemperatureReductionQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionCorrectionField.DifferenceTemperatureReductionQuantity,
      { meta: ConsumptionCorrectionFieldMeta.DifferenceTemperatureReductionQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ConsumptionCorrectionField.DifferenceTemperatureReductionQuantity}
          meta={ConsumptionCorrectionFieldMeta.DifferenceTemperatureReductionQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.DifferenceTemperatureReductionQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionCorrectionField.Description,
      { meta: ConsumptionCorrectionFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsumptionCorrectionField.Description}
          meta={ConsumptionCorrectionFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionCorrectionField.CorrectionUnitAmount,
      { meta: ConsumptionCorrectionFieldMeta.CorrectionUnitAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ConsumptionCorrectionField.CorrectionUnitAmount}
          meta={ConsumptionCorrectionFieldMeta.CorrectionUnitAmount}
          fieldConfig={fieldConfig}
          amount={value?.CorrectionUnitAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionCorrectionField.ConsumptionEnergyQuantity,
      { meta: ConsumptionCorrectionFieldMeta.ConsumptionEnergyQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ConsumptionCorrectionField.ConsumptionEnergyQuantity}
          meta={ConsumptionCorrectionFieldMeta.ConsumptionEnergyQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ConsumptionEnergyQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionCorrectionField.ConsumptionWaterQuantity,
      { meta: ConsumptionCorrectionFieldMeta.ConsumptionWaterQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ConsumptionCorrectionField.ConsumptionWaterQuantity}
          meta={ConsumptionCorrectionFieldMeta.ConsumptionWaterQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ConsumptionWaterQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionCorrectionField.CorrectionAmount,
      { meta: ConsumptionCorrectionFieldMeta.CorrectionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ConsumptionCorrectionField.CorrectionAmount}
          meta={ConsumptionCorrectionFieldMeta.CorrectionAmount}
          fieldConfig={fieldConfig}
          amount={value?.CorrectionAmount}
          renderContext={renderContext}
        />}
    ]
]) 

export function ConsumptionCorrectionDisplay<TFieldMeta>({ meta, fieldConfig, consumptionCorrection, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ConsumptionCorrectionTypeName,
    meta,
    fieldConfig,
    consumptionCorrection,
    renderContext,
    ConsumptionCorrectionSubElementsMap,
  )
}
