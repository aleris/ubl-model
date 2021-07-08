import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExchangeRate } from  '../../model/cac/ExchangeRate'
import { ExchangeRateField, ExchangeRateFieldMeta, ExchangeRateTypeName } from  '../../meta/cac/ExchangeRateMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContractDisplay } from './ContractDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ExchangeRate, void>
  exchangeRate: ExchangeRate[] | undefined
  renderContext: RenderContext
}

export const ExchangeRateSubElementsMap: SubElementsTemplatesMap<ExchangeRateField, ExchangeRate, void> = new Map([
    [
      ExchangeRateField.UBLExtensions,
      { meta: ExchangeRateFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ExchangeRateField.UBLExtensions}
          meta={ExchangeRateFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ExchangeRateField.SourceCurrencyCode,
      { meta: ExchangeRateFieldMeta.SourceCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExchangeRateField.SourceCurrencyCode}
          meta={ExchangeRateFieldMeta.SourceCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.SourceCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExchangeRateField.SourceCurrencyBaseRate,
      { meta: ExchangeRateFieldMeta.SourceCurrencyBaseRate,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={ExchangeRateField.SourceCurrencyBaseRate}
          meta={ExchangeRateFieldMeta.SourceCurrencyBaseRate}
          fieldConfig={fieldConfig}
          numeric={value?.SourceCurrencyBaseRate}
          renderContext={renderContext}
        />}
    ],

    [
      ExchangeRateField.TargetCurrencyCode,
      { meta: ExchangeRateFieldMeta.TargetCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExchangeRateField.TargetCurrencyCode}
          meta={ExchangeRateFieldMeta.TargetCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.TargetCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExchangeRateField.TargetCurrencyBaseRate,
      { meta: ExchangeRateFieldMeta.TargetCurrencyBaseRate,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={ExchangeRateField.TargetCurrencyBaseRate}
          meta={ExchangeRateFieldMeta.TargetCurrencyBaseRate}
          fieldConfig={fieldConfig}
          numeric={value?.TargetCurrencyBaseRate}
          renderContext={renderContext}
        />}
    ],

    [
      ExchangeRateField.ExchangeMarketID,
      { meta: ExchangeRateFieldMeta.ExchangeMarketID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExchangeRateField.ExchangeMarketID}
          meta={ExchangeRateFieldMeta.ExchangeMarketID}
          fieldConfig={fieldConfig}
          identifier={value?.ExchangeMarketID}
          renderContext={renderContext}
        />}
    ],

    [
      ExchangeRateField.CalculationRate,
      { meta: ExchangeRateFieldMeta.CalculationRate,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={ExchangeRateField.CalculationRate}
          meta={ExchangeRateFieldMeta.CalculationRate}
          fieldConfig={fieldConfig}
          numeric={value?.CalculationRate}
          renderContext={renderContext}
        />}
    ],

    [
      ExchangeRateField.MathematicOperatorCode,
      { meta: ExchangeRateFieldMeta.MathematicOperatorCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExchangeRateField.MathematicOperatorCode}
          meta={ExchangeRateFieldMeta.MathematicOperatorCode}
          fieldConfig={fieldConfig}
          code={value?.MathematicOperatorCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExchangeRateField.Date,
      { meta: ExchangeRateFieldMeta.Date,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ExchangeRateField.Date}
          meta={ExchangeRateFieldMeta.Date}
          fieldConfig={fieldConfig}
          date={value?.Date}
          renderContext={renderContext}
        />}
    ],

    [
      ExchangeRateField.ForeignExchangeContract,
      { meta: ExchangeRateFieldMeta.ForeignExchangeContract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={ExchangeRateField.ForeignExchangeContract}
          meta={ExchangeRateFieldMeta.ForeignExchangeContract}
          fieldConfig={fieldConfig}
          contract={value?.ForeignExchangeContract}
          renderContext={renderContext}
        />}
    ]
]) 

export function ExchangeRateDisplay<TFieldMeta>({ meta, fieldConfig, exchangeRate, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ExchangeRateTypeName,
    meta,
    fieldConfig,
    exchangeRate,
    renderContext,
    ExchangeRateSubElementsMap,
  )
}
