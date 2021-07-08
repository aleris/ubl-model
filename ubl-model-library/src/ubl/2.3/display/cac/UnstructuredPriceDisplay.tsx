import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { UnstructuredPrice } from  '../../model/cac/UnstructuredPrice'
import { UnstructuredPriceField, UnstructuredPriceFieldMeta, UnstructuredPriceTypeName } from  '../../meta/cac/UnstructuredPriceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<UnstructuredPrice, void>
  unstructuredPrice: UnstructuredPrice[] | undefined
  renderContext: RenderContext
}

export const UnstructuredPriceSubElementsMap: SubElementsTemplatesMap<UnstructuredPriceField, UnstructuredPrice, void> = new Map([
    [
      UnstructuredPriceField.UBLExtensions,
      { meta: UnstructuredPriceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={UnstructuredPriceField.UBLExtensions}
          meta={UnstructuredPriceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      UnstructuredPriceField.PriceAmount,
      { meta: UnstructuredPriceFieldMeta.PriceAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={UnstructuredPriceField.PriceAmount}
          meta={UnstructuredPriceFieldMeta.PriceAmount}
          fieldConfig={fieldConfig}
          amount={value?.PriceAmount}
          renderContext={renderContext}
        />}
    ],

    [
      UnstructuredPriceField.TimeAmount,
      { meta: UnstructuredPriceFieldMeta.TimeAmount,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={UnstructuredPriceField.TimeAmount}
          meta={UnstructuredPriceFieldMeta.TimeAmount}
          fieldConfig={fieldConfig}
          text={value?.TimeAmount}
          renderContext={renderContext}
        />}
    ]
]) 

export function UnstructuredPriceDisplay<TFieldMeta>({ meta, fieldConfig, unstructuredPrice, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    UnstructuredPriceTypeName,
    meta,
    fieldConfig,
    unstructuredPrice,
    renderContext,
    UnstructuredPriceSubElementsMap,
  )
}
