import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: PricingReference
  meta: FieldMeta<T>
}

export default function PricingReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-PricingReference ubl-PricingReferenceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-PricingReference ubl-UBLExtensions"
          meta={PricingReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PricingReferenceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PricingReference ubl-ItemLocationQuantity ubl-OriginalItemLocationQuantity"
          meta={PricingReferenceFieldMeta.OriginalItemLocationQuantity} 
          value={value.OriginalItemLocationQuantity}
          itemDisplay={ (itemValue: ItemLocationQuantity, key: string | number) =>
            <ItemLocationQuantityDisplay
              key={key}
              label="Original Item Location Quantity"
              value={itemValue}
              meta={PricingReferenceFieldMeta.OriginalItemLocationQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-PricingReference ubl-Price ubl-AlternativeConditionPrice"
          meta={PricingReferenceFieldMeta.AlternativeConditionPrice} 
          value={value.AlternativeConditionPrice}
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
