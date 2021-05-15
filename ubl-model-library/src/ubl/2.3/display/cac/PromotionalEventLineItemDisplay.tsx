import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: PromotionalEventLineItem | undefined
  meta: FieldMeta<T>
}

export default function PromotionalEventLineItemDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-PromotionalEventLineItem">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PromotionalEventLineItemFieldMeta.UBLExtensions}
          />

          <AmountDisplay
            label="Amount"
            value={value.Amount?.[0]}
            meta={PromotionalEventLineItemFieldMeta.Amount}
          />

          <EventLineItemDisplay
            label="Event Line Item"
            value={value.EventLineItem?.[0]}
            meta={PromotionalEventLineItemFieldMeta.EventLineItem}
          />
        </div>
    </div>
  )
}
