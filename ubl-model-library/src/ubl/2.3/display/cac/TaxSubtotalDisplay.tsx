import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TaxSubtotal } from  '../../model/cac/TaxSubtotal'
import { TaxSubtotalField, TaxSubtotalFieldMeta, TaxSubtotalTypeName } from  '../../meta/cac/TaxSubtotalMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { TaxCategoryDisplay } from './TaxCategoryDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TaxSubtotal, void>
  taxSubtotal: TaxSubtotal[] | undefined
  renderContext: RenderContext
}

export const TaxSubtotalSubElementsMap: SubElementsTemplatesMap<TaxSubtotalField, TaxSubtotal, void> = new Map([
    [
      TaxSubtotalField.UBLExtensions,
      { meta: TaxSubtotalFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TaxSubtotalField.UBLExtensions}
          meta={TaxSubtotalFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TaxSubtotalField.TaxableAmount,
      { meta: TaxSubtotalFieldMeta.TaxableAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TaxSubtotalField.TaxableAmount}
          meta={TaxSubtotalFieldMeta.TaxableAmount}
          fieldConfig={fieldConfig}
          amount={value?.TaxableAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TaxSubtotalField.TaxAmount,
      { meta: TaxSubtotalFieldMeta.TaxAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TaxSubtotalField.TaxAmount}
          meta={TaxSubtotalFieldMeta.TaxAmount}
          fieldConfig={fieldConfig}
          amount={value?.TaxAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TaxSubtotalField.CalculationSequenceNumeric,
      { meta: TaxSubtotalFieldMeta.CalculationSequenceNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={TaxSubtotalField.CalculationSequenceNumeric}
          meta={TaxSubtotalFieldMeta.CalculationSequenceNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.CalculationSequenceNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      TaxSubtotalField.TransactionCurrencyTaxAmount,
      { meta: TaxSubtotalFieldMeta.TransactionCurrencyTaxAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TaxSubtotalField.TransactionCurrencyTaxAmount}
          meta={TaxSubtotalFieldMeta.TransactionCurrencyTaxAmount}
          fieldConfig={fieldConfig}
          amount={value?.TransactionCurrencyTaxAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TaxSubtotalField.Percent,
      { meta: TaxSubtotalFieldMeta.Percent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={TaxSubtotalField.Percent}
          meta={TaxSubtotalFieldMeta.Percent}
          fieldConfig={fieldConfig}
          numeric={value?.Percent}
          renderContext={renderContext}
        />}
    ],

    [
      TaxSubtotalField.BaseUnitMeasure,
      { meta: TaxSubtotalFieldMeta.BaseUnitMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={TaxSubtotalField.BaseUnitMeasure}
          meta={TaxSubtotalFieldMeta.BaseUnitMeasure}
          fieldConfig={fieldConfig}
          measure={value?.BaseUnitMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      TaxSubtotalField.PerUnitAmount,
      { meta: TaxSubtotalFieldMeta.PerUnitAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TaxSubtotalField.PerUnitAmount}
          meta={TaxSubtotalFieldMeta.PerUnitAmount}
          fieldConfig={fieldConfig}
          amount={value?.PerUnitAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TaxSubtotalField.TierRange,
      { meta: TaxSubtotalFieldMeta.TierRange,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TaxSubtotalField.TierRange}
          meta={TaxSubtotalFieldMeta.TierRange}
          fieldConfig={fieldConfig}
          text={value?.TierRange}
          renderContext={renderContext}
        />}
    ],

    [
      TaxSubtotalField.TierRatePercent,
      { meta: TaxSubtotalFieldMeta.TierRatePercent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={TaxSubtotalField.TierRatePercent}
          meta={TaxSubtotalFieldMeta.TierRatePercent}
          fieldConfig={fieldConfig}
          numeric={value?.TierRatePercent}
          renderContext={renderContext}
        />}
    ],

    [
      TaxSubtotalField.TaxCategory,
      { meta: TaxSubtotalFieldMeta.TaxCategory,
        template: ({value, renderContext, fieldConfig}) => <TaxCategoryDisplay
          key={TaxSubtotalField.TaxCategory}
          meta={TaxSubtotalFieldMeta.TaxCategory}
          fieldConfig={fieldConfig}
          taxCategory={value?.TaxCategory}
          renderContext={renderContext}
        />}
    ]
]) 

export function TaxSubtotalDisplay<TFieldMeta>({ meta, fieldConfig, taxSubtotal, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TaxSubtotalTypeName,
    meta,
    fieldConfig,
    taxSubtotal,
    renderContext,
    TaxSubtotalSubElementsMap,
  )
}
