import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PricingReference } from  '../../model/cac/PricingReference'
import { PricingReferenceFieldMeta } from  '../../meta/cac/PricingReferenceMeta'
import ItemLocationQuantityDisplay from './ItemLocationQuantityDisplay'
import { ItemLocationQuantity } from '../../model/cac/ItemLocationQuantity'
import PriceDisplay from './PriceDisplay'
import { Price } from '../../model/cac/Price'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: PricingReference | undefined
  meta: FieldMeta<T>
}

export default function PricingReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-PricingReference">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PricingReferenceFieldMeta.UBLExtensions}
          />

          <ItemLocationQuantityDisplay
            label="Original Item Location Quantity"
            value={value.OriginalItemLocationQuantity?.[0]}
            meta={PricingReferenceFieldMeta.OriginalItemLocationQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Price ubl-AlternativeConditionPrice"
            label="Alternative Condition Price"
            items={value.AlternativeConditionPrice}
            meta={PricingReferenceFieldMeta.AlternativeConditionPrice} 
            itemDisplay={ (itemValue: Price, key: string | number) =>
              <PriceDisplay
                key={key}
                label="Alternative Condition Price"
                value={itemValue}
                meta={PricingReferenceFieldMeta.AlternativeConditionPrice}
              />
            }
          />
        </div>
    </div>
  )
}
