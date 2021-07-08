import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PricingReference } from  '../../model/cac/PricingReference'
import { PricingReferenceField, PricingReferenceFieldMeta, PricingReferenceTypeName } from  '../../meta/cac/PricingReferenceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ItemLocationQuantityDisplay } from './ItemLocationQuantityDisplay'
import { PriceDisplay } from './PriceDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PricingReference, void>
  pricingReference: PricingReference[] | undefined
  renderContext: RenderContext
}

export const PricingReferenceSubElementsMap: SubElementsTemplatesMap<PricingReferenceField, PricingReference, void> = new Map([
    [
      PricingReferenceField.UBLExtensions,
      { meta: PricingReferenceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PricingReferenceField.UBLExtensions}
          meta={PricingReferenceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PricingReferenceField.OriginalItemLocationQuantity,
      { meta: PricingReferenceFieldMeta.OriginalItemLocationQuantity,
        template: ({value, renderContext, fieldConfig}) => <ItemLocationQuantityDisplay
          key={PricingReferenceField.OriginalItemLocationQuantity}
          meta={PricingReferenceFieldMeta.OriginalItemLocationQuantity}
          fieldConfig={fieldConfig}
          itemLocationQuantity={value?.OriginalItemLocationQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      PricingReferenceField.AlternativeConditionPrice,
      { meta: PricingReferenceFieldMeta.AlternativeConditionPrice,
        template: ({value, renderContext, fieldConfig}) => <PriceDisplay
          key={PricingReferenceField.AlternativeConditionPrice}
          meta={PricingReferenceFieldMeta.AlternativeConditionPrice}
          fieldConfig={fieldConfig}
          price={value?.AlternativeConditionPrice}
          renderContext={renderContext}
        />}
    ]
]) 

export function PricingReferenceDisplay<TFieldMeta>({ meta, fieldConfig, pricingReference, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PricingReferenceTypeName,
    meta,
    fieldConfig,
    pricingReference,
    renderContext,
    PricingReferenceSubElementsMap,
  )
}
