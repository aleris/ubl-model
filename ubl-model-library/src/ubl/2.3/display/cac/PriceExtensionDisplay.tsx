import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PriceExtension } from  '../../model/cac/PriceExtension'
import { PriceExtensionField, PriceExtensionFieldMeta, PriceExtensionTypeName } from  '../../meta/cac/PriceExtensionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { TaxTotalDisplay } from './TaxTotalDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PriceExtension, void>
  priceExtension: PriceExtension[] | undefined
  renderContext: RenderContext
}

export const PriceExtensionSubElementsMap: SubElementsTemplatesMap<PriceExtensionField, PriceExtension, void> = new Map([
    [
      PriceExtensionField.UBLExtensions,
      { meta: PriceExtensionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PriceExtensionField.UBLExtensions}
          meta={PriceExtensionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PriceExtensionField.Amount,
      { meta: PriceExtensionFieldMeta.Amount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={PriceExtensionField.Amount}
          meta={PriceExtensionFieldMeta.Amount}
          fieldConfig={fieldConfig}
          amount={value?.Amount}
          renderContext={renderContext}
        />}
    ],

    [
      PriceExtensionField.TaxTotal,
      { meta: PriceExtensionFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={PriceExtensionField.TaxTotal}
          meta={PriceExtensionFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ]
]) 

export function PriceExtensionDisplay<TFieldMeta>({ meta, fieldConfig, priceExtension, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PriceExtensionTypeName,
    meta,
    fieldConfig,
    priceExtension,
    renderContext,
    PriceExtensionSubElementsMap,
  )
}
