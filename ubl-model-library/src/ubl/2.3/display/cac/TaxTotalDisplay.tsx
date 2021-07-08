import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TaxTotal } from  '../../model/cac/TaxTotal'
import { TaxTotalField, TaxTotalFieldMeta, TaxTotalTypeName } from  '../../meta/cac/TaxTotalMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { TaxSubtotalDisplay } from './TaxSubtotalDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TaxTotal, void>
  taxTotal: TaxTotal[] | undefined
  renderContext: RenderContext
}

export const TaxTotalSubElementsMap: SubElementsTemplatesMap<TaxTotalField, TaxTotal, void> = new Map([
    [
      TaxTotalField.UBLExtensions,
      { meta: TaxTotalFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TaxTotalField.UBLExtensions}
          meta={TaxTotalFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TaxTotalField.TaxAmount,
      { meta: TaxTotalFieldMeta.TaxAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TaxTotalField.TaxAmount}
          meta={TaxTotalFieldMeta.TaxAmount}
          fieldConfig={fieldConfig}
          amount={value?.TaxAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TaxTotalField.CalculationSequenceNumeric,
      { meta: TaxTotalFieldMeta.CalculationSequenceNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={TaxTotalField.CalculationSequenceNumeric}
          meta={TaxTotalFieldMeta.CalculationSequenceNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.CalculationSequenceNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      TaxTotalField.RoundingAmount,
      { meta: TaxTotalFieldMeta.RoundingAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TaxTotalField.RoundingAmount}
          meta={TaxTotalFieldMeta.RoundingAmount}
          fieldConfig={fieldConfig}
          amount={value?.RoundingAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TaxTotalField.TaxEvidenceIndicator,
      { meta: TaxTotalFieldMeta.TaxEvidenceIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TaxTotalField.TaxEvidenceIndicator}
          meta={TaxTotalFieldMeta.TaxEvidenceIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.TaxEvidenceIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TaxTotalField.TaxIncludedIndicator,
      { meta: TaxTotalFieldMeta.TaxIncludedIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TaxTotalField.TaxIncludedIndicator}
          meta={TaxTotalFieldMeta.TaxIncludedIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.TaxIncludedIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TaxTotalField.TaxSubtotal,
      { meta: TaxTotalFieldMeta.TaxSubtotal,
        template: ({value, renderContext, fieldConfig}) => <TaxSubtotalDisplay
          key={TaxTotalField.TaxSubtotal}
          meta={TaxTotalFieldMeta.TaxSubtotal}
          fieldConfig={fieldConfig}
          taxSubtotal={value?.TaxSubtotal}
          renderContext={renderContext}
        />}
    ]
]) 

export function TaxTotalDisplay<TFieldMeta>({ meta, fieldConfig, taxTotal, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TaxTotalTypeName,
    meta,
    fieldConfig,
    taxTotal,
    renderContext,
    TaxTotalSubElementsMap,
  )
}
