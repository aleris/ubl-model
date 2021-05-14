import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: SalesItem
  meta: FieldMeta<T>
}

export default function SalesItemDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-SalesItem ubl-SalesItemType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-SalesItem ubl-UBLExtensions"
          meta={SalesItemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={SalesItemFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SalesItem ubl-Quantity"
          meta={SalesItemFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Quantity"
              value={itemValue}
              meta={SalesItemFieldMeta.Quantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SalesItem ubl-ActivityProperty"
          meta={SalesItemFieldMeta.ActivityProperty} 
          value={value.ActivityProperty}
          itemDisplay={ (itemValue: ActivityProperty, key: string | number) =>
            <ActivityPropertyDisplay
              key={key}
              label="Activity Property"
              value={itemValue}
              meta={SalesItemFieldMeta.ActivityProperty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SalesItem ubl-Price ubl-TaxExclusivePrice"
          meta={SalesItemFieldMeta.TaxExclusivePrice} 
          value={value.TaxExclusivePrice}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay
              key={key}
              label="Tax Exclusive Price"
              value={itemValue}
              meta={SalesItemFieldMeta.TaxExclusivePrice}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SalesItem ubl-Price ubl-TaxInclusivePrice"
          meta={SalesItemFieldMeta.TaxInclusivePrice} 
          value={value.TaxInclusivePrice}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay
              key={key}
              label="Tax Inclusive Price"
              value={itemValue}
              meta={SalesItemFieldMeta.TaxInclusivePrice}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SalesItem ubl-Item"
          meta={SalesItemFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Item"
              value={itemValue}
              meta={SalesItemFieldMeta.Item}
            />
          }
        />
        </div>
    </div>
  )
}
