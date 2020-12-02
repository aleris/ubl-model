import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: SalesItem
  meta: FieldMeta<T>
}

export default function SalesItemDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={SalesItemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={SalesItemFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SalesItemFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={SalesItemFieldMeta.Quantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SalesItemFieldMeta.ActivityProperty} 
          value={value.ActivityProperty}
          itemDisplay={ (itemValue: ActivityProperty, key: string | number) =>
            <ActivityPropertyDisplay key={key} meta={SalesItemFieldMeta.ActivityProperty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SalesItemFieldMeta.TaxExclusivePrice} 
          value={value.TaxExclusivePrice}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay key={key} meta={SalesItemFieldMeta.TaxExclusivePrice} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SalesItemFieldMeta.TaxInclusivePrice} 
          value={value.TaxInclusivePrice}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay key={key} meta={SalesItemFieldMeta.TaxInclusivePrice} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SalesItemFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={SalesItemFieldMeta.Item} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
