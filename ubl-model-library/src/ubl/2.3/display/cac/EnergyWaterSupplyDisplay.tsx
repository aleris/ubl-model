import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { EnergyWaterSupply } from  '../../model/cac/EnergyWaterSupply'
import { EnergyWaterSupplyField, EnergyWaterSupplyFieldMeta, EnergyWaterSupplyTypeName } from  '../../meta/cac/EnergyWaterSupplyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ConsumptionAverageDisplay } from './ConsumptionAverageDisplay'
import { ConsumptionCorrectionDisplay } from './ConsumptionCorrectionDisplay'
import { ConsumptionReportDisplay } from './ConsumptionReportDisplay'
import { EnergyTaxReportDisplay } from './EnergyTaxReportDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<EnergyWaterSupply, void>
  energyWaterSupply: EnergyWaterSupply[] | undefined
  renderContext: RenderContext
}

export const EnergyWaterSupplySubElementsMap: SubElementsTemplatesMap<EnergyWaterSupplyField, EnergyWaterSupply, void> = new Map([
    [
      EnergyWaterSupplyField.UBLExtensions,
      { meta: EnergyWaterSupplyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EnergyWaterSupplyField.UBLExtensions}
          meta={EnergyWaterSupplyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EnergyWaterSupplyField.ConsumptionReport,
      { meta: EnergyWaterSupplyFieldMeta.ConsumptionReport,
        template: ({value, renderContext, fieldConfig}) => <ConsumptionReportDisplay
          key={EnergyWaterSupplyField.ConsumptionReport}
          meta={EnergyWaterSupplyFieldMeta.ConsumptionReport}
          fieldConfig={fieldConfig}
          consumptionReport={value?.ConsumptionReport}
          renderContext={renderContext}
        />}
    ],

    [
      EnergyWaterSupplyField.EnergyTaxReport,
      { meta: EnergyWaterSupplyFieldMeta.EnergyTaxReport,
        template: ({value, renderContext, fieldConfig}) => <EnergyTaxReportDisplay
          key={EnergyWaterSupplyField.EnergyTaxReport}
          meta={EnergyWaterSupplyFieldMeta.EnergyTaxReport}
          fieldConfig={fieldConfig}
          energyTaxReport={value?.EnergyTaxReport}
          renderContext={renderContext}
        />}
    ],

    [
      EnergyWaterSupplyField.ConsumptionAverage,
      { meta: EnergyWaterSupplyFieldMeta.ConsumptionAverage,
        template: ({value, renderContext, fieldConfig}) => <ConsumptionAverageDisplay
          key={EnergyWaterSupplyField.ConsumptionAverage}
          meta={EnergyWaterSupplyFieldMeta.ConsumptionAverage}
          fieldConfig={fieldConfig}
          consumptionAverage={value?.ConsumptionAverage}
          renderContext={renderContext}
        />}
    ],

    [
      EnergyWaterSupplyField.EnergyWaterConsumptionCorrection,
      { meta: EnergyWaterSupplyFieldMeta.EnergyWaterConsumptionCorrection,
        template: ({value, renderContext, fieldConfig}) => <ConsumptionCorrectionDisplay
          key={EnergyWaterSupplyField.EnergyWaterConsumptionCorrection}
          meta={EnergyWaterSupplyFieldMeta.EnergyWaterConsumptionCorrection}
          fieldConfig={fieldConfig}
          consumptionCorrection={value?.EnergyWaterConsumptionCorrection}
          renderContext={renderContext}
        />}
    ]
]) 

export function EnergyWaterSupplyDisplay<TFieldMeta>({ meta, fieldConfig, energyWaterSupply, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EnergyWaterSupplyTypeName,
    meta,
    fieldConfig,
    energyWaterSupply,
    renderContext,
    EnergyWaterSupplySubElementsMap,
  )
}
