import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Consumption } from  '../../model/cac/Consumption'
import { ConsumptionField, ConsumptionFieldMeta, ConsumptionTypeName } from  '../../meta/cac/ConsumptionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from './AllowanceChargeDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { EnergyWaterSupplyDisplay } from './EnergyWaterSupplyDisplay'
import { MonetaryTotalDisplay } from './MonetaryTotalDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { TaxTotalDisplay } from './TaxTotalDisplay'
import { TelecommunicationsSupplyDisplay } from './TelecommunicationsSupplyDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Consumption, void>
  consumption: Consumption[] | undefined
  renderContext: RenderContext
}

export const ConsumptionSubElementsMap: SubElementsTemplatesMap<ConsumptionField, Consumption, void> = new Map([
    [
      ConsumptionField.UBLExtensions,
      { meta: ConsumptionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ConsumptionField.UBLExtensions}
          meta={ConsumptionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionField.UtilityStatementTypeCode,
      { meta: ConsumptionFieldMeta.UtilityStatementTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ConsumptionField.UtilityStatementTypeCode}
          meta={ConsumptionFieldMeta.UtilityStatementTypeCode}
          fieldConfig={fieldConfig}
          code={value?.UtilityStatementTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionField.MainPeriod,
      { meta: ConsumptionFieldMeta.MainPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ConsumptionField.MainPeriod}
          meta={ConsumptionFieldMeta.MainPeriod}
          fieldConfig={fieldConfig}
          period={value?.MainPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionField.AllowanceCharge,
      { meta: ConsumptionFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={ConsumptionField.AllowanceCharge}
          meta={ConsumptionFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionField.TaxTotal,
      { meta: ConsumptionFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={ConsumptionField.TaxTotal}
          meta={ConsumptionFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionField.EnergyWaterSupply,
      { meta: ConsumptionFieldMeta.EnergyWaterSupply,
        template: ({value, renderContext, fieldConfig}) => <EnergyWaterSupplyDisplay
          key={ConsumptionField.EnergyWaterSupply}
          meta={ConsumptionFieldMeta.EnergyWaterSupply}
          fieldConfig={fieldConfig}
          energyWaterSupply={value?.EnergyWaterSupply}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionField.TelecommunicationsSupply,
      { meta: ConsumptionFieldMeta.TelecommunicationsSupply,
        template: ({value, renderContext, fieldConfig}) => <TelecommunicationsSupplyDisplay
          key={ConsumptionField.TelecommunicationsSupply}
          meta={ConsumptionFieldMeta.TelecommunicationsSupply}
          fieldConfig={fieldConfig}
          telecommunicationsSupply={value?.TelecommunicationsSupply}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionField.LegalMonetaryTotal,
      { meta: ConsumptionFieldMeta.LegalMonetaryTotal,
        template: ({value, renderContext, fieldConfig}) => <MonetaryTotalDisplay
          key={ConsumptionField.LegalMonetaryTotal}
          meta={ConsumptionFieldMeta.LegalMonetaryTotal}
          fieldConfig={fieldConfig}
          monetaryTotal={value?.LegalMonetaryTotal}
          renderContext={renderContext}
        />}
    ]
]) 

export function ConsumptionDisplay<TFieldMeta>({ meta, fieldConfig, consumption, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ConsumptionTypeName,
    meta,
    fieldConfig,
    consumption,
    renderContext,
    ConsumptionSubElementsMap,
  )
}
