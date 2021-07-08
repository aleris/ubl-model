import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { EnergyTaxReport } from  '../../model/cac/EnergyTaxReport'
import { EnergyTaxReportField, EnergyTaxReportFieldMeta, EnergyTaxReportTypeName } from  '../../meta/cac/EnergyTaxReportMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { TaxSchemeDisplay } from './TaxSchemeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<EnergyTaxReport, void>
  energyTaxReport: EnergyTaxReport[] | undefined
  renderContext: RenderContext
}

export const EnergyTaxReportSubElementsMap: SubElementsTemplatesMap<EnergyTaxReportField, EnergyTaxReport, void> = new Map([
    [
      EnergyTaxReportField.UBLExtensions,
      { meta: EnergyTaxReportFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EnergyTaxReportField.UBLExtensions}
          meta={EnergyTaxReportFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EnergyTaxReportField.TaxEnergyAmount,
      { meta: EnergyTaxReportFieldMeta.TaxEnergyAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={EnergyTaxReportField.TaxEnergyAmount}
          meta={EnergyTaxReportFieldMeta.TaxEnergyAmount}
          fieldConfig={fieldConfig}
          amount={value?.TaxEnergyAmount}
          renderContext={renderContext}
        />}
    ],

    [
      EnergyTaxReportField.TaxEnergyOnAccountAmount,
      { meta: EnergyTaxReportFieldMeta.TaxEnergyOnAccountAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={EnergyTaxReportField.TaxEnergyOnAccountAmount}
          meta={EnergyTaxReportFieldMeta.TaxEnergyOnAccountAmount}
          fieldConfig={fieldConfig}
          amount={value?.TaxEnergyOnAccountAmount}
          renderContext={renderContext}
        />}
    ],

    [
      EnergyTaxReportField.TaxEnergyBalanceAmount,
      { meta: EnergyTaxReportFieldMeta.TaxEnergyBalanceAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={EnergyTaxReportField.TaxEnergyBalanceAmount}
          meta={EnergyTaxReportFieldMeta.TaxEnergyBalanceAmount}
          fieldConfig={fieldConfig}
          amount={value?.TaxEnergyBalanceAmount}
          renderContext={renderContext}
        />}
    ],

    [
      EnergyTaxReportField.TaxScheme,
      { meta: EnergyTaxReportFieldMeta.TaxScheme,
        template: ({value, renderContext, fieldConfig}) => <TaxSchemeDisplay
          key={EnergyTaxReportField.TaxScheme}
          meta={EnergyTaxReportFieldMeta.TaxScheme}
          fieldConfig={fieldConfig}
          taxScheme={value?.TaxScheme}
          renderContext={renderContext}
        />}
    ]
]) 

export function EnergyTaxReportDisplay<TFieldMeta>({ meta, fieldConfig, energyTaxReport, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EnergyTaxReportTypeName,
    meta,
    fieldConfig,
    energyTaxReport,
    renderContext,
    EnergyTaxReportSubElementsMap,
  )
}
