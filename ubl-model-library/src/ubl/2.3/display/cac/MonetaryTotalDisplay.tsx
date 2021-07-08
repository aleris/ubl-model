import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { MonetaryTotal } from  '../../model/cac/MonetaryTotal'
import { MonetaryTotalField, MonetaryTotalFieldMeta, MonetaryTotalTypeName } from  '../../meta/cac/MonetaryTotalMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<MonetaryTotal, void>
  monetaryTotal: MonetaryTotal[] | undefined
  renderContext: RenderContext
}

export const MonetaryTotalSubElementsMap: SubElementsTemplatesMap<MonetaryTotalField, MonetaryTotal, void> = new Map([
    [
      MonetaryTotalField.UBLExtensions,
      { meta: MonetaryTotalFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={MonetaryTotalField.UBLExtensions}
          meta={MonetaryTotalFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      MonetaryTotalField.LineExtensionAmount,
      { meta: MonetaryTotalFieldMeta.LineExtensionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={MonetaryTotalField.LineExtensionAmount}
          meta={MonetaryTotalFieldMeta.LineExtensionAmount}
          fieldConfig={fieldConfig}
          amount={value?.LineExtensionAmount}
          renderContext={renderContext}
        />}
    ],

    [
      MonetaryTotalField.TaxExclusiveAmount,
      { meta: MonetaryTotalFieldMeta.TaxExclusiveAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={MonetaryTotalField.TaxExclusiveAmount}
          meta={MonetaryTotalFieldMeta.TaxExclusiveAmount}
          fieldConfig={fieldConfig}
          amount={value?.TaxExclusiveAmount}
          renderContext={renderContext}
        />}
    ],

    [
      MonetaryTotalField.TaxInclusiveAmount,
      { meta: MonetaryTotalFieldMeta.TaxInclusiveAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={MonetaryTotalField.TaxInclusiveAmount}
          meta={MonetaryTotalFieldMeta.TaxInclusiveAmount}
          fieldConfig={fieldConfig}
          amount={value?.TaxInclusiveAmount}
          renderContext={renderContext}
        />}
    ],

    [
      MonetaryTotalField.AllowanceTotalAmount,
      { meta: MonetaryTotalFieldMeta.AllowanceTotalAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={MonetaryTotalField.AllowanceTotalAmount}
          meta={MonetaryTotalFieldMeta.AllowanceTotalAmount}
          fieldConfig={fieldConfig}
          amount={value?.AllowanceTotalAmount}
          renderContext={renderContext}
        />}
    ],

    [
      MonetaryTotalField.ChargeTotalAmount,
      { meta: MonetaryTotalFieldMeta.ChargeTotalAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={MonetaryTotalField.ChargeTotalAmount}
          meta={MonetaryTotalFieldMeta.ChargeTotalAmount}
          fieldConfig={fieldConfig}
          amount={value?.ChargeTotalAmount}
          renderContext={renderContext}
        />}
    ],

    [
      MonetaryTotalField.WithholdingTaxTotalAmount,
      { meta: MonetaryTotalFieldMeta.WithholdingTaxTotalAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={MonetaryTotalField.WithholdingTaxTotalAmount}
          meta={MonetaryTotalFieldMeta.WithholdingTaxTotalAmount}
          fieldConfig={fieldConfig}
          amount={value?.WithholdingTaxTotalAmount}
          renderContext={renderContext}
        />}
    ],

    [
      MonetaryTotalField.PrepaidAmount,
      { meta: MonetaryTotalFieldMeta.PrepaidAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={MonetaryTotalField.PrepaidAmount}
          meta={MonetaryTotalFieldMeta.PrepaidAmount}
          fieldConfig={fieldConfig}
          amount={value?.PrepaidAmount}
          renderContext={renderContext}
        />}
    ],

    [
      MonetaryTotalField.PayableRoundingAmount,
      { meta: MonetaryTotalFieldMeta.PayableRoundingAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={MonetaryTotalField.PayableRoundingAmount}
          meta={MonetaryTotalFieldMeta.PayableRoundingAmount}
          fieldConfig={fieldConfig}
          amount={value?.PayableRoundingAmount}
          renderContext={renderContext}
        />}
    ],

    [
      MonetaryTotalField.PayableAmount,
      { meta: MonetaryTotalFieldMeta.PayableAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={MonetaryTotalField.PayableAmount}
          meta={MonetaryTotalFieldMeta.PayableAmount}
          fieldConfig={fieldConfig}
          amount={value?.PayableAmount}
          renderContext={renderContext}
        />}
    ],

    [
      MonetaryTotalField.PayableAlternativeAmount,
      { meta: MonetaryTotalFieldMeta.PayableAlternativeAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={MonetaryTotalField.PayableAlternativeAmount}
          meta={MonetaryTotalFieldMeta.PayableAlternativeAmount}
          fieldConfig={fieldConfig}
          amount={value?.PayableAlternativeAmount}
          renderContext={renderContext}
        />}
    ]
]) 

export function MonetaryTotalDisplay<TFieldMeta>({ meta, fieldConfig, monetaryTotal, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    MonetaryTotalTypeName,
    meta,
    fieldConfig,
    monetaryTotal,
    renderContext,
    MonetaryTotalSubElementsMap,
  )
}
