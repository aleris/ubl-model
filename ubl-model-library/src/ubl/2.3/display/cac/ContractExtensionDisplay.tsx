import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractExtension } from  '../../model/cac/ContractExtension'
import { ContractExtensionField, ContractExtensionFieldMeta, ContractExtensionTypeName } from  '../../meta/cac/ContractExtensionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { RenewalDisplay } from './RenewalDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ContractExtension, void>
  contractExtension: ContractExtension[] | undefined
  renderContext: RenderContext
}

export const ContractExtensionSubElementsMap: SubElementsTemplatesMap<ContractExtensionField, ContractExtension, void> = new Map([
    [
      ContractExtensionField.UBLExtensions,
      { meta: ContractExtensionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ContractExtensionField.UBLExtensions}
          meta={ContractExtensionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ContractExtensionField.OptionsDescription,
      { meta: ContractExtensionFieldMeta.OptionsDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContractExtensionField.OptionsDescription}
          meta={ContractExtensionFieldMeta.OptionsDescription}
          fieldConfig={fieldConfig}
          text={value?.OptionsDescription}
          renderContext={renderContext}
        />}
    ],

    [
      ContractExtensionField.MinimumNumberNumeric,
      { meta: ContractExtensionFieldMeta.MinimumNumberNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={ContractExtensionField.MinimumNumberNumeric}
          meta={ContractExtensionFieldMeta.MinimumNumberNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.MinimumNumberNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      ContractExtensionField.MaximumNumberNumeric,
      { meta: ContractExtensionFieldMeta.MaximumNumberNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={ContractExtensionField.MaximumNumberNumeric}
          meta={ContractExtensionFieldMeta.MaximumNumberNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.MaximumNumberNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      ContractExtensionField.RenewalsIndicator,
      { meta: ContractExtensionFieldMeta.RenewalsIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ContractExtensionField.RenewalsIndicator}
          meta={ContractExtensionFieldMeta.RenewalsIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.RenewalsIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ContractExtensionField.OptionValidityPeriod,
      { meta: ContractExtensionFieldMeta.OptionValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ContractExtensionField.OptionValidityPeriod}
          meta={ContractExtensionFieldMeta.OptionValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.OptionValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ContractExtensionField.Renewal,
      { meta: ContractExtensionFieldMeta.Renewal,
        template: ({value, renderContext, fieldConfig}) => <RenewalDisplay
          key={ContractExtensionField.Renewal}
          meta={ContractExtensionFieldMeta.Renewal}
          fieldConfig={fieldConfig}
          renewal={value?.Renewal}
          renderContext={renderContext}
        />}
    ]
]) 

export function ContractExtensionDisplay<TFieldMeta>({ meta, fieldConfig, contractExtension, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ContractExtensionTypeName,
    meta,
    fieldConfig,
    contractExtension,
    renderContext,
    ContractExtensionSubElementsMap,
  )
}
