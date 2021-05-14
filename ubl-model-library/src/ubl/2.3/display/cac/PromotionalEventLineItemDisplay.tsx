import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PromotionalEventLineItem } from  '../../model/cac/PromotionalEventLineItem'
import { PromotionalEventLineItemFieldMeta } from  '../../meta/cac/PromotionalEventLineItemMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import EventLineItemDisplay from './EventLineItemDisplay'
import { EventLineItem } from '../../model/cac/EventLineItem'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: PromotionalEventLineItem
  meta: FieldMeta<T>
}

export default function PromotionalEventLineItemDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-PromotionalEventLineItem ubl-PromotionalEventLineItemType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-PromotionalEventLineItem ubl-UBLExtensions"
          meta={PromotionalEventLineItemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PromotionalEventLineItemFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PromotionalEventLineItem ubl-Amount"
          meta={PromotionalEventLineItemFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Amount"
              value={itemValue}
              meta={PromotionalEventLineItemFieldMeta.Amount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PromotionalEventLineItem ubl-EventLineItem"
          meta={PromotionalEventLineItemFieldMeta.EventLineItem} 
          value={value.EventLineItem}
          itemDisplay={ (itemValue: EventLineItem, key: string | number) =>
            <EventLineItemDisplay
              key={key}
              label="Event Line Item"
              value={itemValue}
              meta={PromotionalEventLineItemFieldMeta.EventLineItem}
            />
          }
        />
        </div>
    </div>
  )
}
