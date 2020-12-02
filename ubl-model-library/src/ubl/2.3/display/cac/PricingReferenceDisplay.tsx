import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PricingReference } from  '../../model/cac/PricingReference'
import { PricingReferenceFieldMeta } from  '../../meta/cac/PricingReferenceMeta'
import ItemLocationQuantityDisplay from './ItemLocationQuantityDisplay'
import { ItemLocationQuantity } from '../../model/cac/ItemLocationQuantity'
import PriceDisplay from './PriceDisplay'
import { Price } from '../../model/cac/Price'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: PricingReference
  meta: FieldMeta<T>
}

export default function PricingReferenceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PricingReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PricingReferenceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PricingReferenceFieldMeta.OriginalItemLocationQuantity} 
          value={value.OriginalItemLocationQuantity}
          itemDisplay={ (itemValue: ItemLocationQuantity, key: string | number) =>
            <ItemLocationQuantityDisplay key={key} meta={PricingReferenceFieldMeta.OriginalItemLocationQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PricingReferenceFieldMeta.AlternativeConditionPrice} 
          value={value.AlternativeConditionPrice}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay key={key} meta={PricingReferenceFieldMeta.AlternativeConditionPrice} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
