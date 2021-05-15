import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { SalesItem } from  '../../model/cac/SalesItem'
import { SalesItemFieldMeta } from  '../../meta/cac/SalesItemMeta'
import ActivityPropertyDisplay from './ActivityPropertyDisplay'
import { ActivityProperty } from '../../model/cac/ActivityProperty'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import PriceDisplay from './PriceDisplay'
import { Price } from '../../model/cac/Price'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: SalesItem | undefined
  meta: FieldMeta<T>
}

export default function SalesItemDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-SalesItem">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={SalesItemFieldMeta.UBLExtensions}
          />

          <QuantityDisplay
            label="Quantity"
            value={value.Quantity?.[0]}
            meta={SalesItemFieldMeta.Quantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ActivityProperty"
            label="Activity Property"
            items={value.ActivityProperty}
            meta={SalesItemFieldMeta.ActivityProperty} 
            itemDisplay={ (itemValue: ActivityProperty, key: string | number) =>
              <ActivityPropertyDisplay
                key={key}
                label="Activity Property"
                value={itemValue}
                meta={SalesItemFieldMeta.ActivityProperty}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Price ubl-TaxExclusivePrice"
            label="Tax Exclusive Price"
            items={value.TaxExclusivePrice}
            meta={SalesItemFieldMeta.TaxExclusivePrice} 
            itemDisplay={ (itemValue: Price, key: string | number) =>
              <PriceDisplay
                key={key}
                label="Tax Exclusive Price"
                value={itemValue}
                meta={SalesItemFieldMeta.TaxExclusivePrice}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Price ubl-TaxInclusivePrice"
            label="Tax Inclusive Price"
            items={value.TaxInclusivePrice}
            meta={SalesItemFieldMeta.TaxInclusivePrice} 
            itemDisplay={ (itemValue: Price, key: string | number) =>
              <PriceDisplay
                key={key}
                label="Tax Inclusive Price"
                value={itemValue}
                meta={SalesItemFieldMeta.TaxInclusivePrice}
              />
            }
          />

          <ItemDisplay
            label="Item"
            value={value.Item?.[0]}
            meta={SalesItemFieldMeta.Item}
          />
        </div>
    </div>
  )
}
