import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PromotionalEventLineItem } from  '../../model/cac/PromotionalEventLineItem'
import { PromotionalEventLineItemFieldMeta } from  '../../meta/cac/PromotionalEventLineItemMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import EventLineItemDisplay from './EventLineItemDisplay'
import { EventLineItem } from '../../model/cac/EventLineItem'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: PromotionalEventLineItem
  meta: FieldMeta<T>
}

export default function PromotionalEventLineItemDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PromotionalEventLineItemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PromotionalEventLineItemFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PromotionalEventLineItemFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={PromotionalEventLineItemFieldMeta.Amount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PromotionalEventLineItemFieldMeta.EventLineItem} 
          value={value.EventLineItem}
          itemDisplay={ (itemValue: EventLineItem, key: string | number) =>
            <EventLineItemDisplay key={key} meta={PromotionalEventLineItemFieldMeta.EventLineItem} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
